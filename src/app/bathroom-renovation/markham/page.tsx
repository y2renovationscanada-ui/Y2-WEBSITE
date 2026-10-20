import React from "react";
import BathroomClient from "./markhamBathroom";
import { site } from "@/lib/content";

export const metadata = {
  title: "Bathroom Renovation & Remodel Markham | Bathroom Contractors in GTA",
  description: "Markham bathroom renovations covering layout changes, tiling, plumbing and custom vanities. Licensed team, clear timelines. Request your free estimate.",
  canonical: `${site.url}/bathroom-renovation/markham`,
};

export default function KitchenRenovationGtaPage() {
  return <BathroomClient />;
}