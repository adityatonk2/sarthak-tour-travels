"use client";

import { Testimonial } from "@/types";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, User, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCarouselProps {
    testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000); // Auto-advance every 5 seconds

        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden px-4">
            <div className="relative min-h-[300px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="text-center space-y-6 bg-white p-8 rounded-2xl shadow-lg border w-full"
                    >
                        <div className="flex justify-center text-primary/20">
                            <Quote className="h-12 w-12" />
                        </div>

                        <p className="text-xl md:text-2xl font-light text-foreground/80 italic">
                            "{testimonials[currentIndex].quote}"
                        </p>

                        <div className="flex flex-col items-center gap-2">
                            <div className="flex gap-1 text-yellow-400 mb-2">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                            </div>
                            <div className="flex items-center gap-3">
                                {testimonials[currentIndex].image ? (
                                    <img
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        className="h-12 w-12 rounded-full object-cover border-2 border-primary/20"
                                    />
                                ) : (
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <User className="h-6 w-6" />
                                    </div>
                                )}
                                <div className="text-left">
                                    <div className="font-bold text-primary">{testimonials[currentIndex].name}</div>
                                    <p className="text-xs text-muted-foreground">{testimonials[currentIndex].location}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={cn(
                            "h-2 w-2 rounded-full transition-all",
                            index === currentIndex ? "bg-primary w-6" : "bg-primary/20"
                        )}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
