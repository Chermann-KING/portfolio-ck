import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "frontend" | "backend" | "other" | "default";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium transition-colors",
        // Base styles pour tous les badges
        "border",
        // Variantes spécifiques
        variant === "frontend" &&
          "bg-emerald-50/10 text-emerald-500 dark:text-emerald-400 border-emerald-200/20",
        variant === "backend" &&
          "bg-blue-50/10 text-blue-500 dark:text-blue-400 border-blue-200/20",
        variant === "other" &&
          "bg-purple-50/10 text-purple-500 dark:text-purple-400 border-purple-200/20",
        variant === "default" &&
          "bg-gray-50/10 text-gray-500 dark:text-gray-400 border-gray-200/20",
        className
      )}
    >
      {children}
    </span>
  );
}
