import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Trophy, Award, CheckCircle, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { CoffeeCorner } from "@/components/coffee/CoffeeCorner";
import { CheersCelebration } from "@/components/celebration/CheersButton";
import { AiCompanionModal } from "@/components/ai-companion/AiCompanionModal";
import { EasterEggTerminal } from "@/components/terminal/EasterEggTerminal";
import { getAssetUrl } from "@/utils/assetPath";

export const AchievementsPage: React.FC = () => {
  const [coffeeModalOpen, setCoffeeModalOpen] = useState(false);
  const [cheersModalOpen, setCheersModalOpen] = useState(false);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [coffeeCount, setCoffeeCount] = useState(1);

  const achievements = [
    {
      id: "hackathon-1st-place",
      title: "1st Place Winner — CSEC ASTU Hackathon v1.0",
      organization: "Computer Science & Engineering Community (CSEC ASTU)",
      date: "2024",
      category: "Hackathon",
      image: getAssetUrl("/images/hackathon-award.jpg"),
      description: "Secured First Place across 20+ competitive university teams in an intensive 24-hour sprint. Served as full-stack architect of Meri AI, an intelligent agent assisting campus workflows.",
      highlights: [
        "Led full-stack architecture and rapid API implementation using Python & FastAPI",
        "Coordinated with Team Divas to deliver working product demo to judging panel",
        "Awarded university recognition and certificate of championship"
      ],
      link: "https://github.com/Temkin236"
    },
    {
      id: "csec-mentorship",
      title: "Technical Mentor & Student Developer Guide",
      organization: "CSEC ASTU Campus Community",
      date: "2024 – Present",
      category: "Leadership",
      image: getAssetUrl("/images/astu-workshop.jpg"),
      description: "Mentoring junior engineering students at ASTU in software engineering methodologies, version control with Git, RESTful API design, and modern web application development.",
      highlights: [
        "Delivered hands-on workshops on practical full-stack development",
        "Reviewed student code submissions and fostered peer learning",
        "Advocated for clean architecture and deterministic test suites"
      ],
      link: "https://linkedin.com/in/temkin-abdulmelik-195582306"
    },
    {
      id: "ai-systems",
      title: "Pioneering Open RAG & Agentic System Implementations",
      organization: "Autonomous Research & Engineering",
      date: "2024 – Present",
      category: "Technical",
      image: getAssetUrl("/images/projects/knowledge-ai-landing.png"),
      description: "Designed, benchmarked, and released production-grade open architectures including Knowledge AI with pgvector semantic search and ASTU Campus Navigator.",
      highlights: [
        "Implemented strict citation grounding eliminating hallucinations in retrieval pipelines",
        "Authored comprehensive test suites with 100% passing automated checks",
        "Engineered multi-agent reasoning graphs using LangGraph and Gemini APIs"
      ],
      link: "https://github.com/Temkin236"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F5F2FA] text-[#1E1B24] relative selection:bg-[#D8CDEE] selection:text-[#1E1B24]">
      <Navbar
        onOpenCoffee={() => setCoffeeModalOpen(true)}
        onOpenCheers={() => setCheersModalOpen(true)}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenAiChat={() => setAiChatOpen(true)}
        coffeeCount={coffeeCount}
      />

      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-[#8A75B3] hover:text-[#1E1B24] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Universe
        </Link>

        {/* Section Header */}
        <div className="space-y-4 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-[#8A75B3]">
            <Trophy className="w-4 h-4" />
            Verified Honors & Milestones
          </div>
          <h1 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl text-[#1E1B24] font-medium leading-tight">
            Milestones of Craft, Competition, & Leadership
          </h1>
          <p className="text-base sm:text-lg text-[#5E5868] leading-relaxed">
            Real outcomes from intense hackathon sprints, community mentorship at ASTU, and deep technical engineering.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="space-y-12">
          {achievements.map((item) => (
            <div 
              key={item.id}
              className="card-luxury p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#D8CDEE]/60 text-[#8A75B3]">
                    <Award className="w-3.5 h-3.5" /> {item.category}
                  </span>
                  <span className="text-xs text-[#5E5868] font-medium">{item.date}</span>
                </div>

                <h2 className="font-editorial-serif text-2xl sm:text-3xl font-medium text-[#1E1B24]">
                  {item.title}
                </h2>
                <p className="text-sm font-medium text-[#8A75B3]">{item.organization}</p>
                <p className="text-sm sm:text-base text-[#5E5868] leading-relaxed">{item.description}</p>

                <div className="space-y-2 pt-2">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#1E1B24]/90">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {item.link && (
                  <div className="pt-2">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8A75B3] hover:text-[#1E1B24] transition-colors"
                    >
                      Verify Record & View Source <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>

              <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#D8CDEE]/70 shadow-md bg-[#F5F2FA]">
                <img
                  src={getAssetUrl(item.image)}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
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

export default AchievementsPage;
