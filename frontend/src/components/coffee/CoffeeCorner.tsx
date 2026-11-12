
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Coffee, Sparkles, RefreshCw } from "lucide-react";

interface CoffeeCornerProps {
  isOpen: boolean;
  onClose: () => void;
  coffeeCount: number;
  onIncrementCoffee: () => void;
}

export const CoffeeCorner: React.FC<CoffeeCornerProps> = ({
  isOpen,
  onClose,
  coffeeCount,
  onIncrementCoffee,
}) => {
  const [brewing, setBrewing] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(
    "Coffee first. Then we deploy."
  );

  const quotes = [
    "Coffee first. Then we deploy.",
    "One more cup. One more AI agent.",
    "Debugging is just detective work with more coffee.",
    "Warning: May spontaneously start building another project.",
    "Fueling ambitious ideas, one cup at a time.",
    "Buna dabo naw! (In Ethiopia, coffee brings community together).",
    "Ethiopian roast: 100% Arabica, zero tolerance for runtime crashes.",
  ];

  const handleBrew = async () => {
    setBrewing(true);
    try {
      const res = await fetch("/api/coffee/brew", { method: "POST" });
      if (res.ok) {
        const data = await res.json();
        if (data.quote) {
          setCurrentQuote(data.quote);
        }
      } else {
        const nextQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setCurrentQuote(nextQuote);
      }
    } catch {
      const nextQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setCurrentQuote(nextQuote);
    } finally {
      onIncrementCoffee();
      setTimeout(() => {
        setBrewing(false);
      }, 700);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#D8CDEE] text-center overflow-hidden"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Subtle decorative blob */}
            <div className="absolute -top-16 -left-16 w-36 h-36 bg-[#D8CDEE]/50 rounded-full blur-2xl -z-10" />

            <div className="space-y-6">
              <div className="space-y-1">
                <span className="editorial-tag text-[#8A75B3]">
                  THE SIGNATURE EXPERIENCE
                </span>
                <h3 className="font-editorial-serif text-3xl font-medium text-[#1E1B24]">
                  Temkin&apos;s Coffee Corner ☕
                </h3>
                <p className="text-xs text-[#5E5868]">
                  From the heart of Ethiopia, home of the world&apos;s finest coffee.
                </p>
              </div>

              {/* Animated Coffee Cup & Rising Steam */}
              <div className="relative py-4 flex flex-col items-center justify-center">
                {/* Animated Steam Plumes */}
                <div className="h-10 flex gap-2 items-end justify-center mb-1">
                  <motion.div
                    animate={{ y: [-2, -14, -2], opacity: [0.2, 0.8, 0] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                    className="w-1.5 h-6 bg-[#8A75B3]/40 rounded-full blur-[1px]"
                  />
                  <motion.div
                    animate={{ y: [-2, -18, -2], opacity: [0.3, 0.9, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, delay: 0.3, ease: "easeInOut" }}
                    className="w-2 h-8 bg-[#8A75B3]/50 rounded-full blur-[1px]"
                  />
                  <motion.div
                    animate={{ y: [-2, -14, -2], opacity: [0.2, 0.7, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, delay: 0.6, ease: "easeInOut" }}
                    className="w-1.5 h-6 bg-[#8A75B3]/40 rounded-full blur-[1px]"
                  />
                </div>

                {/* Cup Visual */}
                <motion.div
                  animate={brewing ? { rotate: [0, -5, 5, -3, 3, 0], scale: [1, 1.08, 1] } : {}}
                  transition={{ duration: 0.6 }}
                  className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#8A75B3] to-[#D8CDEE] flex items-center justify-center shadow-lg"
                >
                  <Coffee className="w-12 h-12 text-white" />
                </motion.div>

                {/* Session Counter */}
                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F2FA] border border-[#D8CDEE] text-xs font-medium text-[#1E1B24]">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Caffeine Level: <strong>{coffeeCount} cups</strong> today</span>
                </div>
              </div>

              {/* Quote Card */}
              <div className="p-4 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/70 min-h-[76px] flex items-center justify-center">
                <p className="font-editorial-cormorant text-xl text-[#1E1B24] italic font-medium">
                  &ldquo;{currentQuote}&rdquo;
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={handleBrew}
                  disabled={brewing}
                  className="px-6 py-2.5 rounded-full bg-[#8A75B3] text-white text-xs font-medium hover:bg-[#7863A2] transition-all shadow-md inline-flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${brewing ? "animate-spin" : ""}`} />
                  <span>{brewing ? "Brewing Fresh Cup..." : "Brew Another Cup"}</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-xs font-medium text-gray-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
