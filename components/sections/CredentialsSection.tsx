import React from "react";
import { site } from "@/content/site";
import { Award, CheckCircle } from "lucide-react";

export function CredentialsSection() {
  // MUST HIDE ITSELF UNTIL DATA EXISTS (PRD Section 1.1, F8)
  if (!site.credentials || site.credentials.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 rounded-2xl border border-primary-600/20 bg-primary-50/50 p-6">
      <div className="flex items-center gap-2 text-primary-700 font-bold text-sm uppercase tracking-wider">
        <Award className="h-4 w-4" />
        <span>Qualifications & Certifications</span>
      </div>
      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {site.credentials.map((cred, idx) => (
          <li key={idx} className="flex items-center gap-2 text-xs text-ink font-medium">
            <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>{cred}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
