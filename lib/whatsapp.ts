import { site } from "@/content/site";

export interface EnquiryDetails {
  name: string;
  phone: string;
  audienceLabel: string;
  ageOrClass?: string;
  serviceTitle?: string;
  message?: string;
}

/**
 * Encodes text properly for WhatsApp click-to-chat links
 */
export function buildWhatsAppLink(text: string): string {
  const cleanNumber = site.whatsappNumber.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text.trim())}`;
}

/**
 * Generic WhatsApp inquiry link
 */
export function getGenericWhatsAppUrl(): string {
  const text =
    "Hello Vivek, I found the Inborn Talent website. I would like to know more about DMIT counselling and available slots.";
  return buildWhatsAppLink(text);
}

/**
 * Service-specific WhatsApp inquiry link
 */
export function getServiceWhatsAppUrl(serviceTitle: string): string {
  const text = `Hello Vivek, I am interested in ${serviceTitle}. Please share details and available slots.`;
  return buildWhatsAppLink(text);
}

/**
 * Enquiry form submission summary WhatsApp link
 */
export function getEnquiryWhatsAppUrl(details: EnquiryDetails): string {
  const parts: string[] = [
    `Hello Vivek, my name is ${details.name}.`,
    `This is for: ${details.audienceLabel}.`,
  ];

  if (details.ageOrClass && details.ageOrClass.trim().length > 0) {
    parts.push(`Class / Age: ${details.ageOrClass.trim()}.`);
  }

  if (details.serviceTitle && details.serviceTitle.trim().length > 0) {
    parts.push(`Service: ${details.serviceTitle.trim()}.`);
  }

  if (details.message && details.message.trim().length > 0) {
    parts.push(`Message: "${details.message.trim()}".`);
  }

  return buildWhatsAppLink(parts.join(" "));
}
