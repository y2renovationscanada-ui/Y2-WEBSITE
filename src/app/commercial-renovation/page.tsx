import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import { servicePages, images, site } from "@/lib/content";

const data = servicePages.commercial;
const path = `/${data.slug}`;

export const metadata = {
  title: `Commercial Renovation Contractor GTA | Y2 Design & Build`,
  description: data.metaDescription,
  alternates: { canonical: `${site.url}${path}` },
  keywords: ["commercial renovation GTA", "office renovation Toronto", "retail renovation contractor GTA"],
  openGraph: {
    title: `Commercial Renovation Contractor GTA | Y2 Design & Build`,
    description: data.metaDescription,
    url: `${site.url}${path}`,
    type: "website",
    images: [{ url: images.commercial, alt: "Commercial renovation by Y2 Design & Build in the GTA" }],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <ServicePageLayout data={data} heroImage={images.commercial} />
      </main>
      <Footer />
    </>
  );
}
