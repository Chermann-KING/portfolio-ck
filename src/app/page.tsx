import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProfileSection } from "@/components/ProfileSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import Header from "@/components/Header";
import { getProfileData } from "@/lib/profile-data";
import { AboutResumeSection } from "@/components/AboutResumeSection";
import { constructMetadata } from "@/lib/metadata";
import { Suspense } from "react";
import { Card } from "@/components/ui/Card";
import { Footer } from "@/components/Footer";

export const metadata = constructMetadata();

async function ProfileData() {
  try {
    const profile = await getProfileData();

    if (!profile) {
      console.error("Profil non disponible");
      return null;
    }

    return (
      <>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProfileSection profile={profile} />
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-4">
              <StatsSection stats={profile.stats} />
            </div>
            <Card className="p-4 overflow-hidden">
              <SkillsSection skills={profile.skills} />
            </Card>
          </div>
        </div>
        <AboutResumeSection aboutContent={profile.bio} />
      </>
    );
  } catch (error) {
    console.error("Error in ProfileData:", error);
    return null;
  }
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="container mx-auto space-y-12 pt-12 px-4">
        <Hero />
        <Suspense fallback={<div>Chargement...</div>}>
          <ProfileData />
        </Suspense>
        <PortfolioSection />
      </main>
      <Footer />
    </>
  );
}
