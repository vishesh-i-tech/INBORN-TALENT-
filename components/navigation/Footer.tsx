import React from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { copy } from "@/content/copy";
import { getGenericWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-surface pt-14 pb-20 md:pb-14 text-ink">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand & Counsellor Bio */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block" aria-label="Inborn Talent Home">
              <Image
                src="/logo.svg"
                alt={`${site.brand} ${site.byline}`}
                width={200}
                height={42}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-muted">
              {copy.footer.tagline}
            </p>
            <div className="rounded-xl border border-border/60 bg-primary-50/60 p-3.5 text-xs text-muted">
              <span className="font-bold text-ink">In-person Centre:</span> All fingerprint
              scanning and analysis is performed physically at our Chhindwara centre. No online scanning.
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-ink">
              {copy.footer.servicesTitle}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="text-muted hover:text-primary-700 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="h-3 w-3 text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{svc.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="font-semibold text-primary-600 hover:text-primary-700 transition-colors inline-block mt-1"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links & Legal */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-ink">
              {copy.footer.quickLinksTitle}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/dmit"
                  className="text-muted hover:text-primary-700 transition-colors"
                >
                  What is DMIT Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/sample-report"
                  className="text-muted hover:text-primary-700 transition-colors"
                >
                  Sample Report (Fictional)
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted hover:text-primary-700 transition-colors"
                >
                  About Vivek Koche
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted hover:text-primary-700 transition-colors"
                >
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted hover:text-primary-700 transition-colors"
                >
                  Contact & Centre Location
                </Link>
              </li>
              <li className="pt-2 border-t border-border/40">
                <Link
                  href="/privacy-policy"
                  className="text-xs text-muted hover:text-ink transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-xs text-muted hover:text-ink transition-colors"
                >
                  Disclaimer & Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Centre & Contact Info */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-ink">
              {copy.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-muted">
                <MapPin className="h-4 w-4 text-primary-600 shrink-0 mt-0.5" />
                <span>
                  {site.address.line}, {site.address.city}, {site.address.state}
                  {site.address.pin ? ` - ${site.address.pin}` : ""}
                </span>
              </li>
              <li className="flex items-center gap-2.5 text-muted">
                <Clock className="h-4 w-4 text-primary-600 shrink-0" />
                <span>{site.hours.display}</span>
              </li>
              <li className="flex flex-col gap-1 text-muted">
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-primary-600 shrink-0" />
                  <a
                    href={`tel:${site.primaryPhone}`}
                    className="hover:text-primary-700 font-semibold"
                  >
                    {site.primaryPhone}
                  </a>
                </div>
                <div className="pl-6.5 text-xs">
                  <a
                    href={`tel:${site.secondaryPhone}`}
                    className="hover:text-primary-700"
                  >
                    Alt: {site.secondaryPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5 text-muted">
                <MessageCircle className="h-4 w-4 text-wa shrink-0" />
                <a
                  href={getGenericWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-wa hover:underline"
                >
                  WhatsApp: {site.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-muted">
                <Mail className="h-4 w-4 text-primary-600 shrink-0" />
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-primary-700 text-xs"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer sentence banner */}
        <div className="mt-12 rounded-xl bg-purple-50/50 border border-border/60 p-4 text-xs leading-relaxed text-muted">
          <p>
            <strong className="font-semibold text-ink">Important Note:</strong>{" "}
            {copy.disclaimerText}
          </p>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted sm:flex-row">
          <p>{copy.footer.copyright}</p>
          <p className="font-medium text-ink">{copy.footer.byline}</p>
        </div>
      </Container>
    </footer>
  );
}

