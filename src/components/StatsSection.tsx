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
          bgColor="bg-card border border-border/40"
          textColor="text-amber-600 dark:text-amber-400"
          className="min-h-[80px] sm:min-h-[100px] lg:min-h-[120px]"
        />
      </AnimatedCard>
      <AnimatedCard direction="right" delay={250}>
        <StatCard
          count={stats.projectsCount}
          label="Projets réalisés"
          bgColor="bg-card border border-border/40"
          textColor="text-amber-500 dark:text-amber-300"
          className="min-h-[80px] sm:min-h-[100px] lg:min-h-[120px]"
        />
      </AnimatedCard>
      <AnimatedCard direction="right" delay={200}>
        <StatCard
          count={stats.clientsCount}
          label="Clients accompagnés"
          bgColor="bg-card border border-border/40"
          textColor="text-secondary"
          className="min-h-[80px] sm:min-h-[100px] lg:min-h-[120px]"
        />
      </AnimatedCard>
    </div>
  );
}
