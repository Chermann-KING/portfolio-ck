import { FC } from "react";
import { Card } from "./ui/Card";
import { UserProfile } from "@/types";
import Link from "next/link";
import Image from "next/image";

interface ProfileSectionProps {
  profile: UserProfile;
}

export const ProfileSection: FC<ProfileSectionProps> = ({ profile }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Profile photo */}
      <div className="relative aspect-auto w-full bg-card rounded-2xl overflow-hidden shadow-lg">
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
      <div className="flex flex-col gap-6">
        <Card className="flex justify-between items-center gap-4">
          <span className="text-text-secondary dark:text-gray-400">Nom:</span>
          <h2 className="text-text-primary dark:text-white text-xl font-semibold">
            {profile.name}
          </h2>
        </Card>

        <Card className="space-y-4">
          <address className="flex justify-between items-center gap-2 not-italic">
            <span className="text-text-secondary dark:text-gray-400">
              Résidence:
            </span>
            <span className="text-text-primary dark:text-white text-lg font-semibold">
              {profile.location.address}
            </span>
          </address>
          <div className="relative aspect-[calc(4*3+1)/9] w-full rounded-xl overflow-hidden">
            <Image
              src={profile.location.imgMap}
              alt={profile.location.address}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Card>

        {/* TODO: Voir le padding */}
        <Card className="flex items-center justify-center gap-6 py-[1.19rem]">
          {profile.social.map((social) => (
            <Link
              key={social.platform}
              href={social.url}
              className="p-2 rounded-lg transition-all duration-200 hover:bg-primary/20 text-text-secondary dark:text-gray-400 hover:text-primary dark:hover:text-white"
            >
              {social.icon}
            </Link>
          ))}
        </Card>
      </div>
    </div>
  );
};
