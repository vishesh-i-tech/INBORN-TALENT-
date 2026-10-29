import React from "react";
import Link from "next/link";
import { getGenericWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Compass, MessageCircle, Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center py-16">
      <Container size="narrow">
        <div className="rounded-3xl border border-border bg-surface p-8 sm:p-12 text-center shadow-purple-card max-w-lg mx-auto">
          <Badge variant="accent" className="mb-4">
            <Compass className="h-3.5 w-3.5" />
            <span>Page Not Found</span>
          </Badge>

          <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-ink">
            404
          </h1>

          <h2 className="mt-2 font-heading text-lg sm:text-xl font-bold text-ink">
            We couldn&apos;t find that page
          </h2>

          <p className="mt-3 text-sm text-muted leading-relaxed">
            The page you are looking for might have been moved or does not exist. Let us help you find the right path.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="primary"
              size="md"
              href="/"
              leftIcon={<Home className="h-4 w-4" />}
            >
              Return Home
            </Button>

            <Button
              variant="outline"
              size="md"
              href="/services"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              Explore Services
            </Button>
          </div>

          <div className="mt-6 pt-6 border-t border-border/60">
            <a
              href={getGenericWhatsAppUrl()}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-wa hover:underline"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Need help? Message Vivek on WhatsApp</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

