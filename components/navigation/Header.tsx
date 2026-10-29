"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { getGenericWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { Button } from "@/components/ui/Button";
import {
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "What is DMIT", href: "/dmit" },
    {
      label: "Services",
      href: "/services",
      isDropdown: true,
    },
    { label: "Sample Report", href: "/sample-report" },
    { label: "About Vivek", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          scrolled
            ? "bg-surface/95 backdrop-blur-md shadow-sm border-b border-border/60 py-2.5"
            : "bg-surface border-b border-border/40 py-3.5"
        }`}
      >
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 rounded-lg p-1"
            aria-label={`${site.brand} - Home`}
          >
            <Image
              src="/logo.svg"
              alt={`${site.brand} ${site.byline}`}
              width={210}
              height={44}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            aria-label="Main Navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setServicesDropdownOpen(!servicesDropdownOpen)
                      }
                      className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                        pathname.startsWith("/services")
                          ? "text-primary-700 bg-primary-50"
                          : "text-ink hover:text-primary-600 hover:bg-primary-50/60"
                      }`}
                      aria-expanded={servicesDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Services Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute left-0 top-full w-72 rounded-xl bg-surface p-2 shadow-purple-soft border border-border/80">
                        <Link
                          href="/services"
                          className="block rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50/70 hover:bg-primary-100 transition-colors mb-1"
                        >
                          All Services Overview →
                        </Link>
                        {services.map((svc) => (
                          <Link
                            key={svc.slug}
                            href={`/services/${svc.slug}`}
                            className="block rounded-lg px-3 py-2 text-sm text-ink hover:bg-primary-50 hover:text-primary-700 transition-colors"
                          >
                            <div className="font-semibold">{svc.title}</div>
                            <div className="text-xs text-muted truncate">
                              {svc.tagline}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? "text-primary-700 bg-primary-50 font-bold"
                      : "text-ink hover:text-primary-600 hover:bg-primary-50/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action: WhatsApp */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${site.primaryPhone}`}
              onClick={() =>
                trackEvent("call_click", {
                  source: "header",
                  phone_number_type: "primary",
                })
              }
              className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-primary-700 transition-colors"
              title="Call Vivek Koche"
            >
              <Phone className="h-3.5 w-3.5 text-primary-600" />
              <span>{site.primaryPhone}</span>
            </a>

            <Button
              variant="wa"
              size="sm"
              href={getGenericWhatsAppUrl()}
              leftIcon={<MessageCircle className="h-4 w-4" />}
              onClick={() =>
                trackEvent("whatsapp_click", { source: "header" })
              }
            >
              WhatsApp Us
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getGenericWhatsAppUrl()}
              onClick={() =>
                trackEvent("whatsapp_click", { source: "mobile_header_icon" })
              }
              aria-label="Chat on WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-wa hover:bg-emerald-100 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-lg text-ink hover:bg-primary-50 hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-surface lg:hidden animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-border/80 px-4 py-3.5">
            <Image
              src="/logo.svg"
              alt={`${site.brand} ${site.byline}`}
              width={180}
              height={40}
              className="h-9 w-auto object-contain"
            />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-lg text-ink hover:bg-primary-50"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-6">
            <nav className="flex flex-col gap-1">
              <Link
                href="/"
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-ink hover:bg-primary-50 hover:text-primary-700"
              >
                Home
              </Link>
              <Link
                href="/dmit"
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-ink hover:bg-primary-50 hover:text-primary-700"
              >
                What is DMIT
              </Link>

              {/* Mobile Services Accordion */}
              <div className="rounded-xl bg-primary-50/50 p-2 my-1">
                <Link
                  href="/services"
                  className="flex items-center justify-between px-3 py-2 text-sm font-bold text-primary-700 uppercase tracking-wider"
                >
                  <span>Services Overview</span>
                  <Sparkles className="h-4 w-4 text-accent" />
                </Link>
                <div className="mt-1 flex flex-col gap-1 pl-2">
                  {services.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      className="rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-surface hover:text-primary-700 transition-colors"
                    >
                      {svc.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/sample-report"
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-ink hover:bg-primary-50 hover:text-primary-700"
              >
                Sample Report
              </Link>
              <Link
                href="/about"
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-ink hover:bg-primary-50 hover:text-primary-700"
              >
                About Vivek Koche
              </Link>
              <Link
                href="/faq"
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-ink hover:bg-primary-50 hover:text-primary-700"
              >
                Frequently Asked Questions
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-ink hover:bg-primary-50 hover:text-primary-700"
              >
                Contact & Centre
              </Link>
            </nav>

            {/* Mobile Drawer Bottom Details */}
            <div className="mt-8 rounded-2xl border border-border/80 bg-surface p-4">
              <div className="text-xs font-semibold text-muted uppercase tracking-wider">
                Centre Address (In-Person)
              </div>
              <p className="mt-1 text-sm font-medium text-ink">
                {site.address.full}
              </p>
              <p className="mt-1 text-xs text-muted">{site.hours.display}</p>

              <div className="mt-4 flex flex-col gap-2">
                <Button
                  variant="wa"
                  size="md"
                  href={getGenericWhatsAppUrl()}
                  leftIcon={<MessageCircle className="h-5 w-5" />}
                  onClick={() =>
                    trackEvent("whatsapp_click", { source: "mobile_drawer" })
                  }
                  className="w-full"
                >
                  Message on WhatsApp
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  href={`tel:${site.primaryPhone}`}
                  leftIcon={<Phone className="h-4 w-4" />}
                  onClick={() =>
                    trackEvent("call_click", {
                      source: "mobile_drawer",
                      phone_number_type: "primary",
                    })
                  }
                  className="w-full"
                >
                  Call {site.primaryPhone}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
