import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import { servicePages, images, site } from "@/lib/content";

const data = servicePages.kitchen;
const path = `/${data.slug}`;

export const metadata = {
  title: `Kitchen Renovation in the GTA`,
  description: data.metaDescription,
  alternates: { canonical: `${site.url}${path}` },
  keywords: ["kitchen renovation GTA", "kitchen remodeling Toronto", "kitchen renovation Markham", "kitchen contractor GTA"],
  openGraph: {
    title: `Kitchen Renovation in the GTA | Y2 Design & Build`,
    description: data.metaDescription,
    url: `${site.url}${path}`,
    type: "website",
    images: [{ url: images.kitchen, alt: "Kitchen renovation by Y2 Design & Build in the GTA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Kitchen Renovation in the GTA | Y2 Design & Build`,
    description: data.metaDescription,
    images: [images.kitchen],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <ServicePageLayout data={data} heroImage={images.kitchen} locationServiceKey="kitchen" />
      </main>
      <Footer />
    </>
  );
}
