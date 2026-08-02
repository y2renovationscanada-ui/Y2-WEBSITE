import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import { servicePages, images, site } from "@/lib/content";

const data = servicePages.adu;
const path = `/${data.slug}`;

export const metadata = {
  title: `ADU & Garden Suite Builder GTA`,
  description: data.metaDescription,
  alternates: { canonical: `${site.url}${path}` },
  keywords: ["ADU builder Toronto", "garden suite builder GTA", "laneway house Toronto", "legal basement apartment Toronto", "additional dwelling unit contractor"],
  openGraph: {
    title: `ADU & Garden Suite Builder GTA | Y2 Design & Build`,
    description: data.metaDescription,
    url: `${site.url}${path}`,
    type: "website",
    images: [{ url: images.adu, alt: "ADU and garden suite construction by Y2 Design & Build in the GTA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `ADU & Garden Suite Builder GTA | Y2 Design & Build`,
    description: data.metaDescription,
    images: [images.adu],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <ServicePageLayout data={data} heroImage={images.adu} locationServiceKey="adu" />
      </main>
      <Footer />
    </>
  );
}
