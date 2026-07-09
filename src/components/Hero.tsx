import Image from "next/image";
import { hero, images, site } from "@/lib/content";
import { QuoteButton } from "./QuoteModal";

export default function Hero() {
  return (
    <section className="relative min-h-[560px] overflow-hidden bg-brand-dark text-white lg:min-h-[640px]">
      <Image
        src={images.heroShowroom}
        alt="Y2 Design & Build showroom — minimalist millwork and cabinetry display in the Greater Toronto Area"
        fill
        priority
        fetchPriority="high"
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/85 to-brand-dark/50" />

      <div className="container-page relative flex min-h-[560px] items-center py-16 lg:min-h-[640px] lg:py-20">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent sm:text-sm">
            {hero.badge}
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
            {hero.subtitle}
          </p>

          <ul className="mt-8 space-y-3">
            {hero.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-sm text-white/90 sm:text-base">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white" aria-hidden="true">✓</span>
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <QuoteButton className="btn-primary cursor-pointer text-center">
              Get My Free Quote
            </QuoteButton>
            <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="btn-outline-light text-center">
              Call {site.phone}
            </a>
          </div>

          <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/80">
            <span className="flex gap-0.5 text-accent" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </span>
            <span className="font-bold">5.0</span> from 100+ Google reviews · Free in-home consultations
          </p>
        </div>
      </div>
    </section>
  );
}
