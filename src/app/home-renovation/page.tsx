import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import { servicePages, images, site } from "@/lib/content";

const data = servicePages.home;
const path = `/${data.slug}`;

export const metadata = {
  title: `Home Renovation Contractor in the GTA | Y2 Design & Build`,
  description: data.metaDescription,
  alternates: { canonical: `${site.url}${path}` },
  keywords: ["home renovation GTA", "home renovation contractor Toronto", "home renovation Markham", "whole home remodeling GTA"],
  openGraph: {
    title: `Home Renovation Contractor in the GTA | Y2 Design & Build`,
    description: data.metaDescription,
    url: `${site.url}${path}`,
    type: "website",
    images: [{ url: images.residential, alt: "Full home renovation by Y2 Design & Build in the GTA" }],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <ServicePageLayout data={data} heroImage={images.residential} locationServiceKey="home" />
      </main>
      <Footer />
    </>
  );
}
