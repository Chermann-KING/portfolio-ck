import { BlogPost } from "@/types";

const blogPosts: BlogPost[] = [
  {
    slug: "react-19-nouveautes-revolutionnaires",
    title: "React 19 : Les nouveautés révolutionnaires qui changent la donne",
    excerpt:
      "Découvrez les fonctionnalités game-changer de React 19 : Actions, nouveaux hooks, Server Components stables et React Compiler. Une révolution pour l'expérience développeur.",
    content: [
      "React 19 vient de sortir le 5 décembre 2024 et marque une étape historique dans l'évolution de cette bibliothèque incontournable. Après plus de deux ans depuis React 18, cette version majeure apporte des innovations révolutionnaires qui transforment radicalement notre façon de développer des applications web modernes.",

      "Les **Actions** représentent LA révolution de cette version. Fini le cauchemar de la gestion manuelle des états de formulaires ! React 19 introduit un système d'Actions qui automatise la gestion des états `pending`, des erreurs, des mises à jour optimistes et des requêtes séquentielles. Plus besoin de jongler avec `useState` pour chaque état de soumission - React s'occupe de tout.",

      "Les **nouveaux hooks** changent complètement la donne pour l'UX asynchrone. `useActionState` simplifie la gestion des états liés aux Actions, `useFormStatus` permet de suivre l'état d'un formulaire sans prop drilling, et `useOptimistic` rend les mises à jour optimistes d'une simplicité déconcertante. Le hook `use()` révolutionne la gestion des promesses et du contexte avec une syntaxe naturelle.",

      "Les **Server Components** passent enfin en version stable ! Cette architecture révolutionnaire améliore drastiquement les performances initiales en réduisant le bundle JavaScript côté client. L'intégration native avec les frameworks full-stack comme Next.js ouvre des perspectives inédites pour les applications moderne où le serveur et le client collaborent harmonieusement.",

      "**React Compiler** change la philosophie même du développement React. Bien qu'encore en version bêta, cet outil expérimental optimise automatiquement vos applications en gérant la mémoisation sans intervention manuelle. Adieu `useMemo`, `useCallback` et `memo` - le compilateur détecte et optimise les re-renders de façon intelligente.",

      "L'**amélioration des refs** simplifie considérablement l'API. `forwardRef` devient obsolète ! Les refs sont maintenant des props normales pour les composants fonctionnels. Cette simplification élimine une complexité inutile et rend le code plus naturel et lisible.",

      "Les **améliorations de l'hydratation** et des erreurs de développement transforment l'expérience de debugging. Les messages d'erreur sont désormais précis et actionables, vous indiquant exactement où et pourquoi l'hydratation échoue. Fini les messages cryptiques !",

      "React 19 n'est pas qu'une simple mise à jour - c'est une transformation qui positionne React comme l'écosystème de référence pour les applications web de demain. Chaque fonctionnalité a été pensée pour réduire la complexité, améliorer les performances et sublimer l'expérience développeur. L'avenir du web frontend s'écrit maintenant avec React 19 !",
    ],
    category: "Développement",
    publishedAt: "2025-01-13",
    readingTime: "5 min",
    coverImage: "/images/blog/react-19-cover.png",
    tags: ["React", "Actions", "Server Components", "Hooks", "Performance"],
    author: {
      name: "Hermann MOUSSAVOU",
      avatar: "/images/ck-class.png",
    },
    isHighlighted: true,
  },
  {
    slug: "ia-2025-modeles-revolutionnaires",
    title: "IA 2025 : Les modèles qui révolutionnent notre quotidien",
    excerpt:
      "Claude 4, GPT-o3, Gemini 2.5 Pro, Llama 4... Découvrez comment les nouveaux modèles d'IA transforment radicalement le développement logiciel avec des capacités multimodales et de raisonnement révolutionnaires.",
    content: [
      "L'année 2025 marque une **révolution sans précédent** dans l'intelligence artificielle. Les modèles de nouvelle génération ont franchi un cap décisif avec des capacités de raisonnement, de codage et multimodales qui transforment radicalement notre approche du développement et de la création de contenu.",

      "**Claude 4 d'Anthropic redéfinit l'excellence en codage.** Sorti en mai 2025, Claude Opus 4 et Claude Sonnet 4 explosent littéralement les benchmarks avec 72,5% sur SWE-bench Verified, établissant un nouveau standard. Claude Code s'intègre nativement dans VS Code et JetBrains, et GitHub a même choisi Sonnet 4 pour alimenter la nouvelle génération de Copilot. La capacité à travailler en continu pendant plusieurs heures sur des tâches complexes change la donne pour les développeurs.",

      "**OpenAI bouleverse les codes avec sa gamme 2025.** Au-delà de GPT-4o, la famille s'enrichit de GPT-4.1 (contexte 1M tokens), o3 avec 20% d'erreurs en moins, et o4-mini qui domine AIME 2024-2025. Ces modèles de raisonnement intègrent recherche web, exécution de code et outils multiples en temps réel. L'unified thinking révolutionne l'expérience utilisateur.",

      "**Google Gemini 2.5 Pro lance l'ère du 'Deep Think'.** Ce mode de raisonnement approfondi excelle en mathématiques (USAMO 2025) et codage (LiveCodeBench), avec un score impressionnant de 84% sur MMMU. L'intégration multimodale native permet de traiter simultanément texte, images, audio et vidéo. L'assistant Chrome intégré et les 10M de tokens gratuits démocratisent l'accès à l'IA avancée.",

      "**Meta révolutionne l'open source avec Llama 4.** Lancée en avril 2025, cette famille (Scout, Maverick, Behemoth) introduit l'architecture Mixture of Experts avec jusqu'à 2T paramètres. Capacités multimodales natives, contexte jusqu'à 10M tokens pour Scout, et performances rivalisant avec les modèles propriétaires. L'open source démocratise l'IA avancée pour tous les développeurs.",

      "**L'impact sur notre profession est révolutionnaire.** Ces nouveaux modèles transforment chaque aspect du développement : génération de code intelligente, debugging automatisé, architecture assistée par IA, et agents autonomes capables de gérer des projets entiers. Les capacités multimodales ouvrent des perspectives inédites pour les interfaces utilisateur.",

      "**L'humain reste le chef d'orchestre.** Ces IA révolutionnaires excellent comme partenaires, mais la vision créative, l'empathie utilisateur et la stratégie produit demeurent notre domaine d'excellence. La vraie révolution, c'est la collaboration homme-machine qui émerge.",

      "**2025 marque l'avènement de l'IA collaborative.** L'avenir appartient aux développeurs qui maîtrisent ces outils révolutionnaires pour créer des expériences utilisateur inédites. Nous vivons le début d'une nouvelle ère où l'IA ne remplace pas l'humain, mais le sublime. Préparez-vous à redéfinir les limites du possible !",
    ],
    category: "Veille Tech",
    publishedAt: "2025-06-09",
    readingTime: "6 min",
    coverImage: "/images/blog/post-ai-2025-revolution.png",
    tags: [
      "IA",
      "Claude 4",
      "GPT-o3",
      "Gemini 2.5",
      "Llama 4",
      "Développement",
    ],
    author: {
      name: "Hermann MOUSSAVOU",
      avatar: "/images/ck-class.png",
    },
    isHighlighted: true,
  },
  {
    slug: "creation-portfolio-next-js-etapes",
    title:
      "Mon Portfolio Next.js 15 : 6 mois de développement, 10+ défis techniques résolus",
    excerpt:
      "Plongez dans les coulisses de mon portfolio ! De l'architecture App Router aux micro-animations, découvrez mes décisions techniques, mes échecs, mes victoires et les 15+ optimisations qui font la différence.",
    content: [
      "**6 mois. 127 commits. 10+ refactorisations.** Créer un portfolio de développeur en 2025 n'est plus juste une vitrine de projets - c'est un laboratoire technique qui doit prouver votre maîtrise des technologies de pointe. Voici mon retour d'expérience brutalement honnête sur la création de ce site avec Next.js 15, TypeScript et les best practices 2025.",

      "**L'architecture : Passer au peigne fin l'App Router de Next.js 15.** J'ai choisi l'App Router pour ses Server Components natifs et sa génération statique optimisée. Premier défi : migrer ma logique de routage depuis l'ancien système. La structure `app/` révolutionne l'organisation avec `layout.tsx`, `loading.tsx` et `error.tsx` co-localisés. Résultat : 40% de JavaScript client en moins et un Lighthouse score de 98/100.",

      "**Le design system : 47 composants, 3 modes de couleurs, zéro compromis responsive.** Mobile-first obligatoire en 2025 ! J'ai créé un système atomique avec Tailwind CSS : variables CSS custom pour les couleurs, composants polymorphes réutilisables, et une gestion de thème qui persiste côté serveur via cookies. Le mode sombre n'est plus un nice-to-have, c'est un standard. Challenge résolu : éviter le flash de thème au chargement avec `next-themes` et un middleware custom.",

      "**TypeScript strict : Interfaces bulletproof pour 0 bug de typage.** `\"strict\": true` dans tsconfig.json dès le début ! Chaque projet, article de blog et métadonnée a son interface TypeScript. J'ai poussé jusqu'à créer des types discriminants pour différencier mes projets (Open Source vs Client vs Personnel). Code plus sûr, autocomplétion parfaite, refactoring sans stress. La discipline TypeScript paie à long terme.",

      "**SEO 2025 : Métadonnées dynamiques, sitemap auto-généré, et le secret du Open Graph.** Next.js 15 simplifie le SEO avec `generateMetadata()` pour chaque route. J'ai implémenté : génération automatique d'images Open Graph avec `@vercel/og`, sitemap.xml dynamique basé sur mes projets, structured data JSON-LD pour les articles. Résultat : indexation Google en 48h et rich snippets actifs.",

      "**Micro-interactions : L'art subtil de l'engagement utilisateur.** Les animations font la différence entre 'fonctionnel' et 'mémorable'. Framer Motion pour les transitions de page, CSS transforms pour les hovers, intersection observer pour les reveals au scroll. Mon secret : les animations suivent la courbe d'easing Apple (cubic-bezier(0.25, 0.46, 0.45, 0.94)). Attention : toujours respecter `prefers-reduced-motion` !",

      "**Performance : De 82 à 98 sur Lighthouse, voici comment.** Image optimization avec `next/image` et formats WebP/AVIF automatiques. Code splitting intelligent avec `dynamic()` pour les composants lourds. Bundle analyzer pour traquer chaque KB inutile. Secret technique : Server Actions pour les formulaires = zéro JavaScript côté client pour l'envoi de mails. Edge Functions sur Vercel pour une latence minimale.",

      "**Architecture scalable : 6 dossiers, 0 confusion, croissance infinie.** Structure Next.js 15 optimisée : `app/` pour les routes, `components/` modulaires par feature, `lib/` pour les utilitaires, `types/` pour TypeScript, `content/` pour les données statiques. Convention de nommage stricte : PascalCase pour les composants, kebab-case pour les fichiers. Résultat : codebase lisible même après 6 mois sans y toucher.",

      "**Ce portfolio n'est pas une fin, c'est un laboratoire d'innovation permanent.** Chaque feature est une expérimentation technique. Chaque optimisation repousse les limites du possible. En 2025, votre portfolio doit être votre meilleur argument technique - il prouve que vous maîtrisez les technologies de demain. Le code source est sur GitHub : inspirez-vous, forkez, dépassez-moi ! L'excellence technique se partage. 🚀",
    ],
    category: "Tutoriels",
    publishedAt: "2025-05-05",
    readingTime: "8 min",
    coverImage: "/images/blog/home-portfolio.png",
    tags: [
      "Next.js 15",
      "App Router",
      "TypeScript",
      "Portfolio",
      "Performance",
      "SEO",
    ],
    author: {
      name: "Hermann MOUSSAVOU",
      avatar: "/images/ck-class.png",
    },
    isHighlighted: true,
  },
];

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return blogPosts;
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const post = blogPosts.find((p) => p.slug === slug);
  return post || null;
}

export async function getHighlightedBlogPosts(): Promise<BlogPost[]> {
  return blogPosts.filter((post) => post.isHighlighted).slice(0, 3);
}

export async function getBlogPostsByCategory(
  category: string
): Promise<BlogPost[]> {
  return blogPosts.filter((post) => post.category === category);
}
