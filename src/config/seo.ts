// Single source of truth for per-route SEO / social-preview metadata.
import { posts } from "./posts";

export const SITE_URL = "https://harshad-pakhale-dot-dev.lovable.app";

// Bump when any OG image is regenerated — appended as ?v= for cache busting.
export const OG_VERSION = "2026-08-11";

export interface RouteSeo {
  path: string;
  title: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  type?: string;
  noindex?: boolean;
  /** Included in sitemap.xml when true. */
  indexable: boolean;
}

export const routeSeo = {
  home: {
    path: "/",
    title: "Harshad Pakhale | Founder, CEO & AI Entrepreneur",
    description:
      "Founder & CEO of Xplorevo Pvt Ltd. AI entrepreneur, full stack developer, startup mentor and community builder from Pune, India.",
    image: "/og/og-home.jpg",
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: "Harshad Harishchandra Pakhale — Founder & CEO of Xplorevo",
    type: "profile",
    indexable: true,
  },
  seoCheck: {
    path: "/seo-check",
    title: "SEO Health Check | Harshad Harishchandra Pakhale",
    description:
      "Build-time validation of sitemap.xml, robots.txt and per-route canonical, Open Graph and Twitter Card tags.",
    image: "/og/og-seo-check.jpg",
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: "SEO health check dashboard",
    noindex: true,
    indexable: false,
  },
  blog: {
    path: "/blog",
    title: "Blog | Harshad Pakhale on Startups & AI",
    description:
      "Essays by Harshad Pakhale on building startups like Xplorevo and YojanaRadar, shipping AI products end to end, and mentoring student founders.",
    image: "/og/og-blog.jpg",
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: "Blog — Harshad Pakhale on startups, AI and mentorship",
    indexable: true,
  },
  notFound: {
    path: "/404",
    title: "Page not found | Harshad Harishchandra Pakhale",
    description:
      "This page doesn't exist. Head back to the portfolio of Harshad Harishchandra Pakhale, Founder & CEO of Xplorevo Pvt Ltd.",
    image: "/og/og-404.jpg",
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: "404 — page not found",
    noindex: true,
    indexable: false,
  },
} satisfies Record<string, RouteSeo>;

export const postRoutes: RouteSeo[] = posts.map((p) => ({
  path: `/blog/${p.slug}`,
  title: p.title,
  description: p.description,
  image: "/og/og-blog.jpg",
  imageWidth: 1200,
  imageHeight: 630,
  imageAlt: p.title,
  type: "article",
  indexable: true,
}));

export const allRoutes: RouteSeo[] = [...Object.values(routeSeo), ...postRoutes];

export const absoluteOgImage = (image: string) =>
  `${SITE_URL}${image}?v=${OG_VERSION}`;
