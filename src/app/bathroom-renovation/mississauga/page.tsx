import React from "react";
import BathroomClient from "./mississaugaBathroom";
import { site } from "@/lib/content";

export const metadata = {
  title: "Bathroom Renovation & Remodel Mississauga | Free Consultation Available",
  description: "Bathroom remodeling in Mississauga, from full gut renovations to refreshed ensuites. Licensed plumbing and tile work. Get a free on-site consultation.",
  canonical: `${site.url}/bathroom-renovation/mississauga`,
};

export default function KitchenRenovationGtaPage() {
  return <BathroomClient />;
}