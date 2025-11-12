import { BlogPost } from "@/types";

export const designSystemFigmaReactTailwind2025Article: BlogPost = {
  slug: "design-system-figma-react-tailwind-2025",
  title:
    "Design System Figma 2025 : Du prototype au code React/Tailwind (workflow professionnel complet)",
  excerpt:
    "Maîtrisez le workflow Design-to-Code moderne : Variables Figma, Design Tokens, Auto Layout responsive et conversion automatique vers React + Tailwind CSS. Le guide complet pour designers et développeurs en 2025.",
  content: `En tant que **développeur Full Stack** et **designer UI/UX**, j'ai longtemps cherché le **workflow parfait** entre Figma et React. Celui qui évite les allers-retours infinis, les incohérences visuelles et les "ça ne ressemble pas au design" en production.

Après avoir créé **5+ design systems** pour des projets réels (dont mon propre portfolio), j'ai enfin trouvé une méthodologie qui fonctionne. Voici le guide complet que j'utilise au quotidien.

## Pourquoi 90% des design systems échouent

### Le problème classique

Designer : *"Voici le design Figma !"*
Développeur : *"Ok, je vais recréer ça en code..."*
**2 semaines plus tard** : Les couleurs ne matchent pas, les espacements sont approximatifs, et le mode sombre est cassé.

**Pourquoi ?** Parce qu'il n'y a **aucun système** pour synchroniser design et code.

### La solution 2025 : Design Tokens + Variables

Les **Design Tokens** sont le pont entre design et développement. Ils transforment vos décisions visuelles en valeurs réutilisables dans Figma ET dans votre code.

\`\`\`
Figma Variables → Design Tokens → CSS Variables → Tailwind Config
\`\`\`

> 🎯 **Règle d'or** : Une seule source de vérité. Le design système n'est pas dans Figma OU dans le code - il est dans **les deux** et synchronisé.

## Partie 1 : Créer un Design System scalable dans Figma

### Architecture des Variables (2025)

Figma supporte maintenant **7 types de variables** :

| Type | Usage | Exemple |
|------|-------|---------|
| **Number** | Spacing, sizing, opacity | \`spacing-4: 16px\` |
| **Color** | Couleurs primitives et sémantiques | \`color-primary-500\` |
| **String** | Labels, unités CSS | \`font-family: "Inter"\` |
| **Boolean** | États on/off | \`has-shadow: true\` |
| **Alias** | Référence à d'autres variables | \`bg-primary → color-blue-500\` |

### Structure recommandée : Primitive vs Semantic

\`\`\`
📦 Primitives (fondations)
├── Colors
│   ├── gray-50 → #F9FAFB
│   ├── gray-100 → #F3F4F6
│   ├── blue-500 → #3B82F6
│   └── blue-600 → #2563EB
├── Spacing
│   ├── space-1 → 4px
│   ├── space-2 → 8px
│   ├── space-4 → 16px
│   └── space-6 → 24px
└── Typography
    ├── font-size-sm → 14px
    └── font-size-base → 16px

📦 Semantic (contextuels)
├── bg-primary → {blue-500}
├── bg-secondary → {gray-100}
├── text-primary → {gray-900}
└── border-default → {gray-200}
\`\`\`

**Pourquoi cette séparation ?**
- ✅ **Primitives** : Valeurs brutes, immuables
- ✅ **Semantic** : Sens métier, adaptables par thème

### Modes pour le Dark Mode (killer feature)

\`\`\`
Collection : Semantic Colors
├── Mode: Light
│   ├── bg-primary → {gray-50}
│   └── text-primary → {gray-900}
└── Mode: Dark
    ├── bg-primary → {gray-900}
    └── text-primary → {gray-50}
\`\`\`

**Un seul toggle** dans Figma = tout votre design bascule en mode sombre ! 🌙

> 📚 **Ressource** : [Figma Variables Guide](https://help.figma.com/hc/en-us/articles/15339657135383)

## Partie 2 : Auto Layout pour un design responsive

### Les 5 règles d'or de l'Auto Layout

#### 1. Pensez "Fill Container" avant "Fixed Width"

\`\`\`
❌ Mauvais : width = 1440px (fixed)
✅ Bon : Horizontal resizing = Fill container
\`\`\`

#### 2. Utilisez le Grid Layout (nouveauté 2025)

Le **Grid Auto Layout** est un game-changer pour les responsive cards :

\`\`\`
Container (Auto Layout Grid)
├── Columns: Auto (min 300px)
├── Gap: 24px
└── Items: Cards (stretch)
\`\`\`

**Résultat** : 3 colonnes sur desktop → 2 sur tablet → 1 sur mobile. Automatiquement.

#### 3. Maîtrisez Padding vs Gap

- **Padding** : Espace interne (entre le contenu et le bord)
- **Gap** : Espace entre les éléments enfants

\`\`\`
Card (Auto Layout Vertical)
├── Padding: 24px (tous les côtés)
├── Gap: 16px (entre titre et description)
└── Items:
    ├── Title
    └── Description
\`\`\`

#### 4. Nested Auto Layouts = Layouts complexes

\`\`\`
Header (Horizontal, space-between)
├── Logo (Fixed)
└── Nav (Horizontal, gap: 32px)
    ├── Link 1
    ├── Link 2
    └── Button (Fill)
\`\`\`

#### 5. Utilisez "Hug Contents" intelligemment

- **Hug** : Le container s'adapte au contenu (ex: boutons)
- **Fill** : Le contenu remplit le container (ex: input full-width)

> 🎯 **Astuce Pro** : Testez toujours votre design en le redimensionnant. Si ça casse, votre Auto Layout n'est pas bon.

### Component-based Design System

**Structure recommandée** :

\`\`\`
🎨 Design System File
├── 📦 Foundations
│   ├── Colors (variables)
│   ├── Typography (text styles)
│   └── Spacing (variables)
├── 🧩 Components
│   ├── Button (variants: primary, secondary, ghost)
│   ├── Input (states: default, focus, error)
│   ├── Card (responsive auto layout)
│   └── Badge (sizes: sm, md, lg)
└── 📄 Pages
    └── Homepage (instances)
\`\`\`

**Avantages** :
- ✅ Changement dans le composant = update partout
- ✅ Consistency garantie
- ✅ Handoff développeur facilité

## Partie 3 : Design Tokens → CSS Variables

### Exporter vos Variables Figma

Plusieurs méthodes en 2025 :

#### Option 1 : Export manuel (petits projets)

1. Sélectionnez vos variables dans Figma
2. Clic droit → "Copy as CSS"
3. Collez dans votre fichier CSS

\`\`\`css
/* globals.css */
:root {
  /* Primitives */
  --color-gray-50: #F9FAFB;
  --color-gray-900: #111827;
  --color-blue-500: #3B82F6;

  /* Semantic */
  --bg-primary: var(--color-gray-50);
  --text-primary: var(--color-gray-900);
}

[data-theme="dark"] {
  --bg-primary: var(--color-gray-900);
  --text-primary: var(--color-gray-50);
}
\`\`\`

#### Option 2 : Style Dictionary (recommandé pour teams)

\`\`\`bash
npm install style-dictionary
\`\`\`

\`\`\`javascript
// config.js
module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/styles/',
      files: [{
        destination: 'tokens.css',
        format: 'css/variables'
      }]
    },
    tailwind: {
      transformGroup: 'js',
      buildPath: 'src/',
      files: [{
        destination: 'tailwind-tokens.js',
        format: 'javascript/es6'
      }]
    }
  }
}
\`\`\`

**Pipeline automatisé** :
\`\`\`
Figma → Plugin Export → tokens.json → Style Dictionary → CSS + Tailwind
\`\`\`

> 📚 **Ressource** : [Style Dictionary Documentation](https://styledictionary.com/)

## Partie 4 : Figma to React + Tailwind (automatisation)

### Les 3 outils que j'utilise en production

#### 1. **Anima Frontier**

**Pourquoi c'est bon** :
- ✅ Détecte votre \`tailwind.config.js\`
- ✅ Génère du code propre (pas de \`div\` soup)
- ✅ Intégration VS Code directe
- ✅ Respecte vos composants existants

\`\`\`bash
npm install -g @animaapp/anima-cli
anima sync --project=mon-design
\`\`\`

**Résultat** :

\`\`\`typescript
// Avant (export basique)
<div style={{backgroundColor: "#3B82F6", padding: "16px"}}>
  <p style={{fontSize: "14px"}}>Hello</p>
</div>

// Après (Anima + Tailwind)
<div className="bg-blue-500 p-4">
  <p className="text-sm">Hello</p>
</div>
\`\`\`

> 🔗 **Lien** : [Anima Figma to Code](https://www.animaapp.com/)

#### 2. **Builder.io Visual Copilot**

**Points forts** :
- ✅ Support React, Vue, Svelte, Angular
- ✅ CLI workflow puissant
- ✅ Mapping de composants custom

\`\`\`bash
npx @builder.io/cli@latest import figma
\`\`\`

\`\`\`typescript
// Peut mapper vers vos composants existants
<Button variant="primary" size="lg">
  Click me
</Button>
\`\`\`

#### 3. **Locofy** (pour les apps complexes)

**Idéal pour** :
- 🎯 Applications avec routing
- 🎯 Data binding vers API
- 🎯 State management

### Workflow hybride (ce que je fais vraiment)

**80% Auto-généré + 20% Manuel**

1. **Export Figma → React** avec Anima (structure & styles)
2. **Refactor manuel** :
   - Extraire la logique
   - Ajouter les types TypeScript
   - Connecter aux APIs
   - Optimiser les performances

\`\`\`jsx
// Code généré par Anima
export function ProductCard({ image, title, price }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
      <h3 className="text-lg font-bold mt-4">{title}</h3>
      <p className="text-2xl font-bold text-blue-600 mt-2">\${price}</p>
    </div>
  )
}

// Après refactor manuel
import Image from 'next/image'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
  onAddToCart: (id: string) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={200}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-lg font-bold mt-4 text-gray-900 dark:text-gray-100">
        {product.title}
      </h3>
      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-2">
        {\`$\${product.price.toFixed(2)}\`}
      </p>
      <button
        onClick={() => onAddToCart(product.id)}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
      >
        Ajouter au panier
      </button>
    </div>
  )
}
\`\`\`

**Ce que j'ai amélioré** :
- ✅ Next.js Image component (optimisation)
- ✅ TypeScript types stricts
- ✅ Dark mode support
- ✅ Interactions (hover, click)
- ✅ Accessibilité (alt text sémantique)

## Partie 5 : Synchronisation Figma ↔ Tailwind Config

### La config Tailwind ultime

\`\`\`javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class', // ou 'media'
  theme: {
    extend: {
      colors: {
        // Importez depuis vos Design Tokens
        primary: {
          50: 'rgb(var(--color-primary-50) / <alpha-value>)',
          500: 'rgb(var(--color-primary-500) / <alpha-value>)',
          900: 'rgb(var(--color-primary-900) / <alpha-value>)',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          900: '#111827',
        },
      },
      spacing: {
        // Exactement comme dans Figma
        '1': '4px',
        '2': '8px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
      },
      borderRadius: {
        'none': '0',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '24px' }],
        'lg': ['18px', { lineHeight: '28px' }],
      },
    },
  },
}
\`\`\`

### Plugin Figma Tokens (automation poussée)

\`\`\`bash
# 1. Installer le plugin "Figma Tokens" dans Figma
# 2. Exporter les tokens en JSON
# 3. Transformer en Tailwind config
\`\`\`

\`\`\`json
// tokens.json (exporté depuis Figma)
{
  "color": {
    "primary": {
      "500": {
        "value": "#3B82F6",
        "type": "color"
      }
    }
  }
}
\`\`\`

\`\`\`javascript
// Script de transformation
const tokens = require('./tokens.json')

const tailwindColors = Object.entries(tokens.color).reduce((acc, [name, shades]) => {
  acc[name] = Object.entries(shades).reduce((shadeAcc, [key, { value }]) => {
    shadeAcc[key] = value
    return shadeAcc
  }, {})
  return acc
}, {})

// Génère automatiquement tailwind.config.js
\`\`\`

## Partie 6 : Component Library dans Figma

### Structure professionnelle

\`\`\`
📁 Design System
├── 📄 _Foundations
│   └── Variables, Styles, Grid
├── 📄 Components/Atoms
│   ├── Button
│   ├── Input
│   ├── Badge
│   └── Icon
├── 📄 Components/Molecules
│   ├── InputGroup
│   ├── Card
│   └── Stat
├── 📄 Components/Organisms
│   ├── Header
│   ├── Footer
│   └── ProductGrid
└── 📄 Pages
    └── Homepage, Dashboard...
\`\`\`

### Conventions de nommage

\`\`\`
Component/Variant/State

Button/Primary/Default
Button/Primary/Hover
Button/Secondary/Disabled
Input/Default/Focus
Input/Error/Default
\`\`\`

**Bénéfice** : Mapping automatique vers React components

\`\`\`typescript
<Button variant="primary" state="hover" />
\`\`\`

## Mon workflow Design-to-Code complet

### Étape 1 : Design dans Figma (2-3 jours)
1. ✅ Définir les Variables (primitives + semantic)
2. ✅ Créer les composants avec Auto Layout
3. ✅ Tester la responsive (redimensionner les frames)
4. ✅ Valider l'accessibilité (contrast ratio)

### Étape 2 : Export Design Tokens (1h)
1. ✅ Exporter les variables en JSON
2. ✅ Générer les CSS Variables
3. ✅ Mettre à jour \`tailwind.config.js\`

### Étape 3 : Conversion Figma → React (2-4h)
1. ✅ Export automatique avec Anima
2. ✅ Revue du code généré
3. ✅ Refactor manuel (types, logic, optimisations)

### Étape 4 : Intégration & Tests (1-2 jours)
1. ✅ Connecter aux APIs
2. ✅ Tester responsive réel (Chromatic, Percy)
3. ✅ Valider accessibilité (Lighthouse, axe)

**Total** : ~1 semaine au lieu de 3 semaines sans système ! ⚡

## Erreurs à éviter (lessons learned)

### 1. Ne pas synchroniser Figma et Code

**Problème** : Le design évolue dans Figma, mais pas dans le code.

**Solution** : Versionning des Design Tokens + CI/CD

\`\`\`yaml
# .github/workflows/sync-tokens.yml
name: Sync Design Tokens
on:
  push:
    paths:
      - 'design-tokens/**'
jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm run build:tokens
      - run: npm run test
\`\`\`

### 2. Trop de variantes de composants

**Problème** : 15 variants de Button → code ingérable

**Solution** : Props composition

\`\`\`typescript
// ❌ Trop de variants
Button/Primary/Small
Button/Primary/Medium
Button/Primary/Large
Button/Secondary/Small
...

// ✅ Composition
<Button variant="primary" size="small" />
\`\`\`

### 3. Ignorer l'accessibilité

**Checklist avant export** :
- [ ] Contrast ratio ≥ 4.5:1 (texte normal)
- [ ] Contrast ratio ≥ 3:1 (texte large)
- [ ] Focus states visibles
- [ ] Textes alternatifs pour images
- [ ] Ordre de tabulation logique

> 🔗 **Outil** : [Stark Plugin Figma](https://www.getstark.co/)

## Outils essentiels 2025

### Figma Plugins indispensables

| Plugin | Usage | Gratuit ? |
|--------|-------|-----------|
| **Stark** | Accessibilité & contraste | ✅ |
| **Anima** | Figma to React/HTML | Freemium |
| **Figma Tokens** | Export Design Tokens | ✅ |
| **AutoFlow** | Diagrammes de flux | ✅ |
| **Unsplash** | Images de qualité | ✅ |

### Stack technique recommandée

- **Figma** : Design & prototyping
- **Tailwind CSS** : Styling framework
- **Style Dictionary** : Token transformation
- **Storybook** : Component documentation
- **Chromatic** : Visual regression testing

## Ressources pour aller plus loin

### Documentation officielle
- 📚 [Figma Variables Guide](https://help.figma.com/hc/en-us/articles/15339657135383)
- 🎨 [Figma Auto Layout](https://help.figma.com/hc/en-us/articles/360040451373)
- 🔧 [Style Dictionary](https://amzn.github.io/style-dictionary/)

### Outils & Plugins
- 🚀 [Anima Figma to Code](https://www.animaapp.com/)
- 🎯 [Builder.io Visual Copilot](https://www.builder.io/)
- 🛠️ [Figma Tokens Plugin](https://www.figmatokens.com/)
- ♿ [Stark Accessibility](https://www.getstark.co/)

### Design Systems inspirants
- 🎨 [Material Design 3](https://m3.material.io/)
- 🔵 [IBM Carbon](https://carbondesignsystem.com/)
- 🟣 [Shopify Polaris](https://polaris.shopify.com/)
- 🟠 [Atlassian Design System](https://atlassian.design/)

## Conclusion : Le Design System n'est pas une fin

Un Design System n'est **jamais terminé**. C'est un **produit vivant** qui évolue avec votre application.

**Les 3 piliers du succès** :
1. 🎨 **Design Tokens** pour la cohérence
2. 🤝 **Synchronisation** Design ↔ Code
3. 📚 **Documentation** pour l'adoption

En 2025, le workflow Figma → React + Tailwind est **mature et production-ready**. Les outils existent. Les patterns sont établis. Il ne reste plus qu'à les appliquer.

**Mon conseil final** : Commencez petit. Créez 5 composants atomiques bien faits plutôt que 50 composants mal structurés. La qualité avant la quantité.

Un bon Design System transforme votre **vitesse de développement** et garantit une **expérience utilisateur cohérente**. C'est l'investissement le plus rentable que vous puissiez faire.

**Prêt à créer votre Design System ?** Commencez par définir vos Variables Figma. Le reste suivra naturellement. 🎨✨`,
  category: "Design",
  publishedAt: "2025-11-03",
  readingTime: "16 min",
  coverImage: "/images/blog/figma-design-system-cover.png",
  tags: [
    "Figma",
    "Design System",
    "React",
    "Tailwind CSS",
    "Design Tokens",
    "UI/UX",
    "Auto Layout",
  ],
  author: {
    name: "Hermann MOUSSAVOU",
    avatar: "/images/ck-class.png",
    role: "Développeur Full-Stack",
  },
  isHighlighted: true,
};
