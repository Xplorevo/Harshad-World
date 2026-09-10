import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Seo from "@/components/Seo";
import { SITE_URL, absoluteOgImage, routeSeo } from "@/config/seo";
import { posts } from "@/config/posts";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Harshad Pakhale — Blog",
  url: `${SITE_URL}/blog`,
  description: routeSeo.blog.description,
  author: { "@type": "Person", name: "Harshad Harishchandra Pakhale" },
  blogPost: posts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    url: `${SITE_URL}/blog/${p.slug}`,
    image: absoluteOgImage("/og/og-blog.jpg"),
    author: { "@type": "Person", name: "Harshad Harishchandra Pakhale" },
  })),
};

const Blog = () => (
  <div className="min-h-dvh bg-background">
    <Seo
      title={routeSeo.blog.title}
      description={routeSeo.blog.description}
      path={routeSeo.blog.path}
      image={routeSeo.blog.image}
      imageAlt={routeSeo.blog.imageAlt}
    />
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(blogJsonLd)}</script>
    </Helmet>

    <main className="container mx-auto px-4 lg:px-8 py-20 max-w-4xl">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowLeft size={16} /> Back to portfolio
      </Link>

      <motion.header
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 mb-14"
      >
        <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-4 text-primary">Writing</p>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground text-balance">
          Notes on startups, AI &amp; mentorship
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Lessons from building Xplorevo and YojanaRadar, shipping AI products end to end, and mentoring student founders.
        </p>
      </motion.header>

      <div className="grid gap-6">
        {posts.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="glass rounded-2xl p-6 md:p-8 hover:shadow-[var(--shadow-card)] transition-shadow"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={14} /> {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} /> {post.readingTime}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground">
              <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{post.excerpt}</p>
            <div className="mt-5 flex flex-wrap items-center gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <Link
              to={`/blog/${post.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              Read article <ArrowRight size={16} />
            </Link>
          </motion.article>
        ))}
      </div>
    </main>
  </div>
);

export default Blog;
