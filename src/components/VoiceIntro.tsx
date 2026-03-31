import { useState, useEffect, useRef } from "react";
import xplorevoLogo from "@/assets/xplorevo-logo.jpg";
import xtnLogo from "@/assets/xtn-logo.png";

const lines = [
  "Dear Ladies and Gentlemen,",
  "Welcome to the personal portfolio of",
  "Mr. Harshad Harishchandra Pakhale —",
  "Founder & CEO, driven by innovation,",
  "powered by execution.",
  "This space reflects not just work…",
  "But a mindset of building, leading, and evolving.",
];

// Map line indices to venture logos to show
const ventureSync: Record<number, { src: string; label: string }[]> = {
  3: [{ src: xplorevoLogo, label: "Xplorevo" }],
  4: [{ src: xtnLogo, label: "Xplorevo Tech Network" }],
  5: [
    { src: xplorevoLogo, label: "Xplorevo" },
    { src: xtnLogo, label: "XTN" },
  ],
};

interface VoiceIntroProps {
  onComplete: () => void;
}

const VoiceIntro = ({ onComplete }: VoiceIntroProps) => {
  const [activeLine, setActiveLine] = useState(-1);
  const [fadeOut, setFadeOut] = useState(false);
  const [started, setStarted] = useState(false);
  const bgMusicRef = useRef<HTMLAudioElement | null>(null);
  const synthRef = useRef<SpeechSynthesisUtterance | null>(null);

  const startIntro = () => {
    setStarted(true);

    // Background music
    const bgMusic = new Audio("/audio/background-music.mp3");
    bgMusic.volume = 0.15;
    bgMusic.loop = true;
    bgMusic.play().catch(() => {});
    bgMusicRef.current = bgMusic;

    // Speech synthesis
    const fullText = lines.join(" ");
    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.rate = 0.8;
    utterance.pitch = 0.8;
    utterance.volume = 1;

    // Try to pick a deep male voice
    const voices = speechSynthesis.getVoices();
    const maleVoice = voices.find(
      (v) =>
        v.lang.startsWith("en") &&
        (v.name.toLowerCase().includes("male") ||
          v.name.toLowerCase().includes("daniel") ||
          v.name.toLowerCase().includes("james") ||
          v.name.toLowerCase().includes("google uk english male") ||
          v.name.toLowerCase().includes("david"))
    );
    if (maleVoice) utterance.voice = maleVoice;

    synthRef.current = utterance;

    // Animate lines with timing
    let charCount = 0;
    const lineTimings: number[] = [];
    const totalChars = lines.reduce((s, l) => s + l.length, 0);
    const estimatedDuration = (totalChars / 5) * (1 / utterance.rate); // rough estimate

    lines.forEach((line) => {
      lineTimings.push((charCount / totalChars) * estimatedDuration * 1000);
      charCount += line.length;
    });

    lineTimings.forEach((time, i) => {
      setTimeout(() => setActiveLine(i), time + 500);
    });

    utterance.onend = () => {
      setTimeout(() => {
        setFadeOut(true);
        if (bgMusicRef.current) {
          const fadeInterval = setInterval(() => {
            if (bgMusicRef.current && bgMusicRef.current.volume > 0.01) {
              bgMusicRef.current.volume = Math.max(0, bgMusicRef.current.volume - 0.01);
            } else {
              clearInterval(fadeInterval);
              bgMusicRef.current?.pause();
            }
          }, 50);
        }
        setTimeout(onComplete, 800);
      }, 1000);
    };

    speechSynthesis.speak(utterance);
  };

  // Load voices
  useEffect(() => {
    speechSynthesis.getVoices();
    const onVoicesChanged = () => speechSynthesis.getVoices();
    speechSynthesis.addEventListener("voiceschanged", onVoicesChanged);
    return () => {
      speechSynthesis.removeEventListener("voiceschanged", onVoicesChanged);
      speechSynthesis.cancel();
      bgMusicRef.current?.pause();
    };
  }, []);

  const skip = () => {
    speechSynthesis.cancel();
    bgMusicRef.current?.pause();
    onComplete();
  };

  const currentVentures = ventureSync[activeLine] || [];

  if (!started) {
    return (
      <div className="fixed inset-0 z-[10000] flex flex-col items-center justify-center gradient-navy">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        <div className="relative z-10 text-center space-y-8">
          <div className="w-20 h-20 mx-auto rounded-full border-2 border-gold/40 flex items-center justify-center animate-pulse-glow">
            <span className="text-3xl">🎙️</span>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-3">
              Welcome Experience
            </h2>
            <p className="text-primary-foreground/60 text-sm max-w-xs mx-auto">
              Tap play to hear the welcome introduction with music
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <button
              onClick={startIntro}
              className="bg-gold text-foreground px-8 py-3.5 rounded-xl text-base font-bold hover:opacity-90 transition-all hover:scale-105"
            >
              ▶ Play Welcome
            </button>
            <button
              onClick={skip}
              className="text-primary-foreground/40 text-sm hover:text-primary-foreground/70 transition-colors"
            >
              Skip →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center gradient-navy transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-gold/20 animate-float"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 4) * 20}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${4 + i * 0.5}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center space-y-8">
        {/* Voice lines */}
        <div className="space-y-3">
          {lines.map((line, i) => (
            <p
              key={i}
              className={`text-lg md:text-2xl font-heading font-semibold transition-all duration-700 ${
                i <= activeLine
                  ? "text-primary-foreground opacity-100 translate-y-0"
                  : "text-primary-foreground/10 opacity-0 translate-y-4"
              } ${i === activeLine ? "text-gold scale-105" : ""}`}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Venture logos synced */}
        {currentVentures.length > 0 && (
          <div className="flex items-center justify-center gap-6 animate-scale-in">
            {currentVentures.map((v) => (
              <div key={v.label} className="flex flex-col items-center gap-2">
                <img
                  src={v.src}
                  alt={v.label}
                  className="h-14 w-14 md:h-20 md:w-20 rounded-xl object-contain bg-primary-foreground/10 p-2 animate-pulse-glow"
                />
                <span className="text-primary-foreground/70 text-xs font-medium">{v.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* Audio visualizer bars */}
        <div className="flex items-end justify-center gap-1 h-8">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="w-1 bg-gold/60 rounded-full animate-pulse"
              style={{
                height: `${8 + Math.random() * 24}px`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${0.5 + Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>

        <button
          onClick={skip}
          className="text-primary-foreground/30 text-sm hover:text-primary-foreground/60 transition-colors"
        >
          Skip Introduction →
        </button>
      </div>
    </div>
  );
};

export default VoiceIntro;
