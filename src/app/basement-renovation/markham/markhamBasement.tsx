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
  "In-house design for second suites, family rooms, gyms, theaters, and bars",
  "A fixed, line-item quote, with every change costed and signed off by you before work proceeds",
  "Permits, City of Markham inspections and ESA approvals coordinated by your project manager",
  "Replies by the next business day, with dedicated English and Mandarin lines",
];

const suiteItems = [
  {
    label: "Heating and air:",
    text: "A suite can share the home’s furnace if the ductwork is designed and protected to code, or it can have its own system, such as a ductless heat pump. Independent heating gives each household control over its own comfort and simplifies fire separation.",
  },
  {
    label: "Laundry:",
    text: "Shared laundry in a common area is the simplest option. Separate machines for the suite add convenience and privacy but require additional plumbing, venting, and space.",
  },
  {
    label: "Sound between units:",
    text: "Mineral wool in the ceiling cavity, resilient channel, and solid-core doors make a noticeable difference to everyone in the house.",
  },
  {
    label: "Entrance and exit:",
    text: "The suite needs a safe way out, typically a separate side or rear entrance, along with egress windows in bedrooms.",
  },
  {
    label: "Electrical:",
    text: "A suite with a full kitchen may push an older panel to its limit. We’ll assess the service and recommend upgrades where needed.",
  },
];

const specialtyRooms = [
  {
    title: "Home gyms",
    text: <>
        Rubber or heavy-duty {" "}<a href="https://www.thespruce.com/vinyl-flooring-materials-1314764" className="underline" rel="nofollow" target="blank">vinyl flooring</a> {" "} protects the slab and absorbs impact. Check that the ceiling is high enough for overhead lifts and jump rope, add a dedicated circuit for treadmills or rowers, mount mirrors on blocking rather than drywall alone, and plan extra ventilation and dehumidification so the room stays fresh.
    </>
  },
  {
    title: "Home theaters",
    text: <>Theaters work best without windows, with darker wall and ceiling finishes to reduce reflections. We run conduit for speaker and display wiring inside the walls, add sound insulation to keep audio in, put lighting on dimmers, and place {" "} <a href="https://www.homeserve.com/blog/home-improvement/hvac-register-vs-hvac-return/" rel="nofollow" className="underline" target="blank">HVAC supply registers</a> {" "} where airflow noise won’t compete with the movie.</>
  },
  {
    title: "Wet bars and kitchenettes",
    text: "A bar sink needs a drain and vent connection, which may require cutting into the slab. We also plan dedicated circuits for under-counter refrigerators and a water line for an ice maker, and choose durable counters that resist spills.",
  },
  {
    title: "Wine storage",
    text: "A climate-controlled wine room requires an insulated, vapor-sealed enclosure, a proper cooling unit, and an exterior-grade door. A basement is often the ideal location because temperatures are naturally more stable below grade.",
  },
];

const costRows = [
  {
    feature: "Bathroom",
    why: "Drain connection, venting, waterproofing and fixtures",
    tip: "Use the existing rough-in location where possible",
  },
  {
    feature: "Kitchen or wet bar",
    why: "Cabinetry, plumbing, dedicated circuits and ventilation",
    tip: "Decide early whether it’s a full kitchen or a bar",
  },
  {
    feature: "Second suite requirements",
    why: "Fire separation, alarms, egress and a separate entrance",
    tip: "Design for compliance from the start, not as an upgrade",
  },
  {
    feature: "Specialty rooms",
    why: "Sound insulation, extra wiring, dehumidification or cooling",
    tip: "Share your equipment list during design",
  },
  {
    feature: "Structural or water work",
    why: "Underpinning, walkouts or drainage repairs",
    tip: "Quoted separately after an engineer’s review",
  },
];

const onSiteSteps = [
  {
    title: "Assessment and design",
    text: "We measure the space, locate the mechanical equipment and drains, discuss how you’ll use the basement, and prepare a design with a fixed quote.",
  },
  {
    title: "Permits",
    text: "We prepare and submit the drawings, and once the City of Markham issues the permit, the build is scheduled.",
  },
  {
    title: "Drywall and finishes",
    text: "Drywall, flooring, trim, doors, cabinetry, and fixtures are installed in sequence.",
  },
  {
    title: "Final inspection and walkthrough",
    text: "We close out the permit and review the finished space with you, addressing any remaining items.",
  },
];

export const faqs = [
  {
    question: "What does a basement renovation in Markham typically cost?",
    answer: "Our projects typically range from $50 to $120 per square foot. An open family room tends to be at the lower end, while a full second suite, complete with its own kitchen, bath and entry, tends to be at the upper end. You’ll receive a fixed quote based on your exact plan.",
  },
  {
    question: "Can I rent out my Markham basement?",
    answer: "In many cases, yes. The suite must meet building and fire code requirements, have a safe exit and proper fire separation, and may need to be registered with the City. We’ll confirm what applies to your property during design.",
  },
  {
    question: "Which inspections will my basement project need?",
    answer: "Most permitted basement projects include framing, insulation, plumbing, and final inspections with the City, along with an ESA inspection of the electrical work. We book and attend these on your behalf.",
  },
  {
    question: "Does a basement suite need its own furnace?",
    answer: "Not always. A suite can share the main system if the ductwork is properly designed and protected, or it can have independent heating such as a ductless heat pump. We’ll recommend the best option for your home.",
  },
  {
    question: "Can I put a home gym in my basement?",
    answer: "Yes. We’ll check the ceiling height, install impact-resistant flooring, add dedicated circuits for equipment, and plan ventilation and dehumidification so the room stays comfortable.",
  },
  {
    question: "Can I discuss my basement in Mandarin?",
    answer: "Of course. Call (647) 294-2888, and Mandarin-speaking Y2 staff will explain layouts, permits, and pricing.",
  },
];

export default function BasementRenovationMarkhamClient() {
  const tel = `tel:${site.phone.replace(/\D/g, "")}`;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <Header />

      {/* 1. Value-driven hero */}
      <section className="relative min-h-[480px] overflow-hidden bg-brand-dark text-white">
        <Image
          src={basementImages.hero}
          alt="Basement renovation project by Y2 Design & Build in Markham"
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
                      Markham
                    </li>
                  </ol>
                </nav>
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Licensed & Insured · Serving the GTA
              </p>
              <h1 className="text-lg font-bold leading-tight sm:text-4xl lg:text-4xl">
                Basement Renovation in Markham, ON
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                <a href="https://y2designandbuild.com/" className="underline">Y2 Design & Build</a> is headquartered in Markham, and basements are among the projects our local team completes most often. We design each basement renovation in Markham in-house, price it item by item, and deliver it with one project manager who knows the City’s permit process from years of working here.
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
          "Markham head office · Over 500 renovations delivered · 14+ years in the GTA ·
           Licensed, insured and WSIB-covered · Five-star client feedback on HomeStars, Google, Houzz and Yelp" */}
      <TrustBadges />

      {/* 3. Neighbors */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">Your Neighbors in Basement Design and Construction</h2>
              <p className="mt-4 leading-relaxed text-muted">
                <a href="https://www.markham.ca/" rel="nofollow" className="underline" target="blank">Markham</a> is our home base and where many of our largest projects have been built, so we understand the city’s housing stock in detail. Some homes in Unionville and Milliken Mills have lower basements crowded by ductwork and beams. Many newer houses in Cornell, Cathedraltown, Berczy Village and Wismer were built with taller foundations and a bathroom rough-in, and some even include a side entrance that makes a future suite far simpler. Townhomes often have compact lower levels that work best as offices, storage, or a guest room.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Whatever you’re starting with, your basement renovation in Markham follows the same disciplined approach. We assess the space, plan around the mechanical systems, confirm the <a href="https://www.markham.ca/economic-development-business/building-permits" target="blank" rel="nofollow" className="underline">permit</a> path with the City, and give you a fixed price before any wall is framed. One project manager then schedules every trade, books each inspection, and keeps you updated until the final walkthrough.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">Book My Free Consultation</QuoteButton>
                <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
                  or call {site.phone}
                </a>
              </div>
            </div>

            <div>
              <img src={basementImages.intro} alt="Basement renovation in Markham" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Second suite */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Planning a Second Suite in a Markham Home</h2>
          <p className="mx-auto mt-4 max-w-5xl text-center leading-relaxed text-muted">
            Many homeowners begin a basement renovation in Markham with rental income or family in mind. Most urban lots in <a href="https://www.ontario.ca/laws/regulation/190299" className="underline" rel="nofollow" target="blank" >Ontario</a> allow additional residential units, and interest in basement apartments has grown steadily across York Region. A well-designed suite can house aging parents, adult children, or a tenant, but the decisions you make early determine how comfortable and compliant it will be.
          </p>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4">
            {suiteItems.map((item) => (
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
          <p className="mx-auto mt-8 max-w-5xl text-center leading-relaxed text-muted">
            Because second suites must meet the Ontario Building Code and Fire Code and may need to be registered with the City, our primer on{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/what-makes-a-basement-apartment-legal-in-ontario">
              legal basement units in Ontario
            </Link>{" "}
            is worth reading. You’ll also find Markham-specific guidance in our post on{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/do-you-need-a-permit-to-finish-your-basement-in-markham">
              basement permit requirements in Markham
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 5. Gyms, theaters and bars */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Getting the Details Right for Gyms, Theaters and Bars
          </h2>
          <p className="mx-auto mt-4 max-w-5xl text-center leading-relaxed text-muted">
            Specialty rooms are where a well-planned basement renovation in Markham really shows its value. These are the details we build into each one:
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {specialtyRooms.map((item) => (
              <div key={item.title} className="card bg-surface p-6">
                <h3 className="text-lg font-bold text-brand-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Cost and timeline */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Basement Renovation in Markham: Cost and Timeline
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Most of our basement projects fall between $50 and $120 per square foot, depending on layout, moisture mitigation, and finish level, and a typical finished basement takes four to eight weeks once the permit is in hand. The features below have the biggest influence on where your project lands. For a broader cost overview, see our breakdown of{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/how-much-does-basement-renovation-cost-gta">
              GTA basement pricing
            </Link>
            .
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-center text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold">Why it affects the budget</th>
                  <th className="px-4 py-3 font-semibold">Planning tip</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.feature}</td>
                    <td className="px-4 py-3 text-muted">{row.why}</td>
                    <td className="px-4 py-3 text-muted">{row.tip}</td>
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

      {/* 7. What happens on site */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">What Happens on Site</h2>
          <ol className="mx-auto mt-10 grid max-w-4xl gap-4">
            {onSiteSteps.map((step, i) => (
              <li key={step.title} className="flex items-start gap-4 rounded-xl bg-surface px-5 py-4 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
                </div>
              </li>
            ))}
            <li  className="flex items-start gap-4 rounded-xl bg-surface px-5 py-4 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  5.
                </span>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark">Framing and rough-ins</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">Walls, insulation, plumbing, electrical, and ductwork go in, followed by <a href="https://www.markham.ca/economic-development-business/building-permits/eplan-steps-success/eplan-steps-success-inspect" className="underline" target="blank" rel="nofollow">City</a> and <a href="https://esasafe.com/" className="underline" target="blank" rel="nofollow">ESA</a> inspections.</p>
                </div>
              </li>
          </ol>
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-relaxed text-muted">
            Our article on{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/what-to-expect-during-home-renovation-markham">
              renovating in Markham, step by step
            </Link>{" "}
            explains what to expect while work is underway.
          </p>
        </div>
      </section>

      {/* 8. Social proof */}
      <ReviewStrip />

      {/* 9. Neighborhoods */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Markham Neighborhoods We Serve</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            We complete basement renovations in every corner of the city, including Unionville, Cornell, Cathedraltown, Berczy Village, Milliken Mills, Thornhill, Angus Glen, Box Grove, Wismer, Greensborough, Cachet, Buttonville and Markham Village.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-muted">
            Planning more than a basement? See our Markham pages for{" "}
            <Link className="underline" href="https://y2designandbuild.com/home-renovation/markham">home renovations</Link>,{" "}
            <Link className="underline" href="/kitchen-renovation/markham">kitchen renovations</Link> and{" "}
            <Link className="underline" href="/bathroom-renovation/markham">bathroom renovations</Link>. Homeowners outside Markham can explore our basement services in{" "}
            <Link className="underline" href="/basement-renovation/scarborough">Scarborough</Link>,{" "}
            <Link className="underline" href="/basement-renovation/toronto">Toronto</Link>,{" "}
            <Link className="underline" href="/basement-renovation/pickering">Pickering</Link>,{" "}
            <Link className="underline" href="/basement-renovation/ajax">Ajax</Link> and{" "}
            <Link className="underline" href="/basement-renovation/oakville">Oakville</Link>, or check the{" "}
            <Link className="underline" href="/service-areas">complete service area list</Link>.
          </p>
        </div>
      </section>

      {/* 10. Related services */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Related Services</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Explore our{" "}
            <a className="underline" href="https://y2designandbuild.com/basement-renovation">complete basement renovation services</a>, along with{" "}
            <a className="underline" href="https://y2designandbuild.com/flooring">flooring and stair upgrades</a>, backyard{" "}
            <a className="underline" href="https://y2designandbuild.com/adu-construction">garden suites</a> and{" "}
            <a className="underline" href="https://y2designandbuild.com/home-extensions">additions</a> that expand your living space. If your suite is for a senior relative or family member with a disability, our post on{" "}
            <a className="underline" href="https://y2designandbuild.com/blog/ontario-home-renovation-tax-credits-rebates-incentives">
              Ontario renovation tax credits
            </a>{" "}
            explains possible support, and you can also learn about the{" "}
            <a className="underline" href="https://y2designandbuild.com/about">Y2 team</a>.
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

      {/* 12. FAQ */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl">
          <h2 className="section-heading text-3xl font-bold text-brand-dark">Basement Renovation FAQs: Markham, ON</h2>
          <p className="section-sub mt-2 text-muted">
            Common questions from Markham homeowners planning a basement renovation.
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

      {/* 13. Book consultation */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Arrange Your Free Markham Basement Consultation</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Share your plans for basement renovation in Markham. We’ll visit, assess the space and prepare a fixed quote broken down line by line, with no commitment required. Speak with us in English at{" "}
            <a className="underline" href="tel:6475073639">(647) 507-3639</a> or in Mandarin at{" "}
            <a className="underline" href="tel:6472942888">(647) 294-2888</a>. Prefer to write? Email{" "}
            <a className="underline" href="mailto:info@y2canada.com">info@y2canada.com</a>, or{" "}
            <a className="underline" href="https://y2designandbuild.com/contact">schedule a visit online</a>.
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