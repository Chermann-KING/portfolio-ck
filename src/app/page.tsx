import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProfileSection } from "@/components/ProfileSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import Header from "@/components/Header";
import { getProfileData } from "@/lib/profile-data";
import { AboutResumeSection } from "@/components/AboutResumeSection";
import { constructMetadata } from "@/lib/metadata";
import { Card } from "@/components/ui/Card";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/Badge";
import { TestimonialsSection } from "@/components/TestimonialsSection/TestimonialsSection";
import { TestimonialsData } from "@/lib/testimonials-data";
import { AnimatedCard } from "@/lib/AnimatedCard";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <ProfileSection profile={profile} />
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              <StatsSection stats={profile.stats} />
            </div>
            <AnimatedCard direction="up" delay={350}>
              <Card className="p-3 sm:p-4 overflow-hidden">
                <SkillsSection skills={profile.skills} />
              </Card>
            </AnimatedCard>
          </div>
        </div>
        {/* Méthodologie de travail */}
        <div className="p-2 sm:p-4 overflow-hidden flex items-center justify-center flex-wrap gap-2 sm:gap-3 lg:gap-6 xl:gap-10">
          <Badge
            variant="default"
            className="font-bold tracking-wider py-1.5 px-2 sm:py-2 sm:px-3 lg:py-3 lg:px-5 text-xs sm:text-sm"
          >
            DÉVELOPPER
          </Badge>
          <Badge
            variant="default"
            className="font-bold tracking-wider py-1.5 px-2 sm:py-2 sm:px-3 lg:py-3 lg:px-5 text-xs sm:text-sm"
          >
            ÉVALUER
          </Badge>
          <Badge
            variant="default"
            className="font-bold tracking-wider py-1.5 px-2 sm:py-2 sm:px-3 lg:py-3 lg:px-5 text-xs sm:text-sm"
          >
            TIRER DES ENSEIGNEMENTS
          </Badge>
          <Badge
            variant="default"
            className="font-bold tracking-wider py-1.5 px-2 sm:py-2 sm:px-3 lg:py-3 lg:px-5 text-xs sm:text-sm"
          >
            AMÉLIORER
          </Badge>
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
      <main className="container mx-auto space-y-6 sm:space-y-8 lg:space-y-10 xl:space-y-12 pt-6 sm:pt-8 lg:pt-10 xl:pt-12 px-3 sm:px-4">
        <Hero />
        <ProfileData />
        <PortfolioSection />
        <TestimonialsSection testimonials={TestimonialsData.testimonials} />
      </main>
      <Footer />
    </>
  );
}
