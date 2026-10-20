import Image from "next/image";
import { LightboxTrigger } from "@/components/lightbox/LightboxTrigger";
import { GALLERY_OFFSET, type LightboxImage } from "@/components/lightbox/lightbox-images";

interface ProjectGalleryProps {
  images: readonly LightboxImage[];
}

/** Miniatures légendées ; chacune ouvre la visionneuse à sa position (après la couverture). */
export function ProjectGallery({ images }: ProjectGalleryProps) {
  if (images.length === 0) return null;

  return (
    <section>
      <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Galerie</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {images.map((image, position) => (
          <li key={image.url}>
            <figure>
              <LightboxTrigger
                index={GALLERY_OFFSET + position}
                caption={image.caption}
                className="aspect-video rounded-lg"
              >
                <Image
                  src={image.url}
                  alt={image.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </LightboxTrigger>
              <figcaption className="mt-2 text-sm text-muted-foreground">
                {image.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
