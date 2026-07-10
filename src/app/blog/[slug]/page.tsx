import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { QuoteButton } from "@/components/QuoteModal";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/content";
import { blogPosts, getPostBySlug } from "@/lib/blogContent";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.description,
    alternates: { canonical: `${site.url}/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.description,
      url: `${site.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.heroImage, alt: post.heroAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: site.url + post.heroImage,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbItems.map((b) => ({ name: b.name, url: site.url + b.href }))),
          articleSchema,
        ]}
      />
      <Header />
      <main>
        <article>
          <section className="bg-brand-dark py-14 text-white">
            <div className="container-page max-w-3xl">
              <div className="mb-4">
                <Breadcrumbs items={breadcrumbItems.slice(0, 2)} light />
              </div>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl">{post.title}</h1>
              <p className="mt-4 text-sm text-white/70">
                {new Date(`${post.date}T12:00:00`).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })} · {post.readingMinutes} min read · {site.name}
              </p>
            </div>
          </section>

          <section className="bg-white">
            <div className="container-page max-w-3xl">
              <div className="relative -mt-0 aspect-[16/9] overflow-hidden sm:rounded-b-2xl">
                <Image src={post.heroImage} alt={post.heroAlt} fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
              </div>

              <div className="py-12">
                {post.sections.map((section, i) => (
                  <div key={i} className={i === 0 ? "" : "mt-10"}>
                    {section.heading && <h2 className="text-2xl font-bold text-brand-dark">{section.heading}</h2>}
                    {section.paragraphs.map((p) => (
                      <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-muted">{p}</p>
                    ))}
                    {section.bullets && (
                      <ul className="mt-4 space-y-3">
                        {section.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3 text-muted">
                            <span className="mt-0.5 text-brand" aria-hidden="true">✓</span>
                            <span className="leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl bg-surface p-8 text-center">
                  <p className="text-xl font-bold text-brand-dark">Planning a renovation?</p>
                  <p className="max-w-md text-sm text-muted">Get a free, itemized quote for your project — no pressure, no hidden fees.</p>
                  <QuoteButton className="btn-primary mt-2 cursor-pointer">Get My Free Quote</QuoteButton>
                  <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="text-sm font-bold text-brand-dark hover:text-brand">
                    or call {site.phone}
                  </a>
                </div>

                <div className="mt-10 border-t border-stone-200 pt-8">
                  <h2 className="text-lg font-bold text-brand-dark">Related Services</h2>
                  <ul className="mt-3 space-y-2">
                    {post.relatedLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="font-medium text-brand hover:underline">{link.label} →</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </article>

        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
