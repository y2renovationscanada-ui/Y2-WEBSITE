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
  "Head office and showroom in Markham",
  "3D design you approve first",
  "Fixed, itemized quotes",
  "One dedicated project manager",
  "Permits and inspections handled",
  "English and Mandarin teams",
];

const localAdvantages = [
  {
    label: "You choose finishes in person:",
    text: "Tile, vanities, faucets, and shower systems are easier to judge in your hand than on a screen, and you can bring a sample home to see it in your own light.",
  },
  {
    label: "Site visits fit your schedule:",
    text: "A measurement, a design check, or a quick look at a question takes minutes for us to reach, not half a day.",
  },
  {
    label: "Questions get answered by people you’ve met:",
    text: "The designer and project manager on your job work out of the same Markham office you visited.",
  },
  {
    label: "We know the City’s process:",
    text: 
    (
      <>
      Markham’s building department, its inspectors, and its {" "}
      <a href="https://www.markham.ca/economic-development-business/building-permits/building-permit-process"
      rel="nofollow noopener noreferrer"
      className="underline"
      target="blank"
      >
        permit
      </a>
      {" "}
      requirements are part of our routine.
      </>
    )
  },
];

const layerRows = [
  {
    layer: "Framing and backing",
    installs: "Straightened studs, plus wood backing for grab bars, glass and accessories",
    why: "Flat walls let large tiles sit level; backing holds fixtures securely for decades",
    shortcut: "Tile set over bowed studs, or grab bars anchored only in drywall",
  },
  {
    layer: "Supply and drain lines",
    installs: "New PEX or copper supply lines, properly sloped and vented drains",
    why: "Prevents hidden leaks, slow drains and sewer odors",
    shortcut: "Reusing corroded lines because “they still work”",
  },
  {
    layer: "Shower valve",
    installs: "Pressure-balancing or thermostatic valve",
    why: "Keeps water temperature steady and prevents scalding",
    shortcut: "Reinstalling an old valve behind new tile",
  },
  {
    layer: "Ventilation",
    installs: "Fan sized to the room and ducted to the exterior",
    why: "Removes moisture that causes mold and peeling paint",
    shortcut: "A fan vented into the attic, or no fan at all",
  },
  {
    layer: "Electrical",
    installs: (
      <>
        <a href="https://safeelectricity.org/ground-fault-circuit-interrupters-gfcis/" rel="nofollow noopener noreferrer" className="underline" target="_blank">
          GFCI
        </a>
        -protected outlets, dedicated circuits for heated floors or bidet seats
      </>
    ),
    why: "Safety in a wet room and enough power for modern fixtures",
    shortcut: "Extension of an overloaded existing circuit",
  },
  {
    layer: "Waterproofing",
    installs: "Continuous membrane on shower walls, floor and curb, flood-tested",
    why: "Grout and tile are not waterproof on their own",
    shortcut: "Tile set straight onto drywall or untreated cement board",
  },
  {
    layer: "Tile setting",
    installs: "Correct thin-set, full mortar coverage and leveling for large tiles",
    why: "Stops hollow spots, cracking and uneven edges",
    shortcut: "Spot-bonding tiles with dabs of adhesive",
  },
  {
    layer: (
      <>
        <a href="https://en.wikipedia.org/wiki/Grout" rel="nofollow noopener noreferrer" className="underline" target="_blank">
          Grout
        </a>{" "}
        and sealant
      </>
    ),
    key: "grout",
    installs: "Grout suited to the space, with flexible silicone at corners and changes of plane",
    why: "Corners move slightly; silicone flexes where grout would crack",
    shortcut: "Grout in inside corners that cracks within months",
  },
];

const decisions = [
  {
    title: "Tub, shower or both",
    text: "If there’s another tub in the house, many families turn the main or primary bathroom into a large walk-in shower. If it’s the home’s sole bathroom and there are young kids, keeping a tub is usually the better call, both for daily use and for resale.",
  },
  {
    title: "Toilet and bidet options",
    text: (
      <>
        Bidet seats and integrated smart toilets are among the most requested features in Markham remodels. A bidet seat needs a
        {" "}
        <a href="https://www.esfi.org/ground-fault-circuit-interrupters-gfci/" rel="nofollow noopener noreferrer" className="underline" target="_blank">
          GFCI 
        </a>
        {" "}
        outlet beside the toilet, which is simple to add during a remodel and awkward to add afterward. A wall-hung toilet frees up floor space and makes cleaning easier, but you need to plan an in-wall carrier from the start.
      </>
    ),
  },
  {
    title: "Vanity style",
    text: "Floating vanities make small rooms feel bigger and simplify floor cleaning. Freestanding furniture-style vanities offer more storage. Double sinks suit shared ensuites, but in a narrow room, one sink with more counter space is often the better choice."
  },
  {
    title: "Tile size and finish",
    text: (
      <>
        Large-format
        {" "}
        <a href="https://home.howstuffworks.com/home-decor/decorating-styles-techniques/porcelain.htm" rel="nofollow noopener noreferrer" className="underline" target="_blank">
          porcelain  
        </a>
        {" "}
          means fewer grout lines and a cleaner look, though it requires flatter walls and floors. Matte and textured finishes are safer underfoot in wet areas than polished tile.      </>
    ),
  
  },
  {
    title: "Lighting in layers",
    text: "Good bathrooms combine overhead light, task lighting at the mirror, and a soft low-level option for nighttime. Lighting on the face, rather than only from above, makes grooming much easier, and it’s one of the cheapest upgrades in any bathroom remodel in Markham.",
  },
  {
    title: "Storage you won’t notice",
    text: "Recessed medicine cabinets, shower niches aligned with the tile layout, and drawers in place of open vanity doors keep counters clear without crowding the room.",
  },
];

const priceBands = [
  { label: "Powder rooms:", text: "$2,500–$5,000, usually completed within a week" },
  { label: "Full bathrooms:", text: "$9,800–$18,000, built in roughly a week and a half on site; a four-piece with a separate tub and shower can stretch to 12 working days" },
  { label: "Luxury ensuites:", text: "$18,000–$35,000, often two to three weeks of construction" },
];

const steps = [
  {
    label: "Consultation at home:",
    text: "We measure, assess the plumbing and ventilation, and find out how many people share the room each morning.",
  },
  {
    label: "Showroom session:",
    text: "You compare tile, vanities, and fixtures at our 14th Avenue showroom with your designer.",
  },
  {
    label: "3D design:",
    text: "You review the layout and finishes and refine them until they’re right.",
  },
  {
    label: "Fixed, itemized quote:",
    text: "Every material and labor cost is listed for your approval.",
  },
  {
    label: "Orders and approvals:",
    text: (
      <>
        We cross-check materials against the drawings and submit whatever the{" "}
        <a href="https://www.markham.ca/economic-development-business/building-permits" rel="nofollow noopener noreferrer" className="underline" target="_blank">
          City of Markham
        </a>{" "}
        and the{" "}
        <a href="https://esasafe.com/" rel="nofollow noopener noreferrer" className="underline" target="_blank">
          ESA
        </a>{" "}
        require.
      </>
    ),
  },
  {
    label: "Construction:",
    text: "Demolition and rough-ins come first, then the membrane and its flood test, then tile, and finally fixtures, glass, and lights.",
  },
  {
    label: "Walkthrough and handover:",
    text: "Your project manager reviews every detail with you before we consider the job finished.",
  },
];

const neighborhoods = [
  "Victoria Square",
  "Greensborough",
  "Wismer",
  "Cornell",
  "Berczy Village",
  "Cathedraltown",
  "Unionville",
  "Markham Village",
  "Box Grove",
  "Angus Glen",
  "Cachet",
  "Buttonville",
  "Milliken Mills",
  "Raymerville",
  "Markville",
  "Thornhill",
];

export const faqs = [
  {
    question: "Can I visit your showroom before booking a bathroom remodel in Markham?",
    answer: "Yes. You’ll find us at 3400 14th Avenue, Unit 16. Phone before you come, and we’ll make sure a designer is available to walk you through tile, vanity, and fixture options.",
  },
  {
    question: "Should I add an outlet for a bidet seat?",
    answer: "If there’s any chance you’ll want one, yes. Adding a GFCI outlet beside the toilet during the remodel is simple and inexpensive compared to opening a finished wall later.",
  },
  {
    question: "Is epoxy grout worth the extra cost?",
    answer: "In showers and on floors that see heavy use, it often is. Epoxy grout resists stains and doesn’t need sealing, though it costs more and takes more skill to install. We’ll recommend it where it adds real value.",
  },
  {
    question: "Does a bathroom remodel need a City of Markham permit?",
    answer: "Replacing fixtures in place generally doesn’t. Moving drains, adding a bathroom, or altering structural walls usually does, and new electrical work requires an ESA notification. We confirm the requirements and file everything for you.",
  },
  {
    question: "Can we discuss the project in Mandarin?",
    answer: "Yes, gladly. Phone (647) 294-2888, and a Mandarin-speaking Y2 colleague will take you through design ideas, permits, and the quote.",
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
          alt={`Bathroom remodel project by Y2 Design & Build in Markham`}
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
                      Markham
                    </li>
                  </ol>
                </nav>


              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Licensed & Insured · Serving the GTA
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Bathroom Remodel in Markham, ON
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                Markham is where <a href="/" className="underline">Y2 Design & Build</a> is based, where our showroom sits, and where a large share of our projects are built. A bathroom remodel in Markham with Y2 is designed by our in-house team, priced line by line before you commit, and built under one project manager who lives this city’s permit process every week.
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
                  Get My Free Markham Quote
                </QuoteButton>
                <a href={tel} className="btn-outline-light text-center">
                  Call {site.phone}
                </a>
              </div>
              <p className="mt-5 text-sm text-white/80">
                <span className="font-bold text-accent">★★★★★ 5.0</span> from 100+ Google reviews · 500+ completed projects · 14+ years of GTA renovations · WSIB-covered, licensed, insured
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

      {/* 4. Your remodeler is down the street */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Your Remodeler Is Down the Street, Not Across the GTA
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Our showroom, at 3400 14th Avenue, Unit 16, puts us minutes from Unionville, Cornell, Berczy Village, and nearly every other Markham neighborhood. That proximity changes the experience in practical ways:
              </p>
              <ul className="mt-6 space-y-3">
                {localAdvantages.map((item) => (
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
                That local footing is why homeowners trust us with the bathroom remodel in Markham they’ve been putting off.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">
                  Book My Free Markham Consultation
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
        </div>
      </section>

      {/* 5. Process */}
      <ThreeStepProcess />

      {/* 6. What goes into a bathroom that lasts */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            What Goes Into a Bathroom That Lasts 20 Years
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            A bathroom fails from the inside out. Cracked grout, mildew, and loose tile are usually symptoms of something done poorly behind the surface. Every bathroom remodel in Markham we build follows the same layered standard, and this table shows what that means and what to watch for in any quote you compare.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-center text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">Layer</th>
                  <th className="px-4 py-3 font-semibold">What Y2 installs</th>
                  <th className="px-4 py-3 font-semibold">Why it matters</th>
                  <th className="px-4 py-3 font-semibold">Shortcut to watch for</th>
                </tr>
              </thead>
              <tbody>
                {layerRows.map((row, i) => (
                  <tr key={typeof row.layer === "string" ? row.layer : row.key} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.layer}</td>
                    <td className="px-4 py-3 text-muted">{row.installs}</td>
                    <td className="px-4 py-3 text-muted">{row.why}</td>
                    <td className="px-4 py-3 text-muted">{row.shortcut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-muted">
            You’ll see these layers itemized in your Y2 quote, so you know exactly what you’re paying for and what’s going behind your walls.
          </p>
        </div>
      </section>

      {/* 7. Decisions before demolition day */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <img
                src={images.bathroom3}
                alt="Completed bathroom remodel in Markham"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Decisions to Make Before Demolition Day
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                The choices below have the biggest impact on how your bathroom works. We walk through each one during design, and our 3D visuals let you compare options before anything is ordered.
              </p>

              <ul className="mt-6 space-y-4">
                {decisions.map((item) => (
                  <li key={item.title} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>
                      <b className="text-brand-dark">{item.title}</b>
                      <span className="mt-1 block">{item.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Cost and timeline */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Bathroom Remodel in Markham: Cost and Timeline
              </h2>
              <p className="mt-2 leading-relaxed text-muted">
                Here’s where Y2’s projects typically land:
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
                Layout changes, tile quantity, custom glass, heated floors, and anything discovered behind the walls are the biggest variables. We quote every bathroom remodel in Markham in writing before work starts, and we cost any changes for your approval first. For a Markham-specific breakdown, read our{" "}
                <a className="underline" href="https://y2designandbuild.com/blog/bathroom-renovation-cost-markham">
                  Markham bathroom renovation cost guide
                </a>
                , and see a{" "}
                <a className="underline" href="https://y2designandbuild.com/blog/how-long-does-bathroom-renovation-take-timeline">
                  realistic schedule for each phase of a bathroom project
                </a>
                .
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
                alt="Bathroom project in Markham"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. From showroom visit to finished room */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="section-heading">From Showroom Visit to Finished Room</h2>
          <div className="mx-auto mt-12 grid max-w-4xl gap-3">
            {steps.map((step) => (
              <div key={step.label} className="flex items-start gap-3 rounded-xl bg-surface px-5 py-4">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">✓</span>
                <p className="text-sm leading-relaxed text-muted">
                  <b className="text-brand-dark">{step.label}</b> {step.text}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-relaxed text-muted">
            Anything concealed that we uncover during demolition is photographed and priced in writing, and it only proceeds with your approval. Curious how the household routine changes while crews are in? Our{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/what-to-expect-during-home-renovation-markham">
              guide to living through a Markham renovation
            </a>{" "}
            covers it.
          </p>
        </div>
      </section>

      {/* 10. Social proof */}
      <ReviewStrip />

      {/* 11. Neighborhoods */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-brand-dark">
            Markham Neighborhoods We Serve
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Y2 bathroom crews work in every part of the city:
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
            Wherever you live in the city, your bathroom remodel in Markham is handled by our own crews under a fixed contract price. Planning more than one room? See our Markham pages for{" "}
            <Link className="underline" href="/kitchen-renovation/markham">kitchen renovations</Link>,{" "}
            <Link className="underline" href="/basement-renovation/markham">basement renovations</Link> and{" "}
            <Link className="underline" href="/home-renovation/markham">whole-home renovations</Link>. Our bathroom teams also serve nearby{" "}
            <Link className="underline" href="/bathroom-renovation/richmond-hill">Richmond Hill</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/vaughan">Vaughan</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/scarborough">Scarborough</Link> and{" "}
            <Link className="underline" href="/bathroom-renovation/pickering">Pickering</Link>. Browse our{" "}
            <a className="underline" href="https://y2designandbuild.com/bathroom-renovation">GTA bathroom renovation services</a> or the{" "}
            <Link className="underline" href="/service-areas">full service area</Link>.
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
          <h2 className="section-heading text-3xl font-bold text-brand-dark">FAQs</h2>
          <p className="section-sub mt-2 text-muted">Common questions from Markham homeowners about bathroom remodeling projects.</p>

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

      {/* Worth reading before you start */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Worth Reading Before You Start</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Shopping for fixtures? Read our{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/where-to-buy-bathroom-vanity-gta">
              comparison of vanity retailers and suppliers
            </a>{" "}
            first. Before demolition, check{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/does-your-home-insurance-cover-a-renovation">
              how your insurance treats renovation work
            </a>
            , and if you’re making the bathroom safer for an older relative, read about{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/ontario-home-renovation-tax-credits-rebates-incentives">
              Ontario renovation tax credits and incentives
            </a>
            . You can also{" "}
            <a className="underline" href="https://y2designandbuild.com/about">learn more about Y2 and our team</a>.
          </p>
        </div>
      </section>

      {/* Come see us in Markham */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Come See Us in Markham</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Bring photos of your current bathroom, or a list of everything that bothers you about it. After a home visit, you’ll get a line-by-line fixed quote that carries no obligation. Stop by 3400 14th Avenue, Unit 16. Ring{" "}
            <a className="underline" href="tel:6475073639">(647) 507-3639</a> for English; Mandarin speakers can reach us at{" "}
            <a className="underline" href="tel:6472942888">(647) 294-2888</a>. Our inbox,{" "}
            <a className="underline" href="mailto:info@y2canada.com">info@y2canada.com</a>, is always open, and you can also{" "}
            <a className="underline" href="https://y2designandbuild.com/contact">reserve a consultation time online</a>.
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