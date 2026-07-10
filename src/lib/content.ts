export const site = {
  name: "Y2 Design & Build",
  shortName: "Y2",
  tagline: "Your Trusted Experts for Kitchen, Bathroom and Home Renovations in the Greater Toronto Area",
  phone: "(647) 507-3639",
  phoneChinese: "(647) 294-2888",
  phoneHeader: "(647) 503-2374",
  email: "info@y2canada.com",
  url: "https://y2designandbuild.com",
  address: {
    street: "3400 14th Ave Unit 16",
    city: "Markham",
    province: "ON",
    postal: "L3R 0H7",
  },
  yearsExperience: 14,
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61552924365145",
    instagram: "https://www.instagram.com/y2designandbuild",
  },
};

export const images = {
  logo: "/images/logo.png",
  hero: ["/images/hero-showroom.webp", "/images/hero-1.webp", "/images/hero-2.webp", "/images/hero-3.webp"],
  heroShowroom: "/images/hero-showroom.webp",
  ogImage: "/images/og-home.jpg",
  kitchen: "/images/kitchen-ai.webp",
  kitchenDesign: "/images/kitchen-design.webp",
  bathroom: "/images/bathroom-renovation-ai-2.webp",
  bathroomHero: "/images/bathroom-hero.webp",
  bathroom2: "/images/bathroom-2.webp",
  bathroom3: "/images/bathroom-3.webp",
  commercial: "/images/commercial-warehouse.webp",
  basement: "/images/basement.webp",
  residential: "/images/home-renovation-ai.webp",
  flooring: "/images/flooring.webp",
  stairs: "/images/stairs.webp",
  closet: "/images/closet.webp",
  gallery: {
    kitchen: ["/images/kitchen-gall-1.webp", "/images/kitchen-gall-5.webp", "/images/kitchen.webp", "/images/kitchen-design.webp"],
    bathroom: ["/images/bathroom-hero.webp", "/images/bathroom-gall-1.webp", "/images/bathroom-gall-10.webp", "/images/bathroom-2.webp", "/images/bathroom-3.webp"],
    commercial: ["/images/commercial-warehouse.webp", "/images/hero-2.webp", "/images/residential.webp"],
    basement: ["/images/basement-gall-1.webp", "/images/basement.webp"],
    home: ["/images/residential.webp", "/images/hero-2.webp", "/images/hero-3.webp"],
    flooring: ["/images/flooring.webp", "/images/stairs.webp"],
  },
};

export const navLinks = [
  { label: "Kitchen", href: "/kitchen-renovation" },
  { label: "Bathroom", href: "/bathroom-renovation" },
  { label: "Basement", href: "/basement-renovation" },
  { label: "Full Homes", href: "/home-renovation" },
  { label: "Flooring", href: "/flooring" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
];

export const hero = {
  badge: "Licensed, Insured & Locally Owned | Markham, ON",
  title: "Kitchen, Bathroom & Home Renovation Contractor in the Greater Toronto Area",
  subtitle:
    "One team, one contract, one fixed price. Y2 Design & Build renovates kitchens, bathrooms, basements, and full homes for homeowners in Markham, Pickering, Oakville, Ajax, Scarborough, and across the GTA.",
  bullets: [
    "Fixed-price, itemized quotes — no surprises at handover",
    "Licensed & WSIB-insured trades on every project",
    "14+ years and 500+ completed renovations across the GTA",
  ],
};

export const googleReviews = {
  rating: "5.0",
  count: 100,
  countLabel: "100+",
};

export const trustBadges = [
  { label: "5.0 Google-Rated", detail: "100+ homeowner reviews", type: "rating" as const },
  { label: "Licensed & Insured", detail: "WSIB-covered trades", type: "shield" as const },
  { label: "14+ Years Experience", detail: "500+ projects completed", type: "award" as const },
  { label: "Fixed-Price Quotes", detail: "free & no obligation", type: "price" as const },
];

export const threeSteps = [
  {
    step: "1",
    title: "Book Your Free Consultation",
    description: "Call or request a quote online. We visit your home, take measurements, and listen to what you want — no pressure, no charge.",
  },
  {
    step: "2",
    title: "Approve Your Fixed-Price Quote",
    description: "You get a written, itemized quote covering scope, materials, and labour. The price you approve is the price you pay.",
  },
  {
    step: "3",
    title: "We Build. You Move In.",
    description: "One dedicated project manager runs your renovation on a locked schedule — permits, trades, and cleanup all handled for you.",
  },
];

export const promo = {
  title: "Get a Free, No-Obligation Consultation",
  subtitle: "when you renovate with Y2 Design & Build",
  expiry: "Book your assessment today — limited availability",
};

export const features = [
  {
    title: "Fixed and Transparent Pricing",
    description: "Every project is quoted from day one — no hidden fees, no surprises at handover.",
  },
  {
    title: "Dedicated Project Manager",
    description: "One point of contact coordinating trades so your project stays on budget and on schedule.",
  },
  {
    title: "Licensed & Insured Professionals",
    description: "All trades are licensed, certified, and WSIB-insured for your peace of mind.",
  },
  {
    title: "Liability Insurance and Warranty",
    description: "Every project is backed by comprehensive insurance and workmanship warranty.",
  },
];

export const services = [
  {
    title: "Kitchen Renovation",
    description: "Custom kitchen remodeling with innovative design and expert craftsmanship built to last.",
    href: "/kitchen-renovation",
    image: images.kitchen,
    location: "Aurora, ON",
  },
  {
    title: "Bathroom Renovation",
    description: "Calming, luxurious bathrooms tailored to your style — from modern upgrades to full overhauls.",
    href: "/bathroom-renovation",
    image: images.bathroom,
    location: "Toronto, ON",
  },
  {
    title: "Home Renovation",
    description: "Full-service residential remodeling from concept and design to construction and final touches.",
    href: "/home-renovation",
    image: images.residential,
    location: "Richmond Hill, ON",
  },
  {
    title: "Basement Renovation",
    description: "Transform your basement into functional living space — rec rooms, suites, and more.",
    href: "/basement-renovation",
    image: images.basement,
    location: "Markham, ON",
  },
  {
    title: "Condo Renovation",
    description: "Full condo remodels with board approvals, elevator booking, and building rules handled for you.",
    href: "/condo-renovation",
    image: images.kitchenDesign,
    location: "Toronto, ON",
  },
  {
    title: "Home Extensions",
    description: "Rear extensions, second-storey additions, and garden suites — design, permits, and build under one contract.",
    href: "/home-extensions",
    image: images.hero[3],
    location: "North York, ON",
  },
  {
    title: "Flooring & Stairs",
    description: "Engineered hardwood, vinyl plank, laminate, ceramic tile, and LVT installation.",
    href: "/flooring",
    image: images.flooring,
    location: "Brampton, ON",
  },
  {
    title: "Commercial Remodel",
    description: "Office, retail, and commercial property renovations with quality and integrity.",
    href: "/commercial-renovation",
    image: images.commercial,
    location: "Toronto, ON",
  },
];

export const advantages = [
  "One project manager assigned to your job from the first site visit through handover — you're never chasing down different trades for answers.",
  "In-house design support and 3D visuals when your project would benefit from seeing the space before construction starts.",
  "We pull and manage every required permit ourselves — Toronto Building, ESA, TSSA, and local municipal sign-offs.",
  "Materials sourced through our own wholesale suppliers, so you get better pricing without the retail markup.",
  "Your contract is itemized upfront — scope, materials, and labour are all spelled out before work begins.",
  "A responsive team that stays reachable well past your final walkthrough, not just until the invoice is paid.",
];

export const comparison = {
  usual: [
    "Inconsistent management",
    "Price changes mid-project",
    "No material coordination",
    "Generic designs",
    "Unqualified specialists",
  ],
  y2: [
    "Continuous customer support",
    "Upfront renovation proposal",
    "Material selection and delivery",
    "Professional design assistance",
    "Skilled, licensed team",
  ],
};

export const processSteps = [
  {
    step: "01",
    title: "In-Home Consultation & Estimate",
    description:
      "We visit your home to take measurements, talk through your goals, and check the plumbing, electrical, and layout details that affect scope. There's no pressure and no charge — you'll leave the visit with a clear, written estimate to review on your own time.",
  },
  {
    step: "02",
    title: "Design & Planning",
    description:
      "Depending on your project, this step can be as light as confirming finishes or as involved as full design work. When your renovation calls for it, our design team lays out layout options with 3D visuals — and if structural changes are involved, we handle the engineering and pull the permits ourselves.",
  },
  {
    step: "03",
    title: "Sourcing & Scheduling",
    description:
      "Once you've signed off on finishes, we order through our own supplier network to keep costs down — nothing gets substituted without checking with you first. From there, we line up delivery windows and trade schedules so materials arrive exactly when they're needed.",
  },
  {
    step: "04",
    title: "Build & Handover",
    description:
      "One project manager runs your build from day one to the final walkthrough, keeping trades on schedule and keeping you posted along the way. Once permits are closed and inspections pass, you get a full closeout package at handover.",
  },
];

export const pricing = [
  {
    title: "Full House Renovation",
    description: "Complete home renovations typically range from $200–$250 per sq ft depending on size, layout complexity, structural work, and finish selections.",
  },
  {
    title: "Condo Renovation",
    description: "Full condo renovations can range from $50–$250 per sq ft depending on scope, finishes, and structural requirements.",
  },
  {
    title: "Kitchen Renovation",
    description: "Kitchen renovations start around $15,000–$50,000. Luxury custom kitchens with premium cabinetry and structural changes range from $50,000–$100,000.",
  },
  {
    title: "Bathroom Renovation",
    description: "Powder rooms range from $2,500–$5,000. Full bathrooms start at $9,800–$18,000. Luxury bathrooms range from $18,000–$35,000.",
  },
  {
    title: "Basement Finishing",
    description: "Basement renovations typically range from $50–$120 per sq ft depending on layout, moisture mitigation, and finish level.",
  },
  {
    title: "Flooring",
    description: "Flooring installation typically ranges from $5–$25 per sq ft depending on material — laminate and vinyl plank on the lower end, engineered hardwood and premium tile on the higher end.",
  },
];

export const projectDetails = [
  "Before demolition starts, we protect your floors and stairs, seal off dust with proper containment, and post permits on site.",
  "Your project manager sends photo updates as work progresses, so you know what's happening even on days you're not home.",
  "Every Friday you get a short written note on where things stand and what's planned for the following week.",
  "If something changes mid-project, we price it and get your sign-off before touching it — no surprise line items on the final invoice.",
  "We walk the whole job ourselves and fix anything that's not up to standard before we ever call you in for the final walkthrough.",
  "At handover, you get every permit, certificate, and warranty document together in one package, plus as-built drawings for your records.",
];

export type ReviewServiceKey = "kitchen" | "bathroom" | "basement" | "home" | "flooring" | "commercial";

export type Review = {
  text: string;
  author: string;
  location: string;
  services: ReviewServiceKey[];
};

export const reviews: Review[] = [
  {
    text: "From the start, my wife and I felt completely at ease working with John and Andy. We couldn't be happier with our new bathrooms — finished exactly on schedule and within budget. The entire experience exceeded our expectations.",
    author: "Marc",
    location: "Markham",
    services: ["bathroom"],
  },
  {
    text: "It was so wonderful working with Y2. John was my primary contact and he was AMAZING and so professional. We redid our primary bathroom and flooring — everything was so organized and timely.",
    author: "Shararah S.",
    location: "Markham",
    services: ["bathroom", "flooring"],
  },
  {
    text: "We wanted to update our bathroom with a budget in mind. Y2 listened, started work the next day, and finished in 4 days. We are very pleased and would recommend them.",
    author: "Karthi",
    location: "Pickering",
    services: ["bathroom"],
  },
  {
    text: "Jeff from Y2 Design was very helpful throughout the process. The work was done efficiently and effectively. Will highly recommend.",
    author: "Smriti",
    location: "Markham",
    services: ["home"],
  },
  {
    text: "They did our flooring for us. Floors look great, and we're really happy!",
    author: "Lizzie",
    location: "Ajax",
    services: ["flooring"],
  },
  {
    text: "Our kitchen was completely outdated and Y2 turned it into something we're actually excited to cook in. The team walked us through every material choice and stuck to the timeline they gave us.",
    author: "David T.",
    location: "Oakville",
    services: ["kitchen"],
  },
];

const serviceReviewLabels: Record<ReviewServiceKey, string> = {
  kitchen: "kitchen renovation",
  bathroom: "bathroom renovation",
  basement: "basement renovation",
  home: "home renovation",
  flooring: "flooring",
  commercial: "commercial renovation",
};

export function getReviewsForService(service: ReviewServiceKey, city?: string) {
  const matched = reviews.filter((r) => r.services.includes(service));
  if (!city) return matched;
  const local = matched.filter((r) => r.location === city);
  const other = matched.filter((r) => r.location !== city);
  return [...local, ...other];
}

export function getServiceReviewLabel(service: ReviewServiceKey) {
  return serviceReviewLabels[service];
}

export const faqs = [
  {
    question: "What does a home renovation cost in the GTA?",
    answer: "Condo renovations range from $50–$250 per sq ft. Bathroom renovations start from $9,800. Kitchen renovations start from $15,000. Y2 provides free, itemized estimates tailored to your home.",
  },
  {
    question: "Will I need a permit for my renovation?",
    answer: "Renovations involving structural changes, new plumbing, or electrical panel work require City of Toronto permits. Y2 handles the entire permit process — drawings, applications, and inspections.",
  },
  {
    question: "How long does a home renovation take?",
    answer: "Timelines vary by scope. Most kitchen renovations take 3–6 weeks. Bathrooms 2–4 weeks. Full-home renovations 8–14 weeks. We provide a locked schedule at contract signing.",
  },
  {
    question: "Do you provide 3D renders before construction?",
    answer: "We offer 3D visualization and design previews when your project benefits from them — especially for kitchens, bathrooms, and full-home renovations. Not every project requires renders, but you'll always approve plans before we begin.",
  },
  {
    question: "What areas do you serve?",
    answer: "We serve the Greater Toronto Area including Toronto, Markham, Richmond Hill, Vaughan, Aurora, Newmarket, Scarborough, North York, Mississauga, Oakville, Burlington, and Durham Region. See our Service Areas page for the full list.",
  },
];

export const offices = [
  { name: "Showroom & Head Office", hours: "Mon–Fri: 8 a.m. – 6 p.m.", phone: site.phone, address: `${site.address.street}, ${site.address.city}, ${site.address.province} ${site.address.postal}` },
];

export const serviceAreas = [
  "Ajax", "Aurora", "Barrie", "Bowmanville", "Bradford", "Brooklin", "Burlington",
  "Caledon", "Courtice", "Durham Region", "Etobicoke", "Hamilton", "King City", "Kleinburg",
  "Markham", "Milton", "Mississauga", "Newmarket", "North York", "Oakville", "Oshawa", "Pickering",
  "Richmond Hill", "Scarborough", "Stouffville", "Thornhill", "Toronto", "Unionville", "Vaughan", "Whitby", "Woodbridge",
];

export const serviceAreaGroups = [
  {
    region: "City of Toronto",
    areas: ["Toronto", "Scarborough", "North York", "Etobicoke"],
  },
  {
    region: "York Region",
    areas: ["Markham", "Richmond Hill", "Vaughan", "Aurora", "Newmarket", "Thornhill", "Stouffville", "King City", "Woodbridge", "Unionville", "Kleinburg"],
  },
  {
    region: "Peel Region",
    areas: ["Mississauga", "Milton", "Caledon"],
  },
  {
    region: "Halton Region",
    areas: ["Oakville", "Burlington"],
  },
  {
    region: "Durham Region",
    areas: ["Durham Region", "Ajax", "Pickering", "Whitby", "Oshawa", "Bowmanville", "Courtice", "Brooklin"],
  },
  {
    region: "Greater GTA",
    areas: ["Hamilton", "Barrie", "Bradford"],
  },
];

export type ServicePageData = {
  slug: string;
  title: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  bullets: string[];
  promo?: { title: string; subtitle: string };
  trustTitle: string;
  trustBody: string;
  whyTitle: string;
  whyBody: string;
  whyBullets?: string[];
  sections: { heading: string; body: string; bullets?: string[] }[];
  gallery: string[];
  faqs: { question: string; answer: string }[];
};

export const servicePages: Record<string, ServicePageData> = {
  kitchen: {
    slug: "kitchen-renovation",
    title: "Kitchen Renovation",
    metaDescription: "Expert kitchen renovation contractor serving Markham, Pickering, Oakville, Ajax, Scarborough & the GTA. Custom design, fixed pricing & free quotes from Y2 Design & Build.",
    heroTitle: "Kitchen Renovation Experts in the GTA",
    heroSubtitle: "Enjoy a hassle-free kitchen renovation with expert design — we take care of everything from planning to final walkthrough.",
    bullets: ["Quality kitchen makeovers tailored to your home", "Premium cabinets, countertops, and fixtures", "Efficient timelines with dedicated project management"],
    promo: { title: "Free Kitchen Consultation", subtitle: "Book your in-home assessment today" },
    trustTitle: "Trustworthy Kitchen Renovation Experts",
    trustBody: "Y2 Design & Build specializes in custom kitchen remodeling across Aurora, Richmond Hill, Thornhill, Newmarket, Markham, Vaughan, Scarborough, North York, and Toronto.",
    whyTitle: "Why You Need A Professional Kitchen Contractor",
    whyBody: "Kitchen renovations involve electrical, plumbing, flooring, and cabinetry — all requiring specialized knowledge. Our team handles every component with precision.",
    whyBullets: ["Full upgrades and modern makeovers", "Cabinet refinishing and replacements", "Accessibility updates", "Custom layouts for any space"],
    sections: [
      { heading: "Comprehensive Kitchen Makeovers", body: "We stand out with top-notch customer service, immaculate handiwork, and competitive prices. Every team member is a trained, qualified kitchen contractor." },
      { heading: "Commitment-Free Assessments", body: "Whether you have a Pinterest board full of ideas or need inspiration, we'll work with you to plan your remodel from top to bottom." },
      { heading: "Top-Quality Materials", body: "We use the best tools and top-notch materials from trusted suppliers through our direct wholesale network — with full attention to detail every step of the way." },
    ],
    gallery: images.gallery.kitchen,
    faqs: [
      { question: "How much does a kitchen renovation cost in Toronto?", answer: "Kitchen renovations start around $15,000–$50,000. Luxury custom kitchens range from $50,000–$100,000. We provide free itemized estimates." },
      { question: "How long does a kitchen renovation take?", answer: "Most kitchen renovations take 3–6 weeks depending on scope, permits, and custom orders." },
      { question: "Do you handle permits?", answer: "Yes — we manage all required permits and inspections for electrical, plumbing, and structural work." },
    ],
  },
  bathroom: {
    slug: "bathroom-renovation",
    title: "Bathroom Renovation",
    metaDescription: "Trusted bathroom renovation contractor in Markham, Pickering, Oakville, Ajax, Scarborough & the GTA. Full overhauls, modern upgrades & free itemized quotes.",
    heroTitle: "Bathroom Renovation Experts in the GTA",
    heroSubtitle: "Start every day on a high note with a beautifully renovated bathroom — designed and built by trained, qualified renovation experts.",
    bullets: ["Complete bathroom overhauls and modern upgrades", "Premium fixtures, tile, and finishes", "No-obligation in-home assessments"],
    promo: { title: "Free Bathroom Consultation", subtitle: "Schedule your assessment today" },
    trustTitle: "Expert Bathroom Renovation Team",
    trustBody: "Y2 Design & Build creates calming, luxurious bathrooms tailored to your style across the entire GTA.",
    whyTitle: "Why Choose Professional Bathroom Renovators",
    whyBody: "Your bathroom is one of the most-used rooms in your home. Our team delivers durable, beautiful results with top-notch materials and meticulous craftsmanship.",
    whyBullets: ["Complete bathroom overhauls", "Modern fixture upgrades", "Accessible bathroom designs", "Powder rooms to luxury ensuites"],
    sections: [
      { heading: "Fantastic Bathroom Makeovers", body: "We combine world-class skills, professional training, and local values. We show up on time, stay on schedule, and clean up after ourselves." },
      { heading: "Thorough Assessments", body: "Whether you want a complete overhaul or to modernize specific elements, we inspect your space, discuss your ideas, and build a plan that fits your taste and budget." },
      { heading: "High-Quality Results", body: "Outstanding work that is as durable as it is beautiful — with beautiful colors, patterns, and finishing you'll enjoy for years." },
    ],
    gallery: images.gallery.bathroom,
    faqs: [
      { question: "How much does a bathroom renovation cost?", answer: "Powder rooms range from $2,500–$5,000. Full bathrooms start at $9,800–$18,000. Luxury bathrooms range from $18,000–$35,000." },
      { question: "How long does a bathroom reno take?", answer: "Most full bathrooms take 2–4 weeks. Powder rooms can be completed in 1–2 weeks." },
      { question: "Can you work in condos?", answer: "Yes — we handle condo board approvals, elevator booking, and building-specific requirements." },
    ],
  },
  basement: {
    slug: "basement-renovation",
    title: "Basement Renovation",
    metaDescription: "GTA basement renovation experts serving Markham, Pickering, Oakville, Ajax & Scarborough. Legal suites, rec rooms & waterproofing — free consultation.",
    heroTitle: "Basement Renovation Experts in the GTA",
    heroSubtitle: "Maximize your living space and boost property value with a professionally finished basement designed around your lifestyle.",
    bullets: ["Rec rooms, home theatres, and play spaces", "Legal secondary suites and in-law units", "Moisture mitigation and proper insulation"],
    promo: { title: "Free Basement Assessment", subtitle: "Discover your basement's potential" },
    trustTitle: "Trusted Basement Finishing Contractors",
    trustBody: "Y2 Design & Build provides full-service basement remodeling throughout the GTA — designed with your goals, budget, and lifestyle in mind.",
    whyTitle: "Why Finish Your Basement",
    whyBody: "Basement renovations are one of the best ways to expand living area and increase home value. Our qualified team handles everything from framing to final finishes.",
    whyBullets: ["Man-caves and entertainment rooms", "Home offices and gyms", "Kids' play spaces", "Rental income suites"],
    sections: [
      { heading: "In-Depth Assessments", body: "We evaluate your basement's layout, moisture conditions, and ceiling height to create a renovation plan that works." },
      { heading: "Quality Basement Finishing", body: "We put hard work and dedication into every step — from framing and electrical to drywall, flooring, and trim." },
      { heading: "On-Time, On-Budget Delivery", body: "We show up on time, complete work in the agreed timeframe, check in frequently, and clean up afterward." },
    ],
    gallery: images.gallery.basement,
    faqs: [
      { question: "How much does basement finishing cost?", answer: "Typically $50–$120 per sq ft depending on layout, moisture work, and finish level." },
      { question: "Can you create a legal rental suite?", answer: "Yes — we handle the design, permits, and construction for legal secondary suites including separate entrances and kitchens." },
      { question: "How do you handle moisture?", answer: "We assess existing conditions and include proper waterproofing, insulation, and ventilation in every plan." },
    ],
  },
  home: {
    slug: "home-renovation",
    title: "Home Renovation",
    metaDescription: "Full-service home renovation contractor in Markham, Pickering, Oakville, Ajax, Scarborough & across the GTA. Design-build remodeling, fixed pricing, free quotes.",
    heroTitle: "Home Renovation Experts in the GTA",
    heroSubtitle: "From whole-house transformations to focused room renovations — one team handles design, permits, materials, and construction.",
    bullets: ["Whole-house and room-by-room renovations", "14+ years of GTA experience", "Fixed-price contracts with itemized scope"],
    promo: { title: "Free Home Consultation", subtitle: "Plan your renovation with our experts" },
    trustTitle: "Trusted Residential Renovation Contractors",
    trustBody: "We're a locally owned renovation company delivering top-quality craftsmanship, attention to detail, and personalized service across the GTA.",
    whyTitle: "Why Homeowners Choose Y2",
    whyBody: "We handle every step from design to completion — fast, reliable, and efficient, turning your vision into reality at competitive local prices.",
    whyBullets: ["Kitchen and bathroom upgrades", "Full gut renovations", "Open-concept conversions", "Heritage and century home updates"],
    sections: [
      { heading: "Comprehensive Remodeling", body: "Years of experience remodeling homes across a wide range of budgets and styles. We show up on time, communicate clearly, and clean up after ourselves." },
      { heading: "No-Obligation Assessments", body: "Whether you have plans drawn up or a vision board of ideas, we'll sit down with you to pin down every detail." },
      { heading: "Quality You Can Trust", body: "Quality is a commitment we make from the first meeting to the final walkthrough — using the best tools, materials, and techniques." },
    ],
    gallery: images.gallery.home,
    faqs: [
      { question: "How much does a full home renovation cost?", answer: "Typically $50,000–$150,000+ depending on scope, or $200–$250 per sq ft for complete gut renovations." },
      { question: "Do you handle permits?", answer: "Yes — structural, electrical, plumbing, and all municipal permits are managed by our team." },
      { question: "Can you renovate while we live in the home?", answer: "In most cases yes. We use dust containment, floor protection, and phased scheduling to minimize disruption." },
    ],
  },
  flooring: {
    slug: "flooring",
    title: "Flooring & Stairs",
    metaDescription: "Expert flooring & staircase installation across the GTA including Markham, Scarborough, Oakville, Pickering & Ajax. Hardwood, vinyl, tile & LVT by Y2 Design & Build.",
    heroTitle: "Flooring & Staircase Renovation in the GTA",
    heroSubtitle: "Flooring that elevates your entire home — durable, stylish, and perfectly matched to your lifestyle.",
    bullets: ["Engineered hardwood, vinyl plank, and laminate", "Ceramic tile and luxury vinyl tile (LVT)", "Staircase upgrades for safety and style"],
    promo: { title: "Free Flooring Consultation", subtitle: "Get expert advice on materials and layout" },
    trustTitle: "Expert Flooring Installation",
    trustBody: "Y2 Design & Build offers expert installation and design using a variety of flooring options across the GTA.",
    whyTitle: "Why Upgrade Your Floors",
    whyBody: "New flooring is one of the most impactful renovations — improving aesthetics, safety, and long-term property value.",
    whyBullets: ["Consistent flooring across multiple levels", "Low-maintenance, durable surfaces", "Improved grip and handrails on stairs", "Moisture-resistant options for basements"],
    sections: [
      { heading: "Durable Materials for Everyday Living", body: "We install luxury vinyl plank, engineered hardwood, and modern tile — materials that handle daily wear without constant maintenance." },
      { heading: "Unified Look Throughout Your Home", body: "Using consistent flooring across main floors, upper levels, and staircases improves visual flow and makes spaces feel larger." },
      { heading: "Staircase Safety & Style", body: "Stair renovations include replacing worn treads, updating railings, and improving stability with grip surfaces and stronger handrails." },
    ],
    gallery: images.gallery.flooring,
    faqs: [
      { question: "What flooring types do you install?", answer: "Engineered hardwood, vinyl plank, laminate, ceramic tile, and luxury vinyl tile (LVT)." },
      { question: "Can you match existing flooring?", answer: "We source materials to blend with or complement your existing floors for a cohesive look." },
      { question: "How long does flooring installation take?", answer: "Most single-room installs take 1–3 days. Whole-home flooring projects typically take 1–2 weeks." },
    ],
  },
  commercial: {
    slug: "commercial-renovation",
    title: "Commercial Renovation",
    metaDescription: "Commercial remodeling across the GTA. Offices, retail spaces, and commercial properties by Y2 Design & Build.",
    heroTitle: "Commercial Renovation Experts in the GTA",
    heroSubtitle: "Transform offices, retail spaces, and commercial properties with quality, integrity, and a strong local touch.",
    bullets: ["Office and retail space renovations", "Minimal business disruption scheduling", "Licensed trades and full permit management"],
    promo: { title: "Free Commercial Assessment", subtitle: "Plan your commercial renovation" },
    trustTitle: "Your Local Commercial Renovation Partner",
    trustBody: "Y2 Design & Build transforms commercial properties across the GTA with a skilled team and years of hands-on experience.",
    whyTitle: "Why Businesses Choose Y2",
    whyBody: "We understand that commercial renovations need to minimize downtime. Our team works efficiently with clear timelines and after-hours scheduling when needed.",
    whyBullets: ["Office fit-outs and reconfigurations", "Retail store renovations", "Restaurant and hospitality spaces", "Medical and professional offices"],
    sections: [
      { heading: "Full-Service Commercial Remodeling", body: "From concept to completion, we handle design, permits, materials, and construction for commercial properties of all sizes." },
      { heading: "Minimal Disruption", body: "We phase work to keep your business operational and coordinate with your schedule for after-hours or weekend work." },
      { heading: "Code Compliance", body: "All commercial work meets building codes, accessibility requirements, and fire safety standards." },
    ],
    gallery: images.gallery.commercial,
    faqs: [
      { question: "Do you work after hours?", answer: "Yes — we can schedule work outside business hours to minimize disruption to your operations." },
      { question: "Can you handle large commercial projects?", answer: "We handle projects from small office refreshes to full commercial build-outs. Contact us to discuss scope." },
      { question: "Are you insured for commercial work?", answer: "Yes — we carry comprehensive liability insurance and WSIB coverage for all commercial projects." },
    ],
  },
  condo: {
    slug: "condo-renovation",
    title: "Condo Renovation",
    metaDescription: "Condo renovation contractor serving Toronto & the GTA. Kitchens, bathrooms & full condo remodels — board approvals, elevator booking & building rules handled. Free quotes.",
    heroTitle: "Condo Renovation Experts in Toronto & the GTA",
    heroSubtitle: "From Yorkville high-rises to Harbourfront lofts — we renovate condos end to end and handle the building logistics that come with them.",
    bullets: ["Kitchens, bathrooms & full condo remodels", "Board approvals, insurance certificates & elevator booking handled", "Quiet-hours scheduling & strict building-rule compliance"],
    promo: { title: "Free Condo Renovation Consultation", subtitle: "Book your in-suite assessment today" },
    trustTitle: "Toronto & GTA Condo Renovation Specialists",
    trustBody: "Y2 Design & Build renovates condos across Toronto, North York, Markham, and Mississauga. We know the rules that come with condo work — property-management approvals, certificates of insurance, elevator bookings, and quiet hours — and we manage all of it for you.",
    whyTitle: "Why Condo Renovations Need a Specialist",
    whyBody: "A condo project isn't just a smaller home renovation. Building rules, shared systems, and material logistics change how the work is planned and executed. We design around your building's requirements from day one.",
    whyBullets: ["Kitchen & bathroom upgrades in occupied buildings", "Space-maximizing layouts & built-in storage", "Flooring, lighting & full-suite refreshes", "Board & property-management paperwork handled for you"],
    sections: [
      { heading: "Building Approvals Handled For You", body: "Before any work starts, we submit renovation applications to your property manager, provide certificates of insurance, book elevators and loading docks, and schedule around your building's quiet hours — so your project never stalls on paperwork." },
      { heading: "Designed for Condo Living", body: "Condo square footage is precious. We specialize in layouts, millwork, and storage that make every foot count — from galley-kitchen reconfigurations to built-in closets and murphy-bed offices." },
      { heading: "Clean, Considerate Crews", body: "We protect hallways and elevators, contain dust at the suite door, and remove debris daily. Your neighbours barely know we're there — and your property manager will thank you." },
    ],
    gallery: [images.kitchenDesign, images.bathroom2, images.closet, images.flooring],
    faqs: [
      { question: "How much does a condo renovation cost in Toronto?", answer: "Full condo renovations range from $50–$250 per sq ft depending on scope, finishes, and building requirements. Kitchen and bathroom-only projects are quoted individually. Every estimate is free and itemized." },
      { question: "Do you handle condo board and property-management approvals?", answer: "Yes — we prepare the renovation application, provide insurance certificates, book elevators, and coordinate directly with your property manager." },
      { question: "How long does a condo renovation take?", answer: "Condo kitchens and bathrooms typically take 2–4 weeks. Full-suite renovations usually run 4–8 weeks depending on scope and building access rules." },
      { question: "Can you renovate while I live in the condo?", answer: "For kitchen or bathroom projects, usually yes — we contain dust and keep water and power interruptions short. For full-suite renovations, most owners choose to stay elsewhere during the noisiest phases." },
    ],
  },
  extension: {
    slug: "home-extensions",
    title: "Home Extensions",
    metaDescription: "Home addition & extension contractor in the GTA. Rear extensions, second-storey additions & garden suites — design, engineering, permits & construction managed end to end.",
    heroTitle: "Home Additions & Extensions in the GTA",
    heroSubtitle: "Need more space but love where you live? We design and build rear extensions, second-storey additions, and garden suites — drawings, engineering, permits, and construction under one contract.",
    bullets: ["Rear & side extensions and second-storey additions", "Garden suites, laneway housing & in-law suites", "Architectural drawings, engineering & permits managed"],
    promo: { title: "Free Extension Feasibility Assessment", subtitle: "Find out what your lot and zoning allow" },
    trustTitle: "GTA Home Addition & Extension Contractors",
    trustBody: "Y2 Design & Build takes additions from feasibility to final inspection: zoning review, architectural drawings, structural engineering, Toronto Building and municipal permits, and construction — all coordinated by one project manager.",
    whyTitle: "Why Build an Extension Instead of Moving",
    whyBody: "An addition gives you the space you need without land-transfer tax, realtor fees, or leaving a street you love — and it adds lasting value to the home you already own.",
    whyBullets: ["Kitchen & family-room rear extensions", "Second-storey additions & partial top-ups", "Garden suites & laneway homes", "Zoning review & committee of adjustment support"],
    sections: [
      { heading: "Feasibility & Zoning First", body: "Before you spend a dollar on drawings, we review your lot's zoning, setbacks, and coverage limits to confirm what's buildable — and give you a realistic budget range for the space you want to add." },
      { heading: "Design, Engineering & Permits Under One Roof", body: "Our team produces the architectural drawings and structural engineering your permit requires, then manages the application through Toronto Building or your local municipality — including committee of adjustment variances when needed." },
      { heading: "Weather-Tight Fast, Finished Right", body: "We sequence excavation, foundation, framing, and roofing to get the new structure sealed quickly, then finish the interior to blend seamlessly with your existing home — inside and out." },
    ],
    gallery: images.gallery.home,
    faqs: [
      { question: "How much does a home addition cost in the GTA?", answer: "Most additions run $300–$600 per sq ft depending on foundation work, structure, and finishes. Garden suites and second-storey additions are quoted after a feasibility review. Every estimate is free and itemized." },
      { question: "How long does a home extension take?", answer: "Design and permits typically take 2–4 months depending on the municipality. Construction usually runs 3–6 months from breaking ground to final inspection." },
      { question: "Do you handle the permits and engineering?", answer: "Yes — architectural drawings, structural engineering, permit applications, and inspections are all managed by our team from start to finish." },
      { question: "Can we live in the house during an addition?", answer: "In most cases, yes. Rear and side extensions are sealed off from the main house until the connection is opened late in the project. Second-storey additions usually require moving out for part of the build." },
    ],
  },
};

export const quoteForm = {
  projectTypes: ["Bathroom", "Kitchen", "Basement", "Flooring", "Painting", "Full House", "Condo", "Home Extension", "Commercial", "Other"],
  formName: "quote-request",
  reassurance: "Free, no-obligation quote. We reply within one business day — no spam, ever.",
  successTitle: "Request received — thank you!",
  successBody: "One of our project consultants will call you within one business day to book your free in-home consultation.",
  errorBody: "Something went wrong sending your request. Please call us directly or email",
};
