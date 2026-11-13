import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Globe, Sparkles, Check, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { DEPLOYED_PROJECTS } from "@/data/deployedProjects";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { getAssetUrl } from "@/utils/assetPath";

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const project = DEPLOYED_PROJECTS.find(
    (p) => p.slug === slug || p.id === slug
  );

  useDocumentTitle(project ? `${project.title} — Portfolio Details` : "Project Details");

  if (!project) {
    return (
      <main className="min-h-screen bg-[#F5F2FA] text-[#1E1B24] flex items-center justify-center p-4">
        <div className="card-luxury p-8 max-w-md text-center space-y-4">
          <h2 className="font-editorial-serif text-3xl font-medium">
            Project Not Found
          </h2>
          <p className="text-xs text-[#5E5868]">
            The requested project slug could not be located in the deployed projects universe.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8A75B3] text-white text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Deployed Projects</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F2FA] text-[#1E1B24] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#8A75B3] hover:text-[#1E1B24] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Deployed Universe</span>
          </Link>

          {/* Quick Direct Launch */}
          <a
            href={project.deployedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#8A75B3] hover:bg-[#7863A2] text-white text-xs font-bold transition-all shadow-xs"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Launch Live App</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Project Card Container */}
        <div className="card-luxury p-6 sm:p-12 space-y-8">
          {/* Header */}
          <div className="space-y-3 border-b border-[#D8CDEE]/60 pb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live on {project.hostingPlatform}</span>
              </span>
              {project.highlightBadge && (
                <span className="px-3 py-1 rounded-full bg-[#F5F2FA] border border-[#D8CDEE] text-xs font-semibold text-[#8A75B3]">
                  {project.highlightBadge}
                </span>
              )}
            </div>

            <h1 className="font-editorial-serif text-3xl sm:text-5xl font-medium text-[#1E1B24]">
              {project.title}
            </h1>
            <p className="text-sm sm:text-base font-medium text-[#8A75B3]">
              {project.tagline} • <span className="text-[#5E5868]">{project.role}</span>
            </p>
          </div>

          {/* Readme Photos Gallery */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[#8A75B3]" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#1E1B24]">
                  Photos From Repository README ({project.images.length})
                </h2>
              </div>

              {project.images.length > 1 && (
                <div className="flex items-center gap-1">
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === 0 ? project.images.length - 1 : prev - 1
                      )
                    }
                    className="p-1.5 rounded-full border border-[#D8CDEE] hover:bg-[#F5F2FA] text-gray-600 transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-semibold text-[#5E5868] px-2">
                    {activeImageIndex + 1} / {project.images.length}
                  </span>
                  <button
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === project.images.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="p-1.5 rounded-full border border-[#D8CDEE] hover:bg-[#F5F2FA] text-gray-600 transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Main Image Stage */}
            <div className="relative w-full h-80 sm:h-[440px] rounded-2xl overflow-hidden border border-[#D8CDEE]/60 bg-[#F5F2FA] flex items-center justify-center">
              <img
                src={getAssetUrl(project.images[activeImageIndex]?.url || project.coverImage)}
                alt={project.images[activeImageIndex]?.alt || project.title}
                className="w-full h-full object-contain bg-[#1E1B24]/5"
              />

              {project.images[activeImageIndex]?.caption && (
                <div className="absolute bottom-0 inset-x-0 bg-black/75 backdrop-blur-sm p-3 text-white text-xs">
                  <p>{project.images[activeImageIndex].caption}</p>
                </div>
              )}
            </div>

            {/* Thumbnail row if multiple images */}
            {project.images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {project.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 transition-all cursor-pointer flex-shrink-0 ${
                      activeImageIndex === i
                        ? "border-[#8A75B3] scale-105 shadow-xs"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={getAssetUrl(img.url)} alt={img.alt} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Overview Description */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#8A75B3]">
              Project Overview
            </h2>
            <p className="text-sm sm:text-base text-[#1E1B24] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/60 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-rose-800">
                The Engineering Challenge
              </h3>
              <p className="text-xs text-[#5E5868] leading-relaxed">{project.problem}</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/60 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                The Architectural Solution
              </h3>
              <p className="text-xs text-[#5E5868] leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Key Features */}
          {project.keyFeatures && (
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#1E1B24] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#8A75B3]" />
                <span>Key Features &amp; Capabilities</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feat, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-white border border-[#D8CDEE]/70 flex items-start gap-2.5 text-xs text-[#1E1B24]"
                  >
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* System Architecture */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#8A75B3]">
              System Architecture
            </h2>
            <div className="p-4 rounded-xl bg-[#FAF8FD] border border-[#D8CDEE] font-mono text-xs text-[#1E1B24]">
              {project.architecture}
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#5E5868]">
              Technologies &amp; Libraries
            </h2>
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

          {/* Action Links */}
          <div className="pt-6 border-t border-[#D8CDEE]/60 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={project.deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#8A75B3] hover:bg-[#7863A2] text-white text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-sm"
              >
                <Globe className="w-4 h-4" />
                <span>Launch Live App ({project.hostingPlatform})</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-[#1E1B24] hover:bg-[#322C3D] text-white text-xs font-medium transition-all inline-flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Source</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetailPage;
