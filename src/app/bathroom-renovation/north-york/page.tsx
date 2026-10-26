import React from "react";
import BathroomClient from "./northYorkBathroom";
import { site } from "@/lib/content";

export const metadata = {
  title: "Bathroom Renovation New York | Best Remodelling Across GTA",
  description: "North York bathroom remodeling with new showers, tile, vanities and lighting. Licensed, insured and permit-ready. Request your free on-site estimate.",
  canonical: `${site.url}/bathroom-renovation/north-york`,
};

export default function KitchenRenovationGtaPage() {
  return <BathroomClient />;
}