"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, 
  Sparkles, 
  Lightbulb, 
  Coffee, 
  Users, 
  Hammer, 
  Globe, 
  CheckCircle2, 
  ChevronRight,
  Trophy
} from "lucide-react";

interface FactCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  subtitle: string;
  badge: string;
  verifiedFact: string;
  deepDive: string;
  highlight: string;
}

export const GetToKnowTemkin: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("engineer");

  const categories: FactCategory[] = [
    {
      id: "engineer",
      title: "The Engineer",
      icon: <Cpu className="w-5 h-5 text-[#8A75B3]" />,
      subtitle: "Electronics & Communication Engineering",
      badge: "ASTU B.Sc. '27",
      verifiedFact:
        "Studying at Adama Science and Technology University (ASTU), specializing in Electronics & Communication Engineering with expected graduation in 2027.",
      deepDive:
        "Temkin combines deep hardware foundations—signals, microcontrollers, digital logic, and communication protocols—with modern software engineering. This unique engineering discipline allows him to build systems with a rigorous understanding of performance, memory, and architecture.",
      highlight: "Hardware-grounded engineering mindset applied to high-level AI systems.",
    },
    {
      id: "ai-explorer",
      title: "The AI Explorer",
      icon: <Sparkles className="w-5 h-5 text-[#8A75B3]" />,
      subtitle: "Agentic AI & RAG Architectures",
      badge: "LangGraph + Gemini",
      verifiedFact:
        "Actively researches and designs multi-agent systems, tool-calling loops with LangGraph, and citation-backed RAG using pgvector.",
      deepDive:
        "Temkin created Knowledge AI (RAG assistant with verified citations and vector indexing), Deep Research AI (multi-agent recursive researcher), and Aura AI (multi-persona intelligent system). He focuses on zero-hallucination architectures and grounded responses.",
      highlight: "Specialized in autonomous agents, semantic retrieval, and tool orchestration.",
    },
    {
      id: "builder",
      title: "The Builder",
      icon: <Hammer className="w-5 h-5 text-[#8A75B3]" />,
      subtitle: "Hackathon Champion & Product Creator",
      badge: "1st Place CSEC Hackathon",
      verifiedFact:
        "Won First Place at CSEC ASTU Hackathon v1.0 as the lead full-stack developer of Meri AI.",
      deepDive:
        "Within a high-intensity 24-hour sprint, Temkin and his team conceptualized, engineered, and delivered Meri AI—combining responsive modern UI, resilient backend services, and AI assistance, taking the top award among ASTU's best engineering teams.",
      highlight: "Proven ability to ship end-to-end working applications under extreme pressure.",
    },
    {
      id: "mentor",
      title: "The Team Player",
      icon: <Users className="w-5 h-5 text-[#8A75B3]" />,
      subtitle: "Development Mentor at CSEC ASTU",
      badge: "Community Leadership",
      verifiedFact:
        "Serves as an official Development Mentor at the Computer Science and Engineering Community of ASTU (CSEC ASTU).",
      deepDive:
        "Passionate about knowledge sharing, Temkin mentors fellow university students in modern web development, Git workflows, backend architecture, and problem-solving, fostering a collaborative culture of continuous learning on campus.",
      highlight: "Dedicated to lifting others and building strong engineering communities.",
    },
    {
      id: "curious",
      title: "The Curious Mind",
      icon: <Lightbulb className="w-5 h-5 text-[#8A75B3]" />,
      subtitle: "Self-Driven Curiosity",
      badge: "Continuous Explorer",
      verifiedFact:
        "Started coding during secondary school out of pure fascination with how computer logic and internet networks interact.",
      deepDive:
        "Temkin routinely dives into open-source repositories, research papers on generative AI, and modern web frameworks to understand how industry-leading tools work under the hood. He believes the best engineers never stop being curious beginners.",
      highlight: "Driven by curiosity, from low-level systems to modern LLM engineering.",
    },
    {
      id: "coffee",
      title: "The Coffee Corner",
      icon: <Coffee className="w-5 h-5 text-[#8A75B3]" />,
      subtitle: "Ethiopian Roast Aficionado",
      badge: "Arabica Heritage",
      verifiedFact:
        "Rooted in Ethiopia—the birthplace of Arabica coffee—where coffee ceremonies symbolize hospitality and conversation.",
      deepDive:
        "For Temkin, coffee is both a cultural ritual and a creative companion. Whether debugging a complex async worker queue at midnight or whiteboarding a new system architecture, a steaming cup of Ethiopian coffee is always within arm's reach.",
      highlight: "'Coffee first. Then we deploy.'",
    },
    {
      id: "beyond",
      title: "Beyond the Screen",
      icon: <Globe className="w-5 h-5 text-[#8A75B3]" />,
      subtitle: "Technology for Impact",
      badge: "Ethiopian Tech Ecosystem",
      verifiedFact:
        "Committed to building accessible, high-impact digital solutions for Ethiopia, Africa, and global developer ecosystems.",
      deepDive:
        "Projects like ASTU Campus Navigator (geospatial AI campus platform) and ASTU CoANS (administrative university platform) reflect Temkin's focus on solving real institutional and community challenges with modern software design.",
      highlight: "Engineering technology that solves genuine everyday human problems.",
    },
  ];

  const current = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Section Header */}
      <div className="text-center space-y-3 mb-16">
        <span className="editorial-tag text-[#8A75B3]">
          DISCOVER TEMKIN&apos;S STORY
        </span>
        <h2 className="font-editorial-serif text-4xl sm:text-5xl font-normal text-[#1E1B24]">
          Get to Know <span className="italic text-[#8A75B3]">Temkin</span> 💜
        </h2>
        <p className="text-[#5E5868] max-w-2xl mx-auto text-sm sm:text-base">
          Verified facts, engineering philosophy, hackathon milestones, and what drives his daily passion for intelligent software.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left List of Categories */}
        <div className="lg:col-span-5 space-y-2.5">
          {categories.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                  isActive
                    ? "bg-white border-[#8A75B3] shadow-md translate-x-1"
                    : "bg-white/60 border-[#D8CDEE]/60 hover:bg-white hover:border-[#8A75B3]/40"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`p-2.5 rounded-xl transition-colors ${
                      isActive ? "bg-[#D8CDEE]/70" : "bg-[#F5F2FA]"
                    }`}
                  >
                    {cat.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1E1B24]">
                      {cat.title}
                    </h4>
                    <p className="text-xs text-[#5E5868]">{cat.subtitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-[#F5F2FA] text-[#8A75B3] hidden sm:inline-block">
                    {cat.badge}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? "text-[#8A75B3] translate-x-0.5" : "text-gray-300"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Detail Card with Smooth Animation */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="card-luxury p-8 sm:p-10 space-y-6 relative overflow-hidden"
            >
              {/* Decorative Subtle Tint */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#D8CDEE]/30 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between flex-wrap gap-2 border-b border-[#D8CDEE]/50 pb-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#D8CDEE]/60">
                    {current.icon}
                  </div>
                  <div>
                    <span className="editorial-tag text-[#8A75B3]">
                      FACT SHEET
                    </span>
                    <h3 className="font-editorial-serif text-2xl sm:text-3xl font-medium text-[#1E1B24]">
                      {current.title}
                    </h3>
                  </div>
                </div>

                <span className="px-3.5 py-1 rounded-full bg-[#8A75B3]/10 text-[#8A75B3] font-semibold text-xs border border-[#8A75B3]/20">
                  {current.badge}
                </span>
              </div>

              {/* Verified Fact Box */}
              <div className="p-5 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8A75B3]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified Personal Record</span>
                </div>
                <p className="text-sm sm:text-base text-[#1E1B24] font-medium leading-relaxed">
                  {current.verifiedFact}
                </p>
              </div>

              {/* Deep Dive Description */}
              <div className="space-y-2">
                <h5 className="text-xs font-semibold uppercase tracking-wider text-[#5E5868]">
                  In Temkin&apos;s Words
                </h5>
                <p className="text-sm sm:text-base text-[#1E1B24]/85 leading-relaxed font-light">
                  {current.deepDive}
                </p>
              </div>

              {/* Key Takeaway Highlight */}
              <div className="pt-2 border-t border-[#D8CDEE]/40 flex items-center gap-2.5 text-xs sm:text-sm text-[#8A75B3] font-medium">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="italic">{current.highlight}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
