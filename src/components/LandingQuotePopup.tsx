"use client";

import { useCallback, useEffect, useRef } from "react";
import { quoteForm, site } from "@/lib/content";
import QuoteForm from "./QuoteForm";

const STORAGE_PREFIX = "y2-landing-popup-dismissed:";
const OPEN_DELAY_MS = 1200;

/**
 * Auto-opens a dismissible quote popup on city × service landing pages only
 * (e.g. /kitchen-renovation/markham). Uses the dedicated landing-page Make.com webhook.
 */
export default function LandingQuotePopup({
  headline = "Get Your Free Quote",
  subhead = "Tell us about your project — or close this and browse first. We reply within one business day.",
}: {
  headline?: string;
  subhead?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const close = useCallback(() => {
    dialogRef.current?.close();
    try {
      const path = typeof window !== "undefined" ? window.location.pathname : "";
      sessionStorage.setItem(STORAGE_PREFIX + path, "1");
    } catch {
      /* ignore private mode */
    }
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    try {
      if (sessionStorage.getItem(STORAGE_PREFIX + path)) return;
    } catch {
      /* ignore */
    }

    const timer = window.setTimeout(() => {
      const el = dialogRef.current;
      if (!el || el.open) return;
      el.showModal();
      document.body.style.overflow = "hidden";
    }, OPEN_DELAY_MS);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="landing-quote-title"
      onClose={() => {
        document.body.style.overflow = "";
        try {
          sessionStorage.setItem(STORAGE_PREFIX + window.location.pathname, "1");
        } catch {
          /* ignore */
        }
      }}
      onClick={(e) => {
        if (e.target === dialogRef.current) close();
      }}
      className="fixed left-1/2 top-1/2 z-50 max-h-[92dvh] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl bg-white p-0 shadow-2xl backdrop:bg-black/55"
    >
      <div className="relative p-6 sm:p-8">
        <button
          type="button"
          onClick={close}
          aria-label="Close and continue browsing"
          className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-stone-500 transition-colors duration-200 hover:bg-surface hover:text-brand-dark"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">Free consultation</p>
        <h2 id="landing-quote-title" className="mt-1 pr-8 text-2xl font-bold text-brand-dark">
          {headline}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{subhead}</p>

        <div className="mt-5">
          <QuoteForm
            compact
            formId="landing-popup"
            webhookUrl={quoteForm.landingWebhookUrl}
            source="landing-page-popup"
          />
        </div>

        <p className="mt-5 border-t border-stone-200 pt-4 text-center text-sm text-muted">
          Prefer to talk now?{" "}
          <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="font-bold text-brand hover:underline">
            Call {site.phone}
          </a>
        </p>
        <button
          type="button"
          onClick={close}
          className="mt-3 w-full cursor-pointer text-center text-xs font-medium text-stone-500 underline-offset-2 hover:text-brand-dark hover:underline"
        >
          No thanks — continue browsing
        </button>
      </div>
    </dialog>
  );
}
