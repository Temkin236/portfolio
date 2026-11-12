
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from "lucide-react";
import confetti from "canvas-confetti";

interface CommandHistory {
  cmd: string;
  output: string | React.ReactNode;
}

interface EasterEggTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCoffee: () => void;
  onOpenCheers: () => void;
}

export const EasterEggTerminal: React.FC<EasterEggTerminalProps> = ({
  isOpen,
  onClose,
  onOpenCoffee,
  onOpenCheers,
}) => {
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      cmd: "welcome",
      output: (
        <div className="space-y-1 text-xs">
          <p className="text-emerald-400 font-bold">
            TEMKIN&apos;S WORLD OS [Version 2.0.26]
          </p>
          <p className="text-gray-400">
            Type <span className="text-[#D8CDEE] underline">help</span> to explore available commands. (Press ESC or click X to close)
          </p>
        </div>
      ),
    },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const raw = input.trim();
    if (!raw) return;

    const cmd = raw.toLowerCase();
    setInput("");

    let output: string | React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 text-xs text-gray-300">
            <p className="font-semibold text-emerald-400">Available commands:</p>
            <p><span className="text-[#D8CDEE] font-mono">about</span> — Overview of Temkin Abdulmelik</p>
            <p><span className="text-[#D8CDEE] font-mono">projects</span> — Key software & AI systems</p>
            <p><span className="text-[#D8CDEE] font-mono">skills</span> — Technology stack and frameworks</p>
            <p><span className="text-[#D8CDEE] font-mono">coffee</span> — Brew a virtual cup of Ethiopian coffee ☕</p>
            <p><span className="text-[#D8CDEE] font-mono">cheers</span> — Celebrate building something amazing! 🥂</p>
            <p><span className="text-[#D8CDEE] font-mono">contact</span> — Email, GitHub, LinkedIn</p>
            <p><span className="text-[#D8CDEE] font-mono">secret</span> — Reveal hidden Easter egg ✨</p>
            <p><span className="text-[#D8CDEE] font-mono">clear</span> — Clear terminal output</p>
          </div>
        );
        break;

      case "about":
        output = (
          <div className="text-xs text-gray-300 space-y-1">
            <p className="font-bold text-[#D8CDEE]">Temkin Abdulmelik</p>
            <p>• Location: Adama, Ethiopia 🇪🇹</p>
            <p>• University: Adama Science and Technology University (ASTU)</p>
            <p>• Degree: B.Sc. Electronics & Communication Engineering (Expected 2027)</p>
            <p>• Positioning: AI & Full-Stack Developer | Agentic AI | Intelligent Automation</p>
            <p>• Achievement: 1st Place Winner at CSEC ASTU Hackathon v1.0 (Meri AI)</p>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="text-xs text-gray-300 space-y-1">
            <p className="font-bold text-[#D8CDEE]">Featured Engineering Projects:</p>
            <p>1. <span className="text-emerald-400 font-semibold">Meri AI</span> — Hackathon 1st Place AI productivity platform (FastAPI, React, Gemini)</p>
            <p>2. <span className="text-emerald-400 font-semibold">Knowledge AI</span> — RAG knowledge engine with citations & pgvector</p>
            <p>3. <span className="text-emerald-400 font-semibold">ASTU Campus Navigator</span> — AI geospatial routing with LangGraph & OpenStreetMap</p>
            <p>4. <span className="text-emerald-400 font-semibold">Deep Research AI</span> — Multi-agent recursive technical research engine</p>
            <p>5. <span className="text-emerald-400 font-semibold">AURA AI</span> — Multi-persona intelligent conversational system</p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="text-xs text-gray-300 space-y-1">
            <p className="font-bold text-[#D8CDEE]">Core Technology Matrix:</p>
            <p>• <span className="text-[#8A75B3]">Agentic AI:</span> LangGraph, Google GenAI SDK, Prompt Optimization, Tool Calling</p>
            <p>• <span className="text-[#8A75B3]">RAG & Search:</span> PostgreSQL, pgvector, Semantic Embeddings, Document Chunking</p>
            <p>• <span className="text-[#8A75B3]">Backend:</span> Python, FastAPI, SQLAlchemy 2, Alembic, Pydantic, Redis</p>
            <p>• <span className="text-[#8A75B3]">Frontend:</span> React 19, Vite, TypeScript, Tailwind CSS, Framer Motion</p>
            <p>• <span className="text-[#8A75B3]">Environment:</span> Linux (Arch/Omarchy), Docker, Git, REST APIs</p>
          </div>
        );
        break;

      case "coffee":
        onOpenCoffee();
        output = (
          <div className="text-xs text-amber-300">
            ☕ Brewing a fresh cup of 100% Ethiopian Arabica roast... Coffee modal activated!
          </div>
        );
        break;

      case "cheers":
        onOpenCheers();
        confetti({
          particleCount: 60,
          spread: 60,
          colors: ["#8A75B3", "#D8CDEE", "#E8C872"],
        });
        output = (
          <div className="text-xs text-amber-400 font-bold">
            🥂 Raised a toast to building something extraordinary! Confetti launched.
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="text-xs text-gray-300 space-y-1">
            <p className="font-bold text-[#D8CDEE]">Connect with Temkin:</p>
            <p>• Email: <span className="text-emerald-400">temkinabdulmelik@gmail.com</span></p>
            <p>• GitHub: <a href="https://github.com/Temkin236" target="_blank" className="text-[#8A75B3] underline">github.com/Temkin236</a></p>
            <p>• LinkedIn: <a href="https://linkedin.com/in/temkin-abdulmelik-195582306" target="_blank" className="text-[#8A75B3] underline">linkedin.com/in/temkin-abdulmelik-195582306</a></p>
          </div>
        );
        break;

      case "secret":
        confetti({
          particleCount: 100,
          spread: 90,
          colors: ["#8A75B3", "#D8CDEE", "#E8C872", "#FFFFFF"],
        });
        output = (
          <div className="p-3 rounded-lg bg-[#8A75B3]/20 border border-[#8A75B3] text-xs text-purple-200 space-y-1">
            <p className="font-bold text-amber-300">🎉 YOU FOUND THE SECRET EASTER EGG! ✨</p>
            <p>&ldquo;The people who are crazy enough to think they can change the world are the ones who do.&rdquo;</p>
            <p className="text-gray-400 text-[11px]">— Thank you for exploring Temkin&apos;s digital universe with curiosity!</p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        return;

      default:
        output = (
          <span className="text-rose-400 text-xs">
            command not found: {raw}. Type <span className="text-white underline">help</span> for a list of available commands.
          </span>
        );
    }

    setHistory((prev) => [...prev, { cmd: raw, output }]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-2xl bg-[#121016] border border-[#8A75B3]/40 rounded-2xl shadow-2xl overflow-hidden font-mono text-sm flex flex-col h-[65vh]"
          >
            {/* Terminal Title Bar */}
            <div className="bg-[#1C1824] px-4 py-2.5 border-b border-[#8A75B3]/30 flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                <span className="text-xs text-gray-400 font-mono ml-2 flex items-center gap-1">
                  <TerminalIcon className="w-3.5 h-3.5 text-[#8A75B3]" />
                  <span>temkin@universe:~</span>
                </span>
              </div>

              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white p-1 rounded-md"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-gray-200">
              {history.map((h, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-emerald-400">
                    <span>temkin@universe:~$</span>
                    <span className="text-white">{h.cmd}</span>
                  </div>
                  <div className="pl-4">{h.output}</div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input Line */}
            <form
              onSubmit={handleCommand}
              className="bg-[#181420] px-4 py-2.5 border-t border-[#8A75B3]/30 flex items-center gap-2"
            >
              <span className="text-xs text-emerald-400">temkin@universe:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type 'help'..."
                className="flex-1 bg-transparent text-xs text-white focus:outline-none font-mono"
              />
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
