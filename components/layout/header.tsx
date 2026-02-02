"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import companyData from "@/data/company.json";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/packages", label: "Packages" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

function getWhatsAppUrl() {
  const phone = companyData.contact.phone.split("|")[0].trim().replace(/\D/g, "");
  return `https://wa.me/${phone}`;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      {/* Top bar – contact strip */}
      <div className="hidden md:block border-b border-slate-100 bg-slate-50/80">
        <Container as="div" className="py-2">
          <div className="flex justify-between items-center text-sm text-slate-600">
            <div className="flex items-center gap-6">
              <a
                href={`tel:${companyData.contact.phone.split("|")[0].trim()}`}
                className="flex items-center gap-2 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden />
                <span>{companyData.contact.phone.split("|")[0].trim()}</span>
              </a>
              <a
                href={`mailto:${companyData.contact.email}`}
                className="flex items-center gap-2 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden />
                <span>{companyData.contact.email}</span>
              </a>
            </div>
          </div>
        </Container>
      </div>

      <Container as="div" className="flex h-16 md:h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-lg"
          aria-label={`${companyData.name} – Home`}
        >
          <img
            src="/images/sarthak-logo.png"
            alt=""
            className="h-12 w-auto md:h-14 object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            size="lg"
            className="hidden md:inline-flex bg-[#22c55e] hover:bg-[#16a34a] text-white shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
            asChild
          >
            <Link
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Book on WhatsApp
            </Link>
          </Button>

          <button
            type="button"
            className="md:hidden p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden border-t border-slate-200 bg-white overflow-hidden transition-all duration-200",
          isMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
        aria-hidden={!isMenuOpen}
      >
        <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-3 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-slate-100">
            <Button
              className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white"
              size="lg"
              asChild
            >
              <Link
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Book on WhatsApp
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
