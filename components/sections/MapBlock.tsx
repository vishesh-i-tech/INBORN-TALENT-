import React from "react";
import { site } from "@/content/site";
import { MapPin, Navigation, ExternalLink, Clock } from "lucide-react";

interface MapBlockProps {
  className?: string;
}

export function MapBlock({ className = "" }: MapBlockProps) {
  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    site.mapsSearchQuery
  )}`;

  return (
    <div
      className={`rounded-2xl border border-border/80 bg-surface p-6 sm:p-8 shadow-sm ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100 text-primary-700 shrink-0">
          <MapPin className="h-5 w-5" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary-700">
            Centre Location
          </span>
          <h3 className="font-heading text-lg font-bold text-ink">
            Visit Us in Chhindwara
          </h3>
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-purple-50/40 border border-primary-600/10 p-4">
        <p className="text-sm font-semibold text-ink">
          {site.address.line}
        </p>
        <p className="text-xs text-muted mt-0.5">
          {site.address.city}, {site.address.state}
          {site.address.pin ? ` - ${site.address.pin}` : ""}
        </p>
        <div className="mt-3 flex items-center gap-2 text-xs text-muted">
          <Clock className="h-3.5 w-3.5 text-primary-600 shrink-0" />
          <span>{site.hours.display}</span>
        </div>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-muted">
        All fingerprint scans and personal discussions take place in person at our centre. Please schedule your time on WhatsApp before visiting.
      </p>

      {/* When mapsUrl is provided by client, we can embed it. Until then, use the official Google Maps search query link */}
      <div className="mt-5">
        <a
          href={site.mapsUrl || googleMapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-600/25 bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-primary-700 shadow-sm hover:bg-primary-50 hover:border-primary-600 transition-all w-full sm:w-auto"
        >
          <Navigation className="h-4 w-4 text-primary-600" />
          <span>Open in Google Maps</span>
          <ExternalLink className="h-3.5 w-3.5 text-muted ml-0.5" />
        </a>
      </div>
    </div>
  );
}

