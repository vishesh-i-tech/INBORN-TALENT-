import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { StickyMobileBar } from "@/components/navigation/StickyMobileBar";
import { FloatingWhatsApp } from "@/components/navigation/FloatingWhatsApp";
import { getLocalBusinessSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#6B46F0",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://inborntalent.in"
  ),
  title: {
    default: `${site.brand} ${site.byline} | DMIT Test & Career Counselling in Chhindwara`,
    template: `%s | ${site.brand} ${site.byline}`,
  },
  description:
    "In-person DMIT fingerprint analysis and career guidance for students, parents and professionals in Chhindwara, MP. 6 years of experience, 200+ students guided. Book on WhatsApp.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = getLocalBusinessSchema();

  return (
    <html lang="en-IN" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className="font-sans text-ink bg-[#FAF9FF] antialiased selection:bg-primary-100 selection:text-primary-700">
        {/* Skip to Content for WCAG Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 rounded-lg bg-primary-600 px-4 py-2 font-bold text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Skip to main content
        </a>

        {/* Global Desktop & Mobile Header */}
        <Header />

        {/* Main Content Area */}
        <main id="main-content" className="flex-1 focus:outline-none">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Mobile Sticky Bar (Call + WhatsApp) */}
        <StickyMobileBar />

        {/* Desktop Floating WhatsApp Bubble */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
