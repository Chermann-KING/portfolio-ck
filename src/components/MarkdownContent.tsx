"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Image from "next/image";

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="markdown-content prose prose-lg dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          // Titres
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground border-b border-border pb-3">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-semibold mt-6 mb-3 text-foreground">
              {children}
            </h4>
          ),

          // Paragraphes
          p: ({ children }) => (
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              {children}
            </p>
          ),

          // Listes
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-6 space-y-2 text-muted-foreground">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-6 space-y-2 text-muted-foreground">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-lg leading-relaxed ml-4">{children}</li>
          ),

          // Citations
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 italic bg-accent/30 rounded-r-lg">
              {children}
            </blockquote>
          ),

          // Code inline
          code: ({ className, children, ...props }) => {
            const isInline = !className;
            return isInline ? (
              <code
                className="bg-accent text-primary px-2 py-1 rounded text-base font-mono"
                {...props}
              >
                {children}
              </code>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },

          // Blocs de code
          pre: ({ children }) => (
            <pre className="bg-card border border-border rounded-lg p-6 overflow-x-auto my-6 shadow-lg">
              {children}
            </pre>
          ),

          // Liens
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary underline underline-offset-4 font-medium transition-colors"
            >
              {children}
            </a>
          ),

          // Images - Optimized with next/image
          img: ({ src, alt }) => {
            // Pour les images externes (http/https), on garde <img>
            if (typeof src === "string" && src.startsWith("http")) {
              return (
                <img
                  src={src}
                  alt={alt || ""}
                  className="rounded-lg my-8 w-full shadow-lg"
                />
              );
            }
            // Pour les images locales, on utilise next/image
            return (
              <div className="relative w-full my-8">
                <Image
                  src={typeof src === "string" ? src : ""}
                  alt={alt || ""}
                  width={1200}
                  height={675}
                  className="rounded-lg shadow-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
            );
          },

          // Tables
          table: ({ children }) => (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-border">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-border bg-accent px-4 py-2 text-left font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-border px-4 py-2">{children}</td>
          ),

          // Texte fort (gras)
          strong: ({ children }) => (
            <strong className="font-bold text-foreground">{children}</strong>
          ),

          // Texte emphase (italique)
          em: ({ children }) => (
            <em className="italic text-foreground">{children}</em>
          ),

          // Ligne horizontale
          hr: () => <hr className="my-8 border-border" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
