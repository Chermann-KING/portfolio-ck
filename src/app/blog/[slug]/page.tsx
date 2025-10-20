import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { BackButton } from "@/components/ui/BackButton";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog-data";
import { constructMetadata } from "@/lib/metadata";
import { Calendar, Clock, User } from "lucide-react";
import MarkdownContent from "@/components/MarkdownContent";
import type { Metadata } from "next";

export const dynamicParams = true;

type PageParams = {
  slug: string;
};

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (!slug) {
    return constructMetadata({
      title: "Article non trouvé",
      description: "L'article que vous recherchez n'existe pas.",
      noIndex: true,
    });
  }

  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return constructMetadata({
      title: "Article non trouvé",
      description: "L'article que vous recherchez n'existe pas.",
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `${post.title} | Hermann MOUSSAVOU`,
    description: post.excerpt,
    image: post.coverImage,
    canonical: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
    authors: [post.author.name],
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (!slug) {
    notFound();
  }

  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Développement":
        return "bg-blue-500 dark:bg-blue-500";
      case "Design":
        return "bg-purple-500 dark:bg-purple-500";
      case "Tutoriels":
        return "bg-green-500 dark:bg-green-500";
      case "Veille Tech":
        return "bg-orange-500 dark:bg-orange-500";
      default:
        return "bg-gray-500 dark:bg-gray-500";
    }
  };

  return (
    <main className="container mx-auto py-6 sm:py-8 lg:py-12 px-3 sm:px-4">
      <BackButton href="/blog" label="Retour au blog" />

      {/* En-tête de l'article */}
      <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
        <div className="space-y-4 sm:space-y-6">
          <Badge
            className={`${getCategoryColor(
              post.category
            )} text-white font-semibold w-fit`}
          >
            {post.category}
          </Badge>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>

          {/* Métadonnées */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author.name}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.publishedAt)}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readingTime}
            </div>
          </div>
        </div>
      </div>

      {/* Image de couverture */}
      <Card className="mb-8 sm:mb-12 overflow-hidden p-0">
        <div className="relative h-[250px] sm:h-[400px] lg:h-[500px] w-full">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            className="object-cover"
            priority
          />
        </div>
      </Card>

      {/* Contenu de l'article */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-12">
        <article className="lg:col-span-3">
          <MarkdownContent content={post.content} />
        </article>

        {/* Sidebar */}
        <aside className="space-y-6 sm:space-y-8">
          {/* Tags */}
          <Card className="p-4 sm:p-6">
            <h3 className="text-lg font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="other" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Auteur */}
          <Card className="p-4 sm:p-6">
            <h3 className="text-lg font-semibold mb-4">Auteur</h3>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">
                  Développeur Full Stack
                </p>
              </div>
            </div>
          </Card>
        </aside>
      </div>
    </main>
  );
}
