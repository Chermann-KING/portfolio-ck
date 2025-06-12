import { FC } from "react";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { BlogPost } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: FC<BlogCardProps> = ({ post }) => {
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
    <Link href={`/blog/${post.slug}`} className="group">
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02] p-0">
        {/* Image de couverture */}
        <div className="relative h-48 sm:h-56 w-full bg-muted">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={post.isHighlighted}
          />
          <div className="absolute top-3 left-3">
            <Badge
              className={`${getCategoryColor(
                post.category
              )} text-white font-semibold`}
            >
              {post.category}
            </Badge>
          </div>
        </div>

        {/* Contenu */}
        <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
          {/* Métadonnées */}
          <div className="flex items-center gap-4 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              {formatDate(post.publishedAt)}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              {post.readingTime}
            </div>
          </div>

          {/* Titre */}
          <h3 className="text-lg sm:text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
            {post.title}
          </h3>

          {/* Extrait */}
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="other" className="text-xs">
                {tag}
              </Badge>
            ))}
            {post.tags.length > 3 && (
              <Badge variant="other" className="text-xs">
                +{post.tags.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};
