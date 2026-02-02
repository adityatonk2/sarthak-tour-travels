import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import servicesData from "@/data/services.json";
import companyData from "@/data/company.json";
import Link from "next/link";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services",
    description: "Taxi services, tour packages, pilgrimage tours, hotel booking, corporate travel, wedding & event transport, 24x7 support. Sarthak Travels – Uttarakhand.",
    openGraph: {
        title: "Our Services | Sarthak Travels & Holidays",
        description: "Taxi, tours, pilgrimage, hotels, corporate travel, events & 24x7 support across Uttarakhand.",
    },
};

function getWhatsAppUrl(phone: string, text: string) {
    const normalized = phone.split("|")[0].trim().replace(/\D/g, "");
    return `https://wa.me/${normalized}?text=${encodeURIComponent(text)}`;
}

export default function ServicesPage() {
    const phone = companyData.contact.phone;

    return (
        <main className="flex-1 bg-gradient-to-b from-slate-50 via-white to-slate-50">
            {/* Landing – full Our Services image */}
            <section className="w-full overflow-hidden bg-slate-100">
                <img
                    src="/images/uploads/our-services.png"
                    alt="Our Services – Taxi, Tour Packages, Pilgrimage, Hotel Booking, Corporate Travel, Event & Wedding, 24x7 Support, Experienced Drivers"
                    className="w-full h-auto object-contain object-top"
                />
            </section>

            {/* Hero */}
            <section className="relative py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
                <div className="container relative mx-auto px-4 md:px-6 text-center">
                    <SectionHeading
                        title="Our Premium Services"
                        subtitle="End-to-end travel solutions – taxis, tours, hotels, corporate & events, with 24x7 support"
                    />
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        From local cab rides to Char Dham Yatra, hotel stays to wedding transport – we handle it all with verified drivers and best-price guarantee.
                    </p>
                </div>
            </section>

            {/* Service cards – anchor targets for Learn More */}
            <div className="container mx-auto px-4 md:px-6 pb-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
                    {servicesData.map((service) => {
                        const whatsappUrl = getWhatsAppUrl(
                            phone,
                            `Hi, I'm interested in ${service.title}. Please share more details.`
                        );
                        const slug = service.slug;

                        return (
                            <section
                                key={service.id}
                                id={slug}
                                className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                            >
                                {service.image && (
                                    <div className="relative w-full overflow-hidden bg-slate-100">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-auto object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                                        <span className="absolute bottom-3 left-4 text-3xl drop-shadow-md" aria-hidden>
                                            {service.emoji ?? ""}
                                        </span>
                                    </div>
                                )}
                                <div className="p-6 md:p-8">
                                    {!service.image && (
                                        <span className="text-4xl mb-2 block" aria-hidden>
                                            {service.emoji ?? ""}
                                        </span>
                                    )}
                                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                                        {service.title}
                                    </h2>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-5">
                                        {service.description}
                                    </p>
                                    {service.subItems && service.subItems.length > 0 && (
                                        <ul className="space-y-2 mb-6">
                                            {service.subItems.map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                                                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    <Button
                                        size="default"
                                        className="w-full sm:w-auto bg-green-500 hover:bg-green-600"
                                        asChild
                                    >
                                        <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                            <MessageCircle className="mr-2 h-4 w-4" />
                                            Enquire on WhatsApp
                                        </Link>
                                    </Button>
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>

            {/* Page-level CTA */}
            <section className="border-t border-slate-200 bg-white">
                <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                    <div className="max-w-3xl mx-auto text-center rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-12 border-2 border-primary/20 shadow-xl">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                            Need a custom package or bulk booking?
                        </h3>
                        <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                            Tell us your dates, group size, and preferences – we&apos;ll tailor an itinerary and quote with no hidden charges.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="bg-green-500 hover:bg-green-600 shadow-lg" asChild>
                                <Link
                                    href={getWhatsAppUrl(phone, "Hi, I need a custom travel package. Please assist.")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MessageCircle className="mr-2 h-5 w-5" />
                                    Chat on WhatsApp
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="shadow-lg border-2" asChild>
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
