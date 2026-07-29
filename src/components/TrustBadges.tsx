import { trustBadges } from "@/lib/content";

/*
 * Custom renovation-trade icon set (shared visual language with FeatureStrip):
 * rating -> 5-star, shield -> license certificate with seal,
 * award -> hard hat (years on the tools), price -> itemized estimate clipboard
 */
const badgeIcons: Record<string, React.ReactNode> = {
  rating: (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
  shield: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.5 13V6A1.5 1.5 0 0019 4.5H5A1.5 1.5 0 003.5 6v10A1.5 1.5 0 005 17.5h7.5" />
      <path d="M7 9h8" />
      <path d="M7 12.5h5" />
      <circle cx="16.75" cy="15.5" r="2.25" />
      <path d="M15.4 17.3l-.8 3.7 2.15-1.3 2.15 1.3-.8-3.7" />
    </svg>
  ),
  award: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 10.5V6a1 1 0 011-1h2a1 1 0 011 1v4.5" />
      <path d="M14 6.3a6 6 0 014 5.7v3" />
      <path d="M6 15v-3a6 6 0 014-5.7" />
      <rect x="2.5" y="15" width="19" height="4" rx="1" />
    </svg>
  ),
  price: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M8 4H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2" />
      <path d="M12 9.5v8" />
      <path d="M14.1 11.3c-.4-.65-1.2-1.05-2.1-1.05-1.16 0-2.1.67-2.1 1.5 0 1.95 4.2 1.05 4.2 3 0 .83-.94 1.5-2.1 1.5-.9 0-1.7-.4-2.1-1.05" />
    </svg>
  ),
};

/** Compact trust strip shown immediately below landing-page heroes. */
export default function TrustBadges() {
  return (
    <section className="border-b border-stone-200 bg-white" aria-label="Why homeowners trust Y2 Design & Build">
      <div className="container-page grid grid-cols-2 gap-x-4 gap-y-5 py-6 lg:grid-cols-4">
        {trustBadges.map((badge) => (
          <div key={badge.label} className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
              {badgeIcons[badge.type]}
            </span>
            <span>
              <span className="block text-sm font-bold leading-tight text-brand-dark">{badge.label}</span>
              <span className="block text-xs text-muted">{badge.detail}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
