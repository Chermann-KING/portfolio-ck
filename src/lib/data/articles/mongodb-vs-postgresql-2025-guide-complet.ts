import { BlogPost } from "@/types";

export const mongodbVsPostgresql2025GuideCompletArticle: BlogPost = {
  slug: "mongodb-vs-postgresql-2025-guide-definitif",
  title:
    "MongoDB vs PostgreSQL 2025 : Le guide ultime (performance, schémas, scaling, coûts réels)",
  excerpt:
    "MongoDB et PostgreSQL ne sont pas des rivaux en 2025, mais des outils complémentaires. Découvrez quand choisir chaque base de données selon vos besoins : performance, scaling, JSONB vs BSON, ACID, et coûts réels en production. Guide complet avec benchmarks et cas d'usage.",
  content: `La question "MongoDB ou PostgreSQL ?" revient dans **chaque projet**. Et la réponse classique ("ça dépend du use case") est **vraie mais inutile**.

Après avoir utilisé **les deux en production** (PostgreSQL pour mon API NestJS + Supabase, MongoDB pour des projets real-time), voici le guide complet que j'aurais aimé avoir il y a 2 ans.

## La vraie question n'est pas "lequel est meilleur ?"

### Les deux ont évolué en 2025

**PostgreSQL n'est plus "juste" une DB relationnelle** :
- JSONB (format binaire JSON optimisé: [en savoir plus](https://blog.logto.io/fr/maitriser-postgresql-jsonb)) pour les données semi-structurées
- Partitioning natif pour le scaling horizontal
- Performance améliorée de 40% (PostgreSQL 17, septembre 2024)

**MongoDB n'est plus "juste" une DB NoSQL** :
- Transactions ACID multi-documents (depuis MongoDB 4.0)
- Joins avec \`$lookup\`
- Aggregation pipelines ultra-puissantes

**Verdict 2025** : Les deux bases de données se sont rapprochées. Le choix dépend de **votre modèle de données**, pas d'une idéologie.

---

## Architecture et modèle de données

### PostgreSQL : Relations et contraintes

PostgreSQL est une base de données **relationnelle** avec schéma strict.

**Structure de données** :

\`\`\`sql
-- Tables avec relations explicites
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  published_at TIMESTAMP
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id),
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
\`\`\`

**Avantages** :
- ✅ Intégrité référentielle garantie (clés étrangères)
- ✅ Normalisation des données (évite la duplication)
- ✅ Contraintes strictes (UNIQUE, NOT NULL, CHECK)

**Inconvénients** :
- ❌ Migrations de schéma complexes
- ❌ Rigidité si les besoins changent fréquemment

### MongoDB : Documents et flexibilité

MongoDB est une base de données **orientée documents** sans schéma strict.

**Structure de données** :

\`\`\`javascript
// Collection "posts" avec documents imbriqués
{
  _id: ObjectId("507f1f77bcf86cd799439011"),
  title: "MongoDB vs PostgreSQL",
  content: "Contenu de l'article...",
  author: {
    id: "user123",
    name: "Hermann",
    email: "hermann@example.com"
  },
  comments: [
    {
      id: "comment1",
      user: {
        id: "user456",
        name: "Alice"
      },
      content: "Super article !",
      created_at: ISODate("2025-01-15T10:30:00Z")
    }
  ],
  tags: ["database", "comparison"],
  published_at: ISODate("2025-01-10T08:00:00Z")
}
\`\`\`

**Avantages** :
- ✅ Flexibilité du schéma (ajout de champs sans migration)
- ✅ Documents auto-contenus (pas de JOIN)
- ✅ Modèle proche de votre code JavaScript/TypeScript

**Inconvénients** :
- ❌ Pas de contraintes de schéma natives (sauf validation manuelle)
- ❌ Duplication de données (ex: infos utilisateur répétées)

---

## Performance : Benchmarks réels 2025

### Tests officiels : PostgreSQL vs MongoDB

**Source** : Benchmarks EnterpriseDB (2024-2025)

| Workload | PostgreSQL | MongoDB | Gagnant |
|----------|------------|---------|---------|
| **OLTP (transactions)** | 15,200 TPS | 3,800 TPS | **PostgreSQL 4x** |
| **Writes intensifs (IoT)** | 45,000 inserts/s | 78,000 inserts/s | **MongoDB 1.7x** |
| **Reads complexes (JOINs)** | 2,300 queries/s | 850 queries/s | **PostgreSQL 2.7x** |
| **Queries JSON** | 8,500 queries/s | 7,200 queries/s | **PostgreSQL 1.2x** |
| **Aggregations** | 1,200 queries/s | 1,800 queries/s | **MongoDB 1.5x** |

**Conclusion** :
- PostgreSQL domine pour les **transactions ACID** et les **requêtes complexes**
- MongoDB excelle pour les **writes massifs** et les **aggregations**

### JSONB (PostgreSQL) vs BSON (MongoDB)

**PostgreSQL avec JSONB** :

\`\`\`sql
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  data JSONB NOT NULL
);

-- Insert
INSERT INTO events (data) VALUES (
  '{"user_id": "123", "action": "click", "metadata": {"page": "/home"}}'
);

-- Query
SELECT data->>'user_id' AS user_id, data->'metadata'->>'page' AS page
FROM events
WHERE data->>'action' = 'click';

-- Index sur JSONB
CREATE INDEX idx_user_id ON events ((data->>'user_id'));
\`\`\`

**MongoDB avec BSON** :

\`\`\`javascript
db.events.insertOne({
  user_id: "123",
  action: "click",
  metadata: { page: "/home" }
});

// Query
db.events.find({ action: "click" });

// Index
db.events.createIndex({ user_id: 1 });
\`\`\`

**Performance JSONB vs BSON** :
- PostgreSQL JSONB : **Plus rapide pour les queries avec index**
- MongoDB BSON : **Plus rapide pour les inserts massifs**

**Mon retour d'expérience** :
- Si vous avez besoin de **flexibilité JSON + SQL**, PostgreSQL JSONB est parfait.
- Si vous avez **100% de données JSON** et peu de relations, MongoDB est plus naturel.

---

## Scaling : Horizontal vs Vertical

### PostgreSQL : Scaling vertical + partitioning

PostgreSQL scale **verticalement** par défaut (CPU/RAM plus puissants).

**Scaling horizontal avec partitioning** :

\`\`\`sql
-- Partitioning par date (PostgreSQL 17)
CREATE TABLE logs (
  id SERIAL,
  created_at TIMESTAMP NOT NULL,
  message TEXT
) PARTITION BY RANGE (created_at);

CREATE TABLE logs_2025_01 PARTITION OF logs
FOR VALUES FROM ('2025-01-01') TO ('2025-02-01');

CREATE TABLE logs_2025_02 PARTITION OF logs
FOR VALUES FROM ('2025-02-01') TO ('2025-03-01');
\`\`\`

**Solutions externes pour sharding** :
- **Citus** : Extension PostgreSQL pour sharding automatique
- **TimescaleDB** : Pour les séries temporelles
- **Supabase** : Scaling géré (avec Citus en backend)

**Limites** :
- Sharding manuel complexe
- Pas natif comme MongoDB

### MongoDB : Sharding natif

MongoDB est conçu pour le **scaling horizontal** avec sharding natif.

**Sharding automatique** :

\`\`\`javascript
// Configuration du sharding
sh.enableSharding("myapp");

// Shard collection par user_id
sh.shardCollection("myapp.events", { user_id: 1 });

// MongoDB répartit automatiquement les données sur plusieurs serveurs
\`\`\`

**Avantages** :
- ✅ Sharding transparent (MongoDB gère la distribution)
- ✅ Scaling horizontal illimité (ajout de shards)
- ✅ Replica sets natifs (haute disponibilité)

**Inconvénients** :
- ❌ Coût d'infrastructure élevé (plusieurs serveurs)
- ❌ Complexité opérationnelle

---

## Transactions et ACID

### PostgreSQL : ACID garanti

PostgreSQL garantit **ACID** (Atomicity, Consistency, Isolation, Durability) par défaut.

**Exemple de transaction** :

\`\`\`sql
BEGIN;

-- Transfer d'argent entre comptes
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- Si une erreur survient, ROLLBACK automatique
COMMIT;
\`\`\`

**Use cases parfaits** :
- Systèmes bancaires
- E-commerce (commandes + paiements)
- Inventaires critiques

### MongoDB : ACID depuis v4.0

MongoDB supporte les transactions **multi-documents** depuis la version 4.0 (2018).

**Exemple de transaction** :

\`\`\`javascript
const session = client.startSession();

session.startTransaction();

try {
  await db.collection('accounts').updateOne(
    { _id: 1 },
    { $inc: { balance: -100 } },
    { session }
  );

  await db.collection('accounts').updateOne(
    { _id: 2 },
    { $inc: { balance: 100 } },
    { session }
  );

  await session.commitTransaction();
} catch (error) {
  await session.abortTransaction();
} finally {
  session.endSession();
}
\`\`\`

**Limitations** :
- Performance réduite avec transactions (overhead)
- Recommandé d'éviter les transactions si possible (design document-oriented)

---

## Écosystème et outils

### PostgreSQL

**Extensions populaires** :
- **PostGIS** : Données géospatiales
- **pgvector** : Embeddings IA (RAG, semantic search)
- **TimescaleDB** : Séries temporelles
- **Citus** : Sharding horizontal

**ORMs** :
- **Prisma** : ORM moderne TypeScript
- **TypeORM** : ORM complet Node.js
- **Drizzle** : Lightweight ORM
- **Sequelize** : ORM classique

**Services managés** :
- **Supabase** : PostgreSQL avec auth, storage, real-time
- **Neon** : Serverless PostgreSQL
- **Railway** : PostgreSQL avec CI/CD
- **AWS RDS** : PostgreSQL géré

### MongoDB

**Outils natifs** :
- **MongoDB Atlas** : Service cloud officiel
- **Compass** : GUI pour MongoDB
- **Aggregation Framework** : Pipelines puissants

**ORMs** :
- **Mongoose** : ORM le plus populaire (Node.js)
- **Prisma** : Supporte MongoDB depuis v3
- **TypeORM** : Support MongoDB limité

**Services managés** :
- **MongoDB Atlas** : Service officiel
- **AWS DocumentDB** : Compatible MongoDB (mais pas 100%)

---

## Coûts réels en production

### PostgreSQL : Open-source et économique

**Self-hosted** :
- Gratuit (licence PostgreSQL permissive)
- Coût = infrastructure (serveur)

**Managed services** :

| Provider | Pricing | Notes |
|----------|---------|-------|
| **Supabase** | Gratuit jusqu'à 500 MB | 25€/mois pour 8 GB |
| **Neon** | Gratuit jusqu'à 3 GB | 19$/mois pour 10 GB |
| **Railway** | 5$/GB | Pay-as-you-go |
| **AWS RDS** | ~100$/mois | Instance db.t3.medium |

**Exemple projet moyen (20 GB, 100k queries/jour)** :
- **Supabase Pro** : ~25€/mois
- **Neon Scale** : ~50$/mois
- **AWS RDS** : ~150$/mois

### MongoDB : Licensing SSPL + coûts Atlas

**Self-hosted** :
- Gratuit (licence SSPL)
- **Mais** : Restrictions si vous proposez MongoDB as a Service

**MongoDB Atlas** :

| Tier | Pricing | Notes |
|------|---------|-------|
| **Free (M0)** | Gratuit | 512 MB storage |
| **Shared (M2)** | 9$/mois | 2 GB storage |
| **Dedicated (M10)** | 57$/mois | 10 GB storage, 2 GB RAM |
| **M30** | ~300$/mois | 40 GB storage, 8 GB RAM |

**Exemple projet moyen (20 GB, 100k queries/jour)** :
- **MongoDB Atlas M20** : ~150$/mois
- **Self-hosted (3 replicas)** : ~200$/mois (infra)

**Verdict** : PostgreSQL est généralement **moins cher** en production.

---

## Quand choisir PostgreSQL

### Use cases parfaits

1. **Applications financières**
   - Transactions ACID critiques
   - Intégrité référentielle stricte
   - Audit trails

2. **E-commerce**
   - Commandes + paiements + inventaires
   - Relations complexes (produits, catégories, commandes)
   - Rapports analytiques

3. **SaaS B2B**
   - Multi-tenancy avec Row-Level Security (RLS)
   - Données structurées (users, organizations, subscriptions)
   - Requêtes complexes pour dashboards

4. **CMS / Blog**
   - Relations (posts, authors, categories, comments)
   - Full-text search natif
   - SQL pour queries complexes

**Exemple concret : Mon portfolio Next.js 15**

\`\`\`typescript
// Supabase (PostgreSQL) avec Prisma
const posts = await prisma.post.findMany({
  where: {
    publishedAt: { lte: new Date() }, // Articles publiés
    category: "Développement"
  },
  include: {
    author: true,
    comments: {
      where: { approved: true }
    }
  },
  orderBy: { publishedAt: 'desc' }
});
\`\`\`

**Pourquoi PostgreSQL ?**
- Relations claires (posts ↔ authors ↔ comments)
- Filtering par date (scheduling)
- Transactions pour les updates

---

## Quand choisir MongoDB

### Use cases parfaits

1. **Applications real-time**
   - Chat, notifications, live feeds
   - Writes intensifs
   - Données non structurées

2. **IoT / Logs / Telemetry**
   - Millions d'événements par seconde
   - Schéma flexible (capteurs différents)
   - Time-series data

3. **Content Management Systems (CMS headless)**
   - Schéma de contenu variable
   - API JSON-first
   - Déploiement multi-région (sharding)

4. **Catalogues produits**
   - Attributs variables par produit
   - Pas de relations complexes
   - Recherche full-text avec Atlas Search

**Exemple concret : Application IoT**

\`\`\`javascript
// MongoDB pour capteurs IoT
await db.collection('sensor_data').insertMany([
  {
    device_id: "sensor_001",
    type: "temperature",
    value: 23.5,
    unit: "celsius",
    location: { lat: 48.8566, lon: 2.3522 },
    timestamp: new Date()
  },
  {
    device_id: "sensor_002",
    type: "humidity",
    value: 65,
    unit: "percent",
    metadata: { room: "kitchen" }, // Schéma flexible
    timestamp: new Date()
  }
]);

// Aggregation pour moyenne par device
const averages = await db.collection('sensor_data').aggregate([
  { $match: { type: "temperature" } },
  { $group: { _id: "$device_id", avg: { $avg: "$value" } } }
]);
\`\`\`

**Pourquoi MongoDB ?**
- Writes massifs (millions/jour)
- Schéma flexible (capteurs différents)
- Pas de relations complexes

---

## Cas d'usage hybrides : PostgreSQL + MongoDB

### Quand utiliser les deux ?

**Architecture moderne** : Utilisez les deux bases selon les besoins.

**Exemple : Application e-commerce**

**PostgreSQL pour** :
- Users, orders, payments (ACID)
- Inventaire (stock management)
- Transactions financières

**MongoDB pour** :
- Product catalog (attributs variables)
- User activity logs (clickstream)
- Recommendations (ML embeddings)

**Exemple d'architecture** :

\`\`\`
┌─────────────────────────────────────────┐
│         Frontend (Next.js 15)           │
└─────────────────┬───────────────────────┘
                  │
        ┌─────────┴─────────┐
        │                   │
┌───────▼────────┐  ┌───────▼────────┐
│  PostgreSQL    │  │    MongoDB     │
│  (Supabase)    │  │    (Atlas)     │
├────────────────┤  ├────────────────┤
│ - Users        │  │ - Products     │
│ - Orders       │  │ - Reviews      │
│ - Payments     │  │ - Logs         │
│ - Inventory    │  │ - Analytics    │
└────────────────┘  └────────────────┘
\`\`\`

**Sync entre les deux** :
- Event streaming (Kafka, RabbitMQ)
- CDC (Change Data Capture) avec Debezium

---

## Migration entre PostgreSQL et MongoDB

### De MongoDB vers PostgreSQL

**Raisons courantes** :
- Besoin de transactions ACID
- Relations complexes apparues
- Coûts Atlas trop élevés

**Outils** :
- **pgloader** : Import MongoDB → PostgreSQL
- **Airbyte** : ETL moderne
- **Script custom** : Transformation des documents

**Exemple de migration** :

\`\`\`javascript
// MongoDB document
{
  _id: ObjectId("..."),
  name: "Alice",
  email: "alice@example.com",
  posts: [
    { title: "Post 1", content: "..." },
    { title: "Post 2", content: "..." }
  ]
}
\`\`\`

**Devient en PostgreSQL** :

\`\`\`sql
-- Table users
INSERT INTO users (id, name, email) VALUES (1, 'Alice', 'alice@example.com');

-- Table posts (normalized)
INSERT INTO posts (user_id, title, content) VALUES
  (1, 'Post 1', '...'),
  (1, 'Post 2', '...');
\`\`\`

### De PostgreSQL vers MongoDB

**Raisons courantes** :
- Besoin de scaling horizontal massif
- Schéma trop rigide
- Performance writes insuffisante

**Outils** :
- **MongoDB Relational Migrator** : GUI officiel
- **Airbyte**
- **Script custom**

---

## Pièges à éviter

### Piège #1 : Choisir MongoDB "parce que c'est moderne"

\`\`\`javascript
// Anti-pattern : Relations dans MongoDB
{
  order_id: "order123",
  user: { /* copie des données user */ },
  items: [
    { product: { /* copie produit */ }, quantity: 2 }
  ]
}
\`\`\`

**Problème** : Duplication massive, updates complexes.

**Solution** : Si vous avez beaucoup de relations, utilisez PostgreSQL.

### Piège #2 : Utiliser PostgreSQL pour du time-series pur

\`\`\`sql
-- Anti-pattern : Millions de rows sans partitioning
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  timestamp TIMESTAMP,
  data JSONB
);
-- Performance dégradée après 10M rows
\`\`\`

**Solution** : Utilisez **TimescaleDB** (extension PostgreSQL) ou **MongoDB**.

### Piège #3 : Ignorer les coûts de sharding MongoDB

**Sharding MongoDB = 3+ serveurs minimum** (replica set).

**Coût réel** :
- MongoDB Atlas M30 (sharded) : ~300$/mois
- PostgreSQL avec Citus : ~100$/mois

**Solution** : Évaluez si vous avez **vraiment** besoin de sharding.

---

## Conclusion : Le bon choix en 2025

### Choisissez PostgreSQL si :

1. ✅ Vous avez des **relations complexes** (users ↔ orders ↔ products)
2. ✅ Vous avez besoin de **transactions ACID strictes**
3. ✅ Vous faites des **requêtes analytiques complexes**
4. ✅ Vous voulez un **écosystème mature** (Supabase, Prisma, pgvector)
5. ✅ Vous optimisez les **coûts** (PostgreSQL souvent moins cher)

### Choisissez MongoDB si :

1. ✅ Vous avez des **schémas flexibles** (produits avec attributs variables)
2. ✅ Vous avez des **writes massifs** (IoT, logs, analytics)
3. ✅ Vous avez besoin de **sharding horizontal natif**
4. ✅ Votre modèle est **document-oriented** (peu de relations)
5. ✅ Vous développez en **JavaScript/TypeScript** (Mongoose, BSON natif)

### Mon workflow en 2025

**Nouveaux projets SaaS** : PostgreSQL (Supabase) par défaut
- Relations claires
- Transactions ACID
- Écosystème complet (auth, storage, real-time)

**Projets IoT / Real-time** : MongoDB Atlas
- Writes massifs
- Schéma flexible
- Sharding automatique

**Projets hybrides** : PostgreSQL + MongoDB
- Best of both worlds
- PostgreSQL pour le core business
- MongoDB pour les logs/analytics

---

## Ressources officielles

- [PostgreSQL 17 Documentation](https://www.postgresql.org/docs/17/)
- [MongoDB 8.0 Documentation](https://www.mongodb.com/docs/manual/)
- [Benchmark PostgreSQL vs MongoDB (EnterpriseDB)](https://www.enterprisedb.com/news/new-benchmarks-show-postgres-dominating-mongodb-varied-workloads)
- [PostgreSQL JSONB Guide](https://www.postgresql.org/docs/current/datatype-json.html)
- [MongoDB Transactions Guide](https://www.mongodb.com/docs/manual/core/transactions/)

**Vous utilisez PostgreSQL, MongoDB, ou les deux ?** Partagez votre retour d'expérience dans notre [serveur Discord](https://discord.gg/RbmcyUKNSJ) !
`,
  category: "Tutoriels",
  publishedAt: "2025-10-01",
  readingTime: "22 min",
  coverImage: "/images/blog/mongodb-postgresql-cover.png",
  tags: [
    "PostgreSQL",
    "MongoDB",
    "Database",
    "Performance",
    "Scaling",
    "Architecture",
  ],
  author: {
    name: "Hermann MOUSSAVOU",
    avatar: "/images/ck-class.png",
    role: "Développeur Full-Stack",
  },
  isHighlighted: false,
};
