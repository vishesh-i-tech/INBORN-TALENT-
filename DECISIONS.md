# DECISIONS.md - Inborn Talent

This document records architectural, design, and implementation decisions made during the build.

## Stack & Architecture
- **Framework**: Next.js 15+ App Router with TypeScript (strict).
- **Styling**: Tailwind CSS with custom CSS variables for brand colors (derived from Vivek's photo with purple background).
- **Icons**: `lucide-react`.
- **Motion**: `framer-motion` with `prefers-reduced-motion` safety.
- **Forms**: `react-hook-form` + `zod` schema validation.
- **Content Layer**: Pure TypeScript data modules in `/content` (`site.ts`, `services.ts`, `faqs.ts`, `copy.ts`, `sampleReport.ts`). All user-facing strings are decoupled from JSX for maintainability and future Hindi localization.
- **Logo**: Modern stylized vector SVG wordmark (`/public/logo.svg`) with biometric concentric arc motif and high-contrast typography ("Inborn Talent" by Vivek Koche).
- **Sample Report**: Pure native SVG & CSS charts with 0 external chart library weight, adhering to 100% fictional data rules and clear disclaimers.
- **Privacy & Safety**: Client honeypot & 3-second minimum fill time guard against bot spam. Graceful fallback directly opens WhatsApp with full prefilled enquiry details even if the database is offline or unconfigured.
- **Claims Policy**: Zero tolerance for banned terms ("accurate", "scientifically proven", "psychometric test", "guarantee", "clinical", "diagnosis", etc.). All phrasing is supportive, honest, and indicative.

