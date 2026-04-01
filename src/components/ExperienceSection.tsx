import { Briefcase } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  { role: "CEO & Director", company: "Xplorevo Pvt Ltd", desc: "Leading a travel-tech startup from ideation to execution, building scalable products and driving business growth." },
  { role: "Founder", company: "Xplorevo Tech Network (XTN)", desc: "Created a tech ecosystem connecting student developers, designers, and entrepreneurs for collaborative projects." },
  { role: "Founder", company: "Entrepreneurship Cell, MES Wadia College of Engineering", desc: "Built the E-Cell from scratch — organizing events, mentorship programs, and startup workshops on campus." },
  { role: "Business Analyst", company: "Dasvande Technologies, Hyderabad", desc: "1-month intensive role analyzing business processes, market trends, and strategic product decisions." },
  { role: "Graphics Designer", company: "EIC Club", desc: "Designed visual identities, event posters, and branding materials that elevated the club's presence." },
  { role: "Mentor", company: "Startup & Student Guidance (Topmate)", desc: "Guiding aspiring entrepreneurs and students on career paths, startup strategy, and execution frameworks." },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-24 bg-background">
      <div ref={ref} className={`container mx-auto px-4 lg:px-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Where I've Made Impact</h2>
        </div>
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative flex gap-6 group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 items-center justify-center z-10 group-hover:bg-primary/10 transition-colors">
                  <Briefcase size={18} className="text-primary" />
                </div>
                <div className="flex-1 bg-card border border-border rounded-xl p-6 card-hover shadow-[var(--shadow-card)]">
                  <p className="text-xs font-semibold text-primary tracking-wide uppercase mb-1">{exp.company}</p>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
