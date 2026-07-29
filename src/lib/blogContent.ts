import { images } from "./content";

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  /** ISO date, used for sitemap lastModified and article schema */
  date: string;
  readingMinutes: number;
  heroImage: string;
  heroAlt: string;
  sections: { heading?: string; paragraphs: string[]; bullets?: string[] }[];
  relatedLinks: { label: string; href: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "bathroom-renovation-cost-gta",
    title: "How Much Does a Bathroom Renovation Cost in the GTA? (2026 Guide)",
    metaTitle: "Bathroom Renovation Cost GTA 2026 | Y2 Design & Build",
    description:
      "What GTA homeowners actually pay for a bathroom renovation in 2026 — powder rooms, full bathrooms, and luxury ensuites — plus realistic timelines and what drives the price.",
    date: "2026-07-09",
    readingMinutes: 4,
    heroImage: images.bathroomPalmer1,
    heroAlt: "Completed bathroom renovation with marble counters and gold fixtures in Toronto",
    sections: [
      {
        paragraphs: [
          "If you're planning a bathroom renovation in Toronto, Markham, or anywhere in the GTA, the first question is almost always the same: what should this actually cost? Here are the real ranges we quote homeowners in 2026 — and what moves a project from one end of the range to the other.",
        ],
      },
      {
        heading: "Bathroom Renovation Costs by Project Type",
        paragraphs: ["Every project is different, but most GTA bathroom renovations land in one of three ranges:"],
        bullets: [
          "Powder room (2-piece): $2,500–$5,000 — new vanity, toilet, lighting, paint, and flooring in a compact space.",
          "Full bathroom (3–4 piece): $9,800–$18,000 — complete gut and rebuild with new tile, tub or shower, vanity, and fixtures.",
          "Luxury bathroom or primary ensuite: $18,000–$35,000 — heated floors, curbless glass showers, freestanding tubs, custom millwork, and premium tile.",
        ],
      },
      {
        heading: "What Actually Drives the Price",
        paragraphs: [
          "Two bathrooms with the same footprint can be quoted thousands of dollars apart. The biggest factors: whether plumbing fixtures stay in place or move, the tile you choose and how much of the room it covers, custom glass versus standard enclosures, and vanity/countertop selections. In condos, building logistics — elevator booking, insurance certificates, and approved working hours — also affect scheduling and cost.",
          "One thing that shouldn't drive the price: surprises. A fixed-price, itemized quote locks your scope, materials, and labour before work starts — the price you approve is the price you pay.",
        ],
      },
      {
        heading: "How Long Does a Bathroom Renovation Take?",
        paragraphs: [
          "Most bathrooms are finished in 7–10 days. Four-piece bathrooms typically take 10–12 days, and luxury bathrooms run around 2–3 weeks depending on tile work and custom orders. The key to hitting those timelines is having every material on site before demolition starts — which is how we schedule every project.",
        ],
      },
      {
        heading: "How to Keep Your Budget Under Control",
        paragraphs: [
          "Get an itemized quote, not a lump sum — you can't manage what you can't see. Choose your finishes before work begins, since mid-project changes are the most common source of budget creep. And ask your contractor how they source materials: we buy through our own wholesale suppliers, which typically saves homeowners the retail markup on tile, vanities, and fixtures.",
        ],
      },
      {
        heading: "Get a Real Number for Your Bathroom",
        paragraphs: [
          "Ranges are a starting point — your home deserves a real quote. We offer free, no-obligation in-home consultations across the GTA: we measure your space, talk through what you want, and give you a written, itemized price. No pressure, no hidden fees.",
        ],
      },
    ],
    relatedLinks: [
      { label: "Bathroom Renovation Services", href: "/bathroom-renovation" },
      { label: "Condo Renovation Services", href: "/condo-renovation" },
      { label: "Bathroom Renovation in Toronto", href: "/bathroom-renovation/toronto" },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
