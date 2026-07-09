import { site, servicePages, faqs, pricing, serviceAreaGroups } from "@/lib/content";
import { targetCities } from "@/lib/locations";
import { locationServiceKeys, serviceMeta, getLocationPageData } from "@/lib/locationContent";

export const dynamic = "force-static";

function buildLlmsFullTxt() {
  const serviceSections = Object.values(servicePages)
    .map((s) => {
      const sectionText = s.sections.map((sec) => `### ${sec.heading}\n${sec.body}`).join("\n\n");
      const faqText = s.faqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join("\n\n");
      return `## ${s.title} (${site.url}/${s.slug})

${s.heroSubtitle}

${s.trustBody}

${sectionText}

${faqText}
`;
    })
    .join("\n\n");

  const locationSections = locationServiceKeys
    .map((key) =>
      targetCities
        .map((city) => {
          const data = getLocationPageData(key, city.slug);
          if (!data) return "";
          const faqText = data.faqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join("\n\n");
          return `## ${data.h1} (${site.url}${data.path})

${data.intro}

${data.localSectionBody}

Neighbourhoods served: ${city.neighborhoods.join(", ")}.

Average cost: ${data.service.priceLine}
Typical timeline: ${data.service.durationLine}

${faqText}
`;
        })
        .join("\n\n")
    )
    .join("\n\n");

  const areaText = serviceAreaGroups.map((g) => `- ${g.region}: ${g.areas.join(", ")}`).join("\n");
  const pricingText = pricing.map((p) => `- ${p.title}: ${p.description}`).join("\n");
  const faqText = faqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join("\n\n");

  return `# ${site.name} — Full Content Reference for AI & LLM Crawlers

${site.tagline}. Licensed, insured GTA renovation contractor with ${site.yearsExperience}+ years of experience.

Contact: ${site.phone} (English) / ${site.phoneChinese} (Chinese) — ${site.email} — ${site.address.street}, ${site.address.city}, ${site.address.province} ${site.address.postal}

# Service Area

${areaText}

# General Pricing Guidance (CAD)

${pricingText}

# General FAQs

${faqText}

# Service Pages

${serviceSections}

# Service-by-City Landing Pages

${locationSections}
`;
}

export function GET() {
  return new Response(buildLlmsFullTxt(), { headers: { "content-type": "text/plain; charset=utf-8" } });
}
