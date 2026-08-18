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
    question: "How much does a bathroom renovation in Burlington cost?",
    answer: "Costs vary by project scope. Powder rooms typically fall between $2,500 and $5,000, while full bathroom renovations generally range from $9,800 to $18,000. Luxury bathrooms can run anywhere from $18,000 to $35,000. The final figure will depend on the specific materials, fixtures, and construction requirements involved."
  },
  {
    question: "Do I have to replace everything during a bathroom renovation?",
    answer: "Not at all. If certain fixtures or finishes are still in good condition and work with the overall design, we can incorporate them into the renovation plan. Every project is different, and we'll work with you to determine what makes sense to keep and what's worth updating."
  },
  {
    question: "How long does a bathroom renovation in Burlington take?",
    answer: "Most standard bathroom renovations take approximately 7–10 days. Four-piece bathrooms generally take 10–12 days, while larger luxury projects can take around 2–3 weeks."
  },
  {
    question: "What design styles are available for bathroom renovations?",
    answer: "We work with a wide range of styles to suit your personal taste. Whether you prefer a sleek contemporary look, a classic traditional feel, or something more unique, we can tailor the design using different combinations of tile, cabinetry, fixtures, colors, and materials."
  },
  {
    question: "How can storage be improved in a small bathroom?",
    answer: "There are several ways to add more storage to a compact bathroom. Depending on the layout and dimensions, options may include a well-configured vanity, built-in cabinetry, shelving, or recessed wall solutions that make the most of available space." 
   },
  {
    question: "Can you swap out a bathtub for a shower?",
    answer: "In most cases, yes. Converting a tub to a shower can improve the functionality of the room and create a more practical layout. We'll consider existing plumbing, room dimensions, waterproofing, and your preferred shower design." },
  {
    question: "Can an ensuite bathroom be renovated alongside other home improvements?",
    answer: "Absolutely. An ensuite can be updated on its own or as part of a broader home renovation. Coordinating the work across multiple rooms at the same time can streamline the process and help ensure a consistent result throughout your home."
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
                      Burlington                    </li>
                  </ol>
                </nav>


              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Licensed & Insured · Serving the GTA
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
Bathroom Renovation in Burlington, ON
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
A thoughtfully renovated bathroom can improve how your home looks, feels, and functions every day. We deliver complete bathroom renovation in Burlington with experienced trades and professional project coordination.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-2 text-sm text-white/90 sm:text-base">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white" aria-hidden="true"
                  >
                    ✓
                  </span>
                  Complete bathroom renovations from demolition to finishing
                </li>
                <li className="flex items-start gap-2 text-sm text-white/90 sm:text-base">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white" aria-hidden="true">
                    ✓
                  </span>
                  Custom layouts, showers, tubs, vanities, tile, and flooring
                </li>
                <li className="flex items-start gap-2 text-sm text-white/90 sm:text-base">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white" aria-hidden="true"
                  >
                    ✓
                  </span>
                  Free consultations with detailed project estimates
                </li>
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <QuoteButton className="btn-primary cursor-pointer text-center">
                  Get My Free Burlington Quote
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
Bathroom Renovation in Burlington Designed Around Your Home
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
A bathroom should be planned around the people using it, the room's dimensions, and the home's character. Y2 Design & Build considers all three when developing a renovation. Some Burlington homeowners want to refresh dated finishes while keeping the existing footprint, while others need a completely different layout to gain storage, improve circulation, or enlarge a shower. Our team can work with either approach.
              </p>
               <p className="mt-4 leading-relaxed text-muted">
With bathroom renovation in Burlington, you can address multiple elements at the same time instead of treating each upgrade as a separate project. Y2 Design & Build provides the planning and construction support required to bring these details together. From the initial assessment through installation and finishing, we coordinate the work as one renovation.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">
                  Book My Free Burlington Consultation
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
Burlington Bathroom Renovation Cost & Timeline
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
A standard bathroom renovation in Burlington generally takes 7–10 days. Four-piece bathrooms usually require 10–12 days, while luxury renovations can take 2–3 weeks.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
Get a project-specific estimate by scheduling your free consultation.
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
What Can Be Included in Your Bathroom Renovation?
              </h2>
              <p className="mt-2 leading-relaxed text-muted">
The scope of a <a href="https://y2designandbuild.com/bathroom-renovation" className="underline">bathroom renovation</a> project can be as focused or comprehensive as your home requires. During the initial assessment, we determine what needs to be replaced, relocated, repaired, or redesigned.
              </p>


              <p className="mt-2 leading-relaxed text-muted">
A complete bathroom renovation in Burlington may include:
              </p>

              <ul className="mt-6 space-y-2">
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Removal of existing bathroom fixtures and finishes
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> New bathroom layout and space planning
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Plumbing modifications
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Electrical upgrades
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> New lighting
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Shower or bathtub replacement
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Walk-in shower installation
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Waterproofing, Wall and floor tile
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Vanity and countertop installation
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Toilet and sink replacement
                </li>
                 <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Mirrors and finishing elements 
                </li>
                 <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Permit coordination where applicable
                </li>
              </ul>

              <p className="mt-2 leading-relaxed text-muted">
The advantage of handling these components in one renovation is that you can make decisions together. We select a vanity with the available wall space in mind. We plan tiling around the shower configuration, position lighting according to the layout rather than adding it as an afterthought. That level of coordination helps create a finished bathroom that feels intentional, not assembled from unrelated upgrades.
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
Burlington Communities We Serve
          </h2>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              "Aldershot",
              "Alton Village",
              "Brant Hills",
              "Headon Forest",
              "Millcroft",
              "Roseland",
              "Shoreacres",
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
          <p className="section-sub mt-2 text-muted">Common questions from Burlington homeowners about bathroom remodeling projects.</p>

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