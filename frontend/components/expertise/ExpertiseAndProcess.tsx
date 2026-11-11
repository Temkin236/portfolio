"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Bot, 
  Database, 
  Terminal, 
  Layout, 
  ArrowRight, 
  Sparkles,
  Search,
  Compass,
  Code2,
  CheckCircle,
  Cpu,
  Layers
} from "lucide-react";

export const ExpertiseAndProcess: React.FC = () => {
  const expertiseCards = [
    {
      id: "agentic-ai",
      title: "AGENTIC AI & LLMS",
      description: "Crafting multi-agent reasoning graphs, autonomous workflows, and tool-augmented intelligence using LangGraph and Gemini.",
      previewType: "agent",
      tag: "Autonomous",
      link: "/projects?category=Agentic"
    },
    {
      id: "rag-systems",
      title: "RAG & RETRIEVAL",
      description: "Engineering pgvector semantic search, grounded citations, and zero-hallucination pipelines from verified documents.",
      previewType: "rag",
      tag: "Semantic",
      link: "/projects/knowledge-ai"
    },
    {
      id: "python-backend",
      title: "PYTHON BACKEND",
      description: "Designing high-performance async FastAPI microservices, SQLAlchemy 2 ORM, and resilient API architectures.",
      previewType: "backend",
      tag: "High-Throughput",
      link: "/skills"
    },
    {
      id: "fullstack-web",
      title: "FULL-STACK WEB",
      description: "Building reactive Next.js 16, TypeScript, and fluid Framer Motion digital experiences with luxury editorial aesthetics.",
      previewType: "web",
      tag: "Modern UI",
      link: "/projects"
    }
  ];

  const tools = [
    { name: "Python", category: "Backend Core", icon: "🐍" },
    { name: "FastAPI", category: "Async REST", icon: "⚡" },
    { name: "Google Gemini", category: "LLM Reasoning", icon: "✨" },
    { name: "LangGraph", category: "Agent Graphs", icon: "🕸️" },
    { name: "PostgreSQL", category: "pgvector DB", icon: "🐘" },
    { name: "Next.js", category: "App Router", icon: "▲" },
    { name: "TypeScript", category: "Type Safety", icon: "📘" },
    { name: "Docker", category: "Containers", icon: "🐳" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "DISCOVER",
      desc: "Understanding core problem spaces, user constraints, and verified data sources.",
      icon: <Search className="w-4 h-4 text-[#8A75B3]" />
    },
    {
      step: "02",
      title: "ARCHITECT",
      desc: "Designing relational schemas, vector embedding pipelines, and clean API contracts.",
      icon: <Compass className="w-4 h-4 text-[#8A75B3]" />
    },
    {
      step: "03",
      title: "BUILD",
      desc: "Engineering modular, type-safe Python and TypeScript code with comprehensive test coverage.",
      icon: <Code2 className="w-4 h-4 text-[#8A75B3]" />
    },
    {
      step: "04",
      title: "EVALUATE & DELIVER",
      desc: "Benchmarking retrieval accuracy, zero-hallucination citations, and performance.",
      icon: <CheckCircle className="w-4 h-4 text-[#8A75B3]" />
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* SECTION 1: MY EXPERTISE (4 Inspo Cards) */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8A75B3]">
              CORE COMPETENCIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1B24] uppercase tracking-tight mt-1 font-sans">
              MY EXPERTISE
            </h2>
          </div>
          <Link
            href="/skills"
            className="text-xs font-semibold text-[#8A75B3] hover:text-[#1E1B24] transition-colors inline-flex items-center gap-1 group"
          >
            <span>Explore Complete Tech Constellation</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseCards.map((card) => (
            <Link
              key={card.id}
              href={card.link}
              className="card-inspo-lilac p-6 flex flex-col justify-between group relative overflow-hidden h-[340px]"
            >
              <div className="space-y-3 z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A75B3] bg-white/80 px-2.5 py-1 rounded-full border border-[#D8CDEE]/60 inline-block">
                  {card.tag}
                </span>
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#1E1B24] group-hover:text-[#8A75B3] transition-colors font-sans">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5E5868] leading-relaxed line-clamp-3">
                  {card.description}
                </p>
              </div>

              {/* Decorative Card Mini Mockup (Matching Inspo Card Illustration) */}
              <div className="relative w-full h-24 my-2 rounded-xl bg-white/70 border border-[#D8CDEE]/50 p-2.5 flex items-center justify-center overflow-hidden shadow-inner group-hover:bg-white transition-colors">
                {card.previewType === "agent" && (
                  <div className="w-full space-y-1.5 text-[9px] font-mono text-[#5E5868]">
                    <div className="flex items-center gap-1 text-[#8A75B3] font-semibold">
                      <Bot className="w-3 h-3" />
                      <span>agent_graph.invoke()</span>
                    </div>
                    <div className="h-1.5 w-3/4 bg-[#D8CDEE] rounded-full" />
                    <div className="h-1.5 w-1/2 bg-[#8A75B3]/40 rounded-full" />
                  </div>
                )}
                {card.previewType === "rag" && (
                  <div className="w-full space-y-1.5 text-[9px] font-mono text-[#5E5868]">
                    <div className="flex items-center gap-1 text-[#8A75B3] font-semibold">
                      <Database className="w-3 h-3" />
                      <span>pgvector &lt;=&gt; cosine</span>
                    </div>
                    <div className="flex gap-1">
                      <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[8px]">Citation: Doc #1</span>
                      <span className="px-1.5 py-0.5 rounded bg-purple-100 text-purple-800 text-[8px]">100% Grounded</span>
                    </div>
                  </div>
                )}
                {card.previewType === "backend" && (
                  <div className="w-full space-y-1.5 text-[9px] font-mono text-[#5E5868]">
                    <div className="flex items-center gap-1 text-[#8A75B3] font-semibold">
                      <Terminal className="w-3 h-3" />
                      <span>POST /api/v1/chat</span>
                    </div>
                    <div className="text-emerald-600 font-bold">200 OK • SSE Stream</div>
                  </div>
                )}
                {card.previewType === "web" && (
                  <div className="w-full space-y-1.5 text-[9px] font-mono text-[#5E5868]">
                    <div className="flex items-center gap-1 text-[#8A75B3] font-semibold">
                      <Layout className="w-3 h-3" />
                      <span>Next.js 16 + Framer</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#D8CDEE] rounded-full" />
                  </div>
                )}
              </div>

              {/* Bottom Inspo Circular Arrow Button */}
              <div className="flex items-center justify-between pt-2 border-t border-[#D8CDEE]/40 z-10">
                <span className="text-[11px] font-semibold text-[#8A75B3] uppercase tracking-wider group-hover:underline">
                  Explore Case Studies
                </span>
                <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#8A75B3] group-hover:text-white text-[#1E1B24] border border-[#D8CDEE] flex items-center justify-center transition-all shadow-xs">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* SECTION 2: TOOLS & TECHNOLOGIES + MY PROCESS (Matching Inspo Lower Half) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Tools & Technologies (Squircle Grid) */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8A75B3]">
              STACK & ECOSYSTEM
            </span>
            <h3 className="text-2xl font-extrabold text-[#1E1B24] uppercase tracking-tight mt-1 font-sans">
              TOOLS & TECHNOLOGIES
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="squircle-tile p-4 flex flex-col items-center justify-center text-center space-y-1.5 group cursor-default"
              >
                <span className="text-2xl select-none group-hover:scale-110 transition-transform">
                  {tool.icon}
                </span>
                <p className="text-xs font-bold text-[#1E1B24] font-sans">
                  {tool.name}
                </p>
                <p className="text-[10px] text-[#5E5868] font-medium leading-none">
                  {tool.category}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2 text-right">
            <Link
              href="/skills"
              className="text-xs font-semibold uppercase tracking-wider text-[#8A75B3] hover:text-[#1E1B24] transition-colors inline-flex items-center gap-1 group"
            >
              <span>+ More Tools & Frameworks</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right: My Process (01, 02, 03, 04 Steps) */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8A75B3]">
              ENGINEERING METHODOLOGY
            </span>
            <h3 className="text-2xl font-extrabold text-[#1E1B24] uppercase tracking-tight mt-1 font-sans">
              MY PROCESS
            </h3>
          </div>

          <div className="space-y-3.5">
            {processSteps.map((p) => (
              <div
                key={p.step}
                className="p-4 rounded-2xl bg-white border border-[#D8CDEE]/60 shadow-xs flex items-start gap-4 hover:border-[#8A75B3] transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-[#D8CDEE]/60 text-[#8A75B3] flex items-center justify-center shrink-0 font-mono font-bold text-xs mt-0.5">
                  {p.step}
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-[#1E1B24] uppercase tracking-wide font-sans">
                      {p.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#5E5868] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
