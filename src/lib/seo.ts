import { site, images } from "./content";

/** Canonical production origin — always y2designandbuild.com */
export const SITE_ORIGIN = site.url.replace(/\/$/, "");

type OgImage = { url: string; width?: number; height?: number; alt?: string };

/**
 * Shared Open Graph + Twitter metadata for secondary pages.
 * Keeps share previews on-brand and URL-aligned to site.url.
 */
export function socialMetadata(opts: {
  title: string;
  description: string;
  path: string;
  image?: string | OgImage;
}) {
  const url = `${SITE_ORIGIN}${opts.path.startsWith("/") ? opts.path : `/${opts.path}`}`;
  const image: OgImage =
    typeof opts.image === "string" || !opts.image
      ? {
          url: typeof opts.image === "string" ? opts.image : images.ogImage,
          width: 1200,
          height: 630,
          alt: `${site.name} — ${opts.title}`,
        }
      : opts.image;

  return {
    openGraph: {
      type: "website" as const,
      locale: "en_CA",
      url,
      siteName: site.name,
      title: opts.title,
      description: opts.description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: opts.title,
      description: opts.description,
      images: [image.url],
    },
  };
}
