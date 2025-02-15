// src/components/ui/ButtonLink.tsx
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

interface ButtonLinkProps extends ButtonHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "secondary";
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  const baseStyles =
    "px-6 py-2 rounded-full font-medium transition-all duration-200";
  const variantStyles = {
    primary: "bg-primary hover:bg-primary-dark text-white",
    secondary: "bg-background-card hover:bg-gray-700 text-white",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
