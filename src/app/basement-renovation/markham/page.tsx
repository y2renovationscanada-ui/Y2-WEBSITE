import React from "react";
import BasementClient from "./markhamBasement";
import { site } from "@/lib/content";

export const metadata = {
  title: "Basement Renovation Markham | Free Quotation Available",
  description: "Markham basement renovations done right, from waterproofing and framing to legal secondary suites. Permits handled start to finish. Free consultation.",
  alternates: { canonical: `${site.url}/basement-renovation/markham` },
}

export default function HomeRenovationGtaPage() {
  return <BasementClient />;
}
