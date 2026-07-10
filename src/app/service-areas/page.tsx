import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { serviceAreaGroups, serviceAreas, site } from "@/lib/content";
import { targetCities } from "@/lib/locations";
import { locationServiceKeys, serviceMeta } from "@/lib/locationContent";

export const metadata = {
  title: `Service Areas | Renovation Contractor GTA | ${site.name}`,
  description:
    "Y2 Design & Build serves the entire Greater Toronto Area for kitchen, bathroom, basement, and home renovations — including Markham, Pickering, Oakville, Ajax & Scarborough.",
  alternates: { canonical: `${site.url}/service-areas` },
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Service Areas", href: "/service-areas" },
];

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems.map((b) => ({ name: b.name, url: site.url + b.href })))} />
      <Header />
      <main>
        <section className="bg-brand-dark py-16 text-white">
          <div className="container-page text-center">
            <div className="mb-4 flex justify-center">
              <Breadcrumbs items={breadcrumbItems} light />
            </div>
            <p className="text-sm font-bold uppercase tracking-wider text-accent">Greater Toronto Area</p>
            <h1 className="mt-3 text-4xl font-bold">Renovation Service Areas Across the GTA</h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/80">
              {site.name} proudly serves homeowners across the GTA and surrounding communities.
            </p>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="container-page">
            <h2 className="section-heading">Featured Renovation Service Areas</h2>
            <p className="section-sub">
              Explore dedicated kitchen, bathroom, basement & home renovation resources for our top-requested municipalities.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {targetCities.map((city) => (
                <div key={city.slug} className="card p-5">
                  <h3 className="text-base font-bold text-brand-dark">{city.name}, ON</h3>
                  <p className="mt-1 text-xs text-muted">{city.region}</p>
                  {city.slug === "toronto" ? (
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      Serving Rosedale, Forest Hill, Yorkville, Lawrence Park, Leaside & 15 more neighbourhoods.{" "}
                      <Link href="/toronto" className="font-semibold text-brand hover:underline">View Toronto guide →</Link>
                    </p>
                  ) : (
                    <p className="mt-2 text-xs leading-relaxed text-muted">Serving {city.neighborhoods.slice(0, 3).join(", ")} & more.</p>
                  )}
                  <ul className="mt-3 space-y-1.5">
                    {locationServiceKeys.map((key) => (
                      <li key={key}>
                        <Link href={`/${serviceMeta[key].slug}/${city.slug}`} className="text-sm text-brand hover:underline">
                          {serviceMeta[key].name} in {city.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-surface">
          <div className="container-page">
            <h2 className="section-heading">All Regions We Serve</h2>
            {serviceAreaGroups.map((group) => (
              <div key={group.region} className="mb-12 last:mb-0">
                <h3 className="mb-5 text-xl font-bold text-brand-dark">{group.region}</h3>
                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {group.areas.map((area) => (
                    <div key={area} className="card flex items-center gap-3 px-4 py-3">
                      <svg className="h-4 w-4 shrink-0 text-brand" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-pad bg-surface">
          <div className="container-page text-center">
            <h2 className="text-2xl font-bold text-brand-dark">All {serviceAreas.length} Service Areas</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {serviceAreas.map((area) => (
                <span key={area} className="rounded-full bg-white px-3 py-1.5 text-sm text-brand-dark shadow-sm">{area}</span>
              ))}
            </div>
            <Link href="/contact" className="btn-primary mt-10">Get a Free Quote</Link>
          </div>
        </section>

        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
