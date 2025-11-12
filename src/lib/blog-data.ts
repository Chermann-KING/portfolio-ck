import { BlogPost } from "@/types";

// ✅ Un seul import pour TOUS les articles via le barrel export !
import { allArticles } from "./data/articles";

/**
 * Vérifie si un article doit être publié en fonction de sa date de publication.
 * @param publishedAt - Date de publication au format YYYY-MM-DD
 * @returns true si l'article doit être visible, false sinon
 */
function isPublished(publishedAt: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Réinitialise à minuit pour comparer uniquement les dates

  const publishDate = new Date(publishedAt);
  publishDate.setHours(0, 0, 0, 0);

  return publishDate <= today;
}

/**
 * Filtre les articles pour ne retourner que ceux qui sont publiés.
 * Articles avec une date future ne sont pas visibles.
 * @param posts - Tableau d'articles à filtrer
 * @returns Tableau d'articles publiés uniquement
 */
function filterPublishedPosts(posts: BlogPost[]): BlogPost[] {
  return posts.filter((post) => isPublished(post.publishedAt));
}

const blogPosts: BlogPost[] = allArticles;

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return filterPublishedPosts(blogPosts);
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post || !isPublished(post.publishedAt)) {
    return null;
  }

  return post;
}

export async function getHighlightedBlogPosts(): Promise<BlogPost[]> {
  return filterPublishedPosts(blogPosts)
    .filter((post) => post.isHighlighted)
    .slice(0, 3);
}

export async function getBlogPostsByCategory(
  category: string
): Promise<BlogPost[]> {
  return filterPublishedPosts(blogPosts).filter(
    (post) => post.category === category
  );
}
