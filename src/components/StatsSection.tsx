import { AnimatedCard } from "@/lib/AnimatedCard";
import { StatCard } from "./StatCard";

interface StatsSectionProps {
  stats: {
    yearsExperience: string;
    projectsCount: string;
    clientsCount: string;
  };
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
      <AnimatedCard direction="right" delay={300}>
        <StatCard
          count={stats.yearsExperience}
          label="Années d'expérience"
          bgColor="bg-emerald-500 dark:bg-emerald-500"
          className="min-h-[80px] sm:min-h-[100px] lg:min-h-[120px]"
        />
      </AnimatedCard>
      <AnimatedCard direction="right" delay={250}>
        <StatCard
          count={stats.projectsCount}
          label="Projets réalisés"
          bgColor="bg-amber-400 dark:bg-amber-400"
          textColor="text-gray-900 dark:text-gray-900"
          className="min-h-[80px] sm:min-h-[100px] lg:min-h-[120px]"
        />
      </AnimatedCard>
      <AnimatedCard direction="right" delay={200}>
        <StatCard
          count={stats.clientsCount}
          label="Clients"
          bgColor="bg-rose-400 dark:bg-rose-400"
          className="min-h-[80px] sm:min-h-[100px] lg:min-h-[120px]"
        />
      </AnimatedCard>
    </div>
  );
}
