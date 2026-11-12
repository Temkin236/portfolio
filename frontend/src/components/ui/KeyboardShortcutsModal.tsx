import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Keyboard } from "lucide-react";

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "?" && !e.metaKey && !e.ctrlKey) {
        // Only open if not inside input or textarea
        const target = e.target as HTMLElement;
        if (target.tagName !== "INPUT" && target.tagName !== "TEXTAREA") {
          e.preventDefault();
          onClose(); // toggle
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const shortcuts = [
    { key: "⌘ + K / Ctrl + K", description: "Open Easter Egg Interactive Terminal" },
    { key: "Esc", description: "Close any active modal or drawer" },
    { key: "?", description: "Toggle this Keyboard Shortcuts guide" },
    { key: "Alt + H", description: "Navigate back to Home" },
    { key: "Alt + P", description: "Navigate to Project Universe" },
    { key: "Alt + C", description: "Quickly open Contact form" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-[#D8CDEE]/60 text-[#1E1B24]"
          >
            <div className="flex items-center justify-between border-b border-[#D8CDEE]/40 pb-4">
              <div className="flex items-center gap-2">
                <Keyboard className="w-5 h-5 text-[#8A75B3]" />
                <h3 className="text-base font-bold uppercase tracking-tight">Keyboard Shortcuts</h3>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-[#F5F2FA] text-[#5E5868] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-4 divide-y divide-[#D8CDEE]/30">
              {shortcuts.map((s, idx) => (
                <div key={idx} className="py-2.5 flex items-center justify-between text-xs">
                  <span className="text-[#5E5868] font-medium">{s.description}</span>
                  <kbd className="px-2.5 py-1 rounded-lg bg-[#F5F2FA] border border-[#D8CDEE] font-mono text-[11px] font-semibold text-[#8A75B3]">
                    {s.key}
                  </kbd>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#D8CDEE]/40 flex justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-full bg-[#8A75B3] text-white text-xs font-semibold hover:bg-[#7863A2] transition-colors"
              >
                Got it
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
