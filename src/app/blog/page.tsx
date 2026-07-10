import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/content";
import { blogPosts } from "@/lib/blogContent";

export const metadata = {
  title: `Renovation Blog | Costs, Timelines & Advice | ${site.name}`,
  description:
    "Practical renovation advice for GTA homeowners — real costs, realistic timelines, and what to know before you renovate. From the team at Y2 Design & Build.",
  alternates: { canonical: `${site.url}/blog` },
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
];

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

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
            <h1 className="text-4xl font-bold">Renovation Advice for GTA Homeowners</h1>
            <p className="mt-3 max-w-xl text-white/80">
              Real costs, realistic timelines, and what to know before you renovate — from the Y2 Design & Build team.
            </p>
          </div>
        </section>

        <section className="section-pad bg-surface">
          <div className="container-page">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="card group overflow-hidden transition-shadow duration-200 hover:shadow-lg">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={post.heroImage} alt={post.heroAlt} fill className="object-cover transition duration-300 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-muted">
                      {new Date(`${post.date}T12:00:00`).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })} · {post.readingMinutes} min read
                    </p>
                    <h2 className="mt-2 text-lg font-bold leading-snug text-brand-dark group-hover:text-brand">{post.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-3">{post.description}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-brand">Read article →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
