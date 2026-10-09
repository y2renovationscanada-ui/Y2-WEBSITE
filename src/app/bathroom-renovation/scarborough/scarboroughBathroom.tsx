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
  "In-house design, so the layout is settled before materials are purchased",
  "A written fixed price that breaks down every material and labor cost",
  "One Y2 project manager who books the trades, the inspections, and the permits",
  "Service in English and Mandarin, each with its own phone line",
];

const homeAges = [
  {
    label: "1950s and 1960s bungalows in Wexford, Dorset Park, Bendale, Birchcliff and Cliffside",
    text: "often have mortar-set wall tile, which is thick and heavy, steel or cast-iron tubs, cast-iron drains and older galvanized supply lines. Wiring may not be grounded. Demolition takes longer, and plumbing updates are usually worth doing while the walls are open.",
  },
  {
    label: "1960s and 1970s backsplits and semis in Agincourt, L’Amoreaux and Tam O’Shanter",
    text: "commonly have one full bathroom upstairs and a small powder room or nothing at all on the lower levels, which makes a second bathroom a frequent request.",
  },
  {
    label: "1980s to 2000s homes in Malvern, Steeles, Morningside Heights and Rouge",
    text: "typically have sound plumbing but dated builder-grade finishes, such as acrylic tub surrounds and laminate vanities.",
  },
  {
    label: "Lakeside homes near the Scarborough Bluffs, Guildwood and Cliffcrest",
    text: "range from mid-century originals to fully rebuilt custom houses with larger ensuites.",
  },
];

const costRows = [
  {
    scope: "Powder room",
    investment: "$2,500 – $5,000",
    time: "Several days",
    popular: "Converting to a three-piece with a shower",
  },
  {
    scope: "Full bathroom (3 or 4-piece)",
    investment: "$9,800 – $18,000",
    time: "7–10 working days; 10–12 for a four-piece",
    popular: "Removing mortar-set tile, new supply lines",
  },
  {
    scope: "Luxury bathroom or larger ensuite",
    investment: "$18,000 – $35,000",
    time: "2–3 weeks",
    popular: "Heated floors, curbless shower, freestanding tub",
  },
  {
    scope: "Basement bathroom",
    investment: "Quoted individually",
    time: "Varies with drain work",
    popular: "Concrete floor cutting, ejector pump, backwater valve",
  },
];

const handles = [
  "Full gut renovations, taking the room back to the studs and rebuilding it with new waterproofing, tile, and fixtures",
  "Tub-to-shower conversions and walk-in showers, including curbless entries, linear drains, and frameless glass",
  "Freestanding and alcove tubs, with proper floor support and plumbing",
  "Vanities, countertops and storage, from floating vanities to recessed medicine cabinets",
  "Plumbing and electrical updates, such as replacing old supply lines, adding GFCI protection, and installing new circuits",
  "Heated floors, lighting and ventilation, so the room stays warm, bright and moisture-free",
  "Basement and powder room bathrooms, including new drains, ejector pumps and backwater valves",
  "Accessibility features, like low-threshold showers, built-in benches, and grab bar blocking",
];

const processSteps = [
  {
    title: "In-home consultation",
    text: "We measure, open the vanity to check the shut-offs and drain, test the fan, and find out who uses the room and when. It’s free, with no obligation.",
  },
  {
    title: "Design and itemized quote",
    text: "You receive a layout, finish selections, and a fixed price broken down line by line.",
  },
  {
    title: "Permits and preparation",
    text: "If fixtures are moving, we arrange the permit through the City of Toronto. We protect floors and the route to the bathroom before work begins.",
  },
  {
    title: "Demolition and rough-in",
    text: "We remove the old room and install new plumbing, electrical, and ventilation, followed by any required inspections.",
  },
  {
    title: "Waterproofing and tile",
    text: "We seal shower walls and floors with a waterproofing membrane before tile is set.",
  },
  {
    title: "Fixtures and glass",
    text: "We install the vanity, toilet, trim, and shower glass.",
  },
  {
    title: "Final walkthrough",
    text: "You inspect the completed room with your project manager, and we handle any remaining touch-ups before we close out.",
  },
];

const neighborhoods = [
  "Agincourt",
  "Malvern",
  "Scarborough Bluffs",
  "Guildwood",
  "Bendale",
  "Wexford",
  "Dorset Park",
  "Birchcliff",
  "Cliffside",
  "Cliffcrest",
  "L’Amoreaux",
  "Tam O’Shanter",
  "Steeles",
  "Morningside Heights",
  "Highland Creek",
  "West Hill",
  "Rouge",
];

export const faqs = [
  {
    question: "Can I keep my bathroom’s original tile?",
    answer: "Sometimes. Mortar-set tile from the 1950s and 1960s is very durable, and if it’s intact, regrouting and updating the fixtures around it can give it a new life. If tiles are cracked, loose or hollow-sounding, replacement is usually the better choice.",
  },
  {
    question: "Does a basement bathroom need a backwater valve?",
    answer: "It isn’t always mandatory for an existing home, but it is strongly recommended. A backwater valve helps prevent sewage from flowing back into the basement during heavy storms, and the City of Toronto offers a subsidy for eligible installations.",
  },
  {
    question: "Will removing my only bathtub affect resale?",
    answer: "It can. Many families with young children prefer at least one tub in the house. If your main bathroom has the only tub, we’ll talk through whether to keep it or convert a different bathroom instead.",
  },
  {
    question: "Do I need a permit from the City of Toronto?",
    answer: "Not for cosmetic work that leaves fixtures where they are. Moving plumbing, removing walls, adding a bathroom, or adding electrical circuits generally does require a permit, and electrical work must also meet ESA requirements. We’ll confirm what’s needed before work is scheduled.",
  },
  {
    question: "Who will I deal with during the remodel?",
    answer: "One project manager, from the first visit to the final walkthrough. They schedule every trade and keep you informed throughout.",
  },
  {
    question: "Is your team available in Mandarin?",
    answer: "Yes. Dial (647) 294-2888 to speak with Mandarin-speaking team members who can handle your project from consultation to completion.",
  },
];

export default function BathroomScarboroughClient() {
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
                      Scarborough
                    </li>
                  </ol>
                </nav>
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Licensed & Insured · Serving the GTA
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Bathroom Remodel in Scarborough, ON
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                Y2 Design & Build is the design-build team homeowners call when they want their bathroom remodel in Scarborough handled by people who plan it, price it, and build it themselves. From our showroom just north of Scarborough in Markham, we’ve been rebuilding GTA bathrooms for 14+ years.
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
                100+ Google reviews · Free in-home consultations in Scarborough
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
          "500+ projects delivered · Five-star feedback from homeowners on HomeStars, Google, Yelp and Houzz ·
           Licensed, insured, WSIB-covered crews · Free home visit, no obligation" */}
      <TrustBadges />

      {/* 4. Why Scarborough homeowners choose Y2 */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Why Scarborough Homeowners Choose Y2 Design & Build
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Scarborough is one of the areas where we complete the most projects, and many of our largest bathroom remodels have been here. Our Markham showroom is a short drive away, so site visits, material selections, and walkthroughs are easy to arrange. Our project managers already know the City of Toronto permit process and the quirks of Scarborough’s older bungalows and backsplits, and that saves you time before work even starts.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Clients tell us they value how we run the job most. Every bathroom remodel in Scarborough we take on comes with a written, itemized price that holds unless you approve a change. A single project manager answers your calls and keeps the trades on schedule. A crew treats your home with care, protecting floors, containing dust, and cleaning up at the end of each day. Reviewers regularly mention our fair pricing compared with other quotes and how quickly our team responds. Many come back to us for their next project or refer friends and family.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">Book My Free Consultation</QuoteButton>
                <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
                  or call {site.phone}
                </a>
              </div>
            </div>

            <div>
              <img src={images.bathroom2} alt="Bathroom renovation in Scarborough" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Home age */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            What Your Home’s Age Tells Us Before We Start
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Scarborough was largely built between the 1950s and the 2000s, and each period left behind its own kind of bathroom.
          </p>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {homeAges.map((item) => (
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
          <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted">
            Knowing this before demolition lets us price the likely repairs up front instead of surprising you halfway through.
          </p>
        </div>
      </section>

      {/* 6. Basement and secondary suite bathrooms */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Basement and Secondary Suite Bathrooms
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                A large share of Scarborough homes have finished basements, and many include a secondary suite. A basement bathroom has a few requirements that an upstairs one doesn’t.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                Drains below the level of the main sewer line may need a sewage ejector pump, or the concrete floor may need to be cut so a new drain can connect at the right slope. A backwater valve is strongly recommended to protect the space if the municipal sewer backs up, and the City of Toronto offers a subsidy program for eligible flood-protection devices. Ventilation also matters more below grade, since there’s often no window to help clear moisture.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                If the bathroom will serve a rental unit, the suite as a whole must meet Ontario Building Code and fire safety requirements. Our summary of{" "}
                <Link className="underline" href="https://y2designandbuild.com/blog/what-makes-a-basement-apartment-legal-in-ontario">
                  Ontario’s legal basement apartment requirements
                </Link>{" "}
                is a good place to start, and you can see our wider approach on the{" "}
                <Link className="underline" href="/basement-renovation/scarborough">
                  Scarborough basement renovation page
                </Link>
                .
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

      {/* 7. Cost and timeline */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            Timeline and Cost of a Bathroom Remodel in Scarborough
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Every quote is specific to your room, but the ranges below from recent Y2 projects are a reliable guide. In Scarborough’s older homes, costs most often rise because of removing mortar-set tile, replacing galvanized or cast-iron plumbing, or upgrading ungrounded wiring.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-center text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">Room</th>
                  <th className="px-4 py-3 font-semibold">Price range</th>
                  <th className="px-4 py-3 font-semibold">Time on site</th>
                  <th className="px-4 py-3 font-semibold">Often added in Scarborough homes</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, i) => (
                  <tr key={row.scope} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.scope}</td>
                    <td className="px-4 py-3 text-muted">{row.investment}</td>
                    <td className="px-4 py-3 text-muted">{row.time}</td>
                    <td className="px-4 py-3 text-muted">{row.popular}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-muted">
            For a deeper breakdown, see our{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/bathroom-renovation-cost-gta">
              2026 GTA bathroom pricing guide
            </Link>{" "}
            and this{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/how-long-does-bathroom-renovation-take-timeline">
              realistic bathroom renovation timeline
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

      {/* 8. What we handle */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <img src={images.bathroom3} alt="Completed bathroom remodel in Scarborough" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                What We Handle in a Scarborough Bathroom Remodel
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Our team covers every stage of the work, so you don’t need to hire separate trades or chase multiple contractors. A typical bathroom remodel by Y2 Design & Build can include:
              </p>
              <ul className="mt-6 space-y-3">
                {handles.map((item) => (
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
            </div>
          </div>
        </div>
      </section>

      {/* 9. Rental or pre-sale */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Remodeling a Rental or Pre-Sale Bathroom</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Landlords and sellers need a bathroom that looks clean, works reliably, and can be finished without long delays. For such a bathroom remodel in Scarborough, we usually recommend porcelain tile, a solid-surface or quartz vanity top, a tiled shower or a quality acrylic tub surround, and neutral colors that suit the widest range of tastes.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            The aim is a durable room that photographs well and won’t need attention again for years. Before the work begins, it’s sensible to review the{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/does-your-home-insurance-cover-a-renovation">
              insurance questions every homeowner should ask before renovating
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 10. Process */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">From First Visit to Final Walkthrough</h2>
          <ol className="mx-auto mt-10 grid max-w-4xl gap-4">
            {processSteps.map((step, i) => (
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
          </ol>
          <p className="mx-auto mt-6 max-w-4xl text-sm leading-relaxed text-muted">
            If we discover damage behind the walls at any stage, we’ll send you photos and a written price, and that item will proceed only after you sign off.
          </p>
        </div>
      </section>

      {/* 11. Social proof */}
      <ReviewStrip />

      {/* 12. Service areas */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Scarborough Neighborhoods We Serve</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            We remodel bathrooms throughout Scarborough, including Agincourt, Malvern, Scarborough Bluffs, Guildwood, Bendale, Wexford, Dorset Park, Birchcliff, Cliffside, Cliffcrest, L’Amoreaux, Tam O’Shanter, Steeles, Morningside Heights, Highland Creek, West Hill and Rouge.
          </p>


          {/* TODO: replace hrefs with the real city page URLs */}
          <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-muted">
            Close to the border? See our bathroom remodeling pages for{" "}
            <Link className="underline" href="/bathroom-renovation/markham">Markham</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/pickering">Pickering</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/ajax">Ajax</Link>,{" "}
            <Link className="underline" href="/bathroom-renovation/richmond-hill">Richmond Hill</Link> and the rest of{" "}
            <Link className="underline" href="/bathroom-renovation/toronto">Toronto</Link>, or{" "}
            <Link className="underline" href="/service-areas">view every area we cover</Link>.
          </p>
        </div>
      </section>

      {/* 13. More services */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">More Services in Scarborough</h2>
          <p className="mt-4 leading-relaxed text-muted">
            A bathroom often leads to the next project. Explore our{" "}
            {/* TODO: replace hrefs with the real Scarborough service page URLs */}
            <a className="underline" href="https://y2designandbuild.com/kitchen-renovation/scarborough">kitchen renovations in Scarborough</a>{" "}
            or{" "}
            <a className="underline" href="https://y2designandbuild.com/home-renovation/scarborough">Scarborough home renovations</a>,{" "}
            along with{" "}
            <a className="underline" href="https://y2designandbuild.com/flooring">flooring</a>{" "}
            and{" "}
            <a className="underline" href="https://y2designandbuild.com/home-extensions">home additions</a>. Some accessibility upgrades may qualify for support through{" "}
            {/* TODO: replace href with the exact government page */}
            <a
              className="underline"
              href="https://www.ontario.ca"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Ontario’s renovation tax credits and rebates
            </a>
            . You can also read our{" "}
            <a className="underline" href="https://y2designandbuild.com/bathroom-renovation">complete guide to bathroom renovation</a>{" "}
            or find out more about{" "}
            <a className="underline" href="https://y2designandbuild.com/about">who we are</a>.
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
          <h2 className="section-heading text-3xl font-bold text-brand-dark">Bathroom Remodel FAQs</h2>
          <p className="section-sub mt-2 text-muted">
            Common questions from Scarborough homeowners planning a bathroom renovation.
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
          <h2 className="text-3xl font-bold text-brand-dark">Book Your Free Scarborough Consultation</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Let’s look at your bathroom together. We’ll measure, discuss what you’d like to change, and send you a line-by-line fixed-price quote for your bathroom remodel in Scarborough, with no pressure to proceed. Phone{" "}
            <a className="underline" href="tel:6475073639">(647) 507-3639</a> for English or{" "}
            <a className="underline" href="tel:6472942888">(647) 294-2888</a> for Mandarin, write to{" "}
            <a className="underline" href="mailto:info@y2canada.com">info@y2canada.com</a>, or{" "}
            <a className="underline" href="https://y2designandbuild.com/contact">book your visit online</a>.
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