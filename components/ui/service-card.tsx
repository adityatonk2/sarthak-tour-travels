import { Service } from "@/types";
import { Car, Map, Hotel, Gem, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";

const iconMap: Record<string, any> = {
    Car,
    Map,
    Hotel,
    Gem,
};

interface ServiceCardProps {
    service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
    const Icon = iconMap[service.icon] || Map;

    return (
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
            {/* Image Header */}
            {service.image && (
                <div className="relative h-52 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-115"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/10 transition-all duration-300" />
                </div>
            )}

            <div className="p-6 flex flex-col flex-1 relative">
                {/* Floating Icon with Enhanced Design */}
                <div className="absolute -top-7 left-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-xl border-4 border-white">
                    <Icon className="h-7 w-7" />
                </div>

                <h3 className="mb-3 mt-8 text-xl font-bold font-serif text-slate-900 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="mb-6 text-slate-600 flex-1 leading-relaxed">{service.description}</p>
                <Button variant="link" className="p-0 h-auto self-start font-semibold text-primary group-hover:translate-x-2 transition-all duration-300" asChild>
                    <Link href={`/services#${service.slug}`}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4 inline transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
