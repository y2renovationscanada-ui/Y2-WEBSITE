"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { site, images } from "@/lib/content";
import { QuoteButton } from "../../components/QuoteModal";
import ReviewStrip from "../../components/ReviewStrip";
import LpHeader from "../../components/LpHeader";
import LpFooter from "../../components/LpFooter";
import GalleryLightbox from "@/components/GalleryLightbox";
import BeforeAfterCarousel from "../../components/BeforeAfterCarousel";


const heroBullets = [
  "Rated 5.0 on Google from 130+ reviews",
  "Whole home and room by room renovation",
  "The price you approve is the price you pay",
  "No disappearing contractors",
  "Finish exactly what we say",
  "Licensed, insured and WSIB-covered.",
];

const working = [
  {
    title: "No disappearing contractors:",
    text: "With 14 years of expertise and 130+ 5-star Google reviews we deliver.",
  },
  {
    title: "No problems later:",
    text: "Highest quality of work, done with care, & backed by our warranty.",
  },
  {
    title: "No ghosting:",
    text: "Your project manager picks up every time you call.",
  },
  {
    title: "No juggling trades:",
    text: "Design, plumbing, electrical, carpentry and permits all run through one team under one contract.",
  },
  {
    title: "No mess left behind:",
    text: "Your home remains clean and safe while we work.",
  },
  {
    title: "No guessing how it’ll look:",
    text: "You will see your home in 3D before anything starts",
  },
];


const faqs = [
  {
    question: "Will the price change once you start?",
    answer: "No. The price you approve is the price you pay, unless you choose to change the scope.",
  },
  {
    question: "Do you handle permits and plumbing?",
    answer: "Yes. Plumbing, electrical, tile, carpentry and any permits are handled by our team under one contract.",
  },
  {
    question: "What’s the deposit, and when do I pay the rest?",
    answer: "Please book a consultation and we will happy to share the details.",
  },
  {
    question: "How long does a full home renovation take?",
    answer: "Most full home renovations take 4-6 weeks, potentially longer depending on the size of your home and the scope of work. We will go through the timeline with you before work begins.",
  },
  {
    question: "How soon can you start?",
    answer: "On average, we can start about 2-3 weeks after you approve your quote and any required permits are in place.",
  },
  {
    question: "Can we live in the house during the renovation?",
    answer: "It depends on the scope. If your kitchen or only bathroom will be out of use, we recommend arranging alternative accommodations during that stage of the work. We will talk through the options at your consultation.",
  },
  {
    question: "How long is your warranty, and what does it cover?",
    answer: "We provide a 1-year warranty on our workmanship."
  },
  {
    question: "Can I buy my own flooring, tiles or fixtures?",
    answer: "Yes, you can supply your own. Materials you buy are covered by the manufacturer's warranty, and our 1-year warranty still applies to our workmanship."
  },
  {
    question: "Can you make the home safer for aging parents?",
    answer: "Yes. Grab bars with solid backing, walk-in or curbless showers, and non-slip tile are all options."
  },
  {
    question: "Do I need to be home while you work?",
    answer: "No, you don’t need to be home. Hundreds of homeowners have trusted Y2 with their homes, and we deliver a high-quality finish on every project."
  },
];

const tiktokVideos = [
  "7679494113472826631",
  "7656088874388655368",
  "7683934738675027207",
];

const beforeAfterPairs = [
  {
    before: "home-1-before",
    after: "home-1-after",
    description: "home renovation",
  },
  {
    before: "home-2-before",
    after: "home-2-after",
    description: "home renovation",
  },
  {
    before: "home-3-before",
    after: "home-3-after",
    description: "home renovation",
  },
  {
    before: "home-4-before",
    after: "home-4-after",
    description: "home renovation",
  },
  {
    before: "home-5-before",
    after: "home-5-after",
    description: "home renovation",
  },
];

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

function ClickToPlayVideo({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    ref.current?.play();
    setPlaying(true);
  };

  return (
    <div className="card relative aspect-[4/3] overflow-hidden bg-black">
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-cover"
        poster={poster}
        playsInline
        preload="none"
        controls={playing}
        aria-label={label}
        onPause={() => ref.current?.ended && setPlaying(false)}
        onEnded={() => setPlaying(false)}
      >
        <source src={src} type="video/mp4" />
      </video>

      {!playing && (
        <button
          type="button"
          onClick={play}
          className="group absolute inset-0 flex items-center justify-center bg-black/20 transition hover:bg-black/30"
          aria-label={`Play video: ${label}`}
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-white shadow-xl transition group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8" fill="currentColor" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}

export default function FullHomeClient({
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
      <section className="relative min-h-[620px] overflow-hidden bg-brand-dark text-white align-center">
        <Image
          src={"/images/home-renovation-hero3.webp"}
          alt="Bathroom Renovation project by Y2 Design & Build in the GTA"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-bottom"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/50" />

        <div className="grid items-center gap-3">
          <div className="container-page relative flex min-h-[620px] items-center py-16">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                15% Off Your Full Home Renovation in Markham
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
                  Get Full Home Renovation Quote
                </QuoteButton>
                <a href={tel} className="btn-outline-light text-center">
                  Call {site.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Working With Us  */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <div className="grid gap-y-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:grid-rows-[auto_1fr] lg:gap-x-8 lg:gap-y-3">
            <h2 className="text-3xl font-bold text-brand-dark lg:col-start-1 lg:row-start-1">
              What Working With Us Feels Like
            </h2>

            <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
              <ClickToPlayVideo
                src="/videos/full-home-reno.mp4"
                poster="/images/floors-gall-8.webp"
                label="Y2 Design & Build bathroom renovation in Markham"
              />
            </div>

            <div className="lg:col-start-1 lg:row-start-2">

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

              <div className="mt-8">
                <QuoteButton className="btn-primary cursor-pointer">Book Free Consultation</QuoteButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Gallery */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold">
            See The Difference
          </h2>

          <BeforeAfterCarousel pairs={beforeAfterPairs} className="mt-10" />
        </div>
      </section>


      {/* 10. Watch us work (TikTok) */}
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold text-brand-dark">Watch Our Homes Come Together</h2>
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
            <QuoteButton className="btn-primary cursor-pointer">GET MY FREE HOME RENOVATION QUOTE</QuoteButton>
            <a href={tel} className="text-center text-sm font-bold text-brand-dark hover:text-brand">
              or call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* 11. Gallery */}
      <section className="section-pad bg-brand-dark text-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold">Recent Home Renovation Projects</h2>
          <GalleryLightbox
            singleColumn
            initialVisible={14}
            images={galleryImages.map((name) => ({
              src: `https://y2designandbuild.com/images/${name}.webp`,
              alt: "Home renovation project by Y2 Design & Build in the GTA",
            }))}
          />
        </div>
      </section>

      <ReviewStrip />


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


      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-bold uppercase tracking-wider text-brand">See It In Person</p>
              <h2 className="mt-2 text-3xl font-bold text-brand-dark">Visit Our Showroom</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Prefer to see materials and finishes in person? We have a beautiful showroom at our Markham location where you can browse cabinetry, countertops, tile, and flooring samples, and talk through your project face-to-face with our design team.
              </p>
              <p className="mt-4 font-semibold text-brand-dark">
                {site.address.street}, {site.address.city}, {site.address.province} {site.address.postal}
              </p>
              <p className="mt-1 text-sm text-muted">Mon–Fri: 8 a.m. – 6 p.m. — walk-ins welcome, or call ahead to book a time.</p>
              <a
                href={`tel:${site.phone.replace(/\D/g, "")}`}
                className="btn-primary mt-6 inline-flex"
              >
                Call to Book a Showroom Visit
              </a>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={images.heroShowroom}
                  alt="Y2 Design & Build showroom in Markham, Ontario"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <LpFooter />
    </>
  );
}
