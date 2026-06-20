import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "GlowMobile Spa | Luxury Mobile Spa Treatments at Your Door",
  description: "Luxury spa treatments delivered to your home, office, or event. Massage, facials, manicures, pedicures, and more — we come to you.",
};

export default function HomePage() {
  return <HomeClient />;
}
