import React from "react";
import BathroomClient from "./scarboroughBathroom";
import { site } from "@/lib/content";

export const metadata = {
  title: "Bathroom Remodel in Scarborough, ON | Y2 Design & Build",
  description: "Plan a smarter bathroom remodel in Scarborough, from compact 1960s bathrooms to basement suites. See typical costs and book a free in-home visit with Y2.",
  canonical: `${site.url}/bathroom-renovation/scarborough`,
};

export default function KitchenRenovationGtaPage() {
  return <BathroomClient />;
}