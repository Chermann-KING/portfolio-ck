import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  asChild?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  asChild = false,
}) => {
  const baseStyles =
    "px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-sm hover:shadow-md active:scale-95";
  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  };

  const Component = asChild ? "span" : "button";

  return (
    <Component
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Component>
  );
};
