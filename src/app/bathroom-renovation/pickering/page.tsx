import React from "react";
import BathroomClient from "./pickeringBathroom";
import { site } from "@/lib/content";

export const metadata = {
  title: "Bathroom Renovations Pickering | Bathroom renovation services in Ontario",
  description: "Pickering bathroom renovations covering layout changes, tiling, plumbing and vanities. One licensed team, clear timelines. Get a free consultation.",
  alternates: { canonical: `${site.url}/bathroom-renovation/pickering` },
};

export default function KitchenRenovationGtaPage() {
  return <BathroomClient />;
}