import React from "react";
import KitchenClient from "./KitchenClient";

export const metadata = {
  title: "Kitchen Renovation Markham | Save $2,500 | Y2 Design & Build",
  description: "Complete kitchen renovations across Markham by a licensed design-build team. Free, no-obligation consultation and quote. 15+ years in the GTA.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function KitchenRenovationGtaPage() {
  return <KitchenClient />;
}