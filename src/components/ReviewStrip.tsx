import { reviews } from "@/lib/content";

function Stars() {
  return (
    <span className="flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </span>
  );
}

/**
 * Compact social-proof section for landing pages: rating headline + 3 reviews.
 * Prefers reviews from the given city so location pages feel local.
 */
export default function ReviewStrip({ city }: { city?: string }) {
  const preferred = city ? reviews.filter((r) => r.location === city) : [];
  const rest = reviews.filter((r) => !preferred.includes(r));
  const items = [...preferred, ...rest].slice(0, 3);

  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-2">
            <Stars />
            <span className="text-2xl font-bold text-brand-dark">5.0</span>
          </div>
          <h2 className="text-3xl font-bold text-brand-dark">Rated 5 Stars by GTA Homeowners</h2>
          <p className="max-w-xl text-muted">Real reviews from real renovation clients across the Greater Toronto Area.</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((review) => (
            <figure key={review.author} className="card flex h-full flex-col p-6">
              <Stars />
              <blockquote className="mt-3 text-sm leading-relaxed text-muted">&ldquo;{review.text}&rdquo;</blockquote>
              <figcaption className="mt-auto pt-4">
                <p className="font-semibold text-brand-dark">{review.author}</p>
                <p className="text-xs text-muted">{review.location}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
