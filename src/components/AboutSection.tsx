import profileImg from "@/assets/profile.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
              <img
                src={profileImg}
                alt="Harshad at IIT Bombay"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase">About Me</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Student. Founder.<br />Ecosystem Builder.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a student at Modern Education Society's Wadia College of Engineering, Pune (SPPU) — but the classroom is just one part of my journey. As an entrepreneur and ecosystem builder, I'm passionate about startups, AI, and creating real-world impact.
              </p>
              <p>
                My work sits at the intersection of <span className="text-foreground font-medium">Technology</span>, <span className="text-foreground font-medium">Entrepreneurship</span>, and <span className="text-foreground font-medium">Community Building</span>. I focus on empowering students and early-stage startups to move from ideas to execution.
              </p>
            </div>

            <blockquote className="border-l-4 border-primary pl-5 py-2 mt-6">
              <p className="text-foreground font-heading font-semibold text-lg italic">
                "I don't just learn — I build, lead, and scale ideas into impact."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
