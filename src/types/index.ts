import { JSX } from "react";

export interface StatCardProps {
  count: string;
  label: string;
  bgColor?: string;
  color?: string;
}

export type SocialPlatform = "Linkedin" | "Github" | "Twitter" | "Instagram";

export interface SocialLinkProps {
  platform: SocialPlatform;
  icon?: JSX.Element;
  url: string;
}

export interface UserProfile {
  name: string;
  location: {
    address: string;
    imgMap: string;
  };
  bio: string;
  avatar: string;
  stats: {
    yearsExperience: string;
    projectsCount: string;
    clientsCount: string;
  };
  social: SocialLinkProps[];
  skills: {
    [category: string]: string[];
  };
}

export interface PortfolioItemProps {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: "Développement" | "Design" | "Tutoriels" | "Veille Tech";
  publishedAt: string;
  readingTime: string;
  coverImage: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
  isHighlighted: boolean;
}
