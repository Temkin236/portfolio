
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  ShieldCheck, 
  RotateCcw,
  CheckCircle2,
  FileText
} from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
  citations?: string[];
}

interface AiCompanionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiCompanionModal: React.FC<AiCompanionModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "assistant",
      text: "Hey there! 👋 Curious about Temkin? Ask me anything about his projects, technical journey, skills, achievements, or how to collaborate with him. I'll help you explore!",
    },
  ]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "Who is Temkin?",
    "Tell me about Meri AI and his hackathon win.",
    "What is his experience with agentic AI & LangGraph?",
    "What makes Knowledge AI unique?",
    "How can I collaborate with him?",
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streaming]);

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim() || streaming) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: textToSend.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setStreaming(true);

    const assistantMsgId = (Date.now() + 1).toString();
    const assistantMsg: Message = {
      id: assistantMsgId,
      sender: "assistant",
      text: "",
    };

    setMessages((prev) => [...prev, assistantMsg]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: textToSend.trim(),
          history: messages.map((m) => ({
            role: m.sender === "user" ? "user" : "model",
            content: m.text,
          })),
        }),
      });

      if (!response.body) {
        throw new Error("No response stream");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let accumulatedText = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const dataStr = line.replace("data: ", "").trim();
            if (dataStr === "[DONE]") {
              break;
            }
            try {
              const parsed = JSON.parse(dataStr);
              if (parsed.text) {
                accumulatedText += parsed.text;
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === assistantMsgId
                      ? { ...m, text: accumulatedText }
                      : m
                  )
                );
              }
            } catch {
              // ignore non-JSON SSE chunk
            }
          }
        }
      }
    } catch {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantMsgId
            ? {
                ...m,
                text: "I am Temkin's AI Companion. Temkin is an AI & Full-Stack Developer at ASTU (B.Sc. ECE '27). He won 1st place at CSEC ASTU Hackathon v1.0 with Meri AI and developed Knowledge AI with LangGraph and pgvector. You can reach him at temkinabdulmelik@gmail.com!",
              }
            : m
        )
      );
    } finally {
      setStreaming(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: "welcome",
        sender: "assistant",
        text: "Hey there! 👋 Curious about Temkin? Ask me anything about his projects, technical journey, skills, achievements, or how to collaborate with him. I'll help you explore!",
      },
    ]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 320 }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#D8CDEE] flex flex-col h-[82vh] overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-[#D8CDEE]/60 flex items-center justify-between bg-[#F5F2FA]/70">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#8A75B3] to-[#D8CDEE] flex items-center justify-center text-white shadow-xs">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-editorial-serif text-lg sm:text-xl font-medium text-[#1E1B24]">
                      Temkin&apos;s AI Companion
                    </h3>
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>RAG Grounded</span>
                    </span>
                  </div>
                  <p className="text-xs text-[#5E5868]">
                    Strictly grounded in verified public knowledge • Gemini 2.5 + LangGraph
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleReset}
                  title="Reset conversation"
                  className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Conversation Messages */}
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-white/50">
              {messages.map((msg) => {
                const isAssistant = msg.sender === "assistant";
                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-3 ${
                      isAssistant ? "justify-start" : "justify-end"
                    }`}
                  >
                    {isAssistant && (
                      <div className="w-8 h-8 rounded-full bg-[#8A75B3] flex items-center justify-center text-white shrink-0 shadow-xs">
                        <Sparkles className="w-4 h-4" />
                      </div>
                    )}

                    <div
                      className={`max-w-[82%] sm:max-w-[75%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        isAssistant
                          ? "bg-[#F5F2FA] text-[#1E1B24] border border-[#D8CDEE]/70 shadow-xs"
                          : "bg-[#8A75B3] text-white shadow-xs"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.text || (streaming ? "Thinking and retrieving..." : "")}</p>
                    </div>

                    {!isAssistant && (
                      <div className="w-8 h-8 rounded-full bg-[#1E1B24] flex items-center justify-center text-white shrink-0 shadow-xs">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompt Chips */}
            {messages.length <= 2 && (
              <div className="px-4 py-2 bg-[#F5F2FA]/50 border-t border-[#D8CDEE]/40 flex gap-2 overflow-x-auto text-xs no-scrollbar">
                {suggestedQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSend(q)}
                    className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white border border-[#D8CDEE] text-[#1E1B24] hover:border-[#8A75B3] hover:bg-[#F5F2FA] transition-all font-medium shrink-0 cursor-pointer text-[11px]"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input Bar */}
            <div className="p-3 sm:p-4 border-t border-[#D8CDEE]/60 bg-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything about Temkin's engineering, projects, or background..."
                  disabled={streaming}
                  className="flex-1 px-4 py-2.5 rounded-full bg-[#F5F2FA] border border-[#D8CDEE] text-xs sm:text-sm text-[#1E1B24] focus:outline-none focus:border-[#8A75B3] transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || streaming}
                  className="p-2.5 rounded-full bg-[#8A75B3] text-white hover:bg-[#7863A2] transition-colors disabled:opacity-40 cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
