import { Package } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface PackageCardProps {
  pkg: Package;
  className?: string;
}

export function PackageCard({ pkg, className }: PackageCardProps) {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-2 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-white",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        {pkg.image ? (
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-slate-400 text-sm font-medium">
            No image
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <div className="absolute top-4 right-4 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1.5 text-sm font-bold text-primary shadow-md border border-primary/20">
          {pkg.price}
        </div>
      </div>
      <div className="p-5 md:p-6">
        <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
          <Clock className="h-4 w-4 shrink-0" aria-hidden />
          <span className="font-medium">{pkg.duration}</span>
        </div>
        <h3 className="mb-2 text-lg md:text-xl font-bold font-serif text-slate-900 group-hover:text-primary transition-colors duration-200 line-clamp-1">
          {pkg.title}
        </h3>
        <p className="mb-5 text-sm text-slate-600 line-clamp-2 leading-relaxed">
          {pkg.description}
        </p>
        <Button className="w-full rounded-xl" size="default" asChild>
          <Link
            href={`/packages/${pkg.slug}`}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl"
          >
            View details
          </Link>
        </Button>
      </div>
    </article>
  );
}
