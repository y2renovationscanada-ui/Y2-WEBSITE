import Link from "next/link";
import { offices, serviceAreas, site } from "@/lib/content";
import { targetCities } from "@/lib/locations";
import { locationServiceKeys, serviceMeta } from "@/lib/locationContent";

export default function Locations() {
  return (
    <>
      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="section-heading">Servicing Locations Across The GTA</h2>
          <p className="section-sub">Visit our Markham showroom, or let us come to you — we renovate homes throughout the Greater Toronto Area.</p>

          <div className="mt-12 grid gap-8 lg:grid-cols-[320px_1fr]">
            {offices.map((office) => (
              <div key={office.name} className="card h-fit p-6">
                <h3 className="text-lg font-bold text-brand">{office.name}</h3>
                <p className="mt-1 text-sm text-muted">{office.hours}</p>
                <a href={`tel:${office.phone.replace(/\D/g, "")}`} className="mt-3 block font-semibold text-brand-dark hover:text-brand">
                  {office.phone}
                </a>
                <p className="mt-2 text-sm text-muted">{office.address}</p>
                <Link href="/contact" className="mt-4 inline-block text-sm font-semibold text-brand hover:underline">
                  Book a showroom visit →
                </Link>
              </div>
            ))}

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted">Areas We Serve</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span key={area} className="rounded-full bg-surface px-3 py-1.5 text-sm text-brand-dark">{area}</span>
                ))}
                <Link href="/service-areas" className="rounded-full bg-brand px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-dark">
                  View all areas →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="section-heading">Renovation Services By City</h2>
          <p className="section-sub">
            Dedicated resources for our most-requested renovation municipalities — Toronto, Markham, Pickering, Oakville, Ajax & Scarborough.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {targetCities.map((city) => (
              <div key={city.slug} className="card p-5">
                <h3 className="text-base font-bold text-brand-dark">{city.name}, ON</h3>
                <p className="mt-1 text-xs text-muted">{city.region}</p>
                {city.slug === "toronto" && (
                  <Link href="/toronto" className="mt-2 inline-block text-sm font-semibold text-brand hover:underline">
                    Toronto renovation guide →
                  </Link>
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
    </>
  );
}
