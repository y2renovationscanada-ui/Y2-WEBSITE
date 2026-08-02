"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function FAQ({
  items = faqs,
  heading = "Renovation FAQs",
  subheading = "Straight answers to the questions we hear most.",
}: {
  items?: typeof faqs;
  heading?: string;
  subheading?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad bg-surface">
      <div className="container-page max-w-3xl">
        <h2 className="section-heading">{heading}</h2>
        <p className="section-sub">{subheading}</p>

        <div className="mt-10 space-y-3">
          {items.map((faq, i) => {
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
            <div key={faq.question} className="card overflow-hidden">
              <h3 className="m-0">
                <button
                  type="button"
                  id={buttonId}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={panelId}
                >
                  <span className="font-semibold text-brand-dark">{faq.question}</span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-brand transition ${open === i ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={open !== i}
                className={open === i ? "border-t border-stone-200 px-5 py-4" : undefined}
              >
                {open === i ? <p className="text-sm leading-relaxed text-muted">{faq.answer}</p> : null}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
