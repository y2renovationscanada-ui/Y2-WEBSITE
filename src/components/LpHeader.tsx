import Image from "next/image";
import Link from "next/link";
import { site, images, navLinks } from "@/lib/content";
import { QuoteButton } from "./QuoteModal";

export default function Header() {
  const tel = `tel:${site.phone.replace(/\D/g, "")}`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-page flex items-center gap-3 py-3">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label={`${site.name} — home`}>
          <Image src={images.logo} alt={site.name} width={120} height={40} className="h-10 w-auto object-contain" priority />
        </Link>

        <nav aria-label="Main navigation" className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex">
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3 lg:ml-0">
          <a
            href={tel}
            aria-label={`Call ${site.name} at ${site.phone}`}
            className="flex items-center gap-2 rounded-full p-2 font-bold text-brand-dark transition-colors duration-200 hover:text-brand md:px-3"
          >
            <svg className="h-5 w-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span className="hidden text-sm md:inline">{site.phone}</span>
          </a>
          <QuoteButton className="btn-primary cursor-pointer whitespace-nowrap px-5 py-2.5 text-sm">
            Get Free Quote
          </QuoteButton>
        </div>
      </div>

      <nav aria-label="Mobile navigation" className="border-t border-stone-200 bg-white lg:hidden">
        <div className="no-scrollbar container-page flex items-center gap-1 overflow-x-auto py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-stone-700 transition-colors duration-200 hover:bg-surface hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
