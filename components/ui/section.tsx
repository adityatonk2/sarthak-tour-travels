import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /** Reduce vertical padding on smaller screens */
  compact?: boolean;
  /** Background: default | muted | white */
  variant?: "default" | "muted" | "white";
  id?: string;
}

export function Section({
  children,
  className,
  compact,
  variant = "default",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-[var(--section-py)]",
        compact && "py-[var(--section-py-sm)]",
        variant === "muted" && "bg-slate-50",
        variant === "white" && "bg-white",
        className
      )}
    >
      {children}
    </section>
  );
}
