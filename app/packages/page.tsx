import { SectionHeading } from "@/components/ui/section-heading";
import { TransportPackageCard } from "@/components/ui/transport-package-card";
import { Button } from "@/components/ui/button";
import transportPackagesData from "@/data/transport-packages.json";
import companyData from "@/data/company.json";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import type { Metadata } from "next";

const PACKAGES_HEADING_IMAGES = [
    { src: "/images/uploads/premium-vehicles.png", alt: "Premium Vehicles" },
    { src: "/images/uploads/24-7.png", alt: "24/7 Availability" },
    { src: "/images/uploads/multiple-destinations.png", alt: "Multiple Destinations" },
];

export const metadata: Metadata = {
    title: "Transport Packages",
    description: "Affordable and reliable taxi services for Delhi, Chandigarh, and Jolly Grant Airport transfers. Choose from DZIRE, INNOVA, and ERTIGA. Book now via WhatsApp.",
    openGraph: {
        title: "Transport Packages | Sarthak Travels & Holidays",
        description: "Affordable and reliable taxi services for Delhi, Chandigarh, and Jolly Grant Airport transfers.",
    },
};

export default function PackagesPage() {
    // Group packages by destination
    const groupedPackages = transportPackagesData.reduce((acc: any, pkg: any) => {
        const dest = pkg.destination;
        if (!acc[dest]) {
            acc[dest] = [];
        }
        acc[dest].push(pkg);
        return acc;
    }, {});

    return (
        <main className="flex-1 py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <SectionHeading
                        title="Local Transport Packages"
                        subtitle="Reliable airport taxi services and city transfers at competitive prices"
                    />
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
                        Book your ride with confidence. We offer punctual, safe, and comfortable transportation 
                        services for all major destinations including airport transfers, city drops, and outstation trips.
                    </p>
                </div>

                {/* Features - heading images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {PACKAGES_HEADING_IMAGES.map((img) => (
                        <div key={img.alt} className="overflow-hidden rounded-xl border border-primary/10 bg-primary/5 shadow-md transition-shadow hover:shadow-lg">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-auto object-contain p-4"
                            />
                        </div>
                    ))}
                </div>

                {/* Packages by Destination */}
                {Object.entries(groupedPackages).map(([destination, packages]: [string, any]) => (
                    <div key={destination} className="mb-16">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <MapPin className="h-6 w-6 text-primary" />
                            {destination}
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {packages.map((pkg: any) => (
                                <TransportPackageCard key={pkg.id} package={pkg} />
                            ))}
                        </div>
                    </div>
                ))}

                {/* CTA Section */}
                <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center border border-primary/10 mt-16">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Book Your Ride?</h3>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Get in touch with us via WhatsApp for instant booking, or call us for any queries about 
                        our transport packages. We're here to make your journey comfortable and hassle-free.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" asChild className="bg-green-500 hover:bg-green-600">
                            <Link href={`https://wa.me/${companyData.contact.phone}?text=Hi, I want to book a transport service. Please assist.`} target="_blank">
                                <Phone className="mr-2 h-5 w-5" />
                                Book on WhatsApp
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href={`tel:${companyData.contact.phone}`}>
                                <Phone className="mr-2 h-5 w-5" />
                                Call Us Now
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/contact">
                                Contact Us
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-16 grid md:grid-cols-2 gap-8">
                    <div className="p-6 bg-slate-50 rounded-xl">
                        <h4 className="font-bold text-lg mb-3">Why Choose Us?</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">✓</span>
                                <span>Experienced and professional drivers</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">✓</span>
                                <span>Transparent pricing with no hidden charges</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">✓</span>
                                <span>On-time pickups and drops</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">✓</span>
                                <span>Clean and sanitized vehicles</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">✓</span>
                                <span>24/7 customer support</span>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-xl">
                        <h4 className="font-bold text-lg mb-3">Payment Options</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>Cash payment available</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>UPI payments accepted</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>Bank transfer options</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>Advance booking available</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>Corporate billing supported</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}

