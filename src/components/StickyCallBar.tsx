import { site } from "@/lib/content";
import { QuoteButton } from "./QuoteModal";

/** Mobile-only sticky bottom bar: click-to-call + quote modal. */
export default function StickyCallBar() {
  return (
    <>
      {/* spacer so page content is never hidden behind the fixed bar */}
      <div className="h-16 lg:hidden" aria-hidden="true" />
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-stone-200 bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_12px_rgba(0,0,0,0.08)] lg:hidden">
        <a
          href={`tel:${site.phone.replace(/\D/g, "")}`}
          className="flex items-center justify-center gap-2 py-4 text-sm font-bold text-brand-dark transition-colors duration-200 hover:bg-surface"
        >
          <svg className="h-5 w-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          Call Now
        </a>
        <QuoteButton className="flex cursor-pointer items-center justify-center gap-2 bg-accent py-4 text-sm font-bold text-white transition-colors duration-200 hover:bg-accent-hover">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
          Get Free Quote
        </QuoteButton>
      </div>
    </>
  );
}
