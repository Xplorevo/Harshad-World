import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ChevronLeft, ChevronRight, X, Sparkles, Play } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const creatives = [
  { src: "/creatives/creative-8.mp4", poster: "/creatives/creative-8.jpg", title: "AI Creative 08", category: "AI Generated" },
  { src: "/creatives/creative-9.mp4", poster: "/creatives/creative-9.jpg", title: "AI Creative 09", category: "AI Generated" },
  { src: "/creatives/creative-10.mp4", poster: "/creatives/creative-10.jpg", title: "AI Creative 10", category: "AI Generated" },
  { src: "/creatives/creative-11.mp4", poster: "/creatives/creative-11.jpg", title: "AI Creative 11", category: "AI Generated" },
  { src: "/creatives/creative-12.mp4", poster: "/creatives/creative-12.jpg", title: "AI Creative 12", category: "AI Generated" },
  { src: "/creatives/creative-1.mp4", poster: "/creatives/creative-1.jpg", title: "AI Creative 01", category: "AI Generated" },
  { src: "/creatives/creative-2.mp4", poster: "/creatives/creative-2.jpg", title: "AI Creative 02", category: "AI Generated" },
  { src: "/creatives/creative-3.mp4", poster: "/creatives/creative-3.jpg", title: "AI Creative 03", category: "AI Generated" },
  { src: "/creatives/creative-4.mp4", poster: "/creatives/creative-4.jpg", title: "AI Creative 04", category: "AI Generated" },
  { src: "/creatives/creative-5.mp4", poster: "/creatives/creative-5.jpg", title: "AI Creative 05", category: "AI Generated" },
  { src: "/creatives/creative-6.mp4", poster: "/creatives/creative-6.jpg", title: "AI Creative 06", category: "AI Generated" },
  { src: "/creatives/creative-7.mp4", poster: "/creatives/creative-7.jpg", title: "AI Creative 07", category: "AI Generated" },
];

const AiCreativesSection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start", containScroll: "trimSnaps" },
    [AutoScroll({ speed: 0.5, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Autoplay videos that are on screen, pause the rest (saves bandwidth on mobile)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.35 }
    );
    videoRefs.current.forEach((v) => v && observer.observe(v));
    return () => observer.disconnect();
  }, []);

  const close = () => setLightbox(null);
  const prev = () => setLightbox((v) => (v !== null ? (v - 1 + creatives.length) % creatives.length : null));
  const next = () => setLightbox((v) => (v !== null ? (v + 1) % creatives.length : null));

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
    <section id="ai-creatives" className="py-24 bg-background overflow-hidden">
      <div
        ref={ref}
        className={`container mx-auto px-4 lg:px-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles size={18} className="text-primary" />
            <p className="text-sm font-semibold text-primary tracking-widest uppercase">AI Creatives</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">AI Creatives Crafted by Me</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            AI-generated films and ad creatives. They play as they slide — drag to explore more, tap for sound.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {creatives.map((item, i) => (
                <div key={item.src} className="min-w-0 shrink-0 grow-0 basis-[72%] sm:basis-[40%] lg:basis-[26%] pl-4 first:pl-0">
                  <button
                    type="button"
                    onClick={() => setLightbox(i)}
                    className="relative block w-full aspect-[9/16] rounded-2xl overflow-hidden group shadow-[var(--shadow-card)] bg-card border border-border"
                  >
                    <video
                      ref={(el) => { videoRefs.current[i] = el; }}
                      src={item.src}
                      poster={item.poster}
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="auto"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 w-9 h-9 rounded-full glass-strong flex items-center justify-center text-foreground">
                      <Play size={15} />
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                      <p className="text-primary-foreground text-sm font-bold">{item.title}</p>
                      <p className="text-primary-foreground/70 text-xs">{item.category}</p>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button onClick={scrollPrev} aria-label="Previous creative" className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-strong flex items-center justify-center text-foreground hover:scale-110 transition-transform z-10">
            <ChevronLeft size={18} />
          </button>
          <button onClick={scrollNext} aria-label="Next creative" className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-strong flex items-center justify-center text-foreground hover:scale-110 transition-transform z-10">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-foreground/90 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in" onClick={close}>
          <button className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground z-10" onClick={close} aria-label="Close">
            <X size={30} />
          </button>
          <button className="absolute left-4 text-primary-foreground/80 hover:text-primary-foreground z-10" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">
            <ChevronLeft size={34} />
          </button>
          <button className="absolute right-4 text-primary-foreground/80 hover:text-primary-foreground z-10" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">
            <ChevronRight size={34} />
          </button>
          <video
            key={creatives[lightbox].src}
            src={creatives[lightbox].src}
            poster={creatives[lightbox].poster}
            controls
            autoPlay
            loop
            playsInline
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 text-primary-foreground/70 text-sm">{lightbox + 1} / {creatives.length}</p>
        </div>
      )}
    </section>
  );
};

export default AiCreativesSection;
