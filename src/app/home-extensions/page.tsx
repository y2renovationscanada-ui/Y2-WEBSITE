import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageLayout from "@/components/ServicePageLayout";
import { servicePages, images, site } from "@/lib/content";

const data = servicePages.extension;
const path = `/${data.slug}`;

export const metadata = {
  title: `Home Additions & Extensions GTA | Y2 Design & Build`,
  description: data.metaDescription,
  alternates: { canonical: `${site.url}${path}` },
  keywords: ["home addition GTA", "home extension Toronto", "second storey addition Toronto", "rear extension contractor", "garden suite builder GTA"],
  openGraph: {
    title: `Home Additions & Extensions GTA | Y2 Design & Build`,
    description: data.metaDescription,
    url: `${site.url}${path}`,
    type: "website",
    images: [{ url: images.extension, alt: "Home addition and extension by Y2 Design & Build in the GTA" }],
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <ServicePageLayout data={data} heroImage={images.extension} />
      </main>
      <Footer />
    </>
  );
}
