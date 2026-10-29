import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { services } from "@/content/services";
import { getGenericWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Services | DMIT Fingerprint Analysis & Career Guidance in Chhindwara",
  description:
    "Explore our 5 core services: DMIT Fingerprint Analysis, Career & Stream Guidance (Class 8–12), Parenting Guidance, Adult Profiling, and School Workshops in Chhindwara.",
  path: "/services",
  keywords: [
    "career counselling services Chhindwara",
    "DMIT services Madhya Pradesh",
    "student career guidance",
  ],
});

export default function ServicesPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
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
              <Sparkles className="h-3.5 w-3.5" />
              <span>Tailored Guidance</span>
            </Badge>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink leading-tight">
              Our Counselling Services
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Every service combines in-person fingerprint analysis with one-on-one personal counselling by Vivek Koche at our centre in Chhindwara.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-surface border border-border px-4 py-1.5 text-xs font-semibold text-ink shadow-xs">
              <MapPin className="h-3.5 w-3.5 text-primary-600" />
              <span>In-person at Sarra, Ward No. 35, Chhindwara, MP</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <Section background="default">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <Card
                key={svc.slug}
                hoverEffect
                className="flex flex-col justify-between"
              >
                <div>
                  <Badge variant="neutral" className="mb-3">
                    {svc.targetAudienceType.replace(/_/g, " ")}
                  </Badge>
                  <h2 className="font-heading text-xl font-bold text-ink">
                    {svc.title}
                  </h2>
                  <p className="mt-1 text-xs font-semibold text-primary-700">
                    For: {svc.forWhom}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {svc.shortDescription}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-border/60 pt-4 text-xs text-ink/90">
                    <span className="font-bold text-xs uppercase tracking-wider text-muted block mb-1">
                      Key Highlights:
                    </span>
                    {svc.whatYouGet.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-3 border-t border-border/60">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted">
                      Fees:
                    </span>
                    <p className="text-xs font-medium text-ink">
                      {svc.feesNotice}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between pt-4 border-t border-border/60">
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-xs font-bold text-primary-600 hover:text-primary-700 inline-flex items-center gap-1 group"
                  >
                    <span>View full details</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Button
                    variant="wa"
                    size="sm"
                    href={getGenericWhatsAppUrl()}
                    leftIcon={<MessageCircle className="h-3.5 w-3.5" />}
                  >
                    Enquire
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
