import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundBlobs } from "@/components/background-blobs";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://peakedge-sports-performance.amsitservices.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PeakEdge Sports Performance — Athletic Training & Coaching",
    template: "%s | PeakEdge Sports Performance",
  },
  description:
    "PeakEdge Sports Performance is Austin's premier sports performance training facility. Strength & conditioning, speed & agility, sport-specific coaching, youth athletic development, injury prevention and team training camps.",
  keywords: [
    "sports performance training",
    "athletic training Austin",
    "speed and agility training",
    "strength and conditioning",
    "youth athletic development",
    "injury prevention",
    "team training camps",
    "sports performance coach",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "PeakEdge Sports Performance",
    title: "PeakEdge Sports Performance — Athletic Training & Coaching",
    description:
      "Train like the pros at Austin's premier performance facility. Science-based programming, certified coaches and pro-grade equipment for athletes of every level.",
    url: SITE_URL,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PeakEdge Sports Performance — athlete training in a modern performance facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PeakEdge Sports Performance — Athletic Training & Coaching",
    description:
      "Strength, speed and sport-specific training for athletes of every level in Austin, TX.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
      <body className="relative min-h-screen antialiased">
        <BackgroundBlobs />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
