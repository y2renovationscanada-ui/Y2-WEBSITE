import Image from "next/image";
import Link from "next/link";
import type { ServicePageData, ReviewServiceKey } from "@/lib/content";
import { servicePages, site } from "@/lib/content";
import { targetCities } from "@/lib/locations";
import { locationServiceKeys, serviceMeta, type LocationServiceKey } from "@/lib/locationContent";
import TrustBadges from "./TrustBadges";
import ThreeStepProcess from "./ThreeStepProcess";
import ReviewStrip from "./ReviewStrip";
import FAQ from "./FAQ";
import QuoteForm from "./QuoteForm";
import Breadcrumbs from "./Breadcrumbs";
import JsonLd from "./JsonLd";
import { QuoteButton } from "./QuoteModal";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

const slugToReviewService: Record<string, ReviewServiceKey> = {
  "kitchen-renovation": "kitchen",
  "bathroom-renovation": "bathroom",
  "basement-renovation": "basement",
  "home-renovation": "home",
  flooring: "flooring",
  "commercial-renovation": "commercial",
};

export default function ServicePageLayout({
  data,
  heroImage,
  locationServiceKey,
}: {
  data: ServicePageData;
  heroImage: string;
  locationServiceKey?: LocationServiceKey;
}) {
  const path = `/${data.slug}`;
  const tel = `tel:${site.phone.replace(/\D/g, "")}`;
  const reviewService = slugToReviewService[data.slug];
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: data.title, href: path },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbItems.map((b) => ({ name: b.name, url: site.url + b.href }))),
          serviceSchema({ name: data.title, description: data.metaDescription, url: site.url + path }),
          faqSchema(data.faqs),
        ]}
      />

      {/* 1. Value-driven hero: H1, proof, dual CTA (quote modal + click-to-call) */}
      <section className="relative min-h-[480px] overflow-hidden bg-brand-dark text-white">
        <Image src={heroImage} alt={`${data.title} project by Y2 Design & Build in the GTA`} fill priority fetchPriority="high" className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/50" />
        <div className="container-page relative flex min-h-[480px] items-center py-16">
          <div className="max-w-2xl">
            <div className="mb-4">
              <Breadcrumbs items={breadcrumbItems} light />
            </div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">Licensed & Insured · Serving the GTA</p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{data.heroTitle}</h1>
            <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">{data.heroSubtitle}</p>
            <ul className="mt-6 space-y-2">
              {data.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-white/90 sm:text-base">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> {b}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <QuoteButton className="btn-primary cursor-pointer text-center">Get My Free Quote</QuoteButton>
              <a href={tel} className="btn-outline-light text-center">Call {site.phone}</a>
            </div>
            <p className="mt-5 text-sm text-white/80">
              <span className="font-bold text-accent">★★★★★ 5.0</span> from 100+ Google reviews · Free itemized quotes
            </p>
          </div>
        </div>
      </section>

      {/* 2. Offer strip */}
      {data.promo && (
        <section className="bg-accent py-4 text-center text-white" aria-label="Current offer">
          <p className="text-lg font-bold">{data.promo.title}</p>
          <p className="text-sm opacity-90">{data.promo.subtitle}</p>
        </section>
      )}

      {/* 3. Trust badges immediately below the fold */}
      <TrustBadges />

      {/* 4. Local trust intro + project collage */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">{data.trustTitle}</h2>
              <p className="mt-4 leading-relaxed text-muted">{data.trustBody}</p>
              <div className="mt-6">
                <QuoteButton className="btn-primary cursor-pointer">Book My Free Consultation</QuoteButton>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {data.gallery.slice(0, 4).map((img, i) => (
                <div key={img} className={`relative overflow-hidden rounded-xl ${i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"}`}>
                  <Image src={img} alt={`${data.title} project photo ${i + 1} by Y2 Design & Build`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Clear 3-step process */}
      <ThreeStepProcess />

      {/* 6. Why us */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-brand-dark">{data.whyTitle}</h2>
          <p className="mt-4 max-w-3xl text-muted">{data.whyBody}</p>
          {data.whyBullets && (
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {data.whyBullets.map((b) => (
                <div key={b} className="card flex items-start gap-3 p-4">
                  <span className="text-brand" aria-hidden="true">✓</span>
                  <span className="text-sm text-muted">{b}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 7. Social proof */}
      <ReviewStrip service={reviewService} />

      {data.sections.map((section, i) => (
        <section key={section.heading} className={`section-pad ${i % 2 === 0 ? "bg-surface" : "bg-white"}`}>
          <div className="container-page max-w-3xl">
            <h2 className="text-2xl font-bold text-brand-dark">{section.heading}</h2>
            <p className="mt-4 leading-relaxed text-muted">{section.body}</p>
          </div>
        </section>
      ))}

      <section className="section-pad bg-brand-dark text-white">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold">Gallery Of Recent Projects</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.gallery.map((img, i) => (
              <div key={img} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src={img} alt={`${data.title} gallery photo ${i + 1} — Y2 Design & Build GTA`} fill loading="lazy" className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <QuoteButton className="btn-primary cursor-pointer">Start My {data.title} Quote</QuoteButton>
          </div>
        </div>
      </section>

      {locationServiceKey && (
        <section className="section-pad bg-surface">
          <div className="container-page">
            <h2 className="section-heading">{data.title} Services By City</h2>
            <p className="section-sub">
              Explore dedicated {data.title.toLowerCase()} resources for the municipalities we serve most across the GTA.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {targetCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`${path}/${city.slug}`}
                  className="card cursor-pointer p-5 text-center transition-shadow duration-200 hover:shadow-lg"
                >
                  <span className="font-bold text-brand-dark">{data.title} in {city.name}</span>
                  <span className="mt-1 block text-xs text-muted">{city.region}</span>
                </Link>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-muted">
              Don&apos;t see your city?{" "}
              <Link href="/service-areas" className="font-semibold text-brand hover:underline">View all service areas →</Link>
            </p>
          </div>
        </section>
      )}

      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="section-heading">More Renovation Services</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {locationServiceKeys
              .filter((k) => k !== locationServiceKey)
              .map((k) => (
                <Link key={k} href={`/${serviceMeta[k].slug}`} className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-brand-dark transition-colors duration-200 hover:bg-brand hover:text-white">
                  {serviceMeta[k].name}
                </Link>
              ))}
            {["condo", "extension"]
              .filter((k) => servicePages[k].slug !== data.slug)
              .map((k) => (
                <Link key={k} href={`/${servicePages[k].slug}`} className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-brand-dark transition-colors duration-200 hover:bg-brand hover:text-white">
                  {servicePages[k].title}
                </Link>
              ))}
            {data.slug !== "flooring" && (
              <Link href="/flooring" className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-brand-dark transition-colors duration-200 hover:bg-brand hover:text-white">Flooring & Stairs</Link>
            )}
            {data.slug !== "commercial-renovation" && (
              <Link href="/commercial-renovation" className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-brand-dark transition-colors duration-200 hover:bg-brand hover:text-white">Commercial Renovation</Link>
            )}
          </div>
        </div>
      </section>

      <FAQ items={data.faqs} heading={`${data.title} FAQs`} subheading={`Common questions about ${data.title.toLowerCase()} projects in the GTA.`} />
      <QuoteForm />
    </>
  );
}
