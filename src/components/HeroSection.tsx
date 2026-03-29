import profileImg from "@/assets/profile2.jpg";
import { Calendar, Handshake, Linkedin, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(hsl(var(--navy)) 1px, transparent 1px)",
        backgroundSize: "24px 24px"
      }} />

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 text-xs font-semibold text-primary tracking-wide animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Open to Collaborations
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] text-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Harshad<br />
              <span className="gradient-text-navy">Pakhale</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
              AI Enthusiast & Full Stack Developer · Founder · Entrepreneur · Ecosystem Builder · Graphics Designer · Business Analyst
            </p>

            <p className="text-sm text-muted-foreground max-w-md animate-fade-up" style={{ animationDelay: "0.25s" }}>
              Building innovative solutions at the intersection of technology and entrepreneurship.
            </p>

            <div className="flex flex-wrap gap-3 pt-2 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <a
                href="https://topmate.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <Calendar size={16} /> Book Appointment
              </a>
              <a
                href="mailto:ceo@xplorevo.tech"
                className="inline-flex items-center gap-2 border border-primary/20 text-primary px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/5 transition-colors"
              >
                <Handshake size={16} /> Collaborate
              </a>
              <a
                href="https://www.linkedin.com/in/harshad-pakhale-221hp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary/20 text-primary px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/5 transition-colors"
              >
                <Linkedin size={16} /> Connect
              </a>
              <a
                href="https://wa.me/919067572205"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)] border-4 border-background ring-1 ring-border">
                <img
                  src={profileImg}
                  alt="Harshad Pakhale"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl gradient-navy opacity-10 -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl border-2 border-primary/20 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
