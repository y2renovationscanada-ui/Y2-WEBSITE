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
  "In-house designers",
  "3D plans before work begins",
  "Fixed, line-item pricing",
  "A single point of contact",
  "Toronto permits managed",
  "English and Mandarin service",
];

const homeTypeRows = [
  {
    type: "Postwar bungalow",
    where: "Willowdale, Lansing, Bathurst Manor, Newtonbrook, Downsview",
    find: "One small main bathroom, cast-iron tub, older drains, no ducted fan",
    recommend: "Full gut, new supply lines, ducted fan; often a second bathroom in the basement",
    price: "$9,800–$18,000",
  },
  {
    type: "Mid-century home",
    where: "Don Mills, Parkwood Village, Henry Farm, Victoria Village",
    find: "Original tile, compact layouts, dated wiring",
    recommend: "Rework the layout within the footprint, update electrical, add storage",
    price: "$9,800–$18,000",
  },
  {
    type: "1970s–1990s two-story",
    where: "Bayview Village, Hillcrest Village, Westminster-Branson",
    find: "Tired ensuite with a large tub, small separate shower",
    recommend: "Remove the tub, build a large glass shower, add a double vanity",
    price: "$9,800–$18,000, or higher with custom glass",
  },
  {
    type: "Custom or rebuilt luxury home",
    where: "The Bridle Path, York Mills, Armour Heights, Hoggs Hollow",
    find: "Large ensuites ready for a high-end redesign",
    recommend: "Steam shower, heated floors, freestanding tub, custom millwork",
    price: "$18,000–$35,000",
  },
  {
    type: "Condo apartment",
    where: "Yonge and Sheppard, North York Centre, Yonge and Finch, Don Mills and Sheppard",
    find: "Builder-grade finishes, tub-shower combo, tight access",
    recommend: "Walk-in shower conversion, new vanity and lighting, quiet work schedule",
    price: "$9,800–$18,000",
  },
  {
    type: "Powder room (any home)",
    where: "Throughout North York",
    find: "Dated vanity, fixtures and lighting",
    recommend: "New vanity, toilet, feature wall and lighting",
    price: "$2,500–$5,000",
  },
];

const luxuryUpgrades = [
  {
    label: "Heated floors:",
    text: "Used every winter morning. Requires a dedicated circuit, a programmable thermostat and installation under the tile during the remodel.",
  },
  {
    label: "A rain head paired with an adjustable handheld wand:",
    text: "Makes cleaning, bathing children and rinsing pets easier. Needs a diverter or a multi-function valve.",
  },
  {
    label: "Linear drain and curbless entry:",
    text: "Gives a seamless look and a safer step-in. Needs careful floor sloping and, in some homes, lowering of the subfloor between the joists.",
  },
  {
    label: "Recessed niches and a bench:",
    text:(
    <>
    Remove the need for 
    {" "}
    <a href="https://www.wayfair.com/sca/ideas-and-advice/guides/what-is-a-shower-caddy-T22933" rel="nofollow noreferrer noopener" target="blank" className="underline">
      shower caddies
    </a>{" "}. Should be planned around the tile layout so cuts land neatly.
    </>
    ) 
  },
  {
    label: "Lighted or anti-fog mirror:",
    text: "Adds even face lighting and no fogging after a hot shower. Needs wiring placed behind the mirror location.",
  },
  {
    label: "Freestanding soaking tub:",
    text: "A beautiful focal point, but heavy when full. We check floor framing and plan a floor-mounted or wall-mounted filler.",
  },
  {
    label: "Steam shower:",
    text: "A true spa experience. Requires a vapor-tight enclosure, a sloped ceiling to stop dripping, a sealed glass door, a steam generator with its own circuit, and a nearby service location.",
  },
];

const condoPlanning = [
  {
    label: "Management approval:",
    text:(<>
    Many buildings ask for a written scope, contractor insurance, and 
    {" "}
    <a href="https://www.wsib.ca/en" rel="nofollow noreferrer noopener" target="blank" className="underline">
      WSIB 
    </a>
    {" "}
    documents.
    </>
    ) 
  },
  {
    label: "Elevator and parking bookings:",
    text: "We schedule deliveries and debris removal through the concierge or property manager.",
  },
  {
    label: "Water shut-offs:",
    text: "Riser or suite shut-offs are often coordinated with building staff and may require notice.",
  },
  {
    label: "Noise and quiet-hour rules:",
    text: "Demolition and tile cutting are timed to the building’s permitted hours.",
  },
  {
    label: "Sound control:",
    text: "Many buildings require acoustic underlay under new floor tile to protect the suite below.",
  },
];

const roles = [
  {
    label: "You",
    text: "set the goals and budget, approve the 3D design and choose your finishes. Nothing is ordered or changed without your sign-off.",
  },
  {
    label: "Your Y2 designer",
    text: "measures the room, develops the layout, produces 3D visuals, and guides your tile, fixture, and vanity selections, including options from our wholesale suppliers.",
  },
  {
    label: "Your Y2 project manager",
    text: (
    <>
      prepares your fixed, itemized quote, files any Toronto Building permit and
    {" "}
    <a href="https://esasafe.com/" rel="nofollow noreferrer noopener" className="underline" target="blank">ESA</a>
    {" "}
    notification, schedules every trade, books inspections and walks the finished room with you.
    </>
    )
  },
  {
    label: "Our licensed trades",
    text: "handle demolition, plumbing, electrical, waterproofing with a flood test, tile, glass, and final fixtures, in the order your project manager sets.",
  },
];

const neighborhoods = [
  "Willowdale",
  "Bayview Village",
  "The Bridle Path",
  "York Mills",
  "Armour Heights",
  "Hoggs Hollow",
  "Bedford Park",
  "Lansing",
  "Newtonbrook",
  "Bathurst Manor",
  "Lawrence Manor",
  "Downsview",
  "Don Mills",
  "Parkwood Village",
  "Henry Farm",
  "Victoria Village",
  "Hillcrest Village",
  "Westminster-Branson",
  "Condo communities around Yonge and Sheppard and North York Centre",
];

export const faqs = [
  {
    question: "How much do bathroom renovations in North York cost?",
    answer: "With Y2, powder rooms start at $2,500, full bathrooms range from $9,800 to $18,000, and luxury ensuites range between $18,000 and $35,000. Your exact price is fixed in an itemized quote after we visit.",
  },
  {
    question: "Can I add a second bathroom to my bungalow?",
    answer: "Often, yes, either in the basement or by reworking main-floor space. It requires a drain connection, venting, and a building permit, all of which we plan and manage.",
  },
  {
    question: "Can you install a steam shower in a condo?",
    answer: "Sometimes. It depends on your building’s rules, the space for a steam generator, and the ventilation available. We review this with you and your management office before design is finalized.",
  },
  {
    question: "Will I need to move out during the work?",
    answer: (
      <>
        Usually not, if you have another bathroom. For larger projects or homes with a single bathroom, our article on{" "}
        <Link className="underline" href="https://y2designandbuild.com/blog/where-do-you-live-during-a-full-home-renovation">
          finding somewhere to stay while work is underway
        </Link>{" "}
        walks through realistic choices.
      </>
    ),
  },
  {
    question: "Can I plan my bathroom in Mandarin?",
    answer: "Of course. Ring (647) 294-2888 to talk through layouts, permits, and costs with Mandarin-speaking Y2 staff.",
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
          alt={`Bathroom Renovation project by Y2 Design & Build in North York`}
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
                      North York
                    </li>
                  </ol>
                </nav>


              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Licensed & Insured · Serving the GTA
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Bathroom Renovations in North York, ON
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                From a Willowdale bungalow to a York Mills custom home or a condo above Yonge Street, Y2 Design & Build handles bathroom renovations in North York with one in-house team. We design the room, fix the price in writing, and assign a single project manager who stays with you until the last fixture is in.
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
                  Get My Free North York Quote
                </QuoteButton>
                <a href={tel} className="btn-outline-light text-center">
                  Call {site.phone}
                </a>
              </div>
              <p className="mt-5 text-sm text-white/80">
                <span className="font-bold text-accent">★★★★★ 5.0</span> on Google by
                100+ clients · Over 500 renovations · In business 14+ years · WSIB, licensing and insurance in place
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

      {/* 4. Local intro */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                A Short Drive From Our Showroom, and Very Familiar Territory
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                North York sits just across the 401 from our Markham showroom, and our crews are on its streets regularly. We know the area’s 1950s bungalows, its mid-century Don Mills homes, the large custom rebuilds of York Mills and Hoggs Hollow, and the condo towers lining Yonge and Sheppard. Since North York falls under 
                {" "} 
                <a
                  className="underline"
                  href="https://www.toronto.ca/city-government/accountability-operations-customer-service/city-administration/staff-directory-divisions-and-customer-service/toronto-building/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >Toronto’s municipal rules</a>, {" "}
                we also know exactly how
                {" "}
                <a
                  className="underline"
                  href="https://www.toronto.ca/city-government/accountability-operations-customer-service/city-administration/staff-directory-divisions-and-customer-service/toronto-building/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  Toronto Building
                </a>{" "}
                handles plumbing permits and inspections.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                What that means for you is simple: fewer surprises, a realistic schedule from day one, and a team that has already solved the problems your bathroom is likely to have.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">
                  Book My Free North York Consultation
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
              <img src={images.bathroom2} alt="Bathroom renovation in North York" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process */}
      <ThreeStepProcess />

      {/* 6. Home type table */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Your Home Type Decides the Plan
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            The most useful thing we can tell you before a site visit is what homes like yours usually need. This table summarizes what we see across North York, so you know where your project is likely to start and land.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-center text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">Home type</th>
                  <th className="px-4 py-3 font-semibold">Where you’ll find it</th>
                  <th className="px-4 py-3 font-semibold">What we usually find</th>
                  <th className="px-4 py-3 font-semibold">What we typically recommend</th>
                  <th className="px-4 py-3 font-semibold">Y2 price range</th>
                </tr>
              </thead>
              <tbody>
                {homeTypeRows.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.type}</td>
                    <td className="px-4 py-3 text-muted">{row.where}</td>
                    <td className="px-4 py-3 text-muted">{row.find}</td>
                    <td className="px-4 py-3 text-muted">{row.recommend}</td>
                    <td className="px-4 py-3 text-muted">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-muted">
            Your final figure depends on your actual room, layout changes, and selections, and it’s fixed in writing before work begins.
          </p>
        </div>
      </section>

      {/* 7. Luxury upgrades */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <img
                src={images.bathroom3}
                alt="Luxury bathroom renovation in North York"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Luxury Upgrades, Ranked by How Much You’ll Use Them
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                North York homeowners often ask which high-end features are worth it. These are the upgrades we install most during bathroom renovations in North York, ordered from the ones clients use every day to the ones that are more occasional indulgences, with what each one really requires.
              </p>

              <ul className="mt-6 space-y-3">
                {luxuryUpgrades.map((item) => (
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
                Ranking upgrades this way helps you decide where to spend and where to stop, and it keeps your bathroom renovations in North York focused on features that earn their cost.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Condo planning */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                What North York Condo Owners Should Plan For
              </h2>
              <p className="mt-2 leading-relaxed text-muted">
                Condo work in North York’s towers runs on the building’s schedule as much as ours. Before any of our condo bathroom renovations in North York begin, we help you with:
              </p>

              <ul className="mt-6 space-y-2">
                {condoPlanning.map((item) => (
                  <li key={item.label} className="flex items-start gap-2 text-sm sm:text-base">
                    <span className="mt-0.5 text-accent" aria-hidden="true">✓</span>
                    <span>
                      <b className="text-brand-dark">{item.label}</b> {item.text}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 leading-relaxed text-muted">
                Our{" "}
                <a className="underline" href="https://y2designandbuild.com/condo-renovation">condo renovation services</a>{" "}
                page explains our approach to condo projects in more detail.
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
                alt="Condo bathroom renovation in North York"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Cost and timeline */}
      <section className="bg-white section-pad">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-dark">
            Bathroom Renovations in North York: Cost and Timeline
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Y2’s North York bathroom projects follow the same price ranges as the rest of the GTA. Powder rooms run $2,500–$5,000, full bathrooms run $9,800–$18,000, and luxury ensuites run $18,000–$35,000. On site, a typical full bathroom wraps up in 7–10 working days, a four-piece usually takes ten to twelve, and a luxury ensuite generally takes two to three weeks.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            The biggest price swings come from moving plumbing, how much tile you choose, made-to-measure glass, steam and heated-floor systems, and any damage hiding behind old walls. To understand these factors further, read our{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/bathroom-renovation-cost-gta">
              complete guide to GTA bathroom costs
            </a>{" "}
            and our{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/how-long-does-bathroom-renovation-take-timeline">
              bathroom renovation timeline explained
            </a>
            .
          </p>
        </div>
      </section>

      {/* 10. Who does what */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="section-heading">Who Does What on Your Project</h2>
          <p className="section-sub">Every one of our bathroom renovations in North York has a clear division of roles, so nobody is ever unsure whose job something is.</p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-3">
            {roles.map((role) => (
              <div key={role.label} className="flex items-start gap-3 rounded-xl bg-white px-5 py-4">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">✓</span>
                <p className="text-sm leading-relaxed text-muted">
                  <b className="text-brand-dark">{role.label}</b> {role.text}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-relaxed text-muted">
            If anything unexpected turns up once the old walls are open, your project manager sends pictures with a costed explanation, and nothing proceeds on it until you agree.
          </p>
        </div>
      </section>

      {/* 11. Social proof */}
      <ReviewStrip />

      {/* 12. Neighborhoods */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-brand-dark">
            North York Neighborhoods We Serve
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Our crews complete bathroom renovations in North York in:
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
            We also renovate bathrooms across{" "}
            <Link className="underline" href="/bathroom-renovation/toronto">Toronto</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/etobicoke">Etobicoke</Link> and{" "}
            <Link className="underline" href="/bathroom-renovation/scarborough">Scarborough</Link>, and north of Steeles in{" "}
            <Link className="underline" href="/bathroom-renovation/markham">Markham</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/richmond-hill">Richmond Hill</Link> and{" "}
            <Link className="underline" href="/bathroom-renovation/vaughan">Vaughan</Link>. For other rooms, see our{" "}
            <Link className="underline" href="/kitchen-renovation/toronto">Toronto kitchen renovations</Link> and{" "}
            <Link className="underline" href="/basement-renovation/toronto">Toronto basement renovations</Link>. You can also browse our{" "}
            <a className="underline" href="https://y2designandbuild.com/bathroom-renovation">bathroom renovation services</a> or{" "}
            <Link className="underline" href="/service-areas">every area Y2 covers</Link>.
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
          <h2 className="section-heading text-3xl font-bold text-brand-dark">North York Bathroom FAQs</h2>
          <p className="section-sub mt-2 text-muted">Common questions from North York homeowners planning a bathroom renovation.</p>

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

      {/* Reading that helps */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Reading That Helps</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Picking out a vanity? Start with our{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/where-to-buy-bathroom-vanity-gta">
              roundup of GTA vanity stores and suppliers
            </a>
            . Before work begins, review{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/does-your-home-insurance-cover-a-renovation">
              what home insurance says about renovations
            </a>
            . If your bathroom is being adapted for an older family member, see our post on{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/ontario-home-renovation-tax-credits-rebates-incentives">
              provincial and federal renovation credits
            </a>
            . Want to know more about us first? Read about{" "}
            <a className="underline" href="https://y2designandbuild.com/about">the Y2 team</a>.
          </p>
        </div>
      </section>

      {/* Start your project */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Start Your North York Bathroom Project</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Share a few photos and tell us how you want the room to feel. We’ll come out, measure, and send you a detailed fixed price, and the decision to go ahead is entirely yours. Our English number is{" "}
            <a className="underline" href="tel:6475073639">(647) 507-3639</a>; Mandarin callers should use{" "}
            <a className="underline" href="tel:6472942888">(647) 294-2888</a>. Emails to{" "}
            <a className="underline" href="mailto:info@y2canada.com">info@y2canada.com</a> are welcome at any time, or you can{" "}
            <a className="underline" href="https://y2designandbuild.com/contact">arrange your free visit online</a>.
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