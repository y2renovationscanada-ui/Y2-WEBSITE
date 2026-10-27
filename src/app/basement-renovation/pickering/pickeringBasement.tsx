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
  "Y2’s in-house design team maps out your layout, lighting, and storage before a single stud goes up",
  "Line-by-line fixed pricing means you approve every dollar in advance, including any changes along the way",
  "Your project manager takes care of City of Pickering permits, ESA inspections, and every trade on site",
  "Our bilingual office responds within one working day, in English or Mandarin",
];

const mistakes = [
  {
    title: "1. Finishing over a moisture problem",
    text: "Drywall and flooring installed over a damp wall or a slab that wicks water will eventually stain, smell, or grow mold. We investigate signs of moisture before design begins and address the cause first, whether that’s grading, downspouts, a failing sump or foundation repairs.",
  },
  {
    title: "2. Skipping the building permit",
    text: (
      <>
        Unpermitted work can complicate insurance claims, delay a future sale, and leave you responsible for hidden code issues. We obtain the City of Pickering permit and book every inspection. Our article on{" "}
        <Link className="underline" href="https://y2designandbuild.com/blog/do-you-need-a-permit-to-finish-your-basement-in-markham">
          what triggers a permit for basement work
        </Link>{" "}
        explains when you need one.
      </>
    ),
  },
  {
    title: "3. Building a rec room you’ll later want to rent",
    text: (
      <>
        Converting a finished family room into a legal suite often means tearing out ceilings and walls to add fire separation, interconnected alarms, and egress. If a rental or in-law unit is even a possibility, we design for it from day one. Read our rundown of{" "}
        <Link className="underline" href="https://y2designandbuild.com/blog/what-makes-a-basement-apartment-legal-in-ontario">
          what a legal basement unit needs in Ontario
        </Link>{" "}
        for the essentials.
      </>
    ),
  },
  {
    title: "4. Hiding valves and cleanouts behind drywall",
    text:(
      <>
        Water shut-offs, drain cleanouts, and {" "}
         <Link className="underline" href="https://en.wikipedia.org/wiki/Junction_box" rel="nofollow noreferrer noopener" target="blank">
           junction boxes 
        </Link>{" "}
        must stay reachable. We plan discreet access panels and position cabinetry so you never have to cut into a finished wall during an emergency.

      </>
    ),
  },
  {
    title: "5. Forgetting about heating and airflow",
    text: "A basement with only one or two supply vents will feel cold in winter and stuffy in summer. We add supply and return air where needed, and where it makes sense, a separate thermostat zone or a ductless unit for the lower level.",
  },
  {
    title: "6. Under-planning the electrical",
    text: 
    (
      <>
        A finished basement needs far more outlets, lighting, and dedicated circuits than an unfinished one, especially for a home office, theater, gym, or {" "}
         <Link className="underline" href="https://en.wikipedia.org/wiki/Kitchenette" rel="nofollow noreferrer noopener" target="blank">
           kitchenette.
        </Link>{" "}
       We also check that your electrical panel has capacity for the new load.
      </>
    ),
  },
  {
    title: "7. Choosing the wrong floor",
    text: (
      <>
        Solid hardwood and standard carpet don’t tolerate below-grade conditions well.{" "}
        <a
          href="https://www.thespruce.com/vinyl-flooring-materials-1314764"
          className="underline"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Luxury vinyl plank
        </a>
        , porcelain tile, and engineered flooring over a proper subfloor hold up far better.
      </>
    ),
  },
];

const eraRows = [
  {
    area: "Bay Ridges, West Shore, Rosebank",
    era: "1950s to 1970s",
    start: "Older finishes, lower ceilings, original plumbing and dated wiring",
  },
  {
    area: "Amberlea, Liverpool, Brock Ridge, Highbush",
    era: "1970s to 1990s",
    start: "Partly finished basements with paneling, carpet and small bathrooms",
  },
  {
    area: "Duffin Heights, Seaton",
    era: "2000s to today",
    start: "Unfinished concrete with rough-ins, ready for a full design",
  },
];

const costRows = [
  {
    tier: "Essential finish",
    covers: "An open family space with insulated walls, new floors, pot lights and trim",
    position: "Lower end",
  },
  {
    tier: "Comfort upgrade",
    covers: "The essentials plus a bathroom, a bedroom with a code-compliant window, quieter ceilings and nicer finishes",
    position: "Mid-range",
  },
  {
    tier: "Full suite or specialty build",
    covers: "Kitchen, separate entrance, fire separation or specialty rooms such as a theater or gym",
    position: "Upper end",
  },
];

const projectSteps = [
  {
    title: "Initial walkthrough",
    text: "We visit your home at no cost, inspect the basement for moisture and structural concerns, and learn how you want to use the space.",
  },
  {
    title: "Layout and pricing",
    text: "You receive a design proposal and a fixed, itemized quote you can review line by line.",
  },
  {
    title: "Permit submission",
    text: (
      <>
        Your project manager prepares drawings and applies to the{" "}
        <a href="https://www.pickering.ca/business-building-development/building-and-renovating/building-permits/" className="underline" target="_blank" rel="nofollow noopener noreferrer">City of Pickering</a>
        , along with any{" "}
        <a href="https://esasafe.com/" className="underline" target="_blank" rel="nofollow noopener noreferrer">ESA</a>{" "}
        requirements.
      </>
    ),
  },
  {
    title: "Rough-in stage",
    text: "Framing, insulation, plumbing, wiring, and ductwork are installed and inspected.",
  },
  {
    title: "Finishing stage",
    text: (
      <>
        <a href="https://en.wikipedia.org/wiki/Drywall" rel="nofollow noreferrer noopener" className="underline" target="_blank">Drywall</a>
        , flooring, doors, trim, cabinetry, and fixtures bring the space to life.
      </>
    ),
  },
  {
    title: "Handover",
    text: "We complete the final inspection, review the finished basement with you, and resolve any outstanding items.",
  },
];

export const faqs = [
  {
    question: "Is a City permit really necessary for basement renovation in Pickering?",
    answer: "In most cases, yes, once you add walls, plumbing, a bathroom or new electrical circuits. Permits protect your insurance coverage and resale value, and we handle the application for you.",
  },
  {
    question: "Can I turn my finished basement into a rental later?",
    answer: "You can, but it’s usually more expensive than planning for it upfront because fire separation, alarms, and egress often require reopening walls and ceilings. If there’s a chance you’ll rent, tell us at the start.",
  },
  {
    question: "Why is my basement colder than the rest of the house?",
    answer: "Usually because of uninsulated foundation walls and too few heating supply and return vents. A properly insulated, well-ventilated basement renovation in Pickering addresses both.",
  },
  {
    question: "How many outlets does a finished basement need?",
    answer: "Electrical code sets minimum spacing for wall receptacles so that no point along a usable wall is too far from an outlet, and rooms like offices, gyms, and theaters typically need more. We plan circuits around how each room will be used.",
  },
  {
    question: "Will I be charged extra if problems turn up mid-project?",
    answer: "Never without your say-so. Anything concealed that we uncover is photographed, explained, and priced in writing, and we wait for your go-ahead before tackling it.",
  },
];

export default function BasementRenovationPickeringClient() {
  const tel = `tel:${site.phone.replace(/\D/g, "")}`;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <Header />

      {/* 1. Value-driven hero */}
      <section className="relative min-h-[480px] overflow-hidden bg-brand-dark text-white">
        <Image
          src={basementImages.hero}
          alt="Basement renovation project by Y2 Design & Build in Pickering"
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
                      Pickering
                    </li>
                  </ol>
                </nav>
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Licensed & Insured · Serving the GTA
              </p>
              <h1 className="text-lg font-bold leading-tight sm:text-4xl lg:text-4xl">
                Basement Renovation in Pickering, ON
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                From Bay Ridges to Seaton, <a href="https://y2designandbuild.com/" className="underline">Y2 Design & Build</a> turns Pickering basements into warm, functional living space without the shortcuts that cause problems later. We plan, price, and build every basement renovation in Pickering with our own team, with one project manager accountable from your first call to the final inspection.
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

      {/* 2. Trust badges */}
      <TrustBadges />

      {/* 3. Why Pickering homeowners choose Y2 */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">Why Pickering Homeowners Choose Y2 for Their Basements</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Durham Region is a core part of our service area, and Pickering families have trusted us with projects from quick updates to full lower-level builds. A Pickering client’s review notes that our crew started their bathroom update the very next day and wrapped it up within four days. Basements take longer, of course, but they get the same tight scheduling and attention.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                With <a href="/" className="underline">Y2 Design & Build</a>, you aren’t hiring a framer, an electrician, and a flooring installer separately and hoping they coordinate. You’re hiring one company that designs the space, prices it transparently, and manages each trade in sequence. That approach is what makes a basement renovation in Pickering with us predictable, from the permit application to the final walkthrough.
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

      {/* 4. Seven mistakes */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Seven Basement Mistakes We Help Pickering Homeowners Avoid
          </h2>
          <p className="mx-auto mt-4 max-w-5xl text-center leading-relaxed text-muted">
            Most basement regrets come from decisions made too quickly at the start, and a basement renovation in Pickering is no exception. Here are the mistakes we see most often in finished basements across the GTA, and how we prevent each one.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {mistakes.map((item) => (
              <div key={item.title} className="card bg-surface p-6">
                <h3 className="text-lg font-bold text-brand-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What Pickering basements look like */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">What Pickering Basements Typically Look Like</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            When your house was built largely decides the starting point for any basement renovation in Pickering.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-center text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">Area</th>
                  <th className="px-4 py-3 font-semibold">Typical era</th>
                  <th className="px-4 py-3 font-semibold">Common starting point</th>
                </tr>
              </thead>
              <tbody>
                {eraRows.map((row, i) => (
                  <tr key={row.area} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.area}</td>
                    <td className="px-4 py-3 text-muted">{row.era}</td>
                    <td className="px-4 py-3 text-muted">{row.start}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Cost and timeline */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Basement Renovation in Pickering: Cost and Timeline
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Y2’s Pickering basement projects usually come in at $50–$120 for each finished square foot, with the final number shaped by the layout, any moisture correction needed, and the finishes you choose. Once permits are issued, most projects take four to eight weeks on site. Our detailed{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/how-much-does-basement-renovation-cost-gta">
              GTA basement pricing guide
            </Link>{" "}
            breaks the costs down further.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-center text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">Budget tier</th>
                  <th className="px-4 py-3 font-semibold">What it usually covers</th>
                  <th className="px-4 py-3 font-semibold">Where it falls in our range</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, i) => (
                  <tr key={row.tier} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.tier}</td>
                    <td className="px-4 py-3 text-muted">{row.covers}</td>
                    <td className="px-4 py-3 text-muted">{row.position}</td>
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

      {/* 7. How it comes together */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">How Your Pickering Basement Comes Together</h2>
          <ol className="mx-auto mt-10 grid max-w-4xl gap-4">
            {projectSteps.map((step, i) => (
              <li key={step.title} className="flex items-start gap-4 rounded-xl bg-white px-5 py-4 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-relaxed text-muted">
            Should demolition expose something nobody could see beforehand, you’ll get pictures and a cost explanation, and the extra work waits for your approval.
          </p>
        </div>
      </section>

      {/* 8. Social proof */}
      <ReviewStrip />

      {/* 9. Neighborhoods */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Pickering Neighborhoods We Serve</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Our team completes basement projects across Pickering, including Bay Ridges, West Shore, Rosebank, Rougemount, Amberlea, Liverpool, Brock Ridge, Highbush, Village East, Duffin Heights and the growing community of Seaton.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-muted">
            Planning more work in Pickering? Explore our{" "}
            <Link className="underline" href="https://y2designandbuild.com/kitchen-renovation/pickering">Pickering kitchen renovations</Link>,{" "}
            <Link className="underline" href="https://y2designandbuild.com/bathroom-renovation/pickering">Pickering bathroom renovations</Link>, and{" "}
            <Link className="underline" href="https://y2designandbuild.com/home-renovation/pickering">full home renovations in Pickering</Link>. We also renovate basements in neighboring{" "}
            <Link className="underline" href="https://y2designandbuild.com/basement-renovation/ajax">Ajax</Link> and{" "}
            <Link className="underline" href="https://y2designandbuild.com/basement-renovation/scarborough">Scarborough</Link>, as well as{" "}
            <Link className="underline" href="https://y2designandbuild.com/basement-renovation/markham">Markham</Link>,{" "}
            <Link className="underline" href="https://y2designandbuild.com/basement-renovation/toronto">Toronto</Link> and{" "}
            <Link className="underline" href="https://y2designandbuild.com/basement-renovation/oakville">Oakville</Link>. See every community on our{" "}
            <Link className="underline" href="/service-areas">service map</Link> or our main{" "}
            <a className="underline" href="https://y2designandbuild.com/basement-renovation">basement renovation page</a>.
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
                     alt="Basement renovation gallery photo — Y2 Design & Build GTA"
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

      {/* 10. FAQ */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl">
          <h2 className="section-heading text-3xl font-bold text-brand-dark">Pickering Basement FAQs</h2>
          <p className="section-sub mt-2 text-muted">
            Common questions from Pickering homeowners planning a basement renovation.
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

      {/* 11. Before you begin */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Before You Begin</h2>
          <p className="mt-4 leading-relaxed text-muted">
            A few practical steps can make your project smoother. Confirm{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/does-your-home-insurance-cover-a-renovation">
              what your insurer expects before a renovation starts
            </a>
            , and if an aging parent or a relative with a disability will live downstairs, our article on{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/ontario-home-renovation-tax-credits-rebates-incentives">
              Ontario renovation credits and rebates
            </a>{" "}
            is worth a read. You may also want to explore our{" "}
            <a className="underline" href="https://y2designandbuild.com/flooring">flooring options</a> or get to know the{" "}
            <a className="underline" href="https://y2designandbuild.com/about">Y2 team</a>.
          </p>
        </div>
      </section>

      {/* 12. Get started */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Get Started on Your Pickering Basement</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Tell us what you’d like your lower level to become, and we’ll visit, assess, and send you an itemized fixed quote with no obligation. English speakers can reach us at{" "}
            <a className="underline" href="tel:6475073639">(647) 507-3639</a> and Mandarin speakers at{" "}
            <a className="underline" href="tel:6472942888">(647) 294-2888</a>. Prefer writing? Our inbox is{" "}
            <a className="underline" href="mailto:info@y2canada.com">info@y2canada.com</a>, or you can{" "}
            <a className="underline" href="https://y2designandbuild.com/contact">request a consultation online</a>.
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