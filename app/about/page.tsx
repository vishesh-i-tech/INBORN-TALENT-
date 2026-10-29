import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";
import { copy } from "@/content/copy";
import { constructMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { getGenericWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CredentialsSection } from "@/components/sections/CredentialsSection";
import {
  MessageCircle,
  Phone,
  Clock,
  Users,
  MapPin,
  Heart,
  Compass,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "About Vivek Koche | Career Counsellor in Chhindwara",
  description:
    "Learn about Vivek Koche, certified DMIT counsellor with 6 years of experience guiding 200+ students in Chhindwara and Madhya Pradesh.",
  path: "/about",
  keywords: [
    "Career counsellor in Chhindwara, Vivek Koche",
    "Vivek Koche counsellor",
    "DMIT counsellor Madhya Pradesh",
  ],
});

export default function AboutPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About Vivek Koche", path: "/about" },
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
              <Compass className="h-3.5 w-3.5" />
              <span>Personal Counsellor</span>
            </Badge>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink leading-tight">
              About Vivek Koche
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              6 years of dedicated guidance, helping more than 200 students and families discover natural strengths and make calm, informed educational choices.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Profile & Bio Section */}
      <Section background="default">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            {/* Left Photo Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden bg-surface p-3 shadow-purple-soft border border-border">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-primary-600">
                  <Image
                    src={site.counsellorPhoto}
                    alt={`${site.counsellor} - Career Counsellor in Chhindwara`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="mt-4 px-2 text-center pb-2">
                  <h2 className="font-heading font-extrabold text-ink text-xl">
                    {site.counsellor}
                  </h2>
                  <p className="text-xs text-primary-700 font-bold uppercase tracking-wide mt-0.5">
                    {site.counsellorRole}
                  </p>
                  <p className="text-xs text-muted mt-1">
                    At Sarra, Ward No. 35, Chhindwara, MP
                  </p>
                </div>
              </div>

              {/* Fast Stats */}
              <div className="mt-6 grid grid-cols-2 gap-3 w-full max-w-sm">
                <div className="rounded-xl border border-border bg-surface p-4 text-center">
                  <Clock className="h-5 w-5 text-primary-600 mx-auto mb-1" />
                  <div className="font-heading font-black text-xl text-ink">
                    6 Years
                  </div>
                  <div className="text-[11px] text-muted font-medium">
                    Of Experience
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-surface p-4 text-center">
                  <Users className="h-5 w-5 text-primary-600 mx-auto mb-1" />
                  <div className="font-heading font-black text-xl text-ink">
                    200+
                  </div>
                  <div className="text-[11px] text-muted font-medium">
                    Students Guided
                  </div>
                </div>
              </div>
            </div>

            {/* Right Bio & Approach */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary-700">
                  My Story & Approach
                </span>
                <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-extrabold text-ink">
                  Guiding with empathy, honesty, and listening
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-muted">
                {copy.meetVivek.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Core Beliefs */}
              <div className="rounded-2xl border border-border bg-surface p-6 space-y-3 shadow-xs">
                <div className="flex items-center gap-2 text-sm font-bold text-ink">
                  <Heart className="h-4 w-4 text-primary-600" />
                  <span>Our Guiding Principles</span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-ink/90">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Every child is uniquely gifted:</strong> We never compare children to one another or force them into predetermined moulds.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Open communication over pressure:</strong> We help parents understand their child&apos;s learning style to replace friction with calm encouragement.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Honest and grounded:</strong> We explain what DMIT can and cannot do. We never make exaggerated claims or guarantees.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Credentials Section (Hidden until client provides data) */}
              <CredentialsSection />

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                <Button
                  variant="wa"
                  size="md"
                  href={getGenericWhatsAppUrl()}
                  leftIcon={<MessageCircle className="h-4 w-4" />}
                >
                  Message Vivek on WhatsApp
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
          </div>
        </Container>
      </Section>
    </div>
  );
}
