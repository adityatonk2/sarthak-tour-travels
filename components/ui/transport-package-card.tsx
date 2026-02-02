import { Button } from "./button";
import { Car, MapPin } from "lucide-react";
import Link from "next/link";
import companyData from "@/data/company.json";

interface TransportPackage {
    id: string;
    cabType: string;
    image?: string;
    destination: string;
    amount: string;
    description: string;
}

interface TransportPackageCardProps {
    package: TransportPackage;
}

export function TransportPackageCard({ package: pkg }: TransportPackageCardProps) {
    const whatsappMessage = `Hi, I want to book ${pkg.cabType} for ${pkg.destination}. Please assist.`;
    const whatsappUrl = `https://wa.me/${companyData.contact.phone}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="group overflow-hidden rounded-xl border bg-white shadow-md transition-all hover:shadow-xl">
            {pkg.image && (
                <div className="relative w-full overflow-hidden bg-slate-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={pkg.image}
                        alt={pkg.cabType}
                        className="w-full h-auto object-cover transition-transform group-hover:scale-105"
                    />
                </div>
            )}
            <div className="p-6">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Car className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-primary">{pkg.cabType}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                            <MapPin className="h-4 w-4" />
                            <span>{pkg.destination}</span>
                        </div>
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-2xl font-bold text-secondary">{pkg.amount}</div>
                    <div className="text-xs text-muted-foreground">one way</div>
                </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-6 min-h-[3rem]">
                {pkg.description}
            </p>
            
            <Button className="w-full" asChild>
                <Link href={whatsappUrl} target="_blank">
                    Book on WhatsApp
                </Link>
            </Button>
            </div>
        </div>
    );
}

