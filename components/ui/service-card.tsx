import { Service } from "@/types";
import { Car, Map, Hotel, Gem, Building2, Phone, UserCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Car,
  Map,
  Hotel,
  Gem,
  Building2,
  Phone,
  UserCheck,
};

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Map;

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-2 h-full flex flex-col focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-white",
        className
      )}
    >
      {service.image && (
        <div className="relative w-full overflow-hidden bg-slate-100 rounded-t-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
        </div>
      )}

      <div className="p-6 md:p-7 flex flex-col flex-1 relative">
        <div className="absolute -top-6 left-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-white shadow-lg border-2 border-white z-10 transition-transform duration-300 group-hover:scale-105">
          <Icon className="h-7 w-7" aria-hidden />
        </div>

        <div className="mt-8">
          <h3 className="mb-3 text-xl md:text-2xl font-bold font-serif text-slate-900 group-hover:text-primary transition-colors duration-200 leading-tight">
            {service.title}
          </h3>
          <p className="mb-5 text-slate-600 text-sm md:text-base leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>

        <div className="mt-auto pt-4 border-t border-slate-100">
          <Button variant="link" className="p-0 h-auto font-semibold text-primary group-hover:translate-x-1 transition-transform duration-200 text-base gap-2" asChild>
            <Link
              href={`/services#${service.slug}`}
              className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
            >
              Learn more
              <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
