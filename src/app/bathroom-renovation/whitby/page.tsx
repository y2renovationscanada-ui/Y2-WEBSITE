import React from "react";
import BathroomClient from "./whitbyBathroom";
import { site } from "@/lib/content";

export const metadata = {
  title: "Bathroom Remodel in Whitby, ON | Y2 Design & Build",
  description: "Your bathroom remodel in Whitby, planned properly: compare shower options, see typical costs, and get a fixed-price quote from Y2 after a free home visit.",
  alternates: { canonical: `${site.url}/bathroom-renovation/whitby` },
};

export default function KitchenRenovationGtaPage() {
  return <BathroomClient />;
}