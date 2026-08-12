import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import iitbImg from "@/assets/profile-iitb.jpg";
import necImg from "@/assets/nec-finals.jpg";
import xplorevoTripImg from "@/assets/xplorevo-trip.jpg";
import thubImg from "@/assets/thub-hyderabad.jpg";
import xplorevoPosterImg from "@/assets/xplorevo-poster.jpg";
import necCertImg from "@/assets/nec-certificate.jpg";
import illuminateAsset from "@/assets/illuminate-event.jpg.asset.json";
import hostAsset from "@/assets/host-event.jpg.asset.json";
import igniteAsset from "@/assets/ignitepitch-winner.jpg.asset.json";
import bhauAsset from "@/assets/bhau-coep.jpg.asset.json";
import mumbaiHacksAsset from "@/assets/mumbai-hacks.jpg.asset.json";
import thubVisitAsset from "@/assets/thub-visit.jpg.asset.json";
import firstTeamAsset from "@/assets/ecell-first-team.jpg.asset.json";
import mouAsset from "@/assets/xplorevo-ecell-mou.jpg.asset.json";

const images = [
  { src: illuminateAsset.url, title: "Organiser — Illuminate", category: "E-Cell MESWCOE" },
  { src: hostAsset.url, title: "Host — Entrepreneurship Panel", category: "E-Cell Events" },
  { src: igniteAsset.url, title: "Winner — Ignite Pitch", category: "Achievements" },
  { src: bhauAsset.url, title: "Bhau Institute, COEP Pune", category: "Ecosystem Visits" },
  { src: mumbaiHacksAsset.url, title: "Mumbai Hacks — Agentic AI", category: "India's Largest Hackathon" },
  { src: thubVisitAsset.url, title: "T-Hub Glimpse", category: "T-Hub Journey" },
  { src: firstTeamAsset.url, title: "Origin of E-Cell — First Team", category: "E-Cell Journey" },
  { src: mouAsset.url, title: "MoU — Xplorevo × E-Cell", category: "Sponsorship & Partnership" },
  { src: thubImg, title: "T-Hub Hyderabad", category: "T-Hub Journey" },
  { src: iitbImg, title: "IIT Bombay Visit", category: "E-Cell Events" },
  { src: necImg, title: "NEC Finals — IIT Bombay", category: "E-Cell Events" },
  { src: xplorevoTripImg, title: "Xplorevo Pilot Trip", category: "Xplorevo Trips" },
  { src: necCertImg, title: "NEC Certificate of Appreciation", category: "Achievements" },
  { src: xplorevoPosterImg, title: "Xplorevo — We Lived It", category: "Xplorevo Trips" },
];

const JourneyGlimpses = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal();

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start", containScroll: "trimSnaps" },
    [AutoScroll({ speed: 0.7, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const close = () => setLightbox(null);
  const prev = () => setLightbox((v) => (v !== null ? (v - 1 + images.length) % images.length : null));
  const next = () => setLightbox((v) => (v !== null ? (v + 1) % images.length : null));

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section id="journey" className="py-24 bg-surface overflow-hidden">
      <div ref={ref} className={`container mx-auto px-4 lg:px-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Journey</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Glimpses of My Journey</h2>
          <p className="text-muted-foreground mt-3">Swipe or drag to explore — moments from the build.</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {images.map((img, i) => (
                <div key={i} className="min-w-0 shrink-0 grow-0 basis-[80%] sm:basis-[45%] lg:basis-[31%] pl-4 first:pl-0">
                  <button
                    type="button"
                    onClick={() => setLightbox(i)}
                    className="relative block w-full h-[260px] md:h-[300px] rounded-2xl overflow-hidden group shadow-[var(--shadow-card)] bg-card"
                  >
                    <img src={img.src} alt={img.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent flex items-end p-4">
                      <div className="text-left">
                        <p className="text-primary-foreground text-sm font-bold">{img.title}</p>
                        <p className="text-primary-foreground/70 text-xs">{img.category}</p>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button onClick={scrollPrev} aria-label="Previous" className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-strong flex items-center justify-center text-foreground hover:scale-110 transition-transform z-10">
            <ChevronLeft size={18} />
          </button>
          <button onClick={scrollNext} aria-label="Next" className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-strong flex items-center justify-center text-foreground hover:scale-110 transition-transform z-10">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in" onClick={close}>
          <button className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground" onClick={close} aria-label="Close">
            <X size={32} />
          </button>
          <button className="absolute left-4 text-primary-foreground/80 hover:text-primary-foreground" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous image">
            <ChevronLeft size={36} />
          </button>
          <button className="absolute right-4 text-primary-foreground/80 hover:text-primary-foreground" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next image">
            <ChevronRight size={36} />
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
