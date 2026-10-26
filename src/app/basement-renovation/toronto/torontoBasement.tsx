"use client";

import React, { useState } from "react";
import Image from "next/image";
import { site } from "@/lib/content";
import { QuoteButton } from "@/components/QuoteModal";
import TrustBadges from "@/components/TrustBadges";
import ReviewStrip from "@/components/ReviewStrip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";

const basementImages = {
  hero: "https://y2designandbuild.com/images/basement.webp",
  intro: "https://y2designandbuild.com/images/basement-gall-1.webp",
  gallery: [
    "https://y2designandbuild.com/images/basement-gallery-1.webp",
    "https://y2designandbuild.com/images/basement-gallery-2.webp",
    "https://y2designandbuild.com/images/basement-gallery-3.webp",
    "https://y2designandbuild.com/images/basement-gallery-4.webp",
    "https://y2designandbuild.com/images/basement-gallery-5.webp",
    "https://y2designandbuild.com/images/basement-gallery-6.webp",
    "https://y2designandbuild.com/images/basement-gallery-7.webp",
    "https://y2designandbuild.com/images/basement-gallery-8.webp",
    "https://y2designandbuild.com/images/basement-gallery-9.webp",
    "https://y2designandbuild.com/images/basement-gallery-10.webp",
    "https://y2designandbuild.com/images/basement-gallery-11.webp",
    "https://y2designandbuild.com/images/basement-gallery-12.webp",
  ],
};

const heroBullets = [
  "Legal secondary suites & in-law units",
  "Rec rooms, home theatres & home gyms",
  "Waterproofing, insulation & proper egress",
];

const steps = [
  {
    label: "Book Your Free Consultation:",
    text: "Call or request a quote online. We visit your home, take measurements, and listen to what you want — no pressure, no charge.",
  },
  {
    label: "Approve Your Fixed-Price Quote:",
    text: "You get a written, itemized quote covering scope, materials, and labour. The price you approve is the price you pay.",
  },
  {
    label: "We Build. You Move In.",
    text: "One dedicated project manager runs your renovation on a locked schedule — permits, trades, and cleanup all handled for you.",
  },
];

const costCards = [
  {
    title: "Average Cost",
    text: "Basement renovations typically range from $50–$120 per sq ft depending on layout, moisture mitigation, and finish level.",
  },
  {
    title: "Typical Timeline",
    text: "Most basement finishing projects take 4–8 weeks depending on scope and permit requirements.",
  },
];

const neighborhoods = [
  "The Bridle Path",
  "York Mills",
  "Sunnybrook",
  "St. Andrew-Windfields",
  "Hoggs Hollow",
  "Rosedale",
  "Forest Hill South",
  "Forest Hill North",
  "Casa Loma",
  "Moore Park",
  "Lawrence Park",
  "The Annex",
  "Leaside",
  "Summerhill",
  "Bedford Park-Nortown",
  "Kingsway South",
  "Yorkville",
  "Yonge-St. Clair",
  "Willowdale",
  "Wychwood",
];

const otherServices = [
  { label: "Kitchen Renovation in Toronto", href: "https://y2designandbuild.com/kitchen-renovation/toronto" },
  { label: "Bathroom Renovation in Toronto", href: "https://y2designandbuild.com/bathroom-renovation/toronto" },
  { label: "Home Renovation in Toronto", href: "https://y2designandbuild.com/home-renovation/toronto" },
  { label: "Basement Renovation — GTA Overview", href: "https://y2designandbuild.com/basement-renovation" },
  { label: "Toronto Renovation Guide", href: "https://y2designandbuild.com/toronto" },
];

const nearbyCities = [
  { label: "Basement Renovation in Markham", href: "https://y2designandbuild.com/basement-renovation/markham" },
  { label: "Basement Renovation in Pickering", href: "https://y2designandbuild.com/basement-renovation/pickering" },
  { label: "Basement Renovation in Oakville", href: "https://y2designandbuild.com/basement-renovation/oakville" },
  { label: "Basement Renovation in Ajax", href: "https://y2designandbuild.com/basement-renovation/ajax" },
  { label: "Basement Renovation in Scarborough", href: "https://y2designandbuild.com/basement-renovation/scarborough" },
  { label: "View All Service Areas", href: "https://y2designandbuild.com/service-areas" },
];

export const faqs = [
  {
    question: "Do you offer basement renovation services in Toronto?",
    answer: "Yes — Y2 Design & Build proudly serves Toronto and the surrounding City of Toronto communities, including The Bridle Path, York Mills, Sunnybrook, St. Andrew-Windfields, Hoggs Hollow, Rosedale, and 14 more neighbourhoods across Toronto. We provide free, no-obligation in-home consultations for every basement renovation project.",
  },
  {
    question: "How much does a basement renovation cost in Toronto?",
    answer: "Basement renovations typically range from $50–$120 per sq ft depending on layout, moisture mitigation, and finish level.",
  },
  {
    question: "How long does a basement renovation take in Toronto?",
    answer: "Most basement finishing projects take 4–8 weeks depending on scope and permit requirements.",
  },
  {
    question: "Are you licensed and insured to work in Toronto?",
    answer: "Yes — all Y2 Design & Build trades are licensed, WSIB-insured, and experienced with City of Toronto municipal permit requirements.",
  },
];

export default function BasementRenovationTorontoClient() {
  const tel = `tel:${site.phone.replace(/\D/g, "")}`;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <Header />

      {/* 1. Value-driven hero */}
      <section className="relative min-h-[480px] overflow-hidden bg-brand-dark text-white">
        <Image
          src={basementImages.hero}
          alt="Basement renovation project in Toronto, Ontario"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/50" />

        <div className="grid items-center gap-3">
          <div className="container-page relative flex min-h-[480px] items-center py-16">
            <div className="max-w-2xl">
              <div className="mb-4">
                <nav aria-label="Breadcrumb">
                  <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm">
                    <li>
                      <Link href="/" className="transition-colors hover:text-white hover:underline">
                        Home
                      </Link>
                    </li>
                    <li aria-hidden="true" className="select-none text-white/40">/</li>
                    <li>
                      <Link href="/basement-renovation" className="transition-colors hover:text-white hover:underline">
                        Basement Renovation
                      </Link>
                    </li>
                    <li aria-hidden="true" className="select-none text-white/40">/</li>
                    <li className="font-semibold text-white" aria-current="page">
                      Toronto
                    </li>
                  </ol>
                </nav>
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                City of Toronto · Licensed & Insured
              </p>
              <h1 className="text-lg font-bold leading-tight sm:text-4xl lg:text-4xl">
                Basement Renovation in Toronto, ON
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                Fixed-price basement renovation services for homeowners in Toronto and across City of Toronto — from free consultation to final walkthrough.
              </p>
              <ul className="mt-6 space-y-3">
                {heroBullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-white/90 sm:text-base">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <QuoteButton className="btn-primary cursor-pointer text-center">
                  Get My Free Toronto Quote
                </QuoteButton>
                <a href={tel} className="btn-outline-light text-center">
                  Call {site.phone}
                </a>
              </div>
              <p className="mt-5 text-sm text-white/80">
                <span className="font-bold text-accent">★★★★★ 5.0</span> from
                100+ Google reviews · Free in-home consultations in Toronto
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust badges */}
      <TrustBadges />

      {/* 3. Contractor serving Toronto */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">Basement Renovation Contractor Serving Toronto, City of Toronto</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Looking for a trusted basement renovation contractor in Toronto?{" "}
                <a href="https://y2designandbuild.com/" className="underline">Y2 Design & Build</a> has completed renovation projects throughout City of Toronto, including The Bridle Path, York Mills, Sunnybrook, St. Andrew-Windfields, Hoggs Hollow, Rosedale, and 14 more neighbourhoods across Toronto. From century homes in Rosedale and Forest Hill to modern condos in Yorkville and Willowdale, Toronto's most distinctive neighbourhoods demand renovation contractors who understand heritage details,{" "}
                <a
                  href="https://www.toronto.ca/services-payments/building-construction/apply-for-a-building-permit/"
                  rel="nofollow noopener noreferrer"
                  className="underline"
                  target="_blank"
                >
                  Toronto Building
                </a>{" "}
                permits, and high-end finish standards.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">Book My Free Toronto Consultation</QuoteButton>
                <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
                  or call {site.phone}
                </a>
              </div>
            </div>

            <div className={`card relative aspect-[4/3] overflow-hidden bg-black`}>
              <iframe
                src={`https://www.tiktok.com/player/v1/7625752799006985480`}
                loading="lazy"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Three simple steps */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Your Toronto Basement Renovation in 3 Simple Steps</h2>
          <p className="mx-auto mt-4 max-w-5xl text-center leading-relaxed text-muted">
            From first call to final walkthrough — here's exactly how it works.
          </p>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4">
            {steps.map((item) => (
              <li key={item.label} className="card flex items-start gap-3 bg-white p-5 text-sm leading-relaxed text-muted">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span>
                  <b className="text-brand-dark">{item.label}</b> {item.text}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <QuoteButton className="btn-primary cursor-pointer">Get My Free Quote</QuoteButton>
            <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
              or call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 5. Cost and timeline */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Toronto Basement Renovation Cost & Timeline
          </h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
            {costCards.map((item) => (
              <div key={item.title} className="card bg-surface p-6">
                <h3 className="text-lg font-bold text-brand-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-muted">
            Every Toronto home is different — request a free, itemized estimate specific to your project, or call{" "}
            <a className="underline" href="tel:6475073639">(647) 507-3639</a>.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <QuoteButton className="btn-primary cursor-pointer">Get My Free Quote</QuoteButton>
            <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
              or call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 6. Social proof */}
      <ReviewStrip />

      {/* 7. Process and neighbourhoods */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">How Our Toronto Basement Renovation Process Works</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Every basement renovation project in Toronto starts with a free, no-obligation in-home consultation near Yorkville. We measure your space, discuss your goals, and provide a written, itemized quote — no pressure, no hidden fees. Whether your home is in The Bridle Path, York Mills, Sunnybrook, St. Andrew-Windfields, Hoggs Hollow, Rosedale, and 14 more neighbourhoods across Toronto, our licensed and insured team manages design, permits, materials, and installation from start to finish.
          </p>

          <h3 className="mt-10 text-center text-xl font-bold text-brand-dark">Neighbourhoods We Serve in Toronto</h3>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            {neighborhoods.join(" · ")}
          </p>
        </div>
      </section>

      {/* 8. Gallery */}
      <section className="section-pad bg-brand-dark text-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold">Recent Basement Renovation Projects</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {basementImages.gallery.map((src, i) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={src}
                  alt={`Basement Renovation gallery photo ${i + 1} near Toronto, Ontario`}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <QuoteButton className="btn-primary cursor-pointer">Start My Toronto Project</QuoteButton>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl">
          <h2 className="section-heading text-3xl font-bold text-brand-dark">Basement Renovation FAQs — Toronto, ON</h2>
          <p className="section-sub mt-2 text-muted">
            Common questions from Toronto homeowners about basement renovation projects.
          </p>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, i) => (
              <div key={faq.question} className="card overflow-hidden">
                <h3 className="m-0">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                  >
                    <span className="font-semibold text-brand-dark">{faq.question}</span>
                    <svg
                      className={`h-5 w-5 shrink-0 text-brand transition ${open === i ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </h3>
                <div className={open === i ? "border-t border-stone-200 px-5 py-4" : "hidden"}>
                  <p className="text-sm leading-relaxed text-muted">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Other services and nearby cities */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Other Renovation Services in Toronto</h2>
          <ul className="mt-4 space-y-2 leading-relaxed text-muted">
            {otherServices.map((link) => (
              <li key={link.href}>
                <a className="underline" href={link.href}>{link.label} →</a>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-3xl font-bold text-brand-dark">Basement Renovation in Nearby Cities</h2>
          <ul className="mt-4 space-y-2 leading-relaxed text-muted">
            {nearbyCities.map((link) => (
              <li key={link.href}>
                <a className="underline" href={link.href}>{link.label} →</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <QuoteForm />
      <Footer />
    </>
  );
}