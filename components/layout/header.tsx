"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import companyData from "@/data/company.json";
import { cn } from "@/lib/utils";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/packages", label: "Packages" },
        { href: "/services", label: "Services" },
        { href: "/gallery", label: "Gallery" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
            {/* Top Bar - Reference Style */}
            <div className="bg-primary text-primary-foreground text-xs py-2 hidden md:block">
                <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2">
                            <Phone className="h-3 w-3" /> {companyData.contact.phone}
                        </span>
                        <span className="flex items-center gap-2">
                            <Mail className="h-3 w-3" /> {companyData.contact.email}
                        </span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <img src="/images/site-logo.png" alt={companyData.name} className="h-16 w-16 rounded-full object-cover" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium transition-colors hover:text-primary"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Button className="hidden md:flex gap-2" asChild>
                            <Link href={`https://wa.me/${companyData.contact.phone}`} target="_blank">
                                <Phone className="h-4 w-4" />
                                Book Now
                            </Link>
                        </Button>

                        <button
                            className="md:hidden p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t p-4 bg-background">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium hover:text-primary py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button asChild className="w-full mt-2">
                            <Link href={`https://wa.me/${companyData.contact.phone}`} target="_blank">
                                Book on WhatsApp
                            </Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}
