import React from "react";
import BathroomClient from "./richmondHillBathroom";
import { site } from "@/lib/content";

export const metadata = {
  title: "Bathroom Renovation Richmond Hill | Book Your Free Consultation",
  description: "Bathroom renovations in Richmond Hill, including ensuites, powder rooms and full gut remodels. Licensed and insured team. Request a free on-site quote.",
  canonical: `${site.url}/bathroom-renovation/richmond-hill`,
};

export default function KitchenRenovationGtaPage() {
  return <BathroomClient />;
}