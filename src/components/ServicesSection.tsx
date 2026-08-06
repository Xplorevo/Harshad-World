import { Building2, Check, GraduationCap, Rocket } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import TiltCard from "@/components/shared/TiltCard";
import { mailto } from "@/config/links";

const services = [
  {
    icon: GraduationCap,
    title: "For Students",
    blurb: "Clarity on what to build, learn, and pitch next.",
    items: ["Career Roadmap", "AI Guidance", "Resume Review", "Mock Interview"],
    cta: "Get in Touch",
    href: mailto,
  },
  {
    icon: Rocket,
    title: "For Startups",
    blurb: "From raw idea to a validated, fundable product.",
    items: [
      "MVP Development",
      "AI Consulting",
      "Business Strategy",
      "Pitch Deck",
      "Product Validation",
      "Growth Strategy",
    ],
    cta: "Start a Conversation",
    href: mailto,
    featured: true,
  },
  {
    icon: Building2,
    title: "For Companies",
    blurb: "Technology and brand leadership on demand.",
    items: ["Technology Consulting", "AI Automation", "Product Development", "Brand Strategy"],
    cta: "Request a Proposal",
    href: mailto,
  },
];

const ServicesSection = () => (
  <section id="services" className="relative py-24 bg-background overflow-hidden">
    <div className="absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <SectionHeading
        eyebrow="Services"
        title={<>How I can <span className="text-gradient-brand">help you win</span></>}
        subtitle="Focused engagements for students, startups, and companies."
      />

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
        {services.map((s, i) => (
          <TiltCard
            key={s.title}
            delay={i * 0.07}
            className={`p-7 flex flex-col ${s.featured ? "md:-mt-4 md:mb-4 ring-1 ring-primary/40" : ""}`}
          >
            {s.featured && (
              <span className="self-start mb-4 text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-gradient-to-r from-electric to-violet text-primary-foreground">
                Most requested
              </span>
            )}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric/20 to-violet/20 flex items-center justify-center mb-5">
              <s.icon size={22} className="text-primary" />
            </div>
            <h3 className="text-xl font-heading font-bold text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground mt-1.5 mb-5">{s.blurb}</p>
            <ul className="space-y-2.5 mb-7 flex-1">
              {s.items.map((item) => (
                <li key={item} className="text-sm text-foreground/80 flex items-center gap-2.5">
                  <Check size={15} className="text-cyan flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-[1.03] w-full ${
                s.featured
                  ? "bg-gradient-to-r from-electric to-violet text-primary-foreground"
                  : "bg-primary text-primary-foreground"
              }`}
            >
              {s.cta}
            </a>
          </TiltCard>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
