"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import companyData from "@/data/company.json";

interface HeroProps {
    title: string;
    subtitle: string;
    backgroundImage: string;
}

export function Hero({ title, subtitle, backgroundImage }: HeroProps) {
    return (
        <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
            {/* Background with Zoom Effect */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src={backgroundImage}
                    alt={title}
                    className="w-full h-full object-cover animate-in fade-in zoom-in duration-[20s] scale-110"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-md">
                        {title}
                    </h1>
                    <p className="text-lg md:text-2xl text-white/90 font-light drop-shadow">
                        {subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 h-14" asChild>
                            <Link href={`https://wa.me/${companyData.contact.phone}`} target="_blank">
                                Book on WhatsApp
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary text-lg px-8 h-14"
                            asChild
                        >
                            <Link href="/services">
                                View Services <ChevronRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
