import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Trophy, 
  Sparkles, 
  X, 
  Layers, 
  CheckCircle,
  Cpu,
  ArrowRight
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: "all" | "ai" | "fullstack" | "hackathon";
  award?: string;
  role: string;
  coverImage: string;
  description: string;
  problem: string;
  solution: string;
  contribution: string;
  architecture: string;
  challenges: string;
  achievements: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const ProjectUniverse: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "ai" | "fullstack" | "hackathon">("all");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      id: "1",
      slug: "meri-ai",
      title: "Meri AI",
      tagline: "Hackathon-Winning AI Assistant Platform",
      category: "hackathon",
      award: "1st Place Winner — CSEC ASTU Hackathon v1.0",
      role: "Lead Full-Stack Developer",
      coverImage: "/images/csec-poster.png",
      description:
        "An AI-powered academic and student productivity platform engineered during an intense 24-hour hackathon, designed to empower ASTU students with instant contextual assistance.",
      problem:
        "University students struggled to quickly synthesize dense lecture materials, access campus resources, and resolve academic queries without fragmented tools.",
      solution:
        "Built a unified, responsive platform integrating Gemini AI models, contextual document search, and intuitive chat interfaces tailored for university workflows.",
      contribution:
        "Designed the system architecture, developed the full-stack interface and API gateway, integrated LLM endpoints, and led the team pitch that secured 1st place among top university teams.",
      architecture:
        "Client (React + Tailwind CSS) <-> REST API Gateway (FastAPI) <-> LLM Orchestration & Contextual Prompt Pipeline <-> In-memory session store.",
      challenges:
        "Extreme 24-hour time constraint, managing concurrent LLM streaming under patchy local network conditions, and delivering a clean UI.",
      achievements:
        "Awarded 1st place at CSEC ASTU Hackathon v1.0; lauded by university judges for practical impact and polished user experience.",
      technologies: ["FastAPI", "React", "Gemini API", "Tailwind CSS", "Python", "Vite"],
      githubUrl: "https://github.com/Temkin236",
    },
    {
      id: "2",
      slug: "knowledge-ai",
      title: "Knowledge AI",
      tagline: "RAG-Powered Knowledge Assistant with Grounded Citations",
      category: "ai",
      role: "AI & Full-Stack Architect",
      coverImage: "/images/knowledge-ai-landing.png",
      description:
        "Enterprise-grade Retrieval-Augmented Generation (RAG) assistant delivering factual, hallucination-free answers directly cited from ingested documents.",
      problem:
        "Generic LLMs frequently hallucinate facts when queried on proprietary organizational manuals, research papers, and technical documentation.",
      solution:
        "Engineered an end-to-end RAG architecture with PDF/DOCX ingestion, overlap chunking, vector embedding, pgvector similarity search, and source attribution badges.",
      contribution:
        "Built document extraction pipelines, implemented cosine similarity vector search in PostgreSQL (pgvector), designed the LangGraph retrieval loop, and created the citation UI.",
      architecture:
        "FastAPI Backend + PostgreSQL pgvector + LangGraph + Gemini Flash + React Frontend with streaming SSE and clickable citations.",
      challenges:
        "Balancing chunk size vs. context window coherence; ensuring exact paragraph citations without increasing latency.",
      achievements:
        "Achieved sub-second retrieval across hundreds of documentation pages with 100% cited provenance for every generated assertion.",
      technologies: ["LangGraph", "FastAPI", "PostgreSQL", "pgvector", "Gemini API", "Python", "React"],
      githubUrl: "https://github.com/Temkin236/Knowledge_AI",
      liveUrl: "https://github.com/Temkin236/Knowledge_AI",
    },
    {
      id: "3",
      slug: "astu-campus-navigator",
      title: "ASTU Campus Navigator",
      tagline: "AI Geospatial Campus Navigation & Intelligent Directory",
      category: "fullstack",
      role: "Full-Stack & Geospatial AI Engineer",
      coverImage: "/images/astu-seal.png",
      description:
        "An AI-powered geospatial routing and intelligent information system for Adama Science and Technology University campus, combining vector search with interactive OpenStreetMap.",
      problem:
        "ASTU's sprawling multi-hectare campus is notoriously difficult for new students, faculty, and international visitors to navigate, leading to lost time finding lecture halls and administrative offices.",
      solution:
        "Combined OpenStreetMap vector tiles, geospatial routing algorithms, and a conversational LangGraph assistant powered by Voyage embeddings and Supabase pgvector.",
      contribution:
        "Mapped ASTU landmarks, configured pgvector spatial queries, authored LangGraph intent classifiers, and built the responsive mobile navigation frontend.",
      architecture:
        "React + OpenStreetMap Leaflet + FastAPI + LangGraph + Voyage Embeddings + Supabase pgvector.",
      challenges:
        "Accurately geocoding unnumbered university buildings and handling multi-lingual queries (English, Amharic, Afaan Oromoo).",
      achievements:
        "Demonstrated live walking routes, landmark detection, and intelligent question answering for university faculties.",
      technologies: ["React", "FastAPI", "LangGraph", "Voyage", "Supabase", "pgvector", "OpenStreetMap"],
      githubUrl: "https://github.com/Temkin236",
    },

    {
      id: "5",
      slug: "aura-ai",
      title: "AURA AI",
      tagline: "Multi-Persona Intelligent Conversational System",
      category: "ai",
      role: "Lead Full-Stack Developer",
      coverImage: "/images/aura-ai.png",
      description:
        "A multi-persona AI conversational system that seamlessly adapts tone, expertise, and reasoning depth according to the user's role and domain.",
      problem:
        "One-size-fits-all chatbots fail to adapt when switching between strict technical code review, creative ideation, and educational tutoring.",
      solution:
        "Engineered dynamic persona switching with persistent memory embeddings, contextual system prompting, and a polished glassmorphism interface.",
      contribution:
        "Built the React frontend, created the Express API server, integrated Gemini multimodal endpoints, and implemented persona state management.",
      architecture:
        "React + Vite + Tailwind CSS + Node.js/Express + Gemini API + LocalStorage state.",
      challenges:
        "Maintaining conversational tone consistency across rapid context shifts without confusing past conversation memories.",
      achievements:
        "Smooth multi-persona switching with zero latency overhead and intuitive user customization.",
      technologies: ["React", "Vite", "Tailwind CSS", "Express", "Gemini API", "JavaScript"],
      githubUrl: "https://github.com/Temkin236/Aura_AI",
    },
    {
      id: "6",
      slug: "astu-coans",
      title: "ASTU CoANS Portal",
      tagline: "University Academic & Administrative Web Platform",
      category: "fullstack",
      role: "Full-Stack Web Developer",
      coverImage: "/images/astu-coans.png",
      description:
        "Official college web platform for the College of Applied Natural Sciences (CoANS) at Adama Science and Technology University.",
      problem:
        "Departmental announcements, academic schedules, faculty directories, and student resources were fragmented across physical bulletin boards.",
      solution:
        "Centralized administrative portal featuring responsive design, secure staff announcement publishing, department overviews, and student document downloads.",
      contribution:
        "Engineered the full frontend interface, administrative dashboard, and database schema, ensuring mobile accessibility across university networks.",
      architecture:
        "Modern responsive web architecture with role-based administrative authentication and optimized asset delivery.",
      challenges:
        "Designing for low-bandwidth mobile connections common across campus Wi-Fi networks.",
      achievements:
        "Successfully adopted for student course announcements and college event scheduling.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js", "REST APIs"],
      githubUrl: "https://github.com/Temkin236",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : filter === "hackathon"
      ? projects.filter((p) => p.category === "hackathon" || p.award)
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-3">
          <span className="editorial-tag text-[#8A75B3]">
            ENGINEERING SHOWCASE
          </span>
          <h2 className="font-editorial-serif text-4xl sm:text-5xl font-normal text-[#1E1B24]">
            Project <span className="italic text-[#8A75B3]">Universe</span> ✨
          </h2>
          <p className="text-[#5E5868] max-w-xl text-sm sm:text-base">
            Real systems engineered with modern full-stack architectures, LangGraph agent workflows, and practical user utility.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-full bg-white border border-[#D8CDEE]/60 shadow-xs">
          {[
            { id: "all", label: "All Projects" },
            { id: "ai", label: "Agentic AI & RAG" },
            { id: "fullstack", label: "Full-Stack" },
            { id: "hackathon", label: "Hackathons 🏆" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === tab.id
                  ? "bg-[#8A75B3] text-white shadow-xs"
                  : "text-[#5E5868] hover:text-[#1E1B24] hover:bg-[#F5F2FA]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="card-luxury overflow-hidden flex flex-col group"
          >
            {/* Project Image Frame */}
            <div className="relative w-full h-48 bg-[#F5F2FA] overflow-hidden border-b border-[#D8CDEE]/40">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Award Ribbon if present */}
              {project.award && (
                <div className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Trophy className="w-3 h-3" />
                  <span>1st Place</span>
                </div>
              )}

              {/* Role Badge */}
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-[#1E1B24] text-[10px] font-medium px-2.5 py-1 rounded-full shadow-xs">
                {project.role}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="font-editorial-serif text-2xl font-medium text-[#1E1B24] group-hover:text-[#8A75B3] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-[#8A75B3]">
                  {project.tagline}
                </p>
                <p className="text-xs text-[#5E5868] line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#F5F2FA] border border-[#D8CDEE]/70 text-[#1E1B24] font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white text-[#8A75B3] font-semibold">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-[#D8CDEE]/50 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-[#8A75B3] hover:text-[#1E1B24] flex items-center gap-1 group-hover:underline cursor-pointer"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View GitHub Repository"
                      className="p-1.5 text-gray-500 hover:text-[#1E1B24] hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open Live Preview"
                      className="p-1.5 text-gray-500 hover:text-[#8A75B3] hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Deep-Dive Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#D8CDEE] my-8 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                {/* Modal Header */}
                <div className="space-y-2 border-b border-[#D8CDEE]/60 pb-5">
                  {selectedProject.award && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900">
                      <Trophy className="w-3.5 h-3.5 text-amber-600" />
                      <span>{selectedProject.award}</span>
                    </div>
                  )}
                  <h2 className="font-editorial-serif text-3xl sm:text-4xl font-medium text-[#1E1B24]">
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm font-medium text-[#8A75B3]">
                    {selectedProject.tagline} • <span className="text-[#5E5868]">{selectedProject.role}</span>
                  </p>
                </div>

                {/* Cover Image Banner */}
                <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-[#D8CDEE]/60 bg-[#F5F2FA]">
                  <img
                    src={selectedProject.coverImage}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Problem & Solution Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/60 space-y-1.5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-rose-800">
                      The Challenge / Problem
                    </h4>
                    <p className="text-xs sm:text-sm text-[#1E1B24]/90 leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/60 space-y-1.5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                      The Engineered Solution
                    </h4>
                    <p className="text-xs sm:text-sm text-[#1E1B24]/90 leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Temkin's Contribution */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8A75B3]">
                    Temkin&apos;s Specific Contribution
                  </h4>
                  <p className="text-sm text-[#1E1B24] leading-relaxed">
                    {selectedProject.contribution}
                  </p>
                </div>

                {/* Architecture & Decisions */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8A75B3]">
                    Architecture & Technical Pipeline
                  </h4>
                  <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 font-mono text-xs text-gray-800">
                    {selectedProject.architecture}
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#5E5868]">
                    Technologies Deployed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-[#D8CDEE]/50 text-[#1E1B24] text-xs font-medium border border-[#8A75B3]/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Links */}
                <div className="pt-4 border-t border-[#D8CDEE]/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-[#1E1B24] text-white text-xs font-medium hover:bg-[#8A75B3] transition-all inline-flex items-center gap-2"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>View Repository</span>
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-white border border-[#D8CDEE] text-[#1E1B24] text-xs font-medium hover:bg-[#F5F2FA] transition-all inline-flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-xs font-medium text-gray-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
