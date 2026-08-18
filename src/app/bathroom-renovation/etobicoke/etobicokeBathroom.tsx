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

export const faqs = [
  {
    question: "What does bathroom renovation in Etobicoke typically cost?",
    answer: "Costs vary depending on the scope of work. Powder rooms generally fall between $2,500 and $5,000, standard full bathrooms between $9,800 and $18,000, and higher-end luxury bathrooms between $18,000 and $35,000. Your final quote will reflect the specific details of your project." },
  {
    question: "How long will my bathroom renovation take?",
    answer: "Timelines depend on the size and complexity of the project. Most standard renovations are completed in around 7–10 days. Four-piece bathrooms typically require 10–12 days, and larger or more involved luxury renovations may take 2–3 weeks."
  },
  {
    question: "What kinds of bathrooms do you work on in Etobicoke?",
    answer: "We offer bathroom renovation in Etobicoke for all types, including primary bathrooms, ensuites, family bathrooms, guest bathrooms, and powder rooms. Projects can range from updating finishes and fixtures to a full structural rebuild."
   },
  {
    question: "Can my bathroom be made more accessible during a renovation?",
    answer: "Yes. Depending on the layout and available space, we can incorporate accessibility-focused features such as open shower configurations, easier-to-reach fixtures, grab-bar reinforcement, and improved lighting." 
  },
  {
    question: "Do you work on bathrooms in older Etobicoke homes?",
    answer: "Yes. We're experienced working in older properties, where renovations can involve aging plumbing, outdated electrical systems, ventilation concerns, or previous alterations. We assess the space thoroughly before defining the scope of work."
  },
  {
    question: "Can I have a modern bathroom that still feels warm and liveable?",
    answer: "Absolutely. Modern design doesn't have to mean cold or stark. We can help you select contemporary fixtures and finishes while incorporating warmer materials, textures, and thoughtful storage to create a space that suits your home." 
  },
  {
    question: "Is it worth upgrading lighting and ventilation during a bathroom renovation?",
    answer: "In many cases, yes. Since walls and ceilings are often opened during a renovation, it can be a practical time to address lighting, ventilation, and other underlying systems. Whether this makes sense for your project will depend on what's already in place and the overall scope of the renovation."
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
          alt={`Bathroom Renovation project by Y2 Design & Build in the GTA`}
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
                      Etobicoke                    </li>
                  </ol>
                </nav>


              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Licensed & Insured · Serving the GTA
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
Bathroom Renovation in Etobicoke, ON
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
Give your bathroom a considered redesign with Y2 Design & Build. We handle planning, construction, materials, and finishing so one experienced team manages your renovation.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-2 text-sm text-white/90 sm:text-base">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white" aria-hidden="true"
                  >
                    ✓
                  </span>
Full bathroom renovations and complete interior upgrades                </li>
                <li className="flex items-start gap-2 text-sm text-white/90 sm:text-base">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white" aria-hidden="true">
                    ✓
                  </span>
                  Custom showers, tubs, vanities, tile, flooring, and fixtures
                </li>
                <li className="flex items-start gap-2 text-sm text-white/90 sm:text-base">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white" aria-hidden="true"
                  >
                    ✓
                  </span>
                  Detailed quotes and free, no-obligation consultations
                </li>
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <QuoteButton className="btn-primary cursor-pointer text-center">
                  Get My Free Etobicoke Quote
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

      {/* 4. Local trust intro */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
Complete Bathroom Renovation in Etobicoke
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
Y2 Design & Build works with Etobicoke homeowners on renovations ranging from focused updates to complete bathroom rebuilds. An outdated bathroom may have an inefficient floor plan, insufficient storage, worn flooring, old fixtures, poor lighting, or finishes that no longer suit the property. A well-planned renovation lets you address these issues together, rather than replacing individual components.
              </p>
                <p className="mt-4 leading-relaxed text-muted">
Our bathroom renovation in Etobicoke covers the major stages of the project, including planning, material selection, demolition, construction, installation, and finishing. Whether you are renovating a primary ensuite, family bathroom, guest bathroom, or powder room, we start by assessing the space and understanding what you want to accomplish.
              </p>
              

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">
                  Book My Free Etobicoke Consultation
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
              <img src={images.bathroom2} alt="Bathroom renovation" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process */}
      <ThreeStepProcess />

      {/* Cost */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <img
                src={images.bathroom3}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
Bathroom Renovation Etobicoke Cost & Timeline
              </h2>

              <h3 className="text-2xl font-bold text-brand-dark mt-4">
                Average Cost
              </h3>

              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <b>Powder rooms:</b> $2,500–$5,000
                </li>
                <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <b>Full bathrooms:</b> $9,800–$18,000
                </li>
                <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <b>Luxury bathrooms:</b>  $18,000–$35,000

                </li>

              </ul>
              <h3 className="text-2xl font-bold text-brand-dark mt-6">
                Typical Timeline
              </h3>

              <p className="mt-4 leading-relaxed text-muted">
A standard bathroom renovation generally takes 7–10 days. Four-piece bathroom projects typically require 10–12 days, while more extensive luxury renovations can take approximately 2–3 weeks.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
Call <a className="underline" href="tel:6475073639">(647) 507-3639</a> to request a free consultation to receive a project-specific estimate and expected schedule.
              </p>

            </div>

          </div>
        </div>
      </section>


      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Our Process for Bathroom Renovation in Etobicoke
              </h2>
              <p className="mt-2 leading-relaxed text-muted">
A bathroom may be one of the smaller rooms in a home, but renovating it can involve plumbing, electrical work, waterproofing, carpentry, tile installation, flooring, fixtures, and finishing work. We approach these elements as parts of one project rather than isolated jobs.
              </p>
              <p className="mt-2 leading-relaxed text-muted">
Your <a className="underline" href="https://y2designandbuild.com/bathroom-renovation">bathroom renovation</a> may include:
              </p>

              <ul className="mt-6 space-y-2">
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Existing bathroom assessment
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Space planning and measurements
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Layout revisions
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Design consultation
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Plumbing upgrades or relocation
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Electrical and lighting work
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Shower and bathtub installation
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Waterproofing
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Wall and floor tile installation
                </li>
                <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Vanity and countertop installation
                </li>
                 <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Toilet and sink installation
                </li>
                 <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Bathroom flooring
                </li>
                 <li className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> Permit coordination when required
                </li>
              </ul>

              <p className="mt-2 leading-relaxed text-muted">
This approach makes the finished room feel like a complete space. Fixture placement, storage, lighting, tile, flooring, and finishes can all be selected with the overall design in mind. For homeowners interested in bathroom renovation in Etobicoke, that level of coordination can make a significant difference in both the construction process and the final result.
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
                alt="Bathroom project"
              />
            </div>
          </div>
        </div>
      </section>


      {/* 7. Social proof */}
      <ReviewStrip />

      {/* 6. Service Areas */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-brand-dark">
Etobicoke Areas We Serve
          </h2>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              "Islington",
              "Mimico",
              "The Kingsway",
              "Alderwood",
              "Long Branch",
              "Humber Valley",
              "Village",
              "West Deane",
            ].map((city) => (
              <div key={city} className="card flex items-start gap-3 p-4">
                <span className="text-brand" aria-hidden="true">
                  ✓
                </span>
                <span className="text-sm text-muted">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface section-pad">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-dark">
            Who We Work With
          </h2>
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                aria-hidden="true"
              >
                ✓
              </span>
              <b>Homeowners:</b> Living space, offices, gyms and media rooms.
            </li>
            <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                aria-hidden="true"
              >
                ✓
              </span>
              <b>Multigenerational households:</b> In-law and nanny suites with proper separation.

            </li>
            <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                aria-hidden="true"
              >
                ✓
              </span>
              <b>Landlords and property investors:</b> Second units, where the property and the rules allow.

            </li>
            <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                aria-hidden="true"
              >
                ✓
              </span>
              <b>Growing families:</b> somewhere for everyone to be, without moving house.

            </li>
          </ul>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="section-heading">What You Can Expect from Y2 Design & Build</h2>
          <p className="section-sub">Clear communication and a tidy job site, from day one to handover.</p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-3">
            {projectDetails.map((detail) => (
              <div key={detail} className="flex items-start gap-3 rounded-xl bg-surface px-5 py-4">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">✓</span>
                <p className="text-sm leading-relaxed text-muted">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad bg-brand-dark text-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold">
            Gallery Of Recent Projects
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="https://y2designandbuild.com/images/bathroom-gall-1.webp"
                alt="gallery photo — Y2 Design & Build GTA"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="https://y2designandbuild.com/images/bathroom-gall-10.webp"
                alt="gallery photo — Y2 Design & Build GTA"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="https://y2designandbuild.com/images/bathroom-palmer-1.webp"
                alt="gallery photo — Y2 Design & Build GTA"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="https://y2designandbuild.com/images/bathroom-3.webp"
                alt="gallery photo — Y2 Design & Build GTA"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="https://y2designandbuild.com/images/bathroom.webp"
                alt="gallery photo — Y2 Design & Build GTA"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="https://y2designandbuild.com/images/bathroom-palmer-2.webp"
                alt="gallery photo — Y2 Design & Build GTA"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
          <div className="mt-10 text-center">
            <QuoteButton className="btn-primary cursor-pointer">
              Start My Bathroom Renovation Quote
            </QuoteButton>
          </div>
        </div>
      </section>


      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl">
          <h2 className="section-heading text-3xl font-bold text-brand-dark">Frequently Asked Questions</h2>
          <p className="section-sub mt-2 text-muted">Common questions from Etobicoke homeowners about bathroom remodeling projects.</p>

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

      <QuoteForm />
      <Footer />
    </>
  );
}