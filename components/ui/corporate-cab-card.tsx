import { Button } from "./button";
import { Car, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import companyData from "@/data/company.json";

interface CorporateCab {
    id: string;
    name: string;
    location: string;
    price: string;
    priceUnit: string;
    image?: string;
    features: string[];
    popular?: boolean;
}

interface CorporateCabCardProps {
    cab: CorporateCab;
}

export function CorporateCabCard({ cab }: CorporateCabCardProps) {
    const whatsappMessage = `Hi, I want to book ${cab.name} for corporate cab service. Please assist.`;
    const whatsappUrl = `https://wa.me/${companyData.contact.phone}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            {/* Image Header */}
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                {cab.image ? (
                    <Image
                        src={cab.image}
                        alt={cab.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                        <Car className="h-16 w-16 text-slate-300" />
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {cab.popular && (
                    <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow-lg">
                            Most Popular
                        </span>
                    </div>
                )}
                <div className="absolute top-4 right-4 rounded-full bg-white/95 backdrop-blur-sm px-4 py-2 text-sm font-bold text-primary shadow-lg z-10 border border-primary/20">
                    {cab.price}
                </div>
            </div>
            
            <div className="p-6">
                {/* Vehicle Header */}
                <div className="mb-4">
                    <h3 className="text-xl font-bold font-serif text-slate-900 group-hover:text-primary transition-colors">{cab.name}</h3>
                    <p className="text-sm text-slate-500 mt-1">{cab.location}</p>
                </div>

                {/* Features */}
                <ul className="mb-6 space-y-3">
                    {cab.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                            <span className="text-sm text-slate-700">{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* Book Button */}
                <Button className="w-full" asChild size="lg">
                    <Link href={whatsappUrl} target="_blank">
                        Book Now
                    </Link>
                </Button>
            </div>
        </div>
    );
}

