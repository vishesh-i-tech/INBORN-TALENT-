import React from "react";
import type { Metadata } from "next";
import { site } from "@/content/site";
import { constructMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, Mail, Phone } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy | Inborn Talent",
  description:
    "Privacy Policy for Inborn Talent by Vivek Koche. Understand how personal information and biometric fingerprint data are handled responsibly.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy-policy" },
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
              <ShieldCheck className="h-3.5 w-3.5 text-primary-600" />
              <span>Draft (Client to review)</span>
            </Badge>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink leading-tight">
              Privacy Policy
            </h1>

            <p className="mt-3 text-xs sm:text-sm text-muted">
              Last updated: October 2026 • Inborn Talent by Vivek Koche
            </p>
          </div>
        </Container>
      </section>

      {/* Main Legal Content */}
      <Section background="default">
        <Container size="narrow" className="prose prose-slate max-w-3xl space-y-8 text-sm sm:text-base leading-relaxed text-muted">
          <div className="rounded-xl border border-amber-300 bg-amber-50/70 p-4 text-xs text-amber-900">
            <strong>Client Review Notice:</strong> This privacy policy draft reflects current business practices at Inborn Talent. The client should review and approve any legal updates before official commercial use.
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-ink">
              1. Information We Collect
            </h2>
            <p>
              We collect information in two primary ways: through our website enquiry form and during your in-person visit to our counselling centre in Chhindwara.
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Website Enquiry Details:</strong> When you submit an enquiry form or message us, we collect your name, mobile/WhatsApp number, target audience category (e.g. parent, student), student class or age (if provided), and any message notes you include.
              </li>
              <li>
                <strong>Fingerprint Scans at the Centre:</strong> During the in-person session, optical digital scanners take images of your fingertips solely for biometric ridge pattern classification by analysis software.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-ink">
              2. Purpose of Collection
            </h2>
            <p>We use your information exclusively to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Respond to your enquiries and coordinate centre appointments via WhatsApp or phone.</li>
              <li>Generate your personal DMIT analysis report based on optical pattern classification.</li>
              <li>Conduct personalized career and learning guidance sessions with Vivek Koche.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-ink">
              3. Consent for Minors
            </h2>
            <p>
              Because many of our clients are students in Class 8 through 12, all scans and counselling sessions for individuals under 18 years of age are conducted strictly with the active written or verbal consent and presence of a parent or legal guardian.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-ink">
              4. No Selling or Sharing of Data
            </h2>
            <p>
              Inborn Talent does not sell, rent, lease, or trade personal contact details or fingerprint scan files to any third-party marketing companies, brokers, or external entities. Data is accessed solely by Vivek Koche to prepare your report and conduct your session.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-ink">
              5. Data Retention & Deletion Requests
            </h2>
            <p>
              Biometric scan image files and generated reports are stored on secured local systems for the period necessary to complete your counselling. You have the right to request immediate deletion of your records at any time.
            </p>
            <p>
              To request deletion of your contact records or report copies, simply contact us via:
            </p>
            <ul className="list-none space-y-1 text-ink font-medium pl-0">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-600" />
                <span>Email: {site.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-600" />
                <span>WhatsApp / Call: {site.primaryPhone}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-xl font-bold text-ink">
              6. Website Analytics
            </h2>
            <p>
              Our website may utilize privacy-conscious web analytics (such as Google Analytics 4) to monitor overall aggregate visitor volume and button click events (such as calls or WhatsApp clicks). We do NOT transmit names, phone numbers, or private messages to analytics trackers.
            </p>
          </div>

          <div className="space-y-3 border-t border-border/60 pt-6">
            <h2 className="font-heading text-lg font-bold text-ink">
              7. Centre Contact Information
            </h2>
            <p className="text-xs text-muted">
              Inborn Talent by Vivek Koche<br />
              {site.address.line}, {site.address.city}, {site.address.state}<br />
              Email: {site.email} | Phone: {site.primaryPhone}
            </p>
          </div>
        </Container>
      </Section>
    </div>
  );
}

