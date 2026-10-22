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
    "https://y2designandbuild.com/images/residential.webp",
    "https://y2designandbuild.com/images/hero-2.webp",
    "https://y2designandbuild.com/images/hero-3.webp",
    "https://y2designandbuild.com/images/basement-gallery-2.webp",
    "https://y2designandbuild.com/images/bath-gallery-3.webp",
    "https://y2designandbuild.com/images/kitchen-gall-5.webp",
    "https://y2designandbuild.com/images/bath-gallery-4.webp",
    "https://y2designandbuild.com/images/basement-gallery-9.webp",
    "https://y2designandbuild.com/images/kitchen-gall-9.webp",
    "https://y2designandbuild.com/images/bath-gallery-11.webp",
    "https://y2designandbuild.com/images/kitchen-gall-2.webp",
    "https://y2designandbuild.com/images/basement-gallery-4.webp",
  ],
};

const heroBullets = [
  "A local team that can be at your door quickly for site visits, selections, and walkthroughs",
  "Design, pricing, and construction handled in-house by one accountable company",
  "A written fixed-price quote; if you request a change, you see its cost and sign off first",
  "Responses to new inquiries by the next business day, with English and Mandarin phone lines",
];


const eras = [
  {
    label: "Heritage homes in Markham Village, Unionville, Thornhill and Buttonville:",
    text: "Some of Markham’s oldest houses sit within heritage conservation districts. Interior renovations are generally unaffected, but exterior changes, additions, new windows and some demolition can require heritage approval from the City before a building permit is issued. We plan these requirements into the schedule from the start.",
  },
  {
    label: "1970s and 1980s homes in Markham Village, Milliken Mills, Unionville and the Thornhill area:",
    text: "These houses often have closed-off kitchens, formal living and dining rooms that see little use, original bathrooms and, in some cases, 100-amp electrical service. Popular projects include opening the main floor, relocating the kitchen and upgrading the electrical panel to support today’s appliances and lighting.",
  },
  {
    label: "1990s and 2000s homes in Berczy Village, Angus Glen, Cachet, Greensborough and Wismer:",
    text: "Structure and systems are usually in good shape, so renovations here focus on modernizing finishes: replacing oak or thermofoil kitchens, reworking oversized ensuites with corner tubs, swapping carpet for hardwood or engineered flooring and updating stair railings.",
  },
  {
    label: "Newer homes in Cornell and Cathedraltown:",
    text: "Many of these homes are relatively recent builds, so projects tend to center on finishing the basement, upgrading builder-grade kitchens and bathrooms, and, where zoning allows, adding a secondary suite.",
  },
];

const costRows = [
  {
    scope: "Multi-room renovation",
    investment: "From about $50,000",
    includes: "Kitchen plus one or two bathrooms, new flooring on the main level",
  },
  {
    scope: "Main-floor transformation",
    investment: "Toward the upper end of $50,000 – $150,000+",
    includes: "Open-concept layout, structural beam, new kitchen, flooring and lighting",
  },
  {
    scope: "Whole-home gut renovation",
    investment: "About $200 – $250 per sq ft",
    includes: "New layouts, electrical, plumbing and HVAC updates, finishes throughout",
  },
  {
    scope: "Additions, heritage work or secondary suites",
    investment: "Quoted individually",
    includes: "Engineering, heritage approvals, separate permits",
  },
];

export const faqs = [
  {
    question: "How much does a home renovation in Markham cost?",
    answer: "Multi-room projects typically start around $50,000, while a full gut renovation of an entire house generally costs about $200 to $250 per square foot. Your fixed-price quote will reflect your exact scope, finishes, and the condition of the home.",
  },
  {
    question: "Can I remove a load-bearing wall to open up my main floor?",
    answer: "Yes, in most cases. The load is transferred to an engineered beam and posts designed by a structural professional, and a building permit is required. We manage the engineering, permit, and construction as part of your project.",
  },
  {
    question: "Does my home’s heritage status affect a renovation?",
    answer: "If your home is in a heritage conservation district, such as parts of Unionville or Markham Village, exterior changes and additions may need heritage approval. Interior work is usually unaffected. We confirm requirements before finalizing the design.",
  },
  {
    question: "Should I test for asbestos before renovating?",
    answer: 
    <>
        If your home was built before the 1990s, testing suspect materials before demolition is strongly recommended. Any 
        {" "}
        <a href="https://www.who.int/news-room/fact-sheets/detail/asbestos" rel="nofollow" className="underline">asbestos</a>
        -containing material must be handled according to Ontario regulations.
        {" "}
    </>
  },
  {
    question: "Can I live in my home during a whole-house renovation?",
    answer: "It depends on the scope. Many clients stay during phased work, while those renovating the kitchen and all bathrooms at once often move out for part of the project. We’ll plan the phasing with you before work begins.",
  },
  {
    question: "Is Mandarin-language service available?",
    answer: "It is. Phone (647) 294-2888 to work with Mandarin-speaking staff at every step, from first sketches to final handover.",
  },
];

export default function HomeRenovationMarkhamClient() {
  const tel = `tel:${site.phone.replace(/\D/g, "")}`;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <Header />

      {/* 1. Value-driven hero */}
      <section className="relative min-h-[480px] overflow-hidden bg-brand-dark text-white">
        <Image
          src="https://y2designandbuild.com/images/home-renovation-ai.webp"
          alt="Home renovation project by Y2 Design & Build in Markham"
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
                      Markham
                    </li>
                  </ol>
                </nav>
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Licensed & Insured · Serving the GTA
              </p>
              <h1 className="text-lg font-bold leading-tight sm:text-4xl lg:text-4xl">
                Home Renovation in Markham, ON
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                Our showroom and team are based at 3400 14th Ave, and we’ve spent more than 14 years helping our neighbors plan and complete every kind of home renovation in Markham, from opening up a dated main floor to rebuilding an entire house room by room.
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

    
      <TrustBadges />

      {/* 3. Local team */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">Your Local Team for Home Renovation in Markham</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Many contractors serve Markham. We live and work here. More of our projects take place in Markham than almost anywhere else, including several of our largest, and that local track record matters when you’re trusting a company with your entire house.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                A whole-home project involves dozens of decisions and a dozen or more trades, and it can run for several months. Our role is to make it manageable. Your project manager keeps the schedule locked, coordinates electricians, plumbers, HVAC technicians, framers, drywallers, tilers, and finishers, and handles permits and inspections with the{" "}
                <a href="https://www.markham.ca/economic-development-business/building-permits" target="_blank" rel="nofollow noopener noreferrer" className="underline">
                  City of Markham
                </a>
                .
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Because our showroom is close by, you can compare cabinetry, tile, flooring, and fixtures in person, and we can respond quickly when a question comes up on site. That combination of local presence and in-house management is what makes a home renovation in Markham with <a href="https://y2designandbuild.com/" className="underline">Y2 Design & Build</a> predictable rather than stressful.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">Book My Free Consultation</QuoteButton>
                <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
                  or call {site.phone}
                </a>
              </div>
            </div>

            <div>
              <img src="https://y2designandbuild.com/images/hero-3.webp" alt="Home renovation in Markham" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. What a renovation can include */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <img src={homeImages.includes} alt="Completed home renovation in Markham" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">What a Y2 Home Renovation in Markham Can Include</h2>
              <p className="mt-4 leading-relaxed text-muted">
                No two projects look alike. Some clients approach their home renovation in Markham one floor at a time. Others take the whole house back to the studs. Our team regularly handles:
              </p>
              <ul className="mt-6 space-y-3">
                
                  <li className="flex items-start gap-3 text-md leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                   <span>Whole-home renovations that update layouts, systems, and finishes throughout the house</span>
                  </li>
                   <li className="flex items-start gap-3 text-md leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                   <span>Open-concept main floors, including removal of load-bearing walls with engineered beams</span>
                  </li>
                   <li className="flex items-start gap-3 text-md leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                   <span><a href="https://y2designandbuild.com/kitchen-renovation/markham" className="underline">Kitchen renovations</a> with new cabinetry, counters, islands, and appliance layouts</span>
                  </li>
                   <li className="flex items-start gap-3 text-md leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                   <span><a href="https://y2designandbuild.com/bathroom-renovation/markham" className="underline">Bathroom</a> and ensuite remodels, from powder rooms to spa-style primary baths</span>
                  </li>
                   <li className="flex items-start gap-3 text-md leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                   <span><a href="https://y2designandbuild.com/basement-renovation/markham" className="underline">Basement</a> finishing and legal secondary suites</span>
                  </li>
                   <li className="flex items-start gap-3 text-md leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                   <span>Home additions and second-story expansions for growing families</span>
                  </li>
                   <li className="flex items-start gap-3 text-md leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                   <span>New flooring, stairs and railings carried consistently through every level</span>
                  </li>
                   <li className="flex items-start gap-3 text-md leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                   <span>Electrical, plumbing and HVAC upgrades to support modern layouts and appliances</span>
                  </li>
                   <li className="flex items-start gap-3 text-md leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                   <span>Garden suites and ADUs where your lot and zoning allow</span>
                  </li>
               
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Homes by era */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Markham Homes by Era: What Each Renovation Usually Involves
          </h2>
          <p className="mx-auto mt-4 max-w-5xl text-center leading-relaxed text-muted">
            Markham’s neighborhoods grew in distinct waves, and the age of your home shapes what a renovation will involve.
          </p>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {eras.map((item) => (
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
        </div>
      </section>

      {/* 6. Opening up the main floor */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Opening Up a Markham Main Floor</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Turning a series of separate rooms into one open kitchen, dining, and living space is one of the most requested parts of a home renovation in Markham. It’s also one of the most technical.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            If a wall carries load from the floor or roof above, it can still be removed, but the load must be transferred to a new beam, typically engineered lumber or steel, supported by posts that carry the weight down to the foundation. This work requires structural design and a building permit. <a href="https://publications.gc.ca/collections/collection_2017/schl-cmhc/NH15-61-1996-eng.pdf" rel="nofollow" className="underline">Ductwork</a>, plumbing stacks, and wiring inside the wall may also need rerouting. Planning these details early prevents the most common surprise in open-concept projects: discovering a drain stack or main duct exactly where the island was meant to go.
          </p>
        </div>
      </section>

      {/* 7. Safety and systems */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Before the Walls Come Down: Safety and Systems</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Older homes can contain materials that need careful handling. Houses built before the 1990s may have <a href="https://en.wikipedia.org/wiki/Asbestos" rel="nofollow" className="underline">asbestos </a> in vermiculite insulation, textured ceilings, plaster, flooring tiles, or duct wrap. Testing suspect materials before demolition protects your family and our crews, and any removal must follow Ontario’s <a href="http://www.ontario.ca/document/guide-regulation-respecting-asbestos-construction-projects-and-buildings-and-repair" rel="nofollow" className="underline">regulations for asbestos</a> on construction projects.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            A whole-home renovation is also the right time to evaluate the house’s systems. Adding a larger kitchen, more lighting, heated floors, and an EV charger can exceed the capacity of an older electrical service. Opening walls and finishing a basement can change how the furnace and air conditioner perform. We review electrical capacity, ductwork, and plumbing during design so the finished house works as well as it looks.
          </p>
        </div>
      </section>

      {/* 8. Cost */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Home Renovation Cost in Markham</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Every renovation is priced individually, but recent Y2 projects provide a dependable guide. Multi-room projects typically start around $50,000 and can exceed $150,000 depending on scope and finishes, while full gut renovations of an entire home generally cost about $200 to $250 per square foot. For room-level pricing, see our{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/bathroom-renovation-cost-markham">
              Markham bathroom renovation cost breakdown
            </Link>
            .
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-center text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">Project scope</th>
                  <th className="px-4 py-3 font-semibold">Typical investment</th>
                  <th className="px-4 py-3 font-semibold">Common inclusions in Markham homes</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, i) => (
                  <tr key={row.scope} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.scope}</td>
                    <td className="px-4 py-3 text-muted">{row.investment}</td>
                    <td className="px-4 py-3 text-muted">{row.includes}</td>
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

      {/* 9. Timeline */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">How Long a Home Renovation in Markham Takes</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Whole-home renovations typically take 8 to 14 weeks of construction, depending on scope, permit timing and the amount of structural work. Design, selections and permits come first, and projects in heritage districts or with additions can take longer to approve. Read our{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/what-to-expect-during-home-renovation-markham">
              phase-by-phase look at renovating in Markham
            </Link>{" "}
            for the details, and if you’re deciding whether to stay in the house, this article on{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/where-do-you-live-during-a-full-home-renovation">
              where families live during a full-home project
            </Link>{" "}
            lays out the options.
          </p>
        </div>
      </section>

      {/* 10. Social proof */}
      <ReviewStrip />

      {/* 11. Neighborhoods */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Neighborhoods We Serve in Markham</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            We complete home renovation projects in Markham across the city, including Unionville, Markham Village, Cornell, Cathedraltown, Berczy Village, Milliken Mills, Angus Glen, Cachet, Greensborough, Wismer, Box Grove, Buttonville, Thornhill, and Downtown Markham.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-muted">
            Our Markham pages for specific rooms go into more detail: explore{" "}
            <Link className="underline" href="/kitchen-renovation/markham">kitchen renovation in Markham</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/markham">bathroom renovation in Markham</Link>, and{" "}
            <Link className="underline" href="/basement-renovation/markham">basement renovation in Markham</Link>. Homeowners elsewhere in the GTA can visit our home renovation pages for{" "}
            <Link className="underline" href="/home-renovation/scarborough">Scarborough</Link>,{" "}
            <Link className="underline" href="/home-renovation/toronto">Toronto</Link>,{" "}
            <Link className="underline" href="/home-renovation/pickering">Pickering</Link>,{" "}
            <Link className="underline" href="/home-renovation/oakville">Oakville</Link> and{" "}
            <Link className="underline" href="/home-renovation/ajax">Ajax</Link>, or check the{" "}
            <Link className="underline" href="/service-areas">full list of communities we cover</Link>.
          </p>
        </div>
      </section>

      {/* 12. More ways we can help */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">More Ways We Can Help</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Need more space rather than a different space? Explore our{" "}
            <a className="underline" href="https://y2designandbuild.com/home-extensions">home additions</a> and{" "}
            <a className="underline" href="https://y2designandbuild.com/adu-construction">ADU and garden suite construction</a> services, or see our{" "}
            <a className="underline" href="https://y2designandbuild.com/home-renovation">whole-home renovation overview</a>. We also complete{" "}
            <a className="underline" href="https://y2designandbuild.com/condo-renovation">condo renovations</a> and{" "}
            <a className="underline" href="https://y2designandbuild.com/flooring">flooring installations</a> across the GTA. Some upgrades, including multigenerational suites and accessibility features, may qualify for{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/ontario-home-renovation-tax-credits-rebates-incentives">
              Ontario and federal renovation tax credits
            </a>
            . Before you start, check whether{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/does-your-home-insurance-cover-a-renovation">
              your insurance policy covers major renovation work
            </Link>
            , and feel free to get to know{" "}
            <a className="underline" href="https://y2designandbuild.com/about">the people at Y2</a>.
          </p>
        </div>
      </section>

      {/* 13. Gallery */}
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

      {/* 14. FAQ */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl">
          <h2 className="section-heading text-3xl font-bold text-brand-dark">Home Renovation FAQs: Markham, ON</h2>
          <p className="section-sub mt-2 text-muted">
            Common questions from Markham homeowners planning a home renovation.
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

      {/* 15. Book consultation */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Book Your Free Markham Home Renovation Consultation</h2>
          <p className="mt-4 leading-relaxed text-muted">
            We’re just around the corner. Tell us what you’d like to change, and we’ll visit your home, walk through the possibilities, and put together a line-item fixed price that you’re free to accept or decline. Our English line is{" "}
            <a className="underline" href="tel:6475073639">(647) 507-3639</a>, and our Mandarin line is{" "}
            <a className="underline" href="tel:6472942888">(647) 294-2888</a>. Email works too at{" "}
            <a className="underline" href="mailto:info@y2canada.com">info@y2canada.com</a>, or book online through our{" "}
            <a className="underline" href="https://y2designandbuild.com/contact">contact page</a>.
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