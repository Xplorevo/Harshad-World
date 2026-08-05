import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("hp-dark") !== "false";
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("hp-dark", String(dark));
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="fixed bottom-6 left-6 z-[9998] w-10 h-10 rounded-full bg-card/80 backdrop-blur-lg border border-border shadow-lg flex items-center justify-center hover:scale-110 transition-all"
      aria-label={dark ? "Light mode" : "Dark mode"}
    >
      {dark ? (
        <Sun size={18} className="text-gold" />
      ) : (
        <Moon size={18} className="text-primary" />
      )}
    </button>
  );
};

export default DarkModeToggle;
