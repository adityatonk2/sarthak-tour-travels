import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";
import servicesData from "@/data/services.json";
import companyData from "@/data/company.json";
import Link from "next/link";
import { Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services",
    description: "Premium taxi services, tour packages, hotel booking, and vintage car rentals in Uttarakhand. Book luxury Innova, Crysta & Tempo Travellers for outstation trips.",
    openGraph: {
        title: "Our Services | Sarthak Travels & Holidays",
        description: "Premium taxi services, tour packages, hotel booking, and vintage car rentals in Uttarakhand.",
    },
};

export default function ServicesPage() {
    return (
        <main className="flex-1 py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading
                    title="Our Premium Services"
                    subtitle="We offer a wide range of travel solutions to cater to all your needs"
                />

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-20">
                    {/* We can reuse ServiceCard but perhaps we want more detail here. For now, reusing ServiceCard in a grid. */}
                    {servicesData.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>

                {/* Custom Service Callout */}
                <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center border border-primary/10">
                    <h3 className="text-2xl font-bold mb-4">Need a Custom Package?</h3>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        We understand that every traveler is unique. Contact us today to customize your itinerary,
                        choose your vehicle, and plan the perfect trip within your budget.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" asChild>
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href={`https://wa.me/${companyData.contact.phone}`} target="_blank">
                                <Phone className="mr-2 h-4 w-4" />
                                Chat on WhatsApp
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
