import { GraduationCap, Rocket, Handshake, Calendar, Mail, Users } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "For Students",
    items: ["Career guidance", "Startup direction", "Choosing the right path"],
    cta: "Book Appointment",
    ctaIcon: Calendar,
    href: "https://topmate.io",
  },
  {
    icon: Rocket,
    title: "For Startups",
    items: ["Strategy & growth", "Collaboration", "Product & execution"],
    cta: "Collaborate",
    ctaIcon: Mail,
    href: "mailto:ceo@xplorevo.tech",
  },
  {
    icon: Users,
    title: "Networking",
    items: ["Partnerships", "Community building", "Speaking & mentorship"],
    cta: "Connect",
    ctaIcon: Handshake,
    href: "https://www.linkedin.com/in/harshad-pakhale-221hp/",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Services</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            How I Can Help
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card border border-border rounded-2xl p-7 card-hover shadow-[var(--shadow-card)] flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5">
                <s.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-4">{s.title}</h3>
              <ul className="space-y-2 mb-6 flex-1">
                {s.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity w-full"
              >
                <s.ctaIcon size={16} /> {s.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
