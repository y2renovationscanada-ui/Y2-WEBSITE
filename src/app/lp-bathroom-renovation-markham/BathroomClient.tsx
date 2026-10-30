"use client";

import React, { useState } from "react";
import Image from "next/image";
import { site, images } from "@/lib/content";
import { QuoteButton } from "../../components/QuoteModal";
import ReviewStrip from "../../components/ReviewStrip";
import LpHeader from "../../components/LpHeader";
import LpFooter from "../../components/LpFooter";
import GalleryLightbox from "@/components/GalleryLightbox";

const heroBullets = [
  "Fixed-price, itemized quote",
  "5 Stars rating from 100+ reviews",
  "Proper waterproofing",
  "Finished in 2 to 3 weeks",
  "Licensed, insured and WSIB-covered",
  "14+ Years of Experience",
];

const craftsmanship = [
  "Waterproofing membranes behind every wet wall, the part you can't redo later",
  "Quality materials and tools, with meticulous attention to detail",
  "Layouts that make a small Markham bathroom feel bigger",
  "Finishes that still look clean after years of daily use",
];

const working = [
  {
    title: "15+ Years:",
    text: "Homes renovated across Markham, Scarborough, Durham and the GTA",
  },
  {
    title: "Fixed-Price Quotes:",
    text: "Itemized and in writing. What we quote is what you pay.",
  },
  {
    title: "One Project Manager:",
    text: "One person to call, from first visit to final walkthrough.",
  },
  {
    title: "Licensed & Insured:",
    text: "WSIB-covered trades on every job. Clean site, every day.",
  },
  {
    title: "5 Stars Rating on Google:",
    text: "5 stars rating from 100+ homeowner reviews. Service in English and Mandarin.",
  },
];

const experience = [
  {
    title: "One Team, Start to Finish",
    text: "Concept, design, construction and final walkthrough are handled in-house. Plumbing, tiling, electrical and carpentry are coordinated by the same people who drew the room, so nothing falls between trades.",
  },
  {
    title: "A Free Consultation, With No Strings",
    text: "The consultation and quote are free and carry no obligation. We would rather tell you honestly what a job involves and lose it than win it on a number that was never realistic.",
  },
  {
    title: "Communication You Do Not Have To Chase",
    text: "One project manager is your point of contact from consultation to walkthrough. Clients name John, Andy and Jeff in their reviews, because they picked up the phone.",
  },
  {
    title: "Craftsmanship That Holds Up",
    text: "Across our Google, HomeStars, Houzz and Yelp reviews, craftsmanship and attention to detail come up more than anything else. In a bathroom, that is not a nice-to-have.",
  },
];

const localJobs = [
  "Small, closed-off main baths in Markham Village and Milliken Mills homes",
  "Original tubs and dated tile in pre-1990s builds",
  "Builder-grade ensuites in Cornell, Wismer and Cathedraltown",
  "Ensuite and powder room upgrades in Unionville and Angus Glen",
];

const whoWeWorkWith = [
  { label: "Homeowners:", text: "Main baths, ensuites and powder rooms." },
  {
    label: "Growing and multigenerational households:",
    text: "Second bathrooms, walk-in showers and grab-bar-ready layouts for parents moving in.",
  },
  {
    label: "Landlords and property investors:",
    text: "Durable bathrooms built to last between tenancies.",
  },
  {
    label: "Commercial and retail spaces:",
    text: "Washroom fit-outs alongside our residential work.",
  },
];

const commitments = [
  "Waterproofing and rough-in done properly, not covered up",
  "Layouts designed around the room you actually have",
  "Quality materials and meticulous attention to detail",
  "A team that listens, communicates and follows through",
  "One accountable group of people from first call to final walkthrough",
];

const faqs = [
  {
    question: "How much does a bathroom renovation cost in Markham?",
    answer: "Our bathroom renovations start from $9,800. The final price depends on size, layout changes and finishes. You get a fixed, itemized quote after the free consultation.",
  },
  {
    question: "How long does it take?",
    answer: "Most bathrooms are finished in 2 to 3 weeks once work starts. Layout changes or custom glass can add time, and we confirm the schedule before you sign.",
  },
  {
    question: "Will the price change once you start?",
    answer: "No. The price you approve is the price you pay, unless you choose to change the scope.",
  },
  {
    question: "Do you handle permits and plumbing?",
    answer: "Yes. Plumbing, electrical, tile, carpentry and any permits are handled by our team under one contract.",
  },
  {
    question: "Is the consultation really free?",
    answer: "Yes. The in-home consultation and quote are free, with no obligation to go ahead.",
  },
];

const tiktokVideos = [
  "7678373302141717778",
  "7696534717817965832",
  "7636890362727976200",
];

const tiktokProfile = "https://www.tiktok.com/@y2.designbuild";

const galleryImages = [
  "bath-gallery-13",
  "bath-gallery-14",
  "bath-gallery-15",
  "bath-gallery-16",
  "bath-gallery-17",
  "bath-gallery-18",
  "bath-gallery-19",
  "bath-gallery-20",
  "bath-gallery-21",
  "bath-gallery-22",
  "bath-gallery-23",
  "bath-gallery-11",
  "bath-gallery-9",
  "bath-gallery-8",
];

export default function BathroomClient({
  items = faqs,
}: {
  items?: typeof faqs;
}) {
  const tel = `tel:${site.phone.replace(/\D/g, "")}`;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <LpHeader />

      {/* 1. Value-driven hero */}
      <section className="relative min-h-[480px] overflow-hidden bg-brand-dark text-white">
        <Image
          src={"/images/bath-gallery-10.webp"}
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
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Searching for bathroom renovation Markham?
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Bathroom Renovations Starting From $9,800
              </h1>
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
                  Get Bathroom Renovation Quote
                </QuoteButton>
                <a href={tel} className="btn-outline-light text-center">
                  Call {site.phone}
                </a>
              </div>
              <p className="mt-5 text-sm text-white/80">
                <span className="font-bold text-accent">★★★★★ 5.0</span> from
                100+ Google reviews · Free itemized quotes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Craftsmanship */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">Where Craftsmanship Actually Matters</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Anyone can put tile on a wall. The difference shows up three years later, at the grout line and the shower base. We build the parts you never see as carefully as the parts you do.
              </p>
              <p className="mt-4 font-bold text-brand-dark">Expect:</p>
              <ul className="mt-4 space-y-3">
                {craftsmanship.map((item) => (
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
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">SEE WHAT MY BATHROOM WOULD COST</QuoteButton>
                <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
                  or call {site.phone}
                </a>
              </div>
            </div>

            <div className="card relative aspect-[4/3] overflow-hidden">

              <video
                className="absolute inset-0 h-full w-full object-cover"
                poster="/images/bath-gallery-3.webp"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Y2 Design & Build bathroom renovation in Markham"
              >
                <source src="/videos/bathroom-renovation.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>


      {/* 7. Social proof
          NOTE: in components/ReviewStrip set the heading to "Markham Homeowners Rate Us 5 Stars",
          the featured quote to "Finished exactly on schedule and within budget." (Marc, Markham),
          and show bathroom reviews only, each once: Marc (Markham), Shararah S. (Markham),
          Karthi (Pickering), Smriti (Markham). Remove the kitchen and flooring reviews and the duplicated set. */}
      <ReviewStrip />


      {/* 4. Craftsmanship */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div className="card relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/bath-gallery-6.webp"
                alt="Finished bathroom with tiled shower by Y2 Design & Build in Markham"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">What Working With Us Feels Like</h2>
              <ul className="mt-4 space-y-3">
                {working.map((item) => (
                  <li key={item.title} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>
                    <strong>{item.title}</strong>{" "}{item.text}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">SEE WHAT MY BATHROOM WOULD COST</QuoteButton>
                <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
                  or call {site.phone}
                </a>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* 6. Premium experience */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">

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

            <div className="card relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/bathroom-palmer-1.webp"
                alt="Finished bathroom with tiled shower by Y2 Design & Build in Markham"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>



      {/* 8. Local Markham team */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Your Local Markham Bathroom Team</h2>
          <p className="mx-auto mt-4 max-w-4xl text-center leading-relaxed text-muted">
            Our showroom is at 3400 14th Ave, Unit 16, so in Markham we are working in our own neighbourhood. Drop in, see materials in person, and meet the people who will build your bathroom.
          </p>
          <p className="mt-8 text-center font-bold text-brand-dark">What we most often work on in Markham:</p>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {localJobs.map((item) => (
              <li key={item} className="card flex items-start gap-3 p-4 text-sm leading-relaxed text-muted">
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
          <p className="mx-auto mt-6 max-w-6xl text-center leading-relaxed text-muted">
            We cover Unionville, Cornell, Berczy Village, Wismer, Greensborough, Cathedraltown, Angus Glen, Markham Village and Milliken Mills.
          </p>
        </div>
      </section>

      {/* 9. Who we work with */}
     
           <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div className="card relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/bath-gallery-5.webp"
                alt="Finished bathroom with tiled shower by Y2 Design & Build in Markham"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">Who We Work With</h2>
              <ul className="mt-4 space-y-3">
                {whoWeWorkWith.map((item) => (
              <li key={item.label} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span>
                  <b>{item.label}</b> <span>{item.text}</span>
                </span>
              </li>
            ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">SEE WHAT MY BATHROOM WOULD COST</QuoteButton>
                <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
                  or call {site.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Watch us work (TikTok) */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Watch Our Bathrooms Come Together</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-relaxed text-muted">
            Real projects, filmed on site by our team. See the prep, the tile work and the finished
            rooms before you book a single thing.
          </p>
          <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tiktokVideos.map((id, i) => (
              <div
                key={id}
                className="card relative mx-auto aspect-[9/16] w-full max-w-[340px] overflow-hidden bg-black"
              >
                <iframe
                  src={`https://www.tiktok.com/player/v1/${id}?description=0&music_info=0&rel=0`}
                  title={`Y2 Design & Build bathroom renovation video ${i + 1}`}
                  loading="lazy"
                  allow="fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <QuoteButton className="btn-primary cursor-pointer">GET MY FREE BATHROOM QUOTE</QuoteButton>
            <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
              or call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 11. Gallery */}
      <section className="section-pad bg-brand-dark text-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold">Recent Bathroom Projects</h2>

          <GalleryLightbox
            images={galleryImages.map((name) => ({
              src: `https://y2designandbuild.com/images/${name}.webp`,
              alt: "Home renovation project by Y2 Design & Build in the GTA",
            }))}
          />

          <div className="mt-10 text-center">
            <QuoteButton className="btn-primary cursor-pointer">START MY BATHROOM RENOVATION QUOTE</QuoteButton>
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
                It is not really about price. It is about whether the people in your house know what they are doing and tell you the truth. You can expect:
              </p>
              <ul className="mt-6 space-y-3">
                {commitments.map((item) => (
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

              <p className="mt-4 leading-relaxed text-muted">
                A bathroom done right is one you stop thinking about. That is the goal.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer">Book My Free Consultation</QuoteButton>
                <a href={tel} className="text-sm font-bold text-brand-dark hover:text-brand">
                  or call {site.phone}
                </a>
              </div>
            </div>

            <div className="card relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://y2designandbuild.com/images/bathroom-2.webp"
                alt="Completed bathroom renovation by Y2 Design & Build"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
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