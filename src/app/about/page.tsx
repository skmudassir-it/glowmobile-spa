import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa, faCalendarCheck, faShield, faLeaf, faHeart, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "About Us | GlowMobile Spa",
  description: "Learn about GlowMobile Spa — our mission, our team, and why we're the leading mobile spa service delivering luxury treatments to your door.",
};

const values = [
  { title: "Excellence", text: "Every treatment is performed with the highest standards of quality and care.", icon: faSpa },
  { title: "Convenience", text: "We bring five-star spa treatments to your space — no travel, no hassle.", icon: faCalendarCheck },
  { title: "Safety", text: "Licensed, insured professionals using hospital-grade sanitization.", icon: faShield },
  { title: "Sustainability", text: "Organic, cruelty-free products and eco-friendly practices.", icon: faLeaf },
];

const team = [
  { name: "Amara Chen", role: "Founder & Lead Therapist", bio: "15+ years in luxury spa. Certified in 12+ modalities. Designed every treatment on our menu." },
  { name: "Marcus Rivera", role: "Senior Massage Therapist", bio: "Specialist in deep tissue, sports massage, and myofascial release. Former NFL team therapist." },
  { name: "Priya Patel", role: "Lead Esthetician", bio: "Medical esthetician with expertise in HydraFacial, chemical peels, and anti-aging treatments." },
  { name: "Jasmine Okonkwo", role: "Nail Art Specialist", bio: "Award-winning nail artist skilled in gel, acrylic, and intricate nail art design." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-purple-50 via-white to-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">About Us</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Bringing Luxury Spa<br />to Your Doorstep</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              GlowMobile Spa was founded with a simple belief: self-care shouldn't require a commute. 
              We bring expertly trained therapists, premium products, and the full spa experience to your home.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  GlowMobile was born in 2020 when our founder, Amara Chen, realized how many people skipped 
                  self-care because of busy schedules, long commutes, and crowded spa waiting rooms.
                </p>
                <p>
                  She assembled a team of the city's finest therapists and estheticians, invested in portable 
                  professional equipment, and created a luxury spa that comes to you — whether that's your home, 
                  office, hotel, or event venue.
                </p>
                <p>
                  Today, GlowMobile Spa serves hundreds of clients monthly, from busy professionals to new 
                  mothers, bridal parties to corporate wellness events. Every treatment is a five-star experience, 
                  delivered with care, professionalism, and genuine warmth.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex">
                  <Button className="gap-2">
                    <FontAwesomeIcon icon={faCalendarCheck} className="size-4" /> Book Your Session
                  </Button>
                </Link>
              </div>
            </div>
            <div className="glass-card p-3">
              <div className="rounded-lg bg-gradient-to-br from-purple-100 to-amber-50 p-12 text-center">
                <FontAwesomeIcon icon={faHeart} className="size-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">200+ Sessions Monthly</h3>
                <p className="text-muted-foreground">Trusted by clients across the metro area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Card key={i} className="glass-card text-center">
                <CardContent className="pt-6">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-4">
                    <FontAwesomeIcon icon={v.icon} className="size-5" />
                  </div>
                  <h3 className="font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet Our Therapists</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Licensed, passionate professionals dedicated to your wellness.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Card key={i} className="glass-card text-center">
                <CardContent className="pt-6">
                  <div className="size-20 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-br from-purple-700 to-purple-800 text-white text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FontAwesomeIcon icon={faQuoteLeft} className="size-8 text-purple-300 mb-6" />
          <p className="text-xl sm:text-2xl leading-relaxed mb-6">
            &ldquo;GlowMobile has completely changed how I think about self-care. Having a professional massage 
            in my own living room, with no rush and no drive home — it's pure luxury.&rdquo;
          </p>
          <p className="font-semibold">— Sarah M., Client since 2022</p>
        </div>
      </section>
    </>
  );
}
