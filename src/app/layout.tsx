import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import WhatsAppFloat from "@/components/WhatsAppFloat/WhatsAppFloat";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Care Loop | Your complete care journey after hospital",
  description: "Post-discharge care, digital health records, medicine delivery, lab tests & radiology- seamlessly connected. All in one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable}`}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
