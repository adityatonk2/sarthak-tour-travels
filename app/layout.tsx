import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sarthaktravels.com"),
  title: {
    default: "Sarthak Travels & Holidays — Taxi, Tours & Vintage Car Rentals in Uttarakhand",
    template: "%s | Sarthak Travels & Holidays",
  },
  description: "Book taxis, tour packages, hotels, and vintage cars across Uttarakhand. 24x7 support, verified hotels, safe & sanitized vehicles. Book now via WhatsApp.",
  keywords: ["Sarthak Travels", "Uttarakhand Taxi Service", "Tour Packages", "Vintage Car Rental", "Hotel Booking", "Char Dham Yatra", "Mussoorie Tours", "Nainital Travel"],
  authors: [{ name: "Sarthak Travels & Holidays" }],
  creator: "Sarthak Travels & Holidays",
  publisher: "Sarthak Travels & Holidays",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://sarthaktravels.com",
    siteName: "Sarthak Travels & Holidays",
    title: "Sarthak Travels & Holidays — Taxi, Tours & Vintage Car Rentals",
    description: "Book taxis, tour packages, hotels, and vintage cars across Uttarakhand. 24x7 support, verified hotels, safe & sanitized vehicles.",
    images: [
      {
        url: "/final-hero-page.jpg",
        width: 1200,
        height: 630,
        alt: "Sarthak Travels & Holidays",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarthak Travels & Holidays",
    description: "Book taxis, tour packages, hotels, and vintage cars across Uttarakhand",
    images: ["/final-hero-page.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "your-verification-code",
  },
};

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import companyData from "@/data/company.json";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // JSON-LD Structured Data for LocalBusiness
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sarthaktravels.com";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": companyData.name,
    "image": `${siteUrl}/final-hero-page.jpg`,
    "description": companyData.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dehradun",
      "addressRegion": "Uttarakhand",
      "addressCountry": "IN"
    },
    "telephone": companyData.contact.phone,
    "email": companyData.contact.email,
    "url": siteUrl,
    "priceRange": "₹₹",
    "openingHours": "Mo-Su 00:00-23:59",
    "areaServed": {
      "@type": "State",
      "name": "Uttarakhand"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
