import { FC } from "react";
import { Card } from "./ui/Card";
import { UserProfile } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { AnimatedCard } from "@/lib/AnimatedCard";

interface ProfileSectionProps {
  profile: UserProfile;
}

export const ProfileSection: FC<ProfileSectionProps> = ({ profile }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
      {/* Profile photo */}
      <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto w-full bg-card rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={profile.avatar}
          alt={profile.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Profile info */}
      <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
        <AnimatedCard direction="down" delay={200}>
          <Card className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 p-3 sm:p-4">
            <span className="text-text-secondary dark:text-gray-400 text-xs sm:text-sm lg:text-base">
              Nom:
            </span>
            <h2 className="text-text-primary dark:text-white text-base sm:text-lg lg:text-xl font-semibold">
              {profile.name}
            </h2>
          </Card>
        </AnimatedCard>

        <AnimatedCard direction="down" delay={250}>
          <Card className="space-y-3 sm:space-y-4 p-3 sm:p-4">
            <address className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 not-italic">
              <span className="text-text-secondary dark:text-gray-400 text-xs sm:text-sm lg:text-base">
                Résidence:
              </span>
              <span className="text-text-primary dark:text-white text-sm sm:text-base lg:text-lg font-semibold">
                {profile.location.address}
              </span>
            </address>
            <div className="relative aspect-[16/9] sm:aspect-[calc(4*3+1)/9] w-full rounded-xl overflow-hidden">
              <Image
                src={profile.location.imgMap}
                alt={profile.location.address}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Card>
        </AnimatedCard>

        <AnimatedCard direction="down" delay={300}>
          <Card className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-6 py-3 sm:py-4 lg:py-[1.19rem] px-3 sm:px-4">
            {profile.social.map((social) => (
              <Link
                key={social.platform}
                href={social.url}
                className="p-1.5 sm:p-2 rounded-lg transition-all duration-200 hover:bg-primary/20 text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7">
                  {social.icon}
                </div>
              </Link>
            ))}
          </Card>
        </AnimatedCard>
      </div>
    </div>
  );
};
