import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Award, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const certs = [
  { id: "1KKuxytFapbIsjOJK5LoxlfrCIw6oRQd2" },
  { id: "1UPmlMFHDyGWfW2ksUwAgshY3tiBS0RQt" },
  { id: "1O5xUbUksKSLc57aQrpXtc2DMSTVHqAM7" },
  { id: "1paYHBfM_hn1r_Kjj2B3vIKUqDKcTXADa" },
  { id: "1zaL_X2TP1M4140Ate8E_OHNeiKadBEK3" },
  { id: "1dCXY2WIVF5SwGeqFjaeJ-UMtjkasRet2" },
  { id: "1F7SD2YB_S3c6OC-RJzyFbclefc0TZ1to" },
  { id: "1uYVQ4rHPxpv0KGbxkcCu5SPvqFiVZp-g" },
  { id: "154zFM9uH1Zm462ypbygENxLtsBGDtU_k" },
  { id: "1vTF_frwhXToHahn4dwaNmFIrAsINXSM5" },
  { id: "1S2CYC49b2t4vmveQ3ZeLrPEHI1UTq5cB" },
  { id: "1q2HK6V34-LsutcwoAliFTfFgTi4yraDj" },
  { id: "1M9mPA6cQSFOViAVC7_VrR6J1oHtuWcFN" },
  { id: "1Xp9lp3OUp2caZnpDpvmhC7yYnw2tx7Za" },
  { id: "1R30az1PEnqErq6-qCQ40Sft90XRG2D5q" },
  { id: "1QHYGrkVgvLeQ6COoEg8h3Xnbdf6sHo8n" },
  { id: "1IYivtFykuFZFcfyxOCVhcwJ-LWmcHBJY" },
  { id: "1j9zbfOc-JXTd-nUpijWyMuNRTsU8zOoI" },
  { id: "1_-cXFs_Z3MzaVmtgpLFyq4mk7PxN3xSl" },
  { id: "1psEqSsAAdz-agkovw_UDqPcTEb5eABFy" },
  { id: "1OZUwkhLRL8iip1oJTFivSg9CHL8BQnlc" },
  { id: "1QT3r8aJtmfQbGGS-K82w91k6wa7Q2mSd" },
  { id: "1UN_4HGSJjlRvl4GwH8vRLmwQ6L4VasL5" },
  { id: "1EOsZeWoogeUr8U9v2kS4MiU_tCRPmDJg" },
];

const getThumb = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w600`;
const getFullImg = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1200`;

const CertificationsSection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { ref, isVisible } = useScrollReveal();

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start", containScroll: "trimSnaps" },
    [AutoScroll({ speed: 0.6, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((v) => (v !== null ? (v - 1 + certs.length) % certs.length : null));
  const next = () => setLightbox((v) => (v !== null ? (v + 1) % certs.length : null));

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section id="certifications" className="py-24 bg-background overflow-hidden">
      <div ref={ref} className={`container mx-auto px-4 lg:px-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <Award size={18} className="text-primary" />
            <p className="text-sm font-semibold text-primary tracking-widest uppercase">Certifications</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Certifications & Continuous Learning</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Validated skills. Swipe to browse all certificates.</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {certs.map((cert, i) => (
                <div key={cert.id} className="min-w-0 shrink-0 grow-0 basis-[70%] sm:basis-[40%] lg:basis-[26%] pl-4 first:pl-0">
                  <button
                    type="button"
                    onClick={() => setLightbox(i)}
                    className="group block w-full rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={getThumb(cert.id)} alt={`Certificate ${i + 1}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button onClick={scrollPrev} aria-label="Previous certificate" className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-strong flex items-center justify-center text-foreground hover:scale-110 transition-transform z-10">
            <ChevronLeft size={18} />
          </button>
          <button onClick={scrollNext} aria-label="Next certificate" className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-strong flex items-center justify-center text-foreground hover:scale-110 transition-transform z-10">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fade-in" onClick={closeLightbox}>
          <button onClick={closeLightbox} aria-label="Close" className="absolute top-4 right-4 text-white/80 hover:text-white z-10"><X size={28} /></button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous" className="absolute left-4 text-white/80 hover:text-white z-10"><ChevronLeft size={36} /></button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next" className="absolute right-4 text-white/80 hover:text-white z-10"><ChevronRight size={36} /></button>
          <img src={getFullImg(certs[lightbox].id)} alt={`Certificate ${lightbox + 1}`} className="max-w-full max-h-[85vh] rounded-lg object-contain" onClick={(e) => e.stopPropagation()} />
          <p className="absolute bottom-4 text-white/60 text-sm">{lightbox + 1} / {certs.length}</p>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;
