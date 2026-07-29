import { promo } from "@/lib/content";

export default function PromoBanner() {
  return (
    <section className="bg-accent py-4 text-white">
      <div className="container-page text-center">
        <p className="text-lg font-bold sm:text-xl">{promo.title}</p>
        <p className="text-sm opacity-90 sm:text-base">{promo.subtitle}</p>
      </div>
    </section>
  );
}
