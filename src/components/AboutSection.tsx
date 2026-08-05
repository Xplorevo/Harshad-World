import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";
import SectionHeading from "@/components/shared/SectionHeading";

const paragraphs = [
  "I am Harshad Harishchandra Pakhale, a Computer Engineering student, entrepreneur, and technology leader passionate about transforming ambitious ideas into scalable businesses.",
  "As the Founder & CEO of Xplorevo Pvt Ltd, I am building technology-driven platforms that solve real-world challenges through Artificial Intelligence, Product Innovation, and Community-Led Growth.",
  "Beyond startups, I founded the Entrepreneurship Cell at MES Wadia College of Engineering, creating an ecosystem where students connect with founders, investors, mentors, and innovators.",
];

const AboutSection = () => (
  <section id="about" className="relative py-24 bg-surface overflow-hidden">
    <div className="absolute inset-0 aurora opacity-60" aria-hidden="true" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="w-full max-w-md mx-auto rounded-[2rem] overflow-hidden glass-strong p-1.5">
            <img
              src={profileImg}
              alt="Harshad Pakhale speaking at an entrepreneurship event"
              loading="lazy"
              className="w-full h-auto object-cover rounded-[1.6rem]"
            />
          </div>
          <div className="absolute -z-10 -inset-6 bg-electric/10 blur-3xl rounded-full" aria-hidden="true" />
        </motion.div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="Professional Summary"
            title={
              <>
                Build products.<br />
                Build people.<br />
                <span className="text-gradient-brand">Build ecosystems.</span>
              </>
            }
          />
          <div className="space-y-5 text-muted-foreground leading-relaxed -mt-8">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                {p}
              </motion.p>
            ))}
          </div>
          <blockquote className="mt-8 glass rounded-2xl p-6 border-l-4 border-l-primary">
            <p className="text-foreground font-heading font-semibold text-lg">
              "I believe technology becomes meaningful only when it creates measurable impact."
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
