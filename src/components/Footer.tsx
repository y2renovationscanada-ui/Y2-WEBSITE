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
  {
    label: "Tiktok",
    href: "https://www.tiktok.com/@y2.designbuild",
     icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
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