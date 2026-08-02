"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { site } from "@/lib/content";

/**
 * Full-viewport embed of the CRM round-robin booking flow.
 * Browser URL stays on this site (/book); the CRM app runs in the iframe.
 */
export default function BookEmbed() {
  const params = useSearchParams();

  const iframeSrc = useMemo(() => {
    const q = new URLSearchParams(params.toString());
    q.set("embed", "1");
    const qs = q.toString();
    return `${site.crmOrigin.replace(/\/$/, "")}/book${qs ? `?${qs}` : ""}`;
  }, [params]);

  return (
    <iframe
      title="Book your free in-home consult"
      src={iframeSrc}
      className="min-h-0 w-full flex-1 border-0 bg-[#f3efe8]"
      allow="geolocation"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
}
