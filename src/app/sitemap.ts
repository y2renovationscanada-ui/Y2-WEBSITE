import type { MetadataRoute } from "next";
import { site } from "@/lib/content";
import { targetCities } from "@/lib/locations";
import { locationServiceKeys, serviceMeta } from "@/lib/locationContent";

export const dynamic = "force-static";

const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/kitchen-renovation", priority: 0.9, changeFrequency: "weekly" },
  { path: "/bathroom-renovation", priority: 0.9, changeFrequency: "weekly" },
  { path: "/basement-renovation", priority: 0.9, changeFrequency: "weekly" },
  { path: "/home-renovation", priority: 0.9, changeFrequency: "weekly" },
  { path: "/flooring", priority: 0.8, changeFrequency: "weekly" },
  { path: "/commercial-renovation", priority: 0.8, changeFrequency: "weekly" },
  { path: "/service-areas", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: site.url + route.path,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const locationEntries: MetadataRoute.Sitemap = locationServiceKeys.flatMap((key) =>
    targetCities.map((city) => ({
      url: `${site.url}/${serviceMeta[key].slug}/${city.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    }))
  );

  return [...staticEntries, ...locationEntries];
}
