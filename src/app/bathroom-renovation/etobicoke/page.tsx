import React from "react";
import BathroomClient from "./etobicokeBathroom";
import { site } from "@/lib/content";


export const metadata = {
  title: "Bathroom Renovation Etobicoke | Best Remodelling Across GTA",
  description: "Bathroom renovations for Etobicoke homes and condos. Walk-in showers, custom tile and modern fixtures, professionally installed. Free on-site quote.",
  canonical: `${site.url}/bathroom-renovation/etobicoke`,
};

export default function KitchenRenovationGtaPage() {
  return <BathroomClient />;
}