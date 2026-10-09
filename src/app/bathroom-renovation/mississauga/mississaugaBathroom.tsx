"use client";

import React, { useState } from "react";
import Image from "next/image";
import { site, images } from "@/lib/content";
import { QuoteButton } from "@/components/QuoteModal";
import TrustBadges from "@/components/TrustBadges";
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
  "Primary ensuites redesigned around how two people actually share the space",
  "Family and guest bathrooms rebuilt with durable, easy-to-clean finishes",
  "Condo bathrooms near Square One, Port Credit and Hurontario, coordinated with your building's management",
  "Bilingual project management in English and Mandarin",
];

const areaFindings = [
  {
    area: "Mineola, Lakeview, Port Credit and Clarkson",
    paras: [
      "Many of the original homes here are postwar bungalows and side-splits, often with a single main-floor bathroom. Remodels frequently involve adding a second bathroom, reworking a cramped layout or updating ventilation that never vented properly to the outside.",
      "Where older homes are being replaced by custom builds, we also design ensuites for renovated and newer houses on the same streets.",
    ],
  },
  {
    area: "Erin Mills, Meadowvale and Streetsville",
    paras: [
      "Much of this housing dates from the 1970s and 1980s. Bathrooms commonly still have their original ceramic tile, almond or colored fixtures and aging tub surrounds. Some homes from this period were plumbed with gray polybutylene supply lines, a material insurers often ask homeowners to replace. If we find it, we will show you and price its replacement separately, so the decision stays with you.",
    ],
  },
  {
    area: "Churchill Meadows, East Credit and Lisgar",
    paras: [
      "These neighborhoods were largely built from the 1990s onward. The plumbing is generally sound, but ensuites tend to be dominated by large drop-in or corner tubs with a separate, compact shower stall. Reallocating that space into a generous walk-in shower is one of the most requested changes we make here.",
    ],
  },
  {
    area: "City Centre, Cooksville and the Hurontario corridor",
    paras: ["High-rise condominiums bring a different set of considerations, covered in more detail below."],
  },
];

const materials = [
  {
    title: "Porcelain versus ceramic tile",
    text: "Porcelain is denser and absorbs less water, which makes it the better choice for shower floors and walls. Ceramic remains a cost-effective option for backsplashes and dry areas.",
  },
  {
    title: "Grout",
    text: "Standard cement-based grout needs periodic sealing. Epoxy or high-performance grouts cost more to install but resist staining and rarely need maintenance, which many busy households appreciate.",
  },
  {
    title: "Vanity tops",
    text: "Quartz is non-porous and does not require sealing. Natural stone offers unique patterning but needs more care. Cultured marble is economical but scratches and dulls more readily.",
  },
  {
    title: "Shower valves",
    text: "Current building code calls for valves that protect against sudden temperature swings. Older homes often have valves that predate this requirement, so we replace them as part of any shower rebuild.",
  },
  {
    title: "Ventilation",
    text: "A correctly sized exhaust fan, ducted to the exterior and ideally controlled by a humidity sensor or timer, protects the rest of the room.",
  },
];

const costItems = [
  { label: "Powder room (two-piece):", value: "$2,500 to $5,000" },
  { label: "Full bathroom (three- or four-piece):", value: "$9,800 to $18,000" },
  { label: "Primary ensuite or high-end bathroom:", value: "$18,000 to $35,000" },
];

const processSteps = [
  {
    title: "Consultation",
    text: "We begin with a complimentary visit to your home. We take measurements, assess the existing plumbing, ventilation, and floor structure, and discuss how you use the room day to day.",
  },
  {
    title: "Design and written quote",
    text: "You receive a proposed layout, recommended selections, and an itemized fixed-price quote that lists scope, materials, and labor line by line.",
    extra: true,
  },
  {
    title: "Construction",
    text: "Your project manager arranges any required permits, protects floors and entryways, and coordinates each trade in sequence. If demolition uncovers concealed damage, you will receive photographs and a written cost before we authorize any additional work.",
  },
  {
    title: "Final walkthrough",
    text: "We review the finished bathroom together and address any outstanding items before the project is closed.",
  },
];

const neighborhoods = [
  "Port Credit",
  "Streetsville",
  "Erin Mills",
  "Clarkson",
  "Meadowvale",
  "Cooksville",
  "East Credit",
  "Churchill Meadows",
  "Mineola",
  "Lisgar",
  "Lakeview",
  "Hurontario",
];

export const faqs = [
  {
    question: "Is a building permit required for my bathroom remodel in Mississauga?",
    answer: "It depends on the scope. Like-for-like replacements, such as a new vanity, toilet, or tile in the same position, generally do not need one. Relocating fixtures, removing or adding walls, or installing new electrical circuits usually does, along with an ESA permit for the electrical work. We confirm the requirements for your specific project before scheduling construction.",
  },
  {
    question: "Can a small bathroom accommodate a walk-in shower?",
    answer: "In many cases, yes. Removing a standard tub typically frees enough space for a shower of comparable length, and a frameless glass panel keeps the room feeling open. We will confirm what your dimensions allow during the consultation.",
  },
  {
    question: "Is it worthwhile to remodel a bathroom before selling?",
    answer: "A dated or damaged bathroom can weigh on buyers' impressions. If you are selling soon, we generally recommend a focused update with neutral finishes rather than a full custom remodel, so the investment stays proportionate to the likely return.",
  },
  {
    question: "What flooring works best in a bathroom?",
    answer: "Porcelain tile is the most durable and water-resistant option, and it pairs well with in-floor heating. Luxury vinyl can work in powder rooms and lower-moisture spaces where budget is a priority.",
  },
  {
    question: "Can we remain in the house during the remodel?",
    answer: "Yes. Most clients stay at home throughout the bathroom remodel in Mississauga. We protect walkways, contain dust, and keep the work area tidy at the end of each day. If the bathroom being remodeled is your only one, we will discuss the schedule with you in advance.",
    link: true,
  },
  {
    question: "Does your team speak Mandarin?",
    answer: "Yes. Our Mandarin-speaking team can be reached at (647) 294-2888 at every stage of your project.",
  },
];

export default function BathroomClient() {
  const tel = `tel:${site.phone.replace(/\D/g, "")}`;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <Header />

      {/* 1. Hero */}
      <section className="relative min-h-[480px] overflow-hidden bg-brand-dark text-white">
        <Image
          src={images.bathroom}
          alt="Bathroom Renovation project by Y2 Design & Build in the GTA"
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
                      <Link href="/bathroom-renovation" className="transition-colors hover:text-white hover:underline">
                        Bathroom Renovation
                      </Link>
                    </li>
                    <li aria-hidden="true" className="select-none text-white/40">/</li>
                    <li className="font-semibold text-white" aria-current="page">
                      Mississauga
                    </li>
                  </ol>
                </nav>
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Licensed & Insured · Serving the GTA
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Bathroom Remodel in Mississauga, ON
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                We remodel bathrooms in Mississauga houses and condominiums, with every material, fixture, and labor cost set out in writing before construction begins.
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
                  Get My Free Mississauga Quote
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
      <section className="bg-accent py-4 text-center text-white" aria-label="Current offer">
        <p className="text-lg font-bold">Save $2,500 On Your Bathroom Renovation.</p>
        <p className="text-sm opacity-90">
          Get Free Consultation with No cost, no obligation, and no expectation that you go ahead. If the numbers don't work for you, that's a perfectly good outcome.
        </p>
      </section>

      {/* 3. Trust badges
          NOTE: update the text inside components/TrustBadges to:
          "Serving GTA homeowners for over 14 years · 500+ completed projects ·
           Rated 5 stars on Google, HomeStars, Houzz and Yelp · WSIB-covered trades · Complimentary, no-obligation consultation" */}
      <TrustBadges />

      {/* 4. Intro */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Bathroom Remodel in Mississauga by Y2 Design & Build
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Mississauga isn't one housing market, but several. A 1950s bungalow in Mineola, a 1980s two-story in Erin Mills, and a 30th-floor suite near Celebration Square each present their own set of conditions, and a bathroom plan that works well in one can be entirely wrong for another.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Y2 Design & Build approaches each{" "}
                <a className="underline" href="https://y2designandbuild.com/bathroom-renovation">bathroom remodel</a>{" "}
                in Mississauga by understanding the house first. Our designers and project managers bring over 14 years of experience in homes throughout the region, and that experience shapes everything from the layout we recommend to the materials we specify.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                You deal with one team throughout, and one project manager remains your point of contact from the initial visit until the final inspection of the finished room.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">
                  Book My Free Mississauga Consultation
                </QuoteButton>
                <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
                  or call {site.phone}
                </a>
              </div>
            </div>

            <div>
              <img src={images.bathroom2} alt="Bathroom renovation in Mississauga" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Neighborhood findings */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            What We Find in Mississauga Homes, Neighborhood by Neighborhood
          </h2>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
            {areaFindings.map((item) => (
              <div key={item.area} className="card bg-white p-5">
                <h3 className="text-lg font-bold text-brand-dark">{item.area}</h3>
                {item.paras.map((p) => (
                  <p key={p} className="mt-2 text-sm leading-relaxed text-muted">{p}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Materials */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <img src={images.bathroom3} alt="Completed bathroom remodel in Mississauga" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">We Use Materials That Hold Up</h2>
              <p className="mt-4 leading-relaxed text-muted">
                The finishes you choose for your bathroom remodel in Mississauga will be cleaned daily and exposed to steam for years, so we recommend materials based on durability first and appearance second. A few of the decisions we walk clients through:
              </p>
              <ul className="mt-6 space-y-3">
                {materials.map((m) => (
                  <li key={m.title} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>
                      <b className="text-brand-dark">{m.title}.</b> {m.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Cost and timeline */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Mississauga Bathroom Remodeling Cost and Timeline
          </h2>
          <p className="mt-4 text-center leading-relaxed text-muted">
            Every bathroom remodel in Mississauga is priced individually, but these ranges, drawn from our recent work across the GTA, provide a reliable starting point:
          </p>
          <ul className="mx-auto mt-6 max-w-xl space-y-3">
            {costItems.map((c) => (
              <li key={c.label} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span>
                  <b className="text-brand-dark">{c.label}</b> {c.value}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center leading-relaxed text-muted">
            Once construction begins, a standard bathroom typically requires 7 to 10 working days, a four-piece bathroom 10 to 12, and a luxury ensuite two to three weeks.
          </p>

          <h3 className="mt-10 text-center text-2xl font-bold text-brand-dark">
            Factors That Impact Bathroom Remodeling Cost in Mississauga
          </h3>
          <p className="mt-4 leading-relaxed text-muted">
            The factors that most often influence the final figure are the extent of plumbing relocation, the condition of the subfloor, the size and pattern of the tile, and features such as heated floors, linear drains, and custom glass.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            For older homes, replacing outdated supply lines or electrical wiring can also affect the total. Our{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/bathroom-renovation-cost-gta">
              GTA bathroom renovation cost guide
            </Link>{" "}
            explains each of these in greater depth, and our blog on{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/how-long-does-bathroom-renovation-take-timeline">
              bathroom renovation timelines
            </Link>{" "}
            outlines what can affect your schedule.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <QuoteButton className="btn-primary cursor-pointer">Get My Free Quote</QuoteButton>
            <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
              or call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 8. Condo bathrooms */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">Remodeling a Condo Bathroom in Mississauga</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Condominium bathrooms sit directly above a neighbor's ceiling, which raises the stakes on waterproofing. A small leak in a house may stain a ceiling; in a condo, it can affect the unit below and lead to an insurance claim. For that reason, we treat the shower pan and floor membrane as the most important part of the job, regardless of how simple the rest of the design may be.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Most Mississauga buildings also require management approval before work starts, set permitted construction hours, and coordinate water shut-offs through the superintendent. We prepare the documentation, provide proof of insurance, and schedule around these rules. Bathtub-to-shower conversions remain very popular in condos, although the concrete slab usually limits how far drains can be moved.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Learn more on our{" "}
                <Link className="underline" href="/condo-renovation">condo renovation page</Link>.
              </p>
            </div>
            <div>
              <img
                src="https://y2designandbuild.com/images/bathroom-palmer-1.webp"
                alt="Bathroom project by Y2 Design & Build"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Process */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">How Our Bathroom Remodel Process Works</h2>
          <ol className="mx-auto mt-10 grid max-w-4xl gap-4">
            {processSteps.map((step, i) => (
              <li key={step.title} className="flex items-start gap-4 rounded-xl bg-white px-5 py-4 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {step.text}
                    {step.extra && (
                      <>
                        {" "}If you are still weighing vanity options, our{" "}
                        <Link className="underline" href="/blog/where-to-buy-bathroom-vanity-gta">
                          vanity shopping guide for GTA homeowners
                        </Link>{" "}
                        may help.
                      </>
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 10. Social proof */}
      <ReviewStrip />

      {/* 11. Who we work with */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Who We Work With</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Our Mississauga clients include growing families who need a more practical main bathroom, professionals upgrading a primary ensuite, empty nesters planning to age in place, condo owners modernizing a dated suite, and homeowners preparing a property for sale.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            For those planning ahead, features such as curbless entries and concealed blocking for future grab bars can be built in discreetly. Some accessibility improvements may be eligible for tax credits; see our overview of{" "}
            <a
              className="underline"
              href="https://y2designandbuild.com/blog/ontario-home-renovation-tax-credits-rebates-incentives"              
            >
              Ontario renovation tax credits and rebates
            </a>
            .
          </p>
        </div>
      </section>

      {/* 12. Service areas */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Neighborhoods We Serve in Mississauga</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            We complete bathroom remodels throughout Mississauga, including Port Credit, Streetsville, Erin Mills, Clarkson, Meadowvale, Cooksville, East Credit, Churchill Meadows, Mineola, Lisgar, Lakeview and the Hurontario corridor.
          </p>

          {/* <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {neighborhoods.map((city) => (
              <div key={city} className="card flex items-center justify-center gap-3 p-4">
                <span className="text-brand" aria-hidden="true">✓</span>
                <span className="text-sm text-muted">{city}</span>
              </div>
            ))}
          </div> */}

          <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted">
            Homeowners in neighboring communities can visit our bathroom renovation pages for{" "}
            <Link className="underline" href="/bathroom-renovation/oakville">Oakville</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/toronto">Toronto</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/markham">Markham</Link> and{" "}
            <Link className="underline" href="/bathroom-renovation/scarborough">Scarborough</Link>, or view{" "}
            <Link className="underline" href="/service-areas">all of our service areas</Link>.
          </p>
        </div>
      </section>

      {/* 13. What you can expect */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="section-heading">What You Can Expect from Y2 Design & Build</h2>
          <p className="section-sub">Clear communication and a tidy job site, from day one to handover.</p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-3">
            {projectDetails.map((detail) => (
              <div key={detail} className="flex items-start gap-3 rounded-xl bg-surface px-5 py-4">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
                  ✓
                </span>
                <p className="text-sm leading-relaxed text-muted">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Gallery */}
      <section className="section-pad bg-brand-dark text-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold">Gallery Of Recent Projects</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "bathroom-gall-1",
              "bathroom-gall-10",
              "bathroom-palmer-1",
              "bathroom-3",
              "bathroom",
              "bathroom-palmer-2",
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

      {/* 15. FAQ */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl">
          <h2 className="section-heading text-3xl font-bold text-brand-dark">Frequently Asked Questions</h2>
          <p className="section-sub mt-2 text-muted">
            Common questions from Mississauga homeowners about bathroom remodeling projects.
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
                  <p className="text-sm leading-relaxed text-muted">
                    {faq.answer}
                    {faq.link && (
                      <>
                        {" "}It is also worth reviewing{" "}
                        <Link className="underline" href="/blog/does-your-home-insurance-cover-a-renovation">
                          how home insurance applies to renovation work
                        </Link>
                        .
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 16. Other services */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Explore Our Other Renovation Services</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Many Mississauga homeowners combine a bathroom remodel with related improvements. We also provide{" "}
            <a className="underline" href="https://y2designandbuild.com/kitchen-renovation/mississauga">kitchen renovations</a>,{" "}
            <a className="underline" href="https://y2designandbuild.com/basement-renovation/mississauga">basement renovations</a>,{" "}
            <a className="underline" href="https://y2designandbuild.com/home-renovation/mississauga">whole-home renovations</a>,{" "}
            <a className="underline" href="https://y2designandbuild.com/home-extensions">home additions</a>, and{" "}
            <a className="underline" href="https://y2designandbuild.com/flooring">flooring installation</a>. For a broader overview, visit our{" "}
            <a className="underline" href="https://y2designandbuild.com/bathroom-renovation">bathroom renovation services page</a> or learn more about{" "}
            <a className="underline" href="https://y2designandbuild.com/about">Y2 Design & Build</a>.
          </p>
        </div>
      </section>

      {/* 17. Final CTA */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Get Your Free Renovation Quote</h2>
          <p className="mt-4 leading-relaxed text-muted">
            If your bathroom no longer suits your household, we would be glad to help you plan its replacement. Arrange a complimentary in-home consultation and receive a detailed fixed-price quote; there is no obligation to proceed. To get started, phone our English line at{" "}
            <a className="underline" href="tel:6475073639">(647) 507-3639</a> or our Mandarin line at{" "}
            <a className="underline" href="tel:6472942888">(647) 294-2888</a>, write to{" "}
            <a className="underline" href="mailto:info@y2canada.com">info@y2canada.com</a>, or reach us through our{" "}
            <a className="underline" href="https://y2designandbuild.com/contact">contact form</a>.
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