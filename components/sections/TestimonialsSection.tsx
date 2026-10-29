import React from "react";
import { Container } from "@/components/ui/Container";
import { Quote } from "lucide-react";

export interface TestimonialItem {
  id: string;
  displayName: string;
  relation?: string;
  quote: string;
  isPublished: boolean;
  consentConfirmed: boolean;
}

interface TestimonialsSectionProps {
  testimonials?: TestimonialItem[];
}

export function TestimonialsSection({
  testimonials = [],
}: TestimonialsSectionProps) {
  // HIDE SECTION COMPLETELY IF NO CONSENTED TESTIMONIALS EXIST
  const publishedTestimonials = testimonials.filter(
    (t) => t.isPublished && t.consentConfirmed
  );

  if (publishedTestimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-primary-50/40 border-y border-border/60">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-700">
            Experiences
          </span>
          <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-extrabold text-ink">
            What Parents Say
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publishedTestimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-border/80 bg-surface p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <Quote className="h-6 w-6 text-primary-600/40 mb-3" />
                <p className="text-sm leading-relaxed text-ink/90 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-border/60">
                <p className="text-xs font-bold text-ink">{item.displayName}</p>
                {item.relation && (
                  <p className="text-[11px] text-muted">{item.relation}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
