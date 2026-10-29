import type { Metadata } from "next";
import { site } from "@/content/site";
import type { FAQItem } from "@/content/faqs";

export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://inborntalent.in";

export interface PageSeoProps {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
}: PageSeoProps): Metadata {
  const fullTitle = `${title} | ${site.brand} ${site.byline}`;
  const canonicalUrl = `${BASE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "DMIT test in Chhindwara",
      "Career counselling in Chhindwara",
      "fingerprint analysis Madhya Pradesh",
      "career guidance after 10th Chhindwara",
      "Vivek Koche counsellor",
      ...keywords,
    ],
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: `${site.brand} ${site.byline}`,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${site.brand} - ${site.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${BASE_URL}/og-image.png`],
    },
  };
}

/**
 * Generates LocalBusiness / ProfessionalService schema
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${site.brand} ${site.byline}`,
    image: `${BASE_URL}/images/vivek-koche.png`,
    "@id": `${BASE_URL}/#business`,
    url: BASE_URL,
    telephone: site.primaryPhone,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      addressCountry: "IN",
      ...(site.address.pin ? { postalCode: site.address.pin } : {}),
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.0574", // Approximate Chhindwara coordinates
      longitude: "78.9382",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    founder: {
      "@type": "Person",
      name: site.counsellor,
      jobTitle: site.counsellorRole,
      description: `${site.experienceYears} years of experience and ${site.studentsGuided} students guided in Chhindwara.`,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Chhindwara and nearby areas, Madhya Pradesh",
    },
  };
}

/**
 * Generates FAQPage schema
 */
export function getFaqPageSchema(faqItems: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * Generates BreadcrumbList schema
 */
export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}
