
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

import { LinkedinIcon } from "@/components/ui/Icons";

interface Milestone {
  year: string;
  title: string;
  roleOrContext?: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  tags: string[];
  isHighlight?: boolean;
}

export const EngineeringTimeline: React.FC = () => {
  const milestones: Milestone[] = [
    {
      year: "2025 — Present",
      title: "AI Project Contributor",
      roleOrContext: "AfterQuery & Revelo",
      category: "Work Experience",
      isHighlight: true,
      icon: <Sparkles className="w-5 h-5 text-[#8A75B3]" />,
      description:
        "Contributed to remote AI evaluation and software engineering tasks through AfterQuery and Revelo. Conducted rigorous technical problem-solving, structured reasoning reviews, and verified model outputs against complex requirements and reproducible engineering benchmarks.",
      tags: ["AfterQuery", "Revelo", "AI Evaluation", "Model Alignment", "Code Verification", "Task Quality"],
    },
    {
      year: "2024 — Present",
      title: "Independent Full-Stack & AI Developer",
      roleOrContext: "Self-Employed / Project Engineering",
      category: "Engineering Experience",
      icon: <Cpu className="w-5 h-5 text-[#8A75B3]" />,
      description:
        "Architected and deployed end-to-end web applications and intelligent systems from scratch: multi-agent workflows with LangGraph, semantic search pipelines with pgvector cosine similarity, real-time SSE token streaming, and production FastAPI services paired with modern React frontends.",
      tags: ["LangGraph", "FastAPI", "PostgreSQL pgvector", "Gemini 2.5", "React 19", "Automated Testing"],
    },
    {
      year: "2024 — Present",
      title: "Development Mentor",
      roleOrContext: "Cybernauts Software Engineering Club (CSEC ASTU)",
      category: "Leadership & Community",
      icon: <Users className="w-5 h-5 text-[#8A75B3]" />,
      description:
        "Appointed official Development Mentor at CSEC ASTU. Lead hands-on code clinics, Git hygiene workshops, and collaborative development sessions for student software engineers at Adama Science and Technology University.",
      tags: ["CSEC ASTU", "Technical Mentorship", "Git Workflows", "Python Architecture", "Workshops"],
    },
    {
      year: "2024",
      title: "1st Place Champion — CSEC ASTU Hackathon v1.0",
      roleOrContext: "Team Divas | Meri AI",
      category: "Hackathon Championship",
      isHighlight: true,
      icon: <Trophy className="w-5 h-5 text-amber-600" />,
      description:
        "Led full-stack engineering of Meri AI, an autonomous campus agentic intelligence system built in a 24-hour sprint. Competed against top university engineering teams and secured First Place Gold for architectural robustness, retrieval fidelity, and real-time execution.",
      tags: ["1st Place Winner", "Meri AI", "Team Divas", "24h Hackathon Championship", "CSEC ASTU"],
    },
    {
      year: "2022 — 2027",
      title: "B.Sc. in Electronics & Communication Engineering",
      roleOrContext: "Adama Science and Technology University (ASTU)",
      category: "Education",
      icon: <GraduationCap className="w-5 h-5 text-[#8A75B3]" />,
      description:
        "Enrolled in Ethiopia's leading center of excellence for science and technology. Specializing in intelligent computing, digital signal processing, telecommunications, embedded microcontrollers, and modern software architectures.",
      tags: ["ASTU", "B.Sc. Degree '27", "Electronics", "Telecommunications", "Embedded Systems"],
    },
  ];

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D8CDEE]/50 border border-[#D8CDEE] text-[11px] font-semibold text-[#8A75B3]">
          <LinkedinIcon className="w-3.5 h-3.5" />
          <span>Sourced Strictly from LinkedIn Profile</span>
        </div>
        <h2 className="font-editorial-serif text-4xl sm:text-5xl font-normal text-[#1E1B24]">
          Professional <span className="italic text-[#8A75B3]">Experience</span> &amp; Timeline ⏳
        </h2>
        <p className="text-[#5E5868] max-w-xl mx-auto text-sm sm:text-base">
          Verified roles, technical mentorship, hackathon championships, and engineering education from Temkin&apos;s LinkedIn dossier.
        </p>
        <div className="pt-1">
          <a
            href="https://linkedin.com/in/temkin-abdulmelik-195582306"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8A75B3] hover:underline"
          >
            <span>View Verified LinkedIn Profile</span>
            <span className="text-[10px]">↗</span>
          </a>
        </div>
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
                    {item.roleOrContext && (
                      <p className="text-xs font-semibold text-[#8A75B3]">
                        {item.roleOrContext}
                      </p>
                    )}
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
