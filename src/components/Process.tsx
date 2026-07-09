import { processSteps, projectDetails, site } from "@/lib/content";

export default function Process() {
  return (
    <>
      <section className="section-pad bg-surface">
        <div className="container-page">
          <h2 className="section-heading">How a Y2 Renovation Comes Together</h2>
          <p className="section-sub">
            Four straightforward steps, refined over {site.yearsExperience}+ years of renovating GTA homes.
          </p>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {processSteps.map((step) => (
              <div key={step.step} className="card flex gap-5 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand text-lg font-bold text-white">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="section-heading">What You Can Expect On Site</h2>
          <p className="section-sub">Clear communication and a tidy job site, from day one to handover.</p>
          <div className="mx-auto mt-12 grid max-w-4xl gap-3">
            {projectDetails.map((detail) => (
              <div key={detail} className="flex items-start gap-3 rounded-xl bg-surface px-5 py-4">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">✓</span>
                <p className="text-sm leading-relaxed text-muted">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
