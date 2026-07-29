import Image from "next/image";
import Link from "next/link";
import { comparison, services, site } from "@/lib/content";
import { QuoteButton } from "./QuoteModal";

export default function Services() {
  return (
    <>
      <section className="section-pad bg-white">
        <div className="container-page">
            <h2 className="section-heading">Our Renovation Services Across the GTA</h2>
            <p className="section-sub">
              With {site.yearsExperience}+ years of experience and hundreds of completed projects in Markham, Pickering, Oakville, Ajax,
              Scarborough, and across the Greater Toronto Area — from whole-house transformations to focused kitchen and bathroom renovations.
            </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="card group overflow-hidden transition hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {service.location}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-3">{service.description}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-brand">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-dark text-white">
        <div className="container-page">
            <h2 className="text-center text-3xl font-bold">Why Homeowners Choose Y2</h2>
            <p className="mt-2 text-center text-white/70">The Y2 Difference</p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/20 bg-red-950/30 p-6">
              <h3 className="mb-4 text-lg font-bold text-red-300">Usual Renovation Experience</h3>
              <ul className="space-y-3">
                {comparison.usual.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/75">
                    <span className="mt-0.5 text-red-400">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-green-400/20 bg-green-950/30 p-6">
              <h3 className="mb-4 text-lg font-bold text-green-300">Y2 Renovation Experience</h3>
              <ul className="space-y-3">
                {comparison.y2.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/90">
                    <span className="mt-0.5 text-green-400">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <QuoteButton className="btn-primary cursor-pointer">Get My Free Quote</QuoteButton>
          </div>
        </div>
      </section>
    </>
  );
}
