"use client";

import React, { useState } from "react";
import Image from "next/image";
import { site, images } from "@/lib/content";
import { QuoteButton } from "@/components/QuoteModal";
import TrustBadges from "@/components/TrustBadges";
import ThreeStepProcess from "@/components/ThreeStepProcess";
import ReviewStrip from "@/components/ReviewStrip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";


export const projectDetails = [
  "Before demolition starts, we protect your floors and stairs, seal off dust with proper containment, and post permits on site.",
  "Your project manager sends photo updates as work progresses, so you know what's happening even on days you're not home.",
  "Every Friday you get a short written note on where things stand and what's planned for the following week.",
  "If something changes mid-project, we price it and get your sign-off before touching it — no surprise line items on the final invoice.",
  "We walk the whole job ourselves and fix anything that's not up to standard before we ever call you in for the final walkthrough.",
  "At handover, you get every permit, certificate, and warranty document together in one package, plus as-built drawings for your records.",
];

export const faqs = [
  {
    question: "Can you assist with a bathroom remodel in Richmond Hill?",
    answer: "Yes. Y2 Design & Build provides bathroom renovation services for homeowners throughout Richmond Hill and surrounding York Region communities. We offer free, no-obligation consultations and can manage the renovation from initial planning through construction and completion."
  },
  {
    question: "How much does a bathroom remodel in Richmond Hill cost?",
    answer: "The cost of a bathroom renovation depends on several factors, including the size of the space, the complexity of the work, any layout changes, and your choice of fixtures and finishes. For a rough idea, powder rooms typically cost $2,500–$5,000, full bathrooms $9,800–$18,000, and luxury bathrooms $18,000–$35,000."
  },
  {
    question: "How long will my bathroom renovation take?",
    answer: "Timelines vary depending on the scope of work. Most standard bathroom renovations wrap up in around 7–10 days. A four-piece bathroom usually takes 10–12 days, and larger, more complex luxury projects can run anywhere from 2–3 weeks."
  },
  {
    question: "Are the tradespeople you work with licensed and insured?",
    answer: "Absolutely. Y2 Design & Build only works with licensed, insured, and WSIB-covered tradespeople. Our team brings years of hands-on experience completing residential renovations across the GTA and York Region."
  },
  {
    question: "Can you renovate an older or outdated bathroom?",
    answer: "Yes. Whether your bathroom has outdated fixtures, worn finishes, an inefficient layout, limited storage, or aging plumbing and electrical systems, we can help. We'll assess the existing space and recommend the right scope of work before anything gets started."
  },
  {
    question: "Can I change my bathroom layout?",
    answer: "In many cases, yes, though it depends on your home's existing structure, plumbing, electrical setup, and available space. We'll review all of these factors during your consultation and walk you through what's possible."
  },
  {
    question: "Do you take care of permits?",
    answer: "Where permits are required, we can coordinate the permitting process as part of the overall renovation. Whether permits are needed will depend on the nature and scope of your specific project."
  },
];

export default function BathroomClient() {
  const tel = `tel:${site.phone.replace(/\D/g, "")}`;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>

      <Header />

      {/* 1. Value-driven hero */}
      <section className="relative min-h-[480px] overflow-hidden bg-brand-dark text-white">
        <Image
          src={images.bathroom}
          alt={`Bathroom Renovation project by Y2 Design & Build in the GTA`}
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
                    <li aria-hidden="true" className="select-none text-white/40">
                      /
                    </li>
                    <li>
                      <Link href="/bathroom-renovation" className="transition-colors hover:text-white hover:underline">
                        Bathroom Renovation
                      </Link>
                    </li>
                    <li aria-hidden="true" className="select-none text-white/40">
                      /
                    </li>
                    <li className="font-semibold text-white" aria-current="page">
                      Richmond Hill
                    </li>
                  </ol>
                </nav>


              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Licensed & Insured · Serving the GTA
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Bathroom Remodel in Richmond Hill, ON
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                Professional bathroom remodeling for Richmond Hill homeowners, with a structured process, transparent pricing, and one team managing your project from planning through completion.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-2 text-sm text-white/90 sm:text-base">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white" aria-hidden="true"
                  >
                    ✓
                  </span>
                  Custom showers, tubs, vanities, and bathroom finishes
                </li>
                <li className="flex items-start gap-2 text-sm text-white/90 sm:text-base">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white" aria-hidden="true">
                    ✓
                  </span>
                  Complete renovations for primary, family, guest, and powder rooms
                </li>
                <li className="flex items-start gap-2 text-sm text-white/90 sm:text-base">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white" aria-hidden="true"
                  >
                    ✓
                  </span>
                  Licensed and insured renovation professionals
                </li>
                <li className="flex items-start gap-2 text-sm text-white/90 sm:text-base">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white" aria-hidden="true"
                  >
                    ✓
                  </span>
                  Fixed-price, itemized quotes with no obligation
                </li>
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <QuoteButton className="btn-primary cursor-pointer text-center">
                  BOOK YOUR FREE CONSULTATION
                </QuoteButton>
                <a href={tel} className="btn-outline-light text-center">
                  Call {site.phone}
                </a>
              </div>
              <p className="mt-5 text-sm text-white/80">
                <span className="font-bold text-accent">★★★★★ 5.0</span> from
                100+ Google reviews · Free in-home consultations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Offer strip */}
      <section
        className="bg-accent py-4 text-center text-white"
        aria-label="Current offer"
      >
        <p className="text-lg font-bold">
          Save $2,500 On Your Bathroom Renovation.
        </p>
        <p className="text-sm opacity-90">
          Get Free Consultation with No cost, no obligation, and no expectation that you go ahead. If the numbers don't work for you, that's a perfectly good outcome.
        </p>
      </section>

      {/* 3. Trust badges */}
      <TrustBadges />

      {/* 4. Local trust intro */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Bathroom Remodel Contractor Serving Richmond Hill, York Region
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Y2 Design & Build creates bathrooms that combine practical layouts, durable construction, and carefully selected finishes for homeowners throughout Richmond Hill and York Region. A bathroom remodel in Richmond Hill can involve a straightforward cosmetic update or a complete reconstruction of the space. We can help with everything from replacing outdated fixtures and finishes to reworking the layout, installing a new shower or tub, upgrading flooring, and creating more functional storage. Our full-service approach we handle the planning, materials, trades, construction, and finishing with a clear process from the initial consultation to the final walkthrough.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">
                  Book My Free Richmond Hill Consultation
                </QuoteButton>
                <a
                  href={tel}
                  className="text-sm font-bold text-brand-dark hover:text-brand"
                >
                  or call {site.phone}
                </a>
              </div>
            </div>

            <div>
              <img src={images.bathroom2} alt="Bathroom renovation" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process */}
      <ThreeStepProcess />

      {/* Cost */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <img
                src={images.bathroom3}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Bathroom Remodel Richmond Hill Cost & Timeline
              </h2>

              <h3 className="text-2xl font-bold text-brand-dark mt-4">
                Average Cost
              </h3>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <b>Powder rooms:</b> $2,500–$5,000
                </li>
                <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <b>Full bathrooms:</b> $9,800–$18,000
                </li>
                <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <b>Luxury bathrooms:</b>  $18,000–$35,000

                </li>

              </ul>
              <h3 className="text-2xl font-bold text-brand-dark mt-6">
                Typical Timeline
              </h3>

              <p className="mt-4 leading-relaxed text-muted">
                Most bathrooms are finished in 7–10 days. Four-piece bathrooms take 10–12 days, and luxury bathrooms run around 2–3 weeks.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Planning a bathroom remodel in Richmond Hill? Request a free estimate based on your actual space and renovation requirements.
              </p>

            </div>

          </div>
        </div>
      </section>


      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                How Our Richmond Hill Bathroom Remodeling Process Works
              </h2>
              <p className="mt-2 leading-relaxed text-muted">
                Every <a className="underline" href="https://y2designandbuild.com/bathroom-renovation">bathroom renovation</a> starts with a free in-home visit. We walk through your existing bathroom, listen to what you're looking to change, and assess what the work actually involves.
              </p>
              <p className="mt-2 leading-relaxed text-muted">
                For homeowners considering a bathroom remodel in Richmond Hill, this initial assessment helps us flag practical factors before we touch a single tile. That might mean reviewing your current plumbing layout, checking electrical and ventilation needs, confirming waterproofing requirements, or determining whether you need permits.
              </p>
              <p className="mt-2 leading-relaxed text-muted">
                From there, we take ownership of every stage of the renovation process, including:
              </p>

              <ul className="mt-6 space-y-2">
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Initial consultation and site assessment
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Measurements and bathroom layout planning
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Fixture and material selection
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Demolition and site preparation
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Plumbing and electrical work
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Shower and bathtub installation
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Vanity and toilet installation
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Tile and flooring installation
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Lighting and finishing details
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Permit coordination where applicable
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Construction management and cleanup
                </li>
              </ul>

              <p className="mt-2 leading-relaxed text-muted">
                The result is a bathroom planned around how you actually use the space, with an experienced renovation team managing the construction.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">
                  Book My Free Consultation
                </QuoteButton>
                <a
                  href={tel}
                  className="text-sm font-bold text-brand-dark hover:text-brand"
                >
                  or call {site.phone}
                </a>
              </div>
            </div>

            <div>
              <img
                src="https://y2designandbuild.com/images/bathroom-palmer-1.webp"
                alt="Bathroom project"
              />
            </div>
          </div>
        </div>
      </section>


      {/* 7. Social proof */}
      <ReviewStrip />

      {/* 6. Service Areas */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-brand-dark">
            Richmond Hill Areas We Serve
          </h2>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              "Mill Pond",
              "Oak Ridges",
              "Bayview Hill",
              "Richmond Hill Centre ",
              "Elgin Mills",
              "Crosby",
              "Harding",
              "Langstaff",
              "Yongehurst",
              "North Richvale",
              "South Richvale",
              "Jefferson",
            ].map((city) => (
              <div key={city} className="card flex items-start gap-3 p-4">
                <span className="text-brand" aria-hidden="true">
                  ✓
                </span>
                <span className="text-sm text-muted">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface section-pad">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-dark">
            Who We Work With
          </h2>
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                aria-hidden="true"
              >
                ✓
              </span>
              <b>Homeowners:</b> Living space, offices, gyms and media rooms.
            </li>
            <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                aria-hidden="true"
              >
                ✓
              </span>
              <b>Multigenerational households:</b> In-law and nanny suites with proper separation.

            </li>
            <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                aria-hidden="true"
              >
                ✓
              </span>
              <b>Landlords and property investors:</b> Second units, where the property and the rules allow.

            </li>
            <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                aria-hidden="true"
              >
                ✓
              </span>
              <b>Growing families:</b> somewhere for everyone to be, without moving house.

            </li>
          </ul>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="section-heading">What You Can Expect from Y2 Design & Build</h2>
          <p className="section-sub">Clear communication and a tidy job site, from day one to handover.</p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-3">
            {projectDetails.map((detail) => (
              <div key={detail} className="flex items-start gap-3 rounded-xl bg-surface px-5 py-4">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">✓</span>
                <p className="text-sm leading-relaxed text-muted">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad bg-brand-dark text-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold">
            Gallery Of Recent Projects
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="https://y2designandbuild.com/images/bathroom-gall-1.webp"
                alt="gallery photo — Y2 Design & Build GTA"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="https://y2designandbuild.com/images/bathroom-gall-10.webp"
                alt="gallery photo — Y2 Design & Build GTA"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="https://y2designandbuild.com/images/bathroom-palmer-1.webp"
                alt="gallery photo — Y2 Design & Build GTA"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="https://y2designandbuild.com/images/bathroom-3.webp"
                alt="gallery photo — Y2 Design & Build GTA"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="https://y2designandbuild.com/images/bathroom.webp"
                alt="gallery photo — Y2 Design & Build GTA"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="https://y2designandbuild.com/images/bathroom-palmer-2.webp"
                alt="gallery photo — Y2 Design & Build GTA"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
          <div className="mt-10 text-center">
            <QuoteButton className="btn-primary cursor-pointer">
              Start My Bathroom Renovation Quote
            </QuoteButton>
          </div>
        </div>
      </section>


      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl">
          <h2 className="section-heading text-3xl font-bold text-brand-dark">Frequently Asked Questions</h2>
          <p className="section-sub mt-2 text-muted">Common questions from Richmond Hill homeowners planning a bathroom renovation.</p>

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

      <QuoteForm />
      <Footer />
    </>
  );
}