import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, type ServiceItem } from "@/content/services";
import { constructMetadata, getBreadcrumbSchema, getFaqPageSchema } from "@/lib/seo";
import { getServiceWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import {
  MessageCircle,
  Phone,
  CheckCircle2,
  Clock,
  MapPin,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import { site } from "@/content/site";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((svc) => ({
    slug: svc.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return constructMetadata({
    title: service.title,
    description: `${service.shortDescription} Personal counselling in Chhindwara with Vivek Koche.`,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ]);

  const faqSchema = getFaqPageSchema(
    service.faqs.map((f, i) => ({
      id: `service-faq-${i}`,
      category: "General",
      question: f.question,
      answer: f.answer,
    }))
  );

  const serviceWhatsAppUrl = getServiceWhatsAppUrl(service.title);

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-primary-50/70 via-white to-[#FAF9FF] border-b border-border/60 py-12 md:py-16">
        <Container size="narrow">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-600 hover:text-primary-700 mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to All Services</span>
          </Link>

          <div>
            <Badge variant="primary" className="mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>In-Person Centre Service</span>
            </Badge>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink leading-tight">
              {service.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              {service.tagline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button
                variant="wa"
                size="md"
                href={serviceWhatsAppUrl}
                leftIcon={<MessageCircle className="h-4 w-4" />}
              >
                Enquire for {service.title} on WhatsApp
              </Button>

              <Button
                variant="secondary"
                size="md"
                href={`tel:${site.primaryPhone}`}
                leftIcon={<Phone className="h-4 w-4" />}
              >
                Call Centre
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Body */}
      <Section background="default">
        <Container size="narrow" className="space-y-12">
          {/* Who It Is For */}
          <div className="rounded-2xl border border-border/80 bg-surface p-6 sm:p-8 shadow-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-700">
              Target Audience
            </span>
            <h2 className="mt-1 font-heading text-xl sm:text-2xl font-bold text-ink">
              Who is this service for?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">
              {service.forWhom}
            </p>

            {/* Session Duration - HIDDEN IF NULL/EMPTY (PRD Section 1.4) */}
            {service.sessionDuration && (
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-primary-700 bg-primary-50 px-3 py-1.5 rounded-lg w-fit">
                <Clock className="h-4 w-4" />
                <span>Session Duration: {service.sessionDuration}</span>
              </div>
            )}
          </div>

          {/* What You Get */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
              What You Receive
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {service.whatYouGet.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-border/70 bg-surface p-4 shadow-2xs"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-ink/90 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works (Steps) */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
              How the Process Works
            </h2>
            <div className="space-y-3">
              {service.howItWorks.map((step) => (
                <div
                  key={step.stepNumber}
                  className="flex items-start gap-4 rounded-xl border border-border/70 bg-surface p-5 shadow-2xs"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-xs font-black text-primary-700 shrink-0">
                    {step.stepNumber}
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fees & In-Person Notice */}
          <div className="rounded-2xl border border-primary-600/20 bg-primary-50/50 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary-700">
                Transparent Pricing
              </span>
              <h3 className="font-heading text-lg font-bold text-ink mt-0.5">
                {service.feesNotice}
              </h3>
              <p className="text-xs text-muted mt-1">
                Scans are conducted in person at our centre in Sarra, Chhindwara. We explain all details upfront on WhatsApp before booking.
              </p>
            </div>
            <Button
              variant="wa"
              size="md"
              href={serviceWhatsAppUrl}
              leftIcon={<MessageCircle className="h-4 w-4" />}
              className="shrink-0"
            >
              Ask on WhatsApp
            </Button>
          </div>

          {/* Service FAQs */}
          <div className="space-y-4">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
              Service Questions
            </h2>
            <FaqAccordion
              items={service.faqs.map((f, i) => ({
                id: `faq-${i}`,
                category: "General",
                question: f.question,
                answer: f.answer,
              }))}
            />
          </div>

          {/* Service Enquiry Form Embed */}
          <div className="pt-6 border-t border-border/60">
            <EnquiryForm defaultServiceSlug={service.slug} />
          </div>
        </Container>
      </Section>
    </div>
  );
}
