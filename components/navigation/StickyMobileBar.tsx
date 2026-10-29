"use client";

import React from "react";
import { site } from "@/content/site";
import { getGenericWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { Phone, MessageCircle } from "lucide-react";

export function StickyMobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border/80 bg-surface/98 backdrop-blur-md px-3 py-2 shadow-lg md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2">
        {/* Call Button */}
        <a
          href={`tel:${site.primaryPhone}`}
          onClick={() =>
            trackEvent("call_click", {
              source: "sticky_mobile_bar",
              phone_number_type: "primary",
            })
          }
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-primary-600/20 bg-primary-50 px-3 py-2.5 text-sm font-bold text-primary-700 transition-colors active:scale-95"
          aria-label={`Call ${site.primaryPhone}`}
        >
          <Phone className="h-4 w-4 text-primary-600 shrink-0" />
          <span>Call Centre</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={getGenericWhatsAppUrl()}
          onClick={() =>
            trackEvent("whatsapp_click", { source: "sticky_mobile_bar" })
          }
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-wa px-3 py-2.5 text-sm font-bold text-white shadow-sm transition-colors active:scale-95 hover:bg-wa-hover"
          aria-label="Enquire on WhatsApp"
        >
          <MessageCircle className="h-4 w-4 shrink-0" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
