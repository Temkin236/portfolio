import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { ExpertiseAndProcess } from "@/components/expertise/ExpertiseAndProcess";
import { GetToKnowTemkin } from "@/components/discovery/GetToKnowTemkin";
import { ProjectUniverse } from "@/components/projects/ProjectUniverse";
import { TechConstellation } from "@/components/constellation/TechConstellation";
import { EngineeringTimeline } from "@/components/timeline/EngineeringTimeline";
import { PhotoGallery } from "@/components/gallery/PhotoGallery";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/navigation/Footer";

import { CoffeeCorner } from "@/components/coffee/CoffeeCorner";
import { CheersCelebration } from "@/components/celebration/CheersButton";
import { AiCompanionModal } from "@/components/ai-companion/AiCompanionModal";
import { EasterEggTerminal } from "@/components/terminal/EasterEggTerminal";

export const HomePage: React.FC = () => {
  const [coffeeModalOpen, setCoffeeModalOpen] = useState(false);
  const [cheersModalOpen, setCheersModalOpen] = useState(false);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [coffeeCount, setCoffeeCount] = useState(1);

  // Global Keyboard Shortcut: Ctrl+K or Cmd+K opens the Easter Egg Terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen relative selection:bg-[#D8CDEE] selection:text-[#1E1B24]">
      {/* Top Fixed Luxury Navigation */}
      <Navbar
        onOpenCoffee={() => setCoffeeModalOpen(true)}
        onOpenCheers={() => setCheersModalOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenAiChat={() => setAiChatOpen(true)}
        coffeeCount={coffeeCount}
      />

      {/* Hero Section */}
      <HeroSection
        onOpenCoffee={() => setCoffeeModalOpen(true)}
        onOpenCheers={() => setCheersModalOpen(true)}
        onOpenAiChat={() => setAiChatOpen(true)}
      />

      {/* Inspo Aesthetic Sections: My Expertise + Tools & Technologies + My Process */}
      <ExpertiseAndProcess />

      {/* Signature Personality Discovery: Get to Know Temkin */}
      <GetToKnowTemkin />

      {/* Project Universe */}
      <ProjectUniverse />

      {/* Technical Universe Constellation */}
      <TechConstellation />

      {/* Chronological Engineering Journey Timeline */}
      <EngineeringTimeline />

      {/* Public Photo Experience */}
      <PhotoGallery />

      {/* Contact Section */}
      <ContactSection />

      {/* Editorial Footer */}
      <Footer
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenCoffee={() => setCoffeeModalOpen(true)}
      />

      {/* Modals & Overlays */}
      <CoffeeCorner
        isOpen={coffeeModalOpen}
        onClose={() => setCoffeeModalOpen(false)}
        coffeeCount={coffeeCount}
        onIncrementCoffee={() => setCoffeeCount((c) => c + 1)}
      />

      <CheersCelebration
        isOpen={cheersModalOpen}
        onClose={() => setCheersModalOpen(false)}
      />

      <AiCompanionModal
        isOpen={aiChatOpen}
        onClose={() => setAiChatOpen(false)}
      />

      <EasterEggTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenCoffee={() => setCoffeeModalOpen(true)}
        onOpenCheers={() => setCheersModalOpen(true)}
      />
    </main>
  );
};

export default HomePage;
