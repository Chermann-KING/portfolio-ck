import { AnimatedCard } from "@/lib/AnimatedCard";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { ArrowRight, Globe, Smartphone, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type BadgeVariant = "frontend" | "backend" | "other" | "default";

interface ServiceColors {
  icon: string;
  iconBg: string;
  badgeVariant: BadgeVariant;
  cta: string;
  accent: string;
}

const colorMap: Record<string, ServiceColors> = {
  primary: {
    icon: "text-primary",
    iconBg: "bg-primary/10",
    badgeVariant: "default",
    cta: "bg-primary hover:bg-primary/90",
    accent: "text-secondary",
  },
};

interface Service {
  number: string;
  category: string;
  Icon: LucideIcon;
  colorKey: string;
  title: string;
  badge: string | null;
  description: string;
  deliverables: string[];
  price: string;
  duration: string;
  cta: string;
  href: string;
}

const services: Service[] = [
  {
    number: "01",
    category: "DÉVELOPPEMENT WEB",
    Icon: Globe,
    colorKey: "primary",
    title: "Un produit web qui tient la route.",
    badge: "Le plus demandé",
    description:
      "Votre idée mérite une base solide. Je construis l'interface et l'API — vous livrez un produit qui tient la charge dès le premier utilisateur.",
    deliverables: [
      "SaaS & outils métier",
      "Sites & CMS",
      "E-commerce",
      "API & intégrations",
      "Portails clients",
    ],
    price: "2 000 €",
    duration: "Forfait · 4–8 semaines",
    cta: "Démarrer un projet",
    href: "/contact",
  },
  {
    number: "02",
    category: "DÉVELOPPEMENT MOBILE",
    Icon: Smartphone,
    colorKey: "primary",
    title: "iOS & Android, sans compromis.",
    badge: "Clé en main",
    description:
      "Une seule codebase, deux stores. Votre app arrive sur iOS et Android sans doubler le budget ni le délai.",
    deliverables: [
      "React Native & Expo",
      "Flutter",
      "Commerce & fintech",
      "Santé & social",
      "iOS & Android",
    ],
    price: "4 000 €",
    duration: "Forfait · 6–10 semaines",
    cta: "Démarrer un projet",
    href: "/contact",
  },
  {
    number: "03",
    category: "DESIGN & INTÉGRATION",
    Icon: Layers,
    colorKey: "primary",
    title: "L'interface qui donne envie de cliquer.",
    badge: null,
    description:
      "Vous avez une maquette — ou juste une idée. Je prends le relais : pixel-perfect, animé, responsive.",
    deliverables: [
      "Figma → code",
      "Design system",
      "Animations",
      "Responsive mobile-first",
      "Design sur mesure",
    ],
    price: "1 500 €",
    duration: "Forfait · 2–4 semaines",
    cta: "Démarrer",
    href: "/contact",
  },
];

export function ServicesSection() {
  return (
    <AnimatedCard direction="up" delay={200}>
      <div id="services" className="space-y-6 sm:space-y-8">
        {/* En-tête */}
        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase flex items-center gap-2">
            <span className="w-6 h-px bg-muted-foreground inline-block" />
            Mes services
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
            Ce que je fais.{" "}
            <em className="not-italic text-secondary">Bien fait.</em>
          </h2>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {services.map(({ number, category, Icon, colorKey, title, badge, description, deliverables, price, duration, cta, href }) => {
            const color = colorMap[colorKey];
            return (
              <div
                key={number}
                className="flex flex-col gap-4 p-5 rounded-xl sm:rounded-2xl border border-border/40 bg-card shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                {/* Icône */}
                <div className={`w-10 h-10 rounded-xl ${color.iconBg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${color.icon}`} />
                </div>

                {/* Numéro + catégorie + badge sur la même ligne */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-muted-foreground/30">{number}</span>
                    <span className={`text-[10px] font-semibold tracking-widest uppercase ${color.accent}`}>
                      {category}
                    </span>
                  </div>
                  {badge && (
                    <Badge variant={color.badgeVariant}>{badge}</Badge>
                  )}
                </div>

                {/* Titre */}
                <h3 className="font-bold text-lg text-foreground leading-snug">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>

                {/* Livrables en chips */}
                <div className="flex flex-wrap gap-1.5">
                  {deliverables.map((item) => (
                    <Badge key={item} variant={color.badgeVariant} className="rounded-full py-1">
                      {item}
                    </Badge>
                  ))}
                </div>

                {/* Espaceur — pousse le prix vers le bas */}
                <div className="flex-1" />

                {/* Prix */}
                <div className="pt-3 border-t border-border space-y-0.5">
                  <p className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                    À partir de
                  </p>
                  <p className={`text-2xl font-bold ${color.accent}`}>{price}</p>
                  <p className="text-xs text-muted-foreground">{duration}</p>
                </div>

                {/* CTA */}
                <Link
                  href={href}
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white ${color.cta} transition-all duration-200 active:scale-95`}
                >
                  {cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedCard>
  );
}
