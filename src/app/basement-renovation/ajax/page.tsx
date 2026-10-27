import React from "react";
import BasementRenovationAjaxClient from "./ajaxBasement";
import { site } from "@/lib/content";

export const metadata = {
  title: "Basement Renovation Ajax | Expert Finishing & Legal Basement",
  description: "Finished basements, in-law suites and rec rooms for Ajax homeowners. Licensed contractors managing permits, framing, and finishes. Free on-site quote.",
  alternates: { canonical: `${site.url}/basement-renovation/ajax` },

}

export default function AjaxBasementPage() {
  return <BasementRenovationAjaxClient />;
}
