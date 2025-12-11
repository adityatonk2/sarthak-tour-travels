"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import categories from "@/data/categories.json";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function CategoryCarousel() {
    return (
        <section className="py-16 bg-white overflow-hidden relative">
            {/* Pattern Background (Subtle) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 mb-12">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif italic text-slate-600 mb-2">Wonderful Place For You</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-primary">Tour Categories</h3>
                </div>
            </div>

            <div className="relative w-full overflow-hidden mask-fade-sides">
                {/* Infinite Marquee Track */}
                <motion.div
                    className="flex gap-8 w-max pl-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 60,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    whileHover={{ animationPlayState: "paused" }}
                >
                    {/* Render items twice to create seamless loop */}
                    {[...categories, ...categories].map((item, index) => (
                        <div key={`${item.id}-${index}`} className="w-[280px] md:w-[320px] flex-shrink-0">
                            <div className="flex flex-col items-center group">
                                {/* Image Card */}
                                <div className="relative h-[220px] w-full rounded-[2rem] overflow-hidden shadow-lg transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="text-center mt-6">
                                    <h4 className="text-xl font-bold text-primary uppercase tracking-wide mb-2">{item.title}</h4>
                                    <Button variant="link" className="text-secondary font-semibold hover:text-secondary/80" asChild>
                                        <Link href={item.link}>See More</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
