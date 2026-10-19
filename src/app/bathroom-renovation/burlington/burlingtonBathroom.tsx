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
  "3D design before demolition",
  "Fixed, itemized pricing",
  "One project manager",
  "Permits handled by Y2",
  "Wholesale material access",
  "English and Mandarin support",
];

const commitments = [
  {
    label: "The quote is the price:",
    text: (
    <>
      Every line, from demolition to
      {" "}
      <a href="https://en.wikipedia.org/wiki/Grout" rel="nofollow" className="underline" target="blank">
        grout sealer
      </a>
      {" "}
      is listed before you sign. We cost any change you request on paper before it goes ahead.
      </>
    )
  },
  {
    label: "Nothing hidden stays hidden:",
    text: "If we open a wall and find rot, a leaking drain, or old wiring, you get pictures plus a cost explanation, and that repair waits for your approval.",
  },
  {
    label: "One person answers for the job:",
    text: "Plumbing, electrical, tile, and glass crews are sequenced by your Y2 project manager, who also lines up inspections and keeps you posted as each stage wraps up.",
  },
  {
    label: "You see it before it’s built:",
    text: (
    <>
      Our 3D visuals let you test the
      {" "}
      <a href="https://en.wikipedia.org/wiki/Bathroom_cabinet" rel="nofollow" className="underline" target="blank">
       vanity
      </a>
      {" "}
       size, shower layout, and tile pattern on screen, where changes cost nothing.
      </>
    )
  },
  {
    label: "You hear back fast:",
    text: "Calls and emails are answered by the next business day.",
  },
];

const goalRows = [
  {
    goal: "Selling within a year or two",
    approach: "Neutral, buyer-friendly update",
    includes: "New vanity, toilet, lighting, mirror, fresh tile or tub surround, paint",
    price: "$9,800–$14,000",
    timeline: "About 7–10 working days",
  },
  {
    goal: "Staying 10 or more years",
    approach: "Full remodel built to last",
    includes: "Stripped to studs, new plumbing, membrane, tile, ducted fan, quality fixtures",
    price: "$12,000–$18,000",
    timeline: "10–12 working days for a four-piece",
  },
  {
    goal: "Aging in place",
    approach: "Safety-first layout",
    includes: "Curbless shower, grab bar backing, comfort-height toilet, handheld shower, slip-resistant tile",
    price: "$12,000–$22,000",
    timeline: "10 days to 2 weeks",
  },
  {
    goal: "Guest or powder room",
    approach: "Small space, big impression",
    includes: "Feature wall, compact vanity, new toilet, lighting",
    price: "$2,500–$5,000",
    timeline: "Usually under a week",
  },
  {
    goal: "Spa-style primary ensuite",
    approach: "Custom design",
    includes: "Freestanding tub, large glass shower, heated floor, double vanity, custom storage",
    price: "$18,000–$35,000",
    timeline: "2–3 weeks",
  },
];

const selfChecks = [
  "Press on the floor around the toilet. Any softness or flex can mean water has reached the subfloor. Repair that before you install a new tile.",
  "Look at the ceiling below. Brown rings or bubbling paint under an upstairs bathroom point to a slow leak from the tub, shower, or toilet seal.",
  "Tap the shower tile. A hollow sound or loose tiles often means moisture has gotten behind the wall, and the backer board may need replacing.",
  "Hold a tissue under the fan. If the fan can’t hold it against the grille, it isn’t moving enough air, or it may be venting into the attic instead of outdoors.",
  "Time your hot water. A long wait at the tap can mean a long pipe run from the water heater, something we can sometimes improve during the remodel.",
  "Try the shut-off valves. Valves under the sink and behind the toilet that won’t turn are common in older homes and are usually replaced during the job.",
];

const costFactors = [
  {
    label: "Moving plumbing.",
    text: "Keeping the toilet, tub, and drain in their current spots is the biggest single way to protect your budget.",
  },
  {
    label: "Tile coverage.",
    text: "Full-height tile throughout costs more than tiling the shower walls and painting the rest.",
  },
  {
    label: "Glass.",
    text: "Frameless, custom-measured glass costs more than a semi-frameless door, and both cost more than a shower curtain.",
  },
  {
    label: "Heated floors and custom millwork.",
    text: "Both add comfort and cost, and both are easiest to install during a full remodel.",
  },
  {
    label: "Condition behind the walls.",
    text: "Rot, leaks, or outdated wiring discovered during demolition add work, which we always price for your approval first.",
  },
];

const beforeConstruction = [
  {
    label: "Site visit:",
    text: "We take measurements, look over the existing plumbing, venting, and wiring, and hear what frustrates you about the room today.",
  },
  {
    label: "3D design:",
    text: "You review layouts and finishes on screen and adjust them until they feel right.",
  },
  {
    label: "Selections:",
    text: "You choose tile, fixtures, and the vanity, and we source them through our wholesale suppliers.",
  },
  {
    label: "Fixed quote:",
    text: "Every item and labor cost is listed in writing for you to approve.",
  },
  {
    label: "Ordering and permits:",
    text: (
      <>
        We order and confirm materials, and file any 
        {" "}
        <a href="https://www.burlington.ca/en/building-and-renovating/renovations-and-additions.aspx" rel="nofollow noopenere noreferre" className="underline" target="blank">
        City of Burlington
        </a>
        {" "}
        permit or ESA notification.
      </>
    ),
  },
];

const duringConstruction = [
  "Demolition and inspection of everything behind the old finishes",
  "Rough-in plumbing and electrical, with inspections where they’re required",
  "Waterproofing, then a flood test before any tile is set",
  "Tile, then fixtures, vanity, glass, and lighting",
  "Final walkthrough with your project manager, and a clean, ready-to-use room",
];

const neighborhoods = [
  "Aldershot",
  "Tyandaga",
  "Roseland",
  "Shoreacres",
  "Elizabeth Gardens",
  "Downtown Burlington",
  "Brant Hills",
  "Mountainside",
  "Palmer",
  "Headon Forest",
  "Tansley",
  "Millcroft",
  "Pinedale",
  "Longmoor",
  "Appleby",
  "Orchard",
  "Alton Village",
];

export const faqs = [
  {
    question: "Are bathroom renovations in Burlington worth it before selling?",
    answer: "A clean, updated bathroom helps a listing stand out, but a full luxury remodel rarely pays for itself right before a sale. If you’re selling soon, we’ll recommend a neutral update that improves first impressions without overspending.",
  },
  {
    question: "Can you replace my corner jetted tub with a walk-in shower?",
    answer: "Yes, and it’s one of the most popular requests we get in Burlington ensuites. Removing the tub usually frees enough floor space for a generous glass shower with a bench and niche.",
  },
  {
    question: "My only bathroom is being renovated. What are my options?",
    answer: (
      <>
        We schedule the work tightly to keep the downtime short, and we’ll discuss timing with you during planning. For bigger projects, our article on{" "}
        <Link className="underline" href="https://y2designandbuild.com/blog/where-do-you-live-during-a-full-home-renovation">
          staying somewhere else while your home is renovated
        </Link>{" "}
        lays out the choices.
      </>
    ),
  },
  {
    question: "Where can I see materials before choosing?",
    answer: "Our showroom is in Markham. Many Burlington clients finalize most of their choices through our 3D visuals and samples, and we’re happy to arrange a showroom visit if you’d like to see items in person.",
  },
  {
    question: "Will my bathroom project need a permit?",
    answer: "Replacing fixtures in the same position usually doesn’t. Relocating drains, adding a new bathroom, or changing structural walls typically does, and electrical work involves the ESA. Your project manager confirms the requirements and handles the filings.",
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
          alt={`Bathroom Renovation project by Y2 Design & Build in Burlington`}
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
                      Burlington
                    </li>
                  </ol>
                </nav>


              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Licensed & Insured · Serving the GTA
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Bathroom Renovations in Burlington, ON
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                <a href="/" className="underline">Y2 Design & Build</a> designs, prices, and builds bathroom renovations in Burlington with its own team, start to finish. You approve a 3D plan and a fixed, itemized price, and one Y2 project manager carries the job from demolition to the final wipe-down.
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
                  Get My Free Burlington Quote
                </QuoteButton>
                <a href={tel} className="btn-outline-light text-center">
                  Call {site.phone}
                </a>
              </div>
              <p className="mt-5 text-sm text-white/80">
                <span className="font-bold text-accent">★★★★★ 5.0</span> on Google from
                100+ reviews · 500+ GTA projects · 14+ years · Licensed, insured, WSIB-covered
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

      {/* 4. Commitments */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                What Y2 Commits to on Every Burlington Bathroom
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                We’d rather show you how we work than tell you we’re the best. These are the commitments behind all our bathroom renovations in Burlington:
              </p>
              <ul className="mt-6 space-y-3">
                {commitments.map((item) => (
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
              <img src={images.bathroom2} alt="Bathroom renovation in Burlington" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process */}
      <ThreeStepProcess />

      {/* 6. Match the renovation to your goal */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Match the Renovation to Your Goal
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            The right bathroom depends on why you’re renovating. A pre-sale update and a forever-home ensuite call for very different budgets, and many bathroom renovations in Burlington go over budget simply because the scope never matched the goal. Use this table to find your starting point.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-center text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">Your goal</th>
                  <th className="px-4 py-3 font-semibold">Smartest approach</th>
                  <th className="px-4 py-3 font-semibold">What it usually includes</th>
                  <th className="px-4 py-3 font-semibold">Y2 price band</th>
                  <th className="px-4 py-3 font-semibold">Typical timeline</th>
                </tr>
              </thead>
              <tbody>
                {goalRows.map((row, i) => (
                  <tr key={row.goal} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.goal}</td>
                    <td className="px-4 py-3 text-muted">{row.approach}</td>
                    <td className="px-4 py-3 text-muted">{row.includes}</td>
                    <td className="px-4 py-3 text-muted">{row.price}</td>
                    <td className="px-4 py-3 text-muted">{row.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-muted">
            These bands reflect Y2 Design & Build’s standard pricing for powder rooms ($2,500–$5,000), full bathrooms ($9,800–$18,000), and luxury bathrooms ($18,000–$35,000). Your fixed quote is built from your actual room, layout, and selections.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            For more on what pushes a budget up or down, read our{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/bathroom-renovation-cost-gta">
              GTA guide to bathroom renovation pricing
            </a>
            .
          </p>
        </div>
      </section>

      {/* 7. Self-check */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <img
                src={images.bathroom3}
                alt="Bathroom ready for renovation in Burlington"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                A 10-Minute Self-Check Before You Call Anyone
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                You can learn a lot about your bathroom before a contractor ever visits. Walk through these checks, and tell us what you find when we meet. It makes your quote faster and more accurate, and it flags problems that may change the scope of your project.
              </p>

              <ul className="mt-6 space-y-3">
                {selfChecks.map((item) => (
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
                <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <p>Check your electrical outlet. A bathroom outlet without test and reset buttons is not <a href="https://safeelectricity.org/ground-fault-circuit-interrupters-gfcis/" rel="nofollow noopener noreferrer" className="underline" target="blank">GFCI</a>-protected and should be updated.</p>
                  </li>
              </ul>

              <p className="mt-4 leading-relaxed text-muted">
                None of these problems are unusual, and they're cheaper to fix once the room is open. That’s why our team checks for them before pricing any of our bathroom renovations in Burlington.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 8. How Burlington homes shape the plan */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                How Burlington Homes Shape the Plan
              </h2>
              <p className="mt-2 leading-relaxed text-muted">
                Burlington’s housing changes noticeably as you move north from the lake, and that shapes the plan for each of our bathroom renovations in Burlington.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                South of the QEW, in Roseland, Shoreacres, Elizabeth Gardens, and around downtown, many homes date from the 1940s to the 1960s. Bathrooms here are often compact, with original cast-iron tubs, older drain lines, and walls that are rarely square. Downtown condos along Lakeshore Road and Brant Street add another layer: management sign-off, reserved elevator time, and restricted noise hours, which our{" "}
                <a className="underline" href="https://y2designandbuild.com/condo-renovation">condo renovation team</a>{" "}
                plans for in advance.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                In the middle of the city, Brant Hills, Mountainside, Palmer and Tyandaga include many 1960s and 1970s side-splits and backsplits, where tubs, vanities and fans are often near the end of their life. Homes built in Headon Forest, Tansley and Millcroft during the late 1980s and 1990s frequently came with large primary ensuites with corner jetted tubs that owners now want to swap for a walk-in shower.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                North of Dundas, Orchard and Alton Village are newer, but their builder-grade bathrooms now commonly show worn caulking, chipped acrylic tubs, and dated lighting. These rooms are often the quickest and most affordable to transform.
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
                alt="Bathroom project in Burlington"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. What moves the cost */}
      <section className="bg-white section-pad">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-dark">
            What Moves the Cost of Bathroom Renovations in Burlington?
          </h2>
          <ul className="mt-6 space-y-3">
            {costFactors.map((item) => (
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
        </div>
      </section>

      {/* 10. From first call to finished bathroom */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="section-heading">From First Call to Finished Bathroom</h2>

          <h3 className="mx-auto mt-10 max-w-4xl text-xl font-bold text-brand-dark">Before construction:</h3>
          <div className="mx-auto mt-4 grid max-w-4xl gap-3">
            {beforeConstruction.map((step) => (
              <div key={step.label} className="flex items-start gap-3 rounded-xl bg-white px-5 py-4">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">✓</span>
                <p className="text-sm leading-relaxed text-muted">
                  <b className="text-brand-dark">{step.label}</b> {step.text}
                </p>
              </div>
            ))}
          </div>

          <h3 className="mx-auto mt-10 max-w-4xl text-xl font-bold text-brand-dark">During construction:</h3>
          <div className="mx-auto mt-4 grid max-w-4xl gap-3">
            {duringConstruction.map((step) => (
              <div key={step} className="flex items-start gap-3 rounded-xl bg-white px-5 py-4">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">✓</span>
                <p className="text-sm leading-relaxed text-muted">{step}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-relaxed text-muted">
            The same steps apply to all bathroom renovations in Burlington that we deliver, whether it’s a powder room or a full primary ensuite. Wondering how many days you’ll be without your bathroom? Our{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/how-long-does-bathroom-renovation-take-timeline">
              stage-by-stage bathroom timeline guide
            </a>{" "}
            answers that in detail.
          </p>
        </div>
      </section>

      {/* 11. Social proof */}
      <ReviewStrip />

      {/* 12. Neighborhoods */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-brand-dark">
            Burlington Neighborhoods We Serve
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Our crews handle bathroom renovations in Burlington across the city, including:
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {neighborhoods.map((area) => (
              <div key={area} className="card flex items-start gap-3 p-4">
                <span className="text-brand" aria-hidden="true">
                  ✓
                </span>
                <span className="text-sm text-muted">{area}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 leading-relaxed text-muted">
            Y2 also remodels bathrooms in neighboring{" "}
            <Link className="underline" href="/bathroom-renovation/oakville">Oakville</Link> and{" "}
            <Link className="underline" href="/bathroom-renovation/mississauga">Mississauga</Link>, and further east in{" "}
            <Link className="underline" href="/bathroom-renovation/etobicoke">Etobicoke</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/toronto">Toronto</Link> and{" "}
            <Link className="underline" href="/bathroom-renovation/vaughan">Vaughan</Link>. View all the cities on our{" "}
            <Link className="underline" href="/service-areas">service map</Link>, or return to our{" "}
            <a className="underline" href="https://y2designandbuild.com/bathroom-renovation">main bathroom renovation page</a>.
          </p>
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
          <h2 className="section-heading text-3xl font-bold text-brand-dark">Burlington Bathroom FAQs</h2>
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

      {/* Helpful before you start */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Helpful Before You Start</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Choosing a vanity? Compare options in our guide on{" "}
            {/* TODO: confirm href */}
            <a className="underline" href="https://y2designandbuild.com/blog/where-to-buy-bathroom-vanity-gta">
              where GTA homeowners buy bathroom vanities
            </a>
            . Ahead of demolition, find out{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/does-your-home-insurance-cover-a-renovation">
              whether your insurer needs to know about your renovation
            </a>
            . For accessibility upgrades, our article on{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/ontario-home-renovation-tax-credits-rebates-incentives">
              Ontario home renovation tax credits
            </a>{" "}
            outlines programs that may help. You can also{" "}
            <a className="underline" href="https://y2designandbuild.com/about">read about our team</a> and how we work.
          </p>
        </div>
      </section>

      {/* Start your Burlington bathroom plan */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Start Your Burlington Bathroom Plan</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Tell us which bathroom you want to change and what you’d like it to become. After a visit to measure and talk through ideas, you’ll receive a line-by-line fixed price, and you’re free to walk away. English callers can dial{" "}
            <a className="underline" href="tel:6475073639">(647) 507-3639</a>; Mandarin speakers can use{" "}
            <a className="underline" href="tel:6472942888">(647) 294-2888</a>. Send photos and ideas to{" "}
            <a className="underline" href="mailto:info@y2canada.com">info@y2canada.com</a>, or{" "}
            <a className="underline" href="https://y2designandbuild.com/contact">set up your Burlington visit online</a>.
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