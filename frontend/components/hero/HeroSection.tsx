"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  Mail, 
  Sparkles, 
  Trophy,
  Cpu,
  GraduationCap
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

interface HeroSectionProps {
  onOpenCoffee: () => void;
  onOpenCheers: () => void;
  onOpenAiChat: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenCoffee,
  onOpenCheers,
  onOpenAiChat,
}) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Organic Floating Meshes */}
      <div className="floating-mesh w-96 h-96 bg-[#D8CDEE] -top-20 -left-20" />
      <div className="floating-mesh w-80 h-80 bg-[#8A75B3]/25 top-1/3 -right-20" />
      <div className="floating-mesh w-72 h-72 bg-[#F2DFE6] -bottom-10 left-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Editorial Headline & Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
        >
          {/* Live Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill shadow-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-[#1E1B24]/90">
              Exploring Agentic AI & RAG Architectures at ASTU
            </span>
          </div>

          {/* Main Editorial Headline */}
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="editorial-tag text-[#8A75B3] font-semibold flex items-center gap-2"
            >
              <span>TEMKIN ABDULMELIK</span>
              <span className="w-8 h-[1px] bg-[#8A75B3]/40"></span>
              <span className="flex items-center gap-1 text-[11px] font-medium text-[#5E5868]">
                <MapPin className="w-3 h-3 text-[#8A75B3]" /> Adama, Ethiopia
              </span>
            </motion.div>

            <h1 className="font-editorial-serif text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#1E1B24] leading-[1.1]">
              Hey, I&apos;m <span className="italic font-normal text-[#8A75B3]">Temkin</span>. ✨
            </h1>

            <p className="font-editorial-cormorant text-2xl sm:text-3xl text-[#5E5868] font-light leading-snug">
              Building things that make intelligence feel magical.
            </p>
          </div>

          {/* Supporting Bio */}
          <p className="text-base sm:text-lg text-[#1E1B24]/80 max-w-xl font-normal leading-relaxed">
            Engineer by education, builder by curiosity, AI enthusiast by obsession. Usually somewhere between an ambitious idea and another cup of coffee.
          </p>

          {/* Quick Credential Badges */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#D8CDEE]/70 text-xs font-medium text-[#1E1B24]">
              <GraduationCap className="w-3.5 h-3.5 text-[#8A75B3]" />
              <span>ASTU ECE &apos;27</span>
            </div>
            <button
              onClick={onOpenCheers}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50/90 border border-amber-200/80 text-xs font-medium text-amber-900 hover:bg-amber-100 transition-colors cursor-pointer"
            >
              <Trophy className="w-3.5 h-3.5 text-amber-600" />
              <span>1st Place CSEC ASTU Hackathon</span>
            </button>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#D8CDEE]/70 text-xs font-medium text-[#1E1B24]">
              <Cpu className="w-3.5 h-3.5 text-[#8A75B3]" />
              <span>Agentic AI & LangGraph</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-[#1E1B24] text-white text-sm font-medium hover:bg-[#8A75B3] transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2 group"
            >
              <span>Explore My Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-white border border-[#D8CDEE] text-[#1E1B24] text-sm font-medium hover:border-[#8A75B3] hover:bg-[#F5F2FA] transition-all shadow-xs"
            >
              Let&apos;s Collaborate
            </a>

            <button
              onClick={onOpenAiChat}
              className="px-5 py-3 rounded-full bg-[#D8CDEE]/60 border border-[#8A75B3]/30 text-[#1E1B24] text-sm font-medium hover:bg-[#D8CDEE] transition-all inline-flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-[#8A75B3]" />
              <span>Ask AI About Me</span>
            </button>
          </div>

          {/* Social Profiles & Resume Link */}
          <div className="flex items-center gap-5 pt-3 text-sm text-[#5E5868]">
            <a
              href="https://github.com/Temkin236"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#8A75B3] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="https://linkedin.com/in/temkin-abdulmelik-195582306"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#8A75B3] transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="mailto:temkinabdulmelik@gmail.com"
              className="flex items-center gap-1.5 hover:text-[#8A75B3] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="/api/resume/download"
              target="_blank"
              download
              className="flex items-center gap-1.5 text-[#8A75B3] font-medium hover:underline"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Organic Framed Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-72 sm:w-84 md:w-96 aspect-[4/5] max-w-sm">
            {/* Subtle decorative glow ring */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#8A75B3]/25 via-[#D8CDEE]/50 to-white/40 rounded-full blur-2xl -z-10 animate-pulse-subtle" />

            {/* Organic framed authentic portrait */}
            <div className="relative w-full h-full organic-portrait-frame overflow-hidden border-4 border-white bg-white/60">
              <Image
                src="/images/temkin-portrait.jpg"
                alt="Temkin Abdulmelik — Portrait"
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>

            {/* Floating Floating Pill: Coffee Companion */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              onClick={onOpenCoffee}
              className="absolute -bottom-3 -left-4 bg-white/95 backdrop-blur-md border border-[#D8CDEE] py-2 px-3.5 rounded-2xl shadow-lg flex items-center gap-2 cursor-pointer hover:border-[#8A75B3] transition-all"
            >
              <span className="text-xl">☕</span>
              <div className="text-left">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#8A75B3]">
                  Coffee Corner
                </p>
                <p className="text-xs font-medium text-[#1E1B24]">Brew a cup with me</p>
              </div>
            </motion.div>

            {/* Floating Pill: Hackathon Winner */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              onClick={onOpenCheers}
              className="absolute -top-3 -right-3 bg-white/95 backdrop-blur-md border border-amber-200 py-2 px-3.5 rounded-2xl shadow-lg flex items-center gap-2 cursor-pointer hover:bg-amber-50/80 transition-all"
            >
              <span className="text-xl">🏆</span>
              <div className="text-left">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-amber-700">
                  Meri AI
                </p>
                <p className="text-xs font-medium text-[#1E1B24]">CSEC Hackathon #1</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
