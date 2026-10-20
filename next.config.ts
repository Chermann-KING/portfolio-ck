import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/projects/dictionaire",
        // reason: O'Ypunu n'est pas public ; l'ancienne URL renvoie vers la liste des projets.
        destination: "/projects",
        permanent: true,
      },
    ];
  },
  experimental: {
    serverActions: {
      bodySizeLimit: undefined,
      allowedOrigins: undefined,
    },
  },
};

export default nextConfig;
