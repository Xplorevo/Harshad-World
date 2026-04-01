import { useState } from "react";
import { X } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import iitbImg from "@/assets/profile-iitb.jpg";
import necImg from "@/assets/nec-finals.jpg";
import xplorevoTripImg from "@/assets/xplorevo-trip.jpg";
import thubImg from "@/assets/thub-hyderabad.jpg";
import xplorevoPosterImg from "@/assets/xplorevo-poster.jpg";
import necCertImg from "@/assets/nec-certificate.jpg";

const images = [
  { src: thubImg, title: "T-Hub Hyderabad", category: "T-Hub Journey", span: "col-span-2 row-span-2" },
  { src: iitbImg, title: "IIT Bombay Visit", category: "E-Cell Events", span: "col-span-1 row-span-1" },
  { src: necImg, title: "NEC Finals — IIT Bombay", category: "E-Cell Events", span: "col-span-1 row-span-1" },
  { src: xplorevoTripImg, title: "Xplorevo Pilot Trip", category: "Xplorevo Trips", span: "col-span-1 row-span-1" },
  { src: necCertImg, title: "NEC Certificate of Appreciation", category: "Achievements", span: "col-span-1 row-span-1" },
  { src: xplorevoPosterImg, title: "Xplorevo — We Lived It", category: "Xplorevo Trips", span: "col-span-2 row-span-1" },
];

const JourneyGlimpses = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="journey" className="py-24 bg-surface">
      <div ref={ref} className={`container mx-auto px-4 lg:px-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Journey</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Glimpses of My Journey</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto auto-rows-[180px] md:auto-rows-[220px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.span} relative rounded-2xl overflow-hidden cursor-pointer group shadow-[var(--shadow-card)]`}
              onClick={() => setLightbox(i)}
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="text-primary-foreground text-sm font-bold">{img.title}</p>
                  <p className="text-primary-foreground/70 text-xs">{img.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors" onClick={() => setLightbox(null)}>
            <X size={32} />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].title}
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-8 text-center">
            <p className="text-primary-foreground font-heading font-bold text-lg">{images[lightbox].title}</p>
            <p className="text-primary-foreground/60 text-sm">{images[lightbox].category}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default JourneyGlimpses;
