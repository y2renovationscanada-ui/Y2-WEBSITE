import React from "react";
import BasementClient from "./oakvilleBasement";
import { site } from "@/lib/content";

export const metadata = {
  title: "Basement Renovation Oakville | Get Free Consultation Today",
  description: "Custom basement finishing for Oakville homes, including wet bars, home gyms and guest suites. Licensed, insured and permit-ready. Book your free quote.",
  canonical: `${site.url}/basement-renovation/oakville`,  
}

export default function HomeRenovationGtaPage() {
  return <BasementClient />;
}
