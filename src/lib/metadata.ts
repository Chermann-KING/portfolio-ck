import type { Metadata } from "next";

export const siteConfig = {
  name: "Hermann MOUSSAVOU",
  title:
    "Hermann MOUSSAVOU - Développeur Full Stack | Designer UI/UX | Consultant Digital",
  description:
    "Portfolio de Hermann MOUSSAVOU : Développeur Full Stack spécialisé en React, Next.js, Angular et TypeScript. Expert en intégration web, design UI/UX et communication digitale. Plus de 3 ans d'expérience dans la création d'applications web performantes et de solutions digitales innovantes.",
  url: "https://portfolio-ck.vercel.app",
  ogImage: "/images/ck-class.png",
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
  title = "Hermann MOUSSAVOU | Développeur Full Stack | Designer UI/UX | Consultant Digital",
  description = "Portfolio de Hermann MOUSSAVOU : Développeur Full Stack passionné par la création d'applications web modernes et performantes. Expert en React, Next.js, Angular, TypeScript, intégration web, design UI/UX et communication digitale. Spécialisé dans les solutions e-commerce, sites institutionnels et applications métier.",
  image = "/images/ck-class.png",
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
    icons: {
      icon: [
        {
          url: "/favicon.ico",
          sizes: "any",
        },
        {
          url: "/hermann-moussavou-icon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
      ],
      shortcut: "/hermann-moussavou-icon-32x32.png",
      apple: "/hermann-moussavou-icon-32x32.png",
    },
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
      creator: "@chermann_king",
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
