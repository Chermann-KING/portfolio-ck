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
    <div className="flex gap-8">
      {/* gauche - photo de profil */}
      <div className="relative bg-primary-light rounded-2xl overflow-hidden aspect-square">
        <Image
          src={profile.avatar}
          alt={profile.name}
          width={400}
          height={300}
          className="object-cover w-full h-full"
        />
        {/* <Image
          src={profile.avatar}
          alt={profile.name}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        /> */}
      </div>
      {/* droite - infos profil */}
      <div className="flex flex-col gap-8">
        {/* nom */}
        <Card className="flex justify-between gap-4 text-xl">
          <span className="text-gray-400">Nom:</span>
          <h2 className="font-semibold">{profile.name}</h2>
        </Card>
        {/* résidence */}
        <Card className="flex justify-between gap-4 text-xl">
          <div className="space-y-2">
            <div className="flex justify-between items-center gap-4">
              <span className="text-gray-400">Résidence:</span>
              <h2 className="font-semibold">{profile.location.address}</h2>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img
                src={profile.location.imgMap}
                alt={profile.location.address}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </Card>
        {/* sociale links */}
        <Card className="flex items-center gap-4">
          {profile.social.map((social) => {
            return (
              <Link
                key={social.platform}
                href={social.url}
                className="p-2 rounded-full font-medium text-3xl transition-all duration-200 bg-[#2e2a2e] hover:bg-primary-dark text-gray-200"
              >
                {social.icon}
              </Link>
            );
          })}
        </Card>
      </div>
    </div>

    // *********avant modifis***********
    // <div className="flex flex-col gap-8 border-2 border-red-500">
    //   {/* gauche - photo de profil */}
    //   {/* droit - infos profil */}
    //   <Card className="flex flex-col gap-4">
    //     <div className="relative rounded-2xl overflow-hidden aspect-square">
    //       <img
    //         src={profile.avatar}
    //         alt={profile.name}
    //         className="object-cover w-full h-full"
    //       />
    //     </div>
    //     <div className="space-y-2">
    //       <div className="flex justify-between items-center">
    //         <h2 className="text-xl font-semibold">{profile.name}</h2>
    //       </div>
    //       <div className="flex items-center gap-2 text-gray-400">
    //         <MapPin size={16} />
    //         <span>{profile.location}</span>
    //       </div>
    //     </div>
    //   </Card>
    // </div>
  );
};
