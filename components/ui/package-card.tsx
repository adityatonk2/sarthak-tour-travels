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
        <div className="group overflow-hidden rounded-xl border bg-white shadow-md transition-all hover:shadow-xl">
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                {pkg.image ? (
                    <Image 
                        src={pkg.image} 
                        alt={pkg.title} 
                        fill 
                        className="object-cover transition-transform duration-300 group-hover:scale-105" 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center bg-gray-100 text-muted-foreground">
                        No Image
                    </div>
                )}
                <div className="absolute top-4 right-4 rounded-full bg-white px-3 py-1 text-sm font-bold text-primary shadow-sm z-10">
                    {pkg.price}
                </div>
            </div>
            <div className="p-5">
                <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{pkg.duration}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold group-hover:text-primary transition-colors line-clamp-1">
                    {pkg.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
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
