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
  "3D bathroom visuals show your layout, tile, vanity, and lighting before a single wall is opened",
  "Fixed, itemized quote is final: the figure you sign is the figure you pay, and changes happen only with your written approval",
  "Our wholesale supplier network gives you trade-level access to tile, fixtures, and vanities",
];

const comparisonRows = [
  {
    task: "Design and layout",
    diy: "You sketch it, or pay a separate designer",
    y2: "Our designers produce 3D visuals you approve before work starts",
  },
  {
    task: "Materials",
    diy: "Retail pricing, separate deliveries, items that don’t fit",
    y2: "Ordered through our wholesale suppliers and checked against the drawings",
  },
  {
    task: "Permits and inspections",
    diy: "You research Toronto Building and ESA rules and book inspections",
    y2: "Your project manager files, books and attends them",
  },
  {
    task: "Trade scheduling",
    diy: "You line up plumbing, wiring, tile, and glass crews yourself",
    y2: "One schedule, sequenced by our team",
  },
  {
    task: "Hidden damage",
    diy: "Discovered mid-job, priced on the spot",
    y2: "Photographed, priced in writing and held until you approve it",
  },
  {
    task: "Final cost",
    diy: "Several invoices, often higher than the estimates",
    y2: "One fixed, itemized contract price",
  },
  {
    task: "Who answers your call",
    diy: "Whoever picks up",
    y2: "Your Y2 project manager, start to finish",
  },
];

const worthPayingFor = [
  "A sheet or liquid waterproofing membrane behind all shower tile, flood-tested before tiling begins. Grout and cement board alone are not waterproof.",
  "A pressure-balancing or thermostatic shower valve, so a flushed toilet downstairs never sends a scalding burst through the shower head.",
  "An exhaust fan ducted to the outside, sized for the room and ideally on a humidity sensor. Fans vented into the attic rank among the faults we find most often in older Etobicoke homes.",
  "Solid wood backing framed into the walls to anchor future grab bars, glass panels and towel bars, even if you don’t want grab bars yet.",
  "Proper slope to the drain on every shower floor, whether it’s a standard drain or a linear one.",
];

const placesToSave = [
  "Paint drywall instead of tiling it floor to ceiling; save the feature tile for the shower wall.",
  "Choose a standard vanity width. Stock sizes cost far less than custom millwork and are easier to replace later.",
  "Keep the toilet where it is. Moving the drain stack is one of the costliest changes in any bathroom.",
  "Pick classic chrome or matte black. Specialty finishes such as brushed gold or gunmetal often add cost to every fixture in the room.",
];

const localConditions = [
  {
    title: "Old supply lines in the Kingsway, Sunnylea and Islington Village",
    text: "Many homes here date from the 1920s to the 1950s, and some still carry galvanized steel water lines that rust from the inside and choke water pressure. When the walls are open, replacing them costs a fraction of what it would later.",
  },
  {
    title: "Moderately hard Toronto water",
    text: "Mineral deposits build up quickly on glass, chrome and grout. We often recommend coated shower glass, matte fixture finishes that hide spotting and lighter grout colors, and we can rough in space for a water softener if you’re considering one.",
  },
  {
    title: "Condo towers at Humber Bay Shores, Mimico and Islington City Centre",
    text: (
      <>
        Condo bathrooms come with building rules: board approval, elevator bookings, set working hours, and riser shut-offs scheduled through management. We prepare the documents your board asks for. See {" "}
        <a className="underline" href="https://y2designandbuild.com/condo-renovation">how we handle condo renovations</a> for more.
      </>
    ),
  },
  {
    title: "Narrow, steep stairs in storey-and-a-half houses",
    text: "Getting a 60-inch tub or a large vanity upstairs in Long Branch or New Toronto isn’t always possible. We measure the route before ordering, not on delivery day.",
  },
];

const priceBands = [
  { label: "Powder room:", text: "$2,500–$5,000, generally finished within a week" },
  { label: "Full bathroom remodel:", text: "$9,800–$18,000, typically 7–10 working days, or 10–12 days for a four-piece bathroom" },
  { label: "Luxury ensuite:", text: "$18,000–$35,000, usually two to three weeks, depending on custom glass, stone and heated floors" },
];

const dayByDay = [
  {
    title: "Days 1–2: Demolition and discovery",
    text: "We protect your floors and hallway, remove the old room down to the studs, and inspect framing, subfloor, pipes, and wiring.",
  },
  {
    title: "Days 3–4: Rough-ins",
    text: "Plumbing and electrical are installed or relocated, the fan duct is run outside, and blocking goes into the walls. Inspections are booked where a permit applies.",
  },
  {
    title: "Days 5–6: Board and waterproofing",
    text: "Backer board goes up, the membrane is applied and the shower is flood-tested.",
  },
  {
    title: "Days 7–9: Tile",
    text: "Floor and wall tile are set, then grouted and sealed.",
  },
  {
    title: "Days 10–12: Fixtures and finish",
    text: "We install the vanity, toilet, faucets, lighting, and accessories, then do a walkthrough with your project manager.",
  },
];

const neighborhoodGroups = [
  {
    region: "South Etobicoke",
    areas: "Humber Bay Shores, Mimico, New Toronto, Long Branch, Alderwood and Stonegate-Queensway.",
  },
  {
    region: "Central Etobicoke",
    areas: "The Kingsway, Sunnylea, Islington Village, Humber Valley Village, Princess-Rosethorn, Eatonville, Markland Wood and Richview.",
  },
  {
    region: "North Etobicoke",
    areas: "Eringate, Willowridge, Rexdale, Thistletown, Humberwood and the Elms.",
  },
];

export const faqs = [
  {
    question: "Will a bathroom renovation in Etobicoke need a City permit?",
    answer: 
   (
      <>
        Swapping fixtures where they already sit generally doesn’t call for a
        {" "}<a className="underline" rel="nofollow" target="blank" href="https://www.toronto.ca/services-payments/building-construction/building-permit/">
        building permit.    {" "}   
        </a>
        Adding a new bathroom, changing drain or vent lines, or altering structural walls typically does, and new electrical work needs an
        {" "}<a className="underline" rel="nofollow" target="blank" href="https://esasafe.com/">
        ESA 
        </a>{" "}
        notification. We confirm what your project requires and file everything on your behalf.
      </>
    ),
  },
  {
    question: "Can I keep using my home while you work?",
    answer: "Yes, as long as you have another bathroom available. We seal off the work area, protect floors and clean up daily. If this is your only bathroom, we’ll talk through scheduling options with you during planning.",
  },
  {
    question: "My house is from the 1940s. Should I expect surprises?",
    answer: "Older homes are more likely to have galvanized pipes, outdated wiring or soft subfloors. We check what we can at the first visit, and anything found during demolition is priced in writing before it’s addressed.",
  },
  {
    question: "How do I stop hard-water spots on my new shower glass?",
    answer: "Coated glass, a quick squeegee after each shower and a mild non-abrasive cleaner keep it clear. We can also recommend fixture finishes that hide spotting.",
  },
  {
    question: "Can I make my bathroom easier to use as I get older?",
    answer: (
      <>
        Yes. A curbless shower, a comfort-height toilet, wall blocking for grab bars and a handheld shower are simple to include now. Some accessibility work may qualify for support, outlined in our post on{" "}
        <a className="underline" href="https://y2designandbuild.com/blog/ontario-home-renovation-tax-credits-rebates-incentives">
          accessibility credits available to Ontario homeowners
        </a>
        .
      </>
    ),
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
          alt={`Bathroom Renovation project by Y2 Design & Build in Etobicoke`}
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
                      Etobicoke
                    </li>
                  </ol>
                </nav>


              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Licensed & Insured · Serving the GTA
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Bathroom Renovation in Etobicoke, ON
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                Y2 Design & Build carries your bathroom from first sketch to final caulk line with one team, one contract, and one fixed price. When you choose Y2 for a bathroom renovation in Etobicoke, the same people who design your room also source, permit, build, and stand behind it.
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
                 <li className="flex items-start gap-2 text-sm text-white/90 sm:text-base">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white" aria-hidden="true"
                    >
                      ✓
                    </span>
                    <p>Your Y2 project manager files the <a href="https://www.toronto.ca/services-payments/building-construction/building-permit/" rel="nofollow noopener" className="underline" target="blank">Toronto Building</a>, ESA, and <a href="http://www.tssa.org/" rel="nofollow noopener" className="underline" target="blank">TSSA</a> paperwork your project needs and directs each trade</p>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/90 sm:text-base">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white" aria-hidden="true"
                    >
                      ✓
                    </span>
                    <p>Licensed, <a href="https://www.wsib.ca/en" rel="nofollow noopener" className="underline" target="blank">WSIB</a>-covered crews do the plumbing, electrical, waterproofing, and tile under one schedule</p>
                  </li>
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <QuoteButton className="btn-primary cursor-pointer text-center">
                  Get My Free Etobicoke Quote
                </QuoteButton>
                <a href={tel} className="btn-outline-light text-center">
                  Call {site.phone}
                </a>
              </div>
              <p className="mt-5 text-sm text-white/80">
                <span className="font-bold text-accent">★★★★★ 5.0</span> rating from
                100+ Google reviews · WSIB-covered, licensed and insured · 500+ completed GTA projects · 14+ years in design-build · Free consultation at your home
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

      {/* 4. One company instead of six contractors */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                One Company Instead of Six Contractors
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Most bathroom projects stall in the gaps between trades: the plumber who can’t come until Thursday, the tiler waiting on a valve that wasn’t ordered, the electrician nobody booked. <a href="https://y2designandbuild.com/">Y2 Design & Build</a> closes those gaps. Here’s what changes when one design-build firm owns the whole job.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                That single point of accountability is the real value of a bathroom renovation in Etobicoke with Y2. You make the decisions that matter, and we carry everything else.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">
                  Book My Free Etobicoke Consultation
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
              <img src={images.bathroom2} alt="Bathroom renovation in Etobicoke" />
            </div>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-center text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">What has to happen</th>
                  <th className="px-4 py-3 font-semibold">Hiring trades yourself</th>
                  <th className="px-4 py-3 font-semibold">With Y2 Design & Build</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.task} className={i % 2 === 0 ? "bg-surface" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.task}</td>
                    <td className="px-4 py-3 text-muted">{row.diy}</td>
                    <td className="px-4 py-3 text-muted">{row.y2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Process */}
      <ThreeStepProcess />

      {/* 6. Where your money should go */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <img
                src={images.bathroom3}
                alt="Finished bathroom renovation in Etobicoke"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Where Your Money Should Go, and Where It Can Stay
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                The best bathrooms aren’t always the most expensive ones. They’re the ones where the budget went into the parts you can’t see. Before we price your bathroom renovation in Etobicoke, we walk you through these choices.
              </p>

              <h3 className="text-2xl font-bold text-brand-dark mt-6">
                Worth paying for, every time
              </h3>

              <ul className="mt-6 space-y-3">
                {worthPayingFor.map((item) => (
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

              <h3 className="text-2xl font-bold text-brand-dark mt-6">
                Smart places to save
              </h3>

              <ul className="mt-6 space-y-3">
                {placesToSave.map((item) => (
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

              <p className="mt-4 leading-relaxed text-muted">
                Want help choosing fixtures without overspending? Our guide on{" "}
                <a className="underline" href="https://y2designandbuild.com/blog/where-to-buy-bathroom-vanity-gta">
                  where to shop for a vanity around Toronto
                </a>{" "}
                compares the main options.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* 7. What we plan around in Etobicoke homes */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                What We Plan Around in Etobicoke Homes
              </h2>
              <p className="mt-2 leading-relaxed text-muted">
                Etobicoke stretches from the lakeshore condos of Humber Bay to the 1960s split-levels of Markland Wood and the postwar bungalows of Rexdale, so no single plan suits every home. We account for these local conditions from the first visit.
              </p>

              <ul className="mt-6 space-y-4">
                {localConditions.map((item) => (
                  <li key={item.title} className="flex items-start gap-2 text-sm sm:text-base">
                    <span className="mt-0.5 text-accent" aria-hidden="true">✓</span>
                    <span>
                      <b className="text-brand-dark">{item.title}</b>
                      <span className="mt-1 block text-muted">{item.text}</span>
                    </span>
                  </li>
                ))}
              </ul>

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
                alt="Bathroom project in Etobicoke"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Cost and timeline */}
      <section className="bg-white section-pad">
        <div className="container-page max-w-5xl">
          <h2 className="text-2xl font-bold text-brand-dark">
            Bathroom Renovation in Etobicoke: Cost and Timeline
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Y2’s pricing for a bathroom renovation in Etobicoke falls into three bands:
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
          <p className="mt-6 leading-relaxed text-muted">
            Your exact price depends on the size of the room, whether plumbing moves and the finishes you choose, and it’s all set out line by line in your quote before work starts. For a fuller explanation of what drives these figures, read our breakdown of{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/bathroom-renovation-cost-gta">
              bathroom renovation prices across the GTA
            </a>{" "}
            and our article on{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/how-long-does-bathroom-renovation-take-timeline">
              realistic bathroom renovation timelines
            </a>
            .
          </p>
        </div>
      </section>

      {/* 9. Four-piece bathroom, day by day */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="section-heading">A Four-Piece Bathroom, Day by Day</h2>
          <p className="section-sub">Here’s how a typical four-piece bathroom renovation in Etobicoke unfolds once materials are on site:</p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-3">
            {dayByDay.map((step) => (
              <div key={step.title} className="flex items-start gap-3 rounded-xl bg-white px-5 py-4">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">✓</span>
                <p className="text-sm leading-relaxed text-muted">
                  <b className="text-brand-dark">{step.title}:</b> {step.text}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-relaxed text-muted">
            Custom glass is measured once tile is finished and can add a few days. Anything we find behind the old walls is photographed, costed in writing, and left untouched until you approve it.
          </p>
        </div>
      </section>

      {/* 10. Social proof */}
      <ReviewStrip />

      {/* 11. Neighborhoods */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-brand-dark">
            Etobicoke Neighborhoods We Serve
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
            Wherever you are between the lake and Steeles, we bring the same team and the same fixed-price approach to every bathroom renovation in Etobicoke.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Our bathroom renovation teams also work next door in{" "}
            <Link className="underline" href="/bathroom-renovation/mississauga">Mississauga</Link> and across{" "}
            <Link className="underline" href="/bathroom-renovation/toronto">Toronto</Link>, as well as in{" "}
            <Link className="underline" href="/bathroom-renovation/vaughan">Vaughan</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/oakville">Oakville</Link> and{" "}
            <Link className="underline" href="/bathroom-renovation/markham">Markham</Link>. Check{" "}
            <Link className="underline" href="/service-areas">other areas Y2 serves</Link>, or explore our{" "}
            <a className="underline" href="https://y2designandbuild.com/bathroom-renovation">bathroom renovation services across the GTA</a>.
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
          <h2 className="section-heading text-3xl font-bold text-brand-dark">Etobicoke Bathroom FAQs</h2>
          <p className="section-sub mt-2 text-muted">Common questions from Etobicoke homeowners about bathroom remodeling projects.</p>

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

      {/* Before you book */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Before You Book</h2>
          <p className="mt-4 leading-relaxed text-muted">
            A little preparation goes a long way. Find out{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/does-your-home-insurance-cover-a-renovation">
              how renovations affect your home insurance
            </a>{" "}
            before demolition day. If your bathroom renovation in Etobicoke is part of a bigger refresh,{" "}
            <a className="underline" href="https://y2designandbuild.com/flooring">new flooring</a> can carry the same look down the hall. Curious who will be coming to your door?{" "}
            <a className="underline" href="https://y2designandbuild.com/about">Meet the people behind Y2</a>.
          </p>
        </div>
      </section>

      {/* Let's plan your Etobicoke bathroom */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Let’s Plan Your Etobicoke Bathroom</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Send us a few photos of the room and a short list of what bothers you about it. We’ll visit, measure, talk through your ideas, and return a fixed, itemized quote, with no obligation to go ahead. Reach us by phone at{" "}
            <a className="underline" href="tel:6475073639">(647) 507-3639</a>, or dial{" "}
            <a className="underline" href="tel:6472942888">(647) 294-2888</a> for a Mandarin-speaking team member. Messages sent to{" "}
            <a className="underline" href="mailto:info@y2canada.com">info@y2canada.com</a> get a reply within one business day, and you can{" "}
            <a className="underline" href="https://y2designandbuild.com/contact">pick a consultation time online</a>.
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