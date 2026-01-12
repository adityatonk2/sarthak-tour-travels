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
        <section className="relative h-[90vh] min-h-[650px] md:min-h-[700px] w-full overflow-hidden flex items-center justify-center">
            {/* Background with Enhanced Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src={backgroundImage}
                    alt={title}
                    className="w-full h-full object-cover scale-110 animate-[zoom_20s_ease-in-out_infinite_alternate]"
                />
                {/* Gradient Overlay for Better Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl mx-auto space-y-8"
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-serif tracking-tight drop-shadow-2xl leading-tight" style={{ color: '#ffffff', textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 10px rgba(0, 0, 0, 0.6)' }}>
                        {title}
                    </h1>
                    <p className="text-xl md:text-2xl lg:text-3xl font-bold drop-shadow-2xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#ffffff' }}>
                        {subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center pt-10">
                        <Button size="lg" className="bg-primary hover:bg-primary-dark text-white text-lg px-10 h-16 shadow-2xl" asChild>
                            <Link href={`https://wa.me/${companyData.contact.phone}`} target="_blank">
                                Book on WhatsApp
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-primary text-lg px-10 h-16 shadow-xl"
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
