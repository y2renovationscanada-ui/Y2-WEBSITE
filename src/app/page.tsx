import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromoBanner from "@/components/PromoBanner";
import FeatureStrip from "@/components/FeatureStrip";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Locations from "@/components/Locations";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { faqs } from "@/lib/content";

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <Header />
      <main>
        <Hero />
        <PromoBanner />
        <FeatureStrip />
        <Services />
        <Testimonials />
        <Process />
        <Pricing />
        <FAQ />
        <Locations />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
