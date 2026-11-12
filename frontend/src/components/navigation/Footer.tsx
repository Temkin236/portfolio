
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Terminal, Shield, Heart, Coffee } from "lucide-react";

interface FooterProps {
  onOpenTerminal: () => void;
  onOpenCoffee: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal, onOpenCoffee }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20">
      {/* Inspo Bottom Purple Banner Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#8A75B3] via-[#7863A2] to-[#6C529E] text-white p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left z-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D8CDEE]">
              READY TO BUILD?
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight font-sans">
              LET&apos;S CREATE SOMETHING EXTRAORDINARY
            </h3>
            <p className="text-xs sm:text-sm text-white/80 max-w-lg">
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

      <div className="border-t border-[#D8CDEE]/60 bg-white/70 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Editorial Byline */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-editorial-serif font-medium text-lg text-[#1E1B24]">
              Temkin&apos;s World ✨
            </span>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8A75B3] px-2 py-0.5 rounded-full bg-[#F5F2FA] border border-[#D8CDEE]">
              Adama, Ethiopia
            </span>
          </div>
          <p className="text-xs text-[#5E5868]">
            Adama Science and Technology University (ASTU) • B.Sc. Electronics & Communication Engineering &apos;27
          </p>
        </div>

        {/* Interactive Shortcuts */}
        <div className="flex items-center gap-4 text-xs font-medium text-[#5E5868]">
          <button
            onClick={onOpenCoffee}
            className="flex items-center gap-1.5 hover:text-[#8A75B3] transition-colors cursor-pointer"
          >
            <Coffee className="w-3.5 h-3.5 text-[#8A75B3]" />
            <span>Coffee Break</span>
          </button>
          <span>•</span>
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 hover:text-[#8A75B3] transition-colors cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Terminal (⌘K)</span>
          </button>
          <span>•</span>
          <Link
            to="/admin"
            className="flex items-center gap-1.5 text-[#8A75B3] hover:underline"
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Admin Studio</span>
          </Link>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-full bg-[#F5F2FA] hover:bg-[#D8CDEE] text-[#1E1B24] transition-colors shadow-xs"
          title="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#5E5868] gap-2">
        <p>© {new Date().getFullYear()} Temkin Abdulmelik. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Designed with 💜 luxury editorial aesthetics, React, and Agentic AI.
        </p>
      </div>
      </div>
    </footer>
  );
};
