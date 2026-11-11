"use client";

import React from "react";
import Link from "next/link";
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
    <footer className="border-t border-[#D8CDEE]/60 bg-white/70 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-8 mt-12">
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
            href="/admin"
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
          Designed with 💜 luxury editorial aesthetics, Next.js, and Agentic AI.
        </p>
      </div>
    </footer>
  );
};
