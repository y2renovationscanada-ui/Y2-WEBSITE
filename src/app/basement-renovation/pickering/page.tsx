import React from "react";
import BasementRenovationPickeringClient from "./pickeringBasement";
import { site } from "@/lib/content";

export const metadata = {
  title: "Basement Renovation Pickering | Get Free Consultation Today",
  description: "Custom basement finishing for Pickering homes, including wet bars, home gyms and guest suites. Licensed, insured and permit-ready. Book your free quote.",
  alternates: { canonical: `${site.url}/basement-renovation/pickering` },

}

export default function PickeringBasementPage() {
  return <BasementRenovationPickeringClient />;
}
