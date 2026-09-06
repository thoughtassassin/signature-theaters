import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavShell from "@/app/components/NavShell";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://www.signaturetheaters.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Signature Theaters — Luxury Home Theater & Smart Home Installation",
    template: "%s — Signature Theaters",
  },
  description:
    "Expert design and installation of custom home theaters, smart home systems, and premium AV in Midland, TX.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Signature Theaters",
    title: "Signature Theaters — Luxury Home Theater & Smart Home Installation",
    description:
      "Expert design and installation of custom home theaters, smart home systems, and premium AV in Midland, TX.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Signature Theaters" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Signature Theaters — Luxury Home Theater & Smart Home Installation",
    description:
      "Expert design and installation of custom home theaters, smart home systems, and premium AV in Midland, TX.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport = {
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Signature Theaters",
    description:
      "Expert design and installation of custom home theaters, smart home systems, and premium AV.",
    url: siteUrl,
    telephone: "+14327041248",
    email: "info@signaturetheaters.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Midland",
      addressRegion: "TX",
      addressCountry: "US",
    },
    areaServed: "Texas",
    priceRange: "$$$",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <NavShell />
        {children}
      </body>
    </html>
  );
}
