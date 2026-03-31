import { useState, useEffect, useRef } from "react";
import profileImg from "@/assets/profile.jpg";
import xplorevoLogo from "@/assets/xplorevo-logo.jpg";
import xtnLogo from "@/assets/xtn-logo.png";
import { useAudio } from "./AudioProvider";

const INTRO_TEXT =
  "Dear Ladies and Gentlemen, Welcome to the portfolio of Mr. Harshad Harishchandra Pakhale. Founder, CEO, and a visionary turning ideas into reality. This is not just a portfolio. It's a journey of innovation, execution, and impact.";

const DISPLAY_LINES = [
  "Dear Ladies and Gentlemen,",
  "Welcome to the portfolio of",
  "Mr. Harshad Harishchandra Pakhale —",
  "Founder, CEO, and a visionary",
  "turning ideas into reality.",
  "This is not just a portfolio…",
  "It's a journey of innovation,",
  "execution, and impact.",
];

const VENTURE_AT: Record<number, { src: string; label: string }[]> = {
  4: [{ src: xplorevoLogo, label: "Xplorevo" }],
  5: [{ src: xtnLogo, label: "XTN" }],
  6: [
    { src: xplorevoLogo, label: "Xplorevo" },
    { src: xtnLogo, label: "XTN" },
  ],
};

interface Props {
  onComplete: () => void;
}

const CinematicIntro = ({ onComplete }: Props) => {
  const { isMuted, startBackgroundMusic } = useAudio();
  const [phase, setPhase] = useState<"loading" | "speaking" | "fadeout">("loading");
  const [progress, setProgress] = useState(0);
  const [activeLine, setActiveLine] = useState(-1);
  const synthSpoken = useRef(false);
  const hasInteracted = useRef(false);

  // Loading phase — 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 2.5; // ~40 steps * 100ms = 4s
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // When loading done, begin speaking
  useEffect(() => {
    if (progress >= 100 && phase === "loading") {
      setTimeout(() => setPhase("speaking"), 300);
    }
  }, [progress, phase]);

  // Auto-play voice + music on first user interaction (browser policy)
  useEffect(() => {
    const tryAutoplay = () => {
      if (hasInteracted.current) return;
      hasInteracted.current = true;
      startBackgroundMusic();
      speakIntro();
    };

    // Attempt immediate (some browsers allow after gesture)
    const autoTimer = setTimeout(() => {
      startBackgroundMusic();
      if (phase === "speaking" && !synthSpoken.current) speakIntro();
    }, 200);

    // Fallback: first interaction
    const events = ["click", "touchstart", "keydown", "scroll"];
    events.forEach((e) => document.addEventListener(e, tryAutoplay, { once: true, passive: true }));

    return () => {
      clearTimeout(autoTimer);
      events.forEach((e) => document.removeEventListener(e, tryAutoplay));
    };
  }, [phase]);

  // Speak when phase changes to speaking
  useEffect(() => {
    if (phase === "speaking" && !synthSpoken.current) {
      startBackgroundMusic();
      speakIntro();
    }
  }, [phase]);

  const speakIntro = () => {
    if (synthSpoken.current) return;
    synthSpoken.current = true;

    const utterance = new SpeechSynthesisUtterance(INTRO_TEXT);
    utterance.rate = 0.82;
    utterance.pitch = 0.75;
    utterance.volume = isMuted ? 0 : 1;

    const voices = speechSynthesis.getVoices();
    const male = voices.find(
      (v) =>
        v.lang.startsWith("en") &&
        (v.name.toLowerCase().includes("daniel") ||
          v.name.toLowerCase().includes("david") ||
          v.name.toLowerCase().includes("james") ||
          v.name.toLowerCase().includes("male") ||
          v.name.toLowerCase().includes("google uk english male"))
    );
    if (male) utterance.voice = male;

    // Animate display lines over the speech duration
    const estimatedDuration = (INTRO_TEXT.length / 5) * (1 / utterance.rate) * 1000;
    const lineDelay = estimatedDuration / DISPLAY_LINES.length;

    DISPLAY_LINES.forEach((_, i) => {
      setTimeout(() => setActiveLine(i), i * lineDelay + 200);
    });

    utterance.onend = () => {
      setTimeout(() => {
        setPhase("fadeout");
        setTimeout(onComplete, 800);
      }, 600);
    };

    // Fallback if speech doesn't fire onend
    setTimeout(() => {
      if (phase !== "fadeout") {
        setPhase("fadeout");
        setTimeout(onComplete, 800);
      }
    }, estimatedDuration + 3000);

    speechSynthesis.speak(utterance);
  };

  const skip = () => {
    speechSynthesis.cancel();
    startBackgroundMusic();
    onComplete();
  };

  const ventures = VENTURE_AT[activeLine] || [];

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center gradient-navy transition-opacity duration-700 ${
        phase === "fadeout" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-gold/25 animate-float"
          style={{
            left: `${8 + i * 11}%`,
            top: `${12 + (i % 4) * 20}%`,
            animationDelay: `${i * 0.35}s`,
            animationDuration: `${3.5 + i * 0.4}s`,
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto px-6">
        {/* Profile */}
        <div className="relative animate-pulse-glow">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-gold/40 shadow-[0_0_40px_hsl(40_90%_55%/0.3)]">
            <img src={profileImg} alt="Harshad Pakhale" className="w-full h-full object-cover object-top" />
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-gold/20 animate-ping-slow" />
        </div>

        {/* Loading phase */}
        {phase === "loading" && (
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-xl md:text-2xl font-heading font-bold text-primary-foreground tracking-wide animate-text-reveal">
              Mr. Harshad Harishchandra Pakhale
            </h1>
            <p className="text-gold text-xs font-medium tracking-[0.25em] uppercase">
              Founder · CEO · Visionary
            </p>
            <div className="w-48 md:w-56 mx-auto mt-4">
              <div className="h-1 bg-primary-foreground/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-gold to-primary-foreground rounded-full transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-primary-foreground/30 text-xs mt-2 text-center font-mono">{Math.round(progress)}%</p>
            </div>
          </div>
        )}

        {/* Speaking phase */}
        {phase === "speaking" && (
          <div className="text-center space-y-6 animate-fade-in">
            <div className="space-y-2">
              {DISPLAY_LINES.map((line, i) => (
                <p
                  key={i}
                  className={`text-base md:text-xl font-heading font-semibold transition-all duration-600 ${
                    i <= activeLine
                      ? "text-primary-foreground opacity-100 translate-y-0"
                      : "text-primary-foreground/5 opacity-0 translate-y-3"
                  } ${i === activeLine ? "text-gold scale-[1.03]" : ""}`}
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Venture logos */}
            {ventures.length > 0 && (
              <div className="flex items-center justify-center gap-5 animate-scale-in">
                {ventures.map((v) => (
                  <div key={v.label} className="flex flex-col items-center gap-1.5">
                    <img
                      src={v.src}
                      alt={v.label}
                      className="h-12 w-12 md:h-16 md:w-16 rounded-xl object-contain bg-primary-foreground/10 p-1.5 animate-pulse-glow"
                    />
                    <span className="text-primary-foreground/50 text-[10px] font-medium">{v.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Audio visualizer */}
            <div className="flex items-end justify-center gap-[3px] h-6">
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className="w-[3px] bg-gold/50 rounded-full animate-pulse"
                  style={{
                    height: `${6 + Math.random() * 18}px`,
                    animationDelay: `${i * 0.08}s`,
                    animationDuration: `${0.4 + Math.random() * 0.4}s`,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Skip */}
        <button
          onClick={skip}
          className="text-primary-foreground/25 text-xs hover:text-primary-foreground/50 transition-colors mt-2"
        >
          Skip →
        </button>
      </div>
    </div>
  );
};

export default CinematicIntro;
