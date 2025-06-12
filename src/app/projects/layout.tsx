import { constructMetadata } from "@/lib/metadata";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = constructMetadata({
  title: "Projets | Hermann MOUSSAVOU",
  description:
    "Découvrez mes réalisations et projets en développement web et mobile. Portfolio de projets React, Next.js, Angular et plus encore.",
  canonical: "/projects",
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
