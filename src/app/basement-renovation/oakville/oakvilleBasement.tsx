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
  "In-house designers plan your full layout, from saunas and golf simulators to guest suites and walkouts",
  "Itemized fixed quotes cover every material and labor cost, with change pricing submitted for your approval first",
  "A dedicated Y2 project manager oversees every trade, inspection, and permit, from the Town of Oakville to Conservation Halton",
  "500+ completed GTA projects over 14+ years means low ceilings, damp foundations, and tricky layouts are nothing new to us",
  "Visit our Markham showroom to see and compare flooring, tile and finishes in person before you commit",
];

const basementTypes = [
  {
    title: "The 1980s or 1990s family home in Glen Abbey, River Oaks or Falgarwood",
    finds: <>A basement finished decades ago with carpet over concrete, a drop ceiling, wood-paneled walls or thin{" "}
    <a href="https://en.wikipedia.org/wiki/Drywall" rel="nofollow noreferrer noopener" className="underline" target="_blank"> drywall </a>{" "}
    installed directly over the foundation, and a small three-piece bathroom tucked beside the furnace.
    </>,
    recommends: "Remove the old finishes completely so the foundation walls can be inspected and properly insulated. Replace carpet with a moisture-tolerant floor, rework the layout to suit how the family lives now, and rebuild the bathroom with a real shower and proper exhaust. These homes often have generous square footage, so a media room, guest bedroom, and home office can all fit.",
  },
  {
    title: "The older character home in Old Oakville, Kerr Village or Bronte",
    finds: "Lower ceilings, older stone, block or poured foundations, previous patch repairs, original plumbing and, in some cases, a partial basement or crawlspace beneath part of the house.",
    recommends: "Start with a thorough assessment of moisture and structure. Where headroom is limited, lowering the floor through underpinning or bench footing can turn a low cellar into livable space, though it requires engineering, permits, and a larger budget. When lowering isn’t practical, a well-planned storage, laundry and workshop level can still add real value.",
  },
  {
    title: "The newer home in North Oakville, Joshua Creek or Iroquois Ridge",
    finds: "An unfinished basement with clean concrete, a builder-installed bathroom rough-in, good natural light from lookout windows on some lots and, on ravine or sloped lots, the possibility of a walkout.",
    recommends: "Plan the full layout before building anything, because these spaces are a blank canvas. We often design around a future-ready approach: a guest suite with a full bathroom, a recreation area, and specialty rooms, with conduit and blocking installed now for features you may add later.",
  },
];

const specialtySpaces = [
  {
    title: "Home saunas",
    text: "An electric sauna heater typically needs its own high-capacity circuit. The room requires a foil vapor barrier behind cedar or hemlock paneling, a planned air intake and exhaust, and ideally a tiled floor with nearby shower access.",
  },
  {
    title: "Golf simulators",
    text: "A full swing usually needs a ceiling of roughly nine feet or more, plus enough width and depth for the impact screen, hitting mat, and safe clearance. We plan projector mounting, wiring, lighting, and impact-resistant wall protection, and assess whether underpinning is needed to reach the required height.",
  },
  {
    title: "Guest and nanny suites",
    text: (
      <>
        A private bedroom, full bathroom, kitchenette, and separate thermostat zone give a live-in caregiver or visiting family comfort and independence. If a parent or relative will move in, some costs may qualify for support described in our article on{" "}
        <a className="underline" href="https://y2designandbuild.com/blog/ontario-home-renovation-tax-credits-rebates-incentives">
          federal and Ontario renovation credits
        </a>
        .
      </>
    ),
  },
  {
    title: "Home spa bathrooms",
    text: "Heated floors, a large walk-in shower, a soaking tub and calming lighting create a retreat that sits naturally beside a sauna or gym.",
  },
  {
    title: "Mudrooms and pet-washing stations",
    text: (
      <>
        For homes with a walkout or side entrance, a durable tiled mudroom with a raised dog-wash shower keeps the rest of the house clean. Our{" "}
        <a className="underline" href="https://y2designandbuild.com/flooring">flooring specialists</a>{" "}
        can recommend surfaces that handle wet boots and paws.
      </>
    ),
  },
];

const costRows = [
  {
    scope: "Refinishing a dated basement with new layout and finishes",
    position: "Lower to middle of the range",
    notes: "Removing old finishes, insulation, flooring, lighting",
  },
  {
    scope: "Finished basement with guest suite and full bathroom",
    position: "Middle to upper range",
    notes: "New bathroom, egress window, sound control",
  },
  {
    scope: "Luxury lower level with sauna, simulator or bar",
    position: "Upper end and beyond",
    notes: "Dedicated circuits, specialty materials, custom millwork",
  },
  {
    scope: "Walkouts, underpinning or Conservation Halton work",
    position: "Priced case by case",
    notes: "Structural design, digging and extra sign-offs",
  },
];

const projectSteps = [
  {
    title: "Free site assessment",
    text: "We visit your home, measure the basement, check the foundation, ceiling height, and mechanical equipment, and talk through what you want the space to do for your family.",
  },
  {
    title: "Design and fixed, itemized quote",
    text: "Our team prepares a layout and a line-by-line price covering materials and labor, so you know the full cost before committing.",
  },
  {
    title: "Approvals handled for you",
    text:
   <>
        Once you sign off, your project manager secures the Town of Oakville
        <a href="https://www.oakville.ca/home-environment/building-renovations/building-permits-inspections/" className="underline" target="_blank" rel="nofollow noopener noreferrer">building permit</a>{" "}
        , plus any Conservation Halton approval or engineering needed for walkouts and structural work.
      </>
  },
  {
    title: "Scheduled, coordinated construction",
    text: (
      <>
        Your project manager books each trade in the right order, from framing and rough-ins to drywall and finishes, and arranges every required inspection, including the{" "}
        <a href="https://esasafe.com/" className="underline" target="_blank" rel="nofollow noopener noreferrer">ESA</a>{" "}
        inspection of the electrical work.
      </>
    ),
  },
  {
    title: "No surprise costs",
    text: "If we uncover a hidden issue once old finishes come down, we photograph it and give you a written price before any work on it goes ahead.",
  },
  {
    title: "Final review and permit closeout",
    text: "We inspect the finished basement with you, take care of any last details, and formally close the permit.",
  },
];

export const faqs = [
  {
    question: "Can I add a sauna during my basement renovation in Oakville?",
    answer: "Yes. We plan the dedicated electrical circuit, vapor barrier, ventilation and finishes as part of the design, and we often pair the sauna with a nearby shower or spa bathroom.",
  },
  {
    question: "Is my basement tall enough for a golf simulator?",
    answer: "Most simulators need roughly nine feet or more of ceiling height for a full swing. We’ll measure your space and explain whether lowering the floor is required.",
  },
  {
    question: "Do I need approval from Conservation Halton?",
    answer: "Only if your property is within a regulated area and the project includes exterior work such as excavation or a walkout. Interior finishing alone generally doesn’t require it. We’ll check your address during design.",
  },
  {
    question: "Can you convert my lookout basement into a walkout?",
    answer: "Often, yes, depending on the grade of your yard, the foundation and any regulatory limits. It requires engineering, excavation and permits, which we coordinate for you.",
  },
  {
    question: "What’s the best use for a basement with low ceilings?",
    answer: "If underpinning isn’t practical, the space can still work well for storage, laundry, a workshop or a wine cellar. We’ll show you the options at different budget levels.",
  },
];

export default function BasementRenovationOakvilleClient() {
  const tel = `tel:${site.phone.replace(/\D/g, "")}`;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <Header />

      {/* 1. Value-driven hero */}
      <section className="relative min-h-[480px] overflow-hidden bg-brand-dark text-white">
        <Image
          src={basementImages.hero}
          alt="Basement renovation project by Y2 Design & Build in Oakville"
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
                      Oakville
                    </li>
                  </ol>
                </nav>
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Licensed & Insured · Serving the GTA
              </p>
              <h1 className="text-lg font-bold leading-tight sm:text-4xl lg:text-4xl">
                Basement Renovation in Oakville, ON
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                Oakville homes often have more potential below grade than their owners realize. With <a href="https://y2designandbuild.com/" className="underline">Y2 Design & Build</a>, one design-build team shapes your basement renovation in Oakville. We draw it, price it to the line item, and build it with our own project manager in charge from the first site visit to handover.
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
          "Licensed, insured and WSIB-covered · 500+ GTA projects over 14+ years ·
           Top-rated by homeowners on Houzz, Yelp, HomeStars and Google · Free consultation ·
           Call (647) 507-3639, or (647) 294-2888 for Mandarin" */}
      <TrustBadges />

      {/* 3. Three Oakville basements (intro + cards) */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">Three Oakville Basements, Three Very Different Plans</h2>
              <p className="mt-4 leading-relaxed text-muted">
                No two projects start from the same place, and every basement renovation in Oakville we take on begins with understanding the house itself. These are three situations we at <a href="/" className="underline">Y2 Design & Build</a> encounter regularly across Oakville, and how each one usually unfolds.
              </p>

              <h3 className="mt-6 text-lg font-bold text-brand-dark">{basementTypes[0].title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                <b className="text-brand-dark">What we typically find:</b> {basementTypes[0].finds}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                <b className="text-brand-dark">What we usually recommend:</b> {basementTypes[0].recommends}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">Book My Free Consultation</QuoteButton>
                <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
                  or call {site.phone}
                </a>
              </div>
            </div>

            <div>
              <img src={basementImages.intro} alt="Basement renovation in Oakville" />
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {basementTypes.slice(1).map((item) => (
              <div key={item.title} className="card bg-white p-6">
                <h3 className="text-lg font-bold text-brand-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  <b className="text-brand-dark">What we typically find:</b> {item.finds}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  <b className="text-brand-dark">What we usually recommend:</b> {item.recommends}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Specialty spaces */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Specialty Spaces Oakville Clients Ask For</h2>
          <p className="mx-auto mt-4 max-w-5xl text-center leading-relaxed text-muted">
            A basement renovation in Oakville frequently goes beyond a rec room. These are some of the specialty spaces we design and build, and what each one needs behind the scenes:
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {specialtySpaces.map((item) => (
              <div key={item.title} className="card bg-surface p-6">
                <h3 className="text-lg font-bold text-brand-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Walkout */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Adding a Walkout to Your Lower Level</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Many Oakville properties, particularly those backing onto ravines or with sloping rear yards, can support a walkout basement. Creating one usually involves excavating the yard, cutting a new opening in the foundation wall with an engineered header, installing an exterior door, building retaining walls or stairs, and managing drainage so water flows away from the new entry.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Properties near Sixteen Mile Creek, Fourteen Mile Creek, Bronte Creek and their valleys may fall within areas regulated by{" "}
            <a href="https://www.conservationhalton.ca/" rel="nofollow noopener noreferrer" className="underline" target="_blank">Conservation Halton</a>
            , where exterior grading and excavation can require a separate permit in addition to the <a href="https://www.oakville.ca/home-environment/building-renovations/building-permits-inspections/building-permits/" rel="nofollow noopener noreferrer" className="underline" target="_blank">Town of Oakville</a> building permit. We review this early so approvals don’t hold up your schedule. A walkout is a significant investment, but it can bring daylight, a direct connection to the yard, and a far more inviting lower level, which is why it’s one of the most transformative additions to a basement renovation in Oakville.
          </p>
        </div>
      </section>

      {/* 7. Cost and timeline */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">
            What a Basement Renovation in Oakville Costs and How Long It Takes
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Y2’s pricing for Oakville lower levels usually lands between $50 and $120 per finished square foot, with the plan, any dampness that has to be corrected and your choice of materials setting the final figure. On site, a typical finishing job runs four to eight weeks, and the permit and project size determine where yours falls in that window. Our{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/how-much-does-basement-renovation-cost-gta">
              GTA basement cost breakdown
            </Link>{" "}
            explains the factors in more detail.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-center text-sm">
              <thead>
                <tr className="bg-brand-dark text-white">
                  <th className="px-4 py-3 font-semibold">Scope</th>
                  <th className="px-4 py-3 font-semibold">Typical position in our pricing</th>
                  <th className="px-4 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, i) => (
                  <tr key={row.scope} className={i % 2 === 0 ? "bg-white" : "bg-surface"}>
                    <td className="px-4 py-3 font-semibold text-brand-dark">{row.scope}</td>
                    <td className="px-4 py-3 text-muted">{row.position}</td>
                    <td className="px-4 py-3 text-muted">{row.notes}</td>
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

      {/* 8. How we run your project */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">How We Run Your Project</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Every basement renovation in Oakville we deliver follows the same clear sequence:
          </p>
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
            If your plans include a rental or family suite, our article on{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/what-makes-a-basement-apartment-legal-in-ontario">
              legal basement apartments in Ontario
            </Link>{" "}
            outlines the code requirements, and our guide on{" "}
            <Link className="underline" href="https://y2designandbuild.com/blog/do-you-need-a-permit-to-finish-your-basement-in-markham">
              when a basement project needs a permit
            </Link>{" "}
            explains what typically triggers one.
          </p>
        </div>
      </section>

      {/* 9. Social proof */}
      <ReviewStrip />

      {/* 10. Areas served */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Areas We Serve in Oakville</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            We complete basement projects throughout Oakville, including Glen Abbey, River Oaks, Old Oakville, Kerr Village, Bronte, Falgarwood, Iroquois Ridge, Joshua Creek, West Oak Trails, Clearview, Eastlake, and the newer neighborhoods of North Oakville.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-center leading-relaxed text-muted">
            For other work in Oakville, visit our pages on{" "}
            <Link className="underline" href="https://y2designandbuild.com/kitchen-renovation/oakville">Oakville kitchen design and renovation</Link>,{" "}
            <Link className="underline" href="https://y2designandbuild.com/bathroom-renovation/oakville">bathroom remodeling in Oakville</Link> and{" "}
            <Link className="underline" href="https://y2designandbuild.com/home-renovation/oakville">whole-home projects in Oakville</Link>. Elsewhere in the GTA, our basement teams also serve{" "}
            <Link className="underline" href="https://y2designandbuild.com/basement-renovation/markham">Markham</Link>,{" "}
            <Link className="underline" href="https://y2designandbuild.com/basement-renovation/toronto">Toronto</Link>,{" "}
            <Link className="underline" href="https://y2designandbuild.com/basement-renovation/scarborough">Scarborough</Link>,{" "}
            <Link className="underline" href="https://y2designandbuild.com/basement-renovation/pickering">Pickering</Link> and{" "}
            <Link className="underline" href="https://y2designandbuild.com/basement-renovation/ajax">Ajax</Link>, and the full map of communities we cover is on our{" "}
            <Link className="underline" href="/service-areas">service areas page</Link>. For a wider look at what we offer below grade, see our{" "}
            <a className="underline" href="https://y2designandbuild.com/basement-renovation">GTA basement services</a>.
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
                   <QuoteButton className="btn-primary cursor-pointer">Start My Home Renovation Quote</QuoteButton>
                 </div>
               </div>
             </section>

      {/* 11. FAQ */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl">
          <h2 className="section-heading text-3xl font-bold text-brand-dark">Frequently Asked Questions</h2>
          <p className="section-sub mt-2 text-muted">
            Common questions from Oakville homeowners planning a basement renovation.
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

      {/* 12. Start planning */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Start Planning Your Oakville Lower Level</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Tell us what you’d love to have downstairs, whether it’s a sauna, a simulator, a guest suite or simply a warm, bright family room. We’ll assess your basement, explain what’s possible, and send a detailed fixed quote with no obligation. Phone us on{" "}
            <a className="underline" href="tel:6475073639">(647) 507-3639</a>, or on{" "}
            <a className="underline" href="tel:6472942888">(647) 294-2888</a> if you’d prefer Mandarin. Email us at{" "}
            <a className="underline" href="mailto:info@y2canada.com">info@y2canada.com</a>, or share your project details through our{" "}
            <a className="underline" href="https://y2designandbuild.com/contact">website</a>. Curious about who we are? Meet the{" "}
            <a className="underline" href="https://y2designandbuild.com/about">Y2 team</a> before your visit.
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