import { getReviewsForService, googleReviews, reviews, type ReviewServiceKey } from "@/lib/content";

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
 * Social-proof section for landing pages: rating headline + an auto-scrolling
 * right-to-left review carousel. Service/city-relevant reviews lead the loop.
 * The track is duplicated for a seamless CSS marquee; the second copy is
 * aria-hidden so screen readers hear each review once.
 */
export default function ReviewStrip({ service, city }: { service?: ReviewServiceKey; city?: string }) {
  const matched = service
    ? getReviewsForService(service, city)
    : city
      ? [...reviews.filter((r) => r.location === city), ...reviews.filter((r) => r.location !== city)]
      : reviews;
  const rest = reviews.filter((r) => !matched.includes(r));
  const items = [...matched, ...rest];

  if (items.length === 0) return null;

  return (
    <section className="section-pad overflow-hidden bg-white">
      <div className="container-page">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-3xl font-bold text-brand-dark">Rated 5 Stars by GTA Homeowners</h2>
          <div className="flex items-center gap-2">
            <Stars />
            <span className="text-xl font-bold text-brand-dark">{googleReviews.rating}</span>
            <span className="text-sm text-muted">from {googleReviews.countLabel} Google reviews</span>
          </div>
          <p className="max-w-xl text-muted">Real reviews from real renovation clients across the Greater Toronto Area.</p>
        </div>
      </div>

      <div className="review-marquee mt-10" aria-label="Customer review carousel">
        <div className="review-marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {items.map((review) => (
                <figure key={`${copy}-${review.author}`} className="card mx-2.5 flex w-[300px] shrink-0 flex-col p-6 sm:w-[350px]">
                  <Stars />
                  <blockquote className="mt-3 text-sm leading-relaxed text-muted">&ldquo;{review.text}&rdquo;</blockquote>
                  <figcaption className="mt-auto pt-4">
                    <p className="font-semibold text-brand-dark">{review.author}</p>
                    <p className="text-xs text-muted">{review.location}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
