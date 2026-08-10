"use client";

import React, { useState } from "react";
import Image from "next/image";
import { site, images, faqs } from "@/lib/content";
import { QuoteButton } from "../../components/QuoteModal";
import TrustBadges from "../../components/TrustBadges";
import ThreeStepProcess from "../../components/ThreeStepProcess";
import ReviewStrip from "../../components/ReviewStrip";
import QuoteForm from "../../components/QuoteForm";

export default function KitchenClient({
  items = faqs,
}: {
  items?: typeof faqs;
}) {
  const tel = `tel:${site.phone.replace(/\D/g, "")}`;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container-page flex items-center gap-3 py-3">
          <Image
            src={images.logo}
            alt={site.name}
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />

          <nav
            aria-label="Main navigation"
            className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex"
          ></nav>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3 lg:ml-0">
            <a
              href={tel}
              aria-label={`Call ${site.name} at ${site.phone}`}
              className="flex items-center gap-2 rounded-full p-2 font-bold text-brand-dark transition-colors duration-200 hover:text-brand md:px-3"
            >
              <svg
                className="h-5 w-5 text-brand"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
                aria-hidden="true"
              >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
              </svg>
              <span className="hidden text-sm md:inline">{site.phone}</span>
            </a>
            <QuoteButton className="btn-primary cursor-pointer whitespace-nowrap px-5 py-2.5 text-sm">
              Get Free Quote
            </QuoteButton>
          </div>
        </div>
      </header>

      {/* 1. Value-driven hero */}
      <section className="relative min-h-[480px] overflow-hidden bg-brand-dark text-white">
        <Image
          src={images.kitchen}
          alt={`Kitchen Renovation project by Y2 Design & Build in the GTA`}
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
                Searching for Kitchen Renovation Ajax?
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                The Kitchen You Wanted, In The House You Already Own
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                A kitchen is where the day starts and where everyone ends up anyway. It should work as hard as you do.
              </p>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                At Y2 Design & Build, the people who design your kitchen are the people who build it. Concept, design, construction and the final walkthrough are all handled in-house, so nothing gets lost in the gap between the drawing and the finished room.
              </p>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                From the first conversation to the last walkthrough, the aim is simple: make the process as good as the kitchen.
              </p>
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
                100+ Google reviews · Free itemized quotes
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
          Save $2,500 On Your Kitchen Renovation Ajax.
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
                Where Craftsmanship Meets Everyday Life
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Every kitchen we build starts with how you actually use one. Where you put the groceries down. Whether two people cook at once. What annoys you every single morning. The layout follows from that, not from a catalogue.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                 Layouts planned around how you cook, not how the room photographs

                </li>
                <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                 Quality materials and tools, with meticulous attention to detail

                </li>
                <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  Storage that makes sense on a Tuesday morning

                </li>
                <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  Finishes chosen to still look right in ten years
                </li>
              </ul>

              <p className="mt-4 leading-relaxed text-muted">
                Because a kitchen should feel easy long after the last tradesperson
                has gone home.
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
              <img src={images.kitchenDesign} alt="Kitchen Design" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process */}
      <ThreeStepProcess />

      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <img
                src="https://y2designandbuild.com/images/kitchen-gall-5.webp"
                alt="Kitchen project"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                A Premium Experience: From Start to Finish

              </h2>
              <h3 className="mt-4 text-xl font-bold text-brand-dark">
                One Team, Start to Finish
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                Concept, design, construction and final walkthrough are all handled in-house. There is no designer blaming a builder, no builder reinterpreting a drawing, and no moment where you become the person translating between them.
              </p>

              <h3 className="mt-4 text-xl font-bold text-brand-dark">
                Communication You Do Not Have To Chase
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                Clear communication from the first consultation through to the
                final walkthrough. Our reviews name individual team members,
                John, Andy, George, Jeff, because clients remember who actually
                picked up the phone.
              </p>

              <h3 className="mt-4 text-xl font-bold text-brand-dark">
                A Free Consultation, With No Strings
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                The consultation and the quote are free and carry no obligation.
                If the numbers do not work for you, or we are not the right fit,
                that is a perfectly good outcome and nobody will chase you about
                it.
              </p>

              <h3 className="mt-4 text-xl font-bold text-brand-dark">
                Craftsmanship That Holds Up
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                The thing clients mention most across our Google, HomeStars, Houzz
                and Yelp reviews is craftsmanship and attention to detail. That is
                the part you live with for the next fifteen years.
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
          </div>
        </div>
      </section>

      {/* 6. Service Areas */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-brand-dark">
           Kitchen Renovations in Ajax
          </h2>
          <p className="mt-4 max-w-3xl text-muted">
A lot of Pickering kitchens were laid out for a different era of cooking, closed off from the living space, short on counter run, heavy on original oak. Newer Berczy Village and Greensborough builds usually have the footprint, but builder-grade cabinetry throughout.

          </p>
          <p className="mt-4 max-w-3xl text-muted">
           Our office and design studio are at 3400 14th Ave, Unit 16, so in Ajax we are not travelling to a job, we are working in our own neighbourhood. We cover:
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-5">
            {[
              "Unionville",
              "Cornell",
              "Berczy",
              "Village",
              "Wismer",
              "Greensborough",
              "Cathedraltown",
              "Angus Glen",
              "Markham Village",
              "Milliken Mills",
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

      {/* 7. Social proof */}
      <ReviewStrip />

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
              <b>Homeowners:</b> The kitchen you actually wanted, in the house
              you already own.
            </li>
            <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                aria-hidden="true"
              >
                ✓
              </span>
              <b>Multigenerational households:</b> Layouts that work when three
              generations cook differently.
            </li>
            <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                aria-hidden="true"
              >
                ✓
              </span>
              <b>Landlords and property investors:</b> Durable, well-built
              kitchens that survive tenants.
            </li>
            <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
              <span
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                aria-hidden="true"
              >
                ✓
              </span>
              <b>Commercial and retail spaces:</b> We handle commercial fit-outs
              alongside residential work.
            </li>
          </ul>
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
                src="https://y2designandbuild.com/images/kitchen-gall-1.webp"
                alt="gallery photo — Y2 Design & Build GTA"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="https://y2designandbuild.com/images/kitchen-gall-5.webp"
                alt="gallery photo — Y2 Design & Build GTA"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="https://y2designandbuild.com/images/kitchen-design.webp"
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
              Start My Kitchen Renovation Quote
            </QuoteButton>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">
                Our Commitment
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                It is not really about price. It is about whether the people in your
                house know what they are doing and tell you the truth. You can
                expect:
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  Kitchens built to a standard you can see up close
                </li>
                <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  Designs built around your household, not a template
                </li>
                <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  Quality materials and meticulous attention to detail
                </li>
                <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  A team that listens, communicates and follows through
                </li>
                <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  One accountable group of people from first call to final
                  walkthrough
                </li>
              </ul>

              <p className="mt-4 leading-relaxed text-muted">
                Your kitchen should be somewhere you want to spend time. That is
                the whole point of doing it properly.
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
                src="https://y2designandbuild.com/images/kitchen.webp"
                alt="Kitchen"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad bg-surface">
        <div className="container-page max-w-3xl">
          <h2 className="section-heading">Kitchen Renovation FAQs</h2>
          <p className="section-sub">
            Common questions about kitchen renovation projects in the GTA.
          </p>

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
                    <span className="font-semibold text-brand-dark">
                      {faq.question}
                    </span>
                    <svg
                      className={`h-5 w-5 shrink-0 text-brand transition ${
                        open === i ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </h3>
                <div
                  className={
                    open === i
                      ? "border-t border-stone-200 px-5 py-4"
                      : "hidden"
                  }
                >
                  <p className="text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteForm />

      <footer className="bg-brand-dark text-white">
        <section className="border-b border-white/10 py-14">
          <div className="container-page text-center">
            <p className="text-2xl font-bold md:text-3xl">
              One Team, One Roof, One Renovation
            </p>
            <p className="mt-2 text-white/70">
              Design, materials, and construction — all coordinated by the
              people you hire.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/50">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold hover:text-accent"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/50">
                  English
                </p>
                <a
                  href={`tel:${site.phone.replace(/\D/g, "")}`}
                  className="font-semibold hover:text-accent"
                >
                  {site.phone}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/50">
                  中文
                </p>
                <a
                  href={`tel:${site.phoneChinese.replace(/\D/g, "")}`}
                  className="font-semibold hover:text-accent"
                >
                  {site.phoneChinese}
                </a>
              </div>
            </div>

            <p className="mt-6 text-sm text-white/60">
              Visit our showroom: {site.address.street}, {site.address.city},{" "}
              {site.address.province} {site.address.postal}
            </p>

            <QuoteButton className="btn-primary mt-8 cursor-pointer">
              Get My Free Quote
            </QuoteButton>
          </div>
        </section>

        <div className="container-page py-8">
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold">
              Y2 <span className="text-accent">Design & Build</span>
            </span>
          </div>
          <p className="mt-6 text-center text-xs text-white/40">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}