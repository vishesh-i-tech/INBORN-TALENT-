"use client";

import React, { useState } from "react";
import { sampleReportData } from "@/content/sampleReport";
import { trackEvent } from "@/lib/analytics";
import { Badge } from "@/components/ui/Badge";
import {
  Brain,
  BarChart3,
  Compass,
  FileSpreadsheet,
  Info,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function SampleReportViewer() {
  const [activeTab, setActiveTab] = useState<
    "lobes" | "quotients" | "personality" | "summary"
  >("lobes");

  const handleTabChange = (
    tab: "lobes" | "quotients" | "personality" | "summary"
  ) => {
    setActiveTab(tab);
    trackEvent("sample_report_view", { active_tab: tab });
  };

  return (
    <div className="rounded-2xl border border-border bg-surface shadow-purple-card overflow-hidden">
      {/* Top Header with mandatory Sample Badge */}
      <div className="border-b border-border/80 bg-gradient-to-r from-primary-50 via-purple-50 to-amber-50/40 p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-lg text-ink">
              {sampleReportData.fictionalProfileName}
            </span>
            <span className="text-xs text-muted">
              ({sampleReportData.fictionalAge})
            </span>
          </div>
          <p className="text-xs text-muted mt-0.5">
            Illustrative preview of the multi-dimensional analysis discussed during counselling.
          </p>
        </div>

        {/* REQUIRED NON-NEGOTIABLE BADGE */}
        <Badge variant="accent" className="self-start sm:self-auto py-1.5 px-3">
          <Info className="h-3.5 w-3.5 shrink-0" />
          <span>{sampleReportData.badgeNotice}</span>
        </Badge>
      </div>

      {/* View Tabs */}
      <div className="border-b border-border/80 bg-surface px-4 sm:px-6">
        <div className="flex space-x-1 sm:space-x-4 overflow-x-auto py-2 no-scrollbar" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === "lobes"}
            onClick={() => handleTabChange("lobes")}
            className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-bold transition-all ${
              activeTab === "lobes"
                ? "bg-primary-600 text-white shadow-sm"
                : "text-muted hover:bg-primary-50 hover:text-ink"
            }`}
          >
            <Brain className="h-4 w-4 shrink-0" />
            <span>1. Brain Lobes Map</span>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === "quotients"}
            onClick={() => handleTabChange("quotients")}
            className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-bold transition-all ${
              activeTab === "quotients"
                ? "bg-primary-600 text-white shadow-sm"
                : "text-muted hover:bg-primary-50 hover:text-ink"
            }`}
          >
            <BarChart3 className="h-4 w-4 shrink-0" />
            <span>2. Quotients (EQ/IQ/AQ/CQ)</span>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === "personality"}
            onClick={() => handleTabChange("personality")}
            className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-bold transition-all ${
              activeTab === "personality"
                ? "bg-primary-600 text-white shadow-sm"
                : "text-muted hover:bg-primary-50 hover:text-ink"
            }`}
          >
            <Compass className="h-4 w-4 shrink-0" />
            <span>3. Personality Style</span>
          </button>

          <button
            role="tab"
            aria-selected={activeTab === "summary"}
            onClick={() => handleTabChange("summary")}
            className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-bold transition-all ${
              activeTab === "summary"
                ? "bg-primary-600 text-white shadow-sm"
                : "text-muted hover:bg-primary-50 hover:text-ink"
            }`}
          >
            <FileSpreadsheet className="h-4 w-4 shrink-0" />
            <span>4. VAK & 8 Intelligences</span>
          </button>
        </div>
      </div>

      {/* Tab Panels */}
      <div className="p-4 sm:p-6 md:p-8">
        {/* TAB 1: Brain Lobes Map */}
        {activeTab === "lobes" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Hemispheric summary bar */}
            <div className="rounded-xl bg-purple-50/60 border border-primary-600/15 p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-700">
                  Left vs. Right Hemisphere Balance
                </span>
                <span className="text-xs text-muted">
                  Total Left ({sampleReportData.overallHemisphere.leftBrainPercent}%) + Right ({sampleReportData.overallHemisphere.rightBrainPercent}%) = 100%
                </span>
              </div>

              {/* Progress bar representing left/right split */}
              <div className="mt-3 flex h-4 w-full overflow-hidden rounded-full bg-border/60">
                <div
                  style={{ width: `${sampleReportData.overallHemisphere.leftBrainPercent}%` }}
                  className="bg-primary-600 flex items-center justify-center text-[10px] font-bold text-white"
                  title="Left Hemisphere"
                >
                  Left {sampleReportData.overallHemisphere.leftBrainPercent}%
                </div>
                <div
                  style={{ width: `${sampleReportData.overallHemisphere.rightBrainPercent}%` }}
                  className="bg-amber-400 flex items-center justify-center text-[10px] font-bold text-ink"
                  title="Right Hemisphere"
                >
                  Right {sampleReportData.overallHemisphere.rightBrainPercent}%
                </div>
              </div>
              <p className="mt-2.5 text-xs text-muted leading-relaxed">
                {sampleReportData.overallHemisphere.description}
              </p>
            </div>

            {/* 5 Lobes Breakdown Table / Cards */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-muted">
                Five Lobes Distribution (Sum = 100%)
              </div>

              <div className="grid grid-cols-1 gap-3">
                {sampleReportData.lobes.map((lobe) => (
                  <div
                    key={lobe.id}
                    className="rounded-xl border border-border/80 bg-surface p-4 hover:border-primary-600/30 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <span className="font-heading font-bold text-sm text-ink">
                        {lobe.name}
                      </span>
                      <span className="text-xs font-extrabold text-primary-700 bg-primary-100 px-2.5 py-0.5 rounded-full self-start sm:self-auto">
                        Share: {lobe.totalPercent}%
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted mb-3">
                      <div className="bg-primary-50/50 p-2 rounded-lg border border-primary-600/10">
                        <span className="font-bold text-primary-700">Left ({lobe.leftPercent}%): </span>
                        {lobe.leftFunction}
                      </div>
                      <div className="bg-amber-50/50 p-2 rounded-lg border border-amber-300/30">
                        <span className="font-bold text-amber-900">Right ({lobe.rightPercent}%): </span>
                        {lobe.rightFunction}
                      </div>
                    </div>

                    {/* Progress track */}
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden flex">
                      <div
                        style={{ width: `${lobe.leftPercent * 4}%` }}
                        className="bg-primary-600"
                      />
                      <div
                        style={{ width: `${lobe.rightPercent * 4}%` }}
                        className="bg-amber-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Quotients */}
        {activeTab === "quotients" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-heading font-bold text-base text-ink">
                  Quotient Distribution
                </h3>
                <p className="text-xs text-muted mt-0.5">
                  Relative breakdown across Emotional, Intelligence, Adversity, and Creativity Quotients (Sum = 100%).
                </p>
              </div>
            </div>

            {/* Stacked visualization */}
            <div className="rounded-xl bg-slate-50 p-4 border border-border/80">
              <div className="h-6 w-full rounded-full overflow-hidden flex shadow-inner">
                {sampleReportData.quotients.map((q) => (
                  <div
                    key={q.code}
                    style={{ width: `${q.percent}%`, backgroundColor: q.color }}
                    className="flex items-center justify-center text-[11px] font-bold text-white transition-all hover:opacity-90"
                    title={`${q.name}: ${q.percent}%`}
                  >
                    {q.code} {q.percent}%
                  </div>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs">
                {sampleReportData.quotients.map((q) => (
                  <div key={q.code} className="flex items-center gap-1.5">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: q.color }}
                    />
                    <span className="font-semibold text-ink">{q.name} ({q.percent}%)</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quotient Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sampleReportData.quotients.map((q) => (
                <div
                  key={q.code}
                  className="rounded-xl border border-border/80 bg-surface p-4 flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span
                        className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded text-white inline-block mb-1"
                        style={{ backgroundColor: q.color }}
                      >
                        {q.code}
                      </span>
                      <h4 className="font-heading font-bold text-sm text-ink">
                        {q.name}
                      </h4>
                    </div>
                    <span className="text-xl font-extrabold text-ink">
                      {q.percent}%
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-muted leading-relaxed">
                    {q.description}
                  </p>
                  <div className="mt-3 w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${q.percent * 2.5}%`, backgroundColor: q.color }}
                      className="h-full rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Personality Type */}
        {activeTab === "personality" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h3 className="font-heading font-bold text-base text-ink">
                Behavioral Tendencies (Eagle, Peacock, Owl, Dove)
              </h3>
              <p className="text-xs text-muted mt-0.5">
                Relative behavioral inclinations (Sum = 100%). In this fictional profile, Peacock is highlighted.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sampleReportData.personalities.map((item) => (
                <div
                  key={item.name}
                  className={`rounded-2xl border p-5 transition-all ${
                    item.isPrimary
                      ? "border-primary-600 bg-primary-50/50 shadow-md ring-2 ring-primary-600/20"
                      : "border-border/80 bg-surface"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-heading font-extrabold text-base text-ink">
                        {item.name}
                      </span>
                      {item.isPrimary && (
                        <span className="rounded-full bg-primary-600 px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1">
                          <Sparkles className="h-3 w-3" />
                          Primary
                        </span>
                      )}
                    </div>
                    <span className="font-heading font-black text-lg text-primary-700">
                      {item.percent}%
                    </span>
                  </div>

                  <div className="mt-1 text-xs font-semibold text-muted">
                    {item.trait}
                  </div>

                  <p className="mt-3 text-xs text-ink/80 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="mt-3 space-y-1.5 border-t border-border/60 pt-3 text-xs text-muted">
                    {item.characteristics.map((char, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary-600 shrink-0 mt-0.5" />
                        <span>{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: Summary: VAK & Multiple Intelligences */}
        {activeTab === "summary" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* VAK Learning Style Split */}
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-bold text-base text-ink">
                    VAK Learning Style Split
                  </h3>
                  <p className="text-xs text-muted">
                    Visual + Auditory + Kinesthetic (Sum = 100%)
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                {sampleReportData.vakSplit.map((vak) => (
                  <div
                    key={vak.type}
                    className="rounded-xl border border-border/80 bg-surface p-4 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-heading font-bold text-sm text-ink">
                          {vak.type} Learner
                        </span>
                        <span className="text-base font-extrabold text-primary-700">
                          {vak.percent}%
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-muted leading-relaxed">
                        {vak.description}
                      </p>
                    </div>

                    <div className="mt-4 border-t border-border/60 pt-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary-700">
                        Suggested Study Habit:
                      </span>
                      <ul className="mt-1 space-y-1 text-xs text-muted">
                        {vak.learningTips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-primary-600 font-bold">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 8 Multiple Intelligences */}
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-bold text-base text-ink">
                    Howard Gardner&apos;s 8 Intelligences
                  </h3>
                  <p className="text-xs text-muted">
                    Indicative distribution across cognitive domains (Sum = 100%).
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sampleReportData.intelligences.map((mi) => (
                  <div
                    key={mi.name}
                    className="rounded-xl border border-border/80 bg-surface p-3.5 hover:border-primary-600/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-bold text-xs sm:text-sm text-ink">
                        {mi.name}
                      </span>
                      <span className="text-xs font-extrabold text-primary-700 bg-primary-50 px-2 py-0.5 rounded">
                        {mi.percent}%
                      </span>
                    </div>

                    {/* Pure CSS bar */}
                    <div className="mt-2 w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${mi.percent * 5}%` }}
                        className="bg-primary-600 h-full rounded-full"
                      />
                    </div>

                    <p className="mt-2 text-[11px] text-muted">
                      {mi.summary}
                    </p>
                    <div className="mt-1.5 text-[11px] text-primary-700 font-medium truncate">
                      <span className="font-semibold text-ink">Fields: </span>
                      {mi.idealEnvironments}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Report Footer Note */}
      <div className="border-t border-border/80 bg-slate-50/80 px-6 py-4 text-center text-xs text-muted">
        This sample uses entirely fictional data for demonstration purposes. Genuine reports are interpreted individually with parents and students during our in-person counselling sessions in Chhindwara.
      </div>
    </div>
  );
}
