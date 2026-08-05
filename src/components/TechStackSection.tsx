import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const stack = [
  "React", "Next.js", "TypeScript", "Node.js", "Firebase", "Supabase",
  "Tailwind CSS", "Framer Motion", "OpenAI", "Claude", "Gemini", "n8n",
  "GitHub", "Vercel", "Netlify", "Figma", "Photoshop", "Illustrator", "Canva",
];

const TechStackSection = () => (
  <section id="stack" className="relative py-24 bg-background overflow-hidden">
    <div className="absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <SectionHeading
        eyebrow="Technology Stack"
        title={<>The tools I <span className="text-gradient-brand">build with</span></>}
        subtitle="A modern, AI-native stack for shipping products fast without cutting corners."
      />

      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {stack.map((tech, i) => (
          <motion.span
            key={tech}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: (i % 10) * 0.04 }}
            whileHover={{ y: -4, scale: 1.05 }}
            className="glass gradient-border rounded-xl px-5 py-3 text-sm font-semibold text-foreground cursor-default"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
