"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
}

const gallery: GalleryItem[] = [
  { src: "/images/projects/couples-spa-setup.jpg", alt: "Couples massage setup", category: "Massage" },
  { src: "/images/projects/bridal-spa-party.jpg", alt: "Bridal spa party", category: "Events" },
  { src: "/images/projects/facial-treatment.jpg", alt: "HydraFacial in progress", category: "Facials" },
  { src: "/images/projects/manicure-home.jpg", alt: "At-home manicure", category: "Nails" },
  { src: "/images/projects/corporate-wellness.jpg", alt: "Corporate wellness event", category: "Events" },
  { src: "/images/projects/hotel-spa-setup.jpg", alt: "Hotel spa setup", category: "Massage" },
  { src: "/images/projects/birthday-spa-party.jpg", alt: "Birthday spa party", category: "Events" },
  { src: "/images/projects/pedicure-session.jpg", alt: "Spa pedicure session", category: "Nails" },
  { src: "/images/projects/deep-tissue-session.jpg", alt: "Deep tissue massage", category: "Massage" },
  { src: "/images/projects/antiaging-facial.jpg", alt: "Anti-aging facial", category: "Facials" },
  { src: "/images/projects/prenatal-massage.jpg", alt: "Prenatal massage", category: "Massage" },
  { src: "/images/projects/gel-nails-closeup.jpg", alt: "Gel nail art detail", category: "Nails" },
];

export default function ProjectsClient() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Massage", "Facials", "Nails", "Events"];
  const filtered = filter === "All" ? gallery : gallery.filter(g => g.category === filter);

  return (
    <>
      <section className="py-20 sm:py-24 bg-gradient-to-br from-purple-50 via-white to-amber-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Gallery</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Our Work in Action</h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              A glimpse into our mobile spa sessions — from intimate couples massages to vibrant spa parties.
            </p>
          </div>

          <Tabs defaultValue="All" className="mb-10" onValueChange={(v: string | null) => setFilter(v || "All")}>
            <TabsList className="flex-wrap justify-center gap-1">
              {categories.map((cat) => (
                <TabsTrigger key={cat} value={cat}>{cat}</TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <Card key={i} className="glass-card overflow-hidden group">
                <div className="w-full h-56 bg-muted flex items-center justify-center overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3">
                  <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                  <p className="mt-1 text-sm font-medium">{item.alt}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
