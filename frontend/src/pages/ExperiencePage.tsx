import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { EngineeringTimeline } from "@/components/timeline/EngineeringTimeline";
import { CoffeeCorner } from "@/components/coffee/CoffeeCorner";
import { CheersCelebration } from "@/components/celebration/CheersButton";
import { AiCompanionModal } from "@/components/ai-companion/AiCompanionModal";
import { EasterEggTerminal } from "@/components/terminal/EasterEggTerminal";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export const ExperiencePage: React.FC = () => {
  useDocumentTitle("Experience & Timeline — Engineering Journey");
  const [coffeeModalOpen, setCoffeeModalOpen] = useState(false);
  const [cheersModalOpen, setCheersModalOpen] = useState(false);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [coffeeCount, setCoffeeCount] = useState(1);

  return (
    <main className="min-h-screen bg-[#F5F2FA] text-[#1E1B24] relative selection:bg-[#D8CDEE] selection:text-[#1E1B24]">
      <Navbar
        onOpenCoffee={() => setCoffeeModalOpen(true)}
        onOpenCheers={() => setCheersModalOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenAiChat={() => setAiChatOpen(true)}
        coffeeCount={coffeeCount}
      />

      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-[#8A75B3] hover:text-[#1E1B24] transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Universe
        </Link>

        {/* Timeline Component */}
        <EngineeringTimeline />
      </div>

      <Footer 
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenCoffee={() => setCoffeeModalOpen(true)}
        onOpenCheers={() => setCheersModalOpen(true)}
        onOpenAiChat={() => setAiChatOpen(true)}
      />

      <CoffeeCorner
        isOpen={coffeeModalOpen}
        onClose={() => setCoffeeModalOpen(false)}
        coffeeCount={coffeeCount}
        onIncrementCoffee={() => setCoffeeCount((c) => c + 1)}
      />
      <CheersCelebration isOpen={cheersModalOpen} onClose={() => setCheersModalOpen(false)} />
      <AiCompanionModal isOpen={aiChatOpen} onClose={() => setAiChatOpen(false)} />
      <EasterEggTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenCoffee={() => setCoffeeModalOpen(true)}
        onOpenCheers={() => setCheersModalOpen(true)}
      />
    </main>
  );
};

export default ExperiencePage;
