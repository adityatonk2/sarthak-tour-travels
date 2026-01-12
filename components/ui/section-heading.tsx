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
                "space-y-5 mb-16",
                centered && "text-center",
                className
            )}
        >
            <h2 className="text-4xl md:text-5xl font-bold font-serif gradient-text leading-tight">
                {title}
            </h2>
            {subtitle && (
                <>
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
                    </div>
                    <p className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
                        {subtitle}
                    </p>
                </>
            )}
        </div>
    );
}
