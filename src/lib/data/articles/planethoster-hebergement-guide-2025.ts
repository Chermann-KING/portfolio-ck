import { BlogPost } from "@/types";

export const planethosterHebergementGuide2025Article: BlogPost = {
  slug: "planethoster-hebergement-applications-nodejs-php-python-2025",
  title:
    "PlanetHoster 2025 : Guide complet - Langages supportés, types d'applications et déploiement Node.js étape par étape",
  excerpt:
    "Découvrez quels langages (PHP 8.4, Node.js, Python, Ruby) et applications (e-commerce, SaaS, dashboards) héberger sur PlanetHoster. Guide complet avec tutoriel de déploiement Node.js/Next.js via N0C, comparatif des offres The World vs HybridCloud.",
  content: `
# PlanetHoster 2025 : Le guide complet de l'hébergement multi-langages

## Introduction : Pourquoi PlanetHoster ?

**PlanetHoster** est un hébergeur web canadien qui se distingue par sa **polyvalence technique** et son support natif de nombreux langages modernes. Contrairement aux hébergeurs traditionnels limités à PHP/MySQL, PlanetHoster permet d'héberger des applications **Node.js, Python, Ruby** et bien plus.

**Ce que vous allez apprendre** :
- ✅ Langages et frameworks officiellement supportés
- ✅ Types d'applications hébergeables (e-commerce, SaaS, dashboards)
- ✅ Comparatif des offres (The World, The World Pro, HybridCloud)
- ✅ Tutoriel complet : déployer une app Node.js/Next.js étape par étape

---

## 1. Langages de programmation supportés

PlanetHoster prend en charge plusieurs environnements et langages populaires, adaptés aussi bien aux développeurs débutants qu'aux projets avancés.

### 📦 Stack technique complète

| Langage | Versions supportées | Use cases |
|---------|---------------------|-----------|
| **PHP** | 5.1 à 8.4 | WordPress, Laravel, Symfony, PrestaShop |
| **Node.js** | 14, 16, 18, 20, 22 | Next.js, Express, NestJS, API REST |
| **Python** | 3.6 à 3.11 | Django, Flask, FastAPI, scripts ML |
| **Ruby** | 2.7 à 3.2 | Ruby on Rails, Sinatra, Jekyll |
| **Perl** | 5.x | Scripts CGI, applications legacy |
| **Bash/Shell** | Via SSH | Automatisation, cron jobs |

### 🗄️ Bases de données

- **MariaDB / MySQL** (versions 5.5 à 10.11)
- **PostgreSQL** (sur demande, offre HybridCloud)
- **SQLite** (via scripts Python/Node.js)

### 🔧 Outils et accès

- ✅ **SSH complet** (bash, vim, git, composer, npm)
- ✅ **FTP/SFTP** (FileZilla, WinSCP)
- ✅ **Cron jobs** (tâches planifiées)
- ✅ **API REST** (GET, POST, PUT, PATCH, DELETE)
- ✅ **N0C** (panneau de contrôle propriétaire)

---

## 2. Frameworks officiellement pris en charge

PlanetHoster **ne limite pas les frameworks** utilisés ; il autorise tout framework compatible avec les langages listés, grâce à son environnement flexible.

### 🐘 Frameworks PHP

- **Laravel** (versions 8 à 11)
- **Symfony** (5.x, 6.x, 7.x)
- **CodeIgniter** (3.x, 4.x)
- **CakePHP** (4.x, 5.x)
- **Slim Framework** (micro-framework API)

### 🟢 Frameworks Node.js

- **Next.js** (13, 14, 15 - SSR, SSG, ISR)
- **Express.js** (API REST classiques)
- **NestJS** (architecture enterprise)
- **Fastify** (ultra-rapide)
- **Nuxt.js** (Vue.js SSR)

### 🐍 Frameworks Python

- **Django** (3.x, 4.x, 5.x)
- **Flask** (micro-framework)
- **FastAPI** (API async haute performance)
- **Pyramid** (full-stack)

### 💎 Frameworks Ruby

- **Ruby on Rails** (6.x, 7.x)
- **Sinatra** (micro-framework)
- **Hanami** (architecture modulaire)

### ⚛️ Frameworks Front-end

Les applications front-end compilées (SPA) sont supportées :

- **React** (Create React App, Vite)
- **Vue.js** (Vue CLI, Vite)
- **Angular** (12+)
- **Svelte** (SvelteKit)

**Déploiement** : Upload du dossier \`build\` ou \`dist\` via SFTP, configuration comme site statique.

---

## 3. Types et catégories d'applications hébergeables

PlanetHoster supporte de nombreuses catégories de sites web et d'applications, allant des CMS classiques aux applications métiers spécifiques.

### 🛒 E-commerce

- **WooCommerce** (WordPress + WooCommerce)
- **PrestaShop** (1.7.x, 8.x)
- **Magento** (2.4.x - nécessite HybridCloud)
- **Shopify Hydrogen** (Next.js + Shopify API)
- **Medusa.js** (Node.js headless e-commerce)

**Recommandation offre** : The World pour <1000 produits, HybridCloud pour boutiques moyennes/grandes.

### 📝 Blogs et CMS

- **WordPress** (hébergement optimisé, auto-installer)
- **Ghost** (Node.js, blog moderne)
- **Drupal** (9.x, 10.x)
- **Joomla** (4.x, 5.x)
- **Strapi** (Node.js headless CMS)

### 📊 Dashboards et applications métiers

- **Dashboards analytics** : Django + PostgreSQL, Express + MongoDB
- **CRM maison** : Laravel + Vue.js, NestJS + React
- **Outils internes** : Flask + SQLite, Ruby on Rails
- **Admin panels** : React Admin, AdminJS (Node.js)

**Use case réel** : Dashboard de gestion de flotte (Node.js + PostgreSQL) hébergé sur HybridCloud.

### 🌐 Sites vitrines et institutionnels

- **WordPress** (thèmes Elementor, Divi)
- **HTML/CSS statique**
- **Next.js** (marketing sites avec SEO optimisé)
- **Jekyll** (Ruby, génération statique)

### 💬 Forums et communautés

- **Discourse** (Ruby on Rails, forum moderne)
- **phpBB** (forum PHP classique)
- **Flarum** (PHP, interface moderne)
- **NodeBB** (Node.js, forum temps réel)

### 🎨 Portfolios et landing pages

- **Astro** (framework ultra-rapide)
- **Gatsby** (React SSG)
- **Hugo** (Go, génération statique)
- **Next.js** (portfolio + blog intégré)

### 🔌 Applications API / Backend

- **API REST** : Express, FastAPI, Laravel API
- **GraphQL** : Apollo Server (Node.js), Hasura
- **WebSockets** : Socket.io, Django Channels
- **Microservices** : NestJS, Flask + Redis

**Offre recommandée** : HybridCloud pour APIs haute disponibilité.

### 🏢 Intranets et outils collaboratifs

- **Intranet** : Drupal, SharePoint (via VM)
- **Sondages** : LimeSurvey (PHP)
- **Livres d'or** : Scripts PHP custom
- **Chat** : Rocket.Chat (Node.js), Mattermost

---

## 4. Offres d'hébergement PlanetHoster : comparatif

PlanetHoster propose trois principaux plans d'hébergement adaptés à différents usages.

### 📋 Tableau comparatif

| Critère | The World | The World Pro | HybridCloud |
|---------|-----------|---------------|-------------|
| **Type** | Mutualisé | Mutualisé optimisé | Serveur infogéré |
| **Prix** | 6€/mois | 10-12€/mois | 35-50€/mois |
| **Sites web** | Illimités | Illimités | Illimités |
| **Bande passante** | Illimitée | Illimitée | Illimitée |
| **Stockage SSD** | Illimité | Illimité | 250 GB à 2 TB |
| **RAM** | Mutualisé | Mutualisé | 8 GB à 64 GB |
| **CPU** | Mutualisé | Mutualisé | 4 à 16 cœurs |
| **Node.js** | ✅ Via Passenger | ✅ Via Passenger | ✅ + PM2 possible |
| **Python** | ✅ Basique | ✅ Complet | ✅ + venv custom |
| **Ruby** | ✅ Basique | ✅ Complet | ✅ + rbenv |
| **SSH** | ✅ Limité | ✅ Complet | ✅ Root (sudo) |
| **SSL gratuit** | ✅ Let's Encrypt | ✅ Let's Encrypt | ✅ Let's Encrypt |
| **Backup** | Quotidien | Quotidien | Quotidien + snapshot |

### 🎯 Recommandations par profil

**The World** :
- ✅ Blogs WordPress, petits sites vitrines
- ✅ Portfolios développeurs
- ✅ Petites boutiques e-commerce (<500 produits)
- ✅ Landing pages marketing
- ❌ Apps Node.js haute charge
- ❌ Bases de données volumineuses

**The World Pro** :
- ✅ Agences web (multi-clients)
- ✅ Développeurs gérant 10+ projets
- ✅ Apps Node.js/Python légères à modérées
- ✅ Sites WordPress optimisés (WP Rocket, cache)
- ❌ SaaS B2B avec trafic élevé
- ❌ Microservices complexes

**HybridCloud** :
- ✅ Startups SaaS (Node.js, Django, Rails)
- ✅ E-commerce moyen/grand (PrestaShop, Magento)
- ✅ Dashboards temps réel (WebSockets)
- ✅ APIs haute disponibilité (99.9% uptime)
- ✅ Applications ML/Data Science (Python)
- ✅ Serveurs de développement isolés

---

### 🎁 Offre spéciale : Testez PlanetHoster dès maintenant

**Prêt à déployer votre application ?** Profitez de l'offre exclusive :

👉 **[Créer mon hébergement sur PlanetHoster](https://www.planethoster.com/goph-chermann-king)** (offre The World à partir de 6€/mois)

**Ce que vous obtenez** :
- ✅ **14 jours satisfait ou remboursé**
- ✅ Domaine .com gratuit la première année
- ✅ SSL Let's Encrypt gratuit et automatique
- ✅ Migrations gratuites (si vous changez d'hébergeur)
- ✅ Support francophone 24/7

**Besoin d'un nom de domaine seulement ?** Réservez-le dès maintenant avant qu'il ne soit pris :
👉 **[Réserver mon domaine](https://www.planethoster.fr/Noms-de-Domaine/goph-chermann-king)** (à partir de 12€/an)

---

## 5. API et automatisation PlanetHoster

PlanetHoster met à disposition une **API REST officielle complète** qui permet de gérer les hébergements, domaines et certificats SSL.

### 🔌 Endpoints API disponibles

- **Gestion domaines** : Enregistrement, renouvellement, DNS
- **Gestion hébergements** : Création, suspension, suppression
- **SSL** : Installation Let's Encrypt, certificats custom
- **Bases de données** : Création MySQL, users, permissions
- **Emails** : Comptes email, forwards, quotas

### 🛠️ Méthodes HTTP supportées

- \`GET\` : Lire ressources (lister domaines, infos hébergement)
- \`POST\` : Créer ressources (nouveau domaine, base de données)
- \`PUT\` : Mettre à jour ressources (modifier DNS)
- \`PATCH\` : Modification partielle
- \`DELETE\` : Supprimer ressources

### 📝 Exemple d'utilisation (Node.js)

Voici un exemple de script Node.js pour automatiser la création d'un domaine :

\`\`\`javascript
const axios = require('axios');

const API_KEY = 'votre_cle_api';
const API_URL = 'https://api.planethoster.com/v1';

async function createDomain(domainName) {
  try {
    const response = await axios.post(
      \`\${API_URL}/domains\`,
      { domain: domainName, plan: 'the-world' },
      { headers: { 'X-API-Key': API_KEY } }
    );

    console.log('Domaine créé:', response.data);
  } catch (error) {
    console.error('Erreur:', error.response.data);
  }
}

createDomain('monsite.com');
\`\`\`

**Use case** : Automatiser la création de sites clients pour une agence web.

---

## 6. Tutoriel complet : Déployer une app Node.js sur PlanetHoster

Voici la procédure complète **étape par étape** pour déployer une application Node.js (Next.js, Express, NestJS) sur PlanetHoster.

### ✅ Prérequis

- Compte PlanetHoster actif (The World ou HybridCloud)
- Application Node.js fonctionnelle en local
- Client SFTP (FileZilla, WinSCP, ou Cyberduck)
- Accès terminal SSH

---

### 📦 Étape 1 : Préparer l'application localement

**1.1 Construire l'application**

\`\`\`bash
# Pour Next.js
npm run build

# Pour Express/NestJS
npm run build
\`\`\`

**1.2 Créer le fichier .env production**

Copier \`.env.example\` vers \`.env\` et configurer les variables :

\`\`\`env
NODE_ENV=production
DATABASE_URL=mysql://user:pass@localhost/dbname
API_KEY=votre_cle_api_secrete
PORT=auto
\`\`\`

**Important** : Ne pas définir \`PORT\` manuellement, PlanetHoster utilise Phusion Passenger qui gère automatiquement le port via \`process.env.PORT\`.

**1.3 Vérifier le fichier de démarrage**

Assurez-vous que votre \`server.js\` ou \`app.js\` écoute sur \`process.env.PORT\` :

\`\`\`javascript
const express = require('express');
const app = express();

// ✅ Correct : utiliser process.env.PORT
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from PlanetHoster!');
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

**1.4 Archiver le projet (optionnel)**

\`\`\`bash
# Créer une archive zip (exclure node_modules)
zip -r mon-app.zip . -x "node_modules/*" ".git/*"
\`\`\`

---

### 🌐 Étape 2 : Créer l'application Node.js sur N0C

**2.1 Connexion à N0C**

1. Se connecter à [https://mg.n0c.com/](https://mg.n0c.com/)
2. Sélectionner votre hébergement (The World ou HybridCloud)

**2.2 Créer une application Node.js**

1. Menu : **Langages** → **Node.js** → **Créer une application**
2. Configurer :
   - **Nom de l'application** : \`mon-app\`
   - **Version Node.js** : Choisir v20 ou v22 (recommandé)
   - **Dossier de l'application** : \`/nodejs/mon-app\`
   - **Domaine/Sous-domaine** : \`mon-app.mondomaine.com\`
   - **URL de démarrage** : Laisser par défaut ou \`/\`

3. Cliquer sur **Créer**

**2.3 Configuration automatique Passenger**

PlanetHoster utilise **Phusion Passenger** pour gérer les processus Node.js :
- ✅ Redémarrage automatique en cas de crash
- ✅ Port assigné dynamiquement (pas de conflit)
- ✅ Gestion de la mémoire et CPU

---

### 📂 Étape 3 : Téléverser les fichiers via SFTP

**3.1 Connexion SFTP**

Utiliser FileZilla ou WinSCP avec les identifiants fournis par PlanetHoster :

- **Hôte** : \`ftp.votredomaine.com\` ou IP du serveur
- **Port** : \`22\` (SFTP)
- **Utilisateur** : Fourni dans N0C
- **Mot de passe** : Fourni dans N0C

**3.2 Upload des fichiers**

1. Naviguer vers \`/nodejs/mon-app/\`
2. Uploader **tous les fichiers** du projet **sauf** :
   - ❌ \`node_modules/\` (sera réinstallé sur le serveur)
   - ❌ \`.git/\`
   - ❌ Fichiers de développement (\`.env.local\`, \`tests/\`)

**3.3 Vérifier les permissions**

\`\`\`bash
# Via SSH
chmod 755 /nodejs/mon-app
chmod 644 /nodejs/mon-app/*
chmod 755 /nodejs/mon-app/server.js
\`\`\`

---

### 🔧 Étape 4 : Installer les dépendances via SSH

**4.1 Ouvrir le terminal SSH**

Option 1 : Depuis N0C → **Fichiers** → **Terminal**
Option 2 : Via client SSH (PuTTY, Terminal macOS/Linux)

\`\`\`bash
ssh utilisateur@votredomaine.com
\`\`\`

**4.2 Créer les alias Node.js/NPM**

Selon la version Node.js choisie (exemple avec Node 20) :

\`\`\`bash
alias node="/opt/alt/alt-nodejs20/root/usr/bin/node"
alias npm="/opt/alt/alt-nodejs20/root/usr/bin/npm"
\`\`\`

**Pour Node 22** :
\`\`\`bash
alias node="/opt/alt/alt-nodejs22/root/usr/bin/node"
alias npm="/opt/alt/alt-nodejs22/root/usr/bin/npm"
\`\`\`

**4.3 Vérifier les versions**

\`\`\`bash
node -v
# Output: v20.x.x

npm -v
# Output: 10.x.x
\`\`\`

**4.4 Installer les dépendances**

\`\`\`bash
cd /nodejs/mon-app

# Installer les dépendances de production uniquement
npm install --omit=dev
\`\`\`

**Si vous avez un \`package-lock.json\`** (recommandé) :

\`\`\`bash
npm ci --production
\`\`\`

---

### 🚀 Étape 5 : Démarrer et tester l'application

**5.1 Redémarrer l'application**

Depuis N0C :
1. **Langages** → **Node.js**
2. Sélectionner votre application
3. Cliquer sur **Restart**

**5.2 Vérifier les logs**

\`\`\`bash
# Via SSH
tail -f /var/log/passenger.log
\`\`\`

**5.3 Tester l'application**

Ouvrir le navigateur et accéder à :
\`\`\`
https://mon-app.mondomaine.com
\`\`\`

**Si erreur 503** (Service Unavailable) :
- Vérifier que \`server.js\` écoute sur \`process.env.PORT\`
- Vérifier les logs Passenger
- Redémarrer l'application via N0C

---

### ⚙️ Étape 6 : Configuration des variables d'environnement

**6.1 Ajouter variables depuis N0C**

1. **Langages** → **Node.js** → Sélectionner app
2. Onglet **Variables d'environnement**
3. Ajouter :

\`\`\`
DATABASE_URL=mysql://user:pass@localhost/db
API_KEY=abc123xyz
NODE_ENV=production
\`\`\`

4. **Sauvegarder** et **Redémarrer**

**6.2 Accéder aux variables dans le code**

\`\`\`javascript
const dbUrl = process.env.DATABASE_URL;
const apiKey = process.env.API_KEY;
\`\`\`

---

### 🔄 Étape 7 : Automatiser les déploiements (optionnel)

**7.1 Script de déploiement rsync**

\`\`\`bash
#!/bin/bash
# deploy.sh

rsync -avz --exclude 'node_modules' \\
  --exclude '.git' \\
  --exclude '.env.local' \\
  ./ utilisateur@votredomaine.com:/nodejs/mon-app/

ssh utilisateur@votredomaine.com "cd /nodejs/mon-app && npm ci --production"
\`\`\`

**7.2 GitHub Actions (CI/CD)**

Créer \`.github/workflows/deploy.yml\` :

\`\`\`yaml
name: Deploy to PlanetHoster

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Deploy via SFTP
        uses: SamKirkland/FTP-Deploy-Action@4.3.0
        with:
          server: ftp.votredomaine.com
          username: \${{ secrets.FTP_USERNAME }}
          password: \${{ secrets.FTP_PASSWORD }}
          local-dir: ./
          server-dir: /nodejs/mon-app/
          exclude: |
            node_modules/**
            .git/**
\`\`\`

---

### 🛠️ Étape 8 : Optimisations optionnelles

**8.1 Utiliser PM2 (HybridCloud uniquement)**

\`\`\`bash
npm install -g pm2

pm2 start server.js --name mon-app
pm2 startup
pm2 save
\`\`\`

**8.2 Configurer un reverse proxy Nginx**

Pour des configurations avancées (WebSockets, headers custom), contacter le support PlanetHoster.

**8.3 Activer la compression gzip**

\`\`\`javascript
const compression = require('compression');
app.use(compression());
\`\`\`

---

### 🚀 Vous avez suivi le tutoriel ? Déployez votre app dès maintenant !

**Félicitations !** Vous savez maintenant comment déployer une application Node.js sur PlanetHoster. Il est temps de passer à l'action :

👉 **[Créer mon compte PlanetHoster](https://www.planethoster.com/goph-chermann-king)** et déployer mon app en production

**Pourquoi choisir PlanetHoster pour votre app Node.js ?**
- ✅ Phusion Passenger intégré (pas de config serveur manuelle)
- ✅ Plusieurs versions Node.js disponibles (14 à 22)
- ✅ SSH complet avec npm, git, et tous les outils modernes
- ✅ SSL gratuit automatique (Let's Encrypt)
- ✅ Support 24/7 en français si vous bloquez

**Pas encore de nom de domaine ?** Réservez-le avant de commencer :
👉 **[Vérifier la disponibilité de mon domaine](https://www.planethoster.fr/Noms-de-Domaine/goph-chermann-king)**

---

## 7. Cas d'usage réels : exemples d'applications déployées

### 📊 Dashboard analytics SaaS (Node.js + PostgreSQL)

**Stack** :
- Next.js 15 (SSR)
- Node.js 20
- PostgreSQL (add-on HybridCloud)
- Prisma ORM

**Offre** : HybridCloud 8 GB RAM
**Coût** : ~40€/mois
**Performance** : 500 utilisateurs actifs, <200ms TTFB

### 🛒 Boutique e-commerce WooCommerce

**Stack** :
- WordPress 6.4
- WooCommerce 8.5
- PHP 8.3
- MariaDB 10.11

**Offre** : The World Pro
**Coût** : ~10€/mois
**Volume** : 2000 produits, 5000 visiteurs/mois

### 🤖 API REST pour application mobile (FastAPI)

**Stack** :
- FastAPI (Python 3.11)
- SQLite (fichier local)
- Redis (cache)

**Offre** : The World Pro
**Coût** : ~10€/mois
**Usage** : 50k requêtes/jour, latence <100ms

---

## 8. Support et ressources PlanetHoster

### 📞 Canaux de support

- **Chat en direct** (24/7, français et anglais)
- **Tickets** (réponse <2h en moyenne)
- **Téléphone** : +1-855-774-4678
- **Documentation** : [docs.planethoster.com](https://kb.planethoster.com/)

### 📚 Ressources utiles

- **Base de connaissances** : Tutoriels détaillés
- **Forum communautaire** : Échanges entre utilisateurs
- **Blog technique** : Actualités hébergement et développement web
- **Webinaires** : Sessions de formation régulières

---

## Conclusion : PlanetHoster en 2025

**Résumé des points clés** :

- ✅ **Polyvalence technique** : PHP, Node.js, Python, Ruby supportés nativement
- ✅ **Offres adaptées** : Du mutualisé (The World) au serveur infogéré (HybridCloud)
- ✅ **Déploiement simplifié** : Via N0C et Phusion Passenger
- ✅ **Prix compétitifs** : À partir de 6€/mois
- ✅ **Support francophone** : 24/7, réactif et compétent

**PlanetHoster est idéal pour** :
- Développeurs full-stack (Node.js, Django, Rails)
- Agences web gérant multi-clients
- Startups SaaS recherchant hébergement fiable
- Sites e-commerce moyens/grands

**Alternatives à considérer** :
- **Vercel/Netlify** : Meilleur pour JAMstack pur (Next.js, React)
- **DigitalOcean/Linode** : Plus de contrôle (VPS dédié)
- **Heroku** : Plus simple mais plus cher

En résumé, **PlanetHoster offre un hébergement flexible, polyvalent et compatible avec la majorité des langages et types d'applications web modernes**, qu'il s'agisse d'un simple blog ou d'une plateforme e-commerce complète.

---

## Ressources

- [Site officiel PlanetHoster](https://www.planethoster.com)
- [Documentation N0C](https://docs.planethoster.com/n0c)
- [API Documentation](https://api.planethoster.com/docs)
- [Tutoriels Node.js](https://docs.planethoster.com/nodejs)
- [Tutoriels Python](https://docs.planethoster.com/python)

**Besoin d'aide pour migrer votre application vers PlanetHoster ?** N'hésitez pas à commenter dans notre [serveur Discord](https://discord.gg/qn7XFBU5) ou me [contacter](contact@hermann-moussavou.com) ! 🚀
  `,
  publishedAt: "2025-04-07",
  readingTime: "22 min",
  category: "Tutoriels",
  coverImage: "/images/blog/planethoster-hebergement-2025.png",
  tags: [
    "PlanetHoster",
    "Hébergement",
    "Node.js",
    "PHP",
    "Python",
    "Ruby",
    "Déploiement",
    "N0C",
    "Next.js",
    "Tutorial",
  ],
  author: {
    name: "Hermann MOUSSAVOU",
    avatar: "/images/ck-class.png",
    role: "Développeur Full-Stack",
  },
  isHighlighted: false,
};
