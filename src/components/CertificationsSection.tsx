import { Award } from "lucide-react";

const certs = [
  "JP Morgan Chase Agile Job Simulation (Forage)",
  "Tata Data Visualization Simulation",
  "NEC Advance Track Certification",
  "E-Summit IIT Bombay Certificate",
  "CA Completion Letter",
];

const CertificationsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Certifications</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Credentials & Learning
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {certs.map((cert) => (
            <div
              key={cert}
              className="inline-flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-3 card-hover shadow-[var(--shadow-card)]"
            >
              <Award size={16} className="text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
