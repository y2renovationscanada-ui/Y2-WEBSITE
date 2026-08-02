import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import ThreeStepProcess from "@/components/ThreeStepProcess";
import ReviewStrip from "@/components/ReviewStrip";
import FAQ from "@/components/FAQ";
import QuoteForm from "@/components/QuoteForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { QuoteButton } from "@/components/QuoteModal";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { images, site } from "@/lib/content";
import { getCityBySlug } from "@/lib/locations";
import { torontoFaqs, torontoMeta, torontoNeighborhoods, torontoServices } from "@/lib/torontoContent";
import { socialMetadata } from "@/lib/seo";

const toronto = getCityBySlug("toronto")!;
const tel = `tel:${site.phone.replace(/\D/g, "")}`;

export const metadata = {
  title: torontoMeta.title,
  description: torontoMeta.description,
  alternates: { canonical: torontoMeta.canonical },
  keywords: [
    "renovation contractor Toronto",
    "kitchen renovation Rosedale",
    "bathroom renovation Forest Hill",
    "home renovation Yorkville",
    "renovation contractor Lawrence Park",
    "kitchen remodeling Leaside Toronto",
    "bathroom renovation The Annex",
    "home renovation Willowdale",
  ],
  ...socialMetadata({
    title: `${torontoMeta.title} | ${site.name}`,
    description: torontoMeta.description,
    path: "/toronto",
    image: { url: images.residential, alt: "Home renovation in Toronto by Y2 Design & Build" },
  }),
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Toronto", href: "/toronto" },
];

export default function TorontoPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbItems.map((b) => ({ name: b.name, url: site.url + b.href }))),
          faqSchema(torontoFaqs),
          serviceSchema({
            name: "Home Renovation in Toronto",
            description: torontoMeta.description,
            url: torontoMeta.canonical,
            areaServedName: "Toronto",
          }),
        ]}
      />
      <Header />
      <main>
        <section className="relative min-h-[480px] overflow-hidden bg-brand-dark text-white">
          <Image
            src={images.residential}
            alt="Home renovation project in Toronto by Y2 Design & Build"
            fill
            priority
            fetchPriority="high"
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/85 to-brand-dark/50" />
          <div className="container-page relative flex min-h-[480px] items-center py-16">
            <div className="max-w-2xl">
              <div className="mb-4">
                <Breadcrumbs items={breadcrumbItems} light />
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                City of Toronto · Licensed & Insured
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{torontoMeta.h1}</h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">{torontoMeta.heroSubtitle}</p>
              <ul className="mt-6 space-y-2 text-sm text-white/90 sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span>
                  Serving 20+ Toronto neighbourhoods including Rosedale, Forest Hill & Yorkville
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span>
                  Heritage homes, condos & modern residences — one team, one fixed price
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 text-accent" aria-hidden="true">✓</span>
                  Toronto Building permits, ESA & TSSA handled in-house
                </li>
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <QuoteButton className="btn-primary cursor-pointer text-center">Get My Free Toronto Quote</QuoteButton>
                <a href={tel} className="btn-outline-light text-center">Call {site.phone}</a>
              </div>
            </div>
          </div>
        </section>

        <TrustBadges />

        <section className="section-pad bg-white">
          <div className="container-page max-w-3xl">
            <h2 className="text-3xl font-bold text-brand-dark">Toronto Renovation Contractor You Can Trust</h2>
            <p className="mt-4 leading-relaxed text-muted">{toronto.blurb}</p>
            <p className="mt-4 leading-relaxed text-muted">
              Whether you own a century home in Moore Park, a townhome in Leaside, or a condo in Yorkville, Y2 Design & Build
              brings {site.yearsExperience}+ years of GTA renovation experience to every Toronto project — with fixed, itemized
              pricing and a dedicated project manager from consultation through handover.
            </p>
            <div className="mt-6">
              <QuoteButton className="btn-primary cursor-pointer">Book My Free Toronto Consultation</QuoteButton>
            </div>
          </div>
        </section>

        <section className="section-pad bg-surface">
          <div className="container-page">
            <h2 className="section-heading">Toronto Neighbourhoods We Serve</h2>
            <p className="section-sub">
              Dedicated renovation services for homeowners in Toronto&apos;s most sought-after communities — from The Bridle Path
              and Hoggs Hollow to The Annex, Wychwood, and Kingsway South.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {torontoNeighborhoods.map((n) => (
                <span key={n} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-brand-dark shadow-sm">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="container-page">
            <h2 className="section-heading">Renovation Services in Toronto</h2>
            <p className="section-sub">
              Kitchen, bathroom, basement, and full-home renovations tailored to Toronto properties — explore service-specific
              resources for your neighbourhood.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {torontoServices.map((s) => (
                <Link key={s.href} href={s.href} className="card block p-6 transition-shadow duration-200 hover:shadow-lg">
                  <h3 className="text-lg font-bold text-brand-dark">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-brand">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ThreeStepProcess heading="Your Toronto Renovation in 3 Simple Steps" />

        <ReviewStrip />

        <section className="section-pad bg-surface">
          <div className="container-page">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-brand-dark">Renovating in Toronto&apos;s Established Neighbourhoods</h2>
                <p className="mt-4 leading-relaxed text-muted">
                  Toronto homes in Rosedale, Forest Hill, Lawrence Park, and Casa Loma often involve structural updates,
                  heritage-sensitive finishes, and careful permit coordination. Our team handles Toronto Building applications,
                  coordinates licensed trades, and sources materials through our wholesale network — so your renovation stays
                  on schedule and on budget.
                </p>
                <p className="mt-4 leading-relaxed text-muted">
                  Condo renovations in Yorkville and Yonge-St. Clair come with their own requirements — board approvals,
                  elevator booking, and building-specific rules. We manage those logistics so you don&apos;t have to.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[images.kitchen, images.bathroomHero, images.basement].map((img, i) => (
                  <div key={img} className={`relative overflow-hidden rounded-xl ${i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"}`}>
                    <Image
                      src={img}
                      alt={`Renovation project photo ${i + 1} in Toronto`}
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

        <FAQ
          items={torontoFaqs}
          heading="Toronto Renovation FAQs"
          subheading="Common questions from Toronto homeowners in Rosedale, Forest Hill, Yorkville, Leaside, and beyond."
        />

        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
