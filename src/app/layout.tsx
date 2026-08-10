import "./globals.css";
import type { ReactNode } from "react";
import { Roboto, Open_Sans } from "next/font/google";
import { site, images } from "@/lib/content";
import { organizationSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import QuoteModalProvider from "@/components/QuoteModal";
import StickyCallBar from "@/components/StickyCallBar";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-3Q43K0BYFK";
const GTM_ID = "GTM-P6BQHBGZ";

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

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Kitchen, Bathroom & Home Renovation Contractor GTA`,
    template: `%s`,
  },
  description:
    "Y2 Design & Build is a top-rated kitchen, bathroom, basement & home renovation contractor serving Markham, Pickering, Oakville, Ajax, Scarborough & the entire GTA. Free quotes, fixed pricing.",
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
  alternates: { canonical: "/" },
  formatDetection: { telephone: true },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Kitchen, Bathroom & Home Renovation Contractor GTA`,
    description: site.tagline,
    images: [{ url: images.ogImage, width: 1200, height: 630, alt: `${site.name} — GTA renovation contractor showroom` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Kitchen, Bathroom & Home Renovation Contractor GTA`,
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
    <html lang="en" className={`${roboto.variable} ${openSans.variable}`}>
      <head>
        <meta name="google-site-verification" content="dXHv-Q4mbGnjuFPqmypJOfaGFJoy74GknqpYdWQMMQI" />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <JsonLd data={organizationSchema()} />
        <QuoteModalProvider>
          {children}
          <StickyCallBar />
        </QuoteModalProvider>

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

      </body>
    </html>
  );
}
