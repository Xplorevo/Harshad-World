import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ExternalLink,
  Handshake,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Palette,
} from "lucide-react";
import profileImg from "@/assets/profile2.jpg";
import profileImg2 from "@/assets/profile-iitb.jpg";
import ParticleField from "@/components/shared/ParticleField";
import Typewriter from "@/components/shared/Typewriter";
import { links, mailto } from "@/config/links";
import { trackCta, trackOutboundConversion } from "@/lib/analytics";

const images = [profileImg, profileImg2];

const rotating = [
  "Founder",
  "CEO",
  "AI Builder",
  "Startup Mentor",
  "Community Builder",
  "Tech Speaker",
  "Business Strategist",
  "Innovation Leader",
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: links.linkedin },
  { icon: Instagram, label: "Instagram", href: links.instagram },
  { icon: Mail, label: "Email", href: mailto },
  { icon: MessageCircle, label: "WhatsApp", href: links.whatsapp },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => setCurrent((p) => (p + 1) % images.length), 4500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      setParallax({
        x: (e.clientX / window.innerWidth - 0.5) * 24,
        y: (e.clientY / window.innerHeight - 0.5) * 24,
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-dvh gradient-hero flex items-center overflow-hidden noise"
    >
      <div className="absolute inset-0 aurora" aria-hidden="true" />
      <div className="absolute inset-0 grid-lines" aria-hidden="true" />
      <ParticleField />

      {/* Morphing blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-24 right-[8%] w-[26rem] h-[26rem] bg-electric/15 blur-3xl animate-blob"
        style={{ transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)` }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-6rem] left-[4%] w-[30rem] h-[30rem] bg-violet/15 blur-3xl animate-blob"
        style={{ animationDelay: "3s", transform: `translate3d(${-parallax.x}px, ${-parallax.y}px, 0)` }}
      />

      <div className="container mx-auto px-4 lg:px-8 pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-semibold text-foreground/80 tracking-wide"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-green-500 animate-ping-slow" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500" />
              </span>
              Founder &amp; CEO · Xplorevo Pvt Ltd · Open to Collaborations
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-heading font-bold leading-[1.03] tracking-tight text-foreground"
            >
              Harshad<br />
              Harishchandra<br />
              <span className="text-gradient-brand">Pakhale</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base md:text-lg text-muted-foreground font-medium"
            >
              Founder • Entrepreneur • AI Builder • Full Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="text-xl md:text-3xl font-heading font-bold text-foreground min-h-[2.5rem]"
            >
              <Typewriter words={rotating} className="text-gradient-brand" />
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 pt-1"
            >
              <a
                href={mailto}
                onClick={() => {
                  trackCta("startup_collaboration", "hero");
                  trackOutboundConversion("collaboration_contact_submit", "hero");
                }}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl text-sm font-semibold hover:scale-[1.04] hover:shadow-[var(--shadow-glow)] transition-all"
              >

                <Handshake size={16} /> Let's Collaborate
              </a>
              <a
                href="#journey"
                className="inline-flex items-center gap-2 glass px-5 py-3 rounded-xl text-sm font-semibold text-foreground hover:scale-[1.04] transition-all"
              >
                <ArrowDown size={16} /> Explore My Journey
              </a>
              <a
                href={links.designPortfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-electric to-violet text-primary-foreground px-5 py-3 rounded-xl text-sm font-semibold hover:scale-[1.04] transition-all"
              >
                <Palette size={16} /> View Design Portfolio <ExternalLink size={13} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2.5 pt-2"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-foreground/80 hover:text-primary hover:scale-110 hover:-translate-y-0.5 transition-all"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            style={{ transform: `translate3d(${parallax.x * 0.6}px, ${parallax.y * 0.6}px, 0)` }}
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[24rem] lg:h-[24rem] rounded-[2rem] overflow-hidden glass-strong p-1.5 relative animate-pulse-glow">
                <div className="w-full h-full rounded-[1.6rem] overflow-hidden relative">
                  {images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Harshad Harishchandra Pakhale, Founder and CEO of Xplorevo"
                      className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ${
                        i === current ? "opacity-100 scale-100" : "opacity-0 scale-110"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex gap-2 justify-center mt-5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Show photo ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? "bg-primary w-7" : "bg-primary/30 w-2"
                    }`}
                  />
                ))}
              </div>

              <div className="absolute -bottom-6 -left-6 glass rounded-2xl px-4 py-3 hidden sm:block animate-float">
                <p className="text-lg font-heading font-bold text-foreground">1000+</p>
                <p className="text-[11px] text-muted-foreground">Students impacted</p>
              </div>
              <div
                className="absolute -top-6 -right-4 glass rounded-2xl px-4 py-3 hidden sm:block animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <p className="text-lg font-heading font-bold text-foreground">2</p>
                <p className="text-[11px] text-muted-foreground">Ventures founded</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
