import { FC } from "react";
import { StatCardProps } from "@/types";
import { Card } from "./ui/Card";

export const StatCard: FC<StatCardProps> = ({
  count,
  label,
  bgColor = "bg-secondary-green",
  color = "text-white",
}) => {
  return (
    <Card className={`${bgColor} text-white min-w-[120px]`}>
      <div className="flex flex-col justify-center items-center gap-1">
        <span className={`text-5xl font-bold ${color}`}>{count}</span>
        <span className={`text-lg font-medium opacity-90 ${color}`}>
          {label}
        </span>
      </div>
    </Card>
  );
};
