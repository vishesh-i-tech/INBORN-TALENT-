import React from "react";
import type { Metadata } from "next";
import { getVisibleFaqs } from "@/content/faqs";
import { constructMetadata, getBreadcrumbSchema, getFaqPageSchema } from "@/lib/seo";
import { getGenericWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { HelpCircle, MessageCircle, Phone } from "lucide-react";
import { site } from "@/content/site";

export const metadata: Metadata = constructMetadata({
  title: "Frequently Asked Questions (FAQ) | Inborn Talent Chhindwara",
  description:
    "Find answers to common questions about DMIT fingerprint analysis, career guidance, scientific status, fees, and centre visits in Chhindwara.",
  path: "/faq",
  keywords: [
    "DMIT test FAQ",
    "career counselling questions Chhindwara",
    "is DMIT safe",
  ],
});

export default function FaqPage() {
  const visibleFaqs = getVisibleFaqs();

  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
  ]);

  const faqPageJsonLd = getFaqPageSchema(visibleFaqs);

  // Group FAQs by category
  const categories = Array.from(new Set(visibleFaqs.map((f) => f.category)));

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageJsonLd),
        }}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-primary-50/70 via-white to-[#FAF9FF] border-b border-border/60 py-12 md:py-16">
        <Container size="narrow">
          <div className="text-center">
            <Badge variant="primary" className="mb-3">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>Got Questions?</span>
            </Badge>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink leading-tight">
              Frequently Asked Questions
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Clear, transparent answers about fingerprint analysis, session bookings, and how counselling works at our centre in Chhindwara.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQs Categorized */}
      <Section background="default">
        <Container size="narrow" className="space-y-12">
          {categories.map((category) => {
            const categoryFaqs = visibleFaqs.filter(
              (f) => f.category === category
            );
            return (
              <div key={category} className="space-y-4">
                <div className="border-b border-border/80 pb-2">
                  <h2 className="font-heading text-lg sm:text-xl font-bold text-ink">
                    {category}
                  </h2>
                </div>
                <FaqAccordion items={categoryFaqs} />
              </div>
            );
          })}

          {/* Need More Help Box */}
          <div className="rounded-2xl border border-primary-600/20 bg-primary-50/50 p-6 sm:p-8 text-center space-y-3">
            <h3 className="font-heading text-lg sm:text-xl font-bold text-ink">
              Have a question that is not listed here?
            </h3>
            <p className="text-xs sm:text-sm text-muted max-w-md mx-auto leading-relaxed">
              We are always happy to chat and answer any questions you have without pressure or sales tactics.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="wa"
                size="md"
                href={getGenericWhatsAppUrl()}
                leftIcon={<MessageCircle className="h-4 w-4" />}
              >
                Ask Vivek on WhatsApp
              </Button>
              <Button
                variant="secondary"
                size="md"
                href={`tel:${site.primaryPhone}`}
                leftIcon={<Phone className="h-4 w-4" />}
              >
                Call {site.primaryPhone}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

