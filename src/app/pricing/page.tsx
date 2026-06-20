import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Pricing | GlowMobile Spa",
  description: "Transparent pricing for all our mobile spa services. Massage, facials, nail care, and packages — luxury at your door.",
};

const plans = [
  {
    name: "Massage Therapy",
    price: "From $99",
    description: "Swedish, Deep Tissue, Hot Stone, Prenatal",
    features: ["60 or 90 minute sessions", "Licensed therapist", "Aromatherapy included", "Hot stone upgrade available", "Couples massage add-on"],
    popular: true,
  },
  {
    name: "Facials & Skincare",
    price: "From $129",
    description: "HydraFacial, Anti-Aging, Custom Facials",
    features: ["45 or 60 minute sessions", "Medical-grade products", "LED light therapy", "Serum infusions", "Zero downtime"],
    popular: false,
  },
  {
    name: "Nail Care",
    price: "From $55",
    description: "Gel Manicure, Spa Pedicure, Nail Art",
    features: ["Gel or classic polish", "Cuticle treatment", "Hand/foot massage", "Nail art available", "Paraffin upgrade"],
    popular: false,
  },
  {
    name: "Spa Packages",
    price: "From $199",
    description: "Couples, Parties, Corporate Wellness",
    features: ["Multiple therapists", "Custom treatment menus", "Group pricing", "Bridal/birthday packages", "Corporate wellness rates"],
    popular: false,
  },
];

const faqs = [
  { q: "How do you set up a spa in my home?", a: "We bring everything — massage tables, professional equipment, premium products, linens, and music. All we need is a 6x8 ft clear space and access to a sink. Setup takes 15 minutes." },
  { q: "Do I need to provide anything?", a: "Just yourself! We bring all equipment and products. For couples massages, we just need enough floor space for two tables side by side." },
  { q: "How far in advance should I book?", a: "We recommend 24-48 hours for best availability, but same-day appointments are often available. Call or book online anytime." },
  { q: "What is your cancellation policy?", a: "Free cancellation up to 4 hours before your appointment. Late cancellations may incur a $25 fee." },
  { q: "Are your therapists licensed?", a: "Yes! Every GlowMobile therapist is fully licensed, insured, and background-checked. We only hire experienced professionals." },
  { q: "Do you do group events?", a: "Absolutely! Spa parties for bridal showers, birthdays, bachelorettes, and corporate wellness are our specialty. Contact us for group pricing." },
];

export default function PricingPage() {
  return (
    <>
      <section className="py-20 sm:py-24 bg-gradient-to-br from-purple-50 via-white to-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Pricing</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Luxury mobile spa treatments with no hidden fees. Every session includes setup, cleanup, and premium products.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, i) => (
              <Card key={i} className={`glass-card relative ${plan.popular ? "ring-2 ring-primary" : ""}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">Most Popular</Badge>
                )}
                <CardHeader className={plan.popular ? "pt-8" : ""}>
                  <CardTitle>{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{plan.price}</div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <FontAwesomeIcon icon={faCheck} className="size-3 text-secondary mt-1 shrink-0" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex w-full">
                    <Button className="w-full gap-2" variant={plan.popular ? "default" : "outline"}>
                      <FontAwesomeIcon icon={faCalendarCheck} className="size-3" /> Book Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3 max-w-2xl mx-auto">
            {faqs.map((faq, i) => (
              <details key={i} className="glass-card group p-0 overflow-hidden">
                <summary className="cursor-pointer list-none p-4 font-medium flex items-center justify-between">
                  {faq.q}
                  <svg className="size-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-4 pb-4 text-muted-foreground text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
