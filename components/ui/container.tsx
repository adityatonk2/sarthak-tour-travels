import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "main";
}

export function Container({ children, className, as: Comp = "div" }: ContainerProps) {
  return (
    <Comp
      className={cn(
        "mx-auto w-full max-w-[var(--container-max,1280px)] px-[var(--container-px,1rem)] md:px-6",
        className
      )}
    >
      {children}
    </Comp>
  );
}
