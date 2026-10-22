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
  "A reply to your quote request within one business day",
  "An itemized fixed price, so the number you approve is the number you pay",
  "A locked schedule, with progress photos as work advances and a written report each Friday",
  "Design guidance on tile, fixtures, and layout from people who build what they draw",
  "Separate English and Mandarin phone lines for easy communication",
];

const services = [
  "Full renovations that strip the room to the studs and rebuild it with a waterproof membrane, new tile, and new fixtures",
  "Shower and tub work, including tub-to-shower conversions, walk-in and curbless showers, soaker tubs and glass enclosures",
  "Vanities, counters and storage, from double vanities in ensuites to tall cabinets and recessed niches",
  "Layout updates, such as relocating a toilet, widening a shower or adding a second sink",
  "Flooring, lighting and ventilation, including heated floors, layered lighting and properly vented exhaust fans",
  "Plumbing and electrical upgrades completed by WSIB licensed trades, with permits arranged when required",
  "Basement and in-law bathrooms for relatives or tenants living downstairs",
];

const showerRows = [
  {
    option: "Tub and shower combination",
    best: "Family bathrooms, homes with young children, resale appeal",
    consider:
      "Takes the least floor space for both functions; a tiled surround with a niche makes it feel more finished than an acrylic insert",
  },
  {
    option: "Walk-in shower with a low curb",
    best: "Ensuites and adult bathrooms",
    consider: "Easy to clean and versatile; a fixed glass panel or a hinged door keeps water contained",
  },
  {
    option: "Curbless walk-in shower",
    best: "Aging in place, accessibility, a modern open look",
    consider:
      "Requires the subfloor to be recessed and the floor sloped to a linear drain, so it’s best planned as part of a full remodel",
  },
];

const homeTypes = [
  {
    title: "Downtown Whitby and Port Whitby",
    text: "Older homes near the downtown area and the harbor may have original plumbing, smaller bathrooms, and limited ventilation. Townhomes and condos near the waterfront often have tighter layouts where every inch counts.",
  },
  {
    title: "Blue Grass Meadows, Pringle Creek, Lynde Creek and Williamsburg",
    text: "Many of these homes were built from the 1970s through the 1990s. Typical remodels replace tired tub surrounds, dated vanities and undersized fans, and often convert a large ensuite tub into a generous shower.",
  },
  {
    title: "Brooklin, Taunton North and Rolling Acres",
    text: "Newer homes here usually have sound plumbing but basic builder finishes. Upgrades focus on tile, glass, lighting, better storage and heated floors.",
  },
];

const familyTips = [
  "A wider vanity or double sinks so more than one person can get ready at the same time",
  "Separate storage for each child, using drawers or tall cabinets rather than one shared cupboard",
  "A handheld sprayer mounted on an adjustable bar, which makes bathing small children and rinsing the tub much easier",
  "Durable surfaces, such as porcelain tile and quartz counters, that stand up to splashes and daily cleaning",
  "Good lighting at the mirror, which helps older kids and adults alike",
];

const costRows = [
  {
    scope: "Half bath (powder room)",
    investment: "$2,500 – $5,000",
    time: "Usually within a week",
    popular: "New vanity, feature wall, better lighting",
  },
  {
    scope: "Main or family bathroom",
    investment: "$9,800 – $18,000",
    time: "Around 7–10 (10–12 for four-piece)",
    popular: "Tiled tub surround, double vanity, handheld shower",
  },
  {
    scope: "Primary ensuite or luxury remodel",
    investment: "$18,000 – $35,000",
    time: "Roughly two to three weeks",
    popular: "Walk-in or curbless shower, heated floors, freestanding tub",
  },
];

const neighborhoods = [
  "Brooklin",
  "Brooklin Heights",
  "Blue Grass Meadows",
  "Pringle Creek",
  "Port Whitby",
  "Lynde Creek",
  "Williamsburg",
  "Rolling Acres",
  "Taunton North",
  "Downtown Whitby",
];

export const faqs = [
  {
    question: "Can a bathroom remodel in Whitby keep the existing layout?",
    answer: "Yes, and it’s often the most cost-effective approach. Keeping the toilet, tub or shower and vanity in their current positions avoids moving drains and supply lines, so more of your budget goes into finishes. We’ll still check the subfloor, ventilation, and plumbing so the new room lasts.",
  },
  {
    question: "How quickly will I hear back after requesting a quote?",
    answer: "We respond within one business day to arrange your free in-home consultation.",
  },
  {
    question: "Which shower option works best in a family bathroom?",
    answer: "For most families, a tub-and-shower combination with a tiled surround and a handheld shower is the most practical choice. If the house already has a tub elsewhere, a walk-in shower may suit you better.",
  },
  {
    question: "Will you help me choose tile, fixtures and finishes?",
    answer: "Yes. Our team recommends materials based on your budget, how the room is used, and how easy it will be to maintain, and you can review options at our Markham showroom.",
  },
  {
    question: "Will I need a permit from the Town of Whitby?",
    answer: 
    <>
    Not usually for like-for-like updates. Relocating plumbing, removing walls, or adding new circuits typically requires a
    {" "}
    <a href="https://www.whitby.ca/services-and-payments/building-and-renovating/building-permits/" rel="nofollow" className="underline">building permit,</a>
    {" "}
    and electrical work is subject to ESA requirements. We’ll explain exactly what your project needs before scheduling begins.
    </>
  },
  {
    question: "Can I discuss my project in Mandarin?",
    answer: "Of course. Call (647) 294-2888, and a Mandarin-speaking team member will help you from planning to completion.",
  },
];

export default function BathroomWhitbyClient() {
  const tel = `tel:${site.phone.replace(/\D/g, "")}`;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <Header />

      {/* 1. Value-driven hero */}
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
                      Whitby
                    </li>
                  </ol>
                </nav>
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Licensed & Insured · Serving the GTA
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Bathroom Remodel in Whitby, ON
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                At <a href="https://y2designandbuild.com/" className="underline">Y2 Design & Build</a>, we plan, price, and build bathrooms for families across Whitby and Durham Region. We lead every bathroom remodel in Whitby with our own design team and a dedicated project manager, and we start with a quote you can hold us to.
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
          "Serving Durham Region homeowners for 14+ years · 500+ renovations completed ·
           Five-star reviews from homeowners on Google, Yelp, HomeStars and Houzz ·
           Licensed, insured and WSIB-covered · Free, no-pressure consultation" */}
      <TrustBadges />

      {/* 4. Why Whitby homeowners choose Y2 */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Why Whitby Homeowners Choose Y2 Design & Build
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
               <a href="https://www.durham.ca/" rel="nofollow" className="underline">Durham Region</a>  is an area we know especially well. We complete bathrooms regularly in neighboring Pickering and Ajax, and referrals from past clients often bring us new work across the region. That familiarity means we already understand the housing types here, from older homes near downtown and Port Whitby to the newer streets of Brooklin.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                We know Whitby homeowners are busy. So we take the coordination off your plate. Your project manager arranges every trade, from plumbing and electrical to tile and glass, keeps the schedule locked, and sends you a written summary every Friday. We price and approve any change you request before it happens. One recent Durham client told us their budget bathroom update started the day after approval and was finished in four days. Not every project moves that quickly, but it shows how organized scheduling keeps a <b>bathroom remodel in Whitby</b> moving.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">Book My Free Consultation</QuoteButton>
                <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
                  or call {site.phone}
                </a>
              </div>
            </div>

            <div>
              <img src={images.bathroom2} alt="Bathroom renovation in Whitby" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <img src={images.bathroom3} alt="Completed bathroom remodel in Whitby" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Our Bathroom Remodeling Services in Whitby
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Whether you’re refreshing a powder room or rebuilding a primary ensuite, our team can handle:
              </p>
              <ul className="mt-6 space-y-3">
                
                  <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>
                      <p>Full <a href="https://y2designandbuild.com/bathroom-renovation" className="underline">renovations</a> that strip the room to the studs and rebuild it with a waterproof membrane, new tile, and new fixtures</p>
                    </span>
                  </li>
                  
                  <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>
                      <p>Shower and tub work, including tub-to-shower conversions, walk-in and curbless showers, soaker tubs and glass enclosures</p>
                      </span>
                  </li>
                    <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>
                      <p>Vanities, counters and storage, from double <a href="https://www.housebeautiful.com/room-decorating/bathrooms/a60777296/ensuite-bathroom-guide-examples/" className="underline" rel="nofollow">vanities</a>  in ensuites to tall cabinets and recessed niches
</p>
                      </span>
                  </li>
                    <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>
                      <p>Layout updates, such as relocating a toilet, widening a shower or adding a second sink</p>
                      </span>
                  </li>
                    <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>
                      <p>Flooring, lighting and ventilation, including heated floors, layered lighting and properly vented exhaust fans</p>
                      </span>
                  </li>
                    <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>
                      <p>Plumbing and electrical upgrades completed by <a href="https://www.wsib.ca/en" rel="nofollow" className="underline"> WSIB</a> licensed trades, with permits arranged when required</p>
                      </span>
                  </li>
                   <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>
                     <p>Basement and in-law bathrooms for relatives or tenants living downstairs</p>        
                    </span>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Shower options */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Choosing the Right Shower for Your Whitby Bathroom
          </h2>
          <p className="mx-auto mt-4 max-w-5xl text-center leading-relaxed text-muted">
            The shower is usually the biggest decision in a bathroom remodel. Here’s how the three most common options compare:
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-center text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">Option</th>
                  <th className="px-4 py-3 font-semibold">Best suited to</th>
                  <th className="px-4 py-3 font-semibold">Things to consider</th>
                </tr>
              </thead>
              <tbody>
                {showerRows.map((row, i) => (
                  <tr key={row.option} className={i % 2 === 0 ? "bg-surface" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.option}</td>
                    <td className="px-4 py-3 text-muted">{row.best}</td>
                    <td className="px-4 py-3 text-muted">{row.consider}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mx-auto mt-6 max-w-5xl text-center leading-relaxed text-muted">
            Many Whitby families keep a tub in the main bathroom and choose a <a href="https://www.architecturaldigest.com/gallery/walk-in-shower-ideas" rel="nofollow" className="underline">walk-in shower</a> for the ensuite, which balances everyday convenience with long-term resale value.
          </p>
        </div>
      </section>

      {/* 7. Whitby homes */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Whitby Homes and What They Need</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {homeTypes.map((item) => (
              <div key={item.title} className="card bg-white p-6">
                <h3 className="text-lg font-bold text-brand-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Family bathroom */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Designing a Family Bathroom for Busy Mornings
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                <a href="https://www.whitby.ca/" rel="nofollow" className="underline">Whitby</a> has many growing families, and the main bathroom often has to serve two or three children at once. A few design choices make a real difference:
              </p>
              <ul className="mt-6 space-y-3">
                {familyTips.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://y2designandbuild.com/images/bathroom-palmer-1.webp"
                alt="Family bathroom project by Y2 Design & Build"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Cost and timeline */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Whitby Bathroom Remodel Cost and Timeline
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            We price each bathroom remodel in Whitby only after seeing the room, but recent Y2 projects give a dependable guide. Older homes may need extra plumbing or subfloor work, while newer homes tend to stay closer to the lower end for their category. For a full breakdown, read our{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/bathroom-renovation-cost-gta">
              bathroom renovation price guide for 2026
            </Link>
            , and see{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/what-to-expect-during-home-renovation-markham">
              what living through a renovation is really like
            </Link>
            .
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-center text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">Bathroom</th>
                  <th className="px-4 py-3 font-semibold">Typical budget</th>
                  <th className="px-4 py-3 font-semibold">Working days on site</th>
                  <th className="px-4 py-3 font-semibold">Common Whitby upgrade</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, i) => (
                  <tr key={row.scope} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.scope}</td>
                    <td className="px-4 py-3 text-muted">{row.investment}</td>
                    <td className="px-4 py-3 text-muted">{row.time}</td>
                    <td className="px-4 py-3 text-muted">{row.popular}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <QuoteButton className="btn-primary cursor-pointer">Get My Free Quote</QuoteButton>
            <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
              or call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 10. Social proof */}
      <ReviewStrip />

      {/* 11. Communities */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Whitby Communities We Serve</h2>
          <p className="mx-auto mt-4 max-w-5xl text-center leading-relaxed text-muted">
            We complete bathroom remodels throughout Whitby, including Brooklin, Brooklin Heights, Blue Grass Meadows, Pringle Creek, Port Whitby, Lynde Creek, Williamsburg, Rolling Acres, Taunton North and Downtown Whitby.
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
            Elsewhere in Durham Region and the GTA, visit our bathroom pages for{" "}
            <Link className="underline" href="/bathroom-renovation/ajax">Ajax</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/pickering">Pickering</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/scarborough">Scarborough</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/markham">Markham</Link> and{" "}
            <Link className="underline" href="/bathroom-renovation/toronto">Toronto</Link>, or{" "}
            <Link className="underline" href="/service-areas">view all the areas we serve</Link>.
          </p>
        </div>
      </section>

      {/* 12. More services */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">More Renovation Services for Whitby Homes</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Many clients plan a bathroom alongside other work. Y2 also provides{" "}
            <a className="underline" href="https://y2designandbuild.com/kitchen-renovation">kitchen renovations</a>,{" "}
            <a className="underline" href="https://y2designandbuild.com/basement-renovation">basement finishing and suites</a>,{" "}
            <a className="underline" href="https://y2designandbuild.com/home-extensions">home additions</a>,{" "}
            <a className="underline" href="https://y2designandbuild.com/home-renovation">whole-home renovations</a> and{" "}
            <a className="underline" href="https://y2designandbuild.com/flooring">new floors</a> throughout the house. Before you begin, check{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/does-your-home-insurance-cover-a-renovation">
              how your home insurance treats renovation work
            </Link>
            , and see whether some accessibility upgrades qualify for{" "}
            <a
              className="underline"
              href="https://y2designandbuild.com/blog/ontario-home-renovation-tax-credits-rebates-incentives"
            >
              Ontario renovation incentives and tax credits
            </a>
            . Explore{" "}
            <a className="underline" href="https://y2designandbuild.com/bathroom-renovation">Y2’s bathroom renovation work across the GTA</a>{" "}
            or{" "}
            <a className="underline" href="https://y2designandbuild.com/about">meet the people behind Y2</a>.
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

      {/* 15. FAQ */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl">
          <h2 className="section-heading text-3xl font-bold text-brand-dark">Frequently Asked Questions</h2>
          <p className="section-sub mt-2 text-muted">
            Common questions from Whitby homeowners planning a bathroom renovation.
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

      {/* 16. Book consultation */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Book Your Free Whitby Bathroom Consultation</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Ready to start planning your bathroom remodel in Whitby? We’ll visit your home, measure the space and prepare a line-by-line fixed-price quote, with no obligation to proceed. English speakers can call{" "}
            <a className="underline" href="tel:6475073639">(647) 507-3639</a>, and Mandarin speakers can call{" "}
            <a className="underline" href="tel:6472942888">(647) 294-2888</a>. Prefer email? Write to{" "}
            <a className="underline" href="mailto:info@y2canada.com">info@y2canada.com</a>, or{" "}
            <a className="underline" href="https://y2designandbuild.com/contact">request a visit online</a>.
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