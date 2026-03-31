import { createContext, useContext, useState, useRef, useEffect, useCallback, ReactNode } from "react";

interface AudioContextType {
  isMuted: boolean;
  toggleMute: () => void;
  startBackgroundMusic: () => void;
}

const AudioCtx = createContext<AudioContextType>({
  isMuted: false,
  toggleMute: () => {},
  startBackgroundMusic: () => {},
});

export const useAudio = () => useContext(AudioCtx);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const [isMuted, setIsMuted] = useState(() => {
    return localStorage.getItem("hp-muted") === "true";
  });
  const bgMusicRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/audio/background-music.mp3");
    audio.loop = true;
    audio.volume = 0.12;
    audio.preload = "auto";
    bgMusicRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  useEffect(() => {
    if (bgMusicRef.current) {
      bgMusicRef.current.muted = isMuted;
    }
    localStorage.setItem("hp-muted", String(isMuted));
  }, [isMuted]);

  const toggleMute = useCallback(() => setIsMuted((p) => !p), []);

  const startBackgroundMusic = useCallback(() => {
    if (bgMusicRef.current) {
      bgMusicRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <AudioCtx.Provider value={{ isMuted, toggleMute, startBackgroundMusic }}>
      {children}
    </AudioCtx.Provider>
  );
};
