"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, 
  Database, 
  Layout, 
  Terminal, 
  Sparkles, 
  ExternalLink,
  Layers,
  CheckCircle2
} from "lucide-react";

interface TechNode {
  id: string;
  name: string;
  category: "agentic" | "rag" | "backend" | "frontend" | "infrastructure";
  categoryLabel: string;
  description: string;
  howTemkinUsesIt: string;
  relatedProjects: string[];
}

export const TechConstellation: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeNode, setActiveNode] = useState<TechNode | null>(null);

  const technologies: TechNode[] = [
    {
      id: "langgraph",
      name: "LangGraph",
      category: "agentic",
      categoryLabel: "Agentic AI",
      description: "Stateful multi-agent orchestration framework for cyclical reasoning and autonomous decision trees.",
      howTemkinUsesIt: "Orchestrates multi-agent state machines, cyclical self-correction loops, and structured planning pipelines in Knowledge AI and Deep Research AI.",
      relatedProjects: ["Knowledge AI", "Deep Research AI", "ASTU Campus Navigator"],
    },
    {
      id: "fastapi",
      name: "FastAPI",
      category: "backend",
      categoryLabel: "Python Backend",
      description: "High-performance, async Python web framework built on Starlette and Pydantic.",
      howTemkinUsesIt: "Architects modular REST APIs, Server-Sent Events (SSE) streaming for LLM tokens, and background indexing workers.",
      relatedProjects: ["Meri AI", "Knowledge AI", "ASTU Campus Navigator", "Portfolio API"],
    },
    {
      id: "gemini",
      name: "Gemini API & 2.5",
      category: "agentic",
      categoryLabel: "Generative AI",
      description: "Google's multimodal large language models with native long context and tool calling.",
      howTemkinUsesIt: "Deploys structured JSON generation, citation-grounded summarization, and multimodal image inspection using the official Google GenAI SDK.",
      relatedProjects: ["Meri AI", "Knowledge AI", "AURA AI", "Temkin's AI Companion"],
    },
    {
      id: "pgvector",
      name: "PostgreSQL & pgvector",
      category: "rag",
      categoryLabel: "RAG & Semantic Search",
      description: "Relational database vector similarity search extension supporting HNSW and IVFFlat indexing.",
      howTemkinUsesIt: "Stores document embeddings and executes cosine similarity queries for sub-second semantic document retrieval in Knowledge AI.",
      relatedProjects: ["Knowledge AI", "ASTU Campus Navigator"],
    },
    {
      id: "nextjs",
      name: "Next.js & React 19",
      category: "frontend",
      categoryLabel: "Frontend Engineering",
      description: "React framework with App Router, server-rendered components, and streaming UI.",
      howTemkinUsesIt: "Builds responsive client architectures with streaming AI responses, editorial aesthetics, and client-side caching.",
      relatedProjects: ["ASTU Campus Navigator", "Temkin's World Portfolio"],
    },
    {
      id: "typescript",
      name: "TypeScript",
      category: "frontend",
      categoryLabel: "Frontend Engineering",
      description: "Statically typed JavaScript ensuring compile-time safety across complex component hierarchies.",
      howTemkinUsesIt: "Enforces strict type contracts between frontend clients and FastAPI backend schema models.",
      relatedProjects: ["ASTU Campus Navigator", "Temkin's World", "Meri AI"],
    },
    {
      id: "sqlalchemy",
      name: "SQLAlchemy 2",
      category: "backend",
      categoryLabel: "Python Backend",
      description: "Python ORM and SQL toolkit offering typed database mappings and async sessions.",
      howTemkinUsesIt: "Defines relational schemas, connection pools, and migration pipelines for knowledge docs, visitors, and portfolio assets.",
      relatedProjects: ["Portfolio API", "Knowledge AI", "Campus Navigator"],
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      category: "frontend",
      categoryLabel: "Frontend Engineering",
      description: "Utility-first CSS framework for rapid luxury UI design and custom design systems.",
      howTemkinUsesIt: "Implements custom palettes (lilac, lavender, luxury editorial tokens) with responsive layout grids.",
      relatedProjects: ["AURA AI", "Meri AI", "Temkin's World", "ASTU CoANS"],
    },
    {
      id: "framer-motion",
      name: "Framer Motion",
      category: "frontend",
      categoryLabel: "Motion Design",
      description: "Production-ready motion library for React with spring physics and gesture control.",
      howTemkinUsesIt: "Designs smooth micro-interactions, spring reveals, organic portrait wobbles, and interactive modals.",
      relatedProjects: ["Temkin's World Portfolio", "AURA AI"],
    },
    {
      id: "pydantic",
      name: "Pydantic V2",
      category: "backend",
      categoryLabel: "Python Backend",
      description: "Data validation and settings management using Python type annotations.",
      howTemkinUsesIt: "Validates incoming JSON payloads, structures LLM function-calling outputs, and deserializes configuration settings.",
      relatedProjects: ["Knowledge AI", "Meri AI", "Portfolio API"],
    },
    {
      id: "docker",
      name: "Docker",
      category: "infrastructure",
      categoryLabel: "Infrastructure",
      description: "Containerization platform ensuring identical runtime environments from local dev to cloud.",
      howTemkinUsesIt: "Packages Python backend microservices, Redis queues, and database containers for reproducible deployment.",
      relatedProjects: ["Knowledge AI", "Deep Research AI", "Portfolio API"],
    },
    {
      id: "linux",
      name: "Linux & Arch",
      category: "infrastructure",
      categoryLabel: "Infrastructure",
      description: "UNIX operating system environment powering high-performance development and servers.",
      howTemkinUsesIt: "Daily driver development environment (Arch/Omarchy Linux), shell scripting, systemd service management, and deployment.",
      relatedProjects: ["All Engineering Systems"],
    },
  ];

  // Set default active node
  React.useEffect(() => {
    if (!activeNode && technologies.length > 0) {
      setActiveNode(technologies[0]);
    }
  }, [activeNode, technologies]);

  const filteredTech =
    selectedCategory === "all"
      ? technologies
      : technologies.filter((t) => t.category === selectedCategory);

  return (
    <section id="universe" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-3 mb-16">
        <span className="editorial-tag text-[#8A75B3]">
          TECHNOLOGY ECOSYSTEM
        </span>
        <h2 className="font-editorial-serif text-4xl sm:text-5xl font-normal text-[#1E1B24]">
          The Technical <span className="italic text-[#8A75B3]">Universe</span> 🌌
        </h2>
        <p className="text-[#5E5868] max-w-2xl mx-auto text-sm sm:text-base">
          Interactive constellation of tools, frameworks, and architectures Temkin commands to engineer intelligent, scalable products.
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {[
            { id: "all", label: "All Constellation" },
            { id: "agentic", label: "Agentic AI" },
            { id: "rag", label: "RAG & Vector" },
            { id: "backend", label: "Python Backend" },
            { id: "frontend", label: "Modern Frontend" },
            { id: "infrastructure", label: "Infrastructure" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#8A75B3] text-white shadow-xs"
                  : "bg-white border border-[#D8CDEE]/60 text-[#5E5868] hover:text-[#1E1B24] hover:bg-[#F5F2FA]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Constellation Nodes Grid */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3.5">
          {filteredTech.map((tech) => {
            const isSelected = activeNode?.id === tech.id;
            return (
              <motion.button
                key={tech.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveNode(tech)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 border cursor-pointer flex flex-col justify-between min-h-[110px] ${
                  isSelected
                    ? "bg-white border-[#8A75B3] shadow-md ring-2 ring-[#8A75B3]/20"
                    : "bg-white/70 border-[#D8CDEE]/60 hover:bg-white hover:border-[#8A75B3]/40"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-[#F5F2FA] text-[#8A75B3]">
                    {tech.categoryLabel}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#8A75B3] animate-ping" />
                  )}
                </div>
                <h4 className="font-editorial-serif text-lg font-medium text-[#1E1B24] pt-2">
                  {tech.name}
                </h4>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Node Inspector Drawer */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            {activeNode && (
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="card-luxury p-8 sm:p-9 space-y-6 relative overflow-hidden"
              >
                <div className="space-y-1 border-b border-[#D8CDEE]/60 pb-4">
                  <span className="editorial-tag text-[#8A75B3]">
                    TECHNOLOGY INSPECTOR
                  </span>
                  <h3 className="font-editorial-serif text-3xl font-medium text-[#1E1B24]">
                    {activeNode.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#8A75B3] uppercase tracking-wider">
                    {activeNode.categoryLabel}
                  </p>
                </div>

                <div className="space-y-2">
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-[#5E5868]">
                    What It Is
                  </h5>
                  <p className="text-xs sm:text-sm text-[#1E1B24]/90 leading-relaxed font-light">
                    {activeNode.description}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/70 space-y-2">
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-[#8A75B3] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>How Temkin Uses It</span>
                  </h5>
                  <p className="text-xs sm:text-sm text-[#1E1B24] leading-relaxed">
                    {activeNode.howTemkinUsesIt}
                  </p>
                </div>

                <div className="space-y-2">
                  <h5 className="text-xs font-semibold uppercase tracking-wider text-[#5E5868]">
                    Deployed In Projects
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {activeNode.relatedProjects.map((p) => (
                      <span
                        key={p}
                        className="px-3 py-1 rounded-full bg-white border border-[#D8CDEE] text-xs font-medium text-[#1E1B24]"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
