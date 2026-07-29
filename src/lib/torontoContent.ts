import { site } from "./content";
import { getCityBySlug } from "./locations";

const toronto = getCityBySlug("toronto")!;

export const torontoNeighborhoods = toronto.neighborhoods;

export const torontoFaqs = [
  {
    question: "Do you renovate homes in Rosedale, Forest Hill, and Yorkville?",
    answer:
      "Yes — Y2 Design & Build regularly completes kitchen, bathroom, basement, and full-home renovations in Rosedale, Forest Hill South, Forest Hill North, Yorkville, Lawrence Park, Moore Park, and surrounding Toronto neighbourhoods. We understand the permit requirements and finish standards these properties demand.",
  },
  {
    question: "How much does a renovation cost in Toronto?",
    answer:
      "Kitchen renovations in Toronto typically start around $15,000–$50,000. Full bathrooms from $9,800–$18,000. Whole-home renovations range from $200–$250 per sq ft depending on scope. Y2 provides free, itemized estimates tailored to your Toronto property.",
  },
  {
    question: "Do you handle Toronto Building permits?",
    answer:
      "Yes — we manage the full permit process with Toronto Building, ESA, and TSSA for structural, plumbing, and electrical work. This is especially important in heritage areas like Rosedale, The Annex, and Casa Loma where additional approvals may apply.",
  },
  {
    question: "Can you renovate a Toronto home while we still live in it?",
    answer:
      "In most cases, yes. We use dust containment, floor protection, and phased scheduling to minimize disruption — a common approach for occupied homes in Leaside, Summerhill, Bedford Park-Nortown, and Willowdale.",
  },
  {
    question: "Which Toronto neighbourhoods do you serve?",
    answer: `We serve homeowners across Toronto including ${torontoNeighborhoods.slice(0, 8).join(", ")}, and more. Visit our Toronto renovation page for the full list of neighbourhoods we work in.`,
  },
];

export const torontoServices = [
  {
    title: "Kitchen Renovation",
    description: "Custom kitchens for Toronto homes — from compact Annex layouts to expansive Forest Hill and Rosedale estates.",
    href: "/kitchen-renovation/toronto",
  },
  {
    title: "Bathroom Renovation",
    description: "Luxury ensuites, powder rooms, and full bathroom overhauls in Yorkville condos and century homes alike.",
    href: "/bathroom-renovation/toronto",
  },
  {
    title: "Basement Renovation",
    description: "Finished basements, legal suites, and rec rooms for Toronto properties in Leaside, Willowdale, and beyond.",
    href: "/basement-renovation/toronto",
  },
  {
    title: "Full Home Renovation",
    description: "Whole-house transformations and room-by-room remodeling across Toronto's most established neighbourhoods.",
    href: "/home-renovation/toronto",
  },
  {
    title: "Condo Renovation",
    description: "Full condo remodels in Yorkville, CityPlace, and Harbourfront towers — board approvals, elevator booking, and quiet hours handled.",
    href: "/condo-renovation",
  },
  {
    title: "Flooring & Stairs",
    description: "Hardwood, engineered flooring, and staircase upgrades for Toronto homes of every era and style.",
    href: "/flooring",
  },
];

export const torontoMeta = {
  title: `Kitchen, Bathroom & Home Renovation in Toronto | ${site.name}`,
  description: `Expert renovation contractor serving Rosedale, Forest Hill, Yorkville, Lawrence Park, Leaside, The Bridle Path & 14+ Toronto neighbourhoods. Free quotes from ${site.name}.`,
  canonical: `${site.url}/toronto`,
  h1: "Kitchen, Bathroom & Home Renovation in Toronto",
  heroSubtitle:
    "Trusted renovation contractor for Toronto's most distinctive neighbourhoods — from heritage homes in Rosedale and Forest Hill to modern residences in Yorkville, Leaside, and Willowdale.",
};
