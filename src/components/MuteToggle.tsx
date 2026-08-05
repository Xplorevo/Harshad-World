import { Volume2, VolumeX } from "lucide-react";
import { useAudio } from "./AudioProvider";

const MuteToggle = () => {
  const { isMuted, toggleMute } = useAudio();

  return (
    <button
      onClick={toggleMute}
      className="fixed bottom-6 left-20 z-[9998] w-10 h-10 rounded-full bg-card/80 backdrop-blur-lg border border-border shadow-lg flex items-center justify-center hover:scale-110 transition-all"
      aria-label={isMuted ? "Unmute" : "Mute"}
    >
      {isMuted ? (
        <VolumeX size={18} className="text-muted-foreground" />
      ) : (
        <Volume2 size={18} className="text-primary" />
      )}
    </button>
  );
};

export default MuteToggle;
