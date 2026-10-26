import React from "react";
import BathroomClient from "./torontoBathroom";
import { site } from "@/lib/content";


export const metadata = {
  title: "Bathroom Remodel in Toronto | Y2 Design & Build",
  description: "Thinking about a bathroom remodel in Toronto? Get expert guidance on ensuites, heritage homes, costs and permits, plus an itemized fixed-price quote from Y2.",
  alternates: { canonical: `${site.url}/bathroom-renovation/toronto` },
};

export default function KitchenRenovationGtaPage() {
  return <BathroomClient />;
}