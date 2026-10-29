// Client analytics utility for GA4
// STRICT PRIVACY: NEVER send names, phone numbers, or any PII in event payloads.

export type AnalyticsEvent =
  | {
      name: "whatsapp_click";
      params: {
        source: string; // e.g. "header", "hero", "sticky_mobile_bar", "service_page", "floating_button"
        service?: string;
      };
    }
  | {
      name: "call_click";
      params: {
        source: string; // e.g. "hero", "sticky_mobile_bar", "contact_page", "footer"
        phone_number_type: "primary" | "secondary";
      };
    }
  | {
      name: "enquiry_submit";
      params: {
        audience: string;
        service_slug?: string;
        has_message: boolean;
      };
    }
  | {
      name: "sample_report_view";
      params: {
        active_tab: "lobes" | "quotients" | "personality" | "summary";
      };
    };

declare global {
  interface Window {
    gtag?: (
      command: "event",
      action: string,
      params: Record<string, unknown>
    ) => void;
  }
}

export function trackEvent<E extends AnalyticsEvent>(
  name: E["name"],
  params: E["params"]
): void {
  if (typeof window === "undefined") return;

  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.log(`[Analytics Event] ${name}:`, params);
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", name, params as Record<string, unknown>);
  }
}

