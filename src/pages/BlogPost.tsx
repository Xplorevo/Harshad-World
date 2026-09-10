import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import Seo from "@/components/Seo";
import { SITE_URL, absoluteOgImage } from "@/config/seo";
import { postBySlug, posts } from "@/config/posts";
import NotFound from "./NotFound";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? postBySlug(slug) : undefined;

  if (!post) return <NotFound />;

  const url = `${SITE_URL}/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    image: absoluteOgImage("/og/og-blog.jpg"),
    keywords: post.tags.join(", "),
    author: { "@type": "Person", name: "Harshad Harishchandra Pakhale", url: `${SITE_URL}/` },
    publisher: { "@type": "Person", name: "Harshad Harishchandra Pakhale" },
  };

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-dvh bg-background">
      <Seo
        title={post.title}
        description={post.description}
        path={`/blog/${post.slug}`}
        image="/og/og-blog.jpg"
        imageAlt={post.title}
        type="article"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="container mx-auto px-4 lg:px-8 py-20 max-w-3xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} /> All articles
        </Link>

        <article className="mt-8">
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={14} /> {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} /> {post.readingTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground text-balance">{post.title}</h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-12 space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4">{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p} className="text-muted-foreground leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </article>

        {more.length > 0 && (
          <aside className="mt-16 pt-10 border-t border-border">
            <h2 className="text-sm font-semibold tracking-[0.22em] uppercase text-primary mb-6">Keep reading</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {more.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="glass rounded-2xl p-5 hover:shadow-[var(--shadow-card)] transition-shadow"
                >
                  <h3 className="font-heading font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </main>
    </div>
  );
};

export default BlogPost;
