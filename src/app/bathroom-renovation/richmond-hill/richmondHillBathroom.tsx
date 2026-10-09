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

export const projectDetails = [
  "Before demolition starts, we protect your floors and stairs, seal off dust with proper containment, and post permits on site.",
  "Your project manager sends photo updates as work progresses, so you know what's happening even on days you're not home.",
  "Every Friday you get a short written note on where things stand and what's planned for the following week.",
  "If something changes mid-project, we price it and get your sign-off before touching it — no surprise line items on the final invoice.",
  "We walk the whole job ourselves and fix anything that's not up to standard before we ever call you in for the final walkthrough.",
  "At handover, you get every permit, certificate, and warranty document together in one package, plus as-built drawings for your records.",
];

const heroBullets = [
  "Ensuite makeovers that replace whirlpool tubs, brass fixtures, and tired marble",
  "Accessible main-floor and basement bathrooms for multigenerational households",
  "Shower, tile, and vanity upgrades for newer homes in Jefferson, Westbrook, and Oak Ridges",
  "Bilingual service, with a dedicated Mandarin phone line",
];

const multigen = [
  {
    label: "A main-floor bathroom for an older parent:",
    text: "Climbing stairs to shower becomes difficult with age. Converting a main-floor powder room into a three-piece bathroom with a low-threshold shower is one of the most valuable changes you can make. It usually means borrowing a little space from a closet or laundry area, adding a new drain, and improving ventilation.",
  },
  {
    label: "Safety built in from the start:",
    text: "Slip-resistant porcelain floor tile, a fold-down or built-in shower bench, a handheld shower on a slide bar, lever handles, and blocking inside the walls for grab bars all make a bathroom safer without making it look clinical.",
  },
  {
    label: "A shared bathroom for children:",
    text: "A double sink, a tub with a shower, and a separate toilet compartment with its own door can let two or three children get ready at once without arguments.",
  },
];

const ensuiteIssues = [
  "Whirlpool tubs set into tiled platforms, often taking up the best corner of the room. Most owners tell us they rarely use them.",
  "Skylights directly above the tub, which can collect condensation, drip in winter, and make the room hard to ventilate.",
  "Polished marble floors and counters that have etched, dulled, or cracked over time.",
  "Brass or gold-tone fixtures and heavy, framed shower doors.",
  "Vaulted ceilings with a single small fan that can’t move enough air for the room’s volume.",
];

const costRows = [
  {
    scope: "Powder room update",
    investment: "$2,500 – $5,000",
    includes: "New vanity, toilet, lighting, flooring and paint",
  },
  {
    scope: "Full bathroom remodel",
    investment: "$9,800 – $18,000",
    includes:
      "Complete rebuild of a three- or four-piece room, including waterproofing, tile, tub or shower, vanity and fixtures",
  },
  {
    scope: "Primary ensuite or premium remodel",
    investment: "$18,000 – $35,000",
    includes:
      "Larger layouts, premium tile, heated floors, curbless or oversized showers, freestanding tubs and custom storage",
  },
];

const budgetTips = [
  {
    label: "Finalize selections before demolition:",
    text: "Choose and confirm tile, fixtures, and the vanity before the old room comes out, so nothing has to be rushed or substituted.",
  },
  {
    label: "Order long-lead items early:",
    text: "Custom vanities, specialty tile, and frameless glass can take weeks to arrive.",
  },
  {
    label: "Keep a contingency:",
    text: "Older homes in particular can reveal surprises behind the walls. Setting aside a modest reserve means an unexpected repair won’t derail the project.",
  },
  {
    label: "Put every change in writing:",
    text: "With Y2 Design & Build, any change to scope is priced and approved by you before the work happens, so the final invoice matches what you agreed to.",
  },
];

const neighborhoods = [
  "Mill Pond",
  "Oak Ridges",
  "Bayview Hill",
  "South Richvale",
  "North Richvale",
  "Jefferson",
  "Westbrook",
  "Rouge Woods",
  "Langstaff",
  "Crosby",
  "Harding",
  "Yongehurst",
  "Elgin Mills",
  "Richmond Hill Centre",
];

export const faqs = [
  {
    question: "Can you turn a main-floor powder room into a full bathroom for a parent?",
    answer: "Often, yes. It usually involves borrowing space from an adjacent closet or laundry area, adding a drain for the shower, and installing proper ventilation. We’ll assess what’s possible during the consultation and explain any permit requirements.",
  },
  {
    question: "Should I keep the whirlpool tub in my ensuite?",
    answer: "If you rarely use it, removing it frees up valuable space for a larger shower or a freestanding soaking tub. Many homeowners find a well-designed walk-in shower more useful day to day.",
  },
  {
    question: "What should I do about a skylight over my bathtub?",
    answer: "If it leaks or drips condensation, we can either properly reseal it and add better ventilation or close it in entirely. We’ll recommend the right option once we’ve inspected it.",
  },
  {
    question: "Is a permit needed from the City of Richmond Hill?",
    answer: "Cosmetic work that leaves fixtures in place generally doesn’t require one. Adding a bathroom, moving drains or walls, or adding electrical circuits usually does, with the electrical portion overseen by the ESA. We’ll confirm the requirements as part of your quote.",
  },
  {
    question: "How will I know how my project is going?",
    answer: "You’ll have one project manager as your contact, along with photo updates during the work and a written summary every Friday.",
  },
  {
    question: "Can my family communicate with your team in Mandarin?",
    answer: "Yes. Our Mandarin line, (647) 294-2888, connects you with team members who can guide you through design decisions, selections, and scheduling.",
  },
];

export default function BathroomRichmondHillClient() {
  const tel = `tel:${site.phone.replace(/\D/g, "")}`;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <Header />

      {/* 1. Value-driven hero */}
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
                      Richmond Hill
                    </li>
                  </ol>
                </nav>
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Licensed & Insured · Serving the GTA
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Bathroom Remodel in Richmond Hill, ON
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                We plan bathrooms around how Richmond Hill families live, from dated 1990s ensuites in Bayview Hill to main-floor washrooms for visiting grandparents. Our team confirms every decision in writing, and every trade is licensed and WSIB-covered.
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

      {/* 2. Offer strip */}
      <section className="bg-accent py-4 text-center text-white" aria-label="Current offer">
        <p className="text-lg font-bold">Save $2,500 On Your Bathroom Renovation.</p>
        <p className="text-sm opacity-90">
          Get Free Consultation with No cost, no obligation, and no expectation that you go ahead. If the numbers don't work for you, that's a perfectly good outcome.
        </p>
      </section>

      {/* 3. Trust badges
          NOTE: update the text inside components/TrustBadges to:
          "500+ projects completed in the GTA · 14+ years of local experience ·
           Top marks from reviewers on Google, Houzz, HomeStars and Yelp ·
           Licensed, insured and WSIB-covered trades · No-cost, no-obligation consultation" */}
      <TrustBadges />

      {/* 4. Local trust intro */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Bathroom Remodel Contractor Serving Richmond Hill and York Region
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Many homes in Richmond Hill share space between parents, children and grandparents. Some of the city’s most impressive houses still have ensuites that were the height of luxury in 1992 and now feel heavy and hard to clean. Newer subdivisions have the opposite problem: plenty of space, but plain builder finishes that never quite felt personal.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Y2 Design & Build has handled all of these situations for more than 14 years, renovating homes across the GTA. When you book a bathroom remodel in Richmond Hill with us, the same team designs the room, prices every item, and then builds it. You'll have one project manager throughout, and you approve every selection and change in writing before work begins.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">
                  Book My Free Richmond Hill Consultation
                </QuoteButton>
                <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
                  or call {site.phone}
                </a>
              </div>
            </div>

            <div>
              <img src={images.bathroom2} alt="Bathroom renovation in Richmond Hill" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Multigenerational homes */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Designing Bathrooms for Multigenerational Homes
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Richmond Hill has a large number of households where three generations live together, and that changes how bathrooms should be planned.
          </p>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {multigen.map((item) => (
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
            <li className="card flex items-start gap-3 bg-white p-5 text-sm leading-relaxed text-muted">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                aria-hidden="true"
              >
                ✓
              </span>
              <span>
                <b className="text-brand-dark">A basement bathroom for an in-law suite:</b> If a family member will live downstairs, a full bathroom is usually the first priority. If you’re thinking about turning that space into a separate, legal unit later, it’s worth reading about the{" "}
                <Link className="underline" href="/blog/legal-basement-apartment-requirements-ontario">
                  rules for legal basement apartments in Ontario
                </Link>{" "}
                before the design is finalized, and our{" "}
                <Link className="underline" href="/blog/basement-renovation-cost-gta">
                  GTA basement renovation cost breakdown
                </Link>{" "}
                can help with budgeting.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* 6. Luxury ensuite update */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Updating a 1980s or 1990s Luxury Ensuite
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Bayview Hill, South Richvale and parts of Mill Pond are full of large custom homes with generous ensuites that have aged in specific ways. We regularly see:
              </p>
              <ul className="mt-6 space-y-3">
                {ensuiteIssues.map((item) => (
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
              <p className="mt-6 leading-relaxed text-muted">
                The good news is that these rooms usually have excellent bones: plenty of square footage, large windows, and solid construction. A typical remodel removes the platform tub and replaces it with a freestanding tub or a large walk-in shower, sizes the exhaust fan to the room's actual volume, and either reseals the skylight properly or closes it in. The space stays generous, but it becomes far easier to live with and maintain.
              </p>
            </div>
            <div>
              <img src={images.bathroom3} alt="Updated ensuite bathroom in Richmond Hill" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Newer homes and condos */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Newer Homes and Condos</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Homes built over the last twenty years in Jefferson, Westbrook, Rouge Woods and Oak Ridges generally have sound plumbing and reasonable layouts. Here, remodels tend to focus on replacing builder-grade fixtures, swapping a small acrylic shower for a tiled one with frameless glass, adding heated floors and upgrading the vanity and lighting.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Condominiums around Richmond Hill Centre and the Yonge and Highway 7 corridor bring their own requirements, including management approval, restricted work hours, and fixed drain locations. Our{" "}
            <Link className="underline" href="/condo-renovation">
              condo renovation services
            </Link>{" "}
            explain how we handle these buildings.
          </p>
        </div>
      </section>

      {/* 8. Cost */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            The Cost of a Bathroom Remodel in Richmond Hill
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            The ranges below reflect recent Y2 projects throughout the GTA and show what each budget level usually covers.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-center text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">Budget level</th>
                  <th className="px-4 py-3 font-semibold">Typical range</th>
                  <th className="px-4 py-3 font-semibold">What it usually includes</th>
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
            Once on site, plan for seven to ten working days for a standard bathroom, ten to twelve for a four-piece room, and two to three weeks for a luxury ensuite. Converting a powder room into a full bathroom, or reworking a large ensuite layout, can add time for permits and plumbing changes.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Because Richmond Hill borders Markham, our breakdown of{" "}
            <Link className="underline" href="/blog/bathroom-renovation-cost-markham">
              bathroom renovation costs in Markham
            </Link>{" "}
            gives a realistic picture of local pricing as well.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <QuoteButton className="btn-primary cursor-pointer">Get My Free Quote</QuoteButton>
            <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
              or call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 9. Budget tips */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Keeping Your Budget on Track</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Most cost overruns in a bathroom remodel in Richmond Hill come from late decisions. A few habits help prevent them:
          </p>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {budgetTips.map((item) => (
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

      {/* 10. Process */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">What It’s Like to Work With Us</h2>
          <ol className="mx-auto mt-10 grid max-w-4xl gap-4">
            <li className="flex items-start gap-4 rounded-xl bg-surface px-5 py-4 shadow-sm">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">1</span>
              <div>
                <h3 className="text-lg font-bold text-brand-dark">A free visit to your home</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  We measure the room, check the plumbing, wiring, and ventilation, and talk through who uses the space and how.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4 rounded-xl bg-surface px-5 py-4 shadow-sm">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">2</span>
              <div>
                <h3 className="text-lg font-bold text-brand-dark">Your layout and a fixed, itemized price</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  You’ll see the proposed layout, your finish selections, and a line-by-line price covering materials and labor.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4 rounded-xl bg-surface px-5 py-4 shadow-sm">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">3</span>
              <div>
                <h3 className="text-lg font-bold text-brand-dark">Regular updates during construction</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  Your project manager protects floors and stairways, contains dust, and coordinates every trade. You receive photo updates as the work progresses and a written progress note every Friday, so you always know where things stand.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4 rounded-xl bg-surface px-5 py-4 shadow-sm">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">4</span>
              <div>
                <h3 className="text-lg font-bold text-brand-dark">A complete handover</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  After a final walkthrough together, you receive a document package for your new bathroom. For a closer look at 
                  {" "}
                  <Link className="underline" href="https://y2designandbuild.com/blog/what-to-expect-during-home-renovation-markham">
                  day-to-day life while a renovation is underway, 
                  </Link>
                  see our guide.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* 11. Social proof */}
      <ReviewStrip />

      {/* 12. Service areas */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Richmond Hill Areas We Serve</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            We remodel bathrooms across Richmond Hill, including Mill Pond, Oak Ridges, Bayview Hill, South Richvale, North Richvale, Jefferson, Westbrook, Rouge Woods, Langstaff, Crosby, Harding, Yongehurst, Elgin Mills and Richmond Hill Centre. Our Markham showroom (3400 14th Ave, Unit 16) is a short drive east of Richmond Hill.
          </p>

          {/* <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {neighborhoods.map((city) => (
              <div key={city} className="card flex items-center justify-center gap-3 p-4">
                <span className="text-brand" aria-hidden="true">✓</span>
                <span className="text-sm text-muted">{city}</span>
              </div>
            ))}
          </div> */}

          <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted">
            Live nearby? Visit our bathroom pages for{" "}
            <Link className="underline" href="/bathroom-renovation/markham">Markham</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/toronto">Toronto</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/scarborough">Scarborough</Link> and{" "}
            <Link className="underline" href="/bathroom-renovation/mississauga">Mississauga</Link>, or browse our{" "}
            <Link className="underline" href="/service-areas">full service area list</Link>.
          </p>
        </div>
      </section>

      {/* 13. Other renovation services */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Other Renovation Services</h2>
          <p className="mt-4 leading-relaxed text-muted">
            A bathroom remodel is often part of a bigger plan. Y2 also provides{" "}
            <a className="underline" href="https://y2designandbuild.com/home-renovation">whole-home renovations</a>,{" "}
            <a className="underline" href="https://y2designandbuild.com/kitchen-renovation">kitchen remodeling</a>,{" "}
            <a className="underline" href="https://y2designandbuild.com/home-extensions">home additions</a> for growing households,{" "}
            <a className="underline" href="https://y2designandbuild.com/basement-renovation">basement finishing</a>,{" "}
            <a className="underline" href="https://y2designandbuild.com/adu-construction">ADU and garden suite construction</a>, and{" "}
            <a className="underline" href="https://y2designandbuild.com/flooring">flooring</a>. Learn more about our{" "}
            <a className="underline" href="https://y2designandbuild.com/bathroom-renovation">bathroom renovation work</a>{" "}
            or the team behind{" "}
            <a className="underline" href="https://y2designandbuild.com/about">Y2 Design & Build</a>.
          </p>
        </div>
      </section>

      {/* 14. What you can expect */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="section-heading">What You Can Expect from Y2 Design & Build</h2>
          <p className="section-sub">Clear communication and a tidy job site, from day one to handover.</p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-3">
            {projectDetails.map((detail) => (
              <div key={detail} className="flex items-start gap-3 rounded-xl bg-surface px-5 py-4">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
                  ✓
                </span>
                <p className="text-sm leading-relaxed text-muted">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. Gallery */}
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

      {/* 16. FAQ */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl">
          <h2 className="section-heading text-3xl font-bold text-brand-dark">Frequently Asked Questions</h2>
          <p className="section-sub mt-2 text-muted">
            Common questions from Richmond Hill homeowners planning a bathroom renovation.
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

      {/* 17. Request quote */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">
            Request Your Free Quote for Bathroom Remodel in Richmond Hill
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Tell us what isn’t working in your bathroom, and we’ll help you plan a better one. Arrange a free visit to your home, and you’ll receive an itemized, fixed-price quote with no obligation. Reach us in English at{" "}
            <a className="underline" href="tel:6475073639">(647) 507-3639</a> or in Mandarin at{" "}
            <a className="underline" href="tel:6472942888">(647) 294-2888</a>, send an email to{" "}
            <a className="underline" href="mailto:info@y2canada.com">info@y2canada.com</a>, or fill out our{" "}
            <a className="underline" href="https://y2designandbuild.com/contact">online form</a>.
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