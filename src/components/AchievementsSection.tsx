import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Award,
  Brain,
  Building2,
  Crown,
  Flag,
  Gavel,
  GraduationCap,
  Medal,
  Mic,
  Network,
  Plane,
  Rocket,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import SectionHeading from "@/components/shared/SectionHeading";

const stats = [
  { value: 10, suffix: "+", label: "Leadership Positions" },
  { value: 1000, suffix: "+", label: "Students Impacted" },
  { value: 25, suffix: "+", label: "Events Organized" },
  { value: 100, suffix: "+", label: "Founder Connections" },
  { value: 50, suffix: "+", label: "Projects" },
  { value: 2, suffix: "+", label: "Companies Founded" },
  { value: 100, suffix: "K+", label: "Social Media Reach" },
];

const scrollingStats = [...stats, ...stats];

const achievements = [
  { icon: Crown, title: "Founder & CEO — Xplorevo Pvt Ltd", desc: "Leading a TravelTech venture from idea to execution." },
  { icon: Network, title: "Founded Xplorevo Tech Network", desc: "A student technology community connecting builders across India." },
  { icon: Building2, title: "Founded E-Cell, MESWCOE", desc: "Built the campus entrepreneurship ecosystem from scratch." },
  { icon: Trophy, title: "NEC Finalist — Top 10 India", desc: "National Entrepreneurship Challenge, IIT Bombay." },
  { icon: Medal, title: "Top 3 — NEC Leaderboard", desc: "Among the highest-ranked entrepreneurial campuses nationwide." },
  { icon: Award, title: "Winner — IgnitePitch", desc: "Business Plan Competition winner." },
  { icon: Flag, title: "Campus Ambassador", desc: "IIT Bombay · IIT Guwahati · IIT Mandi · IIT Kharagpur." },
  { icon: Rocket, title: "T-Hub Hyderabad Exposure", desc: "Immersion in India's largest startup incubator." },
  { icon: Users, title: "Built a Student Startup Ecosystem", desc: "Mentors, founders, and investors connected to campus." },
  { icon: Sparkles, title: "Organized Startup Competitions", desc: "Pitch events, ideathons, and founder showcases." },
  { icon: GraduationCap, title: "Organized Workshops", desc: "Hands-on sessions on product, AI, and entrepreneurship." },
  { icon: Users, title: "Led Multiple Tech Teams", desc: "Cross-functional design, dev, and growth teams." },
  { icon: Brain, title: "Built AI Products", desc: "AI-first tools solving real-world workflows." },
  { icon: Plane, title: "TravelTech Founder", desc: "Reimagining how students travel and explore." },
  { icon: Building2, title: "Business Analyst Experience", desc: "Strategy, market research, and requirement analysis." },
  { icon: Mic, title: "Public Speaker", desc: "Sessions on startups, AI, and student entrepreneurship." },
  { icon: GraduationCap, title: "Mentored Students", desc: "Career, product, and startup mentorship via Topmate." },
  { icon: Sparkles, title: "AI Content Creator", desc: "Sharing AI and startup insight with 100K+ reach." },
  { icon: Gavel, title: "Startup Judge Invitations Organizer", desc: "Curated industry judges for campus competitions." },
];

const AchievementsSection = () => {
  const [statsEmblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start", containScroll: "trimSnaps" },
    [AutoScroll({ speed: 0.45, direction: "backward", stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [achievementsEmblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start", containScroll: "trimSnaps" },
    [AutoScroll({ speed: 0.6, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  return (
  <section id="achievements" className="relative py-24 gradient-navy overflow-hidden noise on-dark">
    <div className="absolute inset-0 aurora" aria-hidden="true" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <SectionHeading
        invert
        eyebrow="Achievements"
        title={<>Milestones, recognition &amp; <span className="text-gradient-brand">real outcomes</span></>}
      />

      <div className="max-w-6xl mx-auto mb-16 overflow-hidden cursor-grab active:cursor-grabbing" ref={statsEmblaRef}>
        <div className="flex touch-pan-y">
          {scrollingStats.map((s, i) => (
            <div
              key={`${s.label}-${i}`}
              aria-hidden={i >= stats.length}
              className="min-w-0 shrink-0 grow-0 basis-[48%] sm:basis-[31%] lg:basis-[19%] pl-4 first:pl-0"
            >
              <div className="glass rounded-2xl p-5 text-center h-full min-h-28 flex flex-col items-center justify-center">
                <p className="text-2xl md:text-3xl font-heading font-bold text-gradient-brand">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-[11px] mt-1 text-primary-foreground/80 leading-tight">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto overflow-hidden cursor-grab active:cursor-grabbing" ref={achievementsEmblaRef}>
        <div className="flex touch-pan-y">
          {achievements.map((item) => (
            <article
              key={item.title}
              className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-[48%] lg:basis-[32%] pl-5 first:pl-0"
            >
              <div className="glass gradient-border rounded-2xl p-6 card-hover group h-full">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-electric/25 to-violet/25 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon size={20} className="text-cyan" />
                </div>
                <h3 className="text-base font-heading font-bold text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default AchievementsSection;
