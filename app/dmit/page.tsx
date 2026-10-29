import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { getGenericWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HonestDmitBox } from "@/components/sections/HonestDmitBox";
import {
  Fingerprint,
  Info,
  CheckCircle2,
  XCircle,
  MessageCircle,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "What is DMIT Test? | Fingerprint Analysis for Children & Students",
  description:
    "An honest explanation of what DMIT is and what it is not. Understand how fingerprint pattern analysis serves as an indicative starting point for counselling in Chhindwara.",
  path: "/dmit",
  keywords: [
    "What is DMIT test",
    "fingerprint test for children",
    "DMIT test in Chhindwara",
    "is DMIT scientifically proven",
    "dermatoglyphics multiple intelligence test",
  ],
});

export default function DmitExplainerPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "What is DMIT", path: "/dmit" },
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
            <Badge variant="primary" className="mb-3">
              <Fingerprint className="h-3.5 w-3.5" />
              <span>Transparent Explainer</span>
            </Badge>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink leading-tight">
              What is DMIT Fingerprint Analysis?
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              A gentle, honest look at what fingerprint patterns can suggest, the limitations you should know, and how we use it responsibly as a starting point for personal conversation.
            </p>
          </div>
        </Container>
      </section>

      {/* Core Explainer Section */}
      <Section background="default">
        <Container size="narrow" className="space-y-12">
          {/* Section 1: The Concept */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
              1. The Basic Concept
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-muted">
              DMIT stands for <strong>Dermatoglyphics Multiple Intelligence Test</strong>. Dermatoglyphics refers to the study of epidermal ridges on the fingers, palms, and soles of human hands and feet. In modern DMIT practice, optical biometric scanners capture images of the ten fingertips to classify ridge patterns (loops, whorls, arches).
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-muted">
              The patterns are analysed through specialised software to produce an indicative report outlining relative distributions of learning preferences (Visual, Auditory, Kinesthetic) and multiple intelligences.
            </p>
          </div>

          {/* Section 2: Honest Box Embed */}
          <div>
            <HonestDmitBox showClientNotice={false} />
          </div>

          {/* Section 3: Limitations & Scientific Status */}
          <div className="rounded-2xl border border-border/80 bg-surface p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex items-center gap-2.5 text-primary-700 font-bold text-lg font-heading">
              <ShieldAlert className="h-5 w-5 text-amber-600" />
              <span>Understanding the Limitations Honestly</span>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              We believe every parent and student deserves absolute transparency before booking any session:
            </p>

            <ul className="space-y-3 text-sm text-ink/90">
              <li className="flex items-start gap-2.5">
                <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Not a psychometric test:</strong> DMIT is not an established psychometric testing instrument or standardised intelligence test.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Not a clinical or medical diagnosis:</strong> It cannot identify, screen for, or diagnose learning disabilities, neurological conditions, or medical disorders.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Not a guarantee of career success:</strong> Fingerprint patterns do not predict exams marks, future income, or guaranteed career outcomes. Hard work, environment, student interest, and perseverance play the decisive role.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>What it DOES provide:</strong> A supportive, low-pressure mirror that encourages students to reflect on their habits and provides parents with actionable tips to support their child without friction.
                </span>
              </li>
            </ul>
          </div>

          {/* Section 4: How We Use the Report in Counselling */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
              2. How Vivek Koche Uses the Report
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-muted">
              At Inborn Talent, a report is never handed over without a thorough conversation. The report is merely a supportive talking document.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="rounded-xl border border-border bg-surface p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-700">Step A</span>
                <h3 className="font-heading font-bold text-sm text-ink mt-1">Past Academic Performance</h3>
                <p className="text-xs text-muted mt-1.5 leading-relaxed">
                  We look at actual school results and subject strengths in real school exams.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-700">Step B</span>
                <h3 className="font-heading font-bold text-sm text-ink mt-1">Genuine Student Interests</h3>
                <p className="text-xs text-muted mt-1.5 leading-relaxed">
                  We listen directly to what activities, hobbies, and ideas spark natural curiosity in the student.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-surface p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-700">Step C</span>
                <h3 className="font-heading font-bold text-sm text-ink mt-1">Family Goals & Realities</h3>
                <p className="text-xs text-muted mt-1.5 leading-relaxed">
                  We align practical options with parents&apos; aspirations in a relaxed, pressure-free atmosphere.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Low-pressure CTA */}
          <div className="rounded-2xl border border-primary-600/20 bg-gradient-to-r from-primary-50 to-purple-50 p-6 sm:p-8 text-center space-y-4">
            <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-ink">
              Have doubts or questions?
            </h2>
            <p className="text-sm text-muted max-w-lg mx-auto">
              You do not have to commit to any session. Message Vivek directly on WhatsApp to ask questions or discuss your child&apos;s educational stage freely.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="wa"
                size="md"
                href={getGenericWhatsAppUrl()}
                leftIcon={<MessageCircle className="h-4 w-4" />}
              >
                Ask a question on WhatsApp, no obligation
              </Button>
              <Button
                variant="outline"
                size="md"
                href="/sample-report"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Inspect Sample Report
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
