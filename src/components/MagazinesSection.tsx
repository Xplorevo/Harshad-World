import { Download, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { motion } from "framer-motion";
import xplorevoMag from "@/assets/xplorevo-magazine.png";
import ventureSphereMag from "@/assets/venturesphere-magazine.png";
import ecellAdvanceMag from "@/assets/ecell-advance-magazine.png";

const magazines = [
  {
    title: "Xplorevo Story",
    desc: "The journey of building Xplorevo — from an idea to a travel-tech venture.",
    image: xplorevoMag,
    id: "1s4a_pYFXVv4u3o96MtgA03_k0G2-_mac",
  },
  {
    title: "E-Cell VentureSphere",
    desc: "The entrepreneurship magazine capturing startup culture and student innovations.",
    image: ventureSphereMag,
    id: "1C0GfcQbNOKT5oBUIgSBc_jjZpFW8eQXL",
  },
  {
    title: "E-Cell Advance",
    desc: "2026 Edition — Innovate Today, Elevate Tomorrow. The E-Cell Core journey.",
    image: ecellAdvanceMag,
    id: "1oPhOtJcXgJ58YIODKRBBK6yH8AbCCkqI",
  },
];

const MagazinesSection = () => (
  <section id="magazines" className="relative py-24 bg-surface overflow-hidden">
    <div className="absolute inset-0 aurora opacity-50" aria-hidden="true" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <SectionHeading
        eyebrow="Featured In"
        title={<>Publications &amp; <span className="text-gradient-brand">initiatives</span></>}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {magazines.map((mag, i) => (
          <motion.article
            key={mag.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group"
            style={{ perspective: "1400px" }}
          >
            <div
              className="relative aspect-[3/4] rounded-r-xl rounded-l-sm overflow-hidden shadow-[var(--shadow-elevated)] transition-transform duration-700 group-hover:[transform:rotateY(-16deg)_translateZ(20px)]"
              style={{ transformStyle: "preserve-3d", transformOrigin: "left center" }}
            >
              <img
                src={mag.image}
                alt={`${mag.title} magazine cover`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              {/* Spine + page edge */}
              <span className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/50 to-transparent" aria-hidden="true" />
              <span className="absolute inset-y-1 right-0 w-1.5 bg-gradient-to-l from-white/70 to-white/10 rounded-r" aria-hidden="true" />
            </div>

            <div className="mt-5 space-y-2.5">
              <h3 className="text-base font-heading font-bold text-foreground">{mag.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{mag.desc}</p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={`https://drive.google.com/file/d/${mag.id}/view`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                >
                  Read <ExternalLink size={14} />
                </a>
                <a
                  href={`https://drive.google.com/uc?export=download&id=${mag.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                >
                  Download PDF <Download size={14} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default MagazinesSection;
