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
        <div className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
            {/* Image Header */}
            {service.image && (
                <div className="relative h-48 w-full overflow-hidden">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                </div>
            )}

            <div className="p-6 flex flex-col flex-1 relative">
                {/* Floating Icon */}
                <div className="absolute -top-6 left-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white text-primary shadow-md">
                    <Icon className="h-6 w-6" />
                </div>

                <h3 className="mb-2 mt-6 text-xl font-bold">{service.title}</h3>
                <p className="mb-4 text-muted-foreground flex-1">{service.description}</p>
                <Button variant="link" className="p-0 h-auto self-start group-hover:translate-x-1 transition-transform" asChild>
                    <Link href={`/services#${service.slug}`}>
                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
