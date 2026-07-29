import { pricing } from "@/lib/content";
import Link from "next/link";

export default function Pricing() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-page">
        <p className="text-center text-sm font-bold uppercase tracking-wider text-brand">What will the renovation cost?</p>
        <h2 className="mt-2 section-heading">Average Renovation Costs</h2>
        <p className="section-sub">Realistic pricing ranges to help you plan with confidence.</p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pricing.map((item) => (
            <div key={item.title} className="card p-6">
              <h3 className="font-bold text-brand-dark">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted">
          Every project is different.{" "}
          <Link href="/contact" className="font-semibold text-brand hover:underline">Contact us</Link> for a free itemized estimate.
        </p>
      </div>
    </section>
  );
}
