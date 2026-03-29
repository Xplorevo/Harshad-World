import { useState, useCallback } from "react";
import Loader from "@/components/Loader";
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
  const [loading, setLoading] = useState(true);
  const handleComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <Loader onComplete={handleComplete} />}
      <div className={`min-h-screen bg-background ${loading ? "overflow-hidden h-screen" : ""}`}>
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
    </>
  );
};

export default Index;
