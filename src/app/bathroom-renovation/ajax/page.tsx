import React from "react";
import BathroomClient from "./ajaxBathroom";
import { site } from "@/lib/content";

export const metadata = {
  title: "Bathroom Renovation Ajax | Book Your Free Consultation",
  description: "Bathroom renovations in Ajax, including ensuites, powder rooms and full gut remodels. Licensed and insured team. Request a free on-site quote.",
  canonical: `${site.url}/bathroom-renovation/ajax`,

};

export default function KitchenRenovationGtaPage() {
  return <BathroomClient />;
}