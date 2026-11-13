import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  GraduationCap, 
  Sparkles, 
  Award, 
  Code
} from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { GetToKnowTemkin } from "@/components/discovery/GetToKnowTemkin";
import { CoffeeCorner } from "@/components/coffee/CoffeeCorner";
import { CheersCelebration } from "@/components/celebration/CheersButton";
import { AiCompanionModal } from "@/components/ai-companion/AiCompanionModal";
import { EasterEggTerminal } from "@/components/terminal/EasterEggTerminal";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { getAssetUrl } from "@/utils/assetPath";

export const AboutPage: React.FC = () => {
  useDocumentTitle("About — Story & Engineering Journey");
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

      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-[#8A75B3] hover:text-[#1E1B24] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Universe
        </Link>

        {/* Editorial Header */}
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-[#8A75B3]">
            <Sparkles className="w-3.5 h-3.5" />
            Personal Story & Philosophy
          </div>
          <h1 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl text-[#1E1B24] leading-tight font-medium">
            Engineering Systems, Exploring Intelligence, Embracing Curiosity.
          </h1>
          <p className="text-lg text-[#5E5868] max-w-3xl leading-relaxed">
            An in-depth look into my educational journey at ASTU, passion for Agentic AI, and conviction that intelligence should feel magical.
          </p>
        </div>

        {/* Portrait & Core Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
          <div className="md:col-span-5 space-y-6">
            <div className="relative mx-auto max-w-sm rounded-3xl overflow-hidden shadow-xl border border-[#D8CDEE]/60 bg-white p-3">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F5F2FA]">
                <img
                  src={getAssetUrl("/images/temkin-portrait.jpg")}
                  alt="Temkin Abdulmelik"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-3 text-center space-y-1">
                <p className="font-editorial-serif font-semibold text-lg text-[#1E1B24]">Temkin Abdulmelik</p>
                <p className="text-xs text-[#5E5868]">Adama, Ethiopia • ASTU ECE &apos;27</p>
              </div>
            </div>

            <div className="card-luxury p-6 space-y-4">
              <h3 className="font-editorial-serif text-xl font-medium text-[#1E1B24] flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#8A75B3]" /> Academic Foundation
              </h3>
              <p className="text-sm text-[#5E5868] leading-relaxed">
                Currently pursuing a <strong>B.Sc. in Electronics and Communication Engineering</strong> at <strong>Adama Science and Technology University (ASTU)</strong>, class of 2027. Combining hardware intuition with modern software engineering.
              </p>
            </div>
          </div>

          <div className="md:col-span-7 space-y-8">
            <section className="card-luxury p-8 space-y-4">
              <h2 className="font-editorial-serif text-2xl font-medium text-[#1E1B24] flex items-center gap-2.5">
                <Code className="w-5 h-5 text-[#8A75B3]" /> Technical Philosophy
              </h2>
              <p className="text-sm sm:text-base text-[#5E5868] leading-relaxed">
                I believe software engineering is entering its most transformative era. Rather than merely writing rigid procedural workflows, we can now design autonomous agentic pipelines that perceive, reason, retrieve knowledge, and execute meaningful real-world tasks.
              </p>
              <p className="text-sm sm:text-base text-[#5E5868] leading-relaxed">
                My engineering focus centers on <strong>Python backend systems</strong>, <strong>FastAPI</strong>, <strong>PostgreSQL with pgvector</strong>, and <strong>LangGraph / Gemini agentic architectures</strong>. Every project is built with production standards, deterministic fallbacks, and zero tolerance for hallucination.
              </p>
            </section>

            <section className="card-luxury p-8 space-y-4">
              <h2 className="font-editorial-serif text-2xl font-medium text-[#1E1B24] flex items-center gap-2.5">
                <Award className="w-5 h-5 text-[#8A75B3]" /> Hackathons & Community Leadership
              </h2>
              <p className="text-sm sm:text-base text-[#5E5868] leading-relaxed">
                At the <strong>CSEC ASTU Hackathon v1.0</strong>, I led full-stack engineering for <strong>Meri AI</strong> with Team Divas. In a high-stakes 24-hour sprint, we captured <strong>1st Place</strong> by engineering an intelligent campus query and automation assistant.
              </p>
              <p className="text-sm sm:text-base text-[#5E5868] leading-relaxed">
                Beyond competing, I actively mentor fellow student developers within CSEC ASTU, guiding workshops on modern Git practices, API development, and machine learning fundamentals.
              </p>
            </section>
          </div>
        </div>

        {/* Discovery Dimension Cards */}
        <div className="my-16">
          <GetToKnowTemkin />
        </div>
      </div>

      <Footer 
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenCoffee={() => setCoffeeModalOpen(true)}
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

export default AboutPage;
