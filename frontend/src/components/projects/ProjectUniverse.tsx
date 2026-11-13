import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Sparkles,
  X,
  Layers,
  CheckCircle,
  Cpu,
  ArrowRight,
  Search,
  RefreshCw,
  Image as ImageIcon,
  Check,
  ChevronLeft,
  ChevronRight,
  Globe,
  Radio
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { useGithubProjects } from "@/hooks/useGithubProjects";
import { DeployedProject, GITHUB_USER } from "@/data/deployedProjects";
import { getAssetUrl } from "@/utils/assetPath";

export const ProjectUniverse: React.FC = () => {
  const {
    profile,
    loading,
    isLiveSynced,
    refresh,
    filterCategory,
    setFilterCategory,
    searchQuery,
    setSearchQuery,
    filteredProjects,
    projects
  } = useGithubProjects();

  const [selectedProject, setSelectedProject] = useState<DeployedProject | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const openProjectModal = (project: DeployedProject) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(url);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const aiCount = projects.filter((p) => p.category === "ai").length;
  const fullstackCount = projects.filter((p) => p.category === "fullstack").length;
  const toolsCount = projects.filter((p) => p.category === "tools").length;

  return (
    <section id="projects" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* GitHub Profile Banner & Section Heading */}
      <div className="space-y-8 mb-12 sm:mb-16">
        {/* Header Eyebrow & GitHub Live Sync Indicator */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="editorial-tag text-[#8A75B3]">
              LIVE PRODUCTION APPS
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#8A75B3]" />
            <span className="text-xs font-semibold text-[#5E5868]">
              {projects.length} Deployed &amp; Verified
            </span>
          </div>

          {/* GitHub Temkin236 Live Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#D8CDEE] shadow-xs text-xs font-medium text-[#1E1B24]">
            <a
              href={GITHUB_USER.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#8A75B3] transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-[#1E1B24]" />
              <span className="font-semibold">@{GITHUB_USER.username}</span>
            </a>
            <span className="text-gray-300">•</span>
            <span className="flex items-center gap-1 text-[#8A75B3]">
              <Radio className={`w-3.5 h-3.5 ${isLiveSynced ? "animate-pulse text-emerald-600" : ""}`} />
              <span className="text-[11px] font-semibold text-emerald-700">
                {isLiveSynced ? "GitHub Synced" : `${profile?.public_repos || 50} Repos`}
              </span>
            </span>
            <button
              onClick={refresh}
              disabled={loading}
              title="Refresh from GitHub API"
              className="p-1 text-gray-400 hover:text-[#8A75B3] transition-colors cursor-pointer disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin text-[#8A75B3]" : ""}`} />
            </button>
          </div>
        </div>

        {/* Big Editorial Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1E1B24]">
              Deployed Projects <span className="font-sans italic text-[#8A75B3]">Universe</span>
            </h2>
            <p className="text-sm sm:text-base text-[#5E5868] leading-relaxed">
              Every project in this collection is live, deployed, and testable on Vercel or Netlify. Explore full-stack architectures, interactive AI companions, and actual screenshots extracted from each repository&apos;s README.
            </p>
          </div>

          {/* Direct GitHub Profile CTA */}
          <a
            href={GITHUB_USER.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1E1B24] hover:bg-[#322C3D] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow group cursor-pointer"
          >
            <GithubIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            <span>Visit @{GITHUB_USER.username} on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-white" />
          </a>
        </div>

        {/* Search & Filter Control Bar */}
        <div className="p-2 sm:p-3 rounded-2xl bg-white border border-[#D8CDEE]/80 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {[
              { id: "all", label: "All Deployed", count: projects.length },
              { id: "ai", label: "AI & Autonomous", count: aiCount },
              { id: "fullstack", label: "Full-Stack & Web", count: fullstackCount },
              { id: "tools", label: "Productivity & Tools", count: toolsCount },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterCategory(tab.id as "all" | "ai" | "fullstack" | "tools")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  filterCategory === tab.id
                    ? "bg-[#8A75B3] text-white shadow-xs"
                    : "text-[#5E5868] hover:text-[#1E1B24] hover:bg-[#F5F2FA]"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                    filterCategory === tab.id
                      ? "bg-white/20 text-white"
                      : "bg-[#F5F2FA] text-[#8A75B3]"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Quick Instant Search */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="w-4 h-4 text-[#8A75B3] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, tech (React, Gemini, Vercel)..."
              className="w-full pl-9 pr-8 py-1.5 bg-[#F5F2FA] border border-[#D8CDEE]/70 rounded-full text-xs text-[#1E1B24] placeholder:text-[#5E5868]/60 focus:outline-none focus:border-[#8A75B3] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Active Search Results Indicator */}
        {searchQuery && (
          <div className="flex items-center justify-between text-xs text-[#5E5868] px-2">
            <span>
              Showing {filteredProjects.length} result{filteredProjects.length === 1 ? "" : "s"} for &ldquo;<span className="font-semibold text-[#1E1B24]">{searchQuery}</span>&rdquo;
            </span>
            <button
              onClick={() => setSearchQuery("")}
              className="text-[#8A75B3] hover:underline font-medium"
            >
              Clear filter
            </button>
          </div>
        )}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="p-12 text-center card-luxury space-y-4">
          <p className="font-editorial-serif text-2xl text-[#1E1B24]">
            No deployed projects matched your filter.
          </p>
          <p className="text-xs text-[#5E5868] max-w-md mx-auto">
            Try adjusting your search query or reset the filter to view all {projects.length} verified live projects.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setFilterCategory("all");
            }}
            className="px-5 py-2 rounded-full bg-[#8A75B3] text-white text-xs font-semibold cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="card-luxury overflow-hidden flex flex-col group relative"
            >
              {/* Project Cover / Readme Image Frame */}
              <div className="relative w-full h-52 bg-[#F5F2FA] overflow-hidden border-b border-[#D8CDEE]/50">
                <img
                  src={getAssetUrl(project.coverImage)}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to a placeholder gradient if remote raw image fails
                    (e.currentTarget as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
                  }}
                />

                {/* Dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openProjectModal(project)}
                      className="px-3 py-1.5 rounded-full bg-white/95 text-[#1E1B24] text-[11px] font-bold shadow-md hover:bg-white transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <ImageIcon className="w-3.5 h-3.5 text-[#8A75B3]" />
                      <span>{project.images.length} Readme Photos</span>
                    </button>
                  </div>
                </div>

                {/* Top Badge: Hosting Platform with Live indicator */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-emerald-200 text-emerald-800 text-[11px] font-bold shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live on {project.hostingPlatform}</span>
                  </span>
                </div>

                {/* Top Right: Highlight Badge */}
                {project.highlightBadge && (
                  <div className="absolute top-3 right-3 bg-[#1E1B24]/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                    {project.highlightBadge}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-editorial-serif text-2xl font-medium text-[#1E1B24] group-hover:text-[#8A75B3] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs font-semibold text-[#8A75B3] line-clamp-1">
                    {project.tagline}
                  </p>

                  <p className="text-xs text-[#5E5868] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
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

                {/* Prominent Deployed & GitHub Action Buttons */}
                <div className="pt-4 border-t border-[#D8CDEE]/50 space-y-2.5">
                  {/* Primary Button: Live Deployed Link */}
                  <a
                    href={project.deployedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#8A75B3] hover:bg-[#7863A2] text-white text-xs font-bold tracking-wide transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    <Globe className="w-4 h-4 text-white group-hover/btn:rotate-12 transition-transform" />
                    <span>Launch Live App</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>

                  {/* Secondary Row: GitHub Source & Quick Details */}
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5E5868] hover:text-[#1E1B24] transition-colors py-1 px-2 rounded-lg hover:bg-[#F5F2FA]"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>

                    <button
                      onClick={() => openProjectModal(project)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#8A75B3] hover:text-[#1E1B24] transition-colors py-1 px-2 rounded-lg hover:bg-[#F5F2FA] cursor-pointer"
                    >
                      <span>Readme &amp; Details</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Deep-Dive Case Study & Readme Photos Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#D8CDEE] my-8 overflow-hidden max-h-[92vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors z-20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                {/* Modal Header */}
                <div className="space-y-2 border-b border-[#D8CDEE]/60 pb-5 pr-10">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Deployed on {selectedProject.hostingPlatform}</span>
                    </span>
                    {selectedProject.highlightBadge && (
                      <span className="px-3 py-1 rounded-full bg-[#F5F2FA] border border-[#D8CDEE] text-xs font-semibold text-[#8A75B3]">
                        {selectedProject.highlightBadge}
                      </span>
                    )}
                  </div>

                  <h2 className="font-editorial-serif text-3xl sm:text-4xl font-medium text-[#1E1B24]">
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm font-medium text-[#8A75B3]">
                    {selectedProject.tagline} • <span className="text-[#5E5868]">{selectedProject.role}</span>
                  </p>
                </div>

                {/* Readme Photos Gallery & Lightbox */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-[#8A75B3]" />
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E1B24]">
                        Photos From README ({selectedProject.images.length})
                      </h4>
                    </div>

                    {selectedProject.images.length > 1 && (
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() =>
                            setActiveImageIndex((prev) =>
                              prev === 0 ? selectedProject.images.length - 1 : prev - 1
                            )
                          }
                          className="p-1 rounded-full border border-[#D8CDEE] hover:bg-[#F5F2FA] text-gray-600 transition-colors cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="text-xs font-semibold text-[#5E5868] px-2">
                          {activeImageIndex + 1} / {selectedProject.images.length}
                        </span>
                        <button
                          onClick={() =>
                            setActiveImageIndex((prev) =>
                              prev === selectedProject.images.length - 1 ? 0 : prev + 1
                            )
                          }
                          className="p-1 rounded-full border border-[#D8CDEE] hover:bg-[#F5F2FA] text-gray-600 transition-colors cursor-pointer"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Main Image Stage */}
                  <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-[#D8CDEE]/60 bg-[#F5F2FA] flex items-center justify-center">
                    <img
                      src={getAssetUrl(selectedProject.images[activeImageIndex]?.url || selectedProject.coverImage)}
                      alt={selectedProject.images[activeImageIndex]?.alt || selectedProject.title}
                      className="w-full h-full object-contain bg-[#1E1B24]/5"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = selectedProject.coverImage;
                      }}
                    />

                    {selectedProject.images[activeImageIndex]?.caption && (
                      <div className="absolute bottom-0 inset-x-0 bg-black/75 backdrop-blur-sm p-3 text-white text-xs">
                        <p>{selectedProject.images[activeImageIndex].caption}</p>
                      </div>
                    )}
                  </div>

                  {/* Thumbnail Row if multiple images */}
                  {selectedProject.images.length > 1 && (
                    <div className="flex items-center gap-2 overflow-x-auto pb-2">
                      {selectedProject.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImageIndex(i)}
                          className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer flex-shrink-0 ${
                            activeImageIndex === i
                              ? "border-[#8A75B3] scale-105 shadow-xs"
                              : "border-transparent opacity-60 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={img.url}
                            alt={img.alt}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Problem & Solution Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/60 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      The Engineering Challenge
                    </h4>
                    <p className="text-xs text-[#5E5868] leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/60 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      The Architectural Solution
                    </h4>
                    <p className="text-xs text-[#5E5868] leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                {selectedProject.keyFeatures && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E1B24] flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#8A75B3]" />
                      Core Highlights &amp; Capabilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedProject.keyFeatures.map((feat, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-white border border-[#D8CDEE]/70 flex items-start gap-2.5 text-xs text-[#1E1B24]"
                        >
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Architecture Pipeline */}
                <div className="p-5 rounded-2xl bg-[#FAF8FD] border border-[#D8CDEE] space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A75B3] flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    <span>System Architecture &amp; Dataflow</span>
                  </h4>
                  <p className="font-mono text-xs text-[#1E1B24] leading-relaxed bg-white/80 p-3 rounded-xl border border-[#D8CDEE]/60">
                    {selectedProject.architecture}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1E1B24] flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-[#8A75B3]" />
                    <span>Technologies &amp; Libraries</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-[#F5F2FA] border border-[#D8CDEE] text-[#1E1B24] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Action Links */}
                <div className="pt-6 border-t border-[#D8CDEE]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <a
                      href={selectedProject.deployedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-[#8A75B3] hover:bg-[#7863A2] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Open Live Application</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-white border border-[#D8CDEE] hover:border-[#8A75B3] text-[#1E1B24] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  </div>

                  <button
                    onClick={() => handleCopyLink(selectedProject.deployedUrl)}
                    className="text-xs text-[#5E5868] hover:text-[#1E1B24] flex items-center gap-1.5 cursor-pointer py-1 px-2 rounded"
                  >
                    {copiedLink === selectedProject.deployedUrl ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Deployed link copied!</span>
                      </>
                    ) : (
                      <>
                        <span>Copy Deployed URL</span>
                      </>
                    )}
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

export default ProjectUniverse;
