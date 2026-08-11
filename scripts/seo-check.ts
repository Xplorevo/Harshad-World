// Build-time SEO validation. Runs on predev/prebuild, writes public/seo-report.json
// which the /seo-check page renders.
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { SITE_URL, OG_VERSION, allRoutes, absoluteOgImage } from "../src/config/seo";

type Status = "pass" | "fail";
interface Check {
  id: string;
  label: string;
  status: Status;
  detail: string;
}

const checks: Check[] = [];
const add = (id: string, label: string, ok: boolean, detail: string) =>
  checks.push({ id, label, status: ok ? "pass" : "fail", detail });

const read = (p: string) => (existsSync(resolve(p)) ? readFileSync(resolve(p), "utf8") : null);

// --- robots.txt ---
const robots = read("public/robots.txt");
add("robots-exists", "robots.txt exists", !!robots, robots ? "public/robots.txt found" : "missing public/robots.txt");
if (robots) {
  add(
    "robots-allows",
    "robots.txt does not block crawlers",
    !/^\s*Disallow:\s*\/\s*$/m.test(robots),
    /^\s*Disallow:\s*\/\s*$/m.test(robots) ? "A wildcard Disallow: / blocks the whole site" : "Crawling allowed",
  );
  add(
    "robots-sitemap",
    "robots.txt advertises the sitemap",
    robots.includes(`${SITE_URL}/sitemap.xml`),
    robots.includes(`${SITE_URL}/sitemap.xml`) ? `Sitemap: ${SITE_URL}/sitemap.xml` : "Sitemap directive missing or wrong host",
  );
}

// --- sitemap.xml ---
const sitemap = read("public/sitemap.xml");
add("sitemap-exists", "sitemap.xml exists", !!sitemap, sitemap ? "public/sitemap.xml found" : "missing public/sitemap.xml");
if (sitemap) {
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const indexable = allRoutes.filter((r) => r.indexable);
  const missing = indexable.filter((r) => !locs.includes(`${SITE_URL}${r.path}`));
  add(
    "sitemap-routes",
    "Every indexable route is in the sitemap",
    missing.length === 0,
    missing.length === 0 ? `${locs.length} URL(s): ${locs.join(", ")}` : `Missing: ${missing.map((r) => r.path).join(", ")}`,
  );
  const leaked = allRoutes.filter((r) => !r.indexable && locs.includes(`${SITE_URL}${r.path}`));
  add(
    "sitemap-noindex",
    "No noindex route leaked into the sitemap",
    leaked.length === 0,
    leaked.length === 0 ? "Clean" : `Remove: ${leaked.map((r) => r.path).join(", ")}`,
  );
  add(
    "sitemap-lastmod",
    "No build-time lastmod values",
    !sitemap.includes("<lastmod>"),
    sitemap.includes("<lastmod>") ? "lastmod present — must come from real content changes" : "No lastmod (correct for a static site)",
  );
}

// --- per-route metadata ---
const routes = allRoutes.map((r) => {
  const imageFile = `public${r.image}`;
  const imageExists = existsSync(resolve(imageFile));
  const issues: string[] = [];
  if (!imageExists) issues.push(`OG image missing at ${imageFile}`);
  if (r.imageWidth !== 1200 || r.imageHeight !== 630) issues.push("OG image is not 1200x630 (1.91:1)");
  if (r.title.length > 60) issues.push(`Title is ${r.title.length} chars (>60)`);
  if (r.description.length > 160) issues.push(`Description is ${r.description.length} chars (>160)`);
  if (!r.imageAlt) issues.push("Missing og:image:alt");
  return {
    path: r.path,
    title: r.title,
    description: r.description,
    canonical: `${SITE_URL}${r.path}`,
    ogImage: absoluteOgImage(r.image),
    ogImageWidth: r.imageWidth,
    ogImageHeight: r.imageHeight,
    ogImageAlt: r.imageAlt,
    twitterCard: "summary_large_image",
    indexable: r.indexable,
    noindex: !!r.noindex,
    status: issues.length === 0 ? ("pass" as const) : ("fail" as const),
    issues,
  };
});

add(
  "routes-meta",
  "Canonical / OG / Twitter tags valid on every route",
  routes.every((r) => r.status === "pass"),
  routes.every((r) => r.status === "pass")
    ? `${routes.length} route(s) validated`
    : routes.filter((r) => r.status === "fail").map((r) => `${r.path}: ${r.issues.join("; ")}`).join(" | "),
);

// --- cache headers ---
const headers = read("public/_headers");
add(
  "og-cache-headers",
  "OG images served with long-lived cache headers",
  !!headers && headers.includes("/og/*"),
  headers?.includes("/og/*") ? "Immutable caching configured for /og/*" : "Add a /og/* rule to public/_headers",
);

const report = {
  generatedAt: new Date().toISOString(),
  siteUrl: SITE_URL,
  ogVersion: OG_VERSION,
  checks,
  routes,
  failures: checks.filter((c) => c.status === "fail").length,
};

writeFileSync(resolve("public/seo-report.json"), `${JSON.stringify(report, null, 2)}\n`);

for (const c of checks) console.log(`${c.status === "pass" ? "PASS" : "FAIL"}  ${c.label} — ${c.detail}`);
console.log(`seo-report.json written (${report.failures} failure(s))`);
