"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, MessageCircle } from "lucide-react";
import companyData from "@/data/company.json";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

function getWhatsAppUrl() {
  const phone = companyData.contact.phone.split("|")[0].trim().replace(/\D/g, "");
  return `https://wa.me/${phone}`;
}

export function Hero({ title, subtitle, backgroundImage }: HeroProps) {
  return (
    <section
      className="relative min-h-[85vh] md:min-h-[90vh] w-full overflow-hidden flex items-center justify-center"
      aria-label="Hero"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover animate-zoom-subtle"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" aria-hidden />
      </div>

      <Container as="div" className="relative z-10 py-20 md:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto space-y-6 md:space-y-8"
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif tracking-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] leading-[1.1]"
            style={{ color: "#ffffff" }}
          >
            {title}
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl font-medium drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#ffffff" }}
          >
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 md:pt-8">
            <Button
              size="lg"
              className="bg-[#22c55e] hover:bg-[#16a34a] text-white text-base md:text-lg px-8 md:px-10 h-14 md:h-16 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              asChild
            >
              <Link href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="gap-2">
                <MessageCircle className="h-5 w-5 md:h-6 md:w-6" aria-hidden />
                Book on WhatsApp
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white hover:text-primary text-base md:text-lg px-8 md:px-10 h-14 md:h-16 rounded-xl transition-all duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              asChild
            >
              <Link href="/services" className="gap-2">
                View Services
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" aria-hidden />
              </Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
