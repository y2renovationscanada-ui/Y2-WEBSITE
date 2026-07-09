import { site, serviceAreas, reviews, servicePages, googleReviews } from "./content";

export function jsonLdScript(data: unknown) {
  return {
    __html: JSON.stringify(data),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#organization`,
    name: site.name,
    description:
      "Full-service kitchen, bathroom, basement & home renovation contractor serving the Greater Toronto Area. Fixed-price itemized quotes, licensed & WSIB-insured trades, dedicated project management.",
    slogan: site.tagline,
    url: site.url,
    logo: `${site.url}/images/logo.png`,
    image: `${site.url}/images/og-home.jpg`,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$-$$$",
    sameAs: [site.social.facebook, site.social.instagram],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.province,
      postalCode: site.address.postal,
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.8275,
      longitude: -79.352,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phone,
        contactType: "sales",
        areaServed: "CA",
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: site.phoneChinese,
        contactType: "sales",
        areaServed: "CA",
        availableLanguage: ["Chinese"],
      },
    ],
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Renovation Services",
      itemListElement: Object.values(servicePages).map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          url: `${site.url}/${s.slug}`,
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: googleReviews.rating,
      reviewCount: String(googleReviews.count),
      bestRating: "5",
    },
    review: reviews.slice(0, 3).map((r) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: r.author },
      reviewBody: r.text,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  areaServedName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${site.url}/#organization`,
      name: site.name,
      telephone: site.phone,
      url: site.url,
    },
    areaServed: {
      "@type": opts.areaServedName ? "City" : "AdministrativeArea",
      name: opts.areaServedName ?? "Greater Toronto Area",
    },
  };
}
