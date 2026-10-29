# Inborn Talent - Marketing Website

Official web platform for **Inborn Talent by Vivek Koche** (In-Person DMIT Fingerprint Analysis & Career Guidance in Chhindwara, Madhya Pradesh).

Built with **Next.js 15+ (App Router)**, **TypeScript (Strict)**, **Tailwind CSS**, and **Supabase**.

---

## 🚀 Quick Start

### 1. Installation
```bash
npm install
```

### 2. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## ⚙️ Environment Variables (`.env.local`)

Copy `.env.example` to `.env.local` and fill in your keys:

```bash
NEXT_PUBLIC_SITE_URL=https://inborntalent.in # Client domain
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX              # Google Analytics 4 Measurement ID
SUPABASE_URL=https://xyz.supabase.co       # Supabase project URL
SUPABASE_SERVICE_ROLE_KEY=ey...             # Supabase Service Role Key (Server-only)
RESEND_API_KEY=re_...                       # (Optional) Resend email notifications
OWNER_NOTIFY_EMAIL=kochevivek@gmail.com     # Owner email for lead alerts
```

---

## ✏️ How to Edit Content & Business Facts

All business facts, copy, services, and FAQs live in the typed content layer in `/content/`:

| File | What to update |
| :--- | :--- |
| `content/site.ts` | Phone numbers, address, PIN code, hours, Google Maps URL, counsellor credentials |
| `content/services.ts` | 5 services: descriptions, what you get, steps, fees notices, FAQs |
| `content/faqs.ts` | FAQ questions and answers categorized by topic |
| `content/copy.ts` | Hero text, section headlines, "Meet Vivek" bio, disclaimers, honest box text |
| `content/sampleReport.ts` | Fictional sample report data (brain lobes, quotients, personality types, VAK) |

> **Note on `TODO_CLIENT` fields**: Sections tied to missing data (such as Credentials, Testimonials, and Google Maps embed) automatically hide themselves without leaving empty spaces until values are added in `content/site.ts`.

---

## 🗄️ Database & Lead Management (Supabase)

### 1. Database Schema
Execute `supabase/schema.sql` in your Supabase SQL Editor. This sets up:
- `enquiries` table with anti-spam honeypot tracking and status lifecycle (`new` → `contacted` → `booked` → `completed` → `closed`).
- `testimonials` table with strict `consent_confirmed = true` policy.
- `posts` table (prepared for P2 blog).

### 2. Viewing Incoming Enquiries
When a visitor fills out the website enquiry form:
1. It validates and saves to the `public.enquiries` table in Supabase.
2. It automatically redirects the user to WhatsApp with a prefilled message summarizing their details.
3. If the database is ever offline, the lead is **never blocked**—WhatsApp still opens immediately.
4. The owner can review and update lead status directly inside the Supabase Table Editor.

### 3. How to Add a Testimonial (Strict Consent Rule)
To protect client and child privacy, testimonials **never** display real child names or sensitive data.
Insert consented feedback in the `testimonials` table:
```sql
INSERT INTO public.testimonials (display_name, relation, quote, consent_confirmed, is_published, sort_order)
VALUES (
  'Parent of a Class 10 student',
  'CBSE Board, Chhindwara',
  'The session helped us understand our son\'s visual learning style and reduced our arguments over study hours.',
  true,
  true,
  1
);
```
*(The testimonials section remains hidden until at least 1 consented testimonial is published).*

---

## 🛡️ Non-Negotiable Claims & Brand Policy
- **Zero Hype / Banned Claims**: The site strictly avoids: `"accurate"`, `"95% accurate"`, `"scientifically proven"`, `"guaranteed"`, `"clinical"`, `"diagnosis"`, `"psychometric test"`, or third-party vendor names.
- **Honest Language**: Uses supportive, indicative language: *"helps you understand"*, *"indicative"*, *"a starting point for conversation"*.
- **In-Person Only**: Fingerprints are scanned in person at Sarra, Chhindwara. The site does not claim online fingerprint testing.
- **Sample Report**: Uses 100% fictional illustrative data with a visible badge.

---

## 📋 Client Post-Launch Checklist

1. [ ] **Google Business Profile**: Create a Google Business Profile for *Inborn Talent by Vivek Koche* at Sarra, Ward No. 35, Chhindwara. Once live, paste the Google Maps share link into `mapsUrl` in `content/site.ts`.
2. [ ] **Google Search Console**: Add your domain and submit `https://yourdomain.com/sitemap.xml`.
3. [ ] **Google Analytics 4**: Create a GA4 property and paste the Measurement ID into `.env.local` as `NEXT_PUBLIC_GA_ID`.
4. [ ] **Address PIN Code**: Confirm the postal PIN code for Sarra, Ward No. 35 and add it to `content/site.ts`.
5. [ ] **Sunday Hours**: Confirm whether the centre operates on Sundays and set `sundayConfirmed: true` in `content/site.ts`.
6. [ ] **Qualifications**: Provide counsellor certifications to enable the Qualifications block in the About page.
7. [ ] **Session Duration**: Confirm the typical duration of a DMIT analysis and counselling session.
8. [ ] **Testimonials**: Collect written consent from parents before publishing testimonials in Supabase.

