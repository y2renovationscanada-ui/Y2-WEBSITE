import { notFound } from "next/navigation";
import LocationServicePageLayout from "@/components/LocationServicePageLayout";
import { getLocationPageData } from "@/lib/locationContent";
import { targetCities } from "@/lib/locations";
import { site } from "@/lib/content";
import { socialMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return targetCities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const data = getLocationPageData("condo", city);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `${site.url}${data.path}` },
    ...socialMetadata({
      title: `${data.metaTitle} | ${site.name}`,
      description: data.metaDescription,
      path: data.path,
      image: { url: data.service.heroImage, alt: data.h1 },
    }),
  };
}

export default async function Page({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const data = getLocationPageData("condo", city);
  if (!data) return notFound();
  return <LocationServicePageLayout data={data} />;
}
