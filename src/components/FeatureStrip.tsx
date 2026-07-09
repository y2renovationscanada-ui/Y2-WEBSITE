import { features } from "@/lib/content";

/*
 * Custom renovation-trade icon set (24x24, 1.5 stroke — matches brand style):
 * 1. Fixed & transparent pricing  -> itemized estimate clipboard with dollar sign
 * 2. Dedicated project manager    -> foreman in a hard hat
 * 3. Licensed & insured pros      -> license certificate with award seal
 * 4. Liability insurance/warranty -> house protected inside a shield
 */
const icons = [
  <svg key="estimate" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M8 4H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2" />
    <path d="M12 9.5v8" />
    <path d="M14.1 11.3c-.4-.65-1.2-1.05-2.1-1.05-1.16 0-2.1.67-2.1 1.5 0 1.95 4.2 1.05 4.2 3 0 .83-.94 1.5-2.1 1.5-.9 0-1.7-.4-2.1-1.05" />
  </svg>,
  <svg key="foreman" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6.75 10h10.5" />
    <path d="M8 10c0-2.6 1.75-4.4 4-4.4s4 1.8 4 4.4" />
    <path d="M12 5.6v1.6" />
    <path d="M9.2 10v1.2a2.8 2.8 0 005.6 0V10" />
    <path d="M4.75 20.75a7.25 7.25 0 0114.5 0" />
  </svg>,
  <svg key="license" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.5 13V6A1.5 1.5 0 0019 4.5H5A1.5 1.5 0 003.5 6v10A1.5 1.5 0 005 17.5h7.5" />
    <path d="M7 9h8" />
    <path d="M7 12.5h5" />
    <circle cx="16.75" cy="15.5" r="2.25" />
    <path d="M15.4 17.3l-.8 3.7 2.15-1.3 2.15 1.3-.8-3.7" />
  </svg>,
  <svg key="warranty" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2.75l7.25 2.9v5.6c0 4.6-3.05 8.35-7.25 9.75-4.2-1.4-7.25-5.15-7.25-9.75v-5.6z" />
    <path d="M8.4 11.8L12 8.9l3.6 2.9" />
    <path d="M9.6 10.85V15h4.8v-4.15" />
  </svg>,
];

export default function FeatureStrip() {
  return (
    <section className="border-b border-stone-200 bg-white">
      <div className="container-page py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <div key={feature.title} className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                {icons[i]}
              </div>
              <h3 className="text-base font-bold text-brand-dark">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
