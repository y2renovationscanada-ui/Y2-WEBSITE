"use client";

import React, { useState } from "react";
import Image from "next/image";
import { images } from "@/lib/content";
import { QuoteButton } from "@/components/QuoteModal";
import TrustBadges from "@/components/TrustBadges";
import ReviewStrip from "@/components/ReviewStrip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import Link from "next/link";

const heroBullets = [
  "Tub-to-shower conversions, walk-in showers and freestanding soaker tubs",
  "Ensuite upgrades, family bathrooms and main-floor powder rooms",
  "Heated floors, floating vanities and storage that fits how your household runs",
  "One project manager, reachable in English or Mandarin",
];

const homeAges = [
  {
    built: "1940s–1960s (South Ajax, Pickering Village)",
    find: "Small bathrooms, older plumbing, plaster or early drywall, little or no exhaust ventilation",
    mean: "Plan for plumbing updates, new venting to the exterior and possibly reframing walls that aren't square",
  },
  {
    built: "1970s–1980s",
    find: "Original tub surrounds, copper supply lines, undersized fans, sometimes aluminum wiring",
    mean: "Check wiring and fan ducting early; budget for subfloor repairs near the toilet and tub",
  },
  {
    built: "1990s–2000s (much of Central and Northeast Ajax)",
    find: "Builder-grade fixtures, fiberglass or acrylic surrounds, ensuites with corner jetted tubs",
    mean: "Great candidates for tub-to-shower conversions and reclaiming wasted ensuite space",
  },
  {
    built: "2010s and newer",
    find: "Better ventilation and layouts, but basic finishes",
    mean: "Mostly finish upgrades: tile, glass, vanity, lighting and heated floors",
  },
];

const scopes = [
  {
    label: "A refresh",
    text: "keeps the layout and the tub or shower in place. New vanity, toilet, lighting, paint, and flooring. It suits a powder room or a family bathroom that's dated but sound.",
  },
  {
    label: "A full bathroom remodel in Ajax",
    text: "takes the room down to the studs. Old surrounds come out, the shower walls are rebuilt with cement board and a waterproofing membrane, and everything from the subfloor up is new. This is the right call if you see soft spots in the floor, cracked tile, or staining on the ceiling below.",
  },
  {
    label: "A layout change",
    text: "moves fixtures, typically to turn an unused corner jetted tub into a large walk-in shower or to fit a double vanity in an ensuite. Moving a toilet or drain adds cost and usually needs a permit from the Town of Ajax, but it can transform how the room works.",
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

const processSteps = [
  {
    title: "The first visit is free and comes with no obligation",
    text: "We measure, check the floor for flex, look at the fan and the plumbing access, and ask how the room is used. Who showers in the morning? Does anyone need a tub? Is resale on the horizon?",
  },
  {
    title: "Next, you'll receive a design and an itemized fixed-price quote",
    text: "It shows the layout, your tile and fixture selections, and a line-by-line price. If we discover something hidden once the walls are open, such as rot under the tub or a damaged drain, you'll get photos and a written cost before any extra work goes ahead.",
  },
  {
    title: "Your project manager then runs the build",
    text: "Permits are pulled where needed, floors and stairs are protected, and the work follows a clear sequence: demolition, plumbing and electrical rough-in, inspections, waterproofing, tile, fixtures, and glass. We finish with a walkthrough, and anything that isn't right gets fixed.",
  },
];

export const faqs = [
  {
    question: "Do I need a permit for a bathroom remodel in Ajax?",
    answer:
      "Replacing fixtures in the same location, retiling, or swapping a vanity usually doesn't require a building permit. Moving or adding plumbing fixtures, altering walls, or adding new electrical circuits generally does, and electrical work also falls under ESA rules. We'll confirm what applies to your project at the quote stage.",
  },
  {
    question: "How long will my bathroom be out of use?",
    answer:
      "Once work starts, a standard bathroom typically takes 7 to 10 working days and a four-piece bathroom 10 to 12. A luxury ensuite usually takes two to three weeks. Permits and special-order materials can affect the start date, and we'll walk you through the full schedule before work begins.",
  },
  {
    question: "Can you remodel a bathroom in a condo townhouse?",
    answer:
      "Yes. We handle the board approval request and provide our insurance certificate, and we work within the corporation's rules on hours and access.",
  },
  {
    question: "What happens if you find damage behind the walls?",
    answer:
      "We stop, photograph it and give you a written repair cost. Work on that item only continues once you approve it.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Y2 Design & Build is a licensed and insured contractor, and our trades are WSIB-covered.",
  },
  {
    question: "Can I speak to someone in Mandarin?",
    answer:
      "Yes. Call (647) 294-2888 to speak with our team in Mandarin throughout your project.",
  },
];

export default function BathroomAjaxClient() {
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
                      Ajax
                    </li>
                  </ol>
                </nav>
              </div>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Bathroom Remodel in Ajax, ON
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                From dated builder-grade ensuites to family bathrooms, we remodel Ajax bathrooms with a written, line-by-line quote and a single project manager overseeing every trade.
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

      {/* 3. Intro */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Bathroom Remodeling Contractor Serving Ajax and Durham Region
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Walk into most Ajax bathrooms built in the 1990s or early 2000s, and you&apos;ll see the same things: a fiberglass tub surround, an oak or white thermofoil vanity, a cultured marble top with a built-in sink, and a fan that hums but barely moves the air. They did their job for twenty-odd years. Now the caulking is yellowing, the grout is cracking around the tub, and the ensuite feels smaller than it should.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Y2 Design &amp; Build has been remodeling bathrooms across Durham Region and the GTA for more than 14 years. When you choose us for a bathroom remodel in Ajax, one team handles the design, the itemized quote, and the construction. Your project manager coordinates the plumber, electrician, and tile setter, all WSIB-covered, so you never have to chase trades.
              </p>
            </div>
            <div>
              <img src={images.bathroom2} alt="Bathroom renovation in Ajax" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Home age */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            What Your Ajax Home&apos;s Age Tells Us
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Ajax grew in waves, and each one left a different kind of bathroom behind. Knowing roughly when your home was built helps us predict what&apos;s behind the walls before the first tile comes off.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">When your home was built</th>
                  <th className="px-4 py-3 font-semibold">What we typically find</th>
                  <th className="px-4 py-3 font-semibold">What it means for your remodel</th>
                </tr>
              </thead>
              <tbody>
                {homeAges.map((row, i) => (
                  <tr key={row.built} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.built}</td>
                    <td className="px-4 py-3 text-muted">{row.find}</td>
                    <td className="px-4 py-3 text-muted">{row.mean}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-muted">
            The ventilation point matters more than most people realize. In many two-story homes, the bathroom fan is ducted through the attic, and a loose duct sends warm, damp air into the insulation instead of outside. Every bathroom we remodel gets a properly sized fan vented to the exterior.
          </p>
        </div>
      </section>

      {/* 5. Refresh, full remodel or layout change */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Refresh, Full Remodel or Layout Change?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Not every Ajax bathroom needs to be gutted. Choosing the right scope is the easiest way to protect your budget.
          </p>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4">
            {scopes.map((item) => (
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
          <p className="mx-auto mt-6 max-w-4xl text-center leading-relaxed text-muted">
            During your consultation, we&apos;ll tell you honestly which one your bathroom needs.
          </p>
        </div>
      </section>

      {/* 6. Cost */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Bathroom Remodel Cost in Ajax</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            These are typical ranges from our recent projects across the GTA. Your quote will be specific to your bathroom.
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

          <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-muted">
            What tends to push an Ajax bathroom toward the higher end? Relocating plumbing, especially a toilet. Swapping a corner tub for a curbless shower with a linear drain. Heated floors, custom niches, frameless glass, and small-format or patterned tile that takes more labor to install. In older homes, subfloor and wiring repairs can add to the total as well.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Frameless glass is measured once the tile is set, so its fabrication time is built into your schedule from day one.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            For a fuller picture, see our{" "}
            <Link className="underline" href="/blog/bathroom-renovation-cost-gta">
              GTA bathroom renovation cost guide
            </Link>{" "}
            and our breakdown of{" "}
            <Link className="underline" href="/blog/how-long-does-bathroom-renovation-take-timeline">
              how long a bathroom renovation takes
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 7. Upgrades */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Upgrades Ajax Homeowners Ask For Most</h2>
          <p className="mt-4 leading-relaxed text-muted">
            <b className="text-brand-dark">Tub-to-shower conversions</b> are the most common request we get in Ajax ensuites. A corner jetted tub that hasn&apos;t been filled in years takes up a surprising amount of floor space, and a walk-in shower with a bench and a niche makes better use of it. If the house has young children or you expect to sell to a family, we&apos;ll suggest keeping a tub in the main bathroom.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            <b className="text-brand-dark">Heated floors</b> make a real difference in a Durham winter. They need their own circuit and thermostat, which we plan at the design stage.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            <b className="text-brand-dark">Double vanities</b> ease the morning rush in busy households. When space is tight, a wider single sink with two faucets or a floating vanity with deep drawers can work just as well. Our guide on{" "}
            <Link className="underline" href="/blog/where-to-buy-bathroom-vanity-gta">
              where to buy a bathroom vanity in the GTA
            </Link>{" "}
            is a useful starting point.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            <b className="text-brand-dark">Aging-in-place features</b> include low or no-threshold showers, comfort-height toilets, and blocking behind the walls for future grab bars. Some accessibility upgrades may qualify for tax credits, covered in our article on{" "}
            <Link className="underline" href="/blog/ontario-home-renovation-tax-credits-rebates-incentives">
              Ontario renovation tax credits and rebates
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 8. Process */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            How Your Bathroom Remodel in Ajax Comes Together
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
            If this is your only full bathroom, it&apos;s worth planning ahead for showers during the remodel. Our article on{" "}
            <Link className="underline" href="/blog/where-do-you-live-during-a-full-home-renovation">
              where to live during a renovation
            </Link>{" "}
            covers practical options, and it&apos;s smart to check{" "}
            <Link className="underline" href="/blog/does-your-home-insurance-cover-a-renovation">
              what your home insurance covers during a renovation
            </Link>{" "}
            before work begins.
          </p>
        </div>
      </section>

      {/* 9. Social proof */}
      <ReviewStrip />

      {/* 10. Townhouses and condo corporations */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Ajax Townhouses and Condominium Corporations</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Many Ajax townhouses belong to a condominium corporation, even when they look like freehold homes from the street. If yours does, the board may need to approve your bathroom remodel, set working hours, and ask for our certificate of insurance. We prepare that paperwork for you so it doesn&apos;t hold up your start date.
          </p>
        </div>
      </section>

      {/* 11. Neighborhoods */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Neighborhoods We Serve in Ajax</h2>
          <p className="mt-4 leading-relaxed text-muted">
            We remodel bathrooms throughout Ajax, including Pickering Beach, South Ajax, Pickering Village, Audley Village, Northeast Ajax, and the homes near the Ajax waterfront. Our showroom is at 3400 14th Ave, Unit 16 in Markham, and we serve homeowners across Durham Region and the GTA.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Looking for help nearby? See our bathroom renovation pages for{" "}
            <Link className="underline" href="/bathroom-renovation/pickering">Pickering</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/scarborough">Scarborough</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/markham">Markham</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/toronto">Toronto</Link> and{" "}
            <Link className="underline" href="/bathroom-renovation/oakville">Oakville</Link>, or browse{" "}
            <Link className="underline" href="/service-areas">all service areas</Link>.
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

      {/* 13. FAQ */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="section-heading text-3xl font-bold text-brand-dark">Bathroom Remodel FAQs</h2>

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

      {/* 14. Other renovation services */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Other Renovation Services in Ajax</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Many Ajax homeowners pair a bathroom with other work. We also handle{" "}
            <a className="underline" href="https://y2designandbuild.com/kitchen-renovation/ajax">kitchen renovations in Ajax</a>,{" "}
            <a className="underline" href="https://y2designandbuild.com/basement-renovation/ajax">basement renovations in Ajax</a> and{" "}
            <a className="underline" href="https://y2designandbuild.com/home-renovation/ajax">full home renovations in Ajax</a>, along with{" "}
            <a className="underline" href="https://y2designandbuild.com/flooring-stairs">flooring</a> that can carry from the bathroom into the hallway. You can also read our{" "}
            <a className="underline" href="https://y2designandbuild.com/bathroom-renovation">GTA bathroom renovation overview</a> or learn more about{" "}
            <a className="underline" href="https://y2designandbuild.com/about">our team</a>.
          </p>
        </div>
      </section>

      {/* 15. Book consultation */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Book Your Free Ajax Bathroom Consultation</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Tell us about the bathroom you&apos;d like to change. We&apos;ll visit, measure and give you an itemized fixed-price quote, with no obligation attached. Call{" "}
            <a className="underline" href="tel:6475073639">(647) 507-3639</a> (English) or{" "}
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