import React from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { copy } from "@/content/copy";
import { getTopFaqs } from "@/content/faqs";
import { getGenericWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { HonestDmitBox } from "@/components/sections/HonestDmitBox";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { MapBlock } from "@/components/sections/MapBlock";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import {
  MessageCircle,
  Phone,
  Clock,
  Users,
  MapPin,
  ArrowRight,
  BookOpen,
  Brain,
  Compass,
  Sparkles,
  Target,
  HeartHandshake,
  CheckCircle2,
  FileText,
} from "lucide-react";

export default function HomePage() {
  const topFaqs = getTopFaqs();

  // Mapping string icon names to Lucide components
  const getIcon = (name: string) => {
    switch (name) {
      case "BookOpen":
        return <BookOpen className="h-6 w-6 text-primary-600" />;
      case "Brain":
        return <Brain className="h-6 w-6 text-primary-600" />;
      case "Compass":
        return <Compass className="h-6 w-6 text-primary-600" />;
      case "Sparkles":
        return <Sparkles className="h-6 w-6 text-primary-600" />;
      case "Target":
        return <Target className="h-6 w-6 text-primary-600" />;
      case "HeartHandshake":
        return <HeartHandshake className="h-6 w-6 text-primary-600" />;
      default:
        return <Sparkles className="h-6 w-6 text-primary-600" />;
    }
  };

  return (
    <div className="flex flex-col">
      {/* =========================================================================
          SECTION 1: HERO
          Two columns desktop, stacked mobile. Circle composition for photo.
         ========================================================================= */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-primary-50/70 via-[#FAF9FF] to-white border-b border-border/50">
        {/* Decorative circle motifs echoing Vivek's photo background */}
        <div
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary-100/50 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 -right-20 h-80 w-80 rounded-full bg-amber-100/40 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Column: Copy & CTAs */}
            <div className="lg:col-span-7">
              <Badge variant="primary" className="mb-4">
                <span className="flex h-2 w-2 rounded-full bg-primary-600 animate-ping mr-1" />
                <span>{copy.hero.badge}</span>
              </Badge>

              <h1 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-5xl leading-[1.15]">
                {copy.hero.h1}
              </h1>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted max-w-xl">
                {copy.hero.subheadline}
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Button
                  variant="wa"
                  size="lg"
                  href={getGenericWhatsAppUrl()}
                  leftIcon={<MessageCircle className="h-5 w-5" />}
                  className="shadow-md hover:shadow-lg text-center"
                >
                  {copy.hero.primaryCta}
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  href={`tel:${site.primaryPhone}`}
                  leftIcon={<Phone className="h-5 w-5" />}
                  className="text-center"
                >
                  {copy.hero.secondaryCta}
                </Button>
              </div>

              {/* Trust Chips */}
              <div className="mt-10 flex flex-wrap items-center gap-3 pt-6 border-t border-border/60">
                <div className="flex items-center gap-2 rounded-full bg-surface border border-border px-3.5 py-1.5 text-xs font-semibold text-ink shadow-xs">
                  <Clock className="h-3.5 w-3.5 text-primary-600" />
                  <span>{site.experienceYears} years experience</span>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-surface border border-border px-3.5 py-1.5 text-xs font-semibold text-ink shadow-xs">
                  <Users className="h-3.5 w-3.5 text-primary-600" />
                  <span>{site.studentsGuided} students guided</span>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-surface border border-border px-3.5 py-1.5 text-xs font-semibold text-ink shadow-xs">
                  <MapPin className="h-3.5 w-3.5 text-primary-600" />
                  <span>In-person, Chhindwara</span>
                </div>
              </div>
            </div>

            {/* Right Column: Photo with Circle Composition */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md">
                {/* Background decorative concentric rings matching photo pattern */}
                <div className="absolute -inset-4 rounded-full border-2 border-primary-600/10 border-dashed animate-[spin_60s_linear_infinite]" />
                <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-primary-600/10 to-amber-400/10 blur-xl pointer-events-none" />

                {/* Profile Card Frame */}
                <div className="relative rounded-3xl overflow-hidden bg-surface p-3 shadow-purple-soft border border-border">
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary-600 to-primary-700">
                    <Image
                      src={site.counsellorPhoto}
                      alt={`${site.counsellor} - Career Counsellor & DMIT Practitioner in Chhindwara`}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Caption badge overlay */}
                  <div className="mt-3 px-3 py-2 text-center">
                    <h3 className="font-heading font-extrabold text-ink text-base">
                      {site.counsellor}
                    </h3>
                    <p className="text-xs text-primary-700 font-semibold">
                      {site.counsellorRole}
                    </p>
                    <p className="text-[11px] text-muted mt-0.5">
                      Personal in-person guidance at Sarra, Chhindwara
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 2: WHO IT HELPS (5 Cards)
         ========================================================================= */}
      <Section background="default">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="primary">Targeted Guidance</Badge>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-extrabold text-ink">
              {copy.whoItHelps.sectionTitle}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted">
              {copy.whoItHelps.sectionSubtitle}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {copy.whoItHelps.cards.map((card) => (
              <Card key={card.id} hoverEffect className="flex flex-col justify-between">
                <div>
                  <Badge variant="neutral" className="mb-3">
                    {card.badge}
                  </Badge>
                  <h3 className="font-heading text-lg font-bold text-ink">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {card.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/60">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-600 hover:text-primary-700 group"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          SECTION 3: WHAT YOU LEARN FROM A DMIT REPORT (6 Tiles)
          Language explicitly stresses "indicative"
         ========================================================================= */}
      <Section background="tint">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="primary">Indicative Observations</Badge>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-extrabold text-ink">
              {copy.whatYouLearn.sectionTitle}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted">
              {copy.whatYouLearn.sectionSubtitle}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {copy.whatYouLearn.tiles.map((tile, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border/80 bg-surface p-6 shadow-sm hover:border-primary-600/30 transition-all hover:-translate-y-0.5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100/70 mb-4">
                  {getIcon(tile.icon)}
                </div>
                <h3 className="font-heading text-base font-bold text-ink">
                  {tile.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted">
                  {tile.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          SECTION 4: HOW IT WORKS (5 Steps)
         ========================================================================= */}
      <Section background="default">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="primary">Simple & In-Person</Badge>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-extrabold text-ink">
              {copy.howItWorks.sectionTitle}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted">
              {copy.howItWorks.sectionSubtitle}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {copy.howItWorks.steps.map((step) => (
              <div
                key={step.number}
                className="relative flex flex-col rounded-2xl border border-border/80 bg-surface p-5 shadow-xs"
              >
                <span className="font-heading font-black text-2xl text-primary-600/30">
                  {step.number}
                </span>
                <h3 className="mt-2 font-heading font-bold text-sm text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          SECTION 5: SAMPLE REPORT TEASER
         ========================================================================= */}
      <Section background="white">
        <Container>
          <div className="rounded-3xl border border-border bg-gradient-to-br from-primary-50/50 via-white to-amber-50/30 p-8 md:p-12 shadow-sm">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7">
                <Badge variant="accent">{copy.sampleReportTeaser.badge}</Badge>
                <h2 className="mt-3 font-heading text-2xl sm:text-3xl font-extrabold text-ink">
                  {copy.sampleReportTeaser.title}
                </h2>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">
                  {copy.sampleReportTeaser.subtitle}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    href="/sample-report"
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    {copy.sampleReportTeaser.ctaText}
                  </Button>
                </div>

                <p className="mt-4 text-xs font-semibold text-amber-900/80">
                  ⚠️ {copy.sampleReportTeaser.fictionalNotice}
                </p>
              </div>

              {/* 3 Mini Preview Cards */}
              <div className="lg:col-span-5 grid grid-cols-1 gap-3">
                <div className="rounded-xl border border-border bg-surface p-3.5 shadow-xs">
                  <div className="flex items-center justify-between text-xs font-bold text-ink">
                    <span>Brain Lobes Distribution</span>
                    <span className="text-primary-700">Left 52% | Right 48%</span>
                  </div>
                  <div className="mt-2 h-2 w-full bg-slate-100 rounded-full overflow-hidden flex">
                    <div className="w-[52%] bg-primary-600" />
                    <div className="w-[48%] bg-amber-400" />
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-surface p-3.5 shadow-xs">
                  <div className="flex items-center justify-between text-xs font-bold text-ink">
                    <span>EQ / IQ / AQ / CQ Balance</span>
                    <span className="text-emerald-700">4 Quotients</span>
                  </div>
                  <div className="mt-2 text-[11px] text-muted truncate">
                    EQ 28% • IQ 26% • AQ 24% • CQ 22% (Sum = 100%)
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-surface p-3.5 shadow-xs">
                  <div className="flex items-center justify-between text-xs font-bold text-ink">
                    <span>VAK Learning Styles</span>
                    <span className="text-primary-700">Visual 42%</span>
                  </div>
                  <div className="mt-2 text-[11px] text-muted">
                    Visual (42%) • Auditory (34%) • Kinesthetic (24%)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          SECTION 6: MEET VIVEK
         ========================================================================= */}
      <Section background="default">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden bg-surface p-3 shadow-purple-soft border border-border">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-primary-600">
                  <Image
                    src={site.counsellorPhoto}
                    alt={`${site.counsellor} in Chhindwara`}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="mt-3 px-2 text-center">
                  <h3 className="font-heading font-extrabold text-ink text-base">
                    {site.counsellor}
                  </h3>
                  <p className="text-xs text-primary-700 font-semibold">
                    {site.counsellorRole}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Badge variant="primary">{copy.meetVivek.badge}</Badge>
              <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-extrabold text-ink">
                About {site.counsellor}
              </h2>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-bold text-primary-700">
                <span className="rounded-full bg-primary-100 px-3 py-1">
                  {copy.meetVivek.experience}
                </span>
                <span className="rounded-full bg-purple-100 px-3 py-1">
                  {copy.meetVivek.students}
                </span>
              </div>

              <div className="mt-5 space-y-3 text-sm sm:text-base leading-relaxed text-muted">
                {copy.meetVivek.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4">
                <Button
                  variant="outline"
                  size="md"
                  href="/about"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Read full bio & approach
                </Button>
                <Button
                  variant="wa"
                  size="md"
                  href={getGenericWhatsAppUrl()}
                  leftIcon={<MessageCircle className="h-4 w-4" />}
                >
                  Chat with Vivek
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          SECTION 7: HONEST BOX ("What DMIT can and cannot do")
         ========================================================================= */}
      <Section background="default" id="transparency">
        <Container>
          <HonestDmitBox />
        </Container>
      </Section>

      {/* =========================================================================
          SECTION 8: SERVICES GRID (5 Cards)
         ========================================================================= */}
      <Section background="tint">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="primary">Comprehensive Guidance</Badge>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-extrabold text-ink">
              Our Services
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted">
              All services combine fingerprint analysis with dedicated personal counselling.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <Card key={svc.slug} hoverEffect className="flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold text-ink">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-xs font-semibold text-primary-700">
                    For: {svc.forWhom}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted">
                    {svc.shortDescription}
                  </p>

                  <div className="mt-4 pt-3 border-t border-border/60">
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
                    <span>Learn more</span>
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

      {/* =========================================================================
          SECTION 9: TESTIMONIALS (Hidden if none)
         ========================================================================= */}
      <TestimonialsSection testimonials={[]} />

      {/* =========================================================================
          SECTION 10: FAQ (Top 5 + Link to all)
         ========================================================================= */}
      <Section background="default">
        <Container size="narrow">
          <div className="text-center">
            <Badge variant="primary">Common Questions</Badge>
            <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-extrabold text-ink">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-muted">
              Clear, transparent answers about DMIT analysis and counselling in Chhindwara.
            </p>
          </div>

          <div className="mt-8">
            <FaqAccordion items={topFaqs} />
          </div>

          <div className="mt-8 text-center">
            <Button
              variant="secondary"
              size="md"
              href="/faq"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              View all FAQs
            </Button>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          SECTION 11: FINAL CTA BAND + CONTACT SUMMARY + MAP BLOCK
         ========================================================================= */}
      <Section background="tint">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
            {/* Left: Enquiry Form */}
            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>

            {/* Right: Map Block & Contact Summary */}
            <div className="lg:col-span-5 space-y-6">
              <MapBlock />

              <div className="rounded-2xl border border-border/80 bg-surface p-6 shadow-sm">
                <h3 className="font-heading text-base font-bold text-ink">
                  Direct Counselling Enquiries
                </h3>
                <p className="mt-1 text-xs text-muted leading-relaxed">
                  Have an urgent question about stream selection or session slots? You are welcome to call or WhatsApp Vivek Koche directly.
                </p>

                <div className="mt-4 space-y-2.5 text-xs">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary-600 shrink-0" />
                    <a
                      href={`tel:${site.primaryPhone}`}
                      className="font-bold text-ink hover:text-primary-700"
                    >
                      {site.primaryPhone} (Primary)
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary-600 shrink-0" />
                    <a
                      href={`tel:${site.secondaryPhone}`}
                      className="font-medium text-muted hover:text-ink"
                    >
                      {site.secondaryPhone} (Alt)
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-wa shrink-0" />
                    <a
                      href={getGenericWhatsAppUrl()}
                      className="font-bold text-wa hover:underline"
                    >
                      WhatsApp: {site.whatsappDisplay}
                    </a>
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

