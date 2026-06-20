import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandSparkles, faFaceSmile, faPersonBooth, faLeaf, faSpa,
  faGem, faWater, faCrown, faChevronRight
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Services | GlowMobile Spa",
  description: "Explore our full range of mobile spa treatments — massage, facials, nail care, body treatments, and more, delivered to your door.",
};

interface ServiceItem {
  title: string;
  description: string;
  icon: any;
  image: string;
  features: string[];
  category: string;
  slug: string;
}

const services: ServiceItem[] = [
  { slug: "swedish-massage", title: "Swedish Massage", category: "Massage Therapy", description: "Gentle, flowing strokes to melt away tension and promote deep relaxation.", icon: faHandSparkles, image: "/images/services/swedish-massage.jpg", features: ["60/90 min sessions", "Hot stone upgrade", "Aromatherapy oils", "Full-body relaxation"] },
  { slug: "deep-tissue-massage", title: "Deep Tissue Massage", category: "Massage Therapy", description: "Targeted pressure to release chronic muscle tension and knots for lasting relief.", icon: faHandSparkles, image: "/images/services/deep-tissue.jpg", features: ["Trigger point therapy", "Chronic pain relief", "Sports recovery", "Improved mobility"] },
  { slug: "hot-stone-massage", title: "Hot Stone Massage", category: "Massage Therapy", description: "Smooth, heated basalt stones combined with therapeutic massage for deep muscle relaxation.", icon: faWater, image: "/images/services/hot-stone.jpg", features: ["Heated basalt stones", "Deep muscle relief", "Improved circulation", "Full body treatment"] },
  { slug: "prenatal-massage", title: "Prenatal Massage", category: "Massage Therapy", description: "Gentle, supportive massage designed for expecting mothers at any stage of pregnancy.", icon: faHandSparkles, image: "/images/services/prenatal-massage.jpg", features: ["Side-lying position", "Pregnancy pillow", "Reduced swelling", "Back pain relief"] },
  { slug: "hydrafacial", title: "HydraFacial", category: "Facials & Skincare", description: "Advanced 3-step facial that cleanses, extracts, and hydrates for radiant, glowing skin.", icon: faFaceSmile, image: "/images/services/hydrafacial.jpg", features: ["Deep cleanse & exfoliate", "Hydrating serums", "LED light therapy", "No downtime"] },
  { slug: "anti-aging-facial", title: "Anti-Aging Facial", category: "Facials & Skincare", description: "Collagen-boosting facial with peptides and antioxidants to reduce fine lines and firm skin.", icon: faGem, image: "/images/services/anti-aging-facial.jpg", features: ["Collagen peptides", "Vitamin C infusion", "Microcurrent option", "Firming & lifting"] },
  { slug: "gel-manicure", title: "Gel Manicure", category: "Nail Care", description: "Long-lasting, chip-resistant gel nails with thorough cuticle care and hand massage.", icon: faPersonBooth, image: "/images/services/manicure.jpg", features: ["Gel or classic polish", "Cuticle treatment", "Hand & arm massage", "Nail art available"] },
  { slug: "spa-pedicure", title: "Spa Pedicure", category: "Nail Care", description: "Soothing herbal foot soak, exfoliation, expert nail care, and lower leg massage.", icon: faLeaf, image: "/images/services/pedicure.jpg", features: ["Herbal foot soak", "Sugar scrub exfoliation", "Callus treatment", "Paraffin wax upgrade"] },
  { slug: "couples-massage", title: "Couples Massage", category: "Packages", description: "Side-by-side massages for two — the perfect romantic experience for any occasion.", icon: faSpa, image: "/images/services/couples-massage.jpg", features: ["Two therapists", "Side-by-side tables", "Champagne add-on", "Customizable pressure"] },
  { slug: "spa-party-package", title: "Spa Party Package", category: "Packages", description: "Host a spa party at home! Multiple therapists for bridal showers, birthdays, and girls' night.", icon: faCrown, image: "/images/services/spa-party.jpg", features: ["3+ therapists", "Custom treatment menu", "Group pricing", "Decor & refreshments"] },
];

export default function ServicesPage() {
  const categories = [...new Set(services.map(s => s.category))];

  return (
    <>
      <section className="py-20 sm:py-24 bg-gradient-to-br from-purple-50 via-white to-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Services</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Luxury Spa Treatments</h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">Professional spa services delivered to your home, office, or event. Browse our full menu below.</p>
          </div>

          {categories.map((cat) => (
            <div key={cat} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary">{cat}</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services.filter(s => s.category === cat).map((s, i) => (
                  <Link key={i} href={`/services/${s.slug}`}>
                    <Card className="glass-card transition-shadow hover:shadow-lg cursor-pointer h-full overflow-hidden group">
                      <div className="w-full h-44 bg-muted flex items-center justify-center overflow-hidden">
                        <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <FontAwesomeIcon icon={s.icon} className="size-3" />
                          </div>
                          <Badge variant="secondary" className="text-xs">{s.category}</Badge>
                        </div>
                        <CardTitle className="text-lg">{s.title}</CardTitle>
                        <CardDescription>{s.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
