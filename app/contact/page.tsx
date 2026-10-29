import React from "react";
import type { Metadata } from "next";
import { site } from "@/content/site";
import { constructMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { getGenericWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { MapBlock } from "@/components/sections/MapBlock";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us & Centre Location | Inborn Talent Chhindwara",
  description:
    "Get in touch with Vivek Koche at Inborn Talent in Sarra, Ward No. 35, Chhindwara, MP. Schedule an in-person fingerprint scan or career counselling session.",
  path: "/contact",
  keywords: [
    "Contact Inborn Talent",
    "Vivek Koche contact number",
    "DMIT centre Chhindwara address",
  ],
});

export default function ContactPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
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
              <span>We Are Here to Help</span>
            </Badge>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink leading-tight">
              Contact & Centre Visit
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              We welcome families, students, and educators. Reach out on WhatsApp or phone to confirm a slot before visiting our centre in Chhindwara.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Grid: Form + Info/Map */}
      <Section background="default">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>

            {/* Info & Map Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Centre Location Card */}
              <MapBlock />

              {/* Direct Channels Card */}
              <div className="rounded-2xl border border-border/80 bg-surface p-6 sm:p-8 shadow-sm space-y-4">
                <h2 className="font-heading text-lg font-bold text-ink">
                  Direct Contact Details
                </h2>

                <div className="space-y-4 text-sm">
                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-wa shrink-0">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted">
                        WhatsApp (Recommended)
                      </div>
                      <a
                        href={getGenericWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-wa hover:underline"
                      >
                        {site.whatsappDisplay}
                      </a>
                      <p className="text-[11px] text-muted mt-0.5">
                        Fastest response for slot availability and fee inquiries
                      </p>
                    </div>
                  </div>

                  {/* Phone Calls */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-100 text-primary-700 shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted">
                        Call Vivek Directly
                      </div>
                      <div className="font-bold text-ink">
                        <a
                          href={`tel:${site.primaryPhone}`}
                          className="hover:text-primary-700"
                        >
                          {site.primaryPhone}
                        </a>
                      </div>
                      <div className="text-xs text-muted">
                        Alt:{" "}
                        <a
                          href={`tel:${site.secondaryPhone}`}
                          className="hover:text-primary-700"
                        >
                          {site.secondaryPhone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100 text-primary-700 shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted">
                        Email Address
                      </div>
                      <a
                        href={`mailto:${site.email}`}
                        className="font-medium text-ink hover:text-primary-700 text-xs sm:text-sm"
                      >
                        {site.email}
                      </a>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-3 border-t border-border/60 pt-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700 shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted">
                        Counselling Hours
                      </div>
                      <div className="font-medium text-ink text-xs sm:text-sm">
                        {site.hours.display}
                      </div>
                      <p className="text-[11px] text-muted mt-0.5">
                        Please confirm your appointment time in advance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

