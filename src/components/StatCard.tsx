import { FC } from "react";

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
      className={`${bgColor} ${textColor} rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 xl:p-6 flex flex-col items-center justify-center ${className}`}
    >
      <span className="text-lg sm:text-2xl lg:text-3xl xl:text-5xl font-bold mb-0.5 sm:mb-1 lg:mb-2">
        {count}
      </span>
      <span className="text-xs sm:text-sm lg:text-base font-semibold text-center leading-tight px-1">
        {label}
      </span>
    </div>
  );
};
