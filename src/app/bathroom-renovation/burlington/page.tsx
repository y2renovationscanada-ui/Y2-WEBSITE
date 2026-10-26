import React from "react";
import BathroomClient from "./burlingtonBathroom";
import { site } from "@/lib/content";

export const metadata = {
  title: "Bathroom Renovation Burlington | Best Remodelling Across GTA",
  description: "Burlington bathroom renovations from refresh to full gut remodel. Licensed plumbing, expert tiling and custom vanities. Book a free on-site consult.",
  canonical: `${site.url}/bathroom-renovation/burlington`,
};

export default function KitchenRenovationGtaPage() {
  return <BathroomClient />;
}