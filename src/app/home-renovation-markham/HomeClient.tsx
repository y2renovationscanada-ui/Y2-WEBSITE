"use client";

import React, { useState } from "react";
import Image from "next/image";
import { site, images } from "@/lib/content";
import { QuoteButton } from "../../components/QuoteModal";
import ReviewStrip from "../../components/ReviewStrip";
import LpHeader from "../../components/LpHeader";
import LpFooter from "../../components/LpFooter";

const heroBullets = [
  "Free in-home consultation",
  "Fixed-price quote",
  "One in-house team",
  "Proper waterproofing",
  "Finished in 2 to 3 weeks",
  "Licensed, insured and WSIB-covered",
];

const expectations = [
  "A plan for the whole house, even if the work happens in phases",
  "Consistent finishes, materials and detailing throughout",
  "Quality materials and tools, with meticulous attention to detail",
  "Layouts that fix how the house actually flows, not just how it looks",
];

const steps = [
  {
    title: "We Listen",
    text: "What works about the house, what does not, and what you are trying to get to. Whole-home projects need that conversation properly, not briefly.",
  },
  {
    title: "We Design",
    text: "Our in-house team plans the whole scope, so the phases fit together instead of fighting each other.",
  },
  {
    title: "We Agree The Scope And The Quote",
    text: "You get the scope and a quote broken down room by room, so you can see where the money is going and adjust before committing. Free, and with no obligation.",
  },
  {
    title: "We Build",
    text: "Phased so you know which rooms are usable and when, with one team running all of it.",
  },
  {
    title: "We Walk It Together",
    text: "We go through the finished house with you and deal with the list before we call it done.",
  },
];

const experience = [
  {
    title: "One Team, Start to Finish",
    text: "Concept, design, construction and final walkthrough handled in-house. On a whole-home project this is the single biggest difference: you have one number to call about every part of it.",
  },
  {
    title: "A Free Consultation, With No Strings",
    text: "Free, no-obligation consultation and quote. On a project this size, the planning conversation is worth having even if you are still a year away from starting.",
  },
  {
    title: "Communication You Do Not Have To Chase",
    text: "One project manager is your point of contact for the whole house, from consultation to walkthrough. On long projects, that is what keeps you from wondering what is happening.",
  },
  {
    title: "Craftsmanship That Holds Up",
    text: "Craftsmanship and attention to detail are the two things clients raise most often in our reviews. Across a whole house, consistency is the harder version of that.",
  },
];

const localJobs = [
  "Whole-home renovations in Unionville and Markham Village",
  "Main-floor reconfiguration and wall removal in 1980s and 90s builds",
  "Multi-room projects in Cornell, Wismer and Greensborough",
  "Additions and ADU builds across Markham",
];

const whoWeWorkWith = [
  { label: "Homeowners:", text: "Whole-home renovations and multi-room projects." },
  {
    label: "Growing and multigenerational families:",
    text: "Reworking a house you would rather not leave, including in-law suites and main-floor bedrooms.",
  },
  {
    label: "Landlords and property investors:",
    text: "Full property renovations and unit upgrades.",
  },
  {
    label: "Commercial and retail spaces:",
    text: "We handle commercial renovation alongside residential.",
  },
];

const commitments = [
  "One accountable team for the whole house, not one per room",
  "A plan for the full scope, even when the work is phased",
  "Quality materials and meticulous attention to detail",
  "A team that listens, communicates and follows through",
  "Clear communication from the first call to the final walkthrough",
];

const faqs = [
  {
    question: "How much does a full home renovation cost in Markham?",
    answer: "It depends on how many rooms are involved and how much the layout changes. After the free consultation you get a fixed quote broken down room by room, so you can adjust the scope before committing.",
  },
  {
    question: "How does the 15% saving work?",
    answer: "It applies to full home renovations booked through this page. The saving is shown in your written quote.",
  },
  {
    question: "Can we live in the house during the renovation?",
    answer: "Often, yes. We phase the work so you know which rooms are usable and when. If moving out for part of the project makes more sense, we tell you at the consultation.",
  },
  {
    question: "Do you handle design, permits and all the trades?",
    answer: "Yes. Design, permits, plumbing, electrical, carpentry and finishing are handled by our team under one contract.",
  },
  {
    question: "Can we do the renovation in phases?",
    answer: "Yes. We plan the whole house first, then build in the order that suits your budget and schedule.",
  },
  {
    question: "Is the consultation really free?",
    answer: "Yes. The in-home consultation and quote are free, with no obligation to go ahead.",
  },
];

const tiktokVideos = [
  "7691072187901644038",
  "7618610371141700872",
  "7656088874388655368",
];

const tiktokProfile = "https://www.tiktok.com/@y2.designbuild";

// Use whole-home and multi-room project photos here, with before and after pairs where available.
const galleryImages = [
  "home-gall-1",
  "home-gall-2",
  "home-gall-3",
  "home-gall-4",
  "home-gall-5",
  "home-gall-6",
  "home-gall-7",
  "home-gall-8",
  "home-gall-9",
  "home-gall-10",
  "home-gall-11",
  "home-gall-12",
];

function Check({ variant = "light" }: { variant?: "light" | "accent" }) {
  return (
    <span
      className={
        variant === "accent"
          ? "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white"
          : "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
      }
      aria-hidden="true"
    >
      ✓
    </span>
  );
}

export default function HomeClient({
  items = faqs,
}: {
  items?: typeof faqs;
}) {
  const tel = `tel:${site.phone.replace(/\D/g, "")}`;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <LpHeader />

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-brand-dark text-white">
        <Image
          src="https://y2designandbuild.com/images/home-renovation-ai.webp"
          alt="Whole-home renovation by Y2 Design & Build in Markham"
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/50" />

        <div className="container-page relative flex min-h-[520px] items-center py-16">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Searching for home renovation Markham?
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Save 15% On Your Full Home Renovation
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
              One in-house team plans and builds every room under a single contract.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-1">
              {heroBullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-white/90 sm:text-base">
                  <Check variant="accent" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <QuoteButton className="btn-primary cursor-pointer text-center">
                CLAIM MY 15% SAVING
              </QuoteButton>
              <a href={tel} className="btn-outline-light text-center">
                Call {site.phone}
              </a>
            </div>
            <p className="mt-5 text-sm text-white/80">
              <span className="font-bold text-accent">★★★★★ 5.0</span> from 100+ Google reviews · Free
              itemized quotes
            </p>
          </div>
        </div>
      </section>

      {/* 2. Offer strip */}
      <section className="bg-accent py-8 text-center text-white" aria-label="Current offer">
        <div className="container-page max-w-4xl">
          <p className="text-2xl font-bold">Save 15% On Full Home Renovation</p>
          <p className="mt-2 text-sm leading-relaxed opacity-90 sm:text-base">
            Book your free in-home consultation and get 15% off your full home renovation. No cost, no
            obligation, and no follow-up pressure if the numbers don't work for you.
          </p>
          
          <QuoteButton className="mt-5 inline-block cursor-pointer rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-dark transition hover:bg-white/90">
            GET MY 15% OFF QUOTE
          </QuoteButton>
          <p className="mt-2 text-xs opacity-80">Applies to full home renovations. Conditions apply.</p>
        </div>
      </section>


      {/* 4. Whole-home intro */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Same Street, Same Schools, Completely Different Home
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Renovated room by room over a decade, a house ends up as a collection of separate
                decisions: three different floor finishes, four different trim profiles, a kitchen that
                does not talk to the dining room. Planning the whole thing at once avoids all of that.
              </p>
              <p className="mt-4 font-bold text-brand-dark">Expect:</p>
              <ul className="mt-4 space-y-3">
                {expectations.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 leading-relaxed text-muted">
                Because the goal is a house that feels considered, not a house that feels renovated.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">
                  SEE WHAT MY RENOVATION WOULD COST
                </QuoteButton>
                <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
                  or call {site.phone}
                </a>
              </div>
            </div>

            <div className="card relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/home-gall-1.webp"
                alt="Renovated home interior by Y2 Design & Build in Markham"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">What Working With Us Feels Like</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="card bg-white p-6 text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand text-base font-bold text-white">
                  {i + 1}
                </span>
                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-accent">Step {i + 1}</p>
                <h3 className="mt-1 text-lg font-bold text-brand-dark">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <QuoteButton className="btn-primary cursor-pointer">BOOK MY FREE CONSULTATION</QuoteButton>
            <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
              or call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 6. Premium experience */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <img
                src="https://y2designandbuild.com/images/basement-gall-1.webp"
                alt="Finished renovation by Y2 Design & Build"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">A Premium Experience: From Start to Finish</h2>
              {experience.map((item) => (
                <React.Fragment key={item.title}>
                  <h3 className="mt-4 text-xl font-bold text-brand-dark">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
                </React.Fragment>
              ))}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">Book My Free Consultation</QuoteButton>
                <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
                  or call {site.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Social proof
          NOTE: in components/ReviewStrip set the heading to "Markham Homeowners Rate Us 5 Stars"
          and the featured quote to "Finished exactly on schedule and within budget." (Marc, Markham).
          Show each review once, leading with multi-room and Markham projects.
          Swap the pull-quote for a whole-home review if you have one. */}
      <ReviewStrip />

      {/* 8. Local Markham team */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Your Local Markham Renovation Team</h2>
          <p className="mx-auto mt-4 max-w-4xl text-center leading-relaxed text-muted">
            Our showroom is at 3400 14th Ave, Unit 16, so in Markham we are working in our own
            neighbourhood. Markham has a lot of solid, well-built houses on good lots that have not been
            touched since they were finished. Renovating is often the better return compared to buying
            up in the same neighbourhood.
          </p>
          <p className="mt-8 text-center font-bold text-brand-dark">What we most often work on in Markham:</p>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {localJobs.map((item) => (
              <li key={item} className="card flex items-start gap-3 p-4 text-sm leading-relaxed text-muted">
                <Check />
                {item}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-6 max-w-6xl text-center leading-relaxed text-muted">
            We cover Unionville, Cornell, Berczy Village, Wismer, Greensborough, Cathedraltown, Angus
            Glen, Markham Village and Milliken Mills.
          </p>
        </div>
      </section>

      {/* 9. Who we work with */}
      <section className="section-pad bg-white">
        <div className="container-page max-w-3xl">
          <h2 className="text-2xl font-bold text-brand-dark">Who We Work With</h2>
          <ul className="mt-6 space-y-3">
            {whoWeWorkWith.map((item) => (
              <li key={item.label} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                <Check />
                <span>
                  <b>{item.label}</b> {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 10. Watch us work (TikTok) */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">See a Home Come Together</h2>
          <p className="mx-auto mt-4 max-w-4xl text-center leading-relaxed text-muted">
            Real projects, filmed on site by our team. Watch the demolition, the rebuild and the finished
            rooms, all handled by the same people from start to finish.
          </p>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tiktokVideos.map((id, i) => (
              <div
                key={id}
                className="card relative mx-auto aspect-[9/16] w-full max-w-[340px] overflow-hidden bg-black"
              >
                <iframe
                  src={`https://www.tiktok.com/player/v1/${id}?description=0&music_info=0&rel=0`}
                  title={`Y2 Design & Build home renovation video ${i + 1}`}
                  loading="lazy"
                  allow="fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <QuoteButton className="btn-primary cursor-pointer">CLAIM MY 15% SAVING</QuoteButton>
            <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
                  or call {site.phone}
                </a>
          </div>
        </div>
      </section>

      {/* 11. Gallery */}
      <section className="section-pad bg-brand-dark text-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold">Recent Home Renovation Projects</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((name) => (
              <div key={name} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={`https://y2designandbuild.com/images/${name}.webp`}
                  alt="Home renovation project by Y2 Design & Build in the GTA"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <QuoteButton className="btn-primary cursor-pointer">START MY HOME RENOVATION QUOTE</QuoteButton>
          </div>
        </div>
      </section>

      {/* 12. Our commitment */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">Our Commitment</h2>
              <p className="mt-4 leading-relaxed text-muted">
                It is not really about price. It is about whether the people in your house know what they
                are doing and tell you the truth. You can expect:
              </p>
              <ul className="mt-6 space-y-3">
                {commitments.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 leading-relaxed text-muted">
                A house done as one project feels different from a house done in pieces. That is what we
                are after.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">Book My Free Consultation</QuoteButton>
                <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
                  or call {site.phone}
                </a>
              </div>
            </div>

            <div>
              <img src={images.kitchen} alt="Completed kitchen renovation by Y2 Design & Build" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* 13. FAQ */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl">
          <h2 className="section-heading text-3xl font-bold text-brand-dark">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-3">
            {items.map((faq, i) => (
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

      <LpFooter />
    </>
  );
}