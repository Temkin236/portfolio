
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  Mail, 
  Sparkles, 
  Trophy,
  Cpu,
  GraduationCap,
  Briefcase,
  Layers,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { getAssetUrl } from "@/utils/assetPath";

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
    <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F5F2FA]">
      {/* Background Ambient Meshes & Sparkles */}
      <div className="floating-mesh w-96 h-96 bg-[#D8CDEE]/60 -top-20 -left-20" />
      <div className="floating-mesh w-80 h-80 bg-[#8A75B3]/20 top-1/3 -right-20" />
      <div className="floating-mesh w-72 h-72 bg-[#EDE5E9] -bottom-10 left-1/3" />

      {/* Floating Sparkle Elements */}
      <div className="absolute top-36 left-12 text-[#8A75B3]/40 text-xl select-none animate-pulse">✦</div>
      <div className="absolute top-48 right-1/4 text-[#8A75B3]/50 text-2xl select-none animate-bounce" style={{ animationDuration: '6s' }}>✦</div>
      <div className="absolute bottom-32 left-1/4 text-[#8A75B3]/30 text-lg select-none">✦</div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16 sm:mb-24">
          {/* Left Column: Bold Two-Tone Typography & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start space-y-6 text-left"
          >
            {/* Inspo Small Uppercase Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill border border-[#D8CDEE]/70 shadow-xs">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#8A75B3]">
                HELLO, I&apos;M TEMKIN ✨
              </span>
            </div>

            {/* Massive Two-Tone Display Headline (Matching Inspo) */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#8A75B3] uppercase leading-none font-sans">
                AI & FULL-STACK
              </h1>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#1E1B24] uppercase leading-none font-sans">
                DEVELOPER
              </h2>
            </div>

            {/* Inspo Subtitle */}
            <p className="text-base sm:text-xl text-[#5E5868] max-w-xl font-normal leading-relaxed">
              I design and engineer intelligent, functional, and user-friendly digital experiences at the intersection of agentic systems and modern software.
            </p>

            {/* Action Buttons (Matching Inspo) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-[#8A75B3] hover:bg-[#7863A2] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2 group cursor-pointer"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={getAssetUrl("/documents/Temkin_Abdulmelik_CV.pdf")}
                target="_blank"
                download
                className="px-6 py-3.5 rounded-full bg-white border border-[#D8CDEE] text-[#1E1B24] text-xs sm:text-sm font-semibold uppercase tracking-wider hover:border-[#8A75B3] hover:bg-[#F5F2FA] transition-all shadow-xs inline-flex items-center gap-2"
              >
                <span>Download CV</span>
                <Download className="w-4 h-4 text-[#8A75B3]" />
              </a>

              <button
                onClick={onOpenAiChat}
                className="px-5 py-3.5 rounded-full bg-[#D8CDEE]/60 border border-[#8A75B3]/30 text-[#1E1B24] text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#D8CDEE] transition-all inline-flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#8A75B3]" />
                <span>Ask AI</span>
              </button>
            </div>

            {/* Social Links & Location Bar */}
            <div className="flex items-center gap-5 pt-3 text-xs sm:text-sm text-[#5E5868]">
              <a
                href="https://github.com/Temkin236"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D8CDEE] text-[#1E1B24] hover:text-[#8A75B3] hover:border-[#8A75B3] transition-all shadow-xs"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="font-semibold">@Temkin236</span>
                <span className="text-[10px] bg-[#F5F2FA] px-1.5 py-0.5 rounded-full text-[#8A75B3] font-bold">50 repos</span>
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
            </div>
          </motion.div>

          {/* Right Column: Inspo Circular Backdrop & Portrait with Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-80 sm:w-96 aspect-[4/5] max-w-md flex items-center justify-center">
              {/* Inspo Large Circular Pastel Backdrop with Dotted Pattern Accent */}
              <div className="absolute w-72 h-72 sm:w-88 sm:h-88 rounded-full bg-gradient-to-tr from-[#D8CDEE] via-[#EDE5E9] to-[#FAF8FD] -z-10 shadow-lg" />
              
              {/* Dotted Grid Decorative Element (Matching Inspo) */}
              <div className="absolute -top-4 -right-4 w-28 h-28 bg-dot-pattern rounded-2xl opacity-75 -z-5" />

              {/* Portrait Container */}
              <div className="relative w-full h-full organic-portrait-frame overflow-hidden border-4 border-white bg-white/70 shadow-2xl">
                <img
                  src={getAssetUrl("/images/temkin-portrait.jpg")}
                  alt="Temkin Abdulmelik — Portrait"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Inspo "Based in ADAMA, ETHIOPIA 📍" Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute bottom-6 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md border border-[#D8CDEE] py-2.5 px-4 rounded-2xl shadow-xl flex items-center gap-2.5 z-20"
              >
                <div className="w-8 h-8 rounded-full bg-[#D8CDEE]/60 flex items-center justify-center text-[#8A75B3]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="font-serif italic text-xs text-[#8A75B3] leading-none">
                    Based in
                  </p>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#1E1B24] leading-tight mt-0.5">
                    Adama, Ethiopia
                  </p>
                </div>
              </motion.div>

              {/* Floating Pill: Hackathon 1st Place */}
              <motion.button
                onClick={onOpenCheers}
                whileHover={{ scale: 1.05 }}
                className="absolute -top-3 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-amber-200/90 py-2 px-3.5 rounded-2xl shadow-lg flex items-center gap-2 cursor-pointer z-20"
              >
                <span className="text-lg">🏆</span>
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                    1st Place Winner
                  </p>
                  <p className="text-[11px] font-medium text-[#1E1B24]">CSEC Hackathon v1.0</p>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* 4-Stat Metric Banner Strip (Matching Inspo) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="w-full bg-white rounded-3xl border border-[#D8CDEE]/70 shadow-lg p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-[#D8CDEE]/50"
        >
          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center space-y-1.5 pt-4 md:pt-0">
            <div className="w-10 h-10 rounded-full bg-[#D8CDEE]/60 flex items-center justify-center text-[#8A75B3] mb-1">
              <Trophy className="w-5 h-5" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#1E1B24] font-sans">
              1st Place
            </span>
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#5E5868]">
              CSEC ASTU Hackathon
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center space-y-1.5 pt-4 md:pt-0 md:pl-4">
            <div className="w-10 h-10 rounded-full bg-[#D8CDEE]/60 flex items-center justify-center text-[#8A75B3] mb-1">
              <Briefcase className="w-5 h-5" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#1E1B24] font-sans">
              5+ Projects
            </span>
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#5E5868]">
              Full-Stack & AI Systems
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center space-y-1.5 pt-4 md:pt-0 md:pl-4">
            <div className="w-10 h-10 rounded-full bg-[#D8CDEE]/60 flex items-center justify-center text-[#8A75B3] mb-1">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#1E1B24] font-sans">
              Dev Mentor
            </span>
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#5E5868]">
              CSEC ASTU Community
            </span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center text-center space-y-1.5 pt-4 md:pt-0 md:pl-4">
            <div className="w-10 h-10 rounded-full bg-[#D8CDEE]/60 flex items-center justify-center text-[#8A75B3] mb-1">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#1E1B24] font-sans">
              2027 ECE
            </span>
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#5E5868]">
              ASTU Engineering Degree
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
