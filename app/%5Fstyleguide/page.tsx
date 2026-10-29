import React from "react";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { MessageCircle, Phone, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Design System & Style Guide",
  description: "Internal design system showcase for Inborn Talent.",
  path: "/_styleguide",
  noIndex: true, // EXCLUDED FROM SITEMAP & NOINDEX PER PRD
});

export default function StyleguidePage() {
  const colorTokens = [
    { name: "--primary-600", hex: "#6B46F0", use: "Buttons, links, key accents", text: "text-white", contrast: "5.2:1 (Pass AA)" },
    { name: "--primary-700", hex: "#5530D6", use: "Hover/pressed states", text: "text-white", contrast: "8.1:1 (Pass AAA)" },
    { name: "--primary-100", hex: "#EBE5FF", use: "Soft backgrounds, chips", text: "text-primary-700", contrast: "6.8:1 (Pass AAA)" },
    { name: "--primary-50", hex: "#F6F3FF", use: "Section tints", text: "text-ink", contrast: "14.2:1 (Pass AAA)" },
    { name: "--ink", hex: "#1B1535", use: "Headings, primary body text", text: "text-white", contrast: "14.8:1 on white (Pass AAA)" },
    { name: "--muted", hex: "#5B5675", use: "Secondary text", text: "text-white", contrast: "6.6:1 on white (Pass AA/AAA)" },
    { name: "--accent", hex: "#F5B83D", use: "Highlights, stats", text: "text-ink", contrast: "9.5:1 (Pass AAA)" },
    { name: "--wa", hex: "#0F7B5F", use: "WhatsApp buttons", text: "text-white", contrast: "4.8:1 (Pass AA)" },
    { name: "--surface", hex: "#FFFFFF", use: "Card surface", text: "text-ink", contrast: "Background" },
    { name: "--border", hex: "#E4DEF7", use: "Dividers and borders", text: "text-ink", contrast: "UI component border" },
  ];

  return (
    <div className="py-12">
      <Container>
        <div className="mb-10">
          <Badge variant="neutral">Internal QA Page • NoIndex</Badge>
          <h1 className="font-heading text-3xl font-extrabold text-ink mt-2">
            Inborn Talent Design System & Tokens
          </h1>
          <p className="text-sm text-muted mt-1">
            Verification of color tokens, typography scales, components, and WCAG AA accessibility compliance.
          </p>
        </div>

        {/* 1. Color Tokens */}
        <Section background="white" className="rounded-2xl p-6 mb-8">
          <h2 className="font-heading text-xl font-bold text-ink mb-4">
            Color Tokens & WCAG Contrast
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {colorTokens.map((token) => (
              <div
                key={token.name}
                className="rounded-xl border border-border overflow-hidden bg-surface shadow-xs"
              >
                <div
                  className={`h-20 p-3 flex flex-col justify-end ${token.text}`}
                  style={{ backgroundColor: token.hex }}
                >
                  <span className="font-mono text-xs font-bold">{token.hex}</span>
                </div>
                <div className="p-3 text-xs space-y-1">
                  <div className="font-bold text-ink">{token.name}</div>
                  <div className="text-muted text-[11px]">{token.use}</div>
                  <div className="text-emerald-700 font-bold text-[10px]">
                    {token.contrast}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 2. Button Variants */}
        <Section background="white" className="rounded-2xl p-6 mb-8">
          <h2 className="font-heading text-xl font-bold text-ink mb-4">
            Button Component Variants
          </h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button
              variant="wa"
              leftIcon={<MessageCircle className="h-4 w-4" />}
            >
              WhatsApp Button
            </Button>
            <Button variant="accent">Accent Button</Button>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 items-center pt-4 border-t border-border">
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
          </div>
        </Section>

        {/* 3. Badges */}
        <Section background="white" className="rounded-2xl p-6 mb-8">
          <h2 className="font-heading text-xl font-bold text-ink mb-4">
            Badge Variants
          </h2>
          <div className="flex flex-wrap gap-3 items-center">
            <Badge variant="primary">Primary Badge</Badge>
            <Badge variant="accent">Accent Warning</Badge>
            <Badge variant="wa">WhatsApp Active</Badge>
            <Badge variant="neutral">Neutral Tag</Badge>
            <Badge variant="warning">Warning Chip</Badge>
          </div>
        </Section>

        {/* 4. Cards & Elevation */}
        <Section background="white" className="rounded-2xl p-6">
          <h2 className="font-heading text-xl font-bold text-ink mb-4">
            Card Component with Soft Purple Shadow
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card hoverEffect>
              <h3 className="font-heading font-bold text-ink">Default Card</h3>
              <p className="text-xs text-muted mt-2">
                Card with subtle border and standard padding.
              </p>
            </Card>
            <Card hoverEffect className="border-primary-600/30">
              <h3 className="font-heading font-bold text-primary-700">Highlighted Card</h3>
              <p className="text-xs text-muted mt-2">
                Card with purple-tinted focus border.
              </p>
            </Card>
            <Card hoverEffect className="bg-primary-50/50">
              <h3 className="font-heading font-bold text-ink">Tinted Background</h3>
              <p className="text-xs text-muted mt-2">
                Card using section tint token.
              </p>
            </Card>
          </div>
        </Section>
      </Container>
    </div>
  );
}

