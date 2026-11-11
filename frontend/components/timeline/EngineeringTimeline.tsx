"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Trophy, 
  Cpu, 
  Code2, 
  Sparkles, 
  Users, 
  Calendar 
} from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  tags: string[];
  isHighlight?: boolean;
}

export const EngineeringTimeline: React.FC = () => {
  const milestones: Milestone[] = [
    {
      year: "2021",
      title: "First Software Experiments",
      category: "Origins",
      icon: <Code2 className="w-5 h-5 text-[#8A75B3]" />,
      description:
        "Started coding during secondary school out of deep curiosity for algorithms and network protocols. Self-taught Python, core data structures, and basic scripting.",
      tags: ["Python", "Algorithms", "Self-Taught"],
    },
    {
      year: "2022",
      title: "ASTU Electronics & Communication Engineering",
      category: "Education",
      icon: <GraduationCap className="w-5 h-5 text-[#8A75B3]" />,
      description:
        "Admitted to Adama Science and Technology University (ASTU), Ethiopia's leading center of excellence for science and technology, pursuing a B.Sc. in Electronics and Communication Engineering.",
      tags: ["ASTU", "Electronics", "Telecommunications", "Hardware/Software"],
    },
    {
      year: "2023",
      title: "Full-Stack Web & Systems Architecture",
      category: "Engineering",
      icon: <Cpu className="w-5 h-5 text-[#8A75B3]" />,
      description:
        "Expanded into full-stack web architectures, building production-style APIs with FastAPI, relational databases with PostgreSQL, and modern reactive frontends.",
      tags: ["FastAPI", "React", "PostgreSQL", "REST APIs"],
    },
    {
      year: "2024",
      title: "1st Place Winner — CSEC ASTU Hackathon v1.0",
      category: "Achievement",
      isHighlight: true,
      icon: <Trophy className="w-5 h-5 text-amber-600" />,
      description:
        "Led full-stack engineering for Meri AI in a 24-hour sprint and won 1st place among top university engineering teams. Appointed official Development Mentor at CSEC ASTU to train junior developers.",
      tags: ["Meri AI", "1st Place Winner", "24h Hackathon", "CSEC ASTU Mentor"],
    },
    {
      year: "2024 — 2025",
      title: "Agentic AI & RAG Engineering",
      category: "AI Architecture",
      icon: <Sparkles className="w-5 h-5 text-[#8A75B3]" />,
      description:
        "Pioneered advanced RAG pipelines with pgvector vector search, LangGraph cyclical multi-agent workflows, and citation-grounded response generation in Knowledge AI and Campus Navigator.",
      tags: ["LangGraph", "pgvector", "Gemini 2.5", "Knowledge AI", "Campus Navigator"],
    },
    {
      year: "2026 — 2027",
      title: "Production AI Platforms & Degree Completion",
      category: "Horizon",
      icon: <Calendar className="w-5 h-5 text-[#8A75B3]" />,
      description:
        "Developing enterprise-grade AI applications, contributing to global AI open source, and completing B.Sc. Electronics & Communication Engineering at ASTU (Expected Graduation: 2027).",
      tags: ["B.Sc. Degree '27", "Autonomous Agents", "Enterprise AI"],
    },
  ];

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-3 mb-20">
        <span className="editorial-tag text-[#8A75B3]">
          CHRONOLOGICAL EVOLUTION
        </span>
        <h2 className="font-editorial-serif text-4xl sm:text-5xl font-normal text-[#1E1B24]">
          Engineering <span className="italic text-[#8A75B3]">Journey</span> ⏳
        </h2>
        <p className="text-[#5E5868] max-w-xl mx-auto text-sm sm:text-base">
          From first Python experiments to winning university hackathons and authoring autonomous agent workflows.
        </p>
      </div>

      {/* Vertical Spine Timeline */}
      <div className="relative border-l-2 border-[#D8CDEE] ml-4 md:ml-32 pl-8 md:pl-12 space-y-12">
        {milestones.map((item, idx) => (
          <motion.div
            key={item.year + item.title}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Timeline Node Marker */}
            <div
              className={`absolute -left-[41px] md:-left-[57px] top-1.5 w-7 h-7 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm ${
                item.isHighlight
                  ? "bg-amber-500 text-white ring-4 ring-amber-100"
                  : "bg-white border-2 border-[#8A75B3] text-[#8A75B3]"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-current" />
            </div>

            {/* Year Label Floating on Left for MD Screens */}
            <div className="hidden md:block absolute -left-36 top-1.5 w-24 text-right">
              <span className="font-editorial-serif text-lg font-bold text-[#8A75B3]">
                {item.year}
              </span>
            </div>

            {/* Content Card */}
            <div
              className={`card-luxury p-6 sm:p-8 space-y-4 ${
                item.isHighlight ? "border-amber-200 bg-amber-50/20" : ""
              }`}
            >
              {/* Top Row */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-[#F5F2FA]">
                    {item.icon}
                  </div>
                  <div>
                    <span className="md:hidden text-xs font-bold text-[#8A75B3] block">
                      {item.year} • {item.category}
                    </span>
                    <span className="hidden md:block text-[10px] uppercase tracking-wider font-semibold text-[#8A75B3]">
                      {item.category}
                    </span>
                    <h3 className="font-editorial-serif text-xl sm:text-2xl font-medium text-[#1E1B24]">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {item.isHighlight && (
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider">
                    Special Milestone 🏆
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#1E1B24]/85 leading-relaxed font-light">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#F5F2FA] text-[#5E5868] border border-[#D8CDEE]/60 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
