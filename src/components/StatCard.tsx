import { FC } from "react";
// import { StatCardProps } from "@/types";
// import { Card } from "./ui/Card";

interface StatCardProps {
  count: string;
  label: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

export const StatCard: FC<StatCardProps> = ({
  count,
  label,
  bgColor = "bg-emerald-500",
  textColor = "text-white",
  className = "",
}) => {
  return (
    <div
      className={`${bgColor} ${textColor} rounded-2xl p-6 flex flex-col items-center justify-center ${className}`}
    >
      <span className="text-5xl font-bold mb-2">{count}</span>
      <span className="text-base font-semibold text-center">{label}</span>
    </div>
  );
};
