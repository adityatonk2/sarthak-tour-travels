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
                "space-y-4 mb-12",
                centered && "text-center",
                className
            )}
        >
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 inline-block">
                {title}
            </h2>
            {subtitle && (
                <div className="w-24 h-1 bg-secondary mx-auto rounded-full" />
            )}
            {subtitle && (
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
