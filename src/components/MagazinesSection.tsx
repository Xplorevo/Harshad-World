import xplorevoMag from "@/assets/xplorevo-magazine.png";
import ventureSphereMag from "@/assets/venturesphere-magazine.png";
import ecellAdvanceMag from "@/assets/ecell-advance-magazine.png";
import { ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const magazines = [
  { title: "Xplorevo Story", desc: "The journey of building Xplorevo — from an idea to a travel-tech venture.", image: xplorevoMag, link: "https://drive.google.com/file/d/1s4a_pYFXVv4u3o96MtgA03_k0G2-_mac/view" },
  { title: "E-Cell VentureSphere", desc: "The entrepreneurship magazine capturing startup culture and student innovations.", image: ventureSphereMag, link: "https://drive.google.com/file/d/1C0GfcQbNOKT5oBUIgSBc_jjZpFW8eQXL/view" },
  { title: "E-Cell Advance", desc: "2026 Edition — Innovate Today, Elevate Tomorrow. The E-Cell Core journey.", image: ecellAdvanceMag, link: "https://drive.google.com/file/d/1oPhOtJcXgJ58YIODKRBBK6yH8AbCCkqI/view" },
];

const MagazinesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="magazines" className="py-24 bg-surface">
      <div ref={ref} className={`container mx-auto px-4 lg:px-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Featured In</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">My Work & Initiatives</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {magazines.map((mag) => (
            <div key={mag.title} className="bg-card border border-border rounded-2xl overflow-hidden card-hover shadow-[var(--shadow-card)] group">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={mag.image} alt={mag.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-base font-heading font-bold text-foreground">{mag.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{mag.desc}</p>
                <a href={mag.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                  View Magazine <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MagazinesSection;
