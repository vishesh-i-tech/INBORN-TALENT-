"use server";

import { z } from "zod";
import { getSupabaseAdmin } from "@/lib/supabaseServer";
import { getEnquiryWhatsAppUrl } from "@/lib/whatsapp";
import { services } from "@/content/services";

const AUDIENCE_LABELS: Record<string, string> = {
  parent_of_child: "Parent of a child or teen",
  student_class_8_10: "Student (Class 8–10)",
  student_class_11_12: "Student (Class 11–12 or after 12th)",
  college_student: "College Student",
  working_professional: "Working Professional",
  school_or_college: "School or College Representative",
  other: "Other",
};

const EnquiryInputSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must not exceed 80 characters"),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\- ]{10,15}$/, "Please enter a valid phone number (10-15 digits)"),
  audience: z.enum([
    "parent_of_child",
    "student_class_8_10",
    "student_class_11_12",
    "college_student",
    "working_professional",
    "school_or_college",
    "other",
  ]),
  ageOrClass: z.string().trim().max(40).optional(),
  serviceSlug: z.string().trim().optional(),
  message: z.string().trim().max(1000).optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must provide consent to be contacted" }),
  }),
  website: z.string().optional(), // Honeypot field
  startedAt: z.number(), // Milliseconds timestamp
  sourcePage: z.string().optional(),
});

export interface EnquiryActionResult {
  ok: boolean;
  whatsappUrl: string;
  error?: string;
}

export async function submitEnquiry(
  rawInput: unknown
): Promise<EnquiryActionResult> {
  // 1. Zod validation
  const parseResult = EnquiryInputSchema.safeParse(rawInput);
  if (!parseResult.success) {
    const firstError = parseResult.error.errors[0]?.message || "Invalid input";
    return {
      ok: false,
      whatsappUrl: "",
      error: firstError,
    };
  }

  const data = parseResult.data;

  // 2. Anti-spam checks
  // Honeypot check: website must be empty
  if (data.website && data.website.trim().length > 0) {
    return {
      ok: false,
      whatsappUrl: "",
      error: "Spam check failed.",
    };
  }

  // Minimum fill time check: at least 3000ms
  const now = Date.now();
  if (now - data.startedAt < 3000) {
    return {
      ok: false,
      whatsappUrl: "",
      error: "Please take a moment before submitting.",
    };
  }

  // Normalise phone number
  let normalisedPhone = data.phone.replace(/[^0-9+]/g, "");
  if (!normalisedPhone.startsWith("+") && normalisedPhone.length === 10) {
    normalisedPhone = `+91${normalisedPhone}`;
  }

  // Resolve service title and audience label
  const matchedService = services.find((s) => s.slug === data.serviceSlug);
  const serviceTitle = matchedService ? matchedService.title : data.serviceSlug === "not-sure" ? "Not sure / General Guidance" : undefined;
  const audienceLabel = AUDIENCE_LABELS[data.audience] || data.audience;

  // Build the fallback WhatsApp URL right away (Lead is NEVER blocked)
  const whatsappUrl = getEnquiryWhatsAppUrl({
    name: data.name,
    phone: normalisedPhone,
    audienceLabel,
    ageOrClass: data.ageOrClass,
    serviceTitle,
    message: data.message,
  });

  // 3. Database insertion
  let dbSaved = false;
  try {
    const supabase = getSupabaseAdmin();
    if (supabase) {
      const { error: insertError } = await supabase.from("enquiries").insert({
        name: data.name,
        phone: normalisedPhone,
        audience: data.audience,
        age_or_class: data.ageOrClass || null,
        service_slug: data.serviceSlug || "not-sure",
        message: data.message || null,
        source_page: data.sourcePage || "/",
        consent: true,
        status: "new",
      });

      if (insertError) {
        // eslint-disable-next-line no-console
        console.error("Supabase insert error:", insertError.message);
      } else {
        dbSaved = true;
      }
    } else {
      // Supabase credentials not yet provided by client
      // eslint-disable-next-line no-console
      console.warn("Supabase credentials not configured. Lead routed directly to WhatsApp.");
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Enquiry database save exception:", err);
  }

  // 4. Optional owner notification email via Resend (P1)
  const resendApiKey = process.env.RESEND_API_KEY;
  const ownerEmail = process.env.OWNER_NOTIFY_EMAIL || "kochevivek@gmail.com";
  if (resendApiKey && dbSaved) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Inborn Talent Website <onboarding@resend.dev>",
          to: [ownerEmail],
          subject: `New Lead: ${data.name} (${audienceLabel})`,
          text: `Name: ${data.name}\nPhone: ${normalisedPhone}\nAudience: ${audienceLabel}\nAge/Class: ${data.ageOrClass || "N/A"}\nService: ${serviceTitle || "N/A"}\nMessage: ${data.message || "N/A"}\nSource: ${data.sourcePage || "/"}`,
        }),
      });
    } catch (emailErr) {
      // eslint-disable-next-line no-console
      console.error("Resend email notification failed:", emailErr);
    }
  }

  return {
    ok: dbSaved,
    whatsappUrl,
  };
}
