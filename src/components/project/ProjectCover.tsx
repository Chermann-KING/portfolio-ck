import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { LightboxTrigger } from "@/components/lightbox/LightboxTrigger";
import { COVER_INDEX } from "@/components/lightbox/lightbox-images";

interface ProjectCoverProps {
  src: string;
  title: string;
}

/** Image de couverture (élément LCP, préchargée), ouvrant la visionneuse sur la première image. */
export function ProjectCover({ src, title }: ProjectCoverProps) {
  return (
    <Card className="mb-8 sm:mb-12 overflow-hidden p-0">
      <LightboxTrigger
        index={COVER_INDEX}
        caption={title}
        className="h-[250px] sm:h-[400px] lg:h-[500px]"
      >
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          className="object-cover object-top"
          preload
        />
      </LightboxTrigger>
    </Card>
  );
}
