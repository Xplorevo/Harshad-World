import { Code, TrendingUp, Palette, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillCategories = [
  { icon: Code, title: "Technical", skills: ["Full Stack Development", "Web Development", "AI Enthusiast", "Product Development"] },
  { icon: TrendingUp, title: "Business", skills: ["Startup Strategy", "Business Analysis", "Growth & Scaling", "Networking"] },
  { icon: Palette, title: "Creative", skills: ["Graphic Design", "Branding", "Social Media Strategy"] },
  { icon: Users, title: "Leadership", skills: ["Team Management", "Event Management", "Mentoring", "Public Speaking"] },
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-24 bg-surface">
      <div ref={ref} className={`container mx-auto px-4 lg:px-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">What I Bring to the Table</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((cat, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6 card-hover shadow-[var(--shadow-card)]">
              <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center mb-5">
                <cat.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-base font-heading font-bold text-foreground mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
