
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Coffee, Sparkles, Terminal, MessageSquare, Menu, X, ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface NavbarProps {
  onOpenCoffee: () => void;
  onOpenCheers: () => void;
  onOpenTerminal: () => void;
  onOpenAiChat: () => void;
  coffeeCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCoffee,
  onOpenCheers,
  onOpenTerminal,
  onOpenAiChat,
  coffeeCount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "Achievements", href: "/achievements" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F5F2FA]/85 backdrop-blur-md border-b border-[#D8CDEE]/60 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram */}
        <Link
          to="/"
          className="group flex items-center gap-2.5 text-decoration-none"
        >
          <span className="font-serif font-bold text-2xl tracking-tight text-[#1E1B24] group-hover:text-[#8A75B3] transition-colors">
            TA<span className="text-[#8A75B3]">.</span>
          </span>
          <div className="hidden sm:flex flex-col">
            <span className="text-xs font-semibold tracking-wide uppercase text-[#1E1B24]">
              Temkin Abdulmelik
            </span>
            <span className="text-[10px] tracking-widest uppercase font-medium text-[#8A75B3]">
              AI & Full-Stack
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-[#1E1B24]/80 hover:text-[#8A75B3] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Interactive Action Shortcuts */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* GitHub Temkin236 Link */}
          <a
            href="https://github.com/Temkin236"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit Temkin236 on GitHub"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-[#D8CDEE] text-[#1E1B24] text-xs font-semibold hover:border-[#8A75B3] hover:bg-[#F5F2FA] transition-all shadow-xs cursor-pointer group"
          >
            <GithubIcon className="w-3.5 h-3.5 text-[#1E1B24] group-hover:scale-110 transition-transform" />
            <span>Temkin236</span>
          </a>

          {/* Coffee Button with Counter */}
          <button
            onClick={onOpenCoffee}
            title="Have a cup of coffee with Temkin"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-[#D8CDEE] text-[#1E1B24] text-xs font-medium hover:border-[#8A75B3] hover:bg-[#F5F2FA] transition-all shadow-xs cursor-pointer"
          >
            <Coffee className="w-3.5 h-3.5 text-[#8A75B3]" />
            <span>Coffee</span>
            {coffeeCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-[#D8CDEE] text-[#1E1B24] text-[10px] font-bold">
                {coffeeCount}
              </span>
            )}
          </button>

          {/* AI Companion CTA */}
          <button
            onClick={onOpenAiChat}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#D8CDEE] text-[#1E1B24] text-xs font-medium hover:border-[#8A75B3] hover:bg-[#F5F2FA] transition-all shadow-xs cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#8A75B3]" />
            <span>Ask AI</span>
          </button>

          {/* Terminal Shortcut */}
          <button
            onClick={onOpenTerminal}
            title="Open Interactive Terminal (Ctrl + K)"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white/90 border border-[#D8CDEE] text-[#1E1B24] text-xs font-medium hover:border-[#8A75B3] hover:bg-[#F5F2FA] transition-all shadow-xs cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5 text-[#5E5868]" />
            <span className="text-[10px] text-[#5E5868] font-mono hidden xl:inline">⌘K</span>
          </button>

          {/* Inspo "LET'S TALK ->" pill */}
          <Link
            to="/contact"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#8A75B3] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#7863A2] transition-all shadow-sm hover:shadow-md cursor-pointer group"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenAiChat}
            className="p-2 rounded-full bg-[#8A75B3] text-white text-xs"
            aria-label="Open AI Assistant"
          >
            <MessageSquare className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#1E1B24] hover:bg-[#D8CDEE]/30 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#D8CDEE] px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#1E1B24] hover:text-[#8A75B3] py-1 border-b border-gray-100"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-[#D8CDEE]/60 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCoffee();
              }}
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#F5F2FA] text-xs font-medium text-[#1E1B24]"
            >
              <Coffee className="w-4 h-4 text-[#8A75B3]" />
              <span>Coffee ({coffeeCount})</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheers();
              }}
              className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#F5F2FA] text-xs font-medium text-[#1E1B24]"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Cheers</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="col-span-2 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#F5F2FA] text-xs font-medium text-[#1E1B24]"
            >
              <Terminal className="w-4 h-4 text-[#5E5868]" />
              <span>Open Developer Terminal</span>
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://github.com/Temkin236"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#1E1B24] text-white text-xs font-semibold"
            >
              <GithubIcon className="w-4 h-4 text-white" />
              <span>Visit @Temkin236 on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
            </a>

            <div className="text-center pt-1">
              <Link
                to="/admin"
                className="inline-flex items-center gap-1 text-xs text-[#8A75B3] font-medium hover:underline"
              >
                <span>Admin Studio Access</span>
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
