import "./globals.css";
import type { ReactNode } from "react";
import { Roboto, Open_Sans } from "next/font/google";
import { site, images } from "@/lib/content";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import QuoteModalProvider from "@/components/QuoteModal";
import StickyCallBar from "@/components/StickyCallBar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
});

const homeTitle = `${site.name} | Kitchen, Bathroom & Home Renovation Contractor GTA`;
const homeDescription =
  "Y2 Design & Build is a top-rated kitchen, bathroom, basement & home renovation contractor serving Markham, Pickering, Oakville, Ajax, Scarborough & the entire GTA. Free quotes, fixed pricing.";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: homeTitle,
    template: `%s | ${site.name}`,
  },
  description: homeDescription,
  keywords: [
    "renovation contractor GTA",
    "kitchen renovation Toronto",
    "bathroom renovation Markham",
    "basement renovation Pickering",
    "home renovation Oakville",
    "kitchen remodeling Ajax",
    "renovation contractor Scarborough",
    "Y2 Design & Build",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: site.url },
  formatDetection: { telephone: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/images/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/images/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: site.url,
    siteName: site.name,
    title: homeTitle,
    description: site.tagline,
    images: [{ url: images.ogImage, width: 1200, height: 630, alt: `${site.name} — GTA renovation contractor showroom` }],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: site.tagline,
    images: [images.ogImage],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-CA" className={`${roboto.variable} ${openSans.variable}`}>
      <body className="antialiased">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <QuoteModalProvider>
          {children}
          <StickyCallBar />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
