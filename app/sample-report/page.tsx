import React from "react";
import type { Metadata } from "next";
import { constructMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { getGenericWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SampleReportViewer } from "@/components/report/SampleReportViewer";
import { FileText, MessageCircle, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Sample DMIT Report Preview | Fictional Illustrative Data",
  description:
    "Preview an illustrative DMIT analysis report showing brain lobes balance, quotients, personality tendencies, and learning styles. 100% fictional data.",
  path: "/sample-report",
  keywords: [
    "sample DMIT report",
    "DMIT test report preview",
    "multiple intelligences sample report",
    "brain lobes report",
  ],
});

export default function SampleReportPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Sample Report", path: "/sample-report" },
  ]);

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-primary-50/70 via-white to-[#FAF9FF] border-b border-border/60 py-12 md:py-16">
        <Container size="narrow">
          <div className="text-center">
            <Badge variant="accent" className="mb-3">
              <FileText className="h-3.5 w-3.5" />
              <span>Fictional Illustrative Preview</span>
            </Badge>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink leading-tight">
              Sample DMIT Analysis Report
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Explore how observations across brain lobes, cognitive quotients, and learning styles are presented. Every dataset shown here is entirely fictional.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Report Viewer Section */}
      <Section background="default">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* The interactive Native SVG/CSS Sample Report */}
            <SampleReportViewer />

            {/* Bottom Callout & CTA */}
            <div className="mt-12 rounded-2xl border border-primary-600/20 bg-primary-50/50 p-6 sm:p-8 text-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-primary-700 uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>Personal Counselling Included</span>
              </div>

              <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
                Want to discuss what a report could reveal for your child?
              </h2>

              <p className="text-sm text-muted max-w-xl mx-auto">
                During our in-person sessions at Sarra, Chhindwara, Vivek Koche walks through every section with parents and students in a supportive, relaxed setting.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  variant="wa"
                  size="md"
                  href={getGenericWhatsAppUrl()}
                  leftIcon={<MessageCircle className="h-4 w-4" />}
                >
                  Enquire on WhatsApp for current fees
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  href="/contact"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Visit Centre Details
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
