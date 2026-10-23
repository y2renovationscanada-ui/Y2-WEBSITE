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

const basementImages = {
  hero: "https://y2designandbuild.com/images/basement.webp",
  intro: "https://y2designandbuild.com/images/basement-gall-1.webp",
   gallery: [
    "https://y2designandbuild.com/images/basement-gallery-1.webp",
    "https://y2designandbuild.com/images/basement-gallery-2.webp",
    "https://y2designandbuild.com/images/basement-gallery-3.webp",
    "https://y2designandbuild.com/images/basement-gallery-4.webp",
    "https://y2designandbuild.com/images/basement-gallery-5.webp",
    "https://y2designandbuild.com/images/basement-gallery-6.webp",
    "https://y2designandbuild.com/images/basement-gallery-7.webp",
    "https://y2designandbuild.com/images/basement-gallery-8.webp",
    "https://y2designandbuild.com/images/basement-gallery-9.webp",
    "https://y2designandbuild.com/images/basement-gallery-10.webp",
    "https://y2designandbuild.com/images/basement-gallery-11.webp",
    "https://y2designandbuild.com/images/basement-gallery-12.webp",
  ],
};



const heroBullets = [
  "An itemized fixed quote, with any requested change priced for your approval first",
  "Permit applications, inspections, and trade scheduling coordinated on your behalf",
  "Experience with the homes and conditions found across Durham Region",
  "Prompt replies on business days, through separate English and Mandarin phone lines",
];

const layoutItems = [
  {
    label: "Young families:",
    text: (
      <>
        An open playroom with durable{" "}
        <a
          href="https://www.thespruce.com/vinyl-flooring-materials-1314764"
          className="underline"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          luxury vinyl flooring
        </a>
        , plenty of closed storage for toys, and a powder room nearby keeps children close and the main floor tidy. We often leave space that can later become a bedroom as kids grow.
      </>
    ),
  },
  {
    label: "Households with teenagers:",
    text: "A media or games room, a bedroom with a proper egress window, and a full bathroom give older children their own space. Sound insulation in the ceiling keeps movie nights from carrying upstairs.",
  },
  {
    label: "Remote workers:",
    text: "A quiet office with a solid-core door, good lighting, and dedicated electrical circuits can be far more productive than a desk in the corner of the living room.",
  },
  {
    label: "Extended family:",
    text: <>
    A bedroom, a full {" "}
        <a
          href="https://y2designandbuild.com/bathroom-renovation"
          className="underline"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          bathroom
        </a>
        {" "}
        , and a kitchenette create comfortable private space for parents or relatives, with the option to upgrade to a legal secondary unit later.
    </>},
  {
    label: "Rental income:",
    text: "A self-contained suite requires a separate entrance, fire separation, interconnected alarms, and full code compliance. It’s the most involved option, so we design it properly from the start rather than converting a finished rec room afterward.",
  },
];

const feelLikeHome = [
  {
    title: "Bring in daylight",
    text: "Enlarging small windows and installing larger, tiered window wells can transform a dark basement. In bedrooms, a properly sized egress window is a requirement as well as an upgrade.",
  },
  {
    title: "Open up the stairs",
    text: "Replacing a closed stairwell wall with a railing or glass panel connects the basement visually to the main floor and makes the descent feel inviting.",
  },
  {
    title: "Plan the ceiling carefully",
    text: <>
     {" "}
        <a
          href="https://en.wikipedia.org/wiki/Drywall"
          className="underline"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Drywall
        </a>
        {" "} gives a clean, finished look, while a drop ceiling keeps pipes and valves accessible. Many clients choose drywall throughout with discreet access panels at shut-offs and cleanouts.

    </>
  },
  {
    title: "Carry finishes through",
    text: (
      <>
        Matching trim profiles, door styles and color palettes from the main floor make the basement feel intentional rather than added on. Our{" "}
        <a className="underline" href="https://y2designandbuild.com/flooring">flooring team</a>{" "}
        can extend the same look down the stairs.
      </>
    ),
  },
];

const mechanicalItems = [
  {
    title: "The mechanical room",
    text: "Your furnace, water heater, water meter, main shut-off, and electrical panel all need safe access and proper clearances. Rather than squeezing them into a closet, we plan a well-ventilated utility room with a door wide enough to replace equipment later. If you’re considering a new furnace, heat pump, or tankless water heater, the renovation is the ideal time to relocate or upgrade them.",
  },
  {
    title: "The cold cellar",
    text: "Many Ontario homes have a cold room tucked beneath the front porch or steps. Because it sits outside the house’s insulated envelope, it is prone to condensation, musty air, and, in some cases, leaks through the porch slab above. You can keep it as a properly vented cold storage or wine room, or seal and insulate it to bring it inside the conditioned space. Either way, make the decision before the surrounding walls are finished.",
  },
];

const costRows = [
  {
    goal: "Open family room or playroom",
    range: "Lower end",
    features: "Insulation, drywall, flooring, lighting and trim",
  },
  {
    goal: "Teen space or guest area with bathroom",
    range: "Middle of the range",
    features: "New bathroom, bedroom with egress window, sound insulation",
  },
  {
    goal: "In-law suite or legal rental unit",
    range: "Upper end",
    features: "Kitchen, separate entrance, fire separation, interconnected alarms",
  },
  {
    goal: "Underpinning, walkouts or major water repairs",
    range: "Quoted separately",
    features: "Engineering, excavation and additional permits",
  },
];

export const faqs = [
  {
    question: "How much does a basement renovation in Ajax cost?",
    answer: "Most finished basements here cost between $50 and $120 per finished square foot. A simple open family room sits toward the lower end, while a suite with a kitchen, bathroom, and separate entrance sits toward the upper end. Your fixed quote will reflect your exact plan.",
  },
  {
    question: "Can you work around my furnace and water heater?",
    answer: 
    <>
        Yes. We design a dedicated {" "}
        <a href="https://en.wikipedia.org/wiki/Mechanical_room" 
            className="underline"
            rel="nofollow noopener noreferrer"
            target="_blank"
        >
          mechanical room 
        </a>  {" "} with proper clearances and access, and we can coordinate equipment upgrades or relocation during the renovation if needed.
    </>
  },
  {
    question: "What should I do with my cold cellar?",
    answer: "You can keep it as vented cold storage or a wine room, or seal and insulate it so it becomes part of the heated space. We’ll inspect it for leaks and moisture and recommend the right option.",
  },
  {
    question: "Should I choose a drywall or drop ceiling?",
    answer: "Drywall looks more finished and is the most popular choice, while a drop ceiling offers easier access to pipes and wiring. Many clients choose drywall with access panels at key valves and cleanouts.",
  },
  {
    question: "Should I add a bathroom now or later?",
    answer: "If you think you’ll want one, it’s far more cost-effective to install it, or at least the drain rough-in, during the main renovation rather than cutting into a finished floor later.",
  },
  {
    question: "Can we plan the project in Mandarin?",
    answer: "Certainly. A Mandarin-speaking Y2 team member can be reached at (647) 294-2888 to talk through your basement plans.",
  },
];

export default function BasementRenovationAjaxClient() {
  const tel = `tel:${site.phone.replace(/\D/g, "")}`;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <Header />

      {/* 1. Value-driven hero */}
      <section className="relative min-h-[480px] overflow-hidden bg-brand-dark text-white">
        <Image
          src={basementImages.hero}
          alt="Basement renovation project by Y2 Design & Build in Ajax"
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
                      <Link href="/basement-renovation" className="transition-colors hover:text-white hover:underline">
                        Basement Renovation
                      </Link>
                    </li>
                    <li aria-hidden="true" className="select-none text-white/40">/</li>
                    <li className="font-semibold text-white" aria-current="page">
                      Ajax
                    </li>
                  </ol>
                </nav>
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Licensed & Insured · Serving the GTA
              </p>
              <h1 className="text-lg font-bold leading-tight sm:text-4xl lg:text-4xl">
                Basement Renovation in Ajax, ON
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                <a href="https://y2designandbuild.com/" className="underline">Y2 Design & Build</a> helps Ajax families turn the lowest level of their home into its most flexible space. Every basement renovation in Ajax we deliver is drawn by our own designers, priced line by line by our estimators, and built under the direction of a single project manager, so you always know who is responsible and what comes next.
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
          "Over 500 GTA projects completed · More than 14 years of design-build work ·
           Licensed, insured and WSIB-covered · Consistently five-star feedback on Google, Yelp, HomeStars and Houzz ·
           Complimentary in-home assessment" */}
      <TrustBadges />

      {/* 3. Durham Region experience */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">Durham Region Experience You Can Rely On</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Ajax, <a href="https://y2designandbuild.com/basement-renovation/pickering" rel="nofollow noopener noreferrer" className="underline" target="_blank">Pickering</a>  and <a href="https://y2designandbuild.com/basement-renovation/markham" rel="nofollow noopener noreferrer" className="underline" target="_blank">Markham</a> are among the communities where our crews work most often, and Durham homeowners have trusted us with everything from flooring to complete lower-level transformations. That local familiarity matters underground. We know how the{" "}
                {/* TODO: replace href with the exact Town of Ajax building permits page */}
                <a href="https://ajax.ca/life-in-ajax/town-services/construction-permits-inspections/" rel="nofollow noopener noreferrer" className="underline" target="_blank">Town of Ajax</a>{" "}
                handles basement permits, which construction details inspectors look for, and how homes built in different decades tend to behave once the old finishes come off.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                One Y2 Design & Build project manager manages your basement renovation in Ajax from start to finish. They keep a locked schedule, coordinate framers, electricians, plumbers, HVAC technicians, drywallers, and flooring installers, and update you as each stage is completed. If anything unexpected comes up after demolition, you'll receive photos and a written cost before the work moves forward.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">Book My Free Consultation</QuoteButton>
                <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
                  or call {site.phone}
                </a>
              </div>
            </div>

            <div className={`card relative aspect-[4/3] overflow-hidden bg-black`}>
                <iframe
                  src={`https://www.tiktok.com/player/v1/7625752799006985480`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
          </div>
        </div>
      </section>

      {/* 4. Layout ideas */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Basement Layout Ideas for Ajax Households</h2>
          <p className="mx-auto mt-4 max-w-5xl text-center leading-relaxed text-muted">
            Every successful basement renovation in Ajax starts with a clear picture of how your family will use the space over the next five to ten years. Here’s how we typically approach the most common goals:
          </p>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4">
            {layoutItems.map((item) => (
              <li key={item.label} className="card flex items-start gap-3 bg-white p-5 text-sm leading-relaxed text-muted">
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

      {/* 5. Feel like part of the house */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Making a Basement Feel Like Part of the House
          </h2>
          <p className="mx-auto mt-4 max-w-5xl text-center leading-relaxed text-muted">
            A finished basement should feel like a continuation of your home, not a separate level you tolerate. A few design decisions make the biggest difference:
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {feelLikeHome.map((item) => (
              <div key={item.title} className="card bg-surface p-6">
                <h3 className="text-lg font-bold text-brand-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Mechanical room and cold cellar */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Planning Around the Mechanical Room and Cold Cellar
          </h2>
          <p className="mx-auto mt-4 max-w-5xl text-center leading-relaxed text-muted">
            Two areas of an Ajax basement are often overlooked until construction begins, and both deserve attention during design.
          </p>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
            {mechanicalItems.map((item) => (
              <div key={item.title} className="card bg-white p-6">
                <h3 className="text-lg font-bold text-brand-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Water protection */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Water Protection for Homes Near Ajax’s Creeks and Shoreline
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Dry conditions are the foundation of any lasting basement renovation in Ajax. The town sits between the Duffins Creek and Carruthers Creek watersheds and along the Lake Ontario shoreline, and homes in lower-lying areas can experience higher groundwater during spring thaw and heavy storms.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Before any finishing work, we recommend confirming your sump pump works and is sized correctly, adding a battery backup, installing a <a href="https://en.wikipedia.org/wiki/Backwater_valve" target="blank" rel="nofollow noreferrer noopener" className="underline">backwater valve</a> if your home doesn’t have one, and checking that downspouts and grading direct water away from the foundation. These steps protect your investment long after the renovation is complete.
          </p>
        </div>
      </section>

      {/* 8. Cost and timeline */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Basement Renovation in Ajax: Cost and Timeline
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Our Ajax basement projects generally come in at $50 to $120 for every square foot finished. Where yours sits in that band is driven by the floor plan, any waterproofing or moisture work, and the finishes you select. Most basement finishing projects take 4 to 8 weeks on site, depending on scope and permit requirements. For a more detailed breakdown of where the money goes, read our{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/how-much-does-basement-renovation-cost-gta">
              GTA basement cost guide
            </Link>
            .
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-center text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">Basement goal</th>
                  <th className="px-4 py-3 font-semibold">Where it usually falls in our range</th>
                  <th className="px-4 py-3 font-semibold">Features that shape the price</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, i) => (
                  <tr key={row.goal} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.goal}</td>
                    <td className="px-4 py-3 text-muted">{row.range}</td>
                    <td className="px-4 py-3 text-muted">{row.features}</td>
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

      {/* 9. Permits and secondary units */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Permits and Secondary Units in Ajax</h2>
          <p className="mt-4 leading-relaxed text-muted">
            A basement renovation in Ajax generally requires a building permit from the Town once you add walls, plumbing, new electrical circuits, or a bathroom, and electrical work must also be inspected by the{" "}
            <a href="https://esasafe.com/" className="underline" target="_blank" rel="nofollow noopener noreferrer">ESA</a>.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            If you’re planning a secondary unit, provincial rules now allow additional residential units on most urban lots, but any suite still has to satisfy the provincial Building and Fire Codes. Our summary of{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/what-makes-a-basement-apartment-legal-in-ontario">
              Ontario’s basement apartment rules
            </Link>{" "}
            explains the main requirements, and this article on{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/do-you-need-a-permit-to-finish-your-basement-in-markham">
              common basement permit triggers
            </Link>{" "}
            outlines when a permit is typically needed.
          </p>
        </div>
      </section>

      {/* 10. Social proof */}
      <ReviewStrip />

      {/* 11. Neighborhoods */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Ajax Neighborhoods We Serve</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Our crews are active across Ajax, from South Ajax and Pickering Beach on the lake to Audley Village and Northeast Ajax in the north, along with Pickering Village, Central Ajax and Riverside.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-muted">
            If you’re planning other work in Ajax, explore our pages for{" "}
            <Link className="underline" href="https://y2designandbuild.com/kitchen-renovation/ajax">kitchen renovations in Ajax</Link>,{" "}
            <Link className="underline" href="https://y2designandbuild.com/bathroom-renovation/ajax">Ajax bathroom renovations</Link> and{" "}
            <Link className="underline" href="https://y2designandbuild.com/home-renovation/ajax">whole-home renovations in Ajax</Link>. Not in Ajax? Our basement teams also work in nearby{" "}
            <Link className="underline" href="https://y2designandbuild.com/basement-renovation/pickering">Pickering</Link>, as well as{" "}
            <Link className="underline" href="https://y2designandbuild.com/basement-renovation/markham">Markham</Link>,{" "}
            <Link className="underline" href="https://y2designandbuild.com/basement-renovation/scarborough">Scarborough</Link>,{" "}
            <Link className="underline" href="https://y2designandbuild.com/basement-renovation/oakville">Oakville</Link> and{" "}
            <Link className="underline" href="https://y2designandbuild.com/basement-renovation/toronto">Toronto</Link>, or review{" "}
            <Link className="underline" href="/service-areas">every area we serve</Link>.
          </p>
        </div>
      </section>

      {/* 12. Related services */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Related Services From Y2</h2>
          <p className="mt-4 leading-relaxed text-muted">
            A basement often sits within a larger plan. Learn more about our{" "}
            <a className="underline" href="https://y2designandbuild.com/basement-renovation">basement renovation services across the GTA</a>,{" "}
            <a className="underline" href="https://y2designandbuild.com/home-extensions">home additions</a> and{" "}
            <a className="underline" href="https://y2designandbuild.com/adu-construction">garden suite and ADU construction</a>. If the suite is for a family member, you may be eligible for federal support covered in our article on{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/ontario-home-renovation-tax-credits-rebates-incentives">
              renovation incentives for Ontario homeowners
            </a>
            . It’s also a good idea to read{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/does-your-home-insurance-cover-a-renovation">
              what your insurer needs to know before a renovation
            </a>
            , and you can meet the{" "}
            <a className="underline" href="https://y2designandbuild.com/about">Y2 team here</a>.
          </p>
        </div>
      </section>

      {/* 13. Gallery */}
        <section className="section-pad bg-brand-dark text-white">
          <div className="container-page">
            <h2 className="text-center text-3xl font-bold">Gallery Of Recent Projects</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {basementImages.gallery.map((src) => (
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
              <QuoteButton className="btn-primary cursor-pointer">Start My Basement Renovation Quote</QuoteButton>
            </div>
          </div>
        </section>

      {/* 13. FAQ */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl">
          <h2 className="section-heading text-3xl font-bold text-brand-dark">Basement Renovation FAQs: Ajax, ON</h2>
          <p className="section-sub mt-2 text-muted">
            Common questions from Ajax homeowners planning a basement renovation.
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

      {/* 14. Book assessment */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Book Your Free Ajax Basement Assessment</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Share your ideas for the space, and we’ll visit your home, evaluate the basement, and prepare a no-obligation, itemized fixed quote for your basement renovation in Ajax. Our phone lines are{" "}
            <a className="underline" href="tel:6475073639">(647) 507-3639</a> for English and{" "}
            <a className="underline" href="tel:6472942888">(647) 294-2888</a> for Mandarin. Email{" "}
            <a className="underline" href="mailto:info@y2canada.com">info@y2canada.com</a>, or{" "}
            <a className="underline" href="https://y2designandbuild.com/contact">book your assessment online</a>.
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