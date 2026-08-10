import { images, site } from "./content";
import { formatNeighborhoodList, targetCities, type CityData } from "./locations";

export type LocationServiceKey = "kitchen" | "bathroom" | "basement" | "home";

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

// Map of all 16 unique Service x City metadata combinations
type MetaOverrides = Record<
  LocationServiceKey,
  Record<string, { title: string; description: string }>
>;

const locationMetaOverrides: MetaOverrides = {
  kitchen: {
    markham: {
      title: `Kitchen Renovation Markham | Expert Contractors Across GTA`,
      description: `Markham kitchen renovations with custom cabinetry, quartz counters and smart layouts. Licensed trades and clear timelines. Book a free design consult.`,
    },
    oakville: {
      title: `Kitchen Renovation Oakville | Expert Contractors Across GTA`,
      description: `Custom kitchen renovations for Oakville homes: cabinetry, islands, counters and lighting, handled end to end. Request your free on-site consultation.`,
    },
  },
  bathroom: {
    toronto: {
      title: `Bathroom Renovation Toronto | Expert Contractors in GTA`,
      description: `Bathroom remodeling for Toronto homes and condos. Walk-in showers, custom tile and modern vanities, installed by a licensed team. Free on-site quote.`,
    },
    markham: {
      title: `Bathroom Renovation & Remodel Markham | Bathroom Contractors in GTA`,
      description: `Markham bathroom renovations covering layout changes, tiling, plumbing and custom vanities. Licensed team, clear timelines. Request your free estimate.`,
    },
    pickering: {
      title: `Bathroom Renovations Pickering | Bathroom renovation services in Ontario`,
      description: `Pickering bathroom renovations covering layout changes, tiling, plumbing and vanities. One licensed team, clear timelines. Get a free consultation.`,
    },
    oakville: {
      title: `Bathroom Renovation & Remodel Oakville | Get Free Consultation Today`,
      description: `Custom bathroom renovations for Oakville homes. Curbless showers, heated floors and bespoke vanities, expertly installed. Book a free design consult.`,
    },
    ajax: {
      title: `Bathroom Renovation & Remodel Ajax | Bathroom Contractors in GTA`,
      description: `Update your Ajax bathroom with new tile, vanities and walk-in showers. Licensed, insured contractors and clear fixed pricing. Book a free consultation.`,
    },
    scarborough: {
      title: `Bathroom Renovation & Remodel Scarborough | Book Free Consultation`,
      description: `Scarborough bathroom remodeling with new tile, tubs, showers and vanities. Licensed trades and honest fixed pricing. Book your free on-site estimate.`,
    },
  },
  basement: {
    markham: {
      title: `Basement Renovation Markham | Free Quotation Available`,
      description: `Markham basement renovations done right, from waterproofing and framing to legal secondary suites. Permits handled start to finish. Free consultation.`,
    },
    pickering: {
      title: `Basement Renovation Pickering | Get Free Consultation Today`,
      description: `Turn your Pickering basement into livable space. Full design-build service covering permits, framing, electrical and finishes. Request a free estimate.`,
    },
    oakville: {
      title: `Basement Renovation Oakville |  Get Free Consultation Today`,
      description: `Custom basement finishing for Oakville homes, including wet bars, home gyms and guest suites. Licensed, insured and permit-ready. Book your free quote.`,
    },
    ajax: {
      title: `Basement Renovation Ajax | Expert Finishing & Legal Basement`,
      description: `Finished basements, in-law suites and rec rooms for Ajax homeowners. Licensed contractors managing permits, framing and finishes. Free on-site quote.`,
    },
    scarborough: {
      title: `Basement Renovation Scarborough | Free Quotation Available`,
      description: `Basement finishing and legal apartment conversions for Scarborough homeowners. Permits, framing and finishes managed in-house. Free on-site estimate.`,
    },
  },
  home: {
    markham: {
      title: `Home Renovation Services Markham | Best Remodelling Across GTA`,
      description: `Whole-home renovations in Markham, from open-concept main floors to full gut remodels. Design, permits and construction under one roof. Free consult.`,
    },
    oakville: {
      title: `Home Renovations Oakville| Home Renovation Contractors Oakville`,
      description: `Full home renovations for Oakville properties, including additions, main floor redesigns and interiors. One licensed design-build team. Free consult.`,
    },
  },
};

function generateMetaTitle(serviceKey: LocationServiceKey, city: CityData): string {
  const override = locationMetaOverrides[serviceKey]?.[city.slug];
  if (override?.title) return override.title;
  return `${serviceMeta[serviceKey].name} in ${city.name}, ON | ${site.name}`;
}

function generateMetaDescription(serviceKey: LocationServiceKey, city: CityData): string {
  const override = locationMetaOverrides[serviceKey]?.[city.slug];
  if (override?.description) return override.description;
  return `Professional ${serviceMeta[serviceKey].keyword} services in ${city.name}, ${city.region}. Free quotes & fixed pricing. Call ${site.phone}.`;
}

export function getLocationPageData(serviceKey: LocationServiceKey, citySlug: string): LocationPageData | undefined {
  const service = serviceMeta[serviceKey];
  const city = targetCities.find((c) => c.slug === citySlug);
  if (!service || !city) return undefined;

  const neighborhoods = formatNeighborhoodList(city);

  const h1 = `${service.name} in ${city.name}, ON`;
  const metaTitle = generateMetaTitle(serviceKey, city);
  const metaDescription = generateMetaDescription(serviceKey, city);

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