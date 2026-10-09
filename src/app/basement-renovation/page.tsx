// app/basement-renovation/page.tsx
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
import { servicePages, images, site } from "@/lib/content";
import { targetCities } from "@/lib/locations";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";

const data = servicePages.basement;
const path = `/${data.slug}`;
const telEnglish = `tel:${site.phone.replace(/\D/g, "")}`;
const telMandarin = "tel:6472942888";

// lib/content.ts
export const basementCustomData = {
  heroTitle: "Basement Renovation in the GTA",
  heroSubtitle:
    "Finished basements, family rooms, and legal secondary suites, designed and built by one team and priced in a written, itemized fixed-price quote.",
  bullets: [
    "Rec rooms, home theatres, gyms, and play spaces",
    "Legal basement apartments and in-law suites",
    "Moisture control, insulation and soundproofing done before drywall",
    "One project manager, reachable in English or Mandarin",
  ],
  useCases: [
    {
      title: "Family room, playroom or home office",
      details: "Insulation, flooring, lighting and finishes. A permit is usually needed once walls, plumbing or new electrical go in.",
    },
    {
      title: "Home theatre or gym",
      details: "Extra sound insulation, dedicated circuits, ceiling height checks for equipment, and rubber or vinyl flooring that handles weight.",
    },
    {
      title: "Guest suite or in-law space",
      details: "A bathroom, often a kitchenette, better egress windows and careful heating so the space is comfortable year-round.",
    },
    {
      title: "Legal basement apartment",
      details: "A separate entrance, fire separation, interconnected smoke and CO alarms, egress, independent heating considerations and full Building Code compliance.",
    },
  ],
  pricingTiers: [
    { size: "600 sq ft", price: "$30,000 – $72,000" },
    { size: "800 sq ft", price: "$40,000 – $96,000" },
    { size: "1,000 sq ft", price: "$50,000 – $120,000" },
  ],
  faqs: [
    {
      question: "Do I need a permit to finish my basement?",
      answer: "In most GTA municipalities, yes, once you add walls, a bathroom, plumbing, new electrical circuits, a new entrance, or a second unit. Electrical work also requires an ESA permit. Purely cosmetic updates like painting or replacing flooring generally don't."
    },
    {
      question: "Can my basement become a legal rental apartment?",
      answer: "Often, yes, if you meet zoning, ceiling height, egress, and fire separation requirements. We review your basement against these requirements before you commit to a design."
    },
    {
      question: "What if my basement has had water problems?",
      answer: "We find the source first. Active leaks are repaired before any finishing, and the wall assembly is designed to keep moisture out of the new space."
    },
    {
      question: "Can you add a bathroom where there's no rough-in?",
      answer: "Usually. It may involve cutting the concrete floor to connect to the drain, or installing an upflush system where that isn't practical. We'll explain the options and costs at the quote stage."
    },
    {
      question: "Do you work in Mandarin?",
      answer: "Yes. Call (647) 294-2888 to speak with our team in Mandarin throughout the project."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes. Y2 Design & Build is a licensed and insured contractor, and our trades are WSIB-covered."
    }
  ]
};

export const metadata = {
  title: `Basement Renovation in GTA | Free Basement Assessment`,
  description: `Transform unused square footage into a finished basement. We handle design, permits and construction across the GTA. Book a free on-site consultation.`,
  alternates: { canonical: `${site.url}${path}` },
  keywords: ["basement renovation GTA", "basement finishing Toronto", "basement renovation Markham", "legal basement suite GTA"],
  openGraph: {
    title: `Basement Renovation in the GTA | Y2 Design & Build`,
    description: data.metaDescription,
    url: `${site.url}${path}`,
    type: "website",
    images: [{ url: images.basement, alt: "Basement renovation by Y2 Design & Build in the GTA" }],
  },
};

export default function BasementRenovationPage() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Basement Renovation", href: path },
  ];

  return (
    <>
      <Header />
      <main>
        <JsonLd
          data={[
            breadcrumbSchema(breadcrumbItems.map((b) => ({ name: b.name, url: site.url + b.href }))),
            serviceSchema({ name: "Basement Renovation", description: data.metaDescription, url: site.url + path }),
            faqSchema(basementCustomData.faqs),
          ]}
        />

        {/* Hero Section */}
        <section className="relative min-h-[480px] overflow-hidden bg-brand-dark text-white">
          <Image
            src={images.basement}
            alt="Basement renovation project by Y2 Design & Build in the GTA"
            fill
            priority
            fetchPriority="high"
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/50" />
          <div className="container-page relative flex min-h-[480px] items-center py-16">
            <div className="max-w-2xl">
              <div className="mb-4">
                <Breadcrumbs items={breadcrumbItems} light />
              </div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Licensed & Insured · Serving the GTA
              </p>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                {basementCustomData.heroTitle}
              </h1>
              <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
                {basementCustomData.heroSubtitle}
              </p>
              <ul className="mt-6 space-y-2">
                {basementCustomData.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-white/90 sm:text-base">
                    <span className="mt-0.5 text-accent" aria-hidden="true">✓</span> {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <QuoteButton className="btn-primary cursor-pointer text-center">Get Your Free Quote</QuoteButton>
                <a href={telEnglish} className="btn-outline-light text-center">Call {site.phone}</a>
              </div>
              <p className="mt-5 text-sm text-white/80">
                <span className="font-bold text-accent">★ 5.0</span> rated on Google, HomeStars, Houzz and Yelp · 14+ years renovating GTA homes · Free itemized quotes
              </p>
            </div>
          </div>
        </section>

        <TrustBadges />

  {/* 1. Introductory Section (Text on Left, Image on Right) */}
<section className="section-pad bg-white">
  <div className="container-page">
    <div className="grid items-center gap-10 lg:grid-cols-2">
      {/* Left Column: Text Content */}
      <div>
        <h2 className="text-3xl font-bold text-brand-dark">
          Basement Renovation Contractor for GTA Homes
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          Most GTA basements start out as the room nobody plans for. In a 1980s backsplit in Scarborough, it's usually a low ceiling, a furnace in the middle of the floor, and paneling that hides a damp patch. In a newer Markham or Vaughan subdivision, the basement might be a clean concrete box with good height and a rough-in for a bathroom that was never finished. Both can become the most used part of the house, but they need very different plans.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Y2 Design & Build has been finishing basements across the GTA for more than 14 years. Our basement renovation projects are designed, priced, and built by the same team, so the layout you approve is the layout that gets built. We write and itemize every quote, and our trades are licensed and WSIB-covered.
        </p>
      </div>

      {/* Right Column: Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
        <Image
          src={images.basement}
          alt="Basement Renovation Contractor in GTA"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </div>
  </div>
</section>

{/* Moisture, Insulation and What Goes Behind the Walls */}
<section className="section-pad bg-surface">
  <div className="container-page">
    <div className="grid items-center gap-10 lg:grid-cols-2">
      {/* Left Column: Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
        <Image
          src={"../.././images/basement-gall-1.webp"}
          alt="Basement moisture proofing and insulation preparation"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Right Column: Text Content */}
      <div>
        <h2 className="text-2xl font-bold text-brand-dark sm:text-3xl">
          Moisture, Insulation and What Goes Behind the Walls
        </h2>
        <p className="mt-4 leading-relaxed text-muted">
          A basement renovation that looks perfect on handover day can fail within two winters if the walls weren't dealt with properly. Before we frame anything, we look for signs including white mineral deposits on the concrete, a musty smell near the cold room, water staining under windows, or a sump pit that runs more than it should.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          For dry foundations, we insulate in a way that keeps warm indoor air away from cold concrete—typically rigid foam board against the foundation wall, then a framed wall with additional insulation.
        </p>
        <ul className="mt-6 space-y-3">
          {[
            "Backwater valve and sump pump checks with municipal flood protection subsidy options",
            "Ceiling height and ductwork mapping before finalizing bulkhead positions",
            "Electrical panel capacity evaluation (e.g., upgrading older 100-amp panels)",
            "Window expansion for legal bedroom egress requirements",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-muted">
              <span className="mt-0.5 text-brand" aria-hidden="true">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

{/* 2. Wide Section: Use Cases & Table */}
<section className="section-pad bg-white">
  <div className="container-page max-w-6xl">
    <h2 className="text-3xl font-bold text-brand-dark">
      Start With What the Basement Is For
    </h2>
    <p className="mt-2 text-muted">
      The single biggest decision is how the space will be used, because it changes the permits, the cost, and the construction details.
    </p>

    {/* Custom Comparison Table */}
    <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#f7f4ec] border-b border-gray-200 text-brand-dark">
            <th className="p-4 font-bold w-1/3">What you want</th>
            <th className="p-4 font-bold w-2/3">What changes in the build</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-sm text-muted">
          {basementCustomData.useCases.map((uc) => (
            <tr key={uc.title} className="hover:bg-gray-50/50 transition-colors">
              <td className="p-4 font-semibold text-brand-dark align-top">{uc.title}</td>
              <td className="p-4 align-top leading-relaxed">{uc.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</section>

        {/* Step Process Component */}
        <ThreeStepProcess />

       

        {/* 3. Basement Renovation Services We Provide */}
<section className="section-pad bg-white">
  <div className="container-page max-w-6xl">
    <h2 className="text-3xl font-bold text-brand-dark">
      Basement Renovation Services We Provide
    </h2>
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Basement Finishing",
          desc: "Turn unfinished space into comfortable living areas with flooring, walls, ceilings, lighting and storage.",
        },
        {
          title: "Legal Basement Apartments",
          desc: "Build secondary suites around local zoning, Building Code, egress, fire separation and servicing requirements.",
        },
        {
          title: "Basement Bathrooms",
          desc: "Add a new bathroom or finish an existing rough-in, including plumbing, waterproofing, fixtures and tile.",
        },
        {
          title: "Basement Kitchens & Wet Bars",
          desc: "Create functional kitchens, kitchenettes or entertaining areas with appropriate plumbing, electrical and cabinetry.",
        },
        {
          title: "Home Theatres",
          desc: "Plan sound control, lighting, electrical and media-wall requirements for dedicated entertainment spaces.",
        },
        {
          title: "Basement Gyms",
          desc: "Use durable flooring, adequate lighting, ventilation and layouts suited to exercise equipment.",
        },
        {
          title: "Basement Bedrooms",
          desc: "Plan privacy, heating, storage and required emergency egress for comfortable sleeping spaces.",
        },
        {
          title: "Home Offices & Playrooms",
          desc: "Create dedicated areas with practical lighting, storage, flooring and sound considerations.",
        },
        {
          title: "Walkout Basement Renovation",
          desc: "Make use of existing exterior access or plan interior layouts around a walkout entrance, with appropriate insulation, flooring, lighting and finishing.",
        },
      ].map((service) => (
        <div
          key={service.title}
          className="rounded-xl border border-gray-200 bg-surface p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
        >
          <h3 className="text-lg font-bold text-brand-dark">{service.title}</h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">{service.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* 4. Legal Basement Apartments in Ontario */}
<section className="section-pad bg-surface border-t border-gray-200">
  <div className="container-page max-w-6xl">
    <h2 className="text-3xl font-bold text-brand-dark">
      Legal Basement Apartments in Ontario
    </h2>
    <p className="mt-4 leading-relaxed text-muted">
      Ontario now allows up to three residential units on most urban lots, which has made basement suites a serious option for families and investors. A legal suite has to meet the Ontario Building Code and your municipality's rules, and the details matter.
    </p>

    <h3 className="mt-6 text-xl font-bold text-brand-dark">
      In broad terms, a legal basement apartment needs:
    </h3>
    <ul className="mt-4 space-y-3">
      {[
        "Adequate ceiling height over the required living area (for existing houses, typically 1.95 m, dropping to 1.85 m under beams and ducts)",
        "A bedroom window or door that allows a safe exit, with a minimum unobstructed opening set by the Code",
        "Fire separation between units, usually with fire-rated drywall and proper doors",
        "Interconnected smoke alarms and carbon monoxide alarms",
        "A separate entrance and safe path of travel to the outside",
        "Permits, inspections, and, in many municipalities, registration of the second unit",
      ].map((req) => (
        <li key={req} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand" aria-hidden="true">
            ✓
          </span>
          <span>{req}</span>
        </li>
      ))}
    </ul>

    <p className="mt-6 text-sm text-muted leading-relaxed">
      Rules differ between Toronto, Markham, Richmond Hill, Vaughan, and other GTA cities, so we confirm the local requirements for your address during design. Read our guide on{" "}
      <Link href="https://y2designandbuild.com/blog/what-makes-a-basement-apartment-legal-in-ontario" className="font-semibold text-brand hover:underline">
        what makes a basement apartment legal in Ontario
      </Link>{" "}
      to learn more about each requirement. If a relative will be moving in, a suite may also qualify for the federal Multigenerational Home Renovation Tax Credit. See our article on{" "}
      <Link href="https://y2designandbuild.com/blog/ontario-home-renovation-tax-credits-rebates-incentives" className="font-semibold text-brand hover:underline">
        Ontario renovation tax credits and rebates
      </Link>.
    </p>
  </div>
</section>

        {/* Pricing Breakdown Section */}
        <section className="section-pad bg-white">
          <div className="container-page max-w-6xl">
            <h2 className="section-heading">Basement Renovation Cost in the GTA</h2>
            <p className="mt-4 leading-relaxed text-muted">
              A typical basement renovation with Y2 runs about $50 to $120 per square foot, depending on layout, moisture work, and finish level.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {basementCustomData.pricingTiers.map((tier) => (
                <div key={tier.size} className="rounded-xl border border-gray-200 p-5 text-center shadow-sm bg-white">
                  <p className="text-lg font-bold text-brand-dark">{tier.size}</p>
                  <p className="mt-2 text-xl font-bold text-brand">{tier.price}</p>
                  <p className="mt-1 text-xs text-muted">Approximate Range</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      

        {/* Services By City Section */}
        <section className="section-pad bg-surface">
          <div className="container-page">
            <h2 className="section-heading">Basement Renovation Services By City</h2>
            <p className="section-sub">
              Explore dedicated basement renovation resources for the municipalities we serve most across the GTA.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {targetCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`${path}/${city.slug}`}
                  className="card cursor-pointer p-5 text-center transition-shadow duration-200 hover:shadow-lg"
                >
                  <span className="font-bold text-brand-dark">Basement Renovation in {city.name}</span>
                  <span className="mt-1 block text-xs text-muted">{city.region}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
          {/* Review Strip Component */}
        <ReviewStrip service="basement" />


        {/* How Long Does a Basement Renovation Take? */}
<section className="section-pad bg-surface border-t border-gray-200">
  <div className="container-page max-w-4xl">
    <h2 className="text-3xl font-bold text-brand-dark">
      How Long Does a Basement Renovation Take?
    </h2>
    <p className="mt-4 leading-relaxed text-muted">
      The calendar has two parts. Design and permits come first, and their length depends on the scope and on your municipality&apos;s review time. Construction follows. Many finished basements need several weeks of on-site work once permits are in hand. One recent client&apos;s basement was completed in five weeks. Legal suites take longer because of inspections at each stage.
    </p>

    <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-brand-dark">Typical Construction Order</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Demolition and moisture repairs <span className="text-brand font-bold">→</span> Framing and insulation <span className="text-brand font-bold">→</span> Plumbing and electrical rough-in <span className="text-brand font-bold">→</span> Inspections <span className="text-brand font-bold">→</span> Drywall <span className="text-brand font-bold">→</span> Flooring, trim, paint, fixtures <span className="text-brand font-bold">→</span> Final walkthrough.
      </p>
    </div>

    <p className="mt-6 text-sm text-muted">
      Not sure whether your project needs a permit? Read{" "}
      <Link href="https://y2designandbuild.com/blog/do-you-need-a-permit-to-finish-your-basement-in-markham" className="font-semibold text-brand hover:underline">
        do you need a permit to finish your basement
      </Link>.
    </p>
  </div>
</section>

{/* How We Work With You */}
<section className="section-pad bg-white border-t border-gray-200">
  <div className="container-page max-w-5xl">
    <h2 className="text-3xl font-bold text-brand-dark">
      How We Work With You
    </h2>

    <div className="mt-8 grid gap-6 md:grid-cols-3">
      {/* Step 1 */}
      <div className="rounded-xl border border-gray-200 bg-surface p-6 shadow-sm flex flex-col justify-between">
        <div>
          <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
            Step 1
          </span>
          <h3 className="mt-3 text-lg font-bold text-brand-dark">
            The first visit is free and carries no obligation
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            We measure the space, look at the foundation walls, the panel, and the mechanical room, and ask how your family actually spends its evenings. Do the kids need a place to be loud? Does a parent need a quiet bedroom with its own bathroom? Those answers drive the layout.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="rounded-xl border border-gray-200 bg-surface p-6 shadow-sm flex flex-col justify-between">
        <div>
          <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
            Step 2
          </span>
          <h3 className="mt-3 text-lg font-bold text-brand-dark">
            You get a design and a written, itemized quote
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            It lists the scope, materials, and labor, so there are no vague allowances to argue about later. If something hidden turns up once the old finishes come down, we document it with photos and a written cost before any extra work goes ahead.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="rounded-xl border border-gray-200 bg-surface p-6 shadow-sm flex flex-col justify-between">
        <div>
          <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-bold text-brand">
            Step 3
          </span>
          <h3 className="mt-3 text-lg font-bold text-brand-dark">
            Your project manager runs the job
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            They schedule the trades, book inspections and keep you updated. We protect the stairs and the route through your home, and keep dust contained so the rest of the house stays livable. Our article on{" "}
            <Link href="https://y2designandbuild.com/blog/what-to-expect-during-home-renovation-markham" className="font-semibold text-brand hover:underline">
              what to expect during a home renovation
            </Link>{" "}
            covers the day-to-day in more detail.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* FAQs */}
        <FAQ
          items={basementCustomData.faqs}
          heading="Basement Renovation FAQs"
          subheading="Common questions about basement renovation projects in the GTA."
        />


{/* 5. More Ways We Can Help */}
<section className="section-pad bg-white">
  <div className="container-page max-w-5xl">
    <h2 className="section-heading">
      More Ways We Can Help
    </h2>
    <p className="mt-2 text-muted text-center">
      Many clients combine a basement renovation with other work. We also handle:
    </p>

    <div className="mt-8 flex flex-wrap gap-3 justify-center">
      {[
        { name: "Kitchen Renovation", href: "/kitchen-renovation" },
        { name: "Bathroom Renovation", href: "/bathroom-renovation" },
        { name: "Home Renovation", href: "/home-renovation" },
        { name: "Condo Renovation", href: "/condo-renovation" },
        { name: "Home Extensions", href: "/home-extensions" },
        { name: "ADU Construction", href: "/adu-construction" },
        { name: "Flooring & Stairs", href: "/flooring" },
        { name: "Commercial Renovation", href: "/commercial-renovation" },
      ].map((service) => (
        <Link
          key={service.name}
          href={service.href}
          className="rounded-full bg-surface px-5 py-2.5 text-sm font-medium text-brand-dark transition-colors duration-200 hover:bg-brand hover:text-white"
        >
          {service.name}
        </Link>
      ))}
    </div>

    <p className="mt-8 text-sm text-muted text-center">
      Before work begins, it&apos;s also worth reading{" "}
      <Link href="https://y2designandbuild.com/blog/does-your-home-insurance-cover-a-renovation" className="font-semibold text-brand hover:underline">
        whether your home insurance covers a renovation
      </Link>.
    </p>
  </div>
</section>

{/* 6. Book Your Free Basement Renovation Consultation (CTA Block) */}
<section className="section-pad bg-white text-white">
  <div className="container-page max-w-4xl text-center">
    <h2 className="section-heading">
      Book Your Free Basement Renovation Consultation
    </h2>
    <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">
      Tell us what you&apos;d like the space to become. We&apos;ll visit, measure and give you an itemized fixed-price quote, with no obligation attached.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <QuoteButton className="btn-primary cursor-pointer px-8 py-3 text-base">
        Get Free Itemized Quote
      </QuoteButton>
      <a href="tel:6475073639" className="btn-outline-light px-6 py-3 text-muted">
        Call (647) 507-3639 (English)
      </a>
      <a href="tel:6472942888" className="btn-outline-light px-6 py-3 text-muted">
        Call (647) 294-2888 (Mandarin)
      </a>
    </div>

    <p className="mt-6 text-sm text-muted">
      Or email us at{" "}
      <a href="mailto:info@y2canada.com" className="text-accent underline hover:text-white">
        info@y2canada.com
      </a>
    </p>
  </div>
</section>
        {/* Quote Form */}
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}