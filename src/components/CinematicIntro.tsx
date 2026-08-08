import { useState, useEffect } from "react";
import profileImg from "@/assets/profile.jpg";

interface Props {
  onComplete: () => void;
}

const CinematicIntro = ({ onComplete }: Props) => {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + 10));
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 100) return;
    const fadeTimer = setTimeout(() => setFading(true), 150);
    const doneTimer = setTimeout(onComplete, 650);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center gradient-navy transition-opacity duration-500 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-5 px-6">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-gold/40">
          <img
            src={profileImg}
            alt="Harshad Harishchandra Pakhale"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="w-48 md:w-56">
          <div className="h-1 bg-primary-foreground/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-gold to-primary-foreground rounded-full transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinematicIntro;
