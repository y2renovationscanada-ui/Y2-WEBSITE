"use client";

import React, { useState } from "react";
import Image from "next/image";
import { images, site } from "@/lib/content";
import { QuoteButton } from "@/components/QuoteModal";
import TrustBadges from "@/components/TrustBadges";
import ReviewStrip from "@/components/ReviewStrip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";

const kitchenImages = {
  hero: "https://y2designandbuild.com/images/kitchen.webp",
  intro: "https://y2designandbuild.com/images/kitchen-2.webp",
  covers: "https://y2designandbuild.com/images/kitchen-3.webp",
  gallery: [
    "https://y2designandbuild.com/images/kitchen.webp",
    "https://y2designandbuild.com/images/kitchen-design.webp",
    "https://y2designandbuild.com/images/kitchen-gall-1.webp",
    "https://y2designandbuild.com/images/kitchen-gall-2.webp",
    "https://y2designandbuild.com/images/kitchen-gall-3.webp",
    "https://y2designandbuild.com/images/kitchen-gall-4.webp",
    "https://y2designandbuild.com/images/kitchen-gall-5.webp",
    "https://y2designandbuild.com/images/kitchen-gall-6.webp",
    "https://y2designandbuild.com/images/kitchen-gall-7.webp",
    "https://y2designandbuild.com/images/kitchen-gall-8.webp",
    "https://y2designandbuild.com/images/kitchen-gall-9.webp",
    "https://y2designandbuild.com/images/kitchen-gall-10.webp",
    "https://y2designandbuild.com/images/kitchen-gall-11.webp",
    "https://y2designandbuild.com/images/kitchen-design.webp",
  ],
};

export const projectDetails = [
  "Before demolition starts, we protect your floors and stairs, seal off dust with proper containment, and post permits on site.",
  "Your project manager sends photo updates as work progresses, so you know what's happening even on days you're not home.",
  "Every Friday you get a short written note on where things stand and what's planned for the following week.",
  "If something changes mid-project, we price it and get your sign-off before touching it — no surprise line items on the final invoice.",
  "We walk the whole job ourselves and fix anything that's not up to standard before we ever call you in for the final walkthrough.",
  "At handover, you get every permit, certificate, and warranty document together in one package, plus as-built drawings for your records.",
];

const heroBullets = [
  "Kitchen designers on staff",
  "3D renderings before you commit",
  "Line-item fixed pricing",
  "Single project manager",
  "Wholesale supplier access",
  "English and Mandarin service",
];

const budgetRows = [
  {
    category: (
      <>
        <a href="https://en.wikipedia.org/wiki/Cabinetry" rel="nofollow" className="underline">Cabinetry</a> and hardware
      </>
    ),
    key: "cabinetry",
    share: "Roughly 30–35%",
    invest: "Solid boxes, quality drawer slides and soft-close hinges",
    save: "Simpler door styles; open shelving on one wall",
  },
  {
    category: "Labor and installation",
    key: "labor",
    share: "Roughly 20%",
    invest: "Experienced installers for cabinets and stone",
    save: "Keeping the existing layout to reduce trade hours",
  },
  {
    category: "Appliances",
    key: "appliances",
    share: "Roughly 10–20%",
    invest: "The range and ventilation you’ll use daily",
    save: "Standard-depth fridge and dishwasher",
  },
  {
    category: "Countertops",
    key: "countertops",
    share: "Roughly 10%",
    invest: (
      <>
        Durable <a href="https://en.wikipedia.org/wiki/Quartz" rel="nofollow" className="underline">quartz</a> or stone on the island
      </>
    ),
    save: "A less costly material on the perimeter",
  },
  {
    category: "Plumbing and electrical",
    key: "plumbing",
    share: "Roughly 5–10%",
    invest: "Enough outlets, dedicated circuits and good lighting",
    save: "Leaving the sink where it is",
  },
  {
    category: "Backsplash, flooring and lighting",
    key: "finishes",
    share: "Roughly 10–15%",
    invest: "Layered lighting and a durable floor",
    save: "Standard tile with one feature area",
  },
];

const islandGuidelines = [
  {
    title: "Walkway clearance",
    text: "Aim for about 42 inches between the island and surrounding counters, and closer to 48 inches if two people cook at once or the fridge opens into the aisle.",
  },
  {
    title: "Seating space",
    text: "Plan around 24 inches of width per stool and roughly 12–15 inches of counter overhang so knees fit comfortably.",
  },
  {
    title: "Working zones",
    text: "A prep sink or cooktop on the island changes what’s needed underneath, from drain and vent lines to ducting for downdraft or ceiling ventilation.",
  },
  {
    title: "Power",
    text: "Island counters typically need receptacles under current electrical code, and they’re the natural spot for charging drawers and small appliances.",
  },
  {
    title: "Proportion",
    text:(
      <>
      An {" "}
      <a href="https://www.housebeautiful.com/room-decorating/kitchens/g65468844/modern-kitchen-island/" rel="nofollow noreferrer noopener" className="underline" target="blank">
        island
      </a>
      that’s too large for the room blocks traffic. Two smaller islands sometimes work better in wide Oakville kitchens than one oversized one.
        {" "}
      </>
    )
  },
];

const entertainingFeatures = [
  {
    title: "Butler’s pantry or scullery",
    text: (
      <>
      A {" "}
      <a href="https://en.wiktionary.org/wiki/butler%27s_pantry" rel="nofollow noreferrer noopener" className="underline" target="blank">
        secondary prep area
      </a>
that hides small appliances, dishes, and mess from guests. It needs its own lighting, outlets, and, ideally, a second sink with its own drain connection.        {" "}
      </>
    )
  
  },
  {
    title: "Beverage center or coffee station",
    text: "Under-counter beverage fridges and built-in coffee machines need dedicated electrical, and a plumbed coffee maker also needs a water line.",
  },
  {
    title: "Second dishwasher",
    text: "Valuable for families who entertain often. It requires a drain connection, a dedicated circuit, and planning so the doors don’t block each other.",
  },
  {
    title: "Pot filler",
    text: "A wall-mounted faucet above the range saves carrying heavy pots. The water line must be run before the backsplash goes on.",
  },
  {
    title: "Panel-ready appliances",
    text: "Fridges and dishwashers that accept cabinet panels create a seamless look, but you must choose the exact model before final cabinet drawings.",
  },
  {
    title: "Walk-in pantry",
    text: "Often created by borrowing space from a hall closet or mudroom. Shelving depth, lighting, and ventilation make it practical, not just storage.",
  },
];

const costRows = [
  {
    scope: "Standard kitchen renovations",
    investment: "$15,000–$50,000",
    includes: "Typically covering new cabinetry, counters, backsplash, sink, fixtures, and lighting, often within the existing footprint",
  },
  {
    scope: "Luxury kitchens",
    investment: "$50,000–$100,000",
    includes: "For custom cabinetry, large islands, premium appliances, butler’s pantries, and layout or structural changes",
  },
];

const milestones = [
  {
    title: "Design approval",
    text: "You sign off on the layout, finishes, and appliances in 3D, along with a fixed, itemized quote.",
  },
  {
    title: "Cabinet and appliance orders",
    text: "Cabinets are built to your approved drawings, and appliances are ordered so they arrive before installation.",
  },
  {
    title: "Permit check",
    text: (
      <>
        When walls, drains, or gas lines shift, the Town’s{" "}
        <a href="https://www.oakville.ca/home-environment/building-renovations/building-permits-inspections/building-permits/" rel="nofollow" className="underline"> building permit</a>, <a href="https://esasafe.com/" rel="nofollow" className="underline">ESA</a> notification, and gas paperwork are filed by your project manager.
      </>
    ),
  },
  {
    title: "Demolition day",
    text: "We protect your floors and adjoining rooms, then remove the old kitchen.",
  },
  {
    title: "Rough-ins and inspections",
    text: (
      <>
        We install and inspect plumbing, electrical, ventilation, and any{" "}
        <a href="https://www.jobbank.gc.ca/marketreport/requirements/16986/ca" rel="nofollow" className="underline">gas work</a>{" "}
        before closing the walls.
      </>
    ),
  },
  {
    title: "Cabinet installation",
    text: "Cabinets are set level and secured, with filler and trim fitted.",
  },
  {
    title: "Countertop templating and installation",
    text: "Stone is measured after the cabinets are in, then fabricated and installed, which is why there’s often a short pause at this stage.",
  },
  {
    title: "Backsplash, fixtures and appliances",
    text: "Tile, sink, faucet, lighting and appliances complete the room.",
  },
  {
    title: "Final walkthrough",
    text: "Your project manager reviews every door, drawer, and appliance with you before handover.",
  },
];

// const neighborhoods = [
//   "Old Oakville",
//   "Bronte",
//   "Kerr Village",
//   "Eastlake",
//   "Clearview",
//   "Glen Abbey",
//   "Iroquois Ridge",
//   "Falgarwood",
//   "Joshua Creek",
//   "River Oaks",
//   "West Oak Trails",
//   "College Park",
//   "Palermo",
//   "North Oakville",
// ];

export const faqs = [
  {
    question: "What does a kitchen renovation in Oakville cost?",
    answer: "With Y2, standard kitchens usually range from $15,000 to $50,000, and luxury kitchens between $50,000 and $100,000. Your exact price is set out in a fixed, itemized quote after we visit.",
  },
  {
    question: "Will the Town of Oakville require a permit?",
    answer: "Swapping cabinets and counters within the same footprint is generally permit-free. Taking out walls, rerouting plumbing, or moving a gas line generally isn’t, and new circuits need ESA notification. We sort out what applies and file it.",
  },
  {
    question: "Should I choose appliances before cabinets?",
    answer: "Yes. Cabinets are built around appliance dimensions, especially panel-ready and built-in models, so choosing appliances early avoids costly adjustments later.",
  },
  {
    question: "Can I keep my existing hardwood floor?",
    answer: (
      <>
        Sometimes. If the new cabinet layout covers different areas than the old one, there may be gaps or mismatched sections. We’ll assess whether patching or new flooring makes more sense, and our{" "}
        <a className="underline" href="https://y2designandbuild.com/flooring">flooring services</a>{" "}
        can tie the kitchen into adjoining rooms.
      </>
    ),
  },
  {
    question: "Can I still use my home during the renovation?",
    answer: (
      <>
        Most families stay at home and set up a temporary kitchen elsewhere. If your kitchen is part of a whole-house job, read about{" "}
        <Link className="underline" href="https://y2designandbuild.com/blog/where-do-you-live-during-a-full-home-renovation">
          staying elsewhere while the house is renovated
        </Link>
        .
      </>
    ),
  },
];

export default function KitchenOakvilleClient() {
  const tel = `tel:${site.phone.replace(/\D/g, "")}`;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <Header />

      {/* 1. Value-driven hero */}
      <section className="relative min-h-[480px] overflow-hidden bg-brand-dark text-white">
        <Image
          src={kitchenImages.hero}
          alt="Kitchen renovation project by Y2 Design & Build in Oakville"
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
                      <Link href="/kitchen-renovation" className="transition-colors hover:text-white hover:underline">
                        Kitchen Renovation
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
                Kitchen Renovation in Oakville, ON
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                <a href="https://y2designandbuild.com/" className="underline">Y2 Design & Build</a>’s in-house team plans and constructs kitchens under one fixed contract. With Y2 handling your kitchen renovation in Oakville, you approve the design in 3D, see every cost itemized before work begins, and work with a single project manager from demolition to the final appliance hookup.
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
              
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust badges */}
      <TrustBadges />

      {/* 3. Where your kitchen budget goes */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Where Your Kitchen Budget Actually Goes
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Most homeowners start with a total figure in mind, but few know how that number divides once the quotes come in. Understanding the split helps you decide where to invest and where you can save without it showing. These shares are typical of mid-range and upper-range kitchens; your own project may differ.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-center text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">Category</th>
                  <th className="px-4 py-3 font-semibold">Typical share of budget</th>
                  <th className="px-4 py-3 font-semibold">Worth investing in</th>
                  <th className="px-4 py-3 font-semibold">Where you can save</th>
                </tr>
              </thead>
              <tbody>
                {budgetRows.map((row, i) => (
                  <tr key={row.key} className={i % 2 === 0 ? "bg-surface" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.category}</td>
                    <td className="px-4 py-3 text-muted">{row.share}</td>
                    <td className="px-4 py-3 text-muted">{row.invest}</td>
                    <td className="px-4 py-3 text-muted">{row.save}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-muted">
            With Y2, all of these lines appear in your fixed quote, so you can adjust one area to fund another before ordering anything. That’s one of the clearest ways a kitchen renovation in Oakville stays on budget.
          </p>
        </div>
      </section>

      {/* 4. Getting the island right */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <img src="https://y2designandbuild.com/images/kitchen-gall-5.webp" alt="Kitchen island in a renovated Oakville kitchen" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">Getting the Island Right</h2>
              <p className="mt-4 leading-relaxed text-muted">
                The island is the centerpiece of most <a href="https://www.oakville.ca/" rel="nofollow noopener noreferrer" className="underline" target="blank">Oakville</a> kitchens, and it’s also where the most common planning mistakes happen. These guidelines shape every island we design:
              </p>
              <ul className="mt-6 space-y-3">
                {islandGuidelines.map((item) => (
                  <li key={item.title} className="flex items-start gap-3 text-md leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>
                      <b className="text-brand-dark">{item.title}:</b> {item.text}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 leading-relaxed text-muted">
                On every kitchen renovation in Oakville, getting these measurements right on paper, and checking them in 3D, prevents the most expensive kind of change: moving cabinets after they’re installed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Entertaining features */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Features Oakville Clients Ask For When They Entertain</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Many kitchen renovation projects in Oakville that we take on are designed around hosting. Here are the most-requested features and the planning each one demands.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {entertainingFeatures.map((item) => (
              <div key={item.title} className="card bg-surface p-6">
                <h3 className="text-lg font-bold text-brand-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted">
            Appliances are the detail that most often delays a kitchen renovation in Oakville. We recommend selecting all of them during design so cabinets are built to exact dimensions and orders are placed with lead times in mind.
          </p>
        </div>
      </section>

      {/* 6. Cost and timeline */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Kitchen Renovation in Oakville: Budgets and Build Time
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Y2’s kitchen projects generally fall into two ranges:
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-center text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">Kitchen project</th>
                  <th className="px-4 py-3 font-semibold">Typical investment</th>
                  <th className="px-4 py-3 font-semibold">Usually includes</th>
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

          <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-muted">
            Most kitchens take three to six weeks once construction begins. The timeline grows with layout changes, structural work, custom millwork, and long-lead appliances. If your kitchen is part of a larger project, see our{" "}
            <Link className="underline" href="https://y2designandbuild.com/home-renovation/oakville">
              Oakville home renovation
            </Link>{" "}
            page.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <QuoteButton className="btn-primary cursor-pointer">Get My Free Quote</QuoteButton>
            <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
              or call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 7. Milestones */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Milestones on the Way to Your New Kitchen</h2>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4">
            {milestones.map((step) => (
              <li key={step.title} className="card flex items-start gap-3 bg-surface p-5 text-sm leading-relaxed text-muted">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span>
                  <b className="text-brand-dark">{step.title}:</b> {step.text}
                </span>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-6 max-w-4xl text-center leading-relaxed text-muted">
            Concealed problems found during demolition, such as damaged subfloor or outdated wiring, are documented with pictures and a written cost, then left alone until you approve the repair. Our post on{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/what-to-expect-during-home-renovation-markham">
              the homeowner’s experience during a renovation
            </Link>{" "}
            explains what daily life looks like while the work is underway.
          </p>
        </div>
      </section>

      {/* 8. Social proof */}
      <ReviewStrip />

      {/* 9. Neighborhoods */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Oakville Neighborhoods We Serve</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            We complete kitchen projects throughout Oakville, including Old Oakville, Bronte, Kerr Village, Eastlake, Clearview, Glen Abbey, Iroquois Ridge, Falgarwood, Joshua Creek, River Oaks, West Oak Trails, College Park, Palermo and the newer areas of North Oakville. Every kitchen renovation in Oakville gets the same team, the same fixed-price approach and the same attention to detail.
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted">
            For other rooms, see our{" "}
            <Link className="underline" href="/bathroom-renovation/oakville">Oakville bathroom remodels</Link> and{" "}
            <Link className="underline" href="/basement-renovation/oakville">Oakville basement projects</Link>. Outside Oakville, Y2 builds kitchens in{" "}
            <Link className="underline" href="/kitchen-renovation/toronto">Toronto</Link>,{" "}
            <Link className="underline" href="/kitchen-renovation/ajax">Ajax</Link>,{" "}
            <Link className="underline" href="/kitchen-renovation/markham">Markham</Link>,{" "}
            <Link className="underline" href="/kitchen-renovation/pickering">Pickering</Link>, and{" "}
            <Link className="underline" href="/kitchen-renovation/scarborough">Scarborough</Link>. Every community is listed on our{" "}
            <Link className="underline" href="/service-areas">service area page</Link>.
          </p>
        </div>
      </section>

      {/* 10. Gallery */}
      <section className="section-pad bg-brand-dark text-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold">Gallery Of Recent Projects</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {kitchenImages.gallery.map((src, index) => (
              <div key={`${src}-${index}`} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={src}
                  alt="Kitchen renovation gallery photo — Y2 Design & Build GTA"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <QuoteButton className="btn-primary cursor-pointer">Start My Kitchen Renovation Quote</QuoteButton>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl">
          <h2 className="section-heading text-3xl font-bold text-brand-dark">Oakville Kitchen FAQs</h2>
          <p className="section-sub mt-2 text-muted">
            Common questions from Oakville homeowners planning a kitchen renovation.
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

      {/* 12. Before you begin */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Before You Begin</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Large renovations can affect your policy, so review{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/does-your-home-insurance-cover-a-renovation">
              what to tell your insurer before a renovation
            </Link>
            . If you’re considering more space for a bigger kitchen, explore our{" "}
            <a className="underline" href="https://y2designandbuild.com/home-extensions">home additions</a>, and you can also{" "}
            <a className="underline" href="https://y2designandbuild.com/about">find out more about Y2</a>.
          </p>
        </div>
      </section>

      {/* 13. Book consultation */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Let’s Design Your Oakville Kitchen</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Tell us how you cook, entertain and live in your kitchen, and what you’d change if you could. After a free visit, you’ll get 3D concepts and an itemized fixed price, and there’s no pressure to sign. English:{" "}
            <a className="underline" href="tel:6475073639">(647) 507-3639</a>. Mandarin:{" "}
            <a className="underline" href="tel:6472942888">(647) 294-2888</a>. Email inspiration photos to{" "}
            <a className="underline" href="mailto:info@y2canada.com">info@y2canada.com</a>, or{" "}
            <a className="underline" href="https://y2designandbuild.com/contact">reserve a kitchen consultation online</a>.
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