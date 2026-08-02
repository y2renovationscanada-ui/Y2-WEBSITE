import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { QuoteButton } from "@/components/QuoteModal";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site, images } from "@/lib/content";
import { socialMetadata } from "@/lib/seo";

const title = "About Us | GTA Renovation Contractor";
const description = `Learn about Y2 Design & Build — a licensed, insured renovation contractor with ${site.yearsExperience}+ years of experience serving Markham, Pickering, Oakville, Ajax, Scarborough & the GTA.`;

export const metadata = {
  title,
  description,
  alternates: { canonical: `${site.url}/about` },
  ...socialMetadata({
    title: `${title} | ${site.name}`,
    description,
    path: "/about",
    image: images.residential,
  }),
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems.map((b) => ({ name: b.name, url: site.url + b.href })))} />
      <Header />
      <main>
        <section className="relative min-h-[320px] bg-brand-dark text-white">
          <Image src={images.residential} alt="Home renovation project by Y2 Design & Build" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-brand-dark/70" />
          <div className="container-page relative flex min-h-[320px] items-center py-16">
            <div>
              <div className="mb-4">
                <Breadcrumbs items={breadcrumbItems} light />
              </div>
              <h1 className="text-4xl font-bold">About Y2 Design & Build — GTA Renovation Contractor</h1>
              <p className="mt-3 max-w-xl text-white/85">
                Your trusted experts for kitchen, bathroom, basement, and home renovations in Markham, Pickering, Oakville, Ajax, Scarborough & the entire GTA.
              </p>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="container-page">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-brand">{site.yearsExperience}+ Years of Excellence</p>
                <h2 className="mt-2 text-3xl font-bold text-brand-dark md:text-4xl">Locally Owned. Expertly Built.</h2>
                <p className="mt-5 leading-relaxed text-muted">
                  At Y2 Design & Build, we are proud to be a top choice for home renovations across the GTA. With over{" "}
                  {site.yearsExperience} years of industry experience, our committed team delivers unmatched quality and
                  service at competitive prices — from kitchen and bathroom upgrades to full home transformations.
                </p>
                <p className="mt-4 leading-relaxed text-muted">
                  We simplify the renovation process so you can focus on the excitement of your new space. Our experienced
                  team guides you through design choices, materials, and costs with transparent, written contracts and no
                  hidden fees.
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    "Dedicated project manager on every job",
                    "Licensed, WSIB-insured trades",
                    "Fixed-price contracts with itemized scope",
                    "Serving Toronto, York, Peel, Halton & Durham",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-brand-dark">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 grid grid-cols-3 gap-4 border-t border-stone-200 pt-8">
                  {[
                    { value: `${site.yearsExperience}+`, label: "Years Experience" },
                    { value: "500+", label: "Projects Completed" },
                    { value: "GTA", label: "Wide Service Area" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-2xl font-bold text-brand">{stat.value}</p>
                      <p className="mt-1 text-xs text-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-md">
                    <Image src={images.kitchen} alt="Kitchen renovation by Y2 Design & Build" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  </div>
                  <p className="text-center text-sm font-medium text-brand-dark">Kitchen · Aurora, ON</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-md">
                    <Image src={images.bathroomHero} alt="Bathroom renovation by Y2 Design & Build" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  </div>
                  <p className="text-center text-sm font-medium text-brand-dark">Bathroom · Toronto, ON</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-surface">
          <div className="container-page">
            <h2 className="section-heading">Why Choose Y2?</h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Expertise", body: "Over a decade of specialized experience in Ontario." },
                { title: "Personalized", body: "Your vision comes to life — your home reflects your style." },
                { title: "Quality", body: "High standards from first meeting to final walkthrough." },
                { title: "Reliable", body: "On time, on budget, with top-tier equipment and techniques." },
              ].map((item) => (
                <div key={item.title} className="card p-5">
                  <h3 className="font-bold text-brand-dark">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="container-page text-center">
            <h2 className="section-heading">Our Work</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { img: images.kitchen, alt: "Custom kitchen renovation with island and premium cabinetry — Y2 Design & Build" },
                { img: images.bathroom2, alt: "Modern bathroom renovation with walk-in shower — Y2 Design & Build" },
                { img: images.basement, alt: "Finished basement renovation with rec room — Y2 Design & Build" },
                { img: images.flooring, alt: "Engineered hardwood flooring installation — Y2 Design & Build" },
                { img: images.residential, alt: "Full home renovation in the Greater Toronto Area — Y2 Design & Build" },
                { img: images.closet, alt: "Custom closet and built-in millwork — Y2 Design & Build" },
              ].map(({ img, alt }) => (
                <div key={img} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image src={img} alt={alt} fill loading="lazy" className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                </div>
              ))}
            </div>
            <QuoteButton className="btn-primary mt-10 cursor-pointer">Start My Project</QuoteButton>
          </div>
        </section>

        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
