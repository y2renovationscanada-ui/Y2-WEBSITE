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
  "Spa-style primary ensuites with steam showers, freestanding tubs, and heated floors",
  "Curbless and walk-in showers designed for comfort now and accessibility later",
  "Careful work in heritage and older homes in Old Oakville, Kerr Village and Bronte",
  "A dedicated project manager, available in English or Mandarin",
];

const homeTypes = [
  {
    area: "Old Oakville, Kerr Village, Bronte",
    homes: "Early 1900s to mid-century homes, many renovated more than once",
    plan: "Uneven floors, older plumbing, past renovations of unknown quality, and possible heritage district rules for exterior changes",
  },
  {
    area: "Southeast Oakville, Morrison, Eastlake, Clearview",
    homes: "Large custom and estate homes, plus newer infill builds",
    plan: "Spacious ensuites where layout, lighting and material quality matter most",
  },
  {
    area: "Glen Abbey, River Oaks, Falgarwood, Iroquois Ridge",
    homes: "1970s to 1990s two-story family homes",
    plan: "Dated ensuites with large drop-in tubs, original fans and builder-grade finishes",
  },
  {
    area: "West Oak Trails, Joshua Creek, North Oakville",
    homes: "1990s to present subdivisions and townhomes",
    plan: "Mostly finish and layout upgrades; some freehold townhouses have tight footprints",
  },
  {
    area: "Downtown, Bronte Harbour, Uptown Core",
    homes: "Condominium buildings",
    plan: "Board approvals, fixed drain locations and strict work hours",
  },
];

const ensuiteTopics = [
  {
    title: "Steam showers",
    text: "A steam shower needs a fully enclosed, vapor-sealed space, a ceiling sloped so condensation runs to the walls instead of dripping, a dedicated steam generator with access for servicing, and a door that seals properly. Planned correctly, it is one of the most rewarding upgrades you can make. Planned poorly, it can lead to moisture problems in the walls and ceiling.",
  },
  {
    title: "Freestanding tubs",
    text: "Cast-iron and solid-surface tubs can weigh several hundred pounds before they're filled with water and a person. We check the joist size, span, and direction beneath the tub location, and reinforce the floor where needed.",
  },
  {
    title: "Curbless showers",
    text: "A true zero-threshold entry usually requires recessing the subfloor so the shower floor can slope to a linear drain. This is far easier to plan in a full remodel than to add later.",
  },
  {
    title: "Lighting",
    text: "A single ceiling fixture leaves shadows at the mirror. Layered lighting, with vertical lights or an integrated LED mirror at face height, a recessed light over the shower, and a dimmable ambient source, makes the room easier to use and more comfortable at night.",
  },
  {
    title: "Smart fixtures",
    text: "Bidet toilets need a GFCI-protected outlet behind the toilet, heated towel rails need their own wiring, and digital shower controls need access panels. Each of these is far simpler to include before the walls are closed.",
  },
];

const costRows = [
  {
    scope: "Powder room",
    investment: "$2,500 – $5,000",
    time: "Several days, up to about a week",
  },
  {
    scope: "Three- or four-piece bathroom",
    investment: "$9,800 – $18,000",
    time: "Roughly 7 to 10 working days for a three-piece; 10 to 12 for a four-piece",
  },
  {
    scope: "Luxury remodel or main ensuite",
    investment: "$18,000 – $35,000",
    time: "Roughly 2–3 weeks",
  },
];

const quoteQuestions = [
  {
    q: "Is the quote itemized?",
    a: "A single lump sum makes it hard to see what's included. An itemized quote lists demolition, plumbing, electrical, waterproofing, tile, fixtures, and finishing separately.",
  },
  {
    q: "What waterproofing system will be used?",
    a: "The answer should name a specific membrane system for the shower walls and floor, not just “moisture-resistant drywall.”",
  },
  {
    q: "Who manages the trades?",
    a: "Find out whether one person is accountable for scheduling and quality, or whether you'll be coordinating plumbers and tilers yourself.",
  },
  {
    q: "How are hidden problems handled?",
    a: "A clear policy for documenting and pricing unexpected conditions protects you from open-ended cost increases.",
  },
  {
    q: "Are permits included?",
    a: "If your layout is changing, permits from the Town of Oakville may be required. Confirm who applies for them and whether fees are included.",
  },
  {
    q: "Are the trades insured and WSIB-covered?",
    a: "This protects you if someone is injured on your property.",
  },
];

const processSteps = [
  {
    title: "In-home design consultation",
    text: "A member of our team visits to measure, inspect the floor structure, plumbing, and ventilation, and talk through how you use the room. There's no cost and no obligation.",
  },
  {
    title: "Design and fixed-price quote",
    text: "We prepare a layout and finish selections, along with an itemized quote covering scope, materials, and labor.",
    extra: {
      before: "If you're still choosing a vanity, our article on ",
      linkText: "vanity shopping across the GTA",
      href: "https://y2designandbuild.com/blog/where-to-buy-bathroom-vanity-gta",
      after: " is a helpful reference.",
    },
  },
  {
    title: "Construction",
    text: "Your project manager handles permits where required, protects your floors and stairways, and schedules each trade in sequence. If concealed damage appears after demolition, you'll receive photos and a written price before any added work proceeds.",
  },
  {
    title: "Walkthrough and handover",
    text: "We inspect the finished room with you and resolve any remaining items before closing out the project.",
  },
];

const neighborhoods = [
  "Old Oakville",
  "Kerr Village",
  "Bronte",
  "Glen Abbey",
  "River Oaks",
  "West Oak Trails",
  "Joshua Creek",
  "Iroquois Ridge",
  "Eastlake",
  "Clearview",
  "Falgarwood",
  "North Oakville",
];

export const faqs = [
  {
    question: "Will I need a permit for my bathroom remodel in Oakville?",
    answer: "If you’re only replacing fixtures and finishes in their current positions, a building permit usually isn’t needed. Relocating plumbing, moving or removing walls, and adding new electrical circuits typically require a permit from the Town of Oakville, with electrical work also needing ESA approval. We’ll identify every permit that applies while preparing your quote.",
  },
  {
    question: "My home is in a heritage district. Does that affect my bathroom?",
    answer: "Interior work is generally unaffected. Exterior changes, such as new vents, replacement windows, or altered openings, may need heritage approval. We’ll design the ventilation route to minimize this where possible.",
  },
  {
    question: "Can my floor support a freestanding stone or cast-iron tub?",
    answer: "Often, yes, but it should be checked before you buy the tub. We assess the joists beneath the planned location and add reinforcement if the structure needs it.",
  },
  {
    question: "Is a steam shower practical in a home?",
    answer: "Yes, when it’s built as a fully sealed system with the correct ceiling slope, vapor protection, and a serviceable generator. We plan these details from the start so the shower performs well over the long term.",
  },
  {
    question: "How far in advance should I book a bathroom remodel?",
    answer: "Design, selections, and any permits all take time before construction starts. Booking your consultation early gives you room to make decisions without pressure and to order special-order materials in good time.",
  },
  {
    question: "Do you offer service in Mandarin?",
    answer: "Absolutely. Dial (647) 294-2888 and you can work with a Mandarin-speaking team member from design right through to completion.",
  },
];

export default function BathroomOakvilleClient() {
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
                      Oakville
                    </li>
                  </ol>
                </nav>
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Licensed & Insured · Serving the GTA
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Bathroom Remodel in Oakville, ON
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                Ensuites, family bathrooms and powder rooms for Oakville homes, from heritage houses near Lakeshore to newer builds north of Dundas. Each project is designed in-house, priced line by line, and built by licensed, WSIB-covered trades.
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
                <span className="font-bold text-accent">★★★★★ 5.0</span> from
                100+ Google reviews · Free in-home consultations in Oakville
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
          "5-star reviews on Google, HomeStars, Houzz and Yelp · More than 500 GTA renovations delivered ·
           14+ years of design-build experience · Fully licensed, insured and WSIB-covered · Free in-home design consultation" */}
      <TrustBadges />

      {/* 4. Intro */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Bathroom Remodeling Contractor Serving Oakville and Halton Region
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Oakville homeowners tend to know what they want from a bathroom. The challenge is usually getting it built properly. A freestanding stone tub needs a floor that can carry it. A steam shower needs a sealed enclosure, the right ceiling slope, and a vapor barrier that most standard showers don’t have. A curbless entry needs the subfloor lowered before the tile goes down, not after.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                These details separate a bathroom that looks good in photos from one that still performs ten years later. Y2 Design & Build has spent more than 14 years designing and building bathrooms across the GTA. Our approach to every bathroom remodel in Oakville is the same: plan the structure and the systems first, then the finishes. One team handles the design, the written quote, and the construction, and a single project manager stays with you throughout.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">Book My Free Consultation</QuoteButton>
                <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
                  or call {site.phone}
                </a>
              </div>
            </div>

            <div>
              <img src={images.bathroom2} alt="Bathroom renovation in Oakville" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Oakville homes */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Oakville Homes and What They Mean for Your Bathroom
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Oakville’s housing stock varies widely from one neighborhood to the next, and each type comes with its own considerations.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">Area</th>
                  <th className="px-4 py-3 font-semibold">Typical homes</th>
                  <th className="px-4 py-3 font-semibold">What to plan for</th>
                </tr>
              </thead>
              <tbody>
                {homeTypes.map((row, i) => (
                  <tr key={row.area} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.area}</td>
                    <td className="px-4 py-3 text-muted">{row.homes}</td>
                    <td className="px-4 py-3 text-muted">{row.plan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Heritage homes */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Heritage Homes: What Oakville Owners Should Know
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Oakville has several heritage conservation districts, including areas of Old Oakville and the Trafalgar Road corridor. Interior bathroom work is generally not affected by heritage designation. Changes to the outside of the house can be, however. Adding a new exhaust vent on a street-facing wall, replacing a bathroom window or enlarging an opening may require heritage approval from the Town before work begins.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                We plan ventilation routes with this in mind, venting through the roof or a rear wall where appropriate so the project isn’t delayed. If your home is designated or sits within a district, we’ll review what applies during the design stage.
              </p>
            </div>
            <div>
              <img
                src="https://y2designandbuild.com/images/bathroom-gall-1.webp"
                alt="Bathroom project by Y2 Design & Build"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Primary ensuite */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Designing a Primary Ensuite That Works
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Many Oakville remodels center on the primary ensuite. These decisions shape how well it functions day to day.
          </p>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
            {ensuiteTopics.map((t) => (
              <div key={t.title} className="card bg-white p-5">
                <h3 className="text-lg font-bold text-brand-dark">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Cost */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            What a Bathroom Remodel in Oakville Costs
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Pricing depends on scope, finishes, and the condition of what’s behind the walls. The figures below reflect what our recent projects across the GTA have typically cost:
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-center text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">Project</th>
                  <th className="px-4 py-3 font-semibold">Typical investment</th>
                  <th className="px-4 py-3 font-semibold">On-site duration once work begins</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, i) => (
                  <tr key={row.scope} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.scope}</td>
                    <td className="px-4 py-3 text-muted">{row.investment}</td>
                    <td className="px-4 py-3 text-muted">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-muted">
            Ensuites with steam systems, stone slab walls, or extensive custom millwork can exceed these ranges, and we price them individually based on the design. Structural reinforcement, relocated drains, and heritage-related exterior work can also add to the total. For a deeper look at how pricing breaks down, read our{" "}
            <Link className="underline" href="/blog/bathroom-renovation-cost-gta">
              bathroom renovation cost guide for GTA homeowners
            </Link>
            , and see{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/how-long-does-bathroom-renovation-take-timeline">
              what affects a bathroom renovation schedule
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

      {/* 9. Compare quotes */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <img src={images.bathroom3} alt="Completed bathroom remodel in Oakville" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                How to Compare Bathroom Remodeling Quotes
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Quotes for the same bathroom remodel in Oakville can differ by thousands of dollars, and the lowest number isn’t always the lowest final cost. When comparing contractors, ask:
              </p>
              <ul className="mt-6 space-y-3">
                {quoteQuestions.map((item) => (
                  <li key={item.q} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>
                      <b className="text-brand-dark">{item.q}</b> {item.a}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-semibold text-brand-dark">
                At Y2, we answer each of these in writing before construction begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Process */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Our Remodeling Process</h2>
          <ol className="mx-auto mt-10 grid max-w-4xl gap-4">
            {processSteps.map((step, i) => (
              <li key={step.title} className="flex items-start gap-4 rounded-xl bg-surface px-5 py-4 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {step.text}
                    {step.extra && (
                      <>
                        {" "}
                        {step.extra.before}
                        <Link className="underline" href={step.extra.href}>
                          {step.extra.linkText}
                        </Link>
                        {step.extra.after}
                      </>
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-6 max-w-4xl text-sm leading-relaxed text-muted">
            Planning to stay home during construction? It’s worth reading our{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/where-do-you-live-during-a-full-home-renovation">
              guide to living arrangements during a renovation
            </Link>{" "}
            and checking your{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/does-your-home-insurance-cover-a-renovation">
              home insurance coverage during renovation work
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 11. Social proof */}
      <ReviewStrip />

      {/* 12. Service areas */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Neighborhoods We Serve in Oakville</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            We remodel bathrooms across Oakville, including Old Oakville, Kerr Village, Bronte, Glen Abbey, River Oaks, West Oak Trails, Joshua Creek, Iroquois Ridge, Eastlake, Clearview, Falgarwood, and the newer communities of North Oakville. Our design showroom is based in Markham, at 3400 14th Ave, Unit 16.
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
            Homeowners in nearby cities can explore our bathroom remodeling pages for{" "}
            <Link className="underline" href="/bathroom-renovation/mississauga">Mississauga</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/toronto">Toronto</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/markham">Markham</Link>, and{" "}
            <Link className="underline" href="/bathroom-renovation/scarborough">Scarborough</Link>, or see the{" "}
            <Link className="underline" href="/service-areas">full list of communities we serve</Link>.
          </p>
        </div>
      </section>

      {/* 13. More services */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">More Renovation Services in Oakville</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Most Oakville clients combine their bathroom with other projects. Explore our{" "}
            <a className="underline" href="https://y2designandbuild.com/kitchen-renovation/oakville">Oakville kitchen renovation</a>,{" "}
            <a className="underline" href="https://y2designandbuild.com/basement-renovation/oakville">Oakville basement renovation</a>{" "}
            and{" "}
            <a className="underline" href="https://y2designandbuild.com/home-renovation/oakville">Oakville home renovation</a>{" "}
            services, or consider{" "}
            <a className="underline" href="https://y2designandbuild.com/home-extensions">home additions</a>{" "}
            when you need more space. Some aging-in-place upgrades may also qualify for credits, outlined in our article on{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/ontario-home-renovation-tax-credits-rebates-incentives">
              renovation incentives available in Ontario
            </Link>
            . For an overview of all our bathroom work, visit our{" "}
            <a className="underline" href="https://y2designandbuild.com/bathroom-renovation">main bathroom renovation page</a>, or meet the{" "}
            <a className="underline" href="https://y2designandbuild.com/about">Y2 team</a>.
          </p>
        </div>
      </section>

      {/* 14. What you can expect */}
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

      {/* 15. Gallery */}
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

      {/* 16. FAQ */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl">
          <h2 className="section-heading text-3xl font-bold text-brand-dark">Bathroom Remodel FAQs: Oakville, ON</h2>
          <p className="section-sub mt-2 text-muted">
            Common questions from Oakville homeowners planning a bathroom renovation.
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

      {/* 17. Book consultation */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Start Planning Your Oakville Bathroom</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Whether you’re updating a family bathroom or reimagining a primary ensuite, we’ll help you plan it properly from the first visit. Book a free in-home consultation for your bathroom remodel in Oakville and receive a line-by-line fixed-price quote, with no commitment required. For English, call{" "}
            <a className="underline" href="tel:6475073639">(647) 507-3639</a>; for Mandarin, call{" "}
            <a className="underline" href="tel:6472942888">(647) 294-2888</a>. You can also email{" "}
            <a className="underline" href="mailto:info@y2canada.com">info@y2canada.com</a> or{" "}
            <a className="underline" href="https://y2designandbuild.com/contact">request your consultation online</a>.
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