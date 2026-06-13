import type { MetadataRoute } from "next";

// Canonical host MUST be www — voquence.com 307-redirects to www.voquence.com,
// and Search Console + Google index the canonical. Mismatch here makes Google
// see every URL as a redirect and skip it (same lesson learned on S2S).
const BASE_URL = "https://www.voquence.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Public, indexable content pages only. Auth utility pages
  // (/managed-cloud/login, /managed-cloud/signup) are intentionally excluded.
  const routes: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/wispr-flow-alternative", priority: 0.9, changeFrequency: "weekly" },
    { path: "/compare", priority: 0.8, changeFrequency: "weekly" },
    { path: "/managed-cloud", priority: 0.8, changeFrequency: "weekly" },
    { path: "/download", priority: 0.7, changeFrequency: "weekly" },
    { path: "/founders", priority: 0.6, changeFrequency: "weekly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "monthly" },
    { path: "/terms", priority: 0.3, changeFrequency: "monthly" },
  ];

  return routes.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
