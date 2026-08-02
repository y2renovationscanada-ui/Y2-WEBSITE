import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import BookEmbed from "@/components/BookEmbed";
import { site, images } from "@/lib/content";
import { socialMetadata } from "@/lib/seo";

const title = "Book a Free In-Home Consult";
const description =
  "Schedule your free in-home renovation consultation with Y2 Design & Build. Round-robin booking with our GTA project consultants.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${site.url}/book` },
  robots: { index: true, follow: true },
  ...socialMetadata({
    title: `${title} | ${site.name}`,
    description,
    path: "/book",
    image: images.ogImage,
  }),
};

export default function BookPage() {
  return (
    <div className="flex h-dvh max-h-dvh flex-col overflow-hidden bg-[#f3efe8]">
      <header className="flex h-12 shrink-0 items-center justify-between border-b border-[#2e2620]/[0.08] bg-white px-4 sm:h-14 sm:px-6">
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

      <div className="shrink-0 border-b border-[#2e2620]/[0.06] bg-white px-4 py-2.5 sm:px-6 sm:py-3">
        <h1 className="text-lg font-bold tracking-tight text-[#2e2620] sm:text-xl">
          Book a Free In-Home Consult
        </h1>
        <p className="mt-0.5 hidden max-w-2xl text-sm text-[#766b5e] sm:block">
          Pick a time that works — we&apos;ll match you with the right Y2 consultant for your project.
        </p>
      </div>

      <Suspense
        fallback={
          <div className="flex min-h-0 flex-1 items-center justify-center text-sm text-[#766b5e]">
            Loading booking…
          </div>
        }
      >
        <div className="flex min-h-0 flex-1 flex-col">
          <BookEmbed />
        </div>
      </Suspense>
    </div>
  );
}
