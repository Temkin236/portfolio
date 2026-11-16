import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Lock, Eye, FileText, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { CoffeeCorner } from "@/components/coffee/CoffeeCorner";
import { CheersCelebration } from "@/components/celebration/CheersButton";
import { AiCompanionModal } from "@/components/ai-companion/AiCompanionModal";
import { EasterEggTerminal } from "@/components/terminal/EasterEggTerminal";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export const PrivacyPage: React.FC = () => {
  useDocumentTitle("Privacy & Information Security — Data Principles");
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

      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-[#8A75B3] hover:text-[#1E1B24] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Universe
        </Link>

        {/* Header */}
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-[#8A75B3]">
            <Shield className="w-3.5 h-3.5" />
            Security & Information Classification
          </div>
          <h1 className="font-editorial-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1B24] font-medium leading-tight">
            Privacy Policy & Data Principles
          </h1>
          <p className="text-sm sm:text-base text-[#5E5868]">
            How Temkin&apos;s World safeguards personal data, enforces strict AI retrieval boundaries, and protects visitor inquiries.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          <section className="card-luxury p-8 space-y-4">
            <h2 className="font-editorial-serif text-2xl font-medium text-[#1E1B24] flex items-center gap-2.5">
              <Lock className="w-5 h-5 text-[#8A75B3]" /> 1. Three-Tier Information Classification
            </h2>
            <p className="text-sm sm:text-base text-[#5E5868] leading-relaxed">
              Temkin&apos;s World strictly categorizes all platform materials into three explicit security tiers:
            </p>
            <ul className="space-y-3 text-sm text-[#5E5868]">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-[#1E1B24]">PUBLIC:</strong> Verified professional accomplishments, open source projects, and public university milestones displayed on the website and indexed in the public RAG companion.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-[#1E1B24]">PRIVATE:</strong> Personal documents, private notes, and family photographs. These are encrypted, hidden from all public API endpoints, and strictly excluded from AI vector search.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-[#1E1B24]">DRAFT:</strong> Content undergoing review by Temkin prior to explicit publication.</span>
              </li>
            </ul>
          </section>

          <section className="card-luxury p-8 space-y-4">
            <h2 className="font-editorial-serif text-2xl font-medium text-[#1E1B24] flex items-center gap-2.5">
              <Eye className="w-5 h-5 text-[#8A75B3]" /> 2. AI Companion Data Handling & Zero Hallucination
            </h2>
            <p className="text-sm sm:text-base text-[#5E5868] leading-relaxed">
              When querying the AI companion, your conversational messages are streamed directly to the FastAPI backend and evaluated against public knowledge vectors. 
              The AI assistant is strictly instructed to answer only from verified public documents, explicitly abstaining if a topic is not grounded in context.
            </p>
          </section>

          <section className="card-luxury p-8 space-y-4">
            <h2 className="font-editorial-serif text-2xl font-medium text-[#1E1B24] flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-[#8A75B3]" /> 3. Contact Form Inquiries
            </h2>
            <p className="text-sm sm:text-base text-[#5E5868] leading-relaxed">
              Messages submitted through the contact gateway (name, email, subject, message) are stored securely in the database for the administrator to review. We never sell, share, or disclose contact information to third parties.
            </p>
          </section>

          <section className="card-luxury p-8 space-y-4">
            <h2 className="font-editorial-serif text-2xl font-medium text-[#1E1B24]">
              4. Contact & Owner Information
            </h2>
            <p className="text-sm text-[#5E5868] leading-relaxed">
              For any privacy inquiries or data requests, please reach out directly:
            </p>
            <p className="text-sm font-medium text-[#8A75B3]">
              Temkin Abdulmelik • <a href="mailto:temkinabdulmelik@gmail.com" className="underline hover:text-[#1E1B24]">temkinabdulmelik@gmail.com</a> • Adama, Ethiopia
            </p>
          </section>
        </div>
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

export default PrivacyPage;
