import React from "react";
import { clsx } from "clsx";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  background?: "default" | "tint" | "white" | "subtle";
  id?: string;
}

export function Section({
  children,
  className,
  background = "default",
  id,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "relative py-14 sm:py-16 md:py-20",
        background === "default" && "bg-transparent",
        background === "tint" && "bg-primary-50/60 border-y border-border/50",
        background === "white" && "bg-surface border-y border-border/40 shadow-sm",
        background === "subtle" && "bg-purple-50/30",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
