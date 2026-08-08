import { useState } from "react";
import { ExternalLink, Palette, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import TiltCard from "@/components/shared/TiltCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { links } from "@/config/links";

type Project = {
  title: string;
  tagline: string;
  tags: string[];
  href?: string;
  caseStudy: {
    role: string;
    timeline: string;
    problem: string;
    approach: string[];
    outcome: string[];
  };
};

const projects: Project[] = [
  {
    title: "Xplorevo",
    tagline: "TravelTech platform reimagining how students explore India.",
    tags: ["TravelTech", "AI", "Next.js", "Firebase", "React"],
    href: links.xplorevo,
    caseStudy: {
      role: "Founder & CEO — product, engineering and go-to-market",
      timeline: "2024 — present",
      problem:
        "Student travel in India is fragmented: unreliable planning, unclear budgets, and no trustworthy group-travel options built for campuses.",
      approach: [
        "Designed an AI-assisted trip planner that builds budget-aware itineraries for student groups.",
        "Built the platform on Next.js, React and Firebase for fast iteration and low running cost.",
        "Ran campus-led distribution through the Xplorevo Tech Network and college communities.",
      ],
      outcome: [
        "Live TravelTech product with a repeatable campus acquisition channel.",
        "Formalised as Xplorevo Pvt Ltd with a founding operating team.",
      ],
    },
  },
  {
    title: "YojanaRadar",
    tagline: "AI-powered platform that matches citizens with government schemes.",
    tags: ["AI", "Public Tech", "React", "LLM"],
    href: links.yojanaradar,
    caseStudy: {
      role: "Founder & full stack / AI developer",
      timeline: "2025 — present",
      problem:
        "Thousands of central and state welfare schemes exist, but citizens rarely know which ones they are eligible for — the information is scattered across portals and PDFs.",
      approach: [
        "Structured scheme data into a searchable eligibility model.",
        "Used LLM-based matching so users describe their situation in plain language instead of filling long forms.",
        "Shipped a lightweight React front end optimised for low-bandwidth mobile users.",
      ],
      outcome: [
        "Working public-tech product that turns eligibility discovery into a single conversation.",
        "Reusable AI matching layer that can extend to new scheme categories.",
      ],
    },
  },
  {
    title: "Xplorevo Tech Network",
    tagline: "A student tech community connecting developers, designers and founders.",
    tags: ["Community", "Ecosystem", "Events"],
    href: links.xtn,
    caseStudy: {
      role: "Founder & community lead",
      timeline: "2024 — present",
      problem:
        "Talented student builders were isolated across colleges with no shared space to collaborate, learn or find co-founders.",
      approach: [
        "Built an open network with events, workshops and project collaborations.",
        "Created a mentor layer connecting students with founders and industry practitioners.",
        "Used the network as the distribution engine for Xplorevo products.",
      ],
      outcome: [
        "1000+ students reached across campuses.",
        "Active pipeline of collaborators, interns and early product users.",
      ],
    },
  },
  {
    title: "Entrepreneurship Cell",
    tagline: "Community platform and startup ecosystem for MESWCOE.",
    tags: ["Community", "Startups", "Web"],
    href: links.ecell,
    caseStudy: {
      role: "Founder & President, E-Cell MES Wadia College of Engineering, Pune",
      timeline: "2024 — present",
      problem:
        "The campus had no structured entrepreneurship body — students with ideas had no mentors, funding paths or launch support.",
      approach: [
        "Founded the cell from zero: charter, core team, faculty backing and a web presence.",
        "Ran ideation sprints, speaker sessions and startup showcases.",
        "Connected students to external ecosystems via IIT campus-ambassador networks.",
      ],
      outcome: [
        "A functioning campus startup ecosystem with recurring programming.",
        "Student teams taken from raw idea to demo-ready prototype.",
      ],
    },
  },
  {
    title: "Portfolio Website",
    tagline: "This site — a cinematic, performance-first founder portfolio.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    href: links.portfolio,
    caseStudy: {
      role: "Designer & developer",
      timeline: "2025",
      problem:
        "A founder profile spread across LinkedIn and decks made it hard for partners, mentors and recruiters to grasp the full story quickly.",
      approach: [
        "Built a single cinematic narrative: journey, ventures, proof and contact.",
        "Engineered with React, TypeScript, Tailwind and Framer Motion, with smooth scrolling and canvas particle effects.",
        "Layered in structured data, Open Graph tags and analytics for discoverability.",
      ],
      outcome: [
        "One link that communicates positioning, credibility and contact paths.",
        "Fast, accessible and fully responsive across devices.",
      ],
    },
  },
  {
    title: "Graphics Portfolio",
    tagline: "Brand identity, campaign creative, and visual systems.",
    tags: ["Design", "Branding", "Figma", "Adobe"],
    href: links.designPortfolio,
    caseStudy: {
      role: "Designer",
      timeline: "2022 — present",
      problem:
        "Early-stage ventures and campus events needed credible visual identity without agency budgets.",
      approach: [
        "Built reusable brand systems: logos, type scales, colour and campaign templates.",
        "Delivered event and product creative across social, print and web.",
      ],
      outcome: [
        "Consistent brand language across Xplorevo, XTN and E-Cell.",
        "A standalone design portfolio used for freelance and collaboration inquiries.",
      ],
    },
  },
];

const FeaturedProjects = () => {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-70" aria-hidden="true" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Featured Projects"
          title={<>Products, platforms &amp; <span className="text-gradient-brand">ecosystems</span></>}
          subtitle="Shipped work across AI, travel-tech, community platforms, and design. Open any project for the full case study."
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
              <div className="flex flex-wrap items-center gap-4 mt-5">
                <button
                  type="button"
                  onClick={() => setActive(p)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:gap-2.5 transition-all"
                >
                  Case study <ArrowRight size={14} />
                </button>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                  >
                    Visit project <ExternalLink size={14} />
                  </a>
                )}
              </div>
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

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {active && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-heading">{active.title}</DialogTitle>
                <DialogDescription>{active.tagline}</DialogDescription>
              </DialogHeader>

              <div className="space-y-6 text-sm">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Role</p>
                    <p className="text-foreground mt-1">{active.caseStudy.role}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Timeline</p>
                    <p className="text-foreground mt-1">{active.caseStudy.timeline}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-foreground">The problem</h4>
                  <p className="text-muted-foreground mt-1.5 leading-relaxed">{active.caseStudy.problem}</p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-foreground">Approach</h4>
                  <ul className="mt-1.5 space-y-1.5">
                    {active.caseStudy.approach.map((a) => (
                      <li key={a} className="text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-foreground">Outcome</h4>
                  <ul className="mt-1.5 space-y-1.5">
                    {active.caseStudy.outcome.map((o) => (
                      <li key={o} className="text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {active.tags.map((t) => (
                    <span key={t} className="text-[11px] font-medium px-2.5 py-1 rounded-full glass text-foreground/80">
                      {t}
                    </span>
                  ))}
                </div>

                {active.href && (
                  <a
                    href={active.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl text-sm font-semibold hover:shadow-[var(--shadow-glow)] transition-all"
                  >
                    Visit project <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FeaturedProjects;
