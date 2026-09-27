import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2 } from "lucide-react";
import { useAudio } from "@/components/AudioProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface VoiceoverButtonProps {
  src: string;
  label: string;
  className?: string;
}

const VOICEOVER_PLAY_EVENT = "portfolio:voiceover-play";

const VoiceoverButton = ({ src, label, className }: VoiceoverButtonProps) => {
  const { isMuted } = useAudio();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const idRef = useRef(`voiceover-${Math.random().toString(36).slice(2)}`);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.preload = "metadata";
    audio.muted = isMuted;
    audioRef.current = audio;

    const finish = () => setIsPlaying(false);
    const stopForAnotherVoiceover = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail;
      if (detail === idRef.current) return;
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    };

    audio.addEventListener("ended", finish);
    audio.addEventListener("error", finish);
    window.addEventListener(VOICEOVER_PLAY_EVENT, stopForAnotherVoiceover);

    return () => {
      audio.pause();
      audio.removeEventListener("ended", finish);
      audio.removeEventListener("error", finish);
      window.removeEventListener(VOICEOVER_PLAY_EVENT, stopForAnotherVoiceover);
      audioRef.current = null;
    };
  }, [src]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = isMuted;
  }, [isMuted]);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    window.dispatchEvent(new CustomEvent(VOICEOVER_PLAY_EVENT, { detail: idRef.current }));
    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      onClick={togglePlayback}
      aria-pressed={isPlaying}
      aria-label={`${isPlaying ? "Pause" : "Play"} ${label}`}
      title={isMuted ? "Turn sound on to hear the voiceover" : undefined}
      className={cn("h-11 rounded-xl glass border-border/70 px-4", className)}
    >
      {isPlaying ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
      <span>{isPlaying ? "Pause voiceover" : label}</span>
      <Volume2 aria-hidden="true" className="opacity-60" />
    </Button>
  );
};

export default VoiceoverButton;