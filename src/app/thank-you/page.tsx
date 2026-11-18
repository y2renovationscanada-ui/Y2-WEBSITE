"use client";

import { useEffect, useState } from "react";
import { quoteForm, site } from "@/lib/content";
import { buildBookingHref, LAST_LEAD_KEY, type SubmittedPayload } from "@/components/QuoteForm";

export default function ThankYouContent() {
  const [lead, setLead] = useState<SubmittedPayload | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(LAST_LEAD_KEY);
      if (raw) setLead(JSON.parse(raw));
    } catch {}
  }, []);

  const firstName = lead?.name?.split(" ")[0];
  const phoneHref = `tel:${site.phone.replace(/\D/g, "")}`;

  return (
    <section className="section-pad">
      <div className="container-page max-w-xl text-center">
        <svg className="mx-auto h-14 w-14 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 className="mt-4 text-3xl font-bold">
          {firstName ? `Thanks, ${firstName}!` : quoteForm.successTitle}
        </h1>
        <p className="mt-3 text-muted">{quoteForm.successBody}</p>

        <a href={buildBookingHref(lead)} className="btn-primary mt-8 inline-flex w-full items-center justify-center sm:w-auto">
          {quoteForm.successBookCta}
        </a>

        <p className="mt-4 text-sm text-muted">
          Or call{" "}
          <a href={phoneHref} className="font-semibold underline">
            {site.phone}
          </a>{" "}
          if you&apos;d rather talk first.
        </p>
      </div>
    </section>
  );
}