import { useState, useCallback } from "react";
import { AudioProvider } from "@/components/AudioProvider";
import CinematicIntro from "@/components/CinematicIntro";
import MuteToggle from "@/components/MuteToggle";
import DarkModeToggle from "@/components/DarkModeToggle";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
import SkillsSection from "@/components/SkillsSection";
import JourneyGlimpses from "@/components/JourneyGlimpses";
import CertificationsSection from "@/components/CertificationsSection";
import MagazinesSection from "@/components/MagazinesSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroComplete(true), []);

  return (
    <AudioProvider>
      {!introComplete && <CinematicIntro onComplete={handleIntroComplete} />}
      {introComplete && (
        <>
          <MuteToggle />
          <DarkModeToggle />
        </>
      )}
      <div className={`min-h-screen bg-background ${!introComplete ? "overflow-hidden h-screen" : ""}`}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <AchievementsSection />
        <SkillsSection />
        <JourneyGlimpses />
        <CertificationsSection />
        <MagazinesSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
        <FloatingWhatsApp />
      </div>
    </AudioProvider>
  );
};

export default Index;
