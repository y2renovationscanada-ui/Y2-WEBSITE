import Link from "next/link";
import { site, navLinks } from "@/lib/content";
import { QuoteButton } from "./QuoteModal";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/y2designandbuild/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61552924365145",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z" />
      </svg>
    ),
  },
];

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
            <Link href="/contact" className="text-sm text-white/60 hover:text-white">Contact</Link>
            <Link href="/privacy" className="text-sm text-white/60 hover:text-white">Privacy</Link>
          </nav>
        </div>

        <ul aria-label="Social media" className="mt-6 flex items-center justify-center gap-5">
          {socialLinks.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Y2 Design & Build on ${social.label}`}
                className="text-white/60 transition-colors hover:text-accent"
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>

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