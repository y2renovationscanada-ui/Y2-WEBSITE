"use client";

import { useCallback, useEffect, useRef } from "react";
import { quoteForm, site } from "@/lib/content";
import QuoteForm from "./QuoteForm";

const STORAGE_KEY = "y2-landing-popup-dismissed";
const OPEN_DELAY_MS = 4500;

/**
 * Auto-opens a dismissible quote popup on city × service landing pages only
 * (e.g. /kitchen-renovation/markham). Uses the dedicated landing-page Make.com webhook.
 * Once dismissed in a session, it stays closed across all landing pages.
 */
export default function LandingQuotePopup({
  headline = "Get Your Free Quote",
  subhead = "Tell us about your project — or close this and browse first. We reply within one business day.",
}: {
  headline?: string;
  subhead?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openedRef = useRef(false);

  const unlockBody = useCallback(() => {
    document.body.style.removeProperty("overflow");
  }, []);

  const close = useCallback(() => {
    dialogRef.current?.close();
    unlockBody();
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore private mode */
    }
  }, [unlockBody]);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* ignore */
    }

    const timer = window.setTimeout(() => {
      const el = dialogRef.current;
      if (!el || el.open || openedRef.current) return;
      openedRef.current = true;
      el.showModal();
      document.body.style.overflow = "hidden";
    }, OPEN_DELAY_MS);

    return () => {
      window.clearTimeout(timer);
      if (dialogRef.current?.open) unlockBody();
    };
  }, [unlockBody]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="landing-quote-title"
      onClose={() => {
        unlockBody();
        try {
          sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {
          /* ignore */
        }
      }}
      onClick={(e) => {
        if (e.target === dialogRef.current) close();
      }}
      className="fixed left-1/2 top-1/2 z-50 max-h-[min(92dvh,720px)] w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-y-auto overscroll-contain rounded-2xl bg-white p-0 shadow-2xl backdrop:bg-black/55"
    >
      <div className="relative p-5 sm:p-8">
        <button
          type="button"
          onClick={close}
          aria-label="Close and continue browsing"
          className="absolute right-3 top-3 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/90 text-stone-500 shadow-sm transition-colors duration-200 hover:bg-surface hover:text-brand-dark sm:right-4 sm:top-4"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">Free consultation</p>
        <h2 id="landing-quote-title" className="mt-1 pr-10 text-2xl font-bold text-brand-dark">
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
          className="mt-3 w-full cursor-pointer pb-[env(safe-area-inset-bottom)] text-center text-xs font-medium text-stone-500 underline-offset-2 hover:text-brand-dark hover:underline"
        >
          No thanks — continue browsing
        </button>
      </div>
    </dialog>
  );
}
