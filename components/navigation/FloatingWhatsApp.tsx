"use client";

import React from "react";
import { getGenericWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Floating Contact"
      className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 md:flex"
    >
      <a
        href={getGenericWhatsAppUrl()}
        onClick={() =>
          trackEvent("whatsapp_click", { source: "floating_button" })
        }
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp with Vivek Koche"
        className="group relative flex items-center gap-2.5 rounded-full bg-wa px-4 py-3 text-white shadow-lg transition-all duration-300 hover:bg-wa-hover hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wa focus-visible:ring-offset-2"
      >
        {/* Pulsing subtle ring */}
        <span
          className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 animate-pulse pointer-events-none"
          aria-hidden="true"
        />
        <MessageCircle className="relative h-5 w-5 shrink-0" />
        <span className="relative text-sm font-bold tracking-wide">
          Enquire on WhatsApp
        </span>
      </a>
    </aside>
  );
}
