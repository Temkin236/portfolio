import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Compass, ArrowLeft } from "lucide-react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export const NotFoundPage: React.FC = () => {
  useDocumentTitle("404 — Horizon Not Found");

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center space-y-6 card-inspo-lilac p-8 sm:p-12 shadow-xl"
      >
        <span className="text-6xl sm:text-7xl font-editorial-serif font-bold text-[#8A75B3]">
          404
        </span>
        <div className="space-y-2">
          <h1 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#1E1B24]">
            Horizon Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#5E5868]">
            The digital coordinates you are looking for seem to have shifted beyond the current constellation.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-6 py-3 rounded-full bg-[#8A75B3] hover:bg-[#7863A2] text-white text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/projects"
            className="px-6 py-3 rounded-full bg-white hover:bg-[#F5F2FA] text-[#1E1B24] border border-[#D8CDEE] text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-all"
          >
            <Compass className="w-4 h-4 text-[#8A75B3]" />
            <span>Explore Projects</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
