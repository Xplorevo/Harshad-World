import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Crown,
  GraduationCap,
  Palette,
  Rocket,
  Users,
  Zap,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const steps = [
  { icon: GraduationCap, label: "Student", desc: "Computer Engineering at MES Wadia College of Engineering, Pune." },
  { icon: Palette, label: "Designer", desc: "Brand identity, campaign creatives, and digital design systems." },
  { icon: Code2, label: "Developer", desc: "Full stack products with React, Next.js, and modern cloud tooling." },
  { icon: Rocket, label: "Founder", desc: "Turned an idea into Xplorevo — a travel-tech venture." },
  { icon: Crown, label: "CEO", desc: "Leading strategy, product, partnerships, and investor readiness." },
  { icon: Users, label: "Community Builder", desc: "E-Cell and Xplorevo Tech Network — thousands of students reached." },
  { icon: Brain, label: "AI Entrepreneur", desc: "Shipping AI-first products and automation for real problems." },
  { icon: Zap, label: "Technology Leader", desc: "Mentoring teams, founders, and students across the ecosystem." },
];

const WhoAmISection = () => (
  <section id="who-am-i" className="relative py-24 bg-background overflow-hidden">
    <div className="absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <SectionHeading
        eyebrow="Who Am I"
        title={<>The path from <span className="text-gradient-brand">learner to leader</span></>}
        subtitle="Every role compounded into the next. This is the evolution."
      />

      <div className="relative max-w-3xl mx-auto">
        <div
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric via-cyan to-violet md:-translate-x-1/2"
          aria-hidden="true"
        />
        <ol className="space-y-8">
          {steps.map((s, i) => (
            <motion.li
              key={s.label}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              className={`relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-10 ${
                i % 2 === 0 ? "" : "md:[direction:rtl]"
              }`}
            >
              <div
                className={`glass gradient-border rounded-2xl p-5 card-hover ${
                  i % 2 === 0 ? "md:text-right" : "md:[direction:ltr]"
                }`}
              >
                <h3 className="font-heading font-bold text-foreground text-lg">{s.label}</h3>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{s.desc}</p>
              </div>
              <span
                className="absolute left-0 md:left-1/2 top-4 md:-translate-x-1/2 w-12 h-12 rounded-xl glass-strong flex items-center justify-center text-primary"
                aria-hidden="true"
              >
                <s.icon size={20} />
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default WhoAmISection;
