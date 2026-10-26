import React from "react";
import BasementClient from "./torontoBasement";
import { site } from "@/lib/content";

export const metadata = {
  title: "Basement Renovation Toronto | Expert Finishing & Legal Basement",
  description: "Finished basements, in-law suites and rec rooms for Toronto homeowners. Licensed contractors managing permits, framing, and finishes. Free on-site quote.",
  alternates: { canonical: `${site.url}/basement-renovation/toronto` },

}

export default function HomeRenovationGtaPage() {
  return <BasementClient />;
}
