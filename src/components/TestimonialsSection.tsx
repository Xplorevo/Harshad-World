import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const testimonials = [
  {
    quote:
      "Harshad built the Entrepreneurship Cell from nothing into a genuine campus ecosystem. His ability to rally people around a mission is rare at this stage of a career.",
    name: "Prof. Shrikant Dhawale",
    role: "Faculty, MES Wadia College of Engineering",
  },
  {
    quote:
      "Sharp product thinking and relentless follow-through. He asks the right questions about users and business model before writing a single line of code.",
    name: "Mr. Vaidyanath Bobilli",
    role: "Startup Founder",
  },
  {
    quote:
      "His mentorship gave me a clear roadmap — from picking a stack to pitching my idea. One session changed how I approach building.",
    name: "Sihals Solanki",
    role: "Student Mentee",
  },
  {
    quote:
      "Harshad guided me through building and pitching my first project. Practical advice, honest feedback, and genuine support throughout.",
    name: "Janhavi Todkar",
    role: "Student Mentee",
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), []);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [next]);

  const t = testimonials[index];

  return (
    <section id="testimonials" className="relative py-24 bg-surface overflow-hidden">
      <div className="absolute inset-0 aurora opacity-60" aria-hidden="true" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>What mentors, founders &amp; <span className="text-gradient-brand">students say</span></>}
        />

        <div className="max-w-3xl mx-auto">
          <div className="glass-strong rounded-3xl p-8 md:p-12 relative min-h-[16rem] flex flex-col justify-center">
            <Quote size={40} className="text-primary/25 mb-4" aria-hidden="true" />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-lg md:text-xl font-heading text-foreground leading-relaxed">{t.quote}</p>
                <footer className="mt-6">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-foreground hover:scale-110 transition-transform"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === index ? "w-7 bg-primary" : "w-2 bg-primary/30"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-foreground hover:scale-110 transition-transform"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
