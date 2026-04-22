import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import WhatsAppFloat from "@/components/WhatsAppFloat/WhatsAppFloat";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://careloop.in'),
  title: {
    default: "Careloop Healthcare | Your Complete Care Journey",
    template: "%s | Careloop Healthcare"
  },
  description: "Comprehensive post-discharge care, digital health records, and patient monitoring platform connecting hospitals to patients securely.",
  keywords: ["post-discharge care", "medicine delivery", "digital health records", "EHR", "remote patient monitoring", "healthcare", "India"],
  openGraph: {
    title: "Careloop Healthcare",
    description: "Your complete care journey after hospital. Post-discharge care, medicine delivery, and lab tests.",
    url: "https://careloop.in",
    siteName: "Careloop Healthcare",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careloop Healthcare",
    description: "Your complete care journey after hospital.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Careloop Healthcare",
    "url": "https://careloop.in",
    "logo": "https://careloop.in/logo.png",
    "description": "Comprehensive post-discharge care and patient monitoring platform.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Varanasi",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "India",
      "streetAddress": "Kakarmata BLW"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9236875061",
      "contactType": "customer service"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jakarta.variable}`}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
