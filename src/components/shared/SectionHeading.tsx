import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  invert?: boolean;
}

const SectionHeading = ({ eyebrow, title, subtitle, align = "center", invert = false }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className={`mb-14 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}
  >
    <p
      className={`text-xs font-semibold tracking-[0.22em] uppercase mb-4 ${
        invert ? "text-cyan" : "text-primary"
      }`}
    >
      {eyebrow}
    </p>
    <h2
      className={`text-3xl md:text-5xl font-heading font-bold text-balance ${
        invert ? "text-primary-foreground" : "text-foreground"
      }`}
    >
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-4 text-base leading-relaxed ${invert ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
