import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowUp, 
  Terminal, 
  Shield, 
  Coffee, 
  Sparkles, 
  Trophy, 
  Compass, 
  ExternalLink, 
  Mail,
  FileText
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { getAssetUrl } from "@/utils/assetPath";

interface FooterProps {
  onOpenTerminal: () => void;
  onOpenCoffee: () => void;
  onOpenCheers?: () => void;
  onOpenAiChat?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenTerminal, 
  onOpenCoffee,
  onOpenCheers,
  onOpenAiChat
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20">
      {/* Top Banner Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#8A75B3] via-[#7863A2] to-[#6C529E] text-white p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left z-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D8CDEE]">
              READY TO BUILD?
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans">
              LET&apos;S CREATE SOMETHING EXTRAORDINARY
            </h3>
            <p className="text-xs sm:text-sm text-white/85 max-w-lg">
              Available for ambitious AI engineering roles, intelligent agent architectures, and full-stack software products.
            </p>
          </div>

          <div className="z-10 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-full bg-white text-[#1E1B24] text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#F5F2FA] transition-all shadow-md inline-flex items-center gap-2 group cursor-pointer"
            >
              <span>Let&apos;s Connect</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Background Decorative Sparkles */}
          <div className="absolute top-4 right-10 text-white/20 text-3xl select-none">✦</div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="border-t border-[#D8CDEE]/60 bg-white/80 backdrop-blur-md pt-14 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D8CDEE]/50">
          {/* Column 1: Identity & Bio (5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="font-serif font-bold text-2xl tracking-tight text-[#1E1B24]">
                TA<span className="text-[#8A75B3]">.</span>
              </span>
              <div>
                <h4 className="font-editorial-serif text-lg font-medium text-[#1E1B24] leading-none">
                  Temkin Abdulmelik
                </h4>
                <p className="text-[11px] font-semibold text-[#8A75B3] uppercase tracking-wider mt-0.5">
                  AI &amp; Full-Stack Developer
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#5E5868] leading-relaxed max-w-sm">
              Engineering undergraduate at Adama Science and Technology University (ASTU &apos;27). Designing grounded, production-grade agentic AI systems and high-performance digital experiences.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8A75B3] px-2.5 py-1 rounded-full bg-[#F5F2FA] border border-[#D8CDEE]">
                📍 Adama, Ethiopia
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#5E5868] px-2.5 py-1 rounded-full bg-[#F5F2FA] border border-[#D8CDEE]">
                🎓 ASTU B.Sc. ECE &apos;27
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/Temkin236"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub @Temkin236"
                className="w-8 h-8 rounded-full bg-[#F5F2FA] hover:bg-[#D8CDEE] text-[#1E1B24] hover:text-[#8A75B3] flex items-center justify-center transition-colors border border-[#D8CDEE]/60 shadow-xs"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/temkin-abdulmelik-195582306"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="w-8 h-8 rounded-full bg-[#F5F2FA] hover:bg-[#D8CDEE] text-[#1E1B24] hover:text-[#8A75B3] flex items-center justify-center transition-colors border border-[#D8CDEE]/60 shadow-xs"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:temkinabdulmelik@gmail.com"
                title="Email Temkin"
                className="w-8 h-8 rounded-full bg-[#F5F2FA] hover:bg-[#D8CDEE] text-[#1E1B24] hover:text-[#8A75B3] flex items-center justify-center transition-colors border border-[#D8CDEE]/60 shadow-xs"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#1E1B24] font-sans">
              Navigation Directory
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm font-medium text-[#5E5868]">
              <li>
                <Link to="/about" className="hover:text-[#8A75B3] transition-colors">
                  About &amp; Story
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#8A75B3] transition-colors">
                  Projects Universe
                </Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-[#8A75B3] transition-colors">
                  Experience &amp; Timeline
                </Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-[#8A75B3] transition-colors">
                  Technical Constellation
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-[#8A75B3] transition-colors">
                  Honors &amp; Milestones
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#8A75B3] transition-colors">
                  Photo Journal
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#8A75B3] transition-colors">
                  Contact Gateway
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Interactive Experiences (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#1E1B24] font-sans">
              Interactive Lab
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-[#5E5868]">
              {onOpenAiChat && (
                <li>
                  <button
                    onClick={onOpenAiChat}
                    className="flex items-center gap-2 hover:text-[#8A75B3] transition-colors text-left cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#8A75B3]" />
                    <span>Ask AI Companion</span>
                  </button>
                </li>
              )}
              <li>
                <button
                  onClick={onOpenCoffee}
                  className="flex items-center gap-2 hover:text-[#8A75B3] transition-colors text-left cursor-pointer"
                >
                  <Coffee className="w-3.5 h-3.5 text-[#8A75B3]" />
                  <span>Coffee Break Corner</span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTerminal}
                  className="flex items-center gap-2 hover:text-[#8A75B3] transition-colors text-left cursor-pointer"
                >
                  <Terminal className="w-3.5 h-3.5 text-[#5E5868]" />
                  <span>Interactive Terminal</span>
                  <span className="text-[10px] bg-[#F5F2FA] border border-[#D8CDEE] px-1.5 py-0.2 rounded font-mono text-[#5E5868]">
                    ⌘K
                  </span>
                </button>
              </li>
              {onOpenCheers && (
                <li>
                  <button
                    onClick={onOpenCheers}
                    className="flex items-center gap-2 hover:text-[#8A75B3] transition-colors text-left cursor-pointer"
                  >
                    <Trophy className="w-3.5 h-3.5 text-amber-500" />
                    <span>Raise a Toast (Cheers)</span>
                  </button>
                </li>
              )}
              <li>
                <Link to="/search" className="flex items-center gap-2 hover:text-[#8A75B3] transition-colors">
                  <Compass className="w-3.5 h-3.5 text-[#8A75B3]" />
                  <span>Semantic Discovery &amp; Search</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Platform & Security (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#1E1B24] font-sans">
              Platform &amp; Legal
            </h5>
            <ul className="space-y-2 text-xs sm:text-sm font-medium text-[#5E5868]">
              <li>
                <Link to="/privacy" className="flex items-center gap-1.5 hover:text-[#8A75B3] transition-colors">
                  <Shield className="w-3.5 h-3.5 text-[#8A75B3]" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/admin" className="flex items-center gap-1.5 hover:text-[#8A75B3] transition-colors">
                  <Shield className="w-3.5 h-3.5 text-[#8A75B3]" />
                  <span>Admin Studio</span>
                </Link>
              </li>
              <li>
                <a
                  href={getAssetUrl("/documents/Temkin_Abdulmelik_CV.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#8A75B3] transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-[#8A75B3]" />
                  <span>Download CV</span>
                </a>
              </li>
              <li>
                <a
                  href="https://portfolio-ecru-eight-pekn4mb5hj.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[#8A75B3] transition-colors"
                >
                  <span>Live Production</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & System Status */}
        <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#5E5868] gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span>© {new Date().getFullYear()} Temkin Abdulmelik. All rights reserved.</span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Operational
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#5E5868]">
              Crafted with React 19 &amp; Tailwind CSS
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#F5F2FA] hover:bg-[#D8CDEE] text-[#1E1B24] transition-colors shadow-xs cursor-pointer"
              title="Scroll back to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
