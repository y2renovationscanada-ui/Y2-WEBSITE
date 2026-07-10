import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import { servicePages, images, site } from "@/lib/content";

const data = servicePages.condo;
const path = `/${data.slug}`;

export const metadata = {
  title: `Condo Renovation Toronto & GTA | Y2 Design & Build`,
  description: data.metaDescription,
  alternates: { canonical: `${site.url}${path}` },
  keywords: ["condo renovation Toronto", "condo remodeling GTA", "condo kitchen renovation Toronto", "condo bathroom renovation", "condo renovation contractor"],
  openGraph: {
    title: `Condo Renovation Toronto & GTA | Y2 Design & Build`,
    description: data.metaDescription,
    url: `${site.url}${path}`,
    type: "website",
    images: [{ url: images.kitchenDesign, alt: "Condo renovation by Y2 Design & Build in Toronto" }],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <ServicePageLayout data={data} heroImage={images.kitchenDesign} />
      </main>
      <Footer />
    </>
  );
}
