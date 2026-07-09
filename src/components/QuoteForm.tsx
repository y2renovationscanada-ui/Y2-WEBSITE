"use client";

import { useState, type FormEvent } from "react";
import { quoteForm, site } from "@/lib/content";

const inputClass =
  "w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("page", typeof window !== "undefined" ? window.location.pathname : "");
    setStatus("submitting");
    try {
      // Netlify Forms convention: POST url-encoded data to any path on the site.
      // The hidden mirror form lives in public/__forms.html so the build gets detected.
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(`Form submit failed: ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={`rounded-2xl border border-green-200 bg-green-50 p-6 text-center ${compact ? "" : "mt-8"}`} role="status">
        <svg className="mx-auto h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="mt-3 text-lg font-bold text-green-900">{quoteForm.successTitle}</p>
        <p className="mt-1 text-sm text-green-800">{quoteForm.successBody}</p>
      </div>
    );
  }

  const form = (
    <form
      className={`space-y-4 ${compact ? "" : "mt-8"}`}
      name={quoteForm.formName}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={quoteForm.formName} />
      <input type="hidden" name="page" value="" />
      <p className="hidden" aria-hidden="true">
        <label>
          Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div>
        <label htmlFor={`qf-name-${compact}`} className="sr-only">Full name</label>
        <input id={`qf-name-${compact}`} type="text" name="name" placeholder="Full name" required autoComplete="name" className={inputClass} />
      </div>
      <div>
        <label htmlFor={`qf-phone-${compact}`} className="sr-only">Phone number</label>
        <input id={`qf-phone-${compact}`} type="tel" name="phone" placeholder="Phone number" required autoComplete="tel" className={inputClass} />
      </div>
      <div>
        <label htmlFor={`qf-email-${compact}`} className="sr-only">Email address</label>
        <input id={`qf-email-${compact}`} type="email" name="email" placeholder="Email address" required autoComplete="email" className={inputClass} />
      </div>
      <div>
        <label htmlFor={`qf-address-${compact}`} className="sr-only">Project address or city</label>
        <input id={`qf-address-${compact}`} type="text" name="address" placeholder="Project address or city" autoComplete="street-address" className={inputClass} />
      </div>
      <div>
        <label htmlFor={`qf-type-${compact}`} className="sr-only">Project type</label>
        <select id={`qf-type-${compact}`} name="projectType" defaultValue="" required className={inputClass}>
          <option value="" disabled>Project type</option>
          {quoteForm.projectTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor={`qf-details-${compact}`} className="sr-only">Project details</label>
        <textarea
          id={`qf-details-${compact}`}
          name="details"
          placeholder="Tell us about your project..."
          rows={compact ? 3 : 4}
          className={inputClass}
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          {quoteForm.errorBody}{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline">{site.email}</a>
          {" · "}
          <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="font-semibold underline">{site.phone}</a>
        </p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70">
        {status === "submitting" ? "Sending..." : "Get My Free Quote"}
      </button>
      <p className={`text-center text-xs ${compact ? "text-muted" : "text-white/60"}`}>{quoteForm.reassurance}</p>
    </form>
  );

  if (compact) return form;

  return (
    <section className="section-pad bg-brand-dark text-white" id="quote">
      <div className="container-page max-w-xl">
        <h2 className="text-center text-3xl font-bold">Get Your Free Renovation Quote</h2>
        <p className="mt-2 text-center text-white/70">
          Tell us about your project — or call{" "}
          <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="font-bold text-white hover:text-accent">
            {site.phone}
          </a>{" "}
          to talk now.
        </p>
        {form}
      </div>
    </section>
  );
}
