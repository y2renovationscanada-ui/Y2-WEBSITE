import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import { servicePages, images, site } from "@/lib/content";

const data = servicePages.bathroom;
const path = `/${data.slug}`;

export const metadata = {
  title: `Bathroom Renovation in the GTA`,
  description: data.metaDescription,
  alternates: { canonical: `${site.url}${path}` },
  keywords: ["bathroom renovation GTA", "bathroom remodeling Toronto", "bathroom renovation Markham", "bathroom contractor GTA"],
  openGraph: {
    title: `Bathroom Renovation in the GTA | Y2 Design & Build`,
    description: data.metaDescription,
    url: `${site.url}${path}`,
    type: "website",
    images: [{ url: images.bathroom, alt: "Bathroom renovation by Y2 Design & Build in the GTA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Bathroom Renovation in the GTA | Y2 Design & Build`,
    description: data.metaDescription,
    images: [images.bathroom],
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
