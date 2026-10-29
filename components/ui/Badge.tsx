import React from "react";
import { clsx } from "clsx";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "wa" | "neutral" | "warning";
  className?: string;
}

export function Badge({
  children,
  variant = "primary",
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-colors",
        variant === "primary" &&
          "bg-primary-100 text-primary-700 border border-primary-600/10",
        variant === "accent" &&
          "bg-amber-100 text-amber-900 border border-amber-300",
        variant === "wa" && "bg-emerald-100 text-wa border border-emerald-300",
        variant === "neutral" && "bg-slate-100 text-slate-700 border border-slate-200",
        variant === "warning" && "bg-amber-50 text-amber-800 border border-amber-200/80",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
