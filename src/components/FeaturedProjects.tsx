import { ExternalLink, Palette } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import TiltCard from "@/components/shared/TiltCard";
import { links } from "@/config/links";

const projects = [
  {
    title: "Xplorevo",
    tagline: "TravelTech platform reimagining how students explore India.",
    tags: ["TravelTech", "AI", "Next.js", "Firebase", "React"],
    href: links.xplorevo,
  },
  {
    title: "YojanaRadar",
    tagline: "AI-powered platform that matches citizens with government schemes.",
    tags: ["AI", "Public Tech", "React", "LLM"],
    href: links.yojanaradar,
  },
  {
    title: "Xplorevo Tech Network",
    tagline: "A student tech community connecting developers, designers and founders.",
    tags: ["Community", "Ecosystem", "Events"],
    href: links.xtn,
  },
  {
    title: "Entrepreneurship Cell",
    tagline: "Community platform and startup ecosystem for MESWCOE.",
    tags: ["Community", "Startups", "Web"],
    href: links.ecell,
  },
  {
    title: "Portfolio Website",
    tagline: "This site — a cinematic, performance-first founder portfolio.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    href: links.portfolio,
  },
  {
    title: "Graphics Portfolio",
    tagline: "Brand identity, campaign creative, and visual systems.",
    tags: ["Design", "Branding", "Figma", "Adobe"],
    href: links.designPortfolio,
  },
];

const FeaturedProjects = () => (
  <section id="projects" className="relative py-24 bg-background overflow-hidden">
    <div className="absolute inset-0 grid-lines opacity-70" aria-hidden="true" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <SectionHeading
        eyebrow="Featured Projects"
        title={<>Products, platforms &amp; <span className="text-gradient-brand">ecosystems</span></>}
        subtitle="Shipped work across AI, travel-tech, community platforms, and design."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <TiltCard key={p.title} className="p-6 flex flex-col" delay={(i % 3) * 0.06}>
            <h3 className="text-lg font-heading font-bold text-foreground">{p.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">{p.tagline}</p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {p.tags.map((t) => (
                <span key={t} className="text-[11px] font-medium px-2.5 py-1 rounded-full glass text-foreground/80">
                  {t}
                </span>
              ))}
            </div>
            {p.href && (
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all mt-5"
              >
                Visit project <ExternalLink size={14} />
              </a>
            )}
          </TiltCard>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href={links.designPortfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-electric to-violet text-primary-foreground px-7 py-3.5 rounded-xl text-sm font-semibold hover:scale-105 hover:shadow-[var(--shadow-glow)] transition-all"
        >
          <Palette size={17} /> Visit Design Portfolio <ExternalLink size={14} />
        </a>
      </div>
    </div>
  </section>
);

export default FeaturedProjects;
