import React from "react";
import { copy } from "@/content/copy";
import { Info, CheckCircle2, XCircle, HeartHandshake } from "lucide-react";

interface HonestDmitBoxProps {
  className?: string;
  showClientNotice?: boolean;
}

export function HonestDmitBox({
  className = "",
  showClientNotice = true,
}: HonestDmitBoxProps) {
  const { honestBox } = copy;

  return (
    <div
      className={`rounded-2xl border border-amber-300/80 bg-gradient-to-br from-amber-50/90 via-amber-50/40 to-orange-50/30 p-6 md:p-8 shadow-sm ${className}`}
      aria-labelledby="honest-box-title"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-900 shrink-0">
          <Info className="h-5 w-5" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900">
            {honestBox.badge}
          </span>
          <h2
            id="honest-box-title"
            className="font-heading text-xl md:text-2xl font-extrabold text-ink"
          >
            {honestBox.title}
          </h2>
        </div>
      </div>

      <p className="mt-4 text-sm md:text-base leading-relaxed text-ink/90 font-medium">
        {honestBox.content}
      </p>

      {showClientNotice && (
        <p className="mt-2 text-xs italic text-amber-900/80">
          {honestBox.clientApprovalNotice}
        </p>
      )}

      {/* Structured Comparison Grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 pt-4 border-t border-amber-200/80">
        <div className="rounded-xl bg-surface/90 border border-amber-200/60 p-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            <span>What it is</span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted">
            {honestBox.bulletPoints[0].text}
          </p>
        </div>

        <div className="rounded-xl bg-surface/90 border border-amber-200/60 p-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-800">
            <XCircle className="h-4 w-4 text-red-500" />
            <span>What it is NOT</span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted">
            {honestBox.bulletPoints[1].text}
          </p>
        </div>

        <div className="rounded-xl bg-surface/90 border border-amber-200/60 p-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary-800">
            <HeartHandshake className="h-4 w-4 text-primary-600" />
            <span>How we use it</span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-muted">
            {honestBox.bulletPoints[2].text}
          </p>
        </div>
      </div>
    </div>
  );
}

