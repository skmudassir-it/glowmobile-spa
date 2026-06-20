import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa, faPhone, faEnvelope, faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-purple-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FontAwesomeIcon icon={faSpa} className="size-6 text-purple-300" />
              <span className="text-xl font-bold">GlowMobile</span>
              <span className="text-xs text-purple-300 tracking-widest mt-1">SPA</span>
            </div>
            <p className="text-purple-200 text-sm leading-relaxed">
              Luxury spa treatments delivered to your home, office, or event. Relax — we come to you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-purple-200">
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/projects" className="hover:text-white transition-colors">Gallery</Link>
              <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-purple-200">
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="size-3" /> (555) 123-4567
              </span>
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="size-3" /> hello@glowmobilespa.com
              </span>
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="size-3" /> Serving Metro Area
              </span>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <div className="flex flex-col gap-2 text-sm text-purple-200">
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faClock} className="size-3" /> Mon–Fri: 9am – 7pm
              </span>
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faClock} className="size-3" /> Sat: 10am – 5pm
              </span>
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faClock} className="size-3" /> Sun: By Appointment
              </span>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-purple-300 hover:text-white transition-colors"><FontAwesomeIcon icon={faInstagram} className="size-5" /></a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors"><FontAwesomeIcon icon={faFacebook} className="size-5" /></a>
              <a href="#" className="text-purple-300 hover:text-white transition-colors"><FontAwesomeIcon icon={faTiktok} className="size-5" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-800 mt-10 pt-8 text-center text-sm text-purple-400">
          &copy; {new Date().getFullYear()} GlowMobile Spa. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
