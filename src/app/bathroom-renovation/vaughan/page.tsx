import React from "react";
import BathroomClient from "./vaughanBathroom";
import { site } from "@/lib/content";

export const metadata = {
  title: "Bathroom Remodel in Vaughan, ON | Y2 Design & Build",
  description: "Y2 Design & Build handles every bathroom remodel in Vaughan from design to handover, with fixed pricing, Friday progress updates, and a free in-home visit.",
  canonical: `${site.url}/bathroom-renovation/vaughan`,
};

export default function KitchenRenovationGtaPage() {
  return <BathroomClient />;
}