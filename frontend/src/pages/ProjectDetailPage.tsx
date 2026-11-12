import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Trophy } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectDetail {
  slug: string;
  title: string;
  tagline: string;
  award?: string;
  role: string;
  coverImage: string;
  description: string;
  problem: string;
  solution: string;
  contribution: string;
  architecture: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projectsMap: Record<string, ProjectDetail> = {
  "meri-ai": {
    slug: "meri-ai",
    title: "Meri AI",
    tagline: "Hackathon-Winning AI Assistant Platform",
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
    technologies: ["FastAPI", "React", "Gemini API", "Tailwind CSS", "Python", "Vite"],
    githubUrl: "https://github.com/Temkin236",
  },
  "knowledge-ai": {
    slug: "knowledge-ai",
    title: "Knowledge AI",
    tagline: "RAG-Powered Knowledge Assistant with Grounded Citations",
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
      "FastAPI Backend + PostgreSQL pgvector + LangGraph + Gemini Flash + Next.js Frontend with streaming SSE and clickable citations.",
    technologies: ["LangGraph", "FastAPI", "PostgreSQL", "pgvector", "Gemini API", "Python", "React"],
    githubUrl: "https://github.com/Temkin236/Knowledge_AI",
    liveUrl: "https://github.com/Temkin236/Knowledge_AI",
  },
  "astu-campus-navigator": {
    slug: "astu-campus-navigator",
    title: "ASTU Campus Navigator",
    tagline: "AI Geospatial Campus Navigation & Intelligent Directory",
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
    technologies: ["React", "FastAPI", "LangGraph", "Voyage", "Supabase", "pgvector", "OpenStreetMap"],
    githubUrl: "https://github.com/Temkin236",
  },
  "aura-ai": {
    slug: "aura-ai",
    title: "AURA AI",
    tagline: "Multi-Persona Intelligent Conversational System",
    role: "Lead Full-Stack Developer",
    coverImage: "/images/aura-ai.png",
    description:
      "A multi-persona AI conversational system that seamlessly adapts tone, expertise, and reasoning depth according to the user's role and domain.",
    problem:
      "One-size-fits-all chatbots fail to adapt when switching between strict technical code review, creative ideation, and educational tutoring.",
    solution:
      "Engineered dynamic persona switching with persistent memory embeddings, contextual system prompting, and a polished interface.",
    contribution:
      "Built the React frontend, created the Express API server, integrated Gemini API endpoints, and implemented persona state management.",
    architecture:
      "React + Vite + Tailwind CSS + Node.js/Express + Gemini API + LocalStorage state.",
    technologies: ["React", "Vite", "Tailwind CSS", "Express", "Gemini API", "JavaScript"],
    githubUrl: "https://github.com/Temkin236/Aura_AI",
  },
  "astu-coans": {
    slug: "astu-coans",
    title: "ASTU CoANS Portal",
    tagline: "University Academic & Administrative Web Platform",
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
    technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js", "REST APIs"],
    githubUrl: "https://github.com/Temkin236",
  },
};

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsMap[slug] : undefined;

  if (!project) {
    return (
      <main className="min-h-screen bg-[#F5F2FA] flex items-center justify-center p-4">
        <div className="card-luxury p-8 max-w-md w-full text-center space-y-4">
          <h2 className="font-editorial-serif text-2xl font-medium text-[#1E1B24]">Project Not Found</h2>
          <p className="text-sm text-[#5E5868]">The requested project &ldquo;{slug}&rdquo; does not exist or has been relocated.</p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E1B24] text-white text-xs font-semibold hover:bg-[#8A75B3] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Projects</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F2FA] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Back Link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8A75B3] hover:text-[#1E1B24] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects Universe</span>
        </Link>

        {/* Header Card */}
        <div className="card-luxury p-8 sm:p-12 space-y-6">
          <div className="space-y-3">
            {project.award && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900">
                <Trophy className="w-4 h-4 text-amber-600" />
                <span>{project.award}</span>
              </div>
            )}
            <h1 className="font-editorial-serif text-4xl sm:text-5xl font-medium text-[#1E1B24]">
              {project.title}
            </h1>
            <p className="font-editorial-cormorant text-2xl text-[#8A75B3]">
              {project.tagline}
            </p>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#5E5868]">
              Role: {project.role}
            </p>
          </div>

          <div className="relative w-full h-80 rounded-2xl overflow-hidden border border-[#D8CDEE]/60 bg-[#F5F2FA]">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/60 space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-rose-800">
                Problem Statement
              </h3>
              <p className="text-sm text-[#1E1B24]/90 leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/60 space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                Engineered Solution
              </h3>
              <p className="text-sm text-[#1E1B24]/90 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#8A75B3]">
              Temkin&apos;s Contribution
            </h3>
            <p className="text-sm sm:text-base text-[#1E1B24] leading-relaxed">
              {project.contribution}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#8A75B3]">
              System Architecture
            </h3>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 font-mono text-xs text-gray-800">
              {project.architecture}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#5E5868]">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1 rounded-full bg-[#D8CDEE]/50 text-[#1E1B24] text-xs font-medium border border-[#8A75B3]/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#D8CDEE]/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#1E1B24] text-white text-xs font-medium hover:bg-[#8A75B3] transition-all inline-flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-white border border-[#D8CDEE] text-[#1E1B24] text-xs font-medium hover:bg-[#F5F2FA] transition-all inline-flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Project</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetailPage;
