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
  "Our design studio lays out family rooms, bedrooms, and income suites that make full use of bungalow and backsplit basements",
  "Our written fixed quote lists every cost upfront, and no extra work proceeds without your signed approval",
  "Your project manager navigates Toronto Building permits, ESA inspections, and trade scheduling on your behalf",
  "Y2’s English and Mandarin phone lines connect you directly with our team, usually with a response the next business day",
];

const scopeColumns = ["Basement refresh", "Full finish", "Income or in-law suite"];

const scopeRows = [
  {
    label: "Best for",
    values: [
      "Dated basements that are already dry and structurally sound",
      "Unfinished or gutted basements becoming family living space",
      "Rental income, aging parents or adult children",
    ],
  },
  {
    label: "Typical work",
    values: [
      "New flooring, paint, lighting, trim and minor layout changes",
      "Insulation, framing, drywall, flooring, lighting, often a bathroom",
      "Everything in a full finish, plus kitchen, separate entrance, fire separation and interconnected alarms",
    ],
  },
  {
    label: "Permit needed?",
    values: [
      "Usually not, if no walls, plumbing or circuits are added",
      "Usually yes",
      "Yes, along with full code compliance",
    ],
  },
  {
    label: "Where it sits in our pricing",
    values: ["Lower end", "Mid-range", "Upper end"],
  },
];

const costHighlights = [
  {
    title: "Typical cost",
    text: "Expect roughly $50–$120 for every square foot we finish, depending on the layout, any moisture or drain work required, and the finishes you select.",
  },
  {
    title: "Typical timeline",
    text: (
      <>
        Plan on four to eight weeks of construction once{" "}
        <a
          href="https://www.toronto.ca/services-payments/building-construction/building-permit/"
          className="underline"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Toronto Building
        </a>{" "}
        issues the permit.
      </>
    ),
  },
  {
    title: "Biggest cost drivers in Scarborough",
    text: "Adding a bathroom or kitchen, drain repairs, electrical panel upgrades, and creating or adapting a separate entrance.",
  },
];

const projectSteps = [
  {
    title: "On-site evaluation",
    text: "We assess your basement’s ceiling height, moisture, drains, electrical panel, and existing entrances during a free visit.",
  },
  {
    title: "Plan and quote",
    text: "You receive a design and a fixed price itemized by trade and material.",
  },
  {
    title: "Toronto Building permit",
    text: (
      <>
        Your project manager handles the drawings and the application, and lines up{" "}
        <a href="https://esasafe.com/" className="underline" target="_blank" rel="nofollow noopener noreferrer">ESA</a>{" "}
        inspection for the electrical work.
      </>
    ),
  },
  {
    title: "Build and inspections",
    text: (
      <>
        Framing, insulation, plumbing, electrical, and HVAC work are completed and inspected before{" "}
        <a href="https://en.wikipedia.org/wiki/Drywall" rel="nofollow noreferrer noopener" className="underline" target="_blank">drywall</a>{" "}
        goes up.
      </>
    ),
  },
  {
    title: "Finishes",
    text: "We install floors, millwork, doors, and fixtures, checking each as it’s completed.",
  },
  {
    title: "Sign-off and walkthrough",
    text: "We close the permit and walk the finished space with you, resolving any final details.",
  },
];

export const faqs = [
  {
    question: "What is the usual budget for a basement renovation in Scarborough?",
    answer: "Our pricing typically runs $50–$120 per finished square foot. Refreshing an already-finished basement costs the least; building an income suite with a separate kitchen, bathroom, and entry costs the most.",
  },
  {
    question: "Can I use my existing side door as the suite entrance?",
    answer: "Often, yes. We’ll check whether the door, landing, and stairs meet current requirements and how to separate the suite from the main house.",
  },
  {
    question: "Should I have my drain inspected before finishing the basement?",
    answer: "We strongly recommend it for older homes. A camera inspection can reveal roots, corrosion, or sagging pipes that are far easier to repair before the floor is finished.",
  },
  {
    question: "How many units can I have on my Scarborough property?",
    answer: "Toronto’s zoning now allows multiple units on many residential lots, but the exact number depends on your property. We’ll confirm what’s permitted for your address during design.",
  },
  {
    question: "Is a separate hydro meter required for a suite?",
    answer: "No. Splitting the electrical service onto its own meter is a choice, usually made for tenant billing, rather than a requirement. We’ll walk you through the trade-offs.",
  },
];

export default function BasementRenovationScarboroughClient() {
  const tel = `tel:${site.phone.replace(/\D/g, "")}`;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <Header />

      {/* 1. Value-driven hero */}
      <section className="relative min-h-[480px] overflow-hidden bg-brand-dark text-white">
        <Image
          src={basementImages.hero}
          alt="Basement renovation project by Y2 Design & Build in Scarborough"
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
                      Scarborough
                    </li>
                  </ol>
                </nav>
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Licensed & Insured · Serving the GTA
              </p>
              <h1 className="text-lg font-bold leading-tight sm:text-4xl lg:text-4xl">
                Basement Renovation in Scarborough, ON
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                Scarborough has some of the most adaptable basements in Toronto, and <a href="https://y2designandbuild.com/" className="underline">Y2 Design & Build</a> knows how to make the most of them. Hire us for a basement renovation in Scarborough, and our team will design the space, price every component in writing, and manage the build through to the City of Toronto’s final sign-off.
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
                  BOOK YOUR FREE CONSULTATION
                </QuoteButton>
                <a href={tel} className="btn-outline-light text-center">
                  Call {site.phone}
                </a>
              </div>
              <p className="mt-5 text-sm text-white/80">
                <span className="font-bold text-accent">500+ projects completed</span> · Licensed, insured and WSIB-covered · 14+ years serving the GTA · <span className="font-bold text-accent">★★★★★</span> Five-star reviews from Scarborough and GTA homeowners · No-cost consultation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust badges */}
      <TrustBadges />

      {/* 3. Your Scarborough renovation partner */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">Your Scarborough Renovation Partner</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Few parts of the GTA keep our crews as busy as Scarborough, and some of the biggest renovations in our portfolio are here. Our crews know the area’s postwar bungalows, side-splits and backsplits, and we’re used to working within the <a href="https://www.toronto.ca/services-payments/building-construction/building-permit/" rel="nofollow noopener noreferrer" className="underline" target="blank">City of Toronto’s</a> permit and inspection process. Because our showroom sits a short drive away in Markham, design meetings and material selections fit easily into your schedule.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                That familiarity shapes every basement renovation in Scarborough we deliver. We anticipate the low ceilings, older drains, and modest electrical panels common in homes from the 1950s through the 1970s, and we plan for them from the first visit rather than discovering them halfway through construction.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">Book My Free Consultation</QuoteButton>
                <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
                  or call {site.phone}
                </a>
              </div>
            </div>

            <div>
              <img src={basementImages.intro} alt="Basement renovation in Scarborough" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Refresh, full finish or income suite */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Refresh, Full Finish or Income Suite?
          </h2>
          <p className="mx-auto mt-4 max-w-5xl text-center leading-relaxed text-muted">
            The right scope for a basement renovation in Scarborough depends on your goals, your budget and how long you plan to stay in the house. These three routes cover most of the basements we see:
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-center text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">
                    <span className="sr-only">Compare</span>
                  </th>
                  {scopeColumns.map((col) => (
                    <th key={col} className="px-4 py-3 font-semibold">{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {scopeRows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.label}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="px-4 py-3 text-muted">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Side entrance */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Using the Side Entrance Many Scarborough Homes Already Have
          </h2>
          <p className="mx-auto mt-4 max-w-5xl text-center leading-relaxed text-muted">
            Many postwar bungalows and <a href="https://en.wiktionary.org/wiki/backsplit" rel="nofollow noreferrer noopener" className="underline" target="blank">backsplits</a> in Scarborough were built with a side door that opens onto a landing between the main floor and the basement. For homeowners considering a secondary suite, this existing entrance can be a major advantage, because creating a new separate entrance is often one of the costliest parts of a suite.
          </p>
          <p className="mx-auto mt-4 max-w-5xl text-center leading-relaxed text-muted">
            During design, we assess whether the existing side door can serve as the suite’s entrance and exit, whether the landing and stairs meet current requirements, and how to separate the suite from the main house with a rated door and wall assembly. Where the side door can’t be used, we look at options such as a new rear walk-up entrance.
          </p>
        </div>
      </section>

      {/* 6. Check the drain */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Check the Drain Before You Finish
          </h2>
          <p className="mx-auto mt-4 max-w-5xl text-center leading-relaxed text-muted">
            One of the most valuable steps before any <b>basement renovation in Scarborough</b> takes only an hour: a camera inspection of the main drain. Many older Scarborough homes still have original cast-iron drain stacks inside the house and older sewer connections running out to the street. Tree roots, corrosion, or sagging sections can cause slow drains or backups, and a backup into a newly finished basement is costly and disruptive.
          </p>
          <p className="mx-auto mt-4 max-w-5xl text-center leading-relaxed text-muted">
            If the inspection reveals problems, they’re far easier and cheaper to fix before the floor is covered. While the basement is open, it’s also the right time to install a backwater valve, confirm the floor drain is working, and add an accessible cleanout so future maintenance doesn’t mean cutting into finished walls.
          </p>
        </div>
      </section>

      {/* 7. Toronto's rules for extra units */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Toronto’s Rules for Extra Units in Scarborough
          </h2>
          <p className="mx-auto mt-4 max-w-5xl text-center leading-relaxed text-muted">
            Because Scarborough is part of the City of Toronto, it follows <a href="https://www.toronto.ca/city-government/planning-development/zoning-by-law-preliminary-zoning-reviews/" rel="nofollow noopener noreferrer" className="underline" target="blank">Toronto’s zoning rules</a>, which now permit multiple residential units on many residential lots, including secondary suites in existing houses and, in many cases, garden suites in the backyard. Even so, every basement unit must comply with Ontario’s building and fire codes, and it needs a permit plus inspections along the way.
          </p>
          <p className="mx-auto mt-4 max-w-5xl text-center leading-relaxed text-muted">
            Our article on{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/what-makes-a-basement-apartment-legal-in-ontario">
              what a legal basement apartment needs in Ontario
            </Link>{" "}
            explains the main requirements, including ceiling height, egress, fire separation, and alarms. If you’d rather add a separate dwelling in the yard, see our{" "}
            <Link className="underline" href="https://y2designandbuild.com/adu-construction">
              garden suite and ADU services
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 8. Cost and timeline */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Basement Renovation in Scarborough: Cost and Timeline
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {costHighlights.map((item) => (
              <div key={item.title} className="card bg-surface p-6">
                <h3 className="text-lg font-bold text-brand-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-5xl text-center leading-relaxed text-muted">
            For a deeper breakdown, see our guide to{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/how-much-does-basement-renovation-cost-gta">
              basement renovation costs in the GTA
            </Link>
            .
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <QuoteButton className="btn-primary cursor-pointer">Get My Free Quote</QuoteButton>
            <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
              or call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 9. Process */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Our Scarborough Basement Process</h2>
          <ol className="mx-auto mt-10 grid max-w-4xl gap-4">
            {projectSteps.map((step, i) => (
              <li key={step.title} className="flex items-start gap-4 rounded-xl bg-white px-5 py-4 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-relaxed text-muted">
            We photograph and price anything hidden that demolition exposes in writing, and nothing extra happens until you say yes. To understand when permits are required, read our guide on{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/do-you-need-a-permit-to-finish-your-basement-in-markham">
              permit triggers for basement finishing
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 10. Social proof */}
      <ReviewStrip />

      {/* 11. Neighborhoods */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Scarborough Neighborhoods We Serve</h2>
          <p className="mx-auto mt-4 max-w-5xl text-center leading-relaxed text-muted">
            Our basement work covers all of Scarborough: Rouge, Morningside Heights, Malvern and Agincourt in the north; Tam O’Shanter, L’Amoreaux, Wexford and Dorset Park in the center-west; Bendale and Highland Creek in the middle; and Birchcliff, Cliffside, Cliffcrest, Guildwood, West Hill and the Scarborough Bluffs along the lake.
          </p>

          <p className="mx-auto mt-6 max-w-5xl text-center leading-relaxed text-muted">
            You can also explore our{" "}
            <Link className="underline" href="https://y2designandbuild.com/kitchen-renovation/scarborough">Scarborough kitchen renovation</Link>,{" "}
            <Link className="underline" href="https://y2designandbuild.com/bathroom-renovation/scarborough">Scarborough bathroom remodeling</Link>, and{" "}
            <Link className="underline" href="https://y2designandbuild.com/home-renovation/scarborough">Scarborough home renovation</Link> services. Beyond Scarborough, our basement crews renovate homes in{" "}
            <Link className="underline" href="https://y2designandbuild.com/basement-renovation/toronto">Toronto</Link>,{" "}
            <Link className="underline" href="https://y2designandbuild.com/basement-renovation/markham">Markham</Link>,{" "}
            <Link className="underline" href="https://y2designandbuild.com/basement-renovation/pickering">Pickering</Link>,{" "}
            <Link className="underline" href="https://y2designandbuild.com/basement-renovation/ajax">Ajax</Link>, and{" "}
            <Link className="underline" href="https://y2designandbuild.com/basement-renovation/oakville">Oakville</Link>. Browse our{" "}
            <Link className="underline" href="https://y2designandbuild.com/service-areas">full service area</Link> or return to our{" "}
            <a className="underline" href="https://y2designandbuild.com/basement-renovation">basement renovation overview</a>.
          </p>
        </div>
      </section>

    {/* 13. Gallery */}
        <section className="section-pad bg-brand-dark text-white">
          <div className="container-page">
            <h2 className="text-center text-3xl font-bold">Gallery Of Recent Projects</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {basementImages.gallery.map((src) => (
                <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={src}
                    alt="Home renovation gallery photo — Y2 Design & Build GTA"
                    fill
                    loading="lazy"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <QuoteButton className="btn-primary cursor-pointer">Start My Home Renovation Quote</QuoteButton>
            </div>
          </div>
        </section>
      {/* 12. FAQ */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-5xl">
          <h2 className="section-heading text-3xl font-bold text-brand-dark">Scarborough Basement FAQs</h2>
          <p className="section-sub mt-2 text-muted">
            Common questions from Scarborough homeowners planning a basement renovation.
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

      {/* 13. Helpful reading */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Helpful Reading Before You Start</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Before your basement renovation in Scarborough begins, review{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/does-your-home-insurance-cover-a-renovation">
              whether your home insurance covers renovation work
            </a>{" "}
            and consider how{" "}
            <a className="underline" href="https://y2designandbuild.com/flooring">flooring choices</a> will tie the basement into the rest of your home. And if you’d like to know who you’ll be working with,{" "}
            <a className="underline" href="https://y2designandbuild.com/about">meet our team</a>.
          </p>
        </div>
      </section>

      {/* 14. Get started */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Your Scarborough Basement Starts With a Conversation</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Describe what you’d like downstairs, and one of our team will come out, look at the space, and follow up with a detailed fixed price, free of any commitment. For English, ring{" "}
            <a className="underline" href="tel:6475073639">(647) 507-3639</a>; for Mandarin, it’s{" "}
            <a className="underline" href="tel:6472942888">(647) 294-2888</a>. Emails go to{" "}
            <a className="underline" href="mailto:info@y2canada.com">info@y2canada.com</a>, and you’re welcome to{" "}
            <a className="underline" href="https://y2designandbuild.com/contact">schedule online</a>.
          </p>
          <div className="mt-8">
            <QuoteButton className="btn-primary cursor-pointer">Book My Free Consultation</QuoteButton>
          </div>
        </div>
      </section>

      <QuoteForm />
      <Footer />
    </>
  );
}