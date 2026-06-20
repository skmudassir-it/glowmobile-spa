import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Gallery | GlowMobile Spa",
  description: "Browse photos from our mobile spa sessions — couples massages, spa parties, bridal events, and more.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
