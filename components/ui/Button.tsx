import React from "react";
import Link from "next/link";
import { clsx } from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "wa" | "accent";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-button transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none min-h-[44px]";

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary-700 shadow-purple-card hover:shadow-purple-soft focus-visible:ring-primary-600",
    secondary:
      "bg-primary-100 text-primary-700 hover:bg-purple-200/80 border border-primary-600/15 focus-visible:ring-primary-600",
    outline:
      "border-2 border-primary-600 text-primary-600 bg-transparent hover:bg-primary-50 focus-visible:ring-primary-600",
    ghost:
      "text-ink hover:bg-primary-50 hover:text-primary-600 focus-visible:ring-primary-600",
    wa:
      "bg-wa text-white hover:bg-wa-hover shadow-sm hover:shadow-md focus-visible:ring-wa font-bold",
    accent:
      "bg-accent text-ink hover:bg-amber-400 shadow-sm focus-visible:ring-amber-500 font-bold",
  };

  const sizeStyles = {
    sm: "text-sm px-4 py-2 gap-1.5",
    md: "text-base px-6 py-2.5 gap-2",
    lg: "text-lg px-8 py-3.5 gap-2.5",
  };

  const combinedClasses = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </>
  );

  if (href) {
    if (isExternal || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
}

