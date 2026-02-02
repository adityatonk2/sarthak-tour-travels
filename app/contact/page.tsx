"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import companyData from "@/data/company.json";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="flex-1 py-12 md:py-20">
            <Container className="py-12 md:py-16">
                <SectionHeading title="Get in Touch" subtitle="We're here to help you plan your journey" />

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Details */}
                    <div className="space-y-8">
                        <div className="bg-slate-50 p-6 rounded-xl border">
                            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <MapPin className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Visit Us</h4>
                                        <p className="text-muted-foreground">{companyData.contact.address}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Phone className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Call Us</h4>
                                        <p className="text-muted-foreground">
                                            <a href={`tel:${companyData.contact.phone}`} className="hover:text-primary transition-colors">
                                                {companyData.contact.phone}
                                            </a>
                                        </p>
                                        <p className="text-sm text-muted-foreground mt-1">Mon-Sun: 24 Hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Email Us</h4>
                                        <p className="text-muted-foreground">
                                            <a href={`mailto:${companyData.contact.email}`} className="hover:text-primary transition-colors">
                                                {companyData.contact.email}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp CTA Card */}
                        <div className="bg-green-50 p-8 rounded-xl border border-green-200 text-center">
                            <div className="h-16 w-16 mx-auto bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                                <MessageCircle className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-bold text-green-800 mb-2">Chat with us on WhatsApp</h3>
                            <p className="text-green-700 mb-6 max-w-sm mx-auto">
                                Get instant replies, custom quotes, and booking confirmations directly on your phone.
                            </p>
                            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full max-w-xs" asChild>
                                <Link href={`https://wa.me/${companyData.contact.phone.replace(/\+/g, '').replace(/\s/g, '')}?text=Hi, I have a query regarding travel services.`} target="_blank">
                                    Start Chatting
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Map / Location Image */}
                    <div className="h-[400px] lg:h-auto bg-slate-200 rounded-xl overflow-hidden relative min-h-[400px]">
                        <Image
                            src="/images/uploads/dehradun-3d-image.jpeg"
                            alt="Dehradun Location Map"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium shadow-sm z-10">
                            Dehradun, Uttarakhand
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}
