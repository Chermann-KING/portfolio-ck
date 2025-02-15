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
    <section className="grid grid-cols-3 gap-4">
      <StatCard
        count={stats.yearsExperience}
        label="Années d'expérience"
        bgColor="bg-secondary-green"
      />
      <StatCard
        count={stats.projectsCount}
        label="Projets réalisés"
        bgColor="bg-secondary-yellow"
        color="text-black"
      />
      <StatCard
        count={stats.clientsCount}
        label="Clients"
        bgColor="bg-secondary-pink"
      />
    </section>
  );
}
