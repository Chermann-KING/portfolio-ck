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

type MetadataProps = {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
  project?: {
    title: string;
    description: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    image: string;
    datePublished: string;
  };
};

interface PersonSchema {
  "@context": string;
  "@type": "Person";
  name: string;
  url: string;
  sameAs: string[];
  jobTitle: string;
  description: string;
}

interface WebsiteSchema {
  "@context": string;
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
}

interface ProjectSchema {
  "@context": string;
  "@type": "SoftwareSourceCode";
  name: string;
  description: string;
  programmingLanguage: string[];
  image: string;
  datePublished: string;
  author: {
    "@type": string;
    name: string;
    url: string;
  };
  codeRepository?: string;
  url?: string;
}

type JsonLdSchema = PersonSchema | WebsiteSchema | ProjectSchema;

export function constructMetadata({
  title = "Hermann MOUSSAVOU | Développeur Full Stack",
  description = "Portfolio de Hermann MOUSSAVOU, développeur Full Stack passionné par la création d'applications web modernes et performantes.",
  image = "/images/og-image.png",
  noIndex = false,
  canonical,
  type = "website",
  publishedTime,
  authors = ["Hermann MOUSSAVOU"],
  project,
}: MetadataProps): Metadata {
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

  // Ajout de l'URL canonique si spécifiée
  if (canonical) {
    metadata.alternates = {
      canonical: canonical.startsWith("http")
        ? canonical
        : `${baseUrl}${canonical}`,
    };
  }

  // Préparation des schémas JSON-LD
  const jsonLdSchemas: JsonLdSchema[] = [
    // Schéma de la personne
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Hermann MOUSSAVOU",
      url: baseUrl,
      sameAs: [
        "https://github.com/Chermann-KING",
        "https://www.linkedin.com/in/hermann-moussavou",
      ],
      jobTitle: "Développeur Full Stack",
      description:
        "Développeur Full Stack passionné par la création d'applications web modernes et performantes",
    },
    // Schéma du site web
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Portfolio de Hermann MOUSSAVOU",
      url: baseUrl,
      description:
        "Portfolio professionnel de Hermann MOUSSAVOU, développeur Full Stack",
    },
  ];

  // Ajout du schéma de projet si les informations sont fournies
  if (project) {
    const projectSchema: ProjectSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      name: project.title,
      description: project.description,
      programmingLanguage: project.technologies,
      image: project.image.startsWith("http")
        ? project.image
        : `${baseUrl}${project.image}`,
      datePublished: project.datePublished,
      author: {
        "@type": "Person",
        name: "Hermann MOUSSAVOU",
        url: baseUrl,
      },
    };

    if (project.githubUrl) {
      projectSchema.codeRepository = project.githubUrl;
    }

    if (project.liveUrl) {
      projectSchema.url = project.liveUrl;
    }

    jsonLdSchemas.push(projectSchema);
  }

  // Ajout des schémas JSON-LD aux métadonnées
  metadata.other = {
    "script:ld+json": jsonLdSchemas.map((schema) => JSON.stringify(schema)),
  };

  return metadata;
}
