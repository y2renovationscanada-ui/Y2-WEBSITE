import { notFound } from "next/navigation";
import LocationServicePageLayout from "@/components/LocationServicePageLayout";
import { getLocationPageData } from "@/lib/locationContent";
import { targetCities } from "@/lib/locations";
import { site } from "@/lib/content";

// Explicitly list folders that exist as static routes under basement-renovation
const BASEMENT_STATIC_CITIES = ["ajax", "markham", "oakville", "pickering", "scarborough", "toronto"];

export function generateStaticParams() {
  // Exclude static basement folders so Next.js doesn't try to build duplicate routes
  return targetCities
    .filter((c) => !BASEMENT_STATIC_CITIES.includes(c.slug))
    .map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;

  // Prevent metadata generation if a request hits [city] for a static basement route
  if (BASEMENT_STATIC_CITIES.includes(city)) return {};

  const data = getLocationPageData("basement", city);
  if (!data) return {};
  
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `${site.url}${data.path}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `${site.url}${data.path}`,
      type: "website",
      images: [{ url: data.service.heroImage, alt: data.h1 }],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;

  // Fallback guard: force 404 on dynamic path so Next.js strictly renders the app/basement-renovation/ajax folder instead
  if (BASEMENT_STATIC_CITIES.includes(city)) {
    return notFound();
  }

  const data = getLocationPageData("basement", city);
  if (!data) return notFound();
  
  return <LocationServicePageLayout data={data} />;
}