import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site, images } from "@/lib/content";
import { socialMetadata } from "@/lib/seo";

const title = "Contact Us | Free Renovation Quote GTA";
const description = `Contact Y2 Design & Build for a free kitchen, bathroom, basement or home renovation quote in Markham, Pickering, Oakville, Ajax, Scarborough & the GTA. Call ${site.phone}.`;

export const metadata = {
  title,
  description,
  alternates: { canonical: `${site.url}/contact` },
  ...socialMetadata({
    title: `${title} | ${site.name}`,
    description,
    path: "/contact",
    image: images.ogImage,
  }),
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems.map((b) => ({ name: b.name, url: site.url + b.href })))} />
      <Header />
      <main>
        <section className="bg-brand-dark py-16 text-white">
          <div className="container-page">
            <div className="mb-4">
              <Breadcrumbs items={breadcrumbItems} light />
            </div>
            <h1 className="text-4xl font-bold">Contact Y2 Design & Build</h1>
            <p className="mt-3 max-w-xl text-white/80">
              Get a free, no-obligation renovation consultation for your Markham, Pickering, Oakville, Ajax, Scarborough or GTA home.
            </p>
          </div>
        </section>

        <section className="section-pad bg-surface">
          <div className="container-page">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand">Email</p>
                  <a href={`mailto:${site.email}`} className="mt-1 block text-lg font-semibold text-brand-dark hover:text-brand">{site.email}</a>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand">Phone (English)</p>
                  <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="mt-1 block text-lg font-semibold text-brand-dark hover:text-brand">{site.phone}</a>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand">Phone (中文)</p>
                  <a href={`tel:${site.phoneChinese.replace(/\D/g, "")}`} className="mt-1 block text-lg font-semibold text-brand-dark hover:text-brand">{site.phoneChinese}</a>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand">Showroom & Head Office</p>
                  <p className="mt-1 text-muted">
                    {site.address.street}<br />
                    {site.address.city}, {site.address.province} {site.address.postal}
                  </p>
                  <p className="mt-2 text-sm text-muted">Mon–Fri: 8 a.m. – 6 p.m.</p>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="text-xl font-bold text-brand-dark">Request a Quote</h2>
                <p className="mt-1 text-sm text-muted">Fill out the form and we&apos;ll get back to you shortly.</p>
                <div className="mt-6">
                  <QuoteForm compact />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="container-page">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <p className="text-sm font-bold uppercase tracking-wider text-brand">See It In Person</p>
                <h2 className="mt-2 text-3xl font-bold text-brand-dark">Visit Our Showroom</h2>
                <p className="mt-4 leading-relaxed text-muted">
                  Prefer to see materials and finishes in person? We have a beautiful showroom at our Markham
                  location where you can browse cabinetry, countertops, tile, and flooring samples, and talk
                  through your project face-to-face with our design team.
                </p>
                <p className="mt-4 font-semibold text-brand-dark">
                  {site.address.street}, {site.address.city}, {site.address.province} {site.address.postal}
                </p>
                <p className="mt-1 text-sm text-muted">Mon–Fri: 8 a.m. – 6 p.m. — walk-ins welcome, or call ahead to book a time.</p>
                <a
                  href={`tel:${site.phone.replace(/\D/g, "")}`}
                  className="btn-primary mt-6 inline-flex"
                >
                  Call to Book a Showroom Visit
                </a>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src={images.heroShowroom}
                    alt="Y2 Design & Build showroom in Markham, Ontario"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
