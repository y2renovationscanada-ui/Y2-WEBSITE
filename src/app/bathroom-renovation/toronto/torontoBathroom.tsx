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

const heroBullets = [
  "Walk-in showers, soaker tubs and tub-to-shower conversions",
  "Heated floors, floating vanities and storage built around how you use the room",
  "Condo approvals, insurance certificates and elevator bookings arranged for you",
  "One project manager, reachable in English or Mandarin",
];

const worries = [
  {
    worry: "“The price kept climbing after the demo.”",
    how: "An itemized, fixed-price quote covering scope, materials, and labor. Hidden conditions get documented and approved in writing first.",
  },
  {
    worry: "“I was the one chasing the plumber and the tiler.”",
    how: "Your project manager books every trade and confirms each visit with you ahead of time.",
  },
  {
    worry: "“The finished room didn't look like the drawing.”",
    how: "The same team designs and builds. Tile layout, niche placement, and vanity height are decided on paper, not on the day of install.",
  },
  {
    worry: "“Nobody explained things clearly.”",
    how: "We work in English and Mandarin, with a dedicated phone line for each.",
  },
  {
    worry: "“The condo board held everything up.”",
    how: "We prepare the alteration request, certificate of insurance, and elevator bookings for you.",
  },
];

const costRows = [
  {
    scope: "Powder room (2-piece)",
    investment: "$2,500 – $5,000",
    time: "A few days to a week, depending on scope",
  },
  {
    scope: "Full bathroom (3 or 4-piece)",
    investment: "$9,800 – $18,000",
    time: "7–10 working days for a standard bath, 10–12 for a four-piece",
  },
  {
    scope: "Luxury bathroom or primary ensuite",
    investment: "$18,000 – $35,000",
    time: "2–3 weeks",
  },
];

const services = [
  {
    title: "Full Bathroom Renovations",
    text: "Complete updates covering demolition, plumbing, electrical, waterproofing, tile, fixtures, cabinetry, and finishing.",
  },
  {
    title: "Condo Bathroom Renovations",
    text: "Renovations planned around condo rules, fixed plumbing locations, building approvals, elevator bookings, and space limitations.",
  },
  {
    title: "Primary Bathroom Renovations",
    text: "Larger bathrooms with walk-in showers, double vanities, freestanding tubs, custom storage, and upgraded finishes.",
  },
  {
    title: "Small Bathroom Renovations",
    text: "Space-conscious layouts using floating vanities, recessed storage, shower conversions, and carefully planned fixture placement.",
  },
  {
    title: "Powder Room Renovations",
    text: "Focused upgrades to vanities, toilets, lighting, flooring, tile, and finishes in compact two-piece bathrooms.",
  },
  {
    title: "Tub-to-Shower Conversions",
    text: "Existing tubs replaced with practical walk-in showers, including waterproofing, tile, glass, niches, and new fixtures.",
  },
  {
    title: "Accessible Bathroom Renovations",
    text: "Low-threshold showers, grab-bar blocking, seating, safer flooring, and layouts designed for easier movement.",
  },
  {
    title: "Luxury Bathroom Renovations",
    text: "Premium upgrades such as heated floors, custom millwork, frameless shower glass, statement tile, and spa-inspired features.",
  },
];

const processSteps = [
  {
    title: "A free, no-obligation visit",
    text: "We measure, look at the existing plumbing and venting, and listen. Do you need storage for two people getting ready at the same time? Are you planning to sell in three years or stay for twenty? Those answers shape the design more than any trend does.",
  },
  {
    title: "Design and an itemized quote",
    text: "You'll see the layout, the tile and fixture selections, and a line-by-line price. If you're still deciding on a vanity, our guide on",
    extra: {
      linkText: "where to buy a bathroom vanity in the GTA",
      href: "/blog/where-to-buy-bathroom-vanity-gta",
      after: " is a good place to start.",
    },
  },
  {
    title: "Permits",
    text: "Before demolition, we sort out Toronto Building, ESA, and TSSA permits if the layout is changing, protect floors and the route through your home, and confirm the schedule.",
  },
  {
    title: "Build",
    text: "The work runs in order of demolition, plumbing and electrical rough-in, inspections where required, waterproofing, tile, fixtures, and glass.",
  },
  {
    title: "Walkthrough",
    text: "We finish with a walkthrough together. Anything that isn't right goes on a list, and we fix it.",
  },
];

const nearbyAreas = [
  { label: "Bathroom Renovation in Markham →", href: "/bathroom-renovation/markham" },
  { label: "Bathroom Renovation in Pickering →", href: "/bathroom-renovation/pickering" },
  { label: "Bathroom Renovation in Oakville →", href: "/bathroom-renovation/oakville" },
  { label: "Bathroom Renovation in Ajax →", href: "/bathroom-renovation/ajax" },
  { label: "Bathroom Renovation in Scarborough →", href: "/bathroom-renovation/scarborough" },
  { label: "View All Service Areas →", href: "/service-areas" },
];

const moreServices = [
  { label: "Kitchen Renovation in Toronto →", href: "https://y2designandbuild.com/kitchen-renovation/toronto" },
  { label: "Basement Renovation in Toronto →", href: "https://y2designandbuild.com/basement-renovation/toronto" },
  { label: "Home Renovation in Toronto →", href: "https://y2designandbuild.com/home-renovation/toronto" },
  { label: "Condo Renovation →", href: "https://y2designandbuild.com/condo-renovation" },
  { label: "Flooring & Stairs →", href: "https://y2designandbuild.com/flooring-stairs" },
  { label: "Home Extensions →", href: "https://y2designandbuild.com/home-extensions" },
  { label: "ADU Construction →", href: "https://y2designandbuild.com/adu-construction" },
];

export const faqs: { question: string; answer: React.ReactNode }[] = [
  {
    question: "Do I need a permit to renovate a bathroom in Toronto?",
    answer:
      "Swapping fixtures in the same spot, retiling, or replacing a vanity usually doesn't need a building permit. Moving or adding plumbing fixtures, changing walls, or adding new electrical circuits generally does. Electrical work also falls under ESA rules. We'll tell you which permits apply at the quote stage.",
  },
  {
    question: "How much does a bathroom renovation in Toronto cost?",
    answer:
      "Powder rooms range from $2,500–$5,000, full bathrooms from $9,800–$18,000, and luxury bathrooms from $18,000–$35,000. Where you land depends on layout changes, what turns up behind the walls, your finishes, and any condo requirements. You'll have a written, itemized quote before work begins.",
  },
  {
    question: "What happens if you find damage behind the walls?",
    answer:
      "We stop, photograph it, and give you a written cost to repair it. We continue work on that item only after you approve.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Y2 Design & Build is a licensed and insured contractor, and our trades are WSIB-covered. Condo buildings can request our insurance certificate directly.",
  },
  {
    question: "Can I talk to someone in Mandarin?",
    answer:
      "Yes. Call (647) 294-2888 to speak with our team in Mandarin, from the first consultation to the final walkthrough.",
  },
  {
    question: "Can you renovate more than one bathroom at once?",
    answer: (
      <>
        Yes, and it often makes sense. Doing both together keeps finishes consistent and means one round of
        disruption instead of two. Many clients also pair a bathroom with a{" "}
        <a className="underline" href="https://y2designandbuild.com/kitchen-renovation/toronto">
          kitchen renovation in Toronto
        </a>{" "}
        or a{" "}
        <a className="underline" href="https://y2designandbuild.com/basement-renovation/toronto">
          Toronto basement renovation
        </a>
        .
      </>
    ),
  },
];

export default function BathroomTorontoClient() {
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
                      Toronto
                    </li>
                  </ol>
                </nav>
              </div>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Bathroom Renovation in Toronto
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                Bathrooms for Toronto houses and condos, designed and built by one team, priced in an itemized fixed-price quote, and installed by licensed, WSIB-covered trades.
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
            
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <QuoteButton className="btn-primary cursor-pointer whitespace-nowrap text-center">
                  Get Your Free Quote
                </QuoteButton>
                <a href="tel:6475073639" className="btn-outline-light whitespace-nowrap text-center">
                  Call (647) 507-3639
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust badges */}
      <TrustBadges />

      {/* 3. Bathroom Contractors in Toronto */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">Bathroom Contractors in Toronto</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Many of the Toronto bathrooms we renovate are older than the homeowners who commission the work. Remove the wall tile in a 1920s semi-detached home in the Annex, and you may find a cast-iron drain stack, galvanized supply pipes, and plaster that has absorbed shower moisture for decades. A condominium near Yonge and Eglinton presents a different set of challenges.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Y2 Design &amp; Build has dealt with both for more than 15 years. Homeowners who choose us for a bathroom renovation in Toronto work with one team that draws the plan, prices it line by line, and builds it with licensed, WSIB-covered trades. You get a single project manager you can call, text, or reach in English or Mandarin, plus an itemized fixed-price quote you can actually plan around.
              </p>
            </div>
            <div>
              <img src={images.bathroom2} alt="Bathroom renovation in Toronto" />
            </div>
          </div>
        </div>
      </section>

         {/* 4. Honest Assessments */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <img src={images.bathroom3} alt="Bathroom renovation in Toronto" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">Honest Assessments, Fixed Prices</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Demolition often reveals conditions that strain project budgets, which is why Y2 Design &amp; Build conducts a thorough assessment during the initial site visit. As bathroom contractors in Toronto, we inspect behind vanity cabinets, evaluate the toilet drain&apos;s position relative to the floor joists, assess the exhaust ventilation system, and ask about the age of the existing plumbing.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Many pre-war Toronto homes were originally designed with window-only bathroom ventilation, which commonly leads to ceiling paint failure during winter months.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                If unforeseen conditions are discovered after demolition, work pauses immediately. You will receive photographic documentation, a written explanation of the issue, and a clear cost outline before any additional work proceeds. Nothing moves forward without your written approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Toronto Homeowners Switch */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Why Toronto Homeowners Switch to Y2</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Our clients often come to us after a bathroom renovation in Toronto went sideways somewhere else. This is what usually went wrong, and how we run things differently.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">The Worry</th>
                  <th className="px-4 py-3 font-semibold">How We Handle It</th>
                </tr>
              </thead>
              <tbody>
                {worries.map((row, i) => (
                  <tr key={row.worry} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.worry}</td>
                    <td className="px-4 py-3 text-muted">{row.how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Cost and Timeline */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Bathroom Renovation Toronto: Cost and Timeline
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            These are typical ranges from our recent GTA projects. Your quote will be specific to your room.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-center text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">Bathroom type</th>
                  <th className="px-4 py-3 font-semibold">Typical cost</th>
                  <th className="px-4 py-3 font-semibold">Typical time once work starts</th>
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
        </div>
      </section>

         {/* 7. Factors that increase cost */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Factors that May Increase Your Bathroom Renovation Cost
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Several factors can push a bathroom renovation in Toronto toward the higher end of its range. Relocating the toilet is one of the more significant cost drivers, as the drain must connect to the stack and may need to cross a joist. Additional features such as heated floors, curbless showers, custom millwork, and small-format mosaic tile can also increase the overall cost.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Pre-existing conditions common in older homes, as outlined above, may add further expense. For condo projects, timelines can extend slightly when building regulations restrict noisy work to designated hours.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Frameless shower glass is measured only after the tile is set, and fabrication adds lead time. We build that into your schedule from day one so it isn&apos;t a surprise. For a deeper breakdown, read our{" "}
                <Link className="underline" href="/blog/bathroom-renovation-cost-gta">
                  GTA bathroom renovation cost guide
                </Link>{" "}
                and{" "}
                <Link className="underline" href="/blog/how-long-does-bathroom-renovation-take-timeline">
                  how long a bathroom renovation really takes
                </Link>
                .
              </p>
            </div>
            <div>
              <img
                src="https://y2designandbuild.com/images/bathroom-palmer-1.webp"
                alt="Bathroom renovation project by Y2 Design & Build in Toronto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Services */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Our Toronto Bathroom Renovation Services</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            We are equipped to handle bathroom renovations of any size, layout, and requirement throughout Toronto:
          </p>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="card bg-white p-5">
                <h3 className="text-lg font-bold text-brand-dark">{s.title}:</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Condo */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Condo Bathroom Renovation in Toronto</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Condo bathrooms sit on a concrete slab, which changes what&apos;s realistic. Drain locations are mostly fixed. A fully curbless shower may not be possible where the slab can&apos;t be recessed. Exhaust ducts tie into the building&apos;s system, so the fan must match it.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Paperwork often frustrates people more than construction does. Most Toronto buildings require an alteration request approved before work starts, proof of contractor insurance, a booked and padded elevator, and a water shut-off arranged with the superintendent. As bathroom contractors in Toronto, we handle that back-and-forth. See our{" "}
            <a className="underline" href="https://y2designandbuild.com/condo-renovation">
              condo renovation services
            </a>{" "}
            for more.
          </p>
        </div>
      </section>

      {/* 10. Process */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Our Process for Bathroom Renovation in Toronto</h2>
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
                        {" "}
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
            If this is the only bathroom in your house, it helps to plan where everyone will shower for that stretch. Our blog on{" "}
            <Link className="underline" href="/blog/where-do-you-live-during-a-full-home-renovation">
              where to live during a renovation
            </Link>{" "}
            covers the options.
          </p>
        </div>
      </section>

      {/* 11. Social proof */}
      <ReviewStrip />

           {/* 12. Neighborhoods */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Toronto Neighborhoods We Serve</h2>
          <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-muted">
            We renovate bathrooms across the city, including Rosedale, Forest Hill, Lawrence Park, Leaside, The Annex, Moore Park, Summerhill, Yorkville, York Mills, and Hoggs Hollow. Our showroom is at 3400 14th Ave, Unit 16 in Markham, and we serve Toronto and:
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {nearbyAreas.map((a) => (
              <Link
                key={a.label}
                href={a.href}
                className="card flex items-center justify-center whitespace-nowrap p-4 text-sm text-brand-dark underline"
              >
                {a.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Upgrades */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Upgrades Toronto Homeowners Ask For Most</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Heated floors top the list, and in a Toronto January it&apos;s easy to see why. They need a dedicated circuit and thermostat, which we plan at the design stage. Walk-in showers come next, often replacing a tub nobody has used in years. If you have young kids, or expect to sell to a family, we&apos;ll usually suggest keeping a tub in at least one bathroom.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Wall-hung toilets and floating vanities make cleaning easier, and small rooms feel larger. Shower niches look best when they&apos;re framed between studs and lined up with the tile pattern, so we plan them early.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            For aging in place, we add blocking behind the walls for future grab bars, even if you don&apos;t install them yet. Some accessibility upgrades may qualify for tax credits, which we explain in our guide to{" "}
            <Link className="underline" href="/blog/ontario-home-renovation-tax-credits-rebates-incentives">
              Ontario renovation tax credits and rebates
            </Link>
            .
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Want the new floor to carry into the hallway? Our{" "}
            <a className="underline" href="https://y2designandbuild.com/flooring-stairs">
              flooring team
            </a>{" "}
            can match it.
          </p>
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
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="section-heading text-3xl font-bold text-brand-dark">FAQs</h2>

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

            {/* 16. More services */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">More Renovation Services in Toronto</h2>
          <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-muted">
            Bathrooms are the work we do most, but they aren&apos;t all we do. Y2 also handles:
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {moreServices.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="card flex items-center justify-center whitespace-nowrap p-4 text-sm text-brand-dark underline"
              >
                {s.label}
              </a>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-6xl leading-relaxed text-muted">
            Our{" "}
            <a className="underline" href="https://y2designandbuild.com/home-renovation/toronto">
              Toronto renovation guide
            </a>{" "}
            and the{" "}
            <a className="underline" href="https://y2designandbuild.com/bathroom-renovation">
              GTA bathroom renovation overview
            </a>{" "}
            are good next reads, or learn more about{" "}
            <a className="underline" href="https://y2designandbuild.com/about">
              our team
            </a>
            .
          </p>
        </div>
      </section>

      {/* 17. Book consultation */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Book Your Free Bathroom Consultation</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Tell us about the room you want to change. We&apos;ll visit, measure, and give you an itemized fixed-price quote, with no obligation attached.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Call <a className="underline" href="tel:6475073639">(647) 507-3639</a> (English) or{" "}
            <a className="underline" href="tel:6472942888">(647) 294-2888</a> (Mandarin), email{" "}
            <a className="underline" href="mailto:info@y2canada.com">info@y2canada.com</a>, or{" "}
            <a className="underline" href="https://y2designandbuild.com/contact">send us a message online</a>.
          </p>
          <div className="mt-8">
            <QuoteButton className="btn-primary cursor-pointer">Get Your Free Quote</QuoteButton>
          </div>
        </div>
      </section>

      <QuoteForm />
      <Footer />
    </>
  );
}