
import React, { useState } from "react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Trophy, X, Heart } from "lucide-react";

interface CheersCelebrationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheersCelebration: React.FC<CheersCelebrationProps> = ({
  isOpen,
  onClose,
}) => {
  const [cheersCount, setCheersCount] = useState(1);

  const fireConfetti = () => {
    // Luxury color palette confetti: Lilac, Lavender, Rose, and Warm Gold
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#8A75B3", "#D8CDEE", "#F2DFE6", "#E8C872", "#FFFFFF"],
      disableForReducedMotion: true,
    });
    setCheersCount((prev) => prev + 1);
    try {
      fetch("/api/cheers", { method: "POST" });
    } catch {
      // ignore
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      fireConfetti();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 320 }}
            className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-amber-200 text-center overflow-hidden"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Decorative Gold & Lavender Halo */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-100/70 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-[#D8CDEE]/50 rounded-full blur-2xl -z-10" />

            <div className="space-y-6">
              <div className="space-y-1">
                <span className="editorial-tag text-amber-700 font-semibold">
                  MOMENT OF CELEBRATION
                </span>
                <h3 className="font-editorial-serif text-3xl font-medium text-[#1E1B24]">
                  Cheers to Building! 🥂
                </h3>
                <p className="text-xs text-[#5E5868]">
                  Celebrating ambition, curiosity, and code that changes things.
                </p>
              </div>

              {/* Toasting Glasses Icon */}
              <motion.div
                animate={{ rotate: [0, -10, 10, -5, 5, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2 }}
                className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-amber-400 to-[#D8CDEE] flex items-center justify-center shadow-lg"
              >
                <span className="text-4xl">🥂</span>
              </motion.div>

              {/* Personalized Message */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-center">
                <p className="font-editorial-cormorant text-xl text-amber-950 italic font-medium">
                  &ldquo;Here&apos;s to the sleepless 24-hour hackathons, the breakthrough ideas, and the joy of seeing software come to life!&rdquo;
                </p>
                <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-amber-800 font-medium">
                  <Trophy className="w-3.5 h-3.5 text-amber-600" />
                  <span>Honoring the 1st Place win at CSEC ASTU Hackathon v1.0</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={fireConfetti}
                  className="px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold shadow-md inline-flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Raise Another Toast! ({cheersCount})</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-xs font-medium text-gray-700 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
