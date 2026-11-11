"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Search as SearchIcon, Sparkles, FolderGit2, Cpu, Award, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { CoffeeCorner } from "@/components/coffee/CoffeeCorner";
import { CheersCelebration } from "@/components/celebration/CheersButton";
import { AiCompanionModal } from "@/components/ai-companion/AiCompanionModal";
import { EasterEggTerminal } from "@/components/terminal/EasterEggTerminal";

interface ProjectItem {
  slug: string;
  title: string;
  category: string;
  description: string;
  tech_stack: string[];
}

export default function SearchPage() {
  const [coffeeModalOpen, setCoffeeModalOpen] = useState(false);
  const [cheersModalOpen, setCheersModalOpen] = useState(false);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [coffeeCount, setCoffeeCount] = useState(1);

  const [query, setQuery] = useState("");
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredProjects = projects.filter((p) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tech_stack?.some((t) => t.toLowerCase().includes(q))
    );
  });

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
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-[#8A75B3] hover:text-[#1E1B24] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Universe
        </Link>

        {/* Search Header */}
        <div className="space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-semibold uppercase tracking-wider text-[#8A75B3]">
            <SearchIcon className="w-3.5 h-3.5" />
            Global Universe Search
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1B24] font-medium">
            Search Projects, Technologies, & Knowledge
          </h1>
          <p className="text-sm sm:text-base text-[#5E5868]">
            Explore everything in Temkin&apos;s digital universe by keyword, technology, or topic.
          </p>
        </div>

        {/* Search Input Bar */}
        <div className="relative mb-10">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8A75B3]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a technology (e.g. FastAPI, LangGraph, pgvector, React) or keyword..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-[#D8CDEE] text-[#1E1B24] placeholder:text-[#5E5868]/60 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8A75B3]/40 focus:border-[#8A75B3] transition-all text-base"
            autoFocus
          />
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#5E5868]">
            <span>Results ({filteredProjects.length})</span>
            {query && <span>Filtering by &ldquo;{query}&rdquo;</span>}
          </div>

          {loading ? (
            <div className="py-12 text-center text-[#5E5868]">Loading portfolio catalog...</div>
          ) : filteredProjects.length === 0 ? (
            <div className="card-luxury p-12 text-center space-y-3">
              <p className="text-base text-[#1E1B24] font-medium">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-sm text-[#5E5868]">Try searching for &ldquo;Agentic AI&rdquo;, &ldquo;FastAPI&rdquo;, &ldquo;Meri AI&rdquo;, or &ldquo;Hackathon&rdquo;.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="card-luxury p-6 flex flex-col justify-between hover:border-[#8A75B3] transition-all group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A75B3] bg-[#D8CDEE]/40 px-2.5 py-0.5 rounded-full">
                        {p.category}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#8A75B3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-[#1E1B24] group-hover:text-[#8A75B3] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5E5868] line-clamp-3 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 mt-2 border-t border-[#D8CDEE]/40">
                    {p.tech_stack?.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-[10px] font-medium text-[#5E5868] bg-[#F5F2FA] px-2 py-0.5 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          )}
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
}
