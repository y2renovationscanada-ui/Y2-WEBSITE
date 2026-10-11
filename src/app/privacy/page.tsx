import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";

const LAST_UPDATED = "October 11, 2026";

export const metadata = {
  title: `Privacy Policy | ${site.name}`,
  description: `How ${site.name} collects, uses and protects the personal information you share with us.`,
  alternates: { canonical: `${site.url}/privacy` },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold text-brand-dark">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-muted">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-brand-dark py-16 text-white">
          <div className="container-page">
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="mt-3 text-white/80">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="container-page max-w-3xl">
            <p className="leading-relaxed text-muted">
              {site.name} (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy explains what personal
              information we collect when you visit {site.url}, contact us, or respond to one of our ads, and how we
              use and protect it. We handle personal information in line with Canada&apos;s Personal Information
              Protection and Electronic Documents Act (PIPEDA).
            </p>

            <Section title="Information we collect">
              <p>
                <strong>Information you give us:</strong> your name, email address, phone number, property address,
                and details about your renovation project when you fill in a quote form, book a consultation, call or
                email us, or submit a lead form on Facebook, Instagram, Google or a lead marketplace such as Bark.
              </p>
              <p>
                <strong>Information collected automatically:</strong> how you found our website (for example the
                ad, campaign or website that referred you, and click identifiers added by Google or Meta), the pages
                you visited, and general device and browser information. We use Google Analytics and Google Tag
                Manager to understand site traffic, and call tracking to know which ad or page led to a phone call.
              </p>
            </Section>

            <Section title="How we use your information">
              <ul className="list-disc space-y-2 pl-5">
                <li>To respond to your enquiry, prepare quotes, schedule consultations and deliver your project.</li>
                <li>To follow up by phone, email or text message about your request.</li>
                <li>To understand which advertising brings us customers, so we can improve our marketing.</li>
                <li>To meet our legal, accounting and warranty obligations.</li>
              </ul>
              <p>We do not sell your personal information.</p>
            </Section>

            <Section title="Who we share it with">
              <p>
                We share information only with service providers that help us run our business, such as our customer
                management system and database hosting, email and text-message delivery, call tracking, analytics,
                and the advertising platforms (Google and Meta) that delivered your enquiry. These providers may
                store information outside Canada and are only permitted to use it to provide services to us. We may
                also disclose information when required by law.
              </p>
            </Section>

            <Section title="Cookies and similar technologies">
              <p>
                Our website uses cookies and browser storage to remember how you arrived (for example the ad you
                clicked) for up to 90 days, so your enquiry is credited to the right source, and to measure site
                usage. You can block or delete cookies in your browser settings; the site will still work.
              </p>
            </Section>

            <Section title="How long we keep it">
              <p>
                We keep your information for as long as needed to respond to you and, if you become a client, for the
                life of your project and any warranty, tax or legal retention period afterwards.
              </p>
            </Section>

            <Section title="Your choices and rights">
              <p>
                You can ask to see, correct or delete the personal information we hold about you, or ask us to stop
                contacting you, at any time. You can also reply STOP to any text message or use the unsubscribe link
                in our emails.
              </p>
            </Section>

            <Section title="Contact us">
              <p>
                Questions or requests about your privacy: email{" "}
                <a href={`mailto:${site.email}`} className="font-semibold text-brand hover:underline">
                  {site.email}
                </a>
                , call{" "}
                <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="font-semibold text-brand hover:underline">
                  {site.phone}
                </a>
                , or write to us at {site.address.street}, {site.address.city}, {site.address.province}{" "}
                {site.address.postal}.
              </p>
            </Section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
