"use client";

import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpa, faHandSparkles, faFaceSmile, faPersonBooth, faLeaf,
  faStar, faQuoteLeft, faCalendarCheck, faPhone, faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const services = [
  { title: "Swedish Massage", description: "Gentle, flowing strokes to melt away tension and promote deep relaxation.", icon: faHandSparkles, image: "/images/services/swedish-massage.jpg", features: ["60/90 min sessions", "Hot stone option", "Aromatherapy upgrade"] },
  { title: "Deep Tissue Massage", description: "Targeted pressure to release chronic muscle tension and knots.", icon: faHandSparkles, image: "/images/services/deep-tissue.jpg", features: ["Targeted pressure", "Trigger point therapy", "Sports recovery"] },
  { title: "HydraFacial", description: "Advanced 3-step facial that cleanses, extracts, and hydrates for radiant skin.", icon: faFaceSmile, image: "/images/services/hydrafacial.jpg", features: ["Cleanse & exfoliate", "Hydrating serums", "LED light therapy"] },
  { title: "Gel Manicure", description: "Long-lasting, chip-resistant gel nails with cuticle care and hand massage.", icon: faPersonBooth, image: "/images/services/manicure.jpg", features: ["Gel or classic polish", "Cuticle care", "Hand + arm massage"] },
  { title: "Spa Pedicure", description: "Soothing foot soak, exfoliation, nail care, and lower leg massage.", icon: faLeaf, image: "/images/services/pedicure.jpg", features: ["Herbal foot soak", "Sugar scrub exfoliation", "Paraffin wax upgrade"] },
  { title: "Couples Massage", description: "Side-by-side massages for two — perfect for date night or anniversary.", icon: faSpa, image: "/images/services/couples-massage.jpg", features: ["Two therapists", "Side-by-side tables", "Champagne add-on"] },
];

const testimonials = [
  { name: "Sarah M.", text: "GlowMobile transformed my living room into a five-star spa. The massage was incredible — I didn't have to go anywhere!", rating: 5 },
  { name: "Jennifer K.", text: "Booked a couples massage for our anniversary. Two therapists came to our hotel suite. Best date night ever.", rating: 5 },
  { name: "Michael T.", text: "I got my wife a surprise spa day at home. She loved every minute. The deep tissue massage was a game-changer.", rating: 5 },
  { name: "Ashley R.", text: "The HydraFacial left my skin glowing for days. Having it done at home made it so much more relaxing.", rating: 5 },
  { name: "David L.", text: "Professional, punctual, and amazing service. My shoulders have never felt better after the deep tissue session.", rating: 5 },
];

const whyUs = [
  { title: "We Come to You", text: "No traffic, no waiting rooms. Our licensed therapists bring the full spa experience to your doorstep.", icon: faSpa },
  { title: "Licensed Professionals", text: "Every therapist is fully licensed, insured, and trained in luxury spa protocols.", icon: faCheckCircle },
  { title: "Premium Products", text: "We use only top-tier, organic, and hypoallergenic products for every treatment.", icon: faLeaf },
  { title: "Flexible Scheduling", text: "Book online 24/7. Same-day appointments often available. We work around your schedule.", icon: faCalendarCheck },
];

export default function HomeClient() {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-amber-50 py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.08),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-sm px-4 py-1.5">✨ Luxury at Your Doorstep</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                The Spa That{" "}
                <span className="text-primary">Comes to You</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Professional massage, facials, manicures, and more — delivered to your home, office, or event. 
                Relax and rejuvenate without leaving your sanctuary.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex">
                  <Button size="lg" className="gap-2">
                    <FontAwesomeIcon icon={faCalendarCheck} className="size-4" />
                    Book a Session
                  </Button>
                </Link>
                <Link href="/services" className="inline-flex">
                  <Button size="lg" variant="outline" className="gap-2">
                    View Services
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-2">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="size-8 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center text-xs font-bold text-primary">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">200+</span> happy clients this month
                </p>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="glass-card p-3">
                <div className="rounded-lg bg-gradient-to-br from-purple-100 via-purple-50 to-amber-50 p-8 text-center">
                  <FontAwesomeIcon icon={faSpa} className="size-16 text-primary mb-4" />
                  <p className="text-2xl font-bold text-primary">Relax.</p>
                  <p className="text-muted-foreground">We bring the spa to you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Luxury Treatments, Delivered</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From Swedish massage to HydraFacials, our certified therapists bring premium spa experiences to you.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Link key={i} href={`/services/${s.title.toLowerCase().replace(/\s+/g, "-")}`}>
                <Card className="glass-card transition-shadow hover:shadow-lg cursor-pointer h-full overflow-hidden">
                  <div className="w-full h-44 bg-muted flex items-center justify-center overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                      <FontAwesomeIcon icon={s.icon} className="size-4" />
                    </div>
                    <CardTitle className="text-lg">{s.title}</CardTitle>
                    <CardDescription>{s.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Why GlowMobile</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">The GlowMobile Difference</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">We're redefining self-care by bringing the spa experience to you — with no compromises.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item, i) => (
              <Card key={i} className="glass-card text-center">
                <CardContent className="pt-6">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-4">
                    <FontAwesomeIcon icon={item.icon} className="size-5" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
          </div>
          <Carousel plugins={[autoplay.current]} opts={{ loop: true, align: "start" }} className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/2">
                  <Card className="glass-card h-full">
                    <CardContent className="pt-6">
                      <FontAwesomeIcon icon={faQuoteLeft} className="size-6 text-primary/30 mb-3" />
                      <p className="text-muted-foreground mb-4 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                      <div className="flex items-center gap-1 text-amber-400 mb-2">
                        {[...Array(t.rating)].map((_, j) => (
                          <FontAwesomeIcon key={j} icon={faStar} className="size-3" />
                        ))}
                      </div>
                      <p className="font-semibold text-sm">{t.name}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 text-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Book Today</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Ready to Relax?</h2>
          <p className="text-purple-100 max-w-lg mx-auto mb-8 text-lg">
            Book your mobile spa experience today. We'll bring the luxury — you just sit back and unwind.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex">
              <Button size="lg" variant="secondary" className="gap-2">
                <FontAwesomeIcon icon={faCalendarCheck} className="size-4" />
                Schedule Your Session
              </Button>
            </Link>
            <Link href="tel:+15551234567" className="inline-flex">
              <Button size="lg" variant="outline" className="gap-2 border-white/30 text-white hover:bg-white/10">
                <FontAwesomeIcon icon={faPhone} className="size-4" />
                (555) 123-4567
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
