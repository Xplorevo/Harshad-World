import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const groups = [
  {
    title: "Leadership & Business",
    skills: [
      { name: "Leadership", level: 95 },
      { name: "Startup Building", level: 93 },
      { name: "Business Strategy", level: 90 },
      { name: "Product Strategy", level: 88 },
      { name: "Business Analysis", level: 85 },
    ],
  },
  {
    title: "Technology & AI",
    skills: [
      { name: "Full Stack Development", level: 88 },
      { name: "Artificial Intelligence", level: 87 },
      { name: "Cloud", level: 78 },
      { name: "DevOps", level: 72 },
    ],
  },
  {
    title: "Design & Creative",
    skills: [
      { name: "UI / UX", level: 86 },
      { name: "Graphic Design", level: 90 },
      { name: "Content Creation", level: 88 },
      { name: "Marketing", level: 84 },
    ],
  },
  {
    title: "People & Community",
    skills: [
      { name: "Public Speaking", level: 90 },
      { name: "Networking", level: 94 },
      { name: "Community Building", level: 95 },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="relative py-24 bg-surface overflow-hidden">
    <div className="absolute inset-0 aurora opacity-50" aria-hidden="true" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <SectionHeading
        eyebrow="Skills"
        title={<>What I bring to <span className="text-gradient-brand">the table</span></>}
      />

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (gi % 2) * 0.08 }}
            className="glass gradient-border rounded-2xl p-7"
          >
            <h3 className="font-heading font-bold text-foreground text-lg mb-6">{g.title}</h3>
            <div className="space-y-4">
              {g.skills.map((s, i) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-foreground font-medium">{s.name}</span>
                    <span className="text-muted-foreground tabular-nums">{s.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-electric via-cyan to-violet"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
