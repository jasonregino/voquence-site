import type { MetadataRoute } from "next";

const BASE_URL = "https://www.voquence.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Keep API routes and the auth utility pages out of the index.
      disallow: ["/api/", "/managed-cloud/login", "/managed-cloud/signup"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
