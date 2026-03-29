import { useState, useEffect } from "react";
import profileImg from "@/assets/profile.jpg";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + 1;
      });
    }, 90);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center gradient-navy transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: "radial-gradient(hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-gold/30 animate-float"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${3 + i * 0.5}s`,
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Profile image with glow */}
        <div className="relative animate-pulse-glow">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-gold/40 shadow-[0_0_40px_hsl(40_90%_55%/0.3)]">
            <img src={profileImg} alt="Harshad Pakhale" className="w-full h-full object-cover object-top" />
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-gold/20 animate-ping-slow" />
        </div>

        {/* Name */}
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground tracking-wide animate-text-reveal">
            Mr. Harshad Harishchandra Pakhale
          </h1>
          <p className="text-gold text-sm mt-2 font-medium tracking-widest uppercase animate-fade-up" style={{ animationDelay: "0.5s" }}>
            Founder · Entrepreneur · Builder
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-48 md:w-64 mt-4">
          <div className="h-1 bg-primary-foreground/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-gold to-primary-foreground rounded-full transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-primary-foreground/40 text-xs mt-2 text-center font-mono">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
