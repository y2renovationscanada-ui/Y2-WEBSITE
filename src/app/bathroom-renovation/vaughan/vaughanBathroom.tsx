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

const includes = [
  "Complete bathroom rebuilds, from demolition and subfloor repair to new waterproofing, tile and fixtures",
  "Shower upgrades, including walk-in and curbless designs, built-in benches, niches and frameless glass",
  "Soaker and freestanding tubs, with the floor checked and reinforced where needed",
  "Custom vanities and storage, including double sinks, tall linen cabinets and quartz or stone tops",
  "Comfort features such as heated floors, layered lighting and quiet, properly ducted exhaust fans",
  "Plumbing and electrical work, handled by licensed trades and inspected where required",
  "Powder rooms, basement bathrooms and second-unit bathrooms for extended family or rental space",
];

const costRows = [
  {
    scope: "Powder room or guest washroom",
    investment: "$2,500 – $5,000",
    time: "Typically under a week",
    popular: "Statement vanity, wallpaper or feature tile",
  },
  {
    scope: "Full main or kids’ bathroom",
    investment: "$9,800 – $18,000",
    time: "About 7 to 10 working days (four-piece: 10 to 12)",
    popular: "Tub-and-shower combo, double vanity",
  },
  {
    scope: "Primary ensuite or high-end bath",
    investment: "$18,000 – $35,000",
    time: "About 2–3 weeks",
    popular: "Walk-in shower, freestanding tub, heated floors",
  },
  {
    scope: "Several bathrooms together",
    investment: "Quoted as one project",
    time: "Phased to keep a shower in use",
    popular: "Consistent finishes throughout the house",
  },
];

const processSteps = [
  {
    title: "Home visit",
    text: "We measure each bathroom, assess plumbing access, ventilation, and floor condition, and learn how your household uses the space. There’s no charge and no commitment.",
  },
  {
    title: "Design and pricing",
    text: "You receive a layout, a finish schedule, and a line-by-line fixed price. Nothing proceeds until you’ve approved it in writing.",
  },
  {
    title: "Preparation",
    text: "We secure any permits, confirm product delivery dates, and protect the floors, stairs, and entry routes in your home.",
  },
  {
    title: "Construction",
    text: "We remove the old room, then install new plumbing and wiring, complete inspections, install the waterproof membrane, lay the tile, and finally install fixtures and glass, with photo updates as each stage is completed and a written report every Friday.",
  },
  {
    title: "Inspection and handover",
    text: "We check the work internally first, then review it with you, address any final items, and hand over your document package.",
  },
];

const neighborhoods = [
  "Woodbridge",
  "Kleinburg",
  "Maple",
  "Concord",
  "Vellore Village",
  "Patterson",
  "Sonoma Heights",
  "Vaughan Metropolitan Centre",
  "Thornhill (Vaughan side)",
];

export const faqs = [
  {
    question: "Will remodeling affect my Tarion warranty?",
    answer: "It can. Work done by a contractor other than the original builder is generally not covered by the builder’s warranty. If your home is relatively new, review your coverage before starting, and we’ll help you weigh the timing.",
  },
  {
    question: "Can you remodel several bathrooms without leaving us without a shower?",
    answer: "Yes. We phase multi-bathroom projects so at least one shower remains in use whenever possible, and we’ll agree on the schedule with you before work begins." },
  {
    question: "Can I discuss my bathroom remodel in Vaughan with someone in Mandarin?",
    answer: "Yes. Calling (647) 294-2888 puts you in touch with a Mandarin-speaking member of our team, from your first visit through to handover."},
  {
    question: "Is a City of Vaughan building permit required?",
    answer: "Replacing fixtures, tile, or a vanity in the same location usually doesn’t require one. Adding a bathroom, relocating drains, altering walls, or running new circuits typically requires one, with ESA covering the electrical side. We’ll outline the permits for your project at the quote stage."},
  {
    question: "What will I receive when the project is finished?",
    answer: "A document package that includes permits and inspection records where applicable, product warranty information, and as-built drawings of the work."},
  {
    question: "How often will I hear from my project manager?",
    answer: "You’ll receive photo updates while work is underway, plus a written summary every Friday. You can also call your project manager directly at any time."},
];

const heroBullets = [
  "A written price you approve before any work begins",
  "Photo updates during construction and a progress report",
  "Permits, certificates, warranty documents delivered at handover",
  "A showroom in nearby Markham where you can review finishes in person",
  "Dedicated English and Mandarin phone lines",
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
                      Vaughan
                    </li>
                  </ol>
                </nav>
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Licensed & Insured · Serving the GTA
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Bathroom Remodel in Vaughan, ON
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                Y2 Design & Build brings a complete design-build team to every bathroom remodel in Vaughan. We draw the plan, set a fixed price, and manage the construction ourselves, keeping you informed from the first measurement until we hand over your finished bathroom.
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
                100+ Google reviews · Free in-home consultations in Vaughan
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
          "More than 500 completed projects · Five-star reviews on Yelp, Google, Houzz and HomeStars ·
           14+ years in GTA renovation · Fully licensed, insured and WSIB-covered · Free in-home consultation" */}
      <TrustBadges />

      {/* 4. Local trust intro */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Your Vaughan Bathroom, Managed by the Y2 Team
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Vaughan homes tend to be large, and many have three, four, or even five bathrooms. That means more decisions, more coordination, and more opportunities for things to slip between trades. Our role is to remove that burden. Your project manager schedules the plumber, electrician, tiler, and glass installer, books inspections with the{" "}
                <a
                  href="https://www.vaughan.ca/residential/building-and-construction/building-inspections/scheduling-inspection"
                  className="underline"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  City of Vaughan
                </a>{" "}
                when needed, and tells you what’s happening each week.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Before our final walkthrough with you, we walk the job ourselves and correct anything that doesn’t meet our standard. When the project closes, you receive a full document package for your records, including{" "}
                <a
                  href="https://www.vaughan.ca/residential/building-and-construction/building-permits"
                  className="underline"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  permits
                </a>
                , certificates, warranty information, and as-built drawings. Whether you live in Woodbridge, Maple, Kleinburg, or Vellore Village, this level of organization keeps your bathroom remodel in Vaughan straightforward, even when several rooms are underway.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">Book My Free Consultation</QuoteButton>
                <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
                  or call {site.phone}
                </a>
              </div>
            </div>

            <div>
              <img src={images.bathroom2} alt="Bathroom renovation in Vaughan" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. What our remodels include */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <img src={images.bathroom3} alt="Completed bathroom remodel in Vaughan" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">What Our Bathroom Remodels Include</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Every project is tailored, but our team regularly takes on:
              </p>
              <ul className="mt-6 space-y-3">
                {includes.map((item) => (
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
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Multiple bathrooms */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Remodeling More Than One Bathroom at Once
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Many of our Vaughan clients choose to update several bathrooms in a single project. Doing them together keeps tile, fixtures, and finishes consistent throughout the house, avoids a second round of disruption a year later, and lets you order materials in one batch for your bathroom remodel in Vaughan.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                The key is phasing. We plan the work so at least one shower stays usable while the others are under construction, and we sequence the trades so the plumber and tiler move from one room to the next without long gaps. If every bathroom will be out of service at the same time, our{" "}
                {/* TODO: replace href with the real guide URL */}
                <Link className="underline" href="/blog/where-to-stay-during-a-major-renovation">
                  guide to arranging where to stay during a major renovation
                </Link>{" "}
                covers the practical options.
              </p>
            </div>
            <div>
              <img
                src="https://y2designandbuild.com/images/bathroom-gall-1.webp"
                alt="Bathroom project by Y2 Design & Build"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Home types */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-brand-dark">
                Newer Vaughan Homes and Builder Warranties
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Large parts of Vellore Village, Patterson, Kleinburg and Maple were built in the last two decades, and some homes are still within their Tarion new-home warranty period. If yours is, review your coverage before remodeling. Work carried out by another contractor is generally not covered by the builder’s warranty, and changes to a bathroom can affect claims on related components. We’re happy to talk this through during the consultation so you can make an informed decision about timing.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Builder-grade bathrooms in these homes are typically solid but plain: acrylic shower stalls, basic vanities, standard tile and single ceiling lights. Upgrades here usually focus on a tiled walk-in shower with glass, a better vanity, heated floors, and improved lighting rather than major plumbing changes.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-dark">
                Updating Established Homes in Woodbridge and Kleinburg
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Homes built in Woodbridge in the 1980s and 1990s often have spacious ensuites with features that were fashionable at the time: polished marble, large whirlpool tubs set into platforms, gold-tone fixtures, and separate shower stalls with framed doors. The room size is usually generous, so a remodel can create a far more functional layout without moving walls.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                In Kleinburg, many properties are estate homes with large primary suites. The historic village core also falls within a heritage conservation district, where exterior changes such as new vents or windows may need approval. Interior bathroom work is generally unaffected, but we confirm the details for heritage properties before work begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Cost and timeline */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Vaughan Bathroom Remodel Cost and Timeline</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Your price will reflect your room’s size, layout, and finishes, but the figures below from recent Y2 projects give a dependable starting point. Multi-bathroom projects are quoted together, and timelines overlap where phasing allows. For more on what drives the numbers, see our{" "}
            {/* TODO: replace hrefs with real article URLs */}
            <Link className="underline" href="/blog/bathroom-renovation-cost-gta">
              complete bathroom cost guide for the GTA
            </Link>{" "}
            and our article explaining{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/how-long-does-bathroom-renovation-take-timeline">
              how long each stage of a bathroom renovation takes
            </Link>
            .
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-center text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">Scope</th>
                  <th className="px-4 py-3 font-semibold">Investment</th>
                  <th className="px-4 py-3 font-semibold">Time on site</th>
                  <th className="px-4 py-3 font-semibold">Popular in Vaughan homes</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, i) => (
                  <tr key={row.scope} className={i % 2 === 0 ? "bg-surface" : "bg-white"}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.scope}</td>
                    <td className="px-4 py-3 text-muted">{row.investment}</td>
                    <td className="px-4 py-3 text-muted">{row.time}</td>
                    <td className="px-4 py-3 text-muted">{row.popular}</td>
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

      {/* 9. Process */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            How a Y2 Bathroom Project Moves Forward
          </h2>
          <ol className="mx-auto mt-10 grid max-w-4xl gap-4">
            {processSteps.map((step, i) => (
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
          <p className="mx-auto mt-6 max-w-4xl text-sm leading-relaxed text-muted">
            If something unexpected is found once the old finishes are removed, we document it, explain the options, and give you a written price before continuing.
          </p>
        </div>
      </section>

      {/* 10. Social proof */}
      <ReviewStrip />

      {/* 11. Service areas */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Neighborhoods We Serve in Vaughan</h2>
          <p className="mx-auto mt-4 max-w-4xl text-center leading-relaxed text-muted">
            We remodel bathrooms across Vaughan, including Woodbridge, Kleinburg, Maple, Concord, Vellore Village, Patterson, Sonoma Heights, Vaughan Metropolitan Centre and the Vaughan side of Thornhill. If you’re shopping for fixtures before your consultation, our tips on{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/where-to-buy-bathroom-vanity-gta">
              choosing and buying a bathroom vanity
            </Link>{" "}
            are a useful place to start.
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted">
            Neighbors across York Region and the GTA can visit our bathroom pages for{" "}
            <Link className="underline" href="/bathroom-renovation/richmond-hill">Richmond Hill</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/markham">Markham</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/toronto">Toronto</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/mississauga">Mississauga</Link> and{" "}
            <Link className="underline" href="/bathroom-renovation/oakville">Oakville</Link>, or explore our{" "}
            <Link className="underline" href="/service-areas">full list of service areas</Link>.
          </p>
        </div>
      </section>

      {/* 12. What you can expect */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="section-heading">What You Can Expect from Y2 Design & Build</h2>
          <p className="section-sub">Clear communication and a tidy job site, from day one to handover.</p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-3">
            {projectDetails.map((detail) => (
              <div key={detail} className="flex items-start gap-3 rounded-xl bg-white px-5 py-4">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
                  ✓
                </span>
                <p className="text-sm leading-relaxed text-muted">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Gallery */}
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

  

      {/* 14. FAQ */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-4xl">
          <h2 className="section-heading text-3xl font-bold text-brand-dark">Frequently Asked Questions</h2>
          <p className="section-sub mt-2 text-muted">
            Common questions from Vaughan homeowners planning a bathroom renovation.
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

            {/* Book consultation */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-5xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Book Your Free Vaughan Bathroom Consultation</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Let us know which bathroom, or bathrooms, you’d like to change. We’ll visit your home, take measurements, and prepare a fixed price, itemized line by line, which you’re under no obligation to accept. Call{" "}
            <a className="underline" href="tel:6475073639">(647) 507-3639</a> for English service or{" "}
            <a className="underline" href="tel:6472942888">(647) 294-2888</a> for Mandarin, or write to us at{" "}
            <a className="underline" href="mailto:info@y2canada.com">info@y2canada.com</a>. You can also{" "}
            <a className="underline" href="https://y2designandbuild.com/contact">send your details through our contact page</a>.
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