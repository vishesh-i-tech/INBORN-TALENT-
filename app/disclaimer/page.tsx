import React from "react";
import type { Metadata } from "next";
import { site } from "@/content/site";
import { copy } from "@/content/copy";
import { constructMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Disclaimer & Terms | Inborn Talent",
  description:
    "Disclaimer and terms of guidance for Inborn Talent by Vivek Koche. Understanding the scope and indicative nature of DMIT counselling.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Disclaimer & Terms", path: "/disclaimer" },
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
            <Badge variant="neutral" className="mb-3">
              <AlertTriangle className="h-3.5 w-3.5 text-amber-600" />
              <span>Terms of Guidance (Client to review)</span>
            </Badge>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink leading-tight">
              Disclaimer & Terms
            </h1>

            <p className="mt-3 text-xs sm:text-sm text-muted">
              Scope of service and advisory guidelines • Inborn Talent by Vivek Koche
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <Section background="default">
        <Container size="narrow" className="prose prose-slate max-w-3xl space-y-8 text-sm sm:text-base leading-relaxed text-muted">
          <div className="rounded-2xl border border-amber-300 bg-amber-50/70 p-6 text-sm text-ink font-medium leading-relaxed shadow-xs">
            <h2 className="font-heading font-extrabold text-base text-ink mb-2">
              Primary Advisory Notice
            </h2>
            <p>{copy.disclaimerText}</p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-ink">
              1. Indicative Nature of DMIT
            </h2>
            <p>
              Dermatoglyphics Multiple Intelligence Test (DMIT) analyses fingerprint ridge patterns to suggest indicative learning styles (Visual, Auditory, Kinesthetic) and relative distributions across multiple intelligences. It is an exploration tool and conversation starter—not an exact science or psychometric test.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-ink">
              2. Not a Medical or Clinical Assessment
            </h2>
            <p>
              The reports and counselling sessions provided by Inborn Talent do not constitute medical, psychological, psychiatric, or diagnostic advice. They cannot identify, treat, or screen for mental health conditions, neurodivergence, or clinical learning disabilities. If you have clinical or developmental concerns regarding your child, please seek consultation with a licensed psychologist or healthcare professional.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-ink">
              3. No Guaranteed Academic or Financial Outcomes
            </h2>
            <p>
              No test or counselling session can predict or guarantee admission into specific colleges, scores in competitive entrance exams, or future career income. Career and stream success is fundamentally driven by sustained effort, study habits, passion, family guidance, and changing economic environments.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-ink">
              4. Independent Decision-Making
            </h2>
            <p>
              Parents and students are advised to use the insights from Inborn Talent as one helpful reference point alongside academic report cards, teachers&apos; feedback, personal hobbies, and genuine career interests. Major educational and career choices should never be made based on a DMIT report alone.
            </p>
          </div>

          <div className="space-y-3 border-t border-border/60 pt-6">
            <h2 className="font-heading text-lg font-bold text-ink">
              Questions Regarding This Disclaimer
            </h2>
            <p className="text-xs text-muted">
              For any clarifications regarding our counselling framework, please write to{" "}
              <a href={`mailto:${site.email}`} className="text-primary-700 underline">
                {site.email}
              </a>{" "}
              or message us at {site.whatsappDisplay}.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}

