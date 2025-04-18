import { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`bg-background-card-dark rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  );
};
