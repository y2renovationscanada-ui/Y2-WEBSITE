import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import { servicePages, images, site } from "@/lib/content";

const data = servicePages.bathroom;
const path = `/${data.slug}`;

export const metadata = {
  title: `Bathroom Renovation Contractors | Quick Bathroom Renovations in GTA`,
  description: `Full bathroom renovations across the GTA, from powder rooms to primary ensuites. Tile, plumbing, vanities and lighting handled by one licensed team.`,
  alternates: { canonical: `${site.url}${path}` },
  keywords: ["bathroom renovation GTA", "bathroom remodeling Toronto", "bathroom renovation Markham", "bathroom contractor GTA"],
  openGraph: {
    title: `Bathroom Renovation in the GTA | Y2 Design & Build`,
    description: data.metaDescription,
    url: `${site.url}${path}`,
    type: "website",
    images: [{ url: images.bathroom, alt: "Bathroom renovation by Y2 Design & Build in the GTA" }],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <ServicePageLayout data={data} heroImage={images.bathroom} locationServiceKey="bathroom" />
      </main>
      <Footer />
    </>
  );
}
