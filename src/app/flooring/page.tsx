import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import { servicePages, images, site } from "@/lib/content";

const data = servicePages.flooring;
const path = `/${data.slug}`;

export const metadata = {
  title: `Flooring & Staircase Renovation GTA`,
  description: data.metaDescription,
  alternates: { canonical: `${site.url}${path}` },
  keywords: ["flooring installation GTA", "hardwood flooring Toronto", "flooring renovation Markham", "staircase renovation GTA"],
  openGraph: {
    title: `Flooring & Staircase Renovation GTA | Y2 Design & Build`,
    description: data.metaDescription,
    url: `${site.url}${path}`,
    type: "website",
    images: [{ url: images.flooring, alt: "Flooring installation by Y2 Design & Build in the GTA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Flooring & Staircase Renovation GTA | Y2 Design & Build`,
    description: data.metaDescription,
    images: [images.flooring],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <ServicePageLayout data={data} heroImage={images.flooring} />
      </main>
      <Footer />
    </>
  );
}
