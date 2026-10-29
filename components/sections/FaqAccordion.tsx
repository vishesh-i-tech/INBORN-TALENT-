"use client";

import React, { useState } from "react";
import type { FAQItem } from "@/content/faqs";
import { ChevronDown } from "lucide-react";

interface FaqAccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
  className?: string;
}

export function FaqAccordion({
  items,
  allowMultiple = false,
  className = "",
}: FaqAccordionProps) {
  // If not multiple, stores active ID, else Set of active IDs
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? "border-primary-600/30 bg-primary-50/20 shadow-sm"
                : "border-border/80 bg-surface hover:border-primary-600/20"
            }`}
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-center justify-between p-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 rounded-2xl"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
            >
              <span className="font-heading font-bold text-sm sm:text-base text-ink pr-4">
                {item.question}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                  isOpen
                    ? "rotate-180 bg-primary-100 text-primary-700"
                    : "bg-slate-100 text-muted"
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-muted animate-in fade-in duration-200 border-t border-border/40"
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
