import type { Metadata } from "next";

export const siteConfig = {
  name: "Hermann MOUSSAVOU",
  title: "Hermann MOUSSAVOU - Développeur Fullstack",
  description:
    "Portfolio de développeur fullstack spécialisé en React, Next.js, Node.js Angular et TypeScript. Découvrez mes projets et compétences en développement web.",
  url: "https://portfolio-ck.vercel.app",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/chermann_king",
    github: "https://github.com/Chermann-KING",
    linkedin: "https://www.linkedin.com/in/hermann-moussavou/",
  },
} as const;

type MetadataOptions = {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
};

export function constructMetadata({
  title = "Hermann MOUSSAVOU | Développeur Full Stack",
  description = "Portfolio de Hermann MOUSSAVOU, développeur Full Stack passionné par la création d'applications web modernes et performantes.",
  image = "/images/og-image.png",
  noIndex = false,
  canonical,
  type = "website",
  publishedTime,
  authors = ["Hermann MOUSSAVOU"],
}: MetadataOptions = {}): Metadata {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://portfolio-ck.vercel.app";

  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image.startsWith("http") ? image : `${baseUrl}${image}`,
        },
      ],
      type,
      publishedTime,
      authors,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.startsWith("http") ? image : `${baseUrl}${image}`],
      creator: "@HermannMOUSSAVOU",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
  };

  if (canonical) {
    metadata.alternates = {
      canonical: canonical.startsWith("http")
        ? canonical
        : `${baseUrl}${canonical}`,
    };
  }

  return metadata;
}
