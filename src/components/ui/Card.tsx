import { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-card text-card-foreground rounded-2xl p-6 border border-border/40 shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};
