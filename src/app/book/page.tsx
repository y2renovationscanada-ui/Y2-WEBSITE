import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import BookEmbed from "@/components/BookEmbed";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Book a Free In-Home Consult | ${site.name}`,
  description: `Schedule your free in-home renovation consultation with Y2 Design & Build. Round-robin booking with our GTA project consultants.`,
  alternates: { canonical: `${site.url}/book` },
  robots: { index: false, follow: false },
};

export default function BookPage() {
  return (
    <div className="flex min-h-dvh flex-col bg-[#f3efe8]">
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-[#2e2620]/[0.08] bg-white px-4 sm:h-16 sm:px-6">
        <Link href="/" className="text-sm font-semibold tracking-tight text-[#2e2620] hover:text-brand">
          {site.name}
        </Link>
        <a
          href={`tel:${site.phone.replace(/\D/g, "")}`}
          className="text-sm font-medium text-[#766b5e] transition-colors hover:text-brand"
        >
          Call {site.phone}
        </a>
      </header>

      <Suspense
        fallback={
          <div className="flex flex-1 items-center justify-center text-sm text-[#766b5e]">
            Loading booking…
          </div>
        }
      >
        <BookEmbed />
      </Suspense>
    </div>
  );
}
