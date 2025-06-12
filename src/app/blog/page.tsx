"use client";

import { useState, useEffect } from "react";
import { getAllBlogPosts } from "@/lib/blog-data";
import { BlogCard } from "@/components/BlogCard";
import { AnimatedCard } from "@/lib/AnimatedCard";
import { Badge } from "@/components/ui/Badge";
import { BackButton } from "@/components/ui/BackButton";
import { BlogPost } from "@/types";

const categories = ["Développement", "Design", "Tutoriels", "Veille Tech"];

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  useEffect(() => {
    const loadPosts = async () => {
      const allPosts = await getAllBlogPosts();
      setPosts(allPosts);
      setFilteredPosts(allPosts);
    };
    loadPosts();
  }, []);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    if (filter === "all") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter((post) => post.category === filter));
    }
  };

  return (
    <main className="container mx-auto py-6 sm:py-8 lg:py-12 px-3 sm:px-4 space-y-8 sm:space-y-12">
      <BackButton href="/" label="Retour à l'accueil" />
      {/* Header */}
      <AnimatedCard direction="up" delay={100}>
        <div className="text-left  sm:text-center space-y-4 sm:space-y-6 -mt-10 sm:-mt-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Blog</h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Mes réflexions et expériences sur le développement web, les
            nouvelles technologies et les bonnes pratiques du métier
          </p>
        </div>
      </AnimatedCard>

      {/* Filtres par catégorie */}
      <AnimatedCard direction="up" delay={200}>
        <div className="flex flex-wrap justify-start sm:justify-center gap-2 sm:gap-3">
          <Badge
            variant={activeFilter === "all" ? "default" : "other"}
            className="cursor-pointer hover:bg-muted transition-colors"
            onClick={() => handleFilterChange("all")}
          >
            Tous les articles
          </Badge>
          {categories.map((category) => (
            <Badge
              key={category}
              variant={activeFilter === category ? "default" : "other"}
              className="cursor-pointer hover:bg-muted transition-colors"
              onClick={() => handleFilterChange(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </AnimatedCard>

      {/* Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredPosts.map((post, index) => (
          <AnimatedCard
            key={post.slug}
            direction="up"
            delay={300 + index * 100}
          >
            <BlogCard post={post} />
          </AnimatedCard>
        ))}
      </div>

      {/* Message si aucun article */}
      {filteredPosts.length === 0 && activeFilter !== "all" && (
        <AnimatedCard direction="up" delay={300}>
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Aucun article trouvé pour cette catégorie.
            </p>
          </div>
        </AnimatedCard>
      )}

      {posts.length === 0 && (
        <AnimatedCard direction="up" delay={300}>
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              Aucun article disponible pour le moment.
            </p>
          </div>
        </AnimatedCard>
      )}
    </main>
  );
}
