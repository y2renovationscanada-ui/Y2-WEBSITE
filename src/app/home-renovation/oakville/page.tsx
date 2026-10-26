import React from "react";
import HomeClient from "./oakvilleHome";
import { site } from "@/lib/content";

export const metadata = {
  title: "Home Renovations Oakville | Home Renovation Contractors Oakville",
  description: "Full home renovations for Oakville properties, including additions, main floor redesigns and interiors. One licensed design-build team. Free consult.",
  alternates: { canonical: `${site.url}/home-renovation/oakville` },
};

export default function HomeRenovationGtaPage() {
  return <HomeClient />;
}
