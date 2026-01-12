import { Package } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Clock, Check } from "lucide-react";
import { Button } from "./button";

interface PackageCardProps {
    pkg: Package;
}

export function PackageCard({ pkg }: PackageCardProps) {
    return (
        <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                {pkg.image ? (
                    <Image 
                        src={pkg.image} 
                        alt={pkg.title} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-110" 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-muted-foreground">
                        No Image
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 rounded-full bg-white/95 backdrop-blur-sm px-4 py-2 text-sm font-bold text-primary shadow-lg z-10 border border-primary/20">
                    {pkg.price}
                </div>
            </div>
            <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
                    <Clock className="h-4 w-4" />
                    <span className="font-medium">{pkg.duration}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold font-serif text-slate-900 group-hover:text-primary transition-colors line-clamp-1">
                    {pkg.title}
                </h3>
                <p className="mb-6 text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {pkg.description}
                </p>
                <Button className="w-full" asChild>
                    <Link href={`/packages/${pkg.slug}`}>
                        View Details
                    </Link>
                </Button>
            </div>
        </div>
    );
}
