import { constructMetadata } from "@/lib/metadata";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = constructMetadata({
  title: "Blog | Hermann MOUSSAVOU",
  description:
    "Articles et réflexions sur le développement web, les technologies modernes et les bonnes pratiques. Découvrez mes retours d'expérience et tutoriels techniques.",
  canonical: "/blog",
});

export default function BlogLayout({
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
