import { useEffect, useState } from "react";
import { CheckCircle2, RefreshCw, XCircle } from "lucide-react";
import Seo from "@/components/Seo";
import { routeSeo } from "@/config/seo";

interface Check {
  id: string;
  label: string;
  status: "pass" | "fail";
  detail: string;
}

interface RouteReport {
  path: string;
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
  ogImageWidth: number;
  ogImageHeight: number;
  ogImageAlt: string;
  twitterCard: string;
  indexable: boolean;
  noindex: boolean;
  status: "pass" | "fail";
  issues: string[];
}

interface Report {
  generatedAt: string;
  siteUrl: string;
  ogVersion: string;
  checks: Check[];
  routes: RouteReport[];
  failures: number;
}

const Badge = ({ ok }: { ok: boolean }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
      ok ? "bg-green-500/15 text-green-500" : "bg-destructive/15 text-destructive"
    }`}
  >
    {ok ? <CheckCircle2 size={13} /> : <XCircle size={13} />}
    {ok ? "Pass" : "Fail"}
  </span>
);

const SeoCheck = () => {
  const [report, setReport] = useState<Report | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = () => {
    setError(null);
    fetch(`/seo-report.json?t=${Date.now()}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then(setReport)
      .catch((e: Error) => setError(`Report not generated yet (${e.message}). Run the build.`));
  };

  useEffect(load, []);

  const meta = routeSeo.seoCheck;

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Seo
        title={meta.title}
        description={meta.description}
        path={meta.path}
        image={meta.image}
        imageWidth={meta.imageWidth}
        imageHeight={meta.imageHeight}
        imageAlt={meta.imageAlt}
        noindex
      />

      <main className="container mx-auto max-w-4xl px-4 py-16 lg:px-8">
        <header className="mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Build-time validation</p>
          <h1 className="mt-2 font-heading text-3xl font-bold md:text-4xl">SEO Health Check</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Verifies sitemap.xml, robots.txt and the canonical / Open Graph / Twitter tags emitted per route
            before you submit anything to Google Search Console.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={load}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              <RefreshCw size={14} /> Reload report
            </button>
            {report && (
              <span className="text-xs text-muted-foreground">
                Generated {new Date(report.generatedAt).toLocaleString()} · OG version {report.ogVersion}
              </span>
            )}
          </div>
        </header>

        {error && (
          <p className="rounded-2xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
            {error}
          </p>
        )}

        {report && (
          <>
            <section className="mb-10">
              <h2 className="mb-3 font-heading text-xl font-bold">
                Crawlability {report.failures === 0 ? "— all checks pass" : `— ${report.failures} failing`}
              </h2>
              <ul className="space-y-2">
                {report.checks.map((c) => (
                  <li
                    key={c.id}
                    className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4"
                  >
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold">{c.label}</span>
                      <span className="block break-words text-xs text-muted-foreground">{c.detail}</span>
                    </span>
                    <Badge ok={c.status === "pass"} />
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-heading text-xl font-bold">Per-route metadata</h2>
              <div className="space-y-3">
                {report.routes.map((r) => (
                  <article key={r.path} className="rounded-2xl border border-border bg-card p-5">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <h3 className="font-mono text-sm font-bold">{r.path}</h3>
                      <Badge ok={r.status === "pass"} />
                    </div>
                    <dl className="grid gap-1.5 text-xs sm:grid-cols-[10rem_1fr]">
                      <dt className="text-muted-foreground">title</dt>
                      <dd className="break-words">{r.title}</dd>
                      <dt className="text-muted-foreground">description</dt>
                      <dd className="break-words">{r.description}</dd>
                      <dt className="text-muted-foreground">canonical</dt>
                      <dd className="break-all">{r.canonical}</dd>
                      <dt className="text-muted-foreground">og:image</dt>
                      <dd className="break-all">{r.ogImage}</dd>
                      <dt className="text-muted-foreground">og:image size</dt>
                      <dd>
                        {r.ogImageWidth}×{r.ogImageHeight} (1.91:1)
                      </dd>
                      <dt className="text-muted-foreground">twitter:card</dt>
                      <dd>{r.twitterCard}</dd>
                      <dt className="text-muted-foreground">indexing</dt>
                      <dd>{r.noindex ? "noindex, follow" : "indexable"}</dd>
                    </dl>
                    {r.issues.length > 0 && (
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-destructive">
                        {r.issues.map((i) => (
                          <li key={i}>{i}</li>
                        ))}
                      </ul>
                    )}
                    <img
                      src={`${r.ogImage.replace(report.siteUrl, "")}`}
                      alt={r.ogImageAlt}
                      loading="lazy"
                      width={1200}
                      height={630}
                      className="mt-4 w-full max-w-md rounded-xl border border-border"
                    />
                  </article>
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default SeoCheck;
