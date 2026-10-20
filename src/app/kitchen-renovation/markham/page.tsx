import React from "react";
import KitchenClient from "./markhamKitchen";
import { site } from "@/lib/content";


export const metadata = {
  title: "Kitchen Renovation in Markham, ON | Y2 Design & Build",
  description: "A kitchen renovation in Markham, designed and built by a local team. Layouts, cabinetry, counters, ventilation and costs, with a fixed-price quote from Y2.",
  canonical: `${site.url}/kitchen-renovation/markham`,
};

export default function KitchenRenovationGtaPage() {
  return <KitchenClient />;
}