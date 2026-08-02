import { images, site } from "./content";
import { formatNeighborhoodList, targetCities, type CityData } from "./locations";

export type LocationServiceKey = "kitchen" | "bathroom" | "basement" | "home" | "condo" | "extension" | "adu";

export const serviceMeta: Record<
  LocationServiceKey,
  {
    name: string;
    slug: string;
    keyword: string;
    heroImage: string;
    priceLine: string;
    durationLine: string;
    focusBullets: string[];
  }
> = {
  kitchen: {
    name: "Kitchen Renovation",
    slug: "kitchen-renovation",
    keyword: "kitchen renovation",
    heroImage: images.kitchen,
    priceLine:
      "Kitchen renovations typically start around $15,000–$50,000. Luxury custom kitchens with premium cabinetry and structural changes range from $50,000–$100,000.",
    durationLine: "Most kitchen renovations take 3–6 weeks depending on scope, cabinetry lead times, and permits.",
    focusBullets: [
      "Custom cabinetry, countertops & islands",
      "Layout changes & open-concept conversions",
      "Premium appliances, lighting & fixtures",
    ],
  },
  bathroom: {
    name: "Bathroom Renovation",
    slug: "bathroom-renovation",
    keyword: "bathroom renovation",
    heroImage: images.bathroom,
    priceLine:
      "Powder rooms range from $2,500–$5,000. Full bathrooms start at $9,800–$18,000. Luxury bathrooms range from $18,000–$35,000.",
    durationLine: "Most bathrooms are finished in 7–10 days. Four-piece bathrooms take 10–12 days, and luxury bathrooms run around 2–3 weeks.",
    focusBullets: [
      "Walk-in showers & freestanding soaker tubs",
      "Heated floors & modern vanities",
      "Condo board approvals & elevator booking handled for you",
    ],
  },
  basement: {
    name: "Basement Renovation",
    slug: "basement-renovation",
    keyword: "basement renovation",
    heroImage: images.basement,
    priceLine: "Basement renovations typically range from $50–$120 per sq ft depending on layout, moisture mitigation, and finish level.",
    durationLine: "Most basement finishing projects take 4–8 weeks depending on scope and permit requirements.",
    focusBullets: [
      "Legal secondary suites & in-law units",
      "Rec rooms, home theatres & home gyms",
      "Waterproofing, insulation & proper egress",
    ],
  },
  home: {
    name: "Home Renovation",
    slug: "home-renovation",
    keyword: "home renovation",
    heroImage: images.residential,
    priceLine: "Full home renovations typically range from $200–$250 per sq ft, or $50,000–$150,000+ depending on scope and finishes.",
    durationLine: "Whole-home renovations typically run 8–14 weeks depending on scope, permits, and structural work.",
    focusBullets: [
      "Whole-house & room-by-room remodeling",
      "Open-concept conversions & additions",
      "Permit management from start to finish",
    ],
  },
  condo: {
    name: "Condo Renovation",
    slug: "condo-renovation",
    keyword: "condo renovation",
    heroImage: images.condo,
    priceLine:
      "Full condo renovations typically range from $50–$250 per sq ft depending on scope, finishes, and building requirements. Kitchen- and bathroom-only projects are quoted individually.",
    durationLine:
      "Condo bathrooms are typically finished in 7–12 days and kitchens in 3–6 weeks. Full-suite renovations usually run 4–8 weeks depending on building access rules.",
    focusBullets: [
      "Kitchens, bathrooms & full-suite remodels",
      "Board approvals, COI & elevator booking handled",
      "Quiet-hours scheduling & building-rule compliance",
    ],
  },
  extension: {
    name: "Home Extensions",
    slug: "home-extensions",
    keyword: "home extension",
    heroImage: images.extension,
    priceLine:
      "Home additions and extensions vary widely by size and finish — most GTA projects start in the tens of thousands and are quoted after a free design consultation and zoning review.",
    durationLine:
      "Design and permits typically take 2–4 months depending on the municipality. Construction usually runs 3–6 months from breaking ground to final inspection.",
    focusBullets: [
      "Rear & side extensions and second-storey additions",
      "Garden suites, laneway housing & in-law suites",
      "Architectural drawings, engineering & permits managed",
    ],
  },
  adu: {
    name: "ADU & Garden Suite",
    slug: "adu-construction",
    keyword: "ADU / garden suite",
    heroImage: images.adu,
    priceLine:
      "Garden suites and ADUs are quoted after a free site review — cost depends on size, foundation, servicing, and finish level. We provide fixed, itemized estimates before work begins.",
    durationLine:
      "Design, zoning, and permits often take 2–5 months. Construction typically runs 3–6 months once approvals are in place.",
    focusBullets: [
      "Garden suites, laneway suites & coach houses",
      "Zoning review & municipal approvals managed",
      "Design, build & servicing under one contract",
    ],
  },
};

export const locationServiceKeys = Object.keys(serviceMeta) as LocationServiceKey[];

export type LocationPageData = {
  serviceKey: LocationServiceKey;
  service: (typeof serviceMeta)[LocationServiceKey];
  city: CityData;
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  intro: string;
  localSectionBody: string;
  faqs: { question: string; answer: string }[];
};

export function getLocationPageData(serviceKey: LocationServiceKey, citySlug: string): LocationPageData | undefined {
  const service = serviceMeta[serviceKey];
  const city = targetCities.find((c) => c.slug === citySlug);
  if (!service || !city) return undefined;

  const neighborhoods = formatNeighborhoodList(city);

  const h1 = `${service.name} in ${city.name}, ON`;
  const metaTitle = `${service.name} in ${city.name}, ON`;
  const metaDescription = `Professional ${service.keyword} services in ${city.name}, ${city.region}. Free quotes, fixed pricing & ${site.yearsExperience}+ years of GTA renovation experience. Call ${site.phone}.`;

  const intro = `Looking for a trusted ${service.keyword} contractor in ${city.name}? Y2 Design & Build has completed renovation projects throughout ${city.region}, including ${neighborhoods}. ${city.blurb}`;

  const localSectionBody = `Every ${service.keyword} project in ${city.name} starts with a free, no-obligation in-home consultation near ${city.landmark}. We measure your space, discuss your goals, and provide a written, itemized quote — no pressure, no hidden fees. Whether your home is in ${neighborhoods}, our licensed and insured team manages design, permits, materials, and installation from start to finish.`;

  const faqs = [
    {
      question: `Do you offer ${service.keyword} services in ${city.name}?`,
      answer: `Yes — Y2 Design & Build proudly serves ${city.name} and the surrounding ${city.region} communities, including ${neighborhoods}. We provide free, no-obligation in-home consultations for every ${service.keyword} project.`,
    },
    {
      question: `How much does a ${service.keyword} cost in ${city.name}?`,
      answer: service.priceLine,
    },
    {
      question: `How long does a ${service.keyword} take in ${city.name}?`,
      answer: service.durationLine,
    },
    {
      question: `Are you licensed and insured to work in ${city.name}?`,
      answer: `Yes — all Y2 Design & Build trades are licensed, WSIB-insured, and experienced with ${city.region} municipal permit requirements.`,
    },
  ];

  return {
    serviceKey,
    service,
    city,
    path: `/${service.slug}/${city.slug}`,
    metaTitle,
    metaDescription,
    h1,
    heroSubtitle: `Fixed-price ${service.keyword} services for homeowners in ${city.name} and across ${city.region} — from free consultation to final walkthrough.`,
    intro,
    localSectionBody,
    faqs,
  };
}
