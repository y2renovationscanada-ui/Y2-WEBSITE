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

const heroBullets = [
  "In-house design-build team",
  "3D layouts you sign off on",
  "Itemized fixed pricing",
  "One accountable project manager",
  "Durham Region crews",
  "English and Mandarin lines",
];

const paceRows = [
  {
    factor: "Layout",
    short: "Toilet, tub and vanity stay in place",
    adds: "Moving drains or walls",
  },
  {
    factor: "Scope",
    short: "Vanity, toilet, fixtures, lighting and paint",
    adds: "Full gut to the studs with new tile throughout",
  },
  {
    factor: "Materials",
    short: "In-stock tile, vanities and fixtures confirmed before demolition",
    adds: "Special-order items, custom vanities or imported tile",
  },
  {
    factor: "Shower",
    short: "Tub or prefabricated base",
    adds: "Tiled shower with membrane, flood test and custom niche",
  },
  {
    factor: "Glass",
    short: "Standard door or curtain rod",
    adds: "Custom frameless glass measured after tile is set",
  },
  {
    factor: "Permits",
    short: "Fixture swaps that don’t need one",
    adds: (
      <>
        <a
          href="https://www.pickering.ca/business-building-development/building-and-renovating/"
          rel="nofollow noopener noreferrer"
          className="underline"
          target="_blank"
        >
          City of Pickering
        </a>{" "}
        permit and inspections for plumbing or structural changes
      </>
    ),
  },
  {
    factor: "Hidden conditions",
    short: "Sound subfloor and modern piping",
    adds: "Rot, leaks or old wiring found after demolition",
  },
];

const myths = [
  {
    myth: (
      <>
        Tile and{" "}
        <a href="https://en.wikipedia.org/wiki/Grout" rel="nofollow noopener noreferrer" className="underline" target="_blank">
          grout
        </a>{" "}
        keep water out
      </>
    ),
    key: "grout",
    fact: "Both let moisture through over time. Real protection comes from a waterproof membrane behind and beneath the shower tile, which we flood-test before tiling.",
  },
  {
    myth: "The lowest quote is the best deal",
    key: "quote",
    fact: "Quotes that skip waterproofing, venting, or proper valve replacement look cheaper on paper and cost more later. Compare what’s itemized, not just the total.",
  },
  {
    myth: "Any exhaust fan will do",
    key: "fan",
    fact: "A fan must match the room’s size and exhaust outdoors. A fan that vents into the attic or barely moves air leaves moisture behind, and moisture leads to mold and peeling paint.",
  },
  {
    myth: "A bigger tub adds value",
    key: "tub",
    fact: "Many buyers and homeowners would rather have a generous walk-in shower in the ensuite, as long as there’s still a tub elsewhere in the house.",
  },
  {
    myth: "You always need a permit, or you never do",
    key: "permit",
    fact: (
      <>
        Like-for-like fixture replacement typically needs no permit. Relocating a drain, creating a new bathroom, or touching a structural wall typically does. Electrical work involves the{" "}
        <a href="https://esasafe.com/" rel="nofollow noopener noreferrer" className="underline" target="_blank">
          ESA
        </a>{" "}
        either way. We confirm what's required for your project and file it.
      </>
    ),
  },
  {
    myth: "Renovating means moving out",
    key: "moving",
    fact: "If you have another bathroom, most families stay home throughout. We seal the work area and clean up daily.",
  },
];

const projectTypes = [
  {
    label: "Tub-to-shower conversions:",
    text: "A popular choice in Amberlea, Liverpool and Brock Ridge homes, where a dated tub-shower combination is rebuilt as a step-in shower with seating and a recessed shelf.",
  },
  {
    label: "Primary ensuite remodels:",
    text: "Double vanities, larger showers, heated floors, and better lighting for owners who plan to stay.",
  },
  {
    label: "Main family bathrooms:",
    text: "Durable tile, easy-clean surfaces and plenty of storage for busy households.",
  },
  {
    label: "Basement bathrooms:",
    text: (
      <>
        New bathrooms in finished basements, including drain connections and permits. If you’re finishing the whole level, see our{" "}
        <Link className="underline" href="/basement-renovation/pickering">Pickering basement renovations</Link>.
      </>
    ),
  },
  {
    label: "Powder rooms:",
    text: "Quick, high-impact updates for the room your guests see most.",
  },
  {
    label: "Accessible bathrooms:",
    text: (
      <>
        Curbless showers, grab bar backing, comfort-height toilets and wider entries. Possible government support is covered in our overview of{" "}
        <a className="underline" href="https://y2designandbuild.com/blog/ontario-home-renovation-tax-credits-rebates-incentives">
          Ontario renovation incentives
        </a>
        .
      </>
    ),
  },
  {
    label: "New-build upgrades in Duffin Heights and Seaton:",
    text: "Replacing builder-grade fixtures and finishes with ones that suit how you live.",
  },
];

const priceBands = [
  { label: "Powder room update:", text: "$2,500 up to $5,000" },
  { label: "Complete bathroom remodel:", text: "$9,800 up to $18,000" },
  { label: "High-end ensuite:", text: "$18,000 up to $35,000" },
];

const communication = [
  {
    label: "Within one business day of contacting us:",
    text: "A reply from our team, in English or Mandarin, to book your free site visit.",
  },
  {
    label: "At the site visit:",
    text: "We measure, inspect pipes, venting, and wiring, and ask what isn’t working for your family today.",
  },
  {
    label: "During design:",
    text: (
      <>
        3D visuals of your layout and finishes, plus help choosing tile, fixtures, and a{" "}
        <a href="https://en.wikipedia.org/wiki/Bathroom_cabinet" rel="nofollow noopener noreferrer" className="underline" target="_blank">
          vanity
        </a>
        .
      </>
    ),
  },
  {
    label: "Before you commit:",
    text: "A fixed, itemized quote and a planned start date.",
  },
  {
    label: "Before demolition:",
    text: "Confirmation that materials have arrived, so work doesn’t stall midway.",
  },
  {
    label: "During construction:",
    text: "Regular updates from your project manager, plus photos and a written price if anything unexpected appears behind the walls.",
  },
  {
    label: "At the finish:",
    text: "A final inspection alongside your project manager, with any last touch-ups handled on the spot or scheduled right away.",
  },
];

const neighborhoodGroups = [
  {
    region: "South of Highway 401",
    areas: "Bay Ridges, West Shore and Rosebank",
  },
  {
    region: "Central Pickering",
    areas: "Liverpool, Amberlea, Dunbarton, Highbush, Rougemount, Village East and Brock Ridge",
  },
  {
    region: "Further north",
    areas: "Duffin Heights, the new communities of Seaton and the hamlet of Claremont",
  },
];

export const faqs = [
  {
    question: "How quickly can bathroom renovations in Pickering be completed?",
    answer: "A focused update can take just a few days, as one Pickering client found. Full remodels usually take 7–10 working days, and luxury ensuites two to three weeks.",
  },
  {
    question: "Can I keep my tub and still modernize the bathroom?",
    answer: "Yes. New tile surrounds, a modern tub filler, a better shower head, updated glass or a curtain rod, and new vanity and lighting can transform the room while keeping the tub.",
  },
  {
    question: "Do you remove the old fixtures and debris?",
    answer: "Yes. Demolition, removal, and disposal of old fixtures, tile, and debris are part of our scope, and they’re listed in your quote.",
  },
  {
    question: "Can I supply my own vanity or fixtures?",
    answer: "Often, yes. We’ll confirm the dimensions and rough-in requirements before demolition so everything fits properly when it arrives.",
  },
  {
    question: "Is a four-day bathroom realistic for my home?",
    answer: "It can be, if the layout stays the same, materials are in stock, and the scope is a focused update. We’ll tell you honestly at the site visit whether your project fits that window or needs more time.",
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
          alt={`Bathroom Renovation project by Y2 Design & Build in Pickering`}
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
                      Pickering
                    </li>
                  </ol>
                </nav>


              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Licensed & Insured · Serving the GTA
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Bathroom Renovations in Pickering, ON
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                When a Pickering homeowner asked us to update their bathroom, our crew started the next day and handed it back finished four days later. That’s the kind of pace and planning <a href="/" className="underline">Y2 Design & Build</a> brings to bathroom renovations in Pickering. A clear design, one locked-in price, and a team that shows up when it says it will.
              </p>
              <ul className="mt-6 space-y-3">
                {heroBullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-white/90 sm:text-base">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white" aria-hidden="true"
                    >
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <QuoteButton className="btn-primary cursor-pointer text-center">
                  Get My Free Pickering Quote
                </QuoteButton>
                <a href={tel} className="btn-outline-light text-center">
                  Call {site.phone}
                </a>
              </div>
              <p className="mt-5 text-sm text-white/80">
                <span className="font-bold text-accent">★★★★★ 5.0</span> Google rating · 100+ reviews · 500+ homes renovated · 14+ years in the GTA · WSIB-covered
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

      {/* 4. Four days or four weeks */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Four Days or Four Weeks? What Sets the Pace
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                That four-day project was a focused update, and not every bathroom can move that fast. The schedule for bathroom renovations in Pickering depends on a handful of decisions, most of which you control. Here’s how each one affects the calendar.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">
                  Book My Free Pickering Consultation
                </QuoteButton>
                <a
                  href={tel}
                  className="text-sm font-bold text-brand-dark hover:text-brand"
                >
                  or call {site.phone}
                </a>
              </div>
            </div>

            <div className={`card relative aspect-[4/3] overflow-hidden bg-black`}>
              <iframe
                src={`https://www.tiktok.com/player/v1/7649493628196277512`}
                loading="lazy"
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-center text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">Factor</th>
                  <th className="px-4 py-3 font-semibold">Keeps the job short</th>
                  <th className="px-4 py-3 font-semibold">Adds time</th>
                </tr>
              </thead>
              <tbody>
                {paceRows.map((row, i) => (
                  <tr key={row.factor} className={i % 2 === 0 ? "bg-surface" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.factor}</td>
                    <td className="px-4 py-3 text-muted">{row.short}</td>
                    <td className="px-4 py-3 text-muted">{row.adds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-muted">
            For planning, budget 7–10 working days for a typical Y2 full remodel, closer to 12 when the room has both a tub and a stand-alone shower, and roughly half a month or more for a luxury ensuite. Our article on{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/how-long-does-bathroom-renovation-take-timeline">
              how long bathroom projects really take
            </a>{" "}
            explains each stage.
          </p>
        </div>
      </section>

      {/* 5. Process */}
      <ThreeStepProcess />

      {/* 6. Myths and facts */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Bathroom Myths We Hear in Pickering, and the Facts
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Many of the problems we fix in <a href="https://www.durham.ca/" rel="nofollow noreferrer noopener" className="underline" target="blank">Durham Region</a> homes started with a reasonable assumption that turned out to be wrong. Clearing these up early saves money, and it’s part of how we plan bathroom renovations in Pickering.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-center text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">Myth</th>
                  <th className="px-4 py-3 font-semibold">Fact</th>
                </tr>
              </thead>
              <tbody>
                {myths.map((row, i) => (
                  <tr key={row.key} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.myth}</td>
                    <td className="px-4 py-3 text-muted">{row.fact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Projects we take on */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <img
                src={images.bathroom3}
                alt="Completed bathroom renovation in Pickering"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Bathroom Projects We Take On in Pickering
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Our bathroom renovations in Pickering cover every type of room, in every age of home:
              </p>

              <ul className="mt-6 space-y-3">
                {projectTypes.map((item) => (
                  <li key={item.label} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>
                      <b>{item.label}</b> {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 leading-relaxed text-muted">
                Older homes in Bay Ridges, West Shore and Rosebank often need extra attention behind the walls, from galvanized supply lines to tired drains. We check for these on the first visit, so they’re reflected in your quote.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Cost */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Cost of Bathroom Renovations in Pickering
              </h2>
              <p className="mt-2 leading-relaxed text-muted">
                Y2’s pricing is consistent across Durham Region:
              </p>

              <ul className="mt-6 space-y-3">
                {priceBands.map((item) => (
                  <li key={item.label} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>
                      <b>{item.label}</b> {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 leading-relaxed text-muted">
                Where your project falls depends on its size, whether plumbing moves, the tile and fixtures you select, and what we find behind the walls. Your quote lists every item and its cost, and we price any changes for your approval before we proceed. For a deeper look at the numbers, read our{" "}
                <a className="underline" href="https://y2designandbuild.com/blog/bathroom-renovation-cost-gta">
                  GTA bathroom cost breakdown
                </a>
                , and our post on the{" "}
                <a className="underline" href="https://y2designandbuild.com/blog/where-to-buy-bathroom-vanity-gta">
                  best places to buy vanities in the GTA
                </a>{" "}
                is useful if you're still undecided on the vanity.
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
                alt="Bathroom project in Pickering"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. What you'll hear from us */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="section-heading">What You’ll Hear From Us, and When</h2>
          <p className="section-sub">Good renovations come down to communication. Here’s what to expect from Y2 at each point of your project:</p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-3">
            {communication.map((step) => (
              <div key={step.label} className="flex items-start gap-3 rounded-xl bg-surface px-5 py-4">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">✓</span>
                <p className="text-sm leading-relaxed text-muted">
                  <b className="text-brand-dark">{step.label}</b> {step.text}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-relaxed text-muted">
            One person manages every step, which is why our bathroom renovations in Pickering stay on schedule and on budget.
          </p>
        </div>
      </section>

      {/* 10. Social proof */}
      <ReviewStrip />

      {/* 11. Neighborhoods */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-brand-dark">
            Pickering Neighborhoods We Serve
          </h2>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {neighborhoodGroups.map((group) => (
              <div key={group.region} className="card flex items-start gap-3 p-4">
                <span className="text-brand" aria-hidden="true">
                  ✓
                </span>
                <span className="text-sm text-muted">
                  <b className="text-brand-dark">{group.region}:</b> {group.areas}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 leading-relaxed text-muted">
            We also handle bathroom projects in neighboring{" "}
            <Link className="underline" href="/bathroom-renovation/ajax">Ajax</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/whitby">Whitby</Link> and{" "}
            <Link className="underline" href="/bathroom-renovation/scarborough">Scarborough</Link>, plus{" "}
            <Link className="underline" href="/bathroom-renovation/markham">Markham</Link> and{" "}
            <Link className="underline" href="/bathroom-renovation/toronto">Toronto</Link>. Planning more work in Pickering? See our{" "}
            <Link className="underline" href="/kitchen-renovation/pickering">Pickering kitchen renovations</Link> and{" "}
            <Link className="underline" href="/home-renovation/pickering">Pickering home renovations</Link>. Explore our{" "}
            <a className="underline" href="https://y2designandbuild.com/bathroom-renovation">bathroom renovation services</a> or{" "}
            <Link className="underline" href="/service-areas">all the areas we cover</Link>.
          </p>
        </div>
      </section>

       {/* 12. Gallery */}
            <section className="section-pad bg-brand-dark text-white">
              <div className="container-page">
                <h2 className="text-center text-3xl font-bold">Gallery Of Recent Projects</h2>
                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "bathroom-gall-1",
                    "bathroom-2",
                    "bath-gallery-3",
                    "bath-gallery-4",
                    "bath-gallery-5",
                    "bath-gallery-6",
                    "bath-gallery-7",
                    "bath-gallery-8",
                    "bath-gallery-9",
                    "bath-gallery-10",
                    "bath-gallery-11",
                    "bath-gallery-12",
                  ].map((name) => (
                    <div key={name} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                      <Image
                        src={`https://y2designandbuild.com/images/${name}.webp`}
                        alt="gallery photo — Y2 Design & Build GTA"
                        fill
                        loading="lazy"
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-10 text-center">
                  <QuoteButton className="btn-primary cursor-pointer">Start My Bathroom Renovation Quote</QuoteButton>
                </div>
              </div>
            </section>
      


      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl">
          <h2 className="section-heading text-3xl font-bold text-brand-dark">Pickering Bathroom FAQs</h2>
          <p className="section-sub mt-2 text-muted">Common questions from Pickering homeowners about bathroom remodeling projects.</p>

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

      {/* Before work begins */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Before Work Begins</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Ahead of all bathroom renovations in Pickering, it’s smart to confirm{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/does-your-home-insurance-cover-a-renovation">
              whether your insurance policy needs updating during a renovation
            </a>
            . You may also want to{" "}
            <a className="underline" href="https://y2designandbuild.com/about">learn about Y2 and our team</a> before your consultation.
          </p>
        </div>
      </section>

      {/* Book your Pickering bathroom consultation */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Book Your Pickering Bathroom Consultation</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Describe the bathroom you have and the one you want. Following a free visit, you’ll receive a line-by-line price that’s yours to accept or decline. Phone{" "}
            <a className="underline" href="tel:6475073639">(647) 507-3639</a>, or call{" "}
            <a className="underline" href="tel:6472942888">(647) 294-2888</a> to speak Mandarin with our team. Photos can be emailed to{" "}
            <a className="underline" href="mailto:info@y2canada.com">info@y2canada.com</a>, and visits can be{" "}
            <a className="underline" href="https://y2designandbuild.com/contact">scheduled through our website</a>.
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