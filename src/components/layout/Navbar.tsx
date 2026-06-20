"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa, faBars, faPhone, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-gradient-to-r from-purple-800 via-purple-600 to-amber-500 text-white overflow-hidden animate-flash">
        <div className="flex animate-marquee whitespace-nowrap py-2 text-sm font-semibold tracking-wide">
          <span className="inline-block px-8">
            ✨ Luxury Spa Treatments Delivered to Your Door — Book Your Session Today! ✨
          </span>
          <span className="inline-block px-8">
            ✨ Luxury Spa Treatments Delivered to Your Door — Book Your Session Today! ✨
          </span>
        </div>
      </div>

      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav" : "bg-white/90"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <FontAwesomeIcon icon={faSpa} className="size-7 text-primary" />
              <span className="text-xl font-bold text-primary">GlowMobile</span>
              <span className="text-xs text-muted-foreground tracking-widest mt-1">SPA</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="inline-flex">
                <Button size="sm" className="gap-2">
                  <FontAwesomeIcon icon={faCalendarCheck} className="size-3" />
                  Book Now
                </Button>
              </Link>
            </div>

            {/* Mobile nav */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="md:hidden">
                <FontAwesomeIcon icon={faBars} className="size-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-64 pt-12">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link href="/contact" onClick={() => setOpen(false)} className="inline-flex">
                    <Button className="gap-2 w-full">
                      <FontAwesomeIcon icon={faCalendarCheck} className="size-3" />
                      Book Now
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
}
