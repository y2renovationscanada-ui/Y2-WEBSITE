import { notFound } from "next/navigation";
import LocationServicePageLayout from "@/components/LocationServicePageLayout";
import { getLocationPageData } from "@/lib/locationContent";
import { targetCities } from "@/lib/locations";
import { site } from "@/lib/content";

export function generateStaticParams() {
  return targetCities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const data = getLocationPageData("home", city);
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
  const data = getLocationPageData("home", city);
  if (!data) return notFound();
  return <LocationServicePageLayout data={data} />;
}
