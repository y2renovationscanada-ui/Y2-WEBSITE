"use client";

import { createContext, useCallback, useContext, useRef, type ReactNode } from "react";
import { site } from "@/lib/content";
import QuoteForm from "./QuoteForm";

const QuoteModalContext = createContext<{ open: () => void }>({ open: () => {} });

export function useQuoteModal() {
  return useContext(QuoteModalContext);
}

export function QuoteButton({ className, children }: { className?: string; children: ReactNode }) {
  const { open } = useQuoteModal();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}

export default function QuoteModalProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = useCallback(() => {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  }, []);

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  return (
    <QuoteModalContext.Provider value={{ open }}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="quote-modal-title"
        onClose={() => {
          document.body.style.overflow = "";
        }}
        onClick={(e) => {
          // close when the backdrop (the dialog element itself) is clicked
          if (e.target === dialogRef.current) close();
        }}
        className="fixed inset-0 m-auto max-h-[92dvh] w-[calc(100%-2rem)] max-w-md overflow-y-auto rounded-2xl bg-white p-0 shadow-2xl backdrop:bg-black/60"
      >
        <div className="relative p-6 sm:p-8">
          <button
            type="button"
            onClick={close}
            aria-label="Close quote form"
            className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-stone-500 transition-colors duration-200 hover:bg-surface hover:text-brand-dark"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h2 id="quote-modal-title" className="pr-8 text-2xl font-bold text-brand-dark">
            Get Your Free Quote
          </h2>
          <p className="mt-1 text-sm text-muted">
            Tell us about your project and we&apos;ll call you back within one business day.
          </p>

          <div className="mt-5">
            <QuoteForm compact />
          </div>

          <p className="mt-5 border-t border-stone-200 pt-4 text-center text-sm text-muted">
            Prefer to talk now?{" "}
            <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="font-bold text-brand hover:underline">
              Call {site.phone}
            </a>
          </p>
        </div>
      </dialog>
    </QuoteModalContext.Provider>
  );
}
