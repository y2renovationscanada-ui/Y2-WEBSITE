import React from "react";
import HomeClient from "./markhamHome";
import { site } from "@/lib/content";

export const metadata = {
  title: "Home Renovation in Markham, ON | Y2 Design & Build",
  description: "Your home renovation in Markham, handled by a local team. Y2 Design & Build designs and builds whole-home and multi-room renovations at a fixed price.",
  alternates: { canonical: `${site.url}/home-renovation/markham` },
};

export default function HomeRenovationGtaPage() {
  return <HomeClient />;
}
