import Link from "next/link";
import companyData from "@/data/company.json";
import servicesData from "@/data/services.json";
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-200">
            <div className="container mx-auto px-4 py-12 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div>
                        <Link href="/" className="block mb-4">
                            <img src="/images/sarthak-logo.png" alt={companyData.name} className="h-24 w-auto object-contain" />
                        </Link>
                        {/* <h3 className="text-lg font-bold text-white mb-4">{companyData.name}</h3> - Optional: keep or remove since logo is there */}
                        <p className="text-sm text-slate-400 mb-4 pr-4">
                            {companyData.description}
                        </p>
                        <div className="flex gap-4">
                            <Link href={companyData.social.facebook} className="hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
            ChatGPT Image Jan 11, 2026, 10_40_36 AM.png                <Link href={companyData.social.instagram} className="hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Our Services</h3>
                        <ul className="space-y-2 text-sm">
                            {servicesData.map((service) => (
                                <li key={service.id}>
                                    <Link href={`/services#${service.slug}`} className="hover:text-white transition-colors">
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary shrink-0" />
                                <span>{companyData.contact.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <a href={`tel:${companyData.contact.phone}`} className="hover:text-white transition-colors">
                                    {companyData.contact.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <a href={`mailto:${companyData.contact.email}`} className="hover:text-white transition-colors">
                                    {companyData.contact.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-slate-400">
                    <p>&copy; {new Date().getFullYear()} {companyData.name}. All rights reserved.</p>
                    <p className="mt-2 text-xs opacity-70">
                        Created by <span className="text-white font-medium hover:text-secondary transition-colors">Aditya Kumar Tonk</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
