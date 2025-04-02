import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import siteConfig from "@/data/siteConfig.json";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords.join(", ") + ", pressure washing near me, pressure washer near me, power washing near me, Charlotte pressure washing, local pressure washing",
  alternates: {
    canonical: "https://novellipressurewashing.com",
  },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: "https://novellipressurewashing.com",
    siteName: siteConfig.businessInfo.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: "Novelli Pressure Washing - Professional Pressure Washing Services in Charlotte, NC",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD structured data for LocalBusiness
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.businessInfo.name,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Charlotte",
      "addressRegion": "NC",
      "addressCountry": "US"
    },
    "telephone": siteConfig.businessInfo.phone,
    "email": siteConfig.businessInfo.email,
    "url": "https://novellipressurewashing.com",
    "image": "https://novellipressurewashing.com/images/logo.png",
    "priceRange": "$$",
    "openingHours": siteConfig.businessInfo.hours,
    "sameAs": [
      siteConfig.socialMedia.facebook,
      siteConfig.socialMedia.instagram,
      siteConfig.socialMedia.google
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.2271",
      "longitude": "-80.8431"
    },
    "areaServed": siteConfig.businessInfo.serviceAreas.map((area: string) => ({
      "@type": "City",
      "name": area + ", NC"
    })),
    "serviceType": ["Pressure Washing", "Power Washing", "Soft Washing", "Gutter Cleaning"]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
