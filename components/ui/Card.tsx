import React from "react";
import { clsx } from "clsx";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({
  children,
  className,
  hoverEffect = false,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-card bg-surface border border-border/80 p-6 md:p-8 shadow-sm transition-all duration-300",
        hoverEffect &&
          "hover:shadow-purple-soft hover:-translate-y-1 hover:border-primary-600/30",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

