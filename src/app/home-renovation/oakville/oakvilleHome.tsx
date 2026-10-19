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

const homeImages = {
  hero: "https://y2designandbuild.com/images/kitchen-gall-1.webp",
  local: "https://y2designandbuild.com/images/kitchen.webp",
  includes: "https://y2designandbuild.com/images/kitchen-gall-5.webp",
  gallery: [
    "https://y2designandbuild.com/images/kitchen-gall-1.webp",
    "https://y2designandbuild.com/images/bathroom-gall-1.webp",
    "https://y2designandbuild.com/images/kitchen-gall-5.webp",
    "https://y2designandbuild.com/images/bathroom-gall-10.webp",
    "https://y2designandbuild.com/images/kitchen.webp",
    "https://y2designandbuild.com/images/bathroom-palmer-1.webp",
  ],
};

const heroBullets = [
  "In-house design and 3D visuals",
  "Fixed, itemized contract price",
  "One project manager throughout",
  "Town permits and approvals handled",
  "Licensed, WSIB-covered crews",
  "Service in English or Mandarin",
];

const levelRows = [
  {
    scope: "Interior refresh",
    includes: "New flooring, paint, trim, doors, lighting and stair upgrades",
    budget: "Toward the bottom of our whole-home range",
    timeline: "A few weeks",
    stay: "Usually, with rooms done in sequence",
  },
  {
    scope: "Main-floor transformation",
    includes: "Kitchen, open layout, flooring and powder room",
    budget: "Middle of the range",
    timeline: "6–10 weeks",
    stay: "Often, with a temporary kitchen set up",
  },
  {
    scope: "Main floor plus bathrooms",
    includes: "All of the above, plus one or more full bathrooms upstairs",
    budget: "Middle to upper range",
    timeline: "8–12 weeks",
    stay: "Possible with careful phasing",
  },
  {
    scope: "Full interior gut",
    includes: "All rooms opened to the studs, with new plumbing, electrical, insulation and finishes",
    budget: "Around $200–$250 per sq ft",
    timeline: "10–14 weeks or more",
    stay: "Rarely; most families relocate",
  },
  {
    scope: "Gut renovation with addition",
    includes: "Full interior plus new square footage or a second story",
    budget: "Priced individually",
    timeline: "Longer; depends on approvals",
    stay: "No",
  },
];

const approvals = [
  {
    label: "Heritage districts:",
    text: (
      <>
      Parts of {" "}
      <a href="https://www.hoodq.com/explore/oakville-on/old-oakville" rel="nofollow noopener noreferrer" target="blank" className="underline">Old Oakville</a>
      {" "}
      and the area around downtown fall within heritage conservation districts. Interior work is generally unaffected, but exterior changes such as new windows, additions, porches or siding may need a heritage permit before a building permit can be issued. We check your property’s status at the start.
      </>
    )
  },
  {
    label: "Trees:",
    text: "Oakville protects many trees on private property. Additions, new walkways or heavy equipment near a mature tree may require a tree permit or protection measures, which we account for in planning.",
  },
  {
    label: "Creeks and valleys:",
    text: (
        <>
        Properties backing onto Oakville’s creek valleys, such as the Sixteen Mile and Bronte corridors, may need {" "}
        <a href="https://www.conservationhalton.ca/" rel="nofollow noopener noreferrer" target="blank" className="underline"> Conservation Halton</a>
        {" "}
        approval for exterior work, grading or additions.
        </>
      )  
  },
  {
    label: "Engineering:",
    text: "Removing load-bearing walls, adding a second story or building an addition requires stamped structural drawings. We coordinate the engineer, the drawings, and the submissions as part of your project.",
  },
];

const phasingPrinciples = [
  {
    label: "Outside before inside",
    text: "Roofing, windows, and any foundation or drainage repairs should come before new interior finishes, so leaks and drafts don’t damage new work.",
  },
  {
    label: "Behind the walls first",
    text: (
      <>
        If your wiring, plumbing, or{" "}
        <a href="https://publications.gc.ca/collections/collection_2017/schl-cmhc/NH15-61-1996-eng.pdf" rel="nofollow" className="underline">ductwork</a>{" "}
        needs upgrading, it’s far cheaper to do while walls are open. Running new circuits or supply lines for a future bathroom now saves reopening finished rooms later.
      </>
    ),
  },
  {
    label: "Kitchen and flooring together",
    text: "New flooring should run continuously under or up to the new cabinets. Installing floors first and the kitchen later often leaves gaps or mismatched sections.",
  },
  {
    label: "Top floor before main floor",
    text: "Work on upstairs bathrooms can damage ceilings below, so finishing the upper level first protects your new main-floor ceilings and lighting.",
  },
  {
    label: "Plan the whole house once",
    text: "Even if you build in phases, we recommend designing everything at the start so the finishes, flooring, and lighting tie together.",
  },
];

const costPoints = [
  {
    label: "Overall budgets:",
    text: "Most whole-home projects with Y2 fall between $50,000 and $150,000, and larger projects go beyond that.",
  },
  {
    label: "Full gut renovations:",
    text: "Typically around $200–$250 per square foot, depending on finishes, structural changes, and mechanical upgrades.",
  },
  {
    label: "Timeline:",
    text: "Most whole-home renovations take 8–14 weeks on site after permits are issued, with additions and heritage approvals adding time.",
  },
];

const processSteps = [
  {
    title: "Discovery visit",
    text: "We walk the house with you, measure, review the structure and systems, and talk about how you want to live in it.",
    decision: "overall goals and budget.",
  },
  {
    title: "Concept and 3D design",
    text: "Our designers develop layouts and finishes you can review in 3D.",
    decision: "the layout and design direction.",
  },
  {
    title: "Selections",
    text: "You choose cabinetry, tile, flooring, fixtures, and lighting, sourced through Y2’s wholesale accounts.",
    decision: "every finish.",
  },
  {
    title: "Locked contract price",
    text: "Every material and every hour of labor is priced on paper.",
    decision: "approve the contract price.",
  },
  {
    title: "Engineering and approvals",
    text: 
  (
        <>
       Your project manager coordinates drawings and {" "}
        <a href="https://www.oakville.ca/home-environment/building-renovations/building-permits-inspections/building-permits/" rel="nofollow noopener noreferrer" target="blank" className="underline">Town of Oakville permits</a>
        {" "}
        plus any heritage, tree, or
        {" "}
        <a href="https://www.conservationhalton.ca/" rel="nofollow noopener noreferrer" target="blank" className="underline">Conservation Halton</a>
        {" "}
        approvals.
        </>
      )  
  },
  {
    title: "Construction",
    text: "Demolition, structural work, rough-ins, inspections, insulation, drywall and finishes, scheduled and supervised by your project manager.",
    decision: "approve any change or hidden-condition repair before it proceeds.",
  },
  {
    title: "Completion",
    text: "Final inspections, permit closure, and a full walkthrough with your project manager.",
  },
];

export const faqs = [
  {
    question: "Is a home renovation in Oakville cheaper than buying a bigger house?",
    answer: "Often, once you add up commission, land transfer tax, legal fees and moving costs. The answer depends on your home and goals, and we’ll help you compare realistically during your consultation.",
  },
  {
    question: "Do I need a heritage permit for an interior renovation?",
    answer: "Usually not. Heritage permits in Oakville generally apply to exterior changes in designated areas, but we confirm your property’s status before design begins.",
  },
  {
    question: "Can I renovate in phases?",
    answer: "Yes. We’ll design the whole house up front and then schedule the work in a sensible order, so each phase builds on the last instead of undoing it.",
  },
  {
    question: "Will the price change once construction starts?",
    answer: "Not unless you request a change or we uncover something hidden, such as rot or outdated wiring. In either case, you receive the cost in writing and approve it before work proceeds.",
  },
  {
    question: "Should I tell my insurer about the renovation?",
    answer: (
      <>
        Yes. Large renovations can affect coverage, especially if the house is unoccupied. Our article on{" "}
        <Link className="underline" href="https://y2designandbuild.com/blog/does-your-home-insurance-cover-a-renovation">
          renovations and home insurance
        </Link>{" "}
        explains what to ask.
      </>
    ),
  },
];

export default function HomeRenovationOakvilleClient() {
  const tel = `tel:${site.phone.replace(/\D/g, "")}`;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <Header />

      {/* 1. Value-driven hero */}
      <section className="relative min-h-[480px] overflow-hidden bg-brand-dark text-white">
        <Image
          src="https://y2designandbuild.com/images/home-renovation-ai.webp"
          alt="Home renovation project by Y2 Design & Build in Oakville"
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
                      <Link href="/home-renovation" className="transition-colors hover:text-white hover:underline">
                        Home Renovation
                      </Link>
                    </li>
                    <li aria-hidden="true" className="select-none text-white/40">/</li>
                    <li className="font-semibold text-white" aria-current="page">
                      Oakville
                    </li>
                  </ol>
                </nav>
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Licensed & Insured · Serving the GTA
              </p>
              <h1 className="text-lg font-bold leading-tight sm:text-4xl lg:text-4xl">
                Home Renovation in Oakville, ON
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                <a href="https://y2designandbuild.com/" className="underline">Y2 Design & Build</a> plans and builds whole-home projects with one in-house team, from the first measured drawing to the final walkthrough. Each home renovation in Oakville comes with a design you approve in 3D, a fixed price set out line by line, and a single project manager who coordinates every trade, permit, and inspection.
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
                <span className="font-bold text-accent">★★★★★</span> 100+ five-star Google reviews · Over 500 completed renovations · 14+ years · Fully insured
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* 3. Renovate or move */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">Renovate or Move? Look at the Full Cost of Each</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Many Oakville homeowners reach out to us as they decide between renovating and listing their home. It’s a big financial decision, and the comparison is rarely as simple as comparing the price of a new house with the cost of a renovation.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                The costs of moving usually include real estate commission on the sale, <a href="http://www.ontario.ca/document/land-transfer-tax" rel="nofollow noopener noreferrer" className="underline" target="blank">Ontario land transfer tax</a>  on the purchase, legal fees, mortgage penalties or new financing costs, moving expenses, and the upgrades most buyers end up making to their new home anyway. None of that money adds anything to the house you live in.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Renovation costs go directly into your property: a better layout, updated systems, and finishes chosen for how your family lives. You also keep your lot, your street, your schools and your neighbors, which matters in established Oakville neighborhoods where comparable homes rarely come up for sale.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Renovating isn’t always the right answer. If your lot can’t accommodate the space you need, or if the house would require structural work far beyond its value, moving may make more sense. During our consultation, we’ll give you a realistic picture of what a home renovation in Oakville would involve for your property, so you can compare the two options with real figures.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">Book My Free Consultation</QuoteButton>
                <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
                  or call {site.phone}
                </a>
              </div>
            </div>

            <div>
              <img src="https://y2designandbuild.com/images/hero-3.webp" alt="Home renovation in Oakville" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Five levels of renovation */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Five Levels of Renovation, Side by Side</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            “Home renovation” covers everything from new floors and paint to taking a house down to its studs. Here’s how the most common scopes compare, including whether you can usually stay in the house while we work.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-center text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">Scope</th>
                  <th className="px-4 py-3 font-semibold">What it typically includes</th>
                  <th className="px-4 py-3 font-semibold">Budget position with Y2</th>
                  <th className="px-4 py-3 font-semibold">Typical timeline</th>
                  <th className="px-4 py-3 font-semibold">Can you stay home?</th>
                </tr>
              </thead>
              <tbody>
                {levelRows.map((row, i) => (
                  <tr key={row.scope} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.scope}</td>
                    <td className="px-4 py-3 text-muted">{row.includes}</td>
                    <td className="px-4 py-3 text-muted">{row.budget}</td>
                    <td className="px-4 py-3 text-muted">{row.timeline}</td>
                    <td className="px-4 py-3 text-muted">{row.stay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-muted">
            For any home renovation in Oakville, your fixed quote replaces these estimates once we’ve measured the home and you’ve confirmed the design. If you’ll need somewhere else to live, our guide on{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/where-do-you-live-during-a-full-home-renovation">
              where families stay during a full renovation
            </Link>{" "}
            compares the options.
          </p>
        </div>
      </section>

      {/* 5. Oakville rules */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Oakville Rules That Can Shape Your Plans
          </h2>
          <p className="mx-auto mt-4 max-w-5xl text-center leading-relaxed text-muted">
            Every home renovation in Oakville that alters structure, plumbing, HVAC, or layout needs a{" "}
            <a href="https://www.oakville.ca/home-environment/building-renovations/building-permits-inspections/" target="_blank" rel="nofollow noopener noreferrer" className="underline">
              Town of Oakville building permit
            </a>
            . Depending on where you live, other approvals may apply too.
          </p>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {approvals.map((item) => (
              <li key={item.label} className="card flex items-start gap-3 bg-surface p-5 text-sm leading-relaxed text-muted">
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
          <p className="mx-auto mt-8 max-w-5xl text-center leading-relaxed text-muted">
            Sorting these out before design is finalized keeps approvals from holding up the start of your home renovation in Oakville.
          </p>
        </div>
      </section>

      {/* 6. Phasing */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <img src={homeImages.includes} alt="Completed home renovation in Oakville" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">Phasing a Renovation Over Two or Three Years</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Not everyone wants to renovate the whole house at once. Phasing can spread the cost and keep the household running, but the order matters. Done in the wrong sequence, one phase can damage or undo the last. These are the principles we follow when planning a phased home renovation in Oakville:
              </p>
              <ul className="mt-6 space-y-3">
                {phasingPrinciples.map((item) => (
                  <li key={item.label} className="flex items-start gap-3 text-md leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>
                      <b className="text-brand-dark">{item.label}:</b> {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Cost and timeline */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Home Renovation in Oakville: Cost and Timeline</h2>

          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {costPoints.map((item) => (
              <li key={item.label} className="card flex items-start gap-3 bg-surface p-5 text-sm leading-relaxed text-muted">
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

          <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted">
            The kitchen, structural changes, the number of bathrooms, and the quality of finishes have the biggest effect on cost. For room-by-room details, see our{" "}
            <Link className="underline" href="https://y2designandbuild.com/kitchen-renovation/oakville">Oakville kitchen renovations</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/oakville">bathroom remodeling in Oakville</Link>, and{" "}
            <Link className="underline" href="/basement-renovation/oakville">Oakville basement renovations</Link> pages.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <QuoteButton className="btn-primary cursor-pointer">Get My Free Quote</QuoteButton>
            <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
              or call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 8. Process */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">How Your Oakville Renovation Unfolds, and Where You Decide</h2>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4">
            {processSteps.map((step) => (
              <li key={step.title} className="card flex items-start gap-3 bg-white p-5 text-sm leading-relaxed text-muted">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span>
                  <b className="text-brand-dark">{step.title}:</b> {step.text}
                  {step.decision && (
                    <>
                      {" "}
                      <b className="text-brand-dark">Your decision:</b> {step.decision}
                    </>
                  )}
                </span>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-6 max-w-4xl text-center leading-relaxed text-muted">
            For a clearer sense of daily life while crews are in your home, read our{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/what-to-expect-during-home-renovation-markham">
              homeowner’s guide to the renovation experience
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 9. Social proof */}
      <ReviewStrip />

      {/* 10. Neighborhoods */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Oakville Neighborhoods We Serve</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Our teams take on home renovation in Oakville across the town, from Bronte, Old Oakville, Kerr Village and Eastlake by the lake to Falgarwood, Glen Abbey, Iroquois Ridge, River Oaks, Joshua Creek, Clearview, College Park, West Oak Trails, Palermo and the newer communities north of Dundas Street.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-muted">
            Planning more space rather than a refresh? Learn about{" "}
            <a className="underline" href="https://y2designandbuild.com/home-extensions">home additions and extensions</a> or{" "}
            <a className="underline" href="https://y2designandbuild.com/adu-construction">garden suites and ADUs</a>. We also take on whole-home projects in{" "}
            <Link className="underline" href="/home-renovation/markham">Markham</Link>,{" "}
            <Link className="underline" href="/home-renovation/toronto">Toronto</Link> and{" "}
            <Link className="underline" href="/home-renovation/scarborough">Scarborough</Link>.{" "}
            <Link className="underline" href="/service-areas">See every community Y2 serves</Link>.
          </p>
        </div>
      </section>

      {/* 11. Gallery */}
      <section className="section-pad bg-brand-dark text-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold">Gallery Of Recent Projects</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homeImages.gallery.map((src) => (
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
        <div className="container-page max-w-3xl">
          <h2 className="section-heading text-3xl font-bold text-brand-dark">Oakville Home Renovation FAQs</h2>
          <p className="section-sub mt-2 text-muted">
            Common questions from Oakville homeowners planning a home renovation.
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

      {/* 13. Useful before you start */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Useful Before You Start</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Making room for an aging parent or adding accessibility features? Read about{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/ontario-home-renovation-tax-credits-rebates-incentives">
              renovation tax credits available in Ontario
            </a>
            . Choosing materials? Our{" "}
            <a className="underline" href="https://y2designandbuild.com/flooring">flooring services</a> page covers options for every room. You can also{" "}
            <a className="underline" href="https://y2designandbuild.com/about">meet the Y2 team</a> before we visit.
          </p>
        </div>
      </section>

      {/* 14. Book consultation */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Start Planning Your Oakville Home</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Share the rooms that frustrate you and the home you picture at the end. A free visit is followed by a design direction and a fixed, line-by-line price, and committing is entirely up to you. Call our English line at{" "}
            <a className="underline" href="tel:6475073639">(647) 507-3639</a>, or reach our Mandarin team at{" "}
            <a className="underline" href="tel:6472942888">(647) 294-2888</a>. Email photos and ideas to{" "}
            <a className="underline" href="mailto:info@y2canada.com">info@y2canada.com</a>; consultations can be{" "}
            <a className="underline" href="https://y2designandbuild.com/contact">requested online</a>.
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