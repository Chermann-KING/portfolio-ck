// src/components/ui/Card.tsx
import { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`bg-background-card rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  );
};
