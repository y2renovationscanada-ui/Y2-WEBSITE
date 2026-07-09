import Image from "next/image";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import TrustBadges from "./TrustBadges";
import ThreeStepProcess from "./ThreeStepProcess";
import ReviewStrip from "./ReviewStrip";
import FAQ from "./FAQ";
import QuoteForm from "./QuoteForm";
import Breadcrumbs from "./Breadcrumbs";
import JsonLd from "./JsonLd";
import { QuoteButton } from "./QuoteModal";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { servicePages, site } from "@/lib/content";
import { targetCities } from "@/lib/locations";
import { locationServiceKeys, serviceMeta, type LocationPageData } from "@/lib/locationContent";

export default function LocationServicePageLayout({ data }: { data: LocationPageData }) {
  const { service, city, serviceKey } = data;
  const baseService = servicePages[serviceKey];
  const otherCities = targetCities.filter((c) => c.slug !== city.slug);
  const otherServices = locationServiceKeys.filter((k) => k !== serviceKey);
  const tel = `tel:${site.phone.replace(/\D/g, "")}`;

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: service.name, href: `/${service.slug}` },
    { name: city.name, href: data.path },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbItems.map((b) => ({ name: b.name, url: site.url + b.href }))),
          serviceSchema({
            name: `${service.name} in ${city.name}`,
            description: data.metaDescription,
            url: site.url + data.path,
            areaServedName: city.name,
          }),
          faqSchema(data.faqs),
        ]}
      />

      <Header />
      <main>
        {/* 1. Local hero: city H1, dual CTA (quote modal + click-to-call) */}
        <section className="relative min-h-[440px] overflow-hidden bg-brand-dark text-white">
          <Image src={service.heroImage} alt={`${service.name} project in ${city.name}, Ontario`} fill priority fetchPriority="high" className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/85 to-brand-dark/55" />
          <div className="container-page relative flex min-h-[440px] items-center py-14">
            <div className="max-w-2xl">
              <div className="mb-4">
                <Breadcrumbs items={breadcrumbItems} light />
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                {city.region} · Licensed & Insured
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{data.h1}</h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">{data.heroSubtitle}</p>
              <ul className="mt-6 space-y-2">
                {service.focusBullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-white/90 sm:text-base">
                    <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <QuoteButton className="btn-primary cursor-pointer text-center">
                  Get My Free {city.name} Quote
                </QuoteButton>
                <a href={tel} className="btn-outline-light text-center">
                  Call {site.phone}
                </a>
              </div>
              <p className="mt-5 text-sm text-white/80">
                <span className="font-bold text-accent">★★★★★ 5.0</span> from 100+ Google reviews · Free in-home consultations in {city.name}
              </p>
            </div>
          </div>
        </section>

        {/* 2. Trust badges immediately below the fold */}
        <TrustBadges />

        {/* 3. Local intro */}
        <section className="section-pad bg-white">
          <div className="container-page max-w-3xl">
            <h2 className="text-3xl font-bold text-brand-dark">
              {service.name} Contractor Serving {city.name}, {city.region}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">{data.intro}</p>
            <div className="mt-6">
              <QuoteButton className="btn-primary cursor-pointer">Book My Free {city.name} Consultation</QuoteButton>
            </div>
          </div>
        </section>

        {/* 4. Clear 3-step process */}
        <ThreeStepProcess heading={`Your ${city.name} ${service.name} in 3 Simple Steps`} />

        {/* 5. Cost & timeline */}
        <section className="section-pad bg-white">
          <div className="container-page max-w-3xl">
            <h2 className="text-2xl font-bold text-brand-dark">
              {city.name} {service.name} Cost & Timeline
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="card p-5">
                <h3 className="font-bold text-brand-dark">Average Cost</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.priceLine}</p>
              </div>
              <div className="card p-5">
                <h3 className="font-bold text-brand-dark">Typical Timeline</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.durationLine}</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-muted">
              Every {city.name} home is different — request a free, itemized estimate specific to your project, or call{" "}
              <a href={tel} className="font-semibold text-brand hover:underline">{site.phone}</a>.
            </p>
          </div>
        </section>

        {/* 6. Social proof */}
        <ReviewStrip service={serviceKey} city={city.name} />

        {/* 7. Neighbourhoods + local process detail */}
        <section className="section-pad bg-surface">
          <div className="container-page">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-brand-dark">
                  How Our {city.name} {service.name} Process Works
                </h2>
                <p className="mt-4 leading-relaxed text-muted">{data.localSectionBody}</p>
                <h3 className="mt-6 text-lg font-bold text-brand-dark">Neighbourhoods We Serve in {city.name}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {city.neighborhoods.map((n) => (
                    <span key={n} className="rounded-full bg-white px-3 py-1.5 text-sm text-brand-dark shadow-sm">
                      {n}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {baseService.gallery.slice(0, 4).map((img, i) => (
                  <div key={img} className={`relative overflow-hidden rounded-xl ${i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"}`}>
                    <Image
                      src={img}
                      alt={`${service.name} in ${city.name} — recent project photo ${i + 1}`}
                      fill
                      loading="lazy"
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. Gallery + mid-page CTA */}
        <section className="section-pad bg-brand-dark text-white">
          <div className="container-page">
            <h2 className="text-center text-3xl font-bold">Recent {service.name} Projects</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {baseService.gallery.map((img, i) => (
                <div key={img} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image src={img} alt={`${service.name} gallery photo ${i + 1} near ${city.name}, Ontario`} fill loading="lazy" className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <QuoteButton className="btn-primary cursor-pointer">Start My {city.name} Project</QuoteButton>
            </div>
          </div>
        </section>

        <FAQ
          items={data.faqs}
          heading={`${service.name} FAQs — ${city.name}, ON`}
          subheading={`Common questions from ${city.name} homeowners about ${service.keyword} projects.`}
        />

        {/* Internal links for local SEO */}
        <section className="section-pad bg-surface">
          <div className="container-page">
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <h2 className="text-xl font-bold text-brand-dark">Other Renovation Services in {city.name}</h2>
                <ul className="mt-4 space-y-2">
                  {otherServices.map((key) => (
                    <li key={key}>
                      <Link
                        href={`/${serviceMeta[key].slug}/${city.slug}`}
                        className="font-medium text-brand hover:underline"
                      >
                        {serviceMeta[key].name} in {city.name} →
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href={`/${service.slug}`} className="font-medium text-brand hover:underline">
                      {service.name} — GTA Overview →
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-brand-dark">{service.name} in Nearby Cities</h2>
                <ul className="mt-4 space-y-2">
                  {otherCities.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/${service.slug}/${c.slug}`} className="font-medium text-brand hover:underline">
                        {service.name} in {c.name} →
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/service-areas" className="font-medium text-brand hover:underline">
                      View All Service Areas →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
