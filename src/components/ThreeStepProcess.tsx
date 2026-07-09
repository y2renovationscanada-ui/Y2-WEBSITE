import { site, threeSteps } from "@/lib/content";
import { QuoteButton } from "./QuoteModal";

/** Compact 3-step "how it works" section for service & location landing pages. */
export default function ThreeStepProcess({ heading = "Get Started in 3 Simple Steps" }: { heading?: string }) {
  return (
    <section className="section-pad bg-surface">
      <div className="container-page">
        <h2 className="section-heading">{heading}</h2>
        <p className="section-sub">From first call to final walkthrough — here&apos;s exactly how it works.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {threeSteps.map((step) => (
            <div key={step.step} className="card relative p-6 pt-8 text-center">
              <span className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-brand text-lg font-bold text-white shadow-md">
                {step.step}
              </span>
              <h3 className="text-lg font-bold text-brand-dark">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <QuoteButton className="btn-primary cursor-pointer">Get My Free Quote</QuoteButton>
          <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="text-sm font-bold text-brand-dark hover:text-brand">
            or call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
