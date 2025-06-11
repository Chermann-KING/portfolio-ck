import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Projets | Hermann MOUSSAVOU",
  description:
    "Découvrez mes réalisations et projets en développement web et mobile. Portfolio de projets React, Next.js, Angular et plus encore.",
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
