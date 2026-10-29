"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/content/services";
import { submitEnquiry } from "@/app/actions/enquiry";
import { trackEvent } from "@/lib/analytics";
import { Button } from "@/components/ui/Button";
import {
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface EnquiryFormProps {
  defaultServiceSlug?: string;
  defaultAudience?: string;
  className?: string;
}

export function EnquiryForm({
  defaultServiceSlug = "",
  defaultAudience = "parent_of_child",
  className = "",
}: EnquiryFormProps) {
  const pathname = usePathname();
  const [startedAt, setStartedAt] = useState<number>(Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<
    string | null
  >(null);

  // Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [audience, setAudience] = useState(defaultAudience);
  const [ageOrClass, setAgeOrClass] = useState("");
  const [serviceSlug, setServiceSlug] = useState(defaultServiceSlug);
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState(""); // Honeypot

  useEffect(() => {
    setStartedAt(Date.now());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic client validation
    if (!name.trim() || name.trim().length < 2) {
      setErrorMessage("Please enter your name (at least 2 letters).");
      return;
    }

    const cleanDigits = phone.replace(/[^0-9]/g, "");
    if (cleanDigits.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!consent) {
      setErrorMessage("Please check the consent box to proceed.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await submitEnquiry({
        name: name.trim(),
        phone: phone.trim(),
        audience,
        ageOrClass: ageOrClass.trim() || undefined,
        serviceSlug: serviceSlug || "not-sure",
        message: message.trim() || undefined,
        consent: true,
        website,
        startedAt,
        sourcePage: pathname,
      });

      if (response.error && !response.whatsappUrl) {
        setErrorMessage(response.error);
        setIsSubmitting(false);
        return;
      }

      // Track conversion event (Never send personal data!)
      trackEvent("enquiry_submit", {
        audience,
        service_slug: serviceSlug || undefined,
        has_message: Boolean(message.trim()),
      });

      // Save WhatsApp URL for visible button if pop-up blocked
      setSubmittedWhatsAppUrl(response.whatsappUrl);

      // Attempt to open WhatsApp directly
      if (response.whatsappUrl) {
        window.open(response.whatsappUrl, "_blank", "noopener,noreferrer");
      }
    } catch {
      setErrorMessage("An unexpected error occurred. Please try contacting us directly on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // SUCCESS STATE
  if (submittedWhatsAppUrl) {
    return (
      <div className={`rounded-2xl border border-emerald-300 bg-emerald-50/70 p-6 md:p-8 text-center animate-in fade-in duration-300 ${className}`}>
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-wa">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-4 font-heading text-xl font-bold text-ink">
          Thank you, {name}!
        </h3>
        <p className="mt-2 text-sm text-muted max-w-md mx-auto">
          Your enquiry has been prepared. If WhatsApp did not open automatically, please click below to send your details to Vivek Koche directly.
        </p>

        <div className="mt-6">
          <Button
            variant="wa"
            size="lg"
            href={submittedWhatsAppUrl}
            isExternal
            leftIcon={<MessageCircle className="h-5 w-5" />}
            className="w-full sm:w-auto shadow-md"
          >
            Open WhatsApp to Send Enquiry
          </Button>
        </div>

        <button
          type="button"
          onClick={() => {
            setSubmittedWhatsAppUrl(null);
            setName("");
            setPhone("");
            setMessage("");
            setConsent(false);
            setStartedAt(Date.now());
          }}
          className="mt-5 text-xs font-semibold text-primary-700 hover:underline inline-block"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl border border-border/80 bg-surface p-6 sm:p-8 shadow-sm ${className}`}
      noValidate
    >
      <div className="mb-6">
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-ink">
          Send an Enquiry
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-muted">
          All fingerprint scans and counselling sessions are in-person at our Chhindwara centre.
        </p>
      </div>

      {/* Honeypot field for anti-bot protection */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website-field">Leave blank</label>
        <input
          id="website-field"
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {errorMessage && (
        <div
          role="alert"
          className="mb-5 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs text-red-800"
        >
          <AlertCircle className="h-4 w-4 shrink-0 text-red-600 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label
            htmlFor="enquiry-name"
            className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5"
          >
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="enquiry-name"
            type="text"
            required
            placeholder="e.g. Ramesh Patel"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-input border border-border bg-slate-50/50 px-4 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-primary-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-600/20"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="enquiry-phone"
            className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5"
          >
            WhatsApp / Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            id="enquiry-phone"
            type="tel"
            required
            placeholder="e.g. 9876543210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-input border border-border bg-slate-50/50 px-4 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-primary-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-600/20"
          />
        </div>

        {/* Audience */}
        <div>
          <label
            htmlFor="enquiry-audience"
            className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5"
          >
            Who is this enquiry for? <span className="text-red-500">*</span>
          </label>
          <select
            id="enquiry-audience"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            className="w-full rounded-input border border-border bg-slate-50/50 px-4 py-2.5 text-sm text-ink focus:border-primary-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-600/20"
          >
            <option value="parent_of_child">Parent of a child or teenager</option>
            <option value="student_class_8_10">Student in Class 8, 9, or 10</option>
            <option value="student_class_11_12">Student in Class 11, 12, or after 12th</option>
            <option value="college_student">College student</option>
            <option value="working_professional">Working professional</option>
            <option value="school_or_college">School / College representative</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Age / Class */}
        <div>
          <label
            htmlFor="enquiry-class"
            className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5"
          >
            Current Class or Age <span className="text-muted font-normal lowercase">(optional)</span>
          </label>
          <input
            id="enquiry-class"
            type="text"
            placeholder="e.g. Class 10 (CBSE) or 15 years"
            value={ageOrClass}
            onChange={(e) => setAgeOrClass(e.target.value)}
            className="w-full rounded-input border border-border bg-slate-50/50 px-4 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-primary-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-600/20"
          />
        </div>

        {/* Service */}
        <div>
          <label
            htmlFor="enquiry-service"
            className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5"
          >
            Service Interested In
          </label>
          <select
            id="enquiry-service"
            value={serviceSlug}
            onChange={(e) => setServiceSlug(e.target.value)}
            className="w-full rounded-input border border-border bg-slate-50/50 px-4 py-2.5 text-sm text-ink focus:border-primary-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-600/20"
          >
            <option value="">Not sure yet / General Guidance</option>
            {services.map((svc) => (
              <option key={svc.slug} value={svc.slug}>
                {svc.title}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="enquiry-message"
            className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5"
          >
            Any specific question or goals? <span className="text-muted font-normal lowercase">(optional)</span>
          </label>
          <textarea
            id="enquiry-message"
            rows={3}
            placeholder="Tell us what you would like to explore or ask..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-input border border-border bg-slate-50/50 px-4 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-primary-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-600/20 resize-none"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="h-4 w-4 rounded border-border text-primary-600 focus:ring-primary-600 mt-1 cursor-pointer"
            />
            <span className="text-xs text-muted leading-relaxed">
              I agree to be contacted via WhatsApp/phone regarding this enquiry. Fingerprints are scanned in-person only. Read our{" "}
              <Link href="/privacy-policy" className="text-primary-700 underline hover:text-ink">
                Privacy Policy
              </Link>.
            </span>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <Button
          type="submit"
          variant="wa"
          size="lg"
          disabled={isSubmitting}
          className="w-full gap-2 shadow-md hover:shadow-lg"
          leftIcon={
            isSubmitting ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <MessageCircle className="h-5 w-5" />
            )
          }
          rightIcon={!isSubmitting && <ArrowRight className="h-4 w-4" />}
        >
          {isSubmitting ? "Connecting to WhatsApp..." : "Send Enquiry on WhatsApp"}
        </Button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-muted">
        <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
        <span>No spam. No fees without prior discussion. In-person counselling.</span>
      </div>
    </form>
  );
}

