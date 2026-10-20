import React from "react";
import BasementClient from "./scarboroughBasement";
import { site } from "@/lib/content";

export const metadata = {
  title: "Basement Renovation Scarborough | Get Free Consultation Today",
  description: "Custom basement finishing for Scarborough homes, including wet bars, home gyms and guest suites. Licensed, insured and permit-ready. Book your free quote.",
  canonical: `${site.url}/basement-renovation/scarborough`,
}

export default function BasementRenovationGtaPage() {
  return <BasementClient />;
}
