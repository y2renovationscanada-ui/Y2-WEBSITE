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

// TODO: replace these with your real kitchen image URLs / keys
const kitchenImages = {
  hero: "https://y2designandbuild.com/images/kitchen.webp",
  intro: "https://y2designandbuild.com/images/kitchen-2.webp",
  covers: "https://y2designandbuild.com/images/kitchen-3.webp",
  gallery: [
    "https://y2designandbuild.com/images/kitchen-gall-1.webp",
    "https://y2designandbuild.com/images/kitchen-gall-2.webp",
    "https://y2designandbuild.com/images/kitchen-gall-3.webp",
    "https://y2designandbuild.com/images/kitchen-gall-4.webp",
    "https://y2designandbuild.com/images/kitchen-gall-5.webp",
    "https://y2designandbuild.com/images/kitchen-gall-6.webp",
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
  "Kitchen layouts designed in-house, with cabinetry, counters and appliances planned together",
  "A local showroom where you can compare door styles, countertops and hardware in person",
  "A written fixed price; any change is costed and approved by you before it happens",
  "One project manager coordinating cabinet installers, plumbers, electricians, gas fitters and countertop fabricators",
  "Quick replies (by the next business day) and dedicated English and Mandarin lines",
];

const covers = [
  "Full kitchen remodels with new layouts, cabinetry, counters, backsplash, flooring and lighting",
  "Custom and semi-custom cabinetry, including pantry walls, tall storage and appliance garages",
  "Islands and peninsulas sized for seating, prep space, and safe clearances",
  "Open-concept conversions, including removal of walls between the kitchen, dining and living areas",
  "Spice kitchens and prep kitchens with dedicated high-capacity ventilation",
  "Plumbing, gas and electrical updates for new sink locations, ranges, induction cooktops and wall ovens",
  "Range hood and ventilation upgrades that actually clear smoke, steam and cooking odors",
];

const layoutPrinciples = [
  {
    title: "Work zones",
    text: "Instead of the classic “triangle” alone, we plan zones for prep, cooking, cleanup, and storage, keeping the sink, cooktop, and fridge close together without letting traffic cut through the middle.",
  },
  {
    title: "Clearances",
    text: "Industry guidelines recommend aisles of about 42 inches for one cook and 48 inches where two people often cook together. Islands that crowd the walkway are one of the most common regrets in kitchen renovations, so we check every dimension before cabinets are ordered.",
  },
  {
    title: "Storage",
    text: "Deep drawers in lower cabinets are easier to use than shelves, tall pantry cabinets add a surprising amount of capacity, and a dedicated spot for small appliances keeps counters clear.",
  },
  {
    title: "Seating",
    text: "Allow roughly 24 inches of counter length per stool, with enough knee space beneath the overhang for comfortable seating.",
  },
];


const costRows = [
  {
    scope: "Standard kitchen renovation",
    investment: "$15,000 – $50,000",
    includes: "New cabinetry, countertops, backsplash, sink, fixtures and lighting within the existing layout",
  },
  {
    scope: "Luxury custom kitchen",
    investment: "$50,000 – $100,000",
    includes: "Premium custom cabinetry, large islands, high-end appliances, layout or structural changes",
  },
  {
    scope: "Open-concept conversion or spice kitchen",
    investment: "Quoted individually",
    includes: "Wall removal and beams, additional ventilation, plumbing and electrical",
  },
];

// const neighborhoods = [
//   "Thornhill",
//   "Buttonville",
//   "Cornell",
//   "Box Grove",
//   "Unionville",
//   "Berczy Village",
//   "Angus Glen",
//   "Wismer",
//   "Greensborough",
//   "Cathedraltown",
//   "Cachet",
//   "Milliken Mills",
//   "Markham Village",
//   "Downtown Markham",
// ];

export const faqs = [
  {
    question: "What is the typical budget for a kitchen renovation in Markham?",
    answer: "Most kitchen renovations we complete range from about $15,000 to $50,000, while luxury custom kitchens with premium cabinetry and structural changes typically range from $50,000 to $100,000. The quote you receive is fixed and based on your specific layout and finish choices.",
  },
  {
    question: "How long will I be without a kitchen?",
    answer: 
    <>
    Most projects take 3 to 6 weeks on site. We order
    {" "}
    <a href="https://en.wikipedia.org/wiki/Cabinetry" rel="nofollow" className="underline">cabinetry </a> {" "}
    before demolition begins, so the period without a working kitchen stays as short as possible.
    </>
  },
  {
    question: "Can I move my sink to an island?",
    answer: "Usually, yes. It requires planning the drain slope, venting, and floor access beneath the island, which we work out during design.",
  },
  {
    question: "What size range hood do I need?",
    answer: "It depends on your cooktop, how often you cook at high heat, and the size of the space. We size and duct the hood to suit how you actually cook, and plan make-up air if a powerful hood requires it.",
  },
  {
    question: "Is a spice kitchen worth adding?",
    answer: "For households that cook often with strong aromas or high heat, it can be. It keeps heavy cooking separate from the main kitchen and living area, and it can often be created from an existing pantry, laundry, or mudroom.",
  },
  {
    question: "Can I discuss my kitchen design in Mandarin?",
    answer: "Absolutely. Calling (647) 294-2888 gives you access to staff who can walk you through layout, selections and scheduling in Mandarin.",
  },
];

export default function KitchenMarkhamClient() {
  const tel = `tel:${site.phone.replace(/\D/g, "")}`;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <Header />

      {/* 1. Value-driven hero */}
      <section className="relative min-h-[480px] overflow-hidden bg-brand-dark text-white">
        <Image
          src={kitchenImages.hero}
          alt="Kitchen renovation project by Y2 Design & Build in Markham"
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
                      Markham
                    </li>
                  </ol>
                </nav>
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Licensed & Insured · Serving the GTA
              </p>
              <h1 className="text-lg font-bold leading-tight sm:text-4xl lg:text-4xl">
                Kitchen Renovation in Markham, ON
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                <a href="https://y2designandbuild.com/" className="underline">Y2 Design & Build</a> has designed and built kitchens for Markham families for more than 14 years, working from our own showroom on 14th Avenue. When you choose us for your kitchen renovation in Markham, our designers plan the layout around how you cook, our estimators price every cabinet and fixture, and our project manager runs the build until the last appliance is switched on.
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

      {/* 2. Trust badges
          NOTE: update the text inside components/TrustBadges to:
          "Markham-based design-build team · 500+ renovations completed ·
           Five-star client reviews across HomeStars, Google, Houzz and Yelp ·
           Licensed and insured, WSIB-covered trades · No-cost kitchen consultation" */}
      <TrustBadges />

      {/* 3. Neighborhood team */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">Your Neighborhood Kitchen Renovation Team</h2>
              <p className="mt-4 leading-relaxed text-muted">
                A kitchen is the most complicated room in the house to renovate. In a few hundred square feet, it combines cabinetry, stone fabrication, plumbing, gas, high-amperage electrical, ventilation, lighting, and flooring, and every one of those trades depends on the one before it. When a single delivery is late, or a measurement is off, the whole schedule slips, and you’re left without a kitchen longer than planned.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                That’s the problem our team is built to solve. Because we design, price, and manage every kitchen renovation in Markham ourselves, the cabinet order, countertop template, appliance specifications, and electrical plan all come from one coordinated set of drawings. We don’t begin demolition until long-lead items like cabinetry are confirmed, which keeps the time your family spends without a working kitchen as short as possible. And because <a href="https://y2designandbuild.com/">Y2 Design & Build</a> is based in Markham, you can visit our showroom to make selections and reach your project manager quickly when a question comes up.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">Book My Free Consultation</QuoteButton>
                <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
                  or call {site.phone}
                </a>
              </div>
            </div>

            <div>
              <img src="https://y2designandbuild.com/images/kitchen.webp" alt="Kitchen renovation in Markham" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. What our kitchen renovations cover */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <img src="https://y2designandbuild.com/images/kitchen-gall-5.webp" alt="Completed kitchen renovation in Markham" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">What Our Kitchen Renovations Cover</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Whether your kitchen renovation in Markham is a cabinet and countertop update or a complete reconfiguration, our team handles:
              </p>
              <ul className="mt-6 space-y-3">
                {covers.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-md leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
                <li className="flex items-start gap-3 text-md leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>Countertops and backsplashes in <a href="https://en.wikipedia.org/wiki/Quartz" rel="nofollow" className="underline">quartz</a>, porcelain slab, <a href="https://en.wikipedia.org/wiki/Granite" rel="nofollow" className="underline">granite</a> and other surfaces</span>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Layout planning */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Planning a Kitchen Layout That Works</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            A successful kitchen renovation in Markham starts with how you move through the room, not with the cabinet catalog. During design, we focus on a few principles that make the biggest difference day to day:
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {layoutPrinciples.map((item) => (
              <div key={item.title} className="card bg-surface p-6">
                <h3 className="text-lg font-bold text-brand-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Ventilation and spice kitchens */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Ventilation and Spice Kitchens</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Many <a href="https://www.markham.ca/" rel="nofollow" className="underline">Markham</a> families cook often and at high heat, from stir-frying in a wok to searing, roasting, and simmering for hours. A builder-grade microwave hood or a small recirculating fan simply can’t handle that. We size range hoods to the cooktop and how you cook, duct them to the outside wherever possible, and use smooth, properly sized ductwork so the fan performs as rated. Very powerful hoods can also require make-up air so the house doesn’t become depressurized, and we account for that during design.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            For households that cook heavily, a separate spice kitchen or prep kitchen behind the main kitchen is increasingly popular. It keeps strong cooking odors and heavy-duty work out of the open living area while the main kitchen stays clean for everyday use and entertaining. These spaces need their own ventilation, sink, and storage, and you can often create them from an existing laundry room, mudroom, or pantry.
          </p>
        </div>
      </section>

      {/* 7. Cabinets and countertops */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Choosing Cabinets and Countertops</h2>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4">
            
            <li className="card flex items-start gap-3 bg-surface p-5 text-sm leading-relaxed text-muted">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span>
                  <b className="text-brand-dark">Cabinet construction:</b> Plywood boxes resist moisture and hold screws well, while high-quality <a href="https://en.wikipedia.org/wiki/Medium-density_fibreboard" className="underline" rel="nofollow">MDF</a>  provides a smooth, stable surface for painted doors. Soft-close hinges and full-extension drawer slides are worth including at every budget level.
                </span>
              </li>
               <li className="card flex items-start gap-3 bg-surface p-5 text-sm leading-relaxed text-muted">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span>
                  <b className="text-brand-dark">Door styles and finishes:</b> Shaker doors remain a timeless choice, slab doors suit modern kitchens, and painted, <a href="https://en.wikipedia.org/wiki/Lacquer" className="underline" rel="nofollow" >lacquered</a>, and wood-veneer finishes each have different maintenance needs. Thermofoil doors can peel near heat sources, so we use them carefully, if at all.
                </span>
              </li>
               <li className="card flex items-start gap-3 bg-surface p-5 text-sm leading-relaxed text-muted">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span>
                  <b className="text-brand-dark">Countertops:</b> <a href="https://www.britannica.com/science/quartz" className="underline" rel="nofollow">Quartz</a> is non-porous and low-maintenance but can be damaged by very hot pans. Porcelain slab resists heat, stains, and UV light. Granite is durable and unique but needs periodic sealing. Countertops are templated after the cabinets are installed, then fabricated and installed in the following days or weeks, a step we build into your schedule from the start.
                </span>
              </li>
          </ul>
        </div>
      </section>

      {/* 8. Electrical, gas, plumbing */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Electrical, Gas and Plumbing Considerations</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Modern kitchens draw far more power than older ones. A new range, wall oven, induction cooktop, dishwasher, microwave, and refrigerator each need properly rated circuits, and countertop receptacles near the sink require ground-fault protection. In older Markham homes, especially those built in the 1970s and 1980s, the electrical panel may need an upgrade to support the new kitchen.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            A <a href="https://www.jobbank.gc.ca/marketreport/requirements/16986/ca" rel="nofollow" className="underline">licensed gas technician</a> must move a gas range, and relocating the sink requires careful planning for drain slope and venting, especially when the sink moves to an island. We handle these details in the design so there are no surprises once we open walls and floors.
          </p>
        </div>
      </section>

      {/* 9. Cost and timeline */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Kitchen Renovation in Markham: Cost and Timeline
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            We price each kitchen after measuring your space and discussing your goals, but our recent Markham projects provide a reliable guide. Most kitchen renovations take 3 to 6 weeks on site, depending on scope, cabinetry lead times, and permits.
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
                  <tr key={row.scope} className={i % 2 === 0 ? "bg-surface" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.scope}</td>
                    <td className="px-4 py-3 text-muted">{row.investment}</td>
                    <td className="px-4 py-3 text-muted">{row.includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-muted">
            To see how a kitchen fits into a broader project, visit our page on{" "}
            {/* TODO: confirm href */}
            <Link className="underline" href="https://y2designandbuild.com/home-renovation/markham">
              home renovation in Markham
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

      {/* 10. Living without a kitchen */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Living Without a Kitchen for a Few Weeks</h2>
          <p className="mt-4 leading-relaxed text-muted">
            A short-term setup makes the renovation far easier. Most families create a temporary kitchen in the dining room or basement with the refrigerator, a microwave, a kettle, a toaster oven, and a folding table, and they plan simple meals for the weeks of construction. For tips on managing daily life during a larger project, see our article on{" "}
            {/* TODO: replace href with the real article URL */}
            <Link className="underline" href="https://y2designandbuild.com/blog/where-do-you-live-during-a-full-home-renovation">
              where families stay during major renovations
            </Link>{" "}
            and our guide to the{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/what-to-expect-during-home-renovation-markham">
              renovation experience in Markham
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 11. Social proof */}
      <ReviewStrip />

      {/* 12. Neighborhoods */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Markham Neighborhoods We Serve</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            We give every kitchen renovation in Markham the same attention, from Thornhill and Buttonville in the west to Cornell and Box Grove in the east. We regularly work in Unionville, Berczy Village, Angus Glen, Wismer, Greensborough, Cathedraltown, Cachet, Milliken Mills, Markham Village and the Downtown Markham condo district.
          </p>

          {/* <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {neighborhoods.map((city) => (
              <div key={city} className="card flex items-center justify-center gap-3 p-4">
                <span className="text-brand" aria-hidden="true">✓</span>
                <span className="text-sm text-muted">{city}</span>
              </div>
            ))}
          </div> */}

          {/* TODO: replace hrefs with the real page URLs */}
          <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted">
            Planning work beyond the kitchen? See our Markham pages for{" "}
            <Link className="underline" href="/bathroom-renovation/markham">bathroom renovations</Link> and{" "}
            <Link className="underline" href="/basement-renovation/markham">basement renovations</Link>. If you live elsewhere in the GTA, visit our kitchen renovation pages for{" "}
            <Link className="underline" href="/kitchen-renovation/toronto">Toronto</Link>,{" "}
            <Link className="underline" href="/kitchen-renovation/scarborough">Scarborough</Link>,{" "}
            <Link className="underline" href="/kitchen-renovation/pickering">Pickering</Link>,{" "}
            <Link className="underline" href="/kitchen-renovation/oakville">Oakville</Link> and{" "}
            <Link className="underline" href="/kitchen-renovation/ajax">Ajax</Link>, or browse our{" "}
            <Link className="underline" href="/service-areas">service area list</Link>.
          </p>
        </div>
      </section>

      {/* 13. Related services */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Related Services</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Many Markham homeowners pair a kitchen with other work. Explore our{" "}
            <a className="underline" href="https://y2designandbuild.com/kitchen-renovation">kitchen renovation services across the GTA</a>, along with{" "}
            <a className="underline" href="https://y2designandbuild.com/flooring">flooring and stairs</a>,{" "}
            <a className="underline" href="https://y2designandbuild.com/home-extensions">home additions</a> for larger kitchens, and{" "}
            <a className="underline" href="https://y2designandbuild.com/condo-renovation">condo kitchen renovations</a>. Before construction starts, it’s also wise to confirm{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/does-your-home-insurance-cover-a-renovation">
              how your insurance policy handles renovation projects
            </Link>
            , or you can read more about{" "}
            <a className="underline" href="https://y2designandbuild.com/about">Y2 Design & Build</a>.
          </p>
        </div>
      </section>

      {/* 15. Gallery */}
      <section className="section-pad bg-brand-dark text-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold">Gallery Of Recent Projects</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {kitchenImages.gallery.map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
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

      {/* 16. FAQ */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl">
          <h2 className="section-heading text-3xl font-bold text-brand-dark">Kitchen Renovation FAQs: Markham, ON</h2>
          <p className="section-sub mt-2 text-muted">
            Common questions from Markham homeowners planning a kitchen renovation.
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
          <h2 className="text-3xl font-bold text-brand-dark">Book Your Free Markham Kitchen Consultation</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Bring us your ideas, your frustrations with the current kitchen, and your wish list. We’ll visit, measure, and prepare an itemized fixed price, with no obligation to proceed. Phone our English line,{" "}
            <a className="underline" href="tel:6475073639">(647) 507-3639</a>, or our Mandarin line,{" "}
            <a className="underline" href="tel:6472942888">(647) 294-2888</a>. You’re also welcome to write to{" "}
            <a className="underline" href="mailto:info@y2canada.com">info@y2canada.com</a> or{" "}
            <a className="underline" href="https://y2designandbuild.com/contact">arrange your consultation online</a>.
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