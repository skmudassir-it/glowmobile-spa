import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandSparkles, faFaceSmile, faPersonBooth, faLeaf, faSpa,
  faGem, faWater, faCrown, faCheckCircle, faCalendarCheck,
  faClock, faArrowLeft, faPhone,
} from "@fortawesome/free-solid-svg-icons";

interface ServiceItem {
  slug: string;
  title: string;
  category: string;
  description: string;
  icon: any;
  image: string;
  features: string[];
  longDescription: string;
  duration: string;
  price: string;
}

const services: Record<string, ServiceItem> = {
  "swedish-massage": {
    slug: "swedish-massage", title: "Swedish Massage", category: "Massage Therapy",
    description: "Gentle, flowing strokes to melt away tension and promote deep relaxation.",
    icon: faHandSparkles, image: "/images/services/swedish-massage.jpg",
    features: ["60/90 min sessions", "Hot stone upgrade", "Aromatherapy oils", "Full-body relaxation"],
    longDescription: "Our Swedish massage uses long, gliding strokes, kneading, and circular movements on superficial layers of muscle using massage lotion or oil. It's the perfect introduction to massage therapy and ideal for stress relief and full-body relaxation. Our therapists customize pressure to your preference.",
    duration: "60 or 90 minutes", price: "$99 – $139",
  },
  "deep-tissue-massage": {
    slug: "deep-tissue-massage", title: "Deep Tissue Massage", category: "Massage Therapy",
    description: "Targeted pressure to release chronic muscle tension and knots.",
    icon: faHandSparkles, image: "/images/services/deep-tissue.jpg",
    features: ["Trigger point therapy", "Chronic pain relief", "Sports recovery", "Improved mobility"],
    longDescription: "Deep tissue massage targets the inner layers of your muscles and connective tissues using slow, deliberate strokes and deep finger pressure. It's especially effective for chronically tight or painful areas, stiff necks, upper and lower back pain, and sore shoulders.",
    duration: "60 or 90 minutes", price: "$109 – $159",
  },
  "hot-stone-massage": {
    slug: "hot-stone-massage", title: "Hot Stone Massage", category: "Massage Therapy",
    description: "Smooth, heated basalt stones combined with therapeutic massage for deep muscle relaxation.",
    icon: faWater, image: "/images/services/hot-stone.jpg",
    features: ["Heated basalt stones", "Deep muscle relief", "Improved circulation", "Full body treatment"],
    longDescription: "Heated smooth basalt stones are placed on key points of the body and used as massage tools. The penetrating heat relaxes muscles deeply, allowing the therapist to work more effectively. This treatment is deeply relaxing and excellent for muscle tension.",
    duration: "75 or 90 minutes", price: "$129 – $169",
  },
  "prenatal-massage": {
    slug: "prenatal-massage", title: "Prenatal Massage", category: "Massage Therapy",
    description: "Gentle, supportive massage designed for mothers-to-be at any stage.",
    icon: faHandSparkles, image: "/images/services/prenatal-massage.jpg",
    features: ["Side-lying position", "Pregnancy pillow support", "Reduces swelling", "Back pain relief"],
    longDescription: "Our prenatal massage is tailored to the unique needs of expecting mothers. Using specialized positioning and gentle techniques, it relieves back pain, reduces swelling, improves sleep, and reduces stress. Safe for all trimesters with doctor approval.",
    duration: "60 minutes", price: "$119",
  },
  "hydrafacial": {
    slug: "hydrafacial", title: "HydraFacial", category: "Facials & Skincare",
    description: "Advanced 3-step facial that cleanses, extracts, and hydrates for radiant skin.",
    icon: faFaceSmile, image: "/images/services/hydrafacial.jpg",
    features: ["Deep cleanse & exfoliate", "Hydrating serums", "LED light therapy", "No downtime"],
    longDescription: "The HydraFacial is a medical-grade resurfacing treatment that clears out pores and hydrates skin using patented Vortex-Fusion technology. In three steps — cleanse + peel, extract + hydrate, fuse + protect — it delivers immediate, noticeable results with zero irritation or downtime.",
    duration: "45 or 60 minutes", price: "$129 – $169",
  },
  "anti-aging-facial": {
    slug: "anti-aging-facial", title: "Anti-Aging Facial", category: "Facials & Skincare",
    description: "Collagen-boosting facial with peptides and antioxidants for firmer, younger skin.",
    icon: faGem, image: "/images/services/anti-aging-facial.jpg",
    features: ["Collagen peptides", "Vitamin C infusion", "Microcurrent option", "Firming & lifting"],
    longDescription: "This advanced anti-aging facial combines potent peptides, antioxidants, and hydrating ingredients to target fine lines, uneven texture, and loss of firmness. Includes a lifting massage and optional microcurrent technology for visible results after one session.",
    duration: "60 minutes", price: "$149",
  },
  "gel-manicure": {
    slug: "gel-manicure", title: "Gel Manicure", category: "Nail Care",
    description: "Long-lasting, chip-resistant gel nails with cuticle care and hand massage.",
    icon: faPersonBooth, image: "/images/services/manicure.jpg",
    features: ["Gel or classic polish", "Cuticle treatment", "Hand & arm massage", "Nail art available"],
    longDescription: "Our gel manicure includes nail shaping, cuticle care, a relaxing hand and arm massage, and premium gel polish cured under LED light for a flawless, chip-resistant finish that lasts up to three weeks. Choose from our extensive color collection.",
    duration: "45 minutes", price: "$55",
  },
  "spa-pedicure": {
    slug: "spa-pedicure", title: "Spa Pedicure", category: "Nail Care",
    description: "Soothing herbal foot soak, exfoliation, nail care, and lower leg massage.",
    icon: faLeaf, image: "/images/services/pedicure.jpg",
    features: ["Herbal foot soak", "Sugar scrub exfoliation", "Callus treatment", "Paraffin wax upgrade"],
    longDescription: "Indulge in a spa-grade pedicure at home. Begin with a warm herbal foot soak, followed by sugar scrub exfoliation, nail shaping, cuticle care, callus smoothing, and a thorough lower leg and foot massage. Finished with your choice of polish.",
    duration: "60 minutes", price: "$65",
  },
  "couples-massage": {
    slug: "couples-massage", title: "Couples Massage", category: "Packages",
    description: "Side-by-side massages for two — the perfect romantic experience.",
    icon: faSpa, image: "/images/services/couples-massage.jpg",
    features: ["Two therapists", "Side-by-side tables", "Champagne add-on", "Customizable pressure"],
    longDescription: "Our couples massage brings two licensed therapists to your location for side-by-side massages. Each person selects their preferred massage style and pressure. Add champagne and chocolate-covered strawberries for the ultimate romantic spa date at home.",
    duration: "60 or 90 minutes", price: "$199 – $289",
  },
  "spa-party-package": {
    slug: "spa-party-package", title: "Spa Party Package", category: "Packages",
    description: "Host a spa party! Multiple therapists for bridal showers, birthdays, and girls' nights.",
    icon: faCrown, image: "/images/services/spa-party.jpg",
    features: ["3+ therapists", "Custom treatment menu", "Group pricing", "Decor & refreshments"],
    longDescription: "Transform your home into a private spa for the ultimate celebration. Ideal for bridal showers, bachelorette parties, birthdays, and corporate wellness events. We bring multiple therapists, create a custom treatment menu, and handle all setup and cleanup.",
    duration: "3-4 hours", price: "Starting at $499",
  },
};

const allSlugs = Object.keys(services);

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return { title: "Service Not Found | GlowMobile Spa" };
  return {
    title: `${service.title} | GlowMobile Spa`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <Link href="/services" className="inline-flex"><Button>Back to Services</Button></Link>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6">
            <FontAwesomeIcon icon={faArrowLeft} className="size-3" /> Back to Services
          </Link>
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Badge className="text-sm">{service.category}</Badge>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <FontAwesomeIcon icon={faClock} className="size-3" /> {service.duration}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{service.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{service.longDescription}</p>
              <div className="text-3xl font-bold text-primary">{service.price}</div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex">
                  <Button size="lg" className="gap-2">
                    <FontAwesomeIcon icon={faCalendarCheck} className="size-4" /> Book This Service
                  </Button>
                </Link>
                <Link href="tel:+155****4567" className="inline-flex">
                  <Button size="lg" variant="outline" className="gap-2">
                    <FontAwesomeIcon icon={faPhone} className="size-4" /> Call to Book
                  </Button>
                </Link>
              </div>
            </div>
            <div className="glass-card overflow-hidden">
              <div className="w-full h-80 bg-muted flex items-center justify-center overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">What's Included</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {service.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 p-4 glass-card">
                <FontAwesomeIcon icon={faCheckCircle} className="size-5 text-secondary mt-0.5 shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Related Services</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allSlugs.filter(s => s !== slug && services[s].category === service.category).slice(0, 3).map((s) => (
              <Link key={s} href={`/services/${s}`}>
                <Card className="glass-card transition-shadow hover:shadow-lg cursor-pointer h-full overflow-hidden">
                  <div className="w-full h-40 bg-muted flex items-center justify-center overflow-hidden">
                    <img src={services[s].image} alt={services[s].title} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-base">{services[s].title}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
