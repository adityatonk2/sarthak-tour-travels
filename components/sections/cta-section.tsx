"use client";

import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import companyData from "@/data/company.json";

function getWhatsAppUrl(text: string) {
  const phone = companyData.contact.phone.split("|")[0].trim().replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function CtaSection() {
  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <Container as="div" className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold font-serif mb-3 text-white">
          Ready to plan your trip?
        </h2>
        <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
          Book taxis, tours, hotels, or corporate travel. We&apos;re available 24×7 on WhatsApp and call.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="bg-[#22c55e] hover:bg-[#16a34a] text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
            asChild
          >
            <Link
              href={getWhatsAppUrl("Hi, I'd like to book a service. Please assist.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/40 bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
            asChild
          >
            <Link href={`tel:${companyData.contact.phone.split("|")[0].trim()}`}>
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
