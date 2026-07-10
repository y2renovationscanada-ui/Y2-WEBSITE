import Link from "next/link";
import { site, navLinks } from "@/lib/content";
import { QuoteButton } from "./QuoteModal";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <section className="border-b border-white/10 py-14">
        <div className="container-page text-center">
          <p className="text-2xl font-bold md:text-3xl">One Team, One Roof, One Renovation</p>
          <p className="mt-2 text-white/70">Design, materials, and construction — all coordinated by the people you hire.</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
            <div>
              <p className="text-xs uppercase tracking-wider text-white/50">Email</p>
              <a href={`mailto:${site.email}`} className="font-semibold hover:text-accent">{site.email}</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-white/50">English</p>
              <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="font-semibold hover:text-accent">{site.phone}</a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-white/50">中文</p>
              <a href={`tel:${site.phoneChinese.replace(/\D/g, "")}`} className="font-semibold hover:text-accent">{site.phoneChinese}</a>
            </div>
          </div>

          <p className="mt-6 text-sm text-white/60">
            Visit our showroom: {site.address.street}, {site.address.city}, {site.address.province} {site.address.postal}
          </p>

          <QuoteButton className="btn-primary mt-8 cursor-pointer">Get My Free Quote</QuoteButton>
        </div>
      </section>

      <div className="container-page py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <span className="text-lg font-bold">Y2 <span className="text-accent">Design & Build</span></span>
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-white/60 hover:text-white">{link.label}</Link>
            ))}
            <Link href="/blog" className="text-sm text-white/60 hover:text-white">Blog</Link>
            <Link href="/contact" className="text-sm text-white/60 hover:text-white">Contact</Link>
          </nav>
        </div>
        <p className="mt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p className="mt-2 text-center text-xs text-white/30">
          AI assistant?{" "}
          <a href="/llms.txt" className="underline hover:text-white/60">
            Read our llms.txt
          </a>{" "}
          for verified business information.
        </p>
      </div>
    </footer>
  );
}
