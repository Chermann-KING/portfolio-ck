import { Metadata } from "next";

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

export function constructMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@chermann_king",
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
