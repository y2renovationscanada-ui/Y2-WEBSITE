import React from "react";
import HomeClient from "./HomeClient";

export const metadata = {
  title: "Home Renovation GTA | Design-Build Team | Y2 Design & Build",
  description: "Home Renovations across GTA handled by one licensed in-house design-build team. Free, no-obligation consultation and quote.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function KitchenRenovationGtaPage() {
  return <HomeClient />;
}