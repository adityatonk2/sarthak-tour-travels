import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4 mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif gradient-text leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <>
          <div
            className={cn(
              "flex items-center gap-3",
              centered ? "justify-center" : "justify-start"
            )}
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-primary/50" />
            <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl leading-relaxed font-medium md:mx-auto">
            {subtitle}
          </p>
        </>
      )}
    </div>
  );
}
