import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import { servicePages, images, site } from "@/lib/content";

const data = servicePages.basement;
const path = `/${data.slug}`;

export const metadata = {
  title: `Basement Renovation in the GTA | Y2 Design & Build`,
  description: data.metaDescription,
  alternates: { canonical: `${site.url}${path}` },
  keywords: ["basement renovation GTA", "basement finishing Toronto", "basement renovation Markham", "legal basement suite GTA"],
  openGraph: {
    title: `Basement Renovation in the GTA | Y2 Design & Build`,
    description: data.metaDescription,
    url: `${site.url}${path}`,
    type: "website",
    images: [{ url: images.basement, alt: "Basement renovation by Y2 Design & Build in the GTA" }],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <ServicePageLayout data={data} heroImage={images.basement} locationServiceKey="basement" />
      </main>
      <Footer />
    </>
  );
}
