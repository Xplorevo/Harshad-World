import { Briefcase } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import TiltCard from "@/components/shared/TiltCard";
import xplorevoLogo from "@/assets/xplorevo-logo.jpg";
import xtnLogo from "@/assets/xtn-logo.png";
import ecellLogo from "@/assets/ecell-logo.png";

interface Experience {
  role: string;
  company: string;
  meta?: string;
  period?: string;
  logo?: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    role: "Founder & CEO",
    company: "Xplorevo Pvt Ltd",
    meta: "TravelTech Startup",
    period: "2025 — Present",
    logo: xplorevoLogo,
    points: [
      "Leading product strategy and AI integration",
      "Business development and partnerships",
      "Investor readiness and fundraising narrative",
      "Scalable technology solutions",
    ],
  },
  {
    role: "Founder",
    company: "Xplorevo Tech Network (XTN)",
    meta: "Student Technology Community",
    period: "2025 — Present",
    logo: xtnLogo,
    points: [
      "Building one of India's largest student technology communities",
      "Connecting developers, designers, founders, and innovators",
    ],
  },
  {
    role: "Founder",
    company: "Entrepreneurship Cell, MES Wadia College of Engineering",
    meta: "Campus Startup Ecosystem",
    period: "2024 — Present",
    logo: ecellLogo,
    points: [
      "Built the Entrepreneurship Cell from scratch",
      "Organized startup events and workshops",
      "Built institutional and startup partnerships",
      "Created a founder ecosystem and led student teams",
    ],
  },
  {
    role: "Business Analyst",
    company: "Dasvande Technologies",
    meta: "Hyderabad",
    points: ["Business strategy", "Market research", "Requirement analysis", "AI product planning"],
  },
  {
    role: "Graphics Designer",
    company: "EIC Club",
    points: ["Brand identity", "Creative design", "Marketing assets", "Digital branding"],
  },
  {
    role: "Startup Mentor",
    company: "Topmate",
    points: ["Career mentoring", "Startup guidance", "Product strategy", "AI consulting"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="relative py-24 bg-surface overflow-hidden">
    <div className="absolute inset-0 aurora opacity-50" aria-hidden="true" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <SectionHeading
        eyebrow="Experience"
        title={<>Where I've made <span className="text-gradient-brand">measurable impact</span></>}
      />

      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-7 top-2 bottom-2 w-px bg-border hidden md:block" aria-hidden="true" />
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={exp.role + exp.company} className="relative flex gap-6">
              <div className="hidden md:flex flex-shrink-0 w-14 h-14 rounded-2xl glass-strong items-center justify-center z-10 overflow-hidden">
                {exp.logo ? (
                  <img src={exp.logo} alt={`${exp.company} logo`} loading="lazy" className="w-9 h-9 object-contain rounded-md" />
                ) : (
                  <Briefcase size={20} className="text-primary" />
                )}
              </div>
              <TiltCard className="flex-1 p-6" delay={i * 0.05} intensity={5}>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <p className="text-xs font-semibold text-primary tracking-widest uppercase">{exp.company}</p>
                  {exp.period && (
                    <span className="text-[11px] font-medium text-muted-foreground glass rounded-full px-2.5 py-0.5">
                      {exp.period}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground">{exp.role}</h3>
                {exp.meta && <p className="text-sm text-muted-foreground mt-0.5">{exp.meta}</p>}
                <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {exp.points.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-electric to-violet flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
