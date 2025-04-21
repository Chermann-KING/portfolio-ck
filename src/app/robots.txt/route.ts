import { type NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const robotsTxt = `
User-agent: *
Allow: /
Disallow: /api/

# Sitemap
Sitemap: ${request.nextUrl.origin}/sitemap.xml
`.trim();

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
