import { Trophy, Medal, Rocket, Users, Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const achievements = [
  { icon: Trophy, title: "NEC IIT Bombay Finalist", desc: "Top 10 in India — National Entrepreneurship Challenge" },
  { icon: Medal, title: "3rd Rank on NEC Leaderboard", desc: "Recognized among the top entrepreneurial minds nationwide" },
  { icon: Rocket, title: "Founded 2 Ventures", desc: "Xplorevo Pvt Ltd and Xplorevo Tech Network" },
  { icon: Users, title: "Built E-Cell Ecosystem", desc: "Created the entrepreneurship cell from the ground up" },
  { icon: Award, title: "Campus Ambassador", desc: "IIT Bombay & IIT Guwahati — representing innovation on campus" },
  { icon: Users, title: "Organized Events & Workshops", desc: "Startup events, mentorship programs, and hands-on sessions" },
];

const AchievementsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="achievements" className="py-24 gradient-navy">
      <div ref={ref} className={`container mx-auto px-4 lg:px-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gold tracking-widest uppercase mb-3">Achievements</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">Milestones & Recognition</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((item, i) => (
            <div key={i} className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 card-hover group">
              <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
                <item.icon size={20} className="text-gold" />
              </div>
              <h3 className="text-base font-heading font-bold text-primary-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
