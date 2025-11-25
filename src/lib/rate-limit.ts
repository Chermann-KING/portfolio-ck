import redis from "./redis";

interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

export async function rateLimit(
  identifier: string,
  limit: number = 5, // 5 requêtes maximum
  windowMs: number = 60 * 60 * 1000 // par heure
): Promise<RateLimitResult> {
  // Si Redis n'est pas disponible, on laisse passer sans rate limiting
  if (!redis) {
    console.warn("Redis non disponible - Rate limiting désactivé");
    return {
      success: true,
      limit,
      remaining: limit,
      reset: Date.now() + windowMs,
    };
  }

  const key = `ratelimit:${identifier}`;
  const now = Date.now();
  const windowSize = windowMs;

  try {
    // Utilisation d'une transaction Redis pour garantir l'atomicité
    const multi = redis.multi();

    // Nettoyage des anciennes tentatives et ajout de la nouvelle
    multi
      .zremrangebyscore(key, 0, now - windowSize) // Supprime les anciennes entrées
      .zadd(key, now, now.toString()) // Ajoute la tentative actuelle
      .zcard(key) // Compte le nombre de tentatives
      .pexpire(key, windowSize); // Définit l'expiration de la clé

    const results = await multi.exec();

    if (!results) {
      throw new Error("Erreur lors de l'exécution de la transaction Redis");
    }

    const attemptCount = results[2]?.[1] as number;

    if (attemptCount > limit) {
      // Récupère le timestamp de réinitialisation (première tentative + fenêtre)
      const oldestTimestamp = await redis.zrange(key, 0, 0, "WITHSCORES");
      const resetTime = oldestTimestamp[1]
        ? parseInt(oldestTimestamp[1]) + windowSize
        : now + windowSize;

      return {
        success: false,
        limit,
        remaining: 0,
        reset: resetTime,
      };
    }

    return {
      success: true,
      limit,
      remaining: Math.max(0, limit - attemptCount),
      reset: now + windowSize,
    };
  } catch (error) {
    console.error("Erreur Redis rate limiting:", error);

    // En cas d'erreur Redis, on laisse passer la requête mais on log l'erreur
    return {
      success: true,
      limit,
      remaining: 1,
      reset: now + windowSize,
    };
  }
}
