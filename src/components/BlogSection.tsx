import { FC } from "react";
import { BlogCard } from "./BlogCard";
import { BlogPost } from "@/types";
import { AnimatedCard } from "@/lib/AnimatedCard";
import { Button } from "./ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogSectionProps {
  posts: BlogPost[];
}

export const BlogSection: FC<BlogSectionProps> = ({ posts }) => {
  return (
    <section className="space-y-6 sm:space-y-8">
      <AnimatedCard direction="up" delay={200}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase flex items-center gap-2">
              <span className="w-6 h-px bg-muted-foreground inline-block" />
              Articles
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
              Ce que je partage.{" "}
              <em className="not-italic text-secondary">Librement.</em>
            </h2>
          </div>
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/blog" className="flex items-center gap-2">
              Voir tous les articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </AnimatedCard>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {posts.map((post, index) => (
          <AnimatedCard
            key={post.slug}
            direction="up"
            delay={300 + index * 100}
          >
            <BlogCard post={post} />
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
};
