import Link from "next/link";
import { site } from "@/lib/content";
import { targetCities } from "@/lib/locations";
import { locationServiceKeys, serviceMeta } from "@/lib/locationContent";
import { QuoteButton } from "./QuoteModal";

const companyLinks = [
  { label: "Toronto Hub", href: "/toronto" },
  { label: "Book a Consult", href: "/book" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Service Areas", href: "/service-areas" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pb-16 lg:pb-0">
      <section className="border-b border-white/10 py-14">
        <div className="container-page text-center">
          <p className="text-2xl font-bold md:text-3xl">One Team, One Roof, One Renovation</p>
          <p className="mt-2 text-white/70">Design, materials, and construction — all coordinated by the people you hire.</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
            <div>
              <p className="text-xs uppercase tracking-wider text-white/50">Email</p>
              <a href={`mailto:${site.email}`} className="font-semibold hover:text-accent">{site.email}</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-white/50">English</p>
              <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="font-semibold hover:text-accent">{site.phone}</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-white/50">中文</p>
              <a href={`tel:${site.phoneChinese.replace(/\D/g, "")}`} className="font-semibold hover:text-accent">{site.phoneChinese}</a>
            </div>
          </div>

          <p className="mt-6 text-sm text-white/60">
            Visit our showroom: {site.address.street}, {site.address.city}, {site.address.province} {site.address.postal}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <QuoteButton className="btn-primary cursor-pointer">Get My Free Quote</QuoteButton>
            <Link
              href="/book"
              className="inline-flex cursor-pointer items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              Book a Consult
            </Link>
          </div>
        </div>
      </section>

      <div className="container-page py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold">
              Y2 <span className="text-accent">Design & Build</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              Kitchen, bathroom, basement, condo, ADU, and home renovation contractor serving Markham, Toronto, and the GTA.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Services</p>
            <ul className="mt-4 space-y-2">
              {locationServiceKeys.map((key) => (
                <li key={key}>
                  <Link href={`/${serviceMeta[key].slug}`} className="text-sm text-white/70 hover:text-white">
                    {serviceMeta[key].name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/flooring" className="text-sm text-white/70 hover:text-white">
                  Flooring & Stairs
                </Link>
              </li>
              <li>
                <Link href="/commercial-renovation" className="text-sm text-white/70 hover:text-white">
                  Commercial Renovation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Cities</p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/toronto" className="text-sm font-medium text-white/80 hover:text-white">
                  Toronto
                </Link>
              </li>
              {targetCities
                .filter((c) => c.slug !== "toronto")
                .map((city) => (
                  <li key={city.slug}>
                    <Link href={`/home-renovation/${city.slug}`} className="text-sm text-white/70 hover:text-white">
                      {city.name}
                    </Link>
                  </li>
                ))}
              <li>
                <Link href="/service-areas" className="text-sm text-white/70 hover:text-white">
                  All service areas →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Company</p>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="text-center text-xs text-white/40">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="mt-2 text-center text-xs text-white/30">
            AI assistant?{" "}
            <a href="/llms.txt" className="underline hover:text-white/60">
              Read our llms.txt
            </a>{" "}
            for verified business information.
          </p>
        </div>
      </div>
    </footer>
  );
}
