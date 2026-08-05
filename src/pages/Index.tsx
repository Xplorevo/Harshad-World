import { useState, useCallback } from "react";
import { AudioProvider } from "@/components/AudioProvider";
import CinematicIntro from "@/components/CinematicIntro";
import MuteToggle from "@/components/MuteToggle";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhoAmISection from "@/components/WhoAmISection";
import ExperienceSection from "@/components/ExperienceSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import AchievementsSection from "@/components/AchievementsSection";
import SkillsSection from "@/components/SkillsSection";
import TechStackSection from "@/components/TechStackSection";
import JourneyGlimpses from "@/components/JourneyGlimpses";
import CertificationsSection from "@/components/CertificationsSection";
import MagazinesSection from "@/components/MagazinesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);
  const handleIntroComplete = useCallback(() => setIntroComplete(true), []);
  useSmoothScroll();

  return (
    <AudioProvider>
      {!introComplete && <CinematicIntro onComplete={handleIntroComplete} />}
      {introComplete && (
        <>
          <ScrollProgress />
          <MuteToggle />
          <DarkModeToggle />
        </>
      )}
      <div className={`min-h-dvh bg-background ${!introComplete ? "overflow-hidden h-dvh" : ""}`}>
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <WhoAmISection />
          <ExperienceSection />
          <FeaturedProjects />
          <AchievementsSection />
          <SkillsSection />
          <TechStackSection />
          <JourneyGlimpses />
          <CertificationsSection />
          <MagazinesSection />
          <TestimonialsSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingWhatsApp />
        {introComplete && <BackToTop />}
      </div>
    </AudioProvider>
  );
};

export default Index;
