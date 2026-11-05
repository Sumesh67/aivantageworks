import type { MetadataRoute } from "next";
import { NAV, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ href: "" }, ...NAV].map((n) => ({ url: `${SITE.url}${n.href}` }));
}
