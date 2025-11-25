import Redis from "ioredis";

declare global {
  var redis: Redis | undefined;
}

let redisClient: Redis | null = null;

try {
  if (process.env.REDIS_URL) {
    // Utiliser Redis URL si disponible (production avec Redis configuré)
    redisClient = new Redis(process.env.REDIS_URL);
  } else if (process.env.NODE_ENV === "development" && process.env.REDIS_HOST) {
    // Utiliser Redis local seulement en développement
    redisClient = new Redis({
      host: process.env.REDIS_HOST || "localhost",
      port: Number(process.env.REDIS_PORT) || 6379,
      password: process.env.REDIS_PASSWORD,
      maxRetriesPerRequest: 1,
      lazyConnect: true, // Connexion à la demande
    });
  }
} catch (error) {
  console.warn("Redis non disponible, rate limiting désactivé:", error);
  redisClient = null;
}

if (process.env.NODE_ENV !== "production" && redisClient) {
  global.redis = redisClient;
}

export default redisClient;
