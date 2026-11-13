import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Trophy,
  Award,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Heart,
  Share2,
  MessageCircle
} from "lucide-react";
import { LinkedinIcon } from "@/components/ui/Icons";
import { getAssetUrl } from "@/utils/assetPath";

export interface GalleryMemoryItem {
  id: string;
  type: "certificate" | "linkedin" | "moment";
  category: "certificates" | "linkedin" | "moments";
  title: string;
  subtitle: string;
  issuerOrAuthor: string;
  date: string;
  image: string;
  badge: string;
  badgeColor: "gold" | "blue" | "emerald" | "purple";
  shortDescription: string;
  fullStory: string;
  linkedinUrl: string;
  metrics: string;
  skills: string[];
}

export const PhotoGallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<GalleryMemoryItem | null>(null);

  const memoryItems: GalleryMemoryItem[] = [
    {
      id: "cert-astumsj-mentorship",
      type: "certificate",
      category: "certificates",
      title: "Certificate of Recognition — ASTUMSJ Developer Mentorship",
      subtitle: "Honoring 10 Months of Code, Community Mentorship & Barakah",
      issuerOrAuthor: "ASTU Muslim Student Jemea (ASTUMSJ)",
      date: "10-Month Milestone",
      image: getAssetUrl("/images/memories/cert-astumsj-mentorship.jpg"),
      badge: "Certificate of Recognition 📜",
      badgeColor: "gold",
      shortDescription:
        "10 months of relentless learning, late-night code reviews, and community barakah. Honored to receive this Certificate of Recognition for mentoring aspiring university developers through an intensive summer engineering bootcamp.",
      fullStory:
        "Teaching someone to code is one of the highest forms of mastery. Over 10 transformative months, I had the privilege of guiding dedicated students from their first lines of syntax to building responsive full-stack applications. This Certificate of Recognition, presented alongside heartfelt appreciation and stickers from my sisters in tech, serves as a beautiful reminder of the impact we create when knowledge is shared generously with the community.",
      linkedinUrl: "https://lnkd.in/p/eSKgZVaE",
      metrics: "ASTUMSJ Recognition • 17+ Comments",
      skills: ["Full-Stack Mentorship", "React & Next.js", "Developer Education", "Community Leadership"]
    },
    {
      id: "astumsj-bootcamp-batch2",
      type: "linkedin",
      category: "linkedin",
      title: "13 Weeks, Countless Breakthroughs: ASTUMSJ Bootcamp Batch 2",
      subtitle: "Organizing & Directing University Developer Training",
      issuerOrAuthor: "Temkin Abdulmelik on LinkedIn",
      date: "13-Week Intensive Cohort",
      image: getAssetUrl("/images/memories/astumsj-bootcamp-batch2.jpg"),
      badge: "Bootcamp Organizer 🎓",
      badgeColor: "blue",
      shortDescription:
        "13 weeks, countless memories, engineering hurdles, and breakthrough moments. Officially graduated Batch 2 of the ASTUMSJ Summer Bootcamp! Behind every successful program are leaders who pour their hearts in.",
      fullStory:
        "Turning ambition into structured engineering skill: for 13 intense weeks, we designed curriculum, coordinated peer mentors, reviewed hundreds of commits, and guided students through hands-on technical sprints. Serving as an organizer taught me that software engineering is fundamentally about empowering human potential. Seeing our cohort graduate with production-ready projects is an irreplaceable feeling.",
      linkedinUrl: "https://lnkd.in/p/e8p7WhRS",
      metrics: "Organizing Lead • Batch 2 Graduation",
      skills: ["Program Leadership", "Curriculum Design", "Developer Coaching", "Agile Execution"]
    },
    {
      id: "csec-executive-announcement",
      type: "linkedin",
      category: "linkedin",
      title: "Elected Social Media Division Head — CSEC ASTU Executive Team",
      subtitle: "Executive Board Leadership for Computer Science & Engineering Community",
      issuerOrAuthor: "CSEC ASTU Official Announcement",
      date: "2019 E.C Executive Election",
      image: getAssetUrl("/images/memories/csec-executive-announcement.jpg"),
      badge: "Executive Board 🏛️",
      badgeColor: "purple",
      shortDescription:
        "Officially elected as Social Media Division Head for CSEC ASTU 2019 E.C! Stepping up to shape our community's voice, broadcast student innovations, and inspire the next generation of university technologists.",
      fullStory:
        "CSEC ASTU is the heartbeat of developer culture at Adama Science and Technology University. Joining the Executive Board as Social Media Division Head means spearheading high-signal communication, highlighting student builders, promoting university hackathons, and connecting our local engineering talent to the global tech ecosystem with clarity, vision, and creativity.",
      linkedinUrl: "https://lnkd.in/p/eCCRqWcA",
      metrics: "Elected Executive • CSEC ASTU 2019 E.C",
      skills: ["Executive Leadership", "Developer Relations", "Brand Strategy", "Community Advocacy"]
    },
    {
      id: "csec-hackathon-champions",
      type: "moment",
      category: "moments",
      title: "Grand Champions 🥇 Divas Team at 35-Hour CSEC AI Hackathon",
      subtitle: "Ranked #1 Across University Teams in an Intense Sprint",
      issuerOrAuthor: "CSEC ASTU Development Division",
      date: "35-Hour AI Hackathon",
      image: getAssetUrl("/images/memories/csec-hackathon-champions.jpg"),
      badge: "1st Place Champions 🥇",
      badgeColor: "gold",
      shortDescription:
        "Ranked 1st Place out of 20+ competitive engineering teams! Built and pitched an intelligent agentic system powered by LLMs, LangGraph, and real-time streaming, evaluated for pinpoint accuracy, utility, and stellar UX.",
      fullStory:
        "35 continuous hours of high-stakes AI prototyping: following masterclasses on LangGraph and RAG, our team engineered an end-to-end intelligent platform from scratch. Evaluated by university faculty and industry judges on architectural robustness, retrieval fidelity, and user experience, our team took home the Gold among top campus teams!",
      linkedinUrl: "https://lnkd.in/p/eaNsfQRk",
      metrics: "Grand Champions • Ranked #1 of 20+ Teams",
      skills: ["LangGraph", "Agentic AI", "RAG Systems", "Competitive Sprinting", "High-Stress Delivery"]
    },
    {
      id: "meri-ai-hackathon-win",
      type: "moment",
      category: "moments",
      title: "መሪ AI: 24-Hour Hackathon Victory with Team Diva’s",
      subtitle: "Smart Campus Navigation PWA Powered by Gemini AI",
      issuerOrAuthor: "Temkin Abdulmelik on LinkedIn",
      date: "Hackathon Victory",
      image: getAssetUrl("/images/memories/meri-ai-hackathon-win.jpg"),
      badge: "Hackathon Win 🏆",
      badgeColor: "emerald",
      shortDescription:
        "Proud to share that Team Diva's secured 1st Place with መሪ AI — a progressive web app transforming university navigation into an effortless, intelligent journey, built in under 24 hours.",
      fullStory:
        "As an all-female developer team, we channeled every ounce of focus, adrenaline, and technical precision into our product. We engineered a contextual Gemini AI assistant paired with an offline-capable PWA to solve the campus navigation problem for thousands of ASTU students. Winning first place proved that great engineering, rapid execution, and bold vision always prevail.",
      linkedinUrl: "https://lnkd.in/p/e63cn-FY",
      metrics: "1st Place Trophy • 11+ Comments",
      skills: ["FastAPI", "React PWA", "Gemini API", "Geospatial UX", "Rapid Prototyping"]
    },
    {
      id: "nsda-certificate-appreciation",
      type: "certificate",
      category: "certificates",
      title: "Certificate of Appreciation — NEJM Student Developers Association",
      subtitle: "Core Project Team Member Recognition for Impactful Systems",
      issuerOrAuthor: "NSDA Developers Community",
      date: "Core Contributor Honor",
      image: getAssetUrl("/images/memories/nsda-certificate-appreciation.jpg"),
      badge: "Certificate of Appreciation 📜",
      badgeColor: "gold",
      shortDescription:
        "Deeply honored to receive this Certificate of Appreciation from the NSDA Community for contributions as a core project developer. A testament to how teamwork, architectural rigor, and dedication spark meaningful community impact.",
      fullStory:
        "Building impactful technology is always a collective endeavor. Working alongside talented peers at the NEJM Student Developers Association, we developed and delivered core digital initiatives that serve real students. This certificate honors our collaborative spirit, perseverance, and dedication to building open, accessible community software.",
      linkedinUrl: "https://lnkd.in/p/ec_mEehc",
      metrics: "Official Certificate • NSDA Community",
      skills: ["Core Contributor", "Community Open Source", "Collaborative Engineering", "Teamwork"]
    }
  ];

  const filteredItems =
    selectedFilter === "all"
      ? memoryItems
      : memoryItems.filter((item) => item.category === selectedFilter);

  const certCount = memoryItems.filter((i) => i.category === "certificates").length;
  const linkedinCount = memoryItems.filter((i) => i.category === "linkedin").length;
  const momentsCount = memoryItems.filter((i) => i.category === "moments").length;

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="editorial-tag text-[#8A75B3]">
              CERTIFICATES &amp; LINKEDIN MILESTONES
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] text-[#0A66C2] bg-blue-50 px-3 py-0.5 rounded-full border border-blue-200 font-semibold">
              <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>Direct LinkedIn Posts</span>
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified Certificates</span>
            </span>
          </div>

          <h2 className="font-editorial-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1E1B24]">
            Memories in <span className="italic text-[#8A75B3]">Focus</span> 📷
          </h2>

          <p className="text-[#5E5868] max-w-2xl text-sm sm:text-base leading-relaxed">
            Authentic certificates, 1st place hackathon triumphs, and milestone moments extracted directly from Temkin&apos;s LinkedIn posts.
          </p>
        </div>

        {/* LinkedIn Profile CTA Banner */}
        <a
          href="https://www.linkedin.com/in/temkin-abdulmelik-195582306/"
          target="_blank"
          rel="noopener noreferrer"
          className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow group cursor-pointer"
        >
          <LinkedinIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
          <span>Follow Temkin on LinkedIn</span>
          <ExternalLink className="w-3.5 h-3.5 text-white/80" />
        </a>
      </div>

      {/* Filter Tabs Bar */}
      <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl sm:rounded-full bg-white border border-[#D8CDEE]/70 shadow-xs mb-10 w-fit">
        {[
          { id: "all", label: "All Memories", count: memoryItems.length },
          { id: "certificates", label: "Certificates & Honors 📜", count: certCount },
          { id: "linkedin", label: "LinkedIn Posts & Updates 💼", count: linkedinCount },
          { id: "moments", label: "Hackathon Triumphs 🏆", count: momentsCount },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedFilter(tab.id)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              selectedFilter === tab.id
                ? "bg-[#8A75B3] text-white shadow-xs"
                : "text-[#5E5868] hover:text-[#1E1B24] hover:bg-[#F5F2FA]"
            }`}
          >
            <span>{tab.label}</span>
            <span
              className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                selectedFilter === tab.id
                  ? "bg-white/20 text-white"
                  : "bg-[#F5F2FA] text-[#8A75B3]"
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className={`card-luxury overflow-hidden flex flex-col group relative ${
              item.type === "certificate"
                ? "border-amber-200/80 hover:border-amber-400"
                : item.type === "linkedin"
                ? "border-blue-200/80 hover:border-blue-400"
                : "border-[#D8CDEE]/80 hover:border-[#8A75B3]"
            }`}
          >
            {/* Visual Frame */}
            <div
              onClick={() => setActiveItem(item)}
              className="relative w-full h-56 bg-[#F5F2FA] overflow-hidden border-b border-[#D8CDEE]/40 cursor-pointer"
            >
              <img
                src={getAssetUrl(item.image)}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Type Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5">
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold backdrop-blur-md shadow-xs ${
                    item.type === "certificate"
                      ? "bg-amber-50/95 text-amber-900 border border-amber-300"
                      : item.type === "linkedin"
                      ? "bg-blue-50/95 text-[#0A66C2] border border-blue-300"
                      : "bg-emerald-50/95 text-emerald-900 border border-emerald-300"
                  }`}
                >
                  {item.badge}
                </span>
              </div>

              {/* Date Badge */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-full">
                {item.date}
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                <h4 className="font-editorial-serif text-lg font-medium leading-tight drop-shadow-sm">
                  {item.title}
                </h4>
                <p className="text-[11px] text-white/80 line-clamp-1">
                  {item.subtitle}
                </p>
              </div>
            </div>

            {/* Card Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                {/* Author or Issuer row */}
                <div className="flex items-center justify-between text-xs text-[#5E5868]">
                  <span className="font-semibold text-[#1E1B24]">{item.issuerOrAuthor}</span>
                  <span className="text-[11px] text-[#8A75B3] font-semibold">
                    {item.metrics}
                  </span>
                </div>

                <p className="text-xs text-[#5E5868] line-clamp-3 leading-relaxed">
                  {item.shortDescription}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#F5F2FA] border border-[#D8CDEE]/70 text-[#1E1B24] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-[#D8CDEE]/50 flex items-center justify-between">
                <button
                  onClick={() => setActiveItem(item)}
                  className="text-xs font-semibold text-[#8A75B3] hover:text-[#1E1B24] flex items-center gap-1 cursor-pointer group-hover:underline"
                >
                  <span>Read Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={item.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A66C2] hover:text-[#084e96] bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn Post</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Memory Detail Modal / Lightbox */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 my-8 max-h-[92vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Visual Section */}
                <div className="md:col-span-7 relative min-h-[320px] md:min-h-[500px] flex items-center justify-center bg-black/95">
                  <img
                    src={getAssetUrl(activeItem.image)}
                    alt={activeItem.title}
                    className="max-h-[85vh] w-auto max-w-full object-contain"
                  />
                  {activeItem.badge && (
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#1E1B24] shadow-md">
                      {activeItem.badge}
                    </div>
                  )}
                </div>

                {/* Details Narrative Section */}
                <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white">
                  <div className="space-y-4">
                    <div className="space-y-1 border-b border-gray-100 pb-4">
                      <span className="editorial-tag text-[#8A75B3]">
                        {activeItem.issuerOrAuthor}
                      </span>
                      <h3 className="font-editorial-serif text-2xl sm:text-3xl font-medium text-[#1E1B24] leading-tight">
                        {activeItem.title}
                      </h3>
                      <p className="text-xs font-medium text-[#8A75B3]">
                        {activeItem.subtitle} • {activeItem.date}
                      </p>
                    </div>

                    {/* Full story / narrative */}
                    <div className="p-4 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/60 text-xs text-[#1E1B24] leading-relaxed space-y-2">
                      <div className="flex items-center gap-1.5 font-bold text-[#8A75B3] text-[11px] uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>The Story Behind The Post</span>
                      </div>
                      <p>{activeItem.fullStory}</p>
                    </div>

                    {/* Metrics / Verified indicator */}
                    {activeItem.metrics && (
                      <div className="flex items-center gap-2 text-xs text-[#5E5868] p-3 rounded-xl bg-white border border-[#D8CDEE]/60">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span className="font-semibold text-[#1E1B24]">{activeItem.metrics}</span>
                      </div>
                    )}

                    {/* Skills pills */}
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#5E5868]">
                        Associated Competencies
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeItem.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#FAF8FD] border border-[#D8CDEE] text-[#1E1B24] font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                    <a
                      href={activeItem.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-5 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      <LinkedinIcon className="w-4 h-4 text-white" />
                      <span>View Live on LinkedIn</span>
                      <ExternalLink className="w-3.5 h-3.5 text-white/80" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
