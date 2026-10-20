import React from "react";
import KitchenClient from "./oakvilleKitchen";
import { site } from "@/lib/content";

export const metadata = {
  title: "Kitchen Renovation Oakville | Expert Contractors Across GTA",
  description: "Custom kitchen renovations for Oakville homes: cabinetry, islands, counters, and lighting, handled end-to-end. Request your free on-site consultation.",
  canonical: `${site.url}/kitchen-renovation/oakville`,
};

export default function KitchenRenovationGtaPage() {
  return <KitchenClient />;
}