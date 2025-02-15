import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import { ProfileSection } from "@/components/ProfileSection";
import { PortfolioSection } from "@/components/PortfolioSection";

import Header from "@/components/Header";
import { getProfileData } from "@/lib/profile-data";
import { AboutResumeSection } from "@/components/AboutResumeSection";

export const metadata: Metadata = {
  title: "Accueil | Hermann Moussavou Portfolio",
  description:
    "Portfolio de concepteurs d'interface utilisateur présentant des conceptions créatives et innovantes ainsi que des projets de développement web et mobile.",
};

export default async function HomePage() {
  const profile = await getProfileData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="w-full flex flex-col gap-8">
        <Hero />
        <StatsSection stats={profile.stats} />
        <PortfolioSection />
      </div>
      <div className="w-full flex flex-col gap-8">
        <Header />
        <ProfileSection profile={profile} />
        <AboutResumeSection aboutContent={profile.bio} />
      </div>
    </div>
  );
}
