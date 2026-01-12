"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import categories from "@/data/categories.json";

export function DestinationsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % categories.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, categories.length]);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
        setIsAutoPlaying(false);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % categories.length);
        setIsAutoPlaying(false);
        };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;

        const distance = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 50;

        if (distance > minSwipeDistance) {
            handleNext();
        } else if (distance < -minSwipeDistance) {
            handlePrevious();
        }

        touchStartX.current = 0;
        touchEndX.current = 0;
    };

    // Get visible items (1 on mobile, 3 on desktop)
    const itemsToShow = isMobile ? 1 : 3;
    const getVisibleItems = () => {
        const items = [];
        for (let i = 0; i < itemsToShow; i++) {
            const index = (currentIndex + i) % categories.length;
            items.push({ ...categories[index], position: i });
        }
        return items;
    };

    const visibleItems = getVisibleItems();

    return (
        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-10 md:mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-primary uppercase tracking-wider mb-2">
                        <span className="w-8 md:w-12 h-px bg-primary/30"></span>
                        <span>Top Destination</span>
                        <span className="w-8 md:w-12 h-px bg-primary/30"></span>
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 via-primary to-slate-800 leading-tight">
                        Popular Destination
                    </h2>
                    <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto mt-4">
                        Discover the most beautiful places in Uttarakhand
                    </p>
                    <div className="flex justify-center mt-6">
                        <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
                    </div>
            </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Mobile: Single card carousel with touch support */}
                    {isMobile ? (
                        <div
                            className="relative h-[400px] w-full"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 300, scale: 0.8 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: -300, scale: 0.8 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="absolute inset-0"
                                >
                                    <Link href={categories[currentIndex].link} className="block h-full">
                                        <div className="relative h-full w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl group">
                                            <div className="relative h-full w-full">
                                                <Image
                                                    src={categories[currentIndex].image}
                                                    alt={categories[currentIndex].title}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                    sizes="(max-width: 768px) 100vw, 400px"
                                                    priority
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                                    <h4 className="text-2xl font-bold text-white uppercase tracking-wide drop-shadow-lg">
                                                        {categories[currentIndex].title}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation Dots */}
                            <div className="flex justify-center gap-2 mt-6">
                                {categories.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setCurrentIndex(index);
                                            setIsAutoPlaying(false);
                                        }}
                                        className={`h-2 rounded-full transition-all duration-300 ${
                                            index === currentIndex
                                                ? "w-8 bg-primary"
                                                : "w-2 bg-slate-300 hover:bg-slate-400"
                                        }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* Desktop: Multi-card carousel */
                        <>
                            <div className="relative h-[450px] overflow-hidden">
                                <div className="flex items-center justify-center gap-6 h-full">
                                    {visibleItems.map((item, idx) => (
                                        <motion.div
                                            key={`${item.id}-${currentIndex}`}
                                            initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                            animate={{
                                                opacity: 1,
                                                scale: idx === 1 ? 1.1 : 0.95,
                                                y: idx === 1 ? -20 : 0,
                                                zIndex: idx === 1 ? 10 : 5,
                                            }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                            className={`relative ${idx === 1 ? "flex-1 max-w-md" : "flex-1 max-w-xs"} h-full`}
                                        >
                                            <Link href={item.link} className="block h-full">
                                                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-xl group cursor-pointer transform transition-all duration-300 hover:shadow-2xl">
                                                    <div className="relative h-full w-full">
                                                        <Image
                                    src={item.image}
                                    alt={item.title}
                                                            fill
                                                            className={`object-cover transition-transform duration-500 ${
                                                                idx === 1
                                                                    ? "group-hover:scale-110"
                                                                    : "group-hover:scale-105 opacity-80"
                                                            }`}
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                                                            priority={idx === 1}
                                />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                                                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                                                            <h4
                                                                className={`font-bold text-white uppercase tracking-wide drop-shadow-lg ${
                                                                    idx === 1 ? "text-xl md:text-2xl" : "text-lg md:text-xl"
                                                                }`}
                                                            >
                                                                {item.title}
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Desktop Navigation */}
                            <div className="flex items-center justify-center gap-4 mt-8">
                                <button
                                    onClick={handlePrevious}
                                    className="p-3 rounded-full bg-white shadow-lg hover:bg-primary hover:text-white transition-all duration-300 border border-slate-200"
                                    aria-label="Previous slide"
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </button>

                                {/* Dots */}
                                <div className="flex gap-2">
                                    {categories.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                setCurrentIndex(index);
                                                setIsAutoPlaying(false);
                                            }}
                                            className={`h-2 rounded-full transition-all duration-300 ${
                                                index === currentIndex
                                                    ? "w-8 bg-primary"
                                                    : "w-2 bg-slate-300 hover:bg-slate-400"
                                            }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={handleNext}
                                    className="p-3 rounded-full bg-white shadow-lg hover:bg-primary hover:text-white transition-all duration-300 border border-slate-200"
                                    aria-label="Next slide"
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
