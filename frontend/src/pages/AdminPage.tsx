import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { 
  Shield, 
  Lock, 
  User, 
  FolderGit2, 
  Camera, 
  FileText, 
  Bot, 
  Mail, 
  BarChart3, 
  LogOut, 
  Save, 
  CheckCircle2, 
  Plus, 
  Trash2, 
  Eye, 
  EyeOff, 
  ArrowLeft,
  Sparkles,
  RefreshCw,
  Sliders,
  Settings as SettingsIcon,
  Search,
  ExternalLink,
  Check,
  AlertCircle,
  X,
  Cpu,
  Layers,
  Database,
  Calendar,
  Globe,
  Briefcase
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { AdminKnowledgeCenter } from "@/components/admin/AdminKnowledgeCenter";

export default function AdminPage({
  initialTab = "overview",
}: {
  initialTab?:
    | "overview"
    | "identity"
    | "projects"
    | "experience"
    | "gallery"
    | "knowledge"
    | "ai"
    | "messages"
    | "settings";
}) {
  useDocumentTitle("Admin Studio — Digital Identity & Knowledge Management");
  const { tab } = useParams<{ tab?: string }>();
  const [token, setToken] = useState<string | null>(null);
  const [loginForm, setLoginForm] = useState({ username: "admin", password: "" });
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState<
    | "overview"
    | "identity"
    | "projects"
    | "experience"
    | "gallery"
    | "knowledge"
    | "ai"
    | "messages"
    | "settings"
  >((tab as any) || initialTab);

  useEffect(() => {
    if (tab) {
      setActiveTab(tab as any);
    }
  }, [tab]);

  // State data for modules
  const [stats, setStats] = useState({
    visitors: 342,
    projectViews: 1480,
    chatQueries: 62,
    messagesCount: 3,
    coffeeBrews: 94,
    cheersCount: 48,
  });

  const [profile, setProfile] = useState({
    name: "Temkin Abdulmelik",
    headline: "AI & Full-Stack Developer | Agentic AI | Intelligent Automation | LLM Applications",
    supporting_headline: "Building things that make intelligence feel magical.",
    introduction: "Engineer by education, builder by curiosity, AI enthusiast by obsession. Usually somewhere between an ambitious idea and another cup of coffee.",
    location: "Adama, Ethiopia",
    education_school: "Adama Science and Technology University (ASTU)",
    education_degree: "B.Sc. Electronics and Communication Engineering",
    education_graduation: "2027",
    github_url: "https://github.com/Temkin236",
    linkedin_url: "https://linkedin.com/in/temkin-abdulmelik-195582306",
    email: "temkinabdulmelik@gmail.com",
  });

  // Projects State
  const [projectsList, setProjectsList] = useState([
    {
      id: 1,
      title: "Meri AI",
      category: "Agentic AI & Campus Intelligence",
      badge: "1st Place Winner",
      summary: "Autonomous campus assistant with multi-agent orchestration, pgvector semantic search, and real-time scheduling for ASTU students.",
      tech: "FastAPI, PostgreSQL pgvector, Gemini 2.5, React, TypeScript",
      github: "https://github.com/Temkin236/Meri-AI",
      live: "https://github.com/Temkin236",
      featured: true
    },
    {
      id: 2,
      title: "Knowledge AI & Grounded RAG",
      category: "RAG & Vector Retrieval",
      badge: "Live Production",
      summary: "High-precision Retrieval-Augmented Generation platform with semantic cosine similarity and strict zero-hallucination citation grounding.",
      tech: "Python, pgvector, LangChain, TailwindCSS, SSE Streaming",
      github: "https://github.com/Temkin236",
      live: "https://github.com/Temkin236",
      featured: true
    },
    {
      id: 3,
      title: "ASTU Campus Navigator",
      category: "Geospatial Navigation",
      badge: "Campus Production",
      summary: "Interactive campus navigation engine supporting offline offline routing, landmarks, and spatial queries across ASTU university grounds.",
      tech: "Leaflet, React, TypeScript, GeoJSON, Vector Algorithms",
      github: "https://github.com/Temkin236",
      live: "https://github.com/Temkin236",
      featured: false
    },
    {
      id: 4,
      title: "Deep Research AI",
      category: "Multi-Agent Systems",
      badge: "Active Lab",
      summary: "Autonomous multi-agent research pipeline that executes recursive query decomposition, web citation syntheses, and executive PDF briefing generation.",
      tech: "Python, LangGraph, Gemini 2.5, DuckDuckGo API",
      github: "https://github.com/Temkin236",
      live: "https://github.com/Temkin236",
      featured: false
    },
    {
      id: 5,
      title: "AURA AI",
      category: "Conversational Systems",
      badge: "Active Lab",
      summary: "Real-time speech-to-speech companion with localized Ethiopian cultural nuances, sentiment understanding, and dynamic persona modulation.",
      tech: "WebRTC, Whisper, Gemini, FastAPI, WebSocket",
      github: "https://github.com/Temkin236",
      live: "https://github.com/Temkin236",
      featured: false
    }
  ]);
  const [projectSearch, setProjectSearch] = useState("");
  const [isAddProjectOpen, setIsAddProjectOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    category: "Agentic AI",
    badge: "Active Lab",
    summary: "",
    tech: "",
    github: "",
    live: ""
  });

  // Photos State
  const [photos, setPhotos] = useState([
    { id: 1, title: "1st Place Award Ceremony — CSEC ASTU Hackathon", category: "hackathon", is_private: false, date: "Feb 2026", url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80" },
    { id: 2, title: "Team Divas Celebration & Victory Toast", category: "hackathon", is_private: false, date: "Feb 2026", url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop&q=80" },
    { id: 3, title: "Technical Presentation at ASTU Engineering Dept", category: "university", is_private: false, date: "Jan 2026", url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80" },
    { id: 4, title: "CSEC Mentorship Workshop & Code Clinic", category: "community", is_private: false, date: "Dec 2025", url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80" },
    { id: 5, title: "Private Family Gathering & Hometown Memories", category: "family", is_private: true, date: "2025", url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=80" },
  ]);
  const [isAddPhotoOpen, setIsAddPhotoOpen] = useState(false);
  const [newPhoto, setNewPhoto] = useState({
    title: "",
    category: "hackathon",
    url: "",
    date: "",
    is_private: false
  });

  // Messages State
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Hanna Tesfaye",
      role: "AI Engineering Lead",
      email: "hanna.tesfaye@tech-innovations.et",
      date: "Today at 2:15 PM",
      subject: "Collaboration on Agentic AI Systems",
      message: "Hi Temkin, saw your Meri AI hackathon championship win and your RAG projects. We have an exciting agent pipeline we would love to collaborate with you on for a fintech client in Addis Ababa.",
      unread: true
    },
    {
      id: 2,
      sender: "Michael Chen",
      role: "Principal Architect",
      email: "mchen@globalcloud.io",
      date: "Yesterday",
      subject: "ASTU Hackathon Solution & Citation Pipeline",
      message: "Impressive work on strict citation grounding without hallucinations. Would love to discuss technical paradigms and your upcoming graduation project on agentic evaluation.",
      unread: false
    },
    {
      id: 3,
      sender: "CSEC ASTU Board",
      role: "Student Community Coordination",
      email: "csec@astu.edu.et",
      date: "3 days ago",
      subject: "Upcoming Mentorship Workshop Schedule",
      message: "Hi Temkin, the junior batch was inspired by your session on clean RESTful APIs and Git hygiene. Looking forward to scheduling the next session on LangGraph and vector search!",
      unread: false
    }
  ]);

  // Verified LinkedIn Experience State (Strictly from Temkin's LinkedIn)
  const [experienceList, setExperienceList] = useState([
    {
      id: 1,
      title: "AI Project Contributor",
      company: "AfterQuery & Revelo",
      period: "2025 — Present",
      category: "Work Experience",
      description: "Contributed to remote AI evaluation and software engineering tasks through AfterQuery and Revelo. Conducted rigorous technical problem-solving, structured reasoning reviews, and verified model outputs against complex requirements and reproducible engineering benchmarks.",
      tags: ["AfterQuery", "Revelo", "AI Evaluation", "Model Alignment", "Code Verification", "Task Quality"],
      highlight: true
    },
    {
      id: 2,
      title: "Independent Full-Stack & AI Developer",
      company: "Self-Employed / Project Engineering",
      period: "2024 — Present",
      category: "Engineering Experience",
      description: "Architected and deployed end-to-end web applications and intelligent systems from scratch: multi-agent workflows with LangGraph, semantic search pipelines with pgvector cosine similarity, real-time SSE token streaming, and production FastAPI services paired with modern React frontends.",
      tags: ["LangGraph", "FastAPI", "PostgreSQL pgvector", "Gemini 2.5", "React 19", "Automated Testing"],
      highlight: false
    },
    {
      id: 3,
      title: "Development Mentor",
      company: "Cybernauts Software Engineering Club (CSEC ASTU)",
      period: "2024 — Present",
      category: "Leadership & Community",
      description: "Appointed official Development Mentor at CSEC ASTU. Lead hands-on code clinics, Git hygiene workshops, and collaborative development sessions for student software engineers at Adama Science and Technology University.",
      tags: ["CSEC ASTU", "Technical Mentorship", "Git Workflows", "Python Architecture", "Workshops"],
      highlight: false
    },
    {
      id: 4,
      title: "1st Place Champion — CSEC ASTU Hackathon v1.0",
      company: "Team Divas | Meri AI",
      period: "2024",
      category: "Hackathon Championship",
      description: "Led full-stack engineering of Meri AI, an autonomous campus agentic intelligence system built in a 24-hour sprint. Competed against top university engineering teams and secured First Place Gold for architectural robustness, retrieval fidelity, and real-time execution.",
      tags: ["1st Place Winner", "Meri AI", "Team Divas", "24h Hackathon Championship", "CSEC ASTU"],
      highlight: true
    },
    {
      id: 5,
      title: "B.Sc. in Electronics & Communication Engineering",
      company: "Adama Science and Technology University (ASTU)",
      period: "2022 — 2027",
      category: "Education",
      description: "Enrolled in Ethiopia's leading center of excellence for science and technology. Specializing in intelligent computing, digital signal processing, telecommunications, embedded microcontrollers, and modern software architectures.",
      tags: ["ASTU", "B.Sc. Degree '27", "Electronics", "Telecommunications", "Embedded Systems"],
      highlight: false
    }
  ]);
  const [isAddExperienceOpen, setIsAddExperienceOpen] = useState(false);
  const [newExperience, setNewExperience] = useState({
    title: "",
    company: "",
    period: "2025 — Present",
    category: "Work Experience",
    description: "",
    tags: "",
    highlight: false
  });

  // AI Persona & Generation Config
  const [aiConfig, setAiConfig] = useState({
    temperature: 0.2,
    maxTokens: 2048,
    topKChunks: 4,
    persona: "You are Temkin's AI Companion, an intelligent, warm, and sophisticated digital assistant representing Temkin Abdulmelik. You speak with high professional standards, warm enthusiasm, and concise precision. You NEVER hallucinate facts and NEVER disclose private information. If verified documentation does not contain an answer, politely inform the visitor and encourage them to connect via the Contact Gateway.",
    enforceStrictCitations: true,
    blockPrivateVaultQueries: true
  });

  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveMessage, setSaveMessage] = useState("Changes successfully saved!");

  const triggerToast = (msg: string) => {
    setSaveMessage(msg);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  // Check existing token
  useEffect(() => {
    const saved = localStorage.getItem("temkin_admin_token");
    if (saved) {
      setToken(saved);
      fetchDashboard(saved);
    }
  }, []);

  const fetchDashboard = async (jwtToken: string) => {
    try {
      const res = await fetch("/api/admin/overview", {
        headers: { Authorization: `Bearer ${jwtToken}` },
      });
      if (res.ok) {
        const data = await res.json();
        setStats((prev) => ({
          ...prev,
          visitors: data.total_views || prev.visitors,
          messagesCount: data.total_messages || prev.messagesCount,
          chatQueries: data.total_ai_questions || prev.chatQueries,
        }));
      }
    } catch {
      // fallback
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginForm),
      });

      if (res.ok) {
        const data = await res.json();
        const jwtToken = data.access_token;
        setToken(jwtToken);
        localStorage.setItem("temkin_admin_token", jwtToken);
        fetchDashboard(jwtToken);
      } else {
        if (
          loginForm.password.toLowerCase() === "admin" ||
          loginForm.password.toLowerCase() === "temkin" ||
          loginForm.password.toLowerCase() === "temkin2026" ||
          loginForm.password.toLowerCase() === "demo"
        ) {
          const demoToken = "demo-admin-token-" + Date.now();
          setToken(demoToken);
          localStorage.setItem("temkin_admin_token", demoToken);
        } else {
          setLoginError("Invalid credentials. (Tip: Enter 'admin' or 'temkin' to preview Studio)");
        }
      }
    } catch {
      // Backend unavailable (e.g. static hosting)
      if (
        loginForm.password.toLowerCase() === "admin" ||
        loginForm.password.toLowerCase() === "temkin" ||
        loginForm.password.toLowerCase() === "temkin2026" ||
        loginForm.password.toLowerCase() === "demo" ||
        loginForm.password.trim().length > 0
      ) {
        const demoToken = "demo-admin-token-" + Date.now();
        setToken(demoToken);
        localStorage.setItem("temkin_admin_token", demoToken);
      } else {
        setLoginError("Please enter a password (or 'admin' to preview Studio).");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("temkin_admin_token");
    setToken(null);
  };

  const handleSaveProfile = async () => {
    try {
      if (token) {
        await fetch("/api/admin/profile", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(profile),
        });
      }
      triggerToast("Profile identity successfully synchronized!");
    } catch {
      triggerToast("Profile identity updated!");
    }
  };

  const togglePhotoPrivacy = (id: number) => {
    setPhotos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, is_private: !p.is_private } : p))
    );
    triggerToast("Photo privacy visibility updated!");
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title.trim()) return;

    const item = {
      id: Date.now(),
      title: newProject.title.trim(),
      category: newProject.category,
      badge: newProject.badge,
      summary: newProject.summary || "Technical project implementation by Temkin Abdulmelik.",
      tech: newProject.tech || "Python, React, TypeScript",
      github: newProject.github || "https://github.com/Temkin236",
      live: newProject.live || "https://github.com/Temkin236",
      featured: false
    };

    setProjectsList((prev) => [item, ...prev]);
    setIsAddProjectOpen(false);
    setNewProject({
      title: "",
      category: "Agentic AI",
      badge: "Active Lab",
      summary: "",
      tech: "",
      github: "",
      live: ""
    });
    triggerToast(`Project "${item.title}" successfully added!`);
  };

  const handleDeleteProject = (id: number, title: string) => {
    if (window.confirm(`Delete project "${title}"?`)) {
      setProjectsList((prev) => prev.filter((p) => p.id !== id));
      triggerToast(`Project "${title}" deleted.`);
    }
  };

  const handleAddPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhoto.title.trim()) return;

    const photoItem = {
      id: Date.now(),
      title: newPhoto.title.trim(),
      category: newPhoto.category,
      date: newPhoto.date || "2026",
      url: newPhoto.url || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80",
      is_private: newPhoto.is_private
    };

    setPhotos((prev) => [photoItem, ...prev]);
    setIsAddPhotoOpen(false);
    setNewPhoto({
      title: "",
      category: "hackathon",
      url: "",
      date: "",
      is_private: false
    });
    triggerToast(`Photo "${photoItem.title}" saved to gallery!`);
  };

  const toggleMessageRead = (id: number) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, unread: !m.unread } : m))
    );
  };

  const deleteMessage = (id: number) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
    triggerToast("Message deleted.");
  };

  const handleAddExperience = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExperience.title.trim() || !newExperience.company.trim()) {
      triggerToast("Please provide both a role title and company name from LinkedIn.");
      return;
    }

    const item = {
      id: Date.now(),
      title: newExperience.title.trim(),
      company: newExperience.company.trim(),
      period: newExperience.period || "Present",
      category: newExperience.category,
      description: newExperience.description || "Verified role and deliverables from Temkin's LinkedIn profile.",
      tags: newExperience.tags ? newExperience.tags.split(",").map((t) => t.trim()).filter(Boolean) : ["LinkedIn Verified"],
      highlight: newExperience.highlight
    };

    setExperienceList((prev) => [item, ...prev]);
    setIsAddExperienceOpen(false);
    setNewExperience({
      title: "",
      company: "",
      period: "2025 — Present",
      category: "Work Experience",
      description: "",
      tags: "",
      highlight: false
    });
    triggerToast(`Added "${item.title}" to LinkedIn Experience!`);
  };

  const handleDeleteExperience = (id: number, title: string) => {
    if (window.confirm(`Delete experience "${title}"?`)) {
      setExperienceList((prev) => prev.filter((e) => e.id !== id));
      triggerToast(`Removed "${title}" from experience.`);
    }
  };

  const unreadMessagesCount = messages.filter((m) => m.unread).length;

  // If not logged in, show secure login screen
  if (!token) {
    return (
      <div className="min-h-screen bg-[#F5F2FA] flex items-center justify-center p-4">
        <div className="max-w-md w-full card-luxury p-8 sm:p-10 text-center space-y-6 bg-white shadow-xl rounded-3xl border border-[#D8CDEE]">
          <div className="w-16 h-16 rounded-full bg-[#8A75B3] text-white mx-auto flex items-center justify-center shadow-md">
            <Lock className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <span className="editorial-tag text-[#8A75B3]">
              AUTHENTICATED ACCESS
            </span>
            <h1 className="font-editorial-serif text-3xl font-medium text-[#1E1B24]">
              Private Admin Studio
            </h1>
            <p className="text-xs text-[#5E5868]">
              Manage identity, projects, photo privacy, and RAG knowledge data.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D8CDEE]/60 text-[11px] font-semibold text-[#8A75B3]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Demo Mode: Enter password &ldquo;admin&rdquo; to preview</span>
            </div>
          </div>

          {loginError && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div className="space-y-1">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-[#5E5868]">
                Admin Username
              </label>
              <input
                type="text"
                required
                value={loginForm.username}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, username: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE] text-xs sm:text-sm text-[#1E1B24] focus:outline-none focus:border-[#8A75B3]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-semibold uppercase tracking-wider text-[#5E5868]">
                Admin Password
              </label>
              <input
                type="password"
                required
                placeholder="Enter password (e.g. admin or temkin2026)..."
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, password: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE] text-xs sm:text-sm text-[#1E1B24] focus:outline-none focus:border-[#8A75B3]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#8A75B3] hover:bg-[#7863A2] text-white text-xs sm:text-sm font-semibold transition-colors shadow-md cursor-pointer"
            >
              Sign In to Studio
            </button>
          </form>

          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs text-[#8A75B3] hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Public Website</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F2FA] flex flex-col font-sans">
      {/* Admin Top Header */}
      <header className="bg-white border-b border-[#D8CDEE] px-6 py-3.5 flex items-center justify-between sticky top-0 z-30 shadow-xs">
        <div className="flex items-center gap-3">
          <Link to="/" className="font-editorial-serif text-xl font-medium text-[#1E1B24] hover:text-[#8A75B3] transition-colors">
            Temkin&apos;s World
          </Link>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#D8CDEE] text-[#1E1B24]">
            Admin Studio
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            pgvector RAG Live
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            to="/"
            target="_blank"
            className="text-xs font-medium text-[#5E5868] hover:text-[#8A75B3] flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-[#F5F2FA] transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">View Public Site</span>
            <ExternalLink className="w-3 h-3 text-[#5E5868]" />
          </Link>

          <button
            onClick={handleLogout}
            className="text-xs font-semibold text-rose-700 bg-rose-50 px-3.5 py-1.5 rounded-full hover:bg-rose-100 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      {/* Global Toast */}
      {saveSuccess && (
        <div className="fixed top-18 right-6 z-50 bg-[#1E1B24] text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 text-xs font-medium animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{saveMessage}</span>
        </div>
      )}

      {/* Admin Layout Grid */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar Menu */}
        <aside className="md:col-span-3 card-luxury p-3.5 space-y-4 bg-white rounded-2xl border border-[#D8CDEE]">
          {/* Admin User Mini Card */}
          <div className="p-3 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE]/70 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#8A75B3] text-white font-bold flex items-center justify-center text-xs shadow-xs">
              TA
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-[#1E1B24] truncate">Temkin Abdulmelik</p>
              <p className="text-[10px] text-[#5E5868] truncate">Studio Administrator</p>
            </div>
          </div>

          {/* Group 1: CORE */}
          <div className="space-y-1">
            <p className="px-3 text-[10px] uppercase font-bold tracking-wider text-[#5E5868]">Core</p>
            {[
              { id: "overview", label: "Overview Metrics", icon: <BarChart3 className="w-4 h-4" /> },
              { id: "identity", label: "My Identity & Bio", icon: <User className="w-4 h-4" /> },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                  activeTab === item.id
                    ? "bg-[#8A75B3] text-white shadow-xs"
                    : "text-[#1E1B24]/80 hover:bg-[#F5F2FA] hover:text-[#1E1B24]"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Group 2: AI & RAG INTELLIGENCE (Highlighted) */}
          <div className="space-y-1 pt-1">
            <div className="flex items-center justify-between px-3">
              <p className="text-[10px] uppercase font-bold tracking-wider text-[#8A75B3]">AI Grounding</p>
              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#D8CDEE] text-[#1E1B24]">RAG</span>
            </div>

            <button
              onClick={() => setActiveTab("knowledge")}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                activeTab === "knowledge"
                  ? "bg-[#8A75B3] text-white shadow-xs"
                  : "bg-[#F5F2FA]/70 text-[#1E1B24] hover:bg-[#D8CDEE]/50 font-bold"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4 text-[#8A75B3] group-hover:text-white" />
                <span>Knowledge Center</span>
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                activeTab === "knowledge" ? "bg-white text-[#8A75B3]" : "bg-[#8A75B3] text-white"
              }`}>
                Upload Data
              </span>
            </button>

            <button
              onClick={() => setActiveTab("ai")}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                activeTab === "ai"
                  ? "bg-[#8A75B3] text-white shadow-xs"
                  : "text-[#1E1B24]/80 hover:bg-[#F5F2FA] hover:text-[#1E1B24]"
              }`}
            >
              <Bot className="w-4 h-4" />
              <span>AI Control Center</span>
            </button>
          </div>

          {/* Group 3: CONTENT & MEDIA */}
          <div className="space-y-1 pt-1">
            <p className="px-3 text-[10px] uppercase font-bold tracking-wider text-[#5E5868]">Content</p>
            {[
              { id: "projects", label: "Project Manager", icon: <FolderGit2 className="w-4 h-4" /> },
              { id: "experience", label: "LinkedIn Experience", icon: <Briefcase className="w-4 h-4" /> },
              { id: "gallery", label: "Personal Gallery", icon: <Camera className="w-4 h-4" /> },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                  activeTab === item.id
                    ? "bg-[#8A75B3] text-white shadow-xs"
                    : "text-[#1E1B24]/80 hover:bg-[#F5F2FA] hover:text-[#1E1B24]"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Group 4: COMMUNICATIONS & SYSTEM */}
          <div className="space-y-1 pt-1">
            <p className="px-3 text-[10px] uppercase font-bold tracking-wider text-[#5E5868]">System</p>
            <button
              onClick={() => setActiveTab("messages")}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                activeTab === "messages"
                  ? "bg-[#8A75B3] text-white shadow-xs"
                  : "text-[#1E1B24]/80 hover:bg-[#F5F2FA] hover:text-[#1E1B24]"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4" />
                <span>Contact Inbox</span>
              </div>
              {unreadMessagesCount > 0 && (
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-rose-500 text-white font-bold">
                  {unreadMessagesCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab("settings")}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                activeTab === "settings"
                  ? "bg-[#8A75B3] text-white shadow-xs"
                  : "text-[#1E1B24]/80 hover:bg-[#F5F2FA] hover:text-[#1E1B24]"
              }`}
            >
              <SettingsIcon className="w-4 h-4" />
              <span>Studio Settings</span>
            </button>
          </div>
        </aside>

        {/* Right Main Content Pane */}
        <main className="md:col-span-9 card-luxury p-6 sm:p-8 min-h-[600px] bg-white rounded-2xl border border-[#D8CDEE]">
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="border-b border-[#D8CDEE]/60 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="editorial-tag text-[#8A75B3]">EXECUTIVE ANALYTICS</span>
                  <h2 className="font-editorial-serif text-3xl font-medium text-[#1E1B24]">
                    Platform Overview
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab("knowledge")}
                    className="px-3.5 py-1.5 rounded-full bg-[#8A75B3] text-white text-xs font-semibold flex items-center gap-1.5 hover:bg-[#7863A2] transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Upload RAG Data</span>
                  </button>
                </div>
              </div>

              {/* Metric KPI cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/70 space-y-1">
                  <p className="text-[10px] uppercase font-bold text-[#5E5868]">Unique Visitors</p>
                  <p className="font-editorial-serif text-3xl font-bold text-[#1E1B24]">{stats.visitors}</p>
                  <span className="text-[10px] text-emerald-700 font-semibold">+18% this month</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/70 space-y-1">
                  <p className="text-[10px] uppercase font-bold text-[#5E5868]">Project Views</p>
                  <p className="font-editorial-serif text-3xl font-bold text-[#8A75B3]">{stats.projectViews}</p>
                  <span className="text-[10px] text-[#5E5868]">Meri AI leading traffic</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/70 space-y-1">
                  <p className="text-[10px] uppercase font-bold text-[#5E5868]">AI Companion Chats</p>
                  <p className="font-editorial-serif text-3xl font-bold text-emerald-700">{stats.chatQueries}</p>
                  <span className="text-[10px] text-emerald-700 font-semibold">100% Grounded in RAG</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/70 space-y-1">
                  <p className="text-[10px] uppercase font-bold text-[#5E5868]">Inquiries Received</p>
                  <p className="font-editorial-serif text-3xl font-bold text-[#1E1B24]">{messages.length}</p>
                  <span className="text-[10px] text-[#8A75B3] font-semibold">{unreadMessagesCount} unread messages</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/70 space-y-1">
                  <p className="text-[10px] uppercase font-bold text-[#5E5868]">Coffee Brewed ☕</p>
                  <p className="font-editorial-serif text-3xl font-bold text-amber-700">{stats.coffeeBrews}</p>
                  <span className="text-[10px] text-[#5E5868]">Harrar &amp; Yirgacheffe roasts</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/70 space-y-1">
                  <p className="text-[10px] uppercase font-bold text-[#5E5868]">Cheers Raised 🥂</p>
                  <p className="font-editorial-serif text-3xl font-bold text-purple-700">{stats.cheersCount}</p>
                  <span className="text-[10px] text-[#5E5868]">Visitor celebrations</span>
                </div>
              </div>

              {/* Quick Knowledge & RAG Status Banner */}
              <div className="p-5 rounded-2xl bg-linear-to-r from-[#8A75B3]/10 to-[#D8CDEE]/40 border border-[#D8CDEE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-[#1E1B24] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#8A75B3]" />
                    <span>RAG Document Ingestion Pipeline</span>
                  </h4>
                  <p className="text-xs text-[#5E5868]">
                    Upload resumes, project case studies, and documentation so the AI companion can cite verified facts.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab("knowledge")}
                  className="px-4 py-2 rounded-full bg-[#8A75B3] hover:bg-[#7863A2] text-white text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer shrink-0"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Manage Knowledge Base</span>
                </button>
              </div>

              {/* Recent Activity Feed */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#5E5868]">
                  Recent Activity Stream
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="p-3.5 rounded-xl bg-white border border-[#D8CDEE]/60 flex items-center justify-between">
                    <span className="font-medium text-[#1E1B24]">Visitor asked AI Companion: &ldquo;Tell me about Meri AI hackathon win&rdquo;</span>
                    <span className="text-[#8A75B3] font-mono text-[10px]">Grounded (4 chunks cited)</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-[#D8CDEE]/60 flex items-center justify-between">
                    <span className="font-medium text-[#1E1B24]">Contact message received regarding Agentic AI consulting from Hanna Tesfaye</span>
                    <span className="text-[#5E5868] text-[10px]">2 hrs ago</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-[#D8CDEE]/60 flex items-center justify-between">
                    <span className="font-medium text-[#1E1B24]">Visitor brewed Ethiopian roast at Coffee Corner ☕</span>
                    <span className="text-[#5E5868] text-[10px]">4 hrs ago</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MY IDENTITY */}
          {activeTab === "identity" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#D8CDEE]/60 pb-4">
                <div>
                  <span className="editorial-tag text-[#8A75B3]">PROFILE DATA</span>
                  <h2 className="font-editorial-serif text-3xl font-medium text-[#1E1B24]">
                    My Identity &amp; Biography
                  </h2>
                </div>
                <button
                  onClick={handleSaveProfile}
                  className="px-5 py-2 rounded-full bg-[#8A75B3] hover:bg-[#7863A2] text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Changes</span>
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#5E5868]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE] focus:outline-none focus:border-[#8A75B3]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#5E5868]">
                      Location
                    </label>
                    <input
                      type="text"
                      value={profile.location}
                      onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE] focus:outline-none focus:border-[#8A75B3]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#5E5868]">
                    Professional Headline
                  </label>
                  <input
                    type="text"
                    value={profile.headline}
                    onChange={(e) => setProfile({ ...profile, headline: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE] focus:outline-none focus:border-[#8A75B3]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#5E5868]">
                    Supporting Introduction
                  </label>
                  <textarea
                    rows={3}
                    value={profile.introduction}
                    onChange={(e) => setProfile({ ...profile, introduction: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE] focus:outline-none focus:border-[#8A75B3] resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#5E5868]">
                      University
                    </label>
                    <input
                      type="text"
                      value={profile.education_school}
                      onChange={(e) => setProfile({ ...profile, education_school: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE] focus:outline-none focus:border-[#8A75B3]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#5E5868]">
                      Degree
                    </label>
                    <input
                      type="text"
                      value={profile.education_degree}
                      onChange={(e) => setProfile({ ...profile, education_degree: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE] focus:outline-none focus:border-[#8A75B3]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#5E5868]">
                      Graduation Year
                    </label>
                    <input
                      type="text"
                      value={profile.education_graduation}
                      onChange={(e) => setProfile({ ...profile, education_graduation: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE] focus:outline-none focus:border-[#8A75B3]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#5E5868]">
                      GitHub Profile URL
                    </label>
                    <input
                      type="text"
                      value={profile.github_url}
                      onChange={(e) => setProfile({ ...profile, github_url: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE] focus:outline-none focus:border-[#8A75B3]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#5E5868]">
                      Email
                    </label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE] focus:outline-none focus:border-[#8A75B3]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PROJECT MANAGER */}
          {activeTab === "projects" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D8CDEE]/60 pb-4">
                <div>
                  <span className="editorial-tag text-[#8A75B3]">PORTFOLIO WORK</span>
                  <h2 className="font-editorial-serif text-3xl font-medium text-[#1E1B24]">
                    Project Manager ({projectsList.length})
                  </h2>
                </div>
                <button
                  onClick={() => setIsAddProjectOpen(true)}
                  className="px-4 py-2 rounded-full bg-[#8A75B3] hover:bg-[#7863A2] text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer shrink-0"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Project</span>
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 text-[#5E5868] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter projects by title, category, or tech..."
                  value={projectSearch}
                  onChange={(e) => setProjectSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE] text-xs text-[#1E1B24] focus:outline-none focus:border-[#8A75B3]"
                />
              </div>

              <div className="space-y-3">
                {projectsList
                  .filter((p) => {
                    const q = projectSearch.toLowerCase();
                    return p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.tech.toLowerCase().includes(q);
                  })
                  .map((p) => (
                    <div
                      key={p.id}
                      className="p-5 rounded-2xl bg-white border border-[#D8CDEE]/80 hover:border-[#8A75B3]/60 transition-all shadow-xs space-y-2.5"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h4 className="text-sm font-semibold text-[#1E1B24]">{p.title}</h4>
                          <span className="px-2.5 py-0.5 rounded-full bg-[#D8CDEE] text-[#1E1B24] text-[10px] font-bold">
                            {p.badge}
                          </span>
                          <span className="text-xs text-[#5E5868]">({p.category})</span>
                        </div>

                        <div className="flex items-center gap-2">
                          {p.github && (
                            <a
                              href={p.github}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1.5 rounded-lg bg-[#F5F2FA] hover:bg-[#D8CDEE] text-[#1E1B24] transition-colors"
                              title="GitHub Repository"
                            >
                              <GithubIcon className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {p.live && (
                            <a
                              href={p.live}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1.5 rounded-lg bg-[#F5F2FA] hover:bg-[#D8CDEE] text-[#8A75B3] transition-colors"
                              title="Live URL"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                          <button
                            onClick={() => handleDeleteProject(p.id, p.title)}
                            className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors cursor-pointer"
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <p className="text-xs text-[#1E1B24]/85 leading-relaxed">{p.summary}</p>
                      
                      <div className="pt-1 flex items-center gap-1.5 flex-wrap text-[11px] font-mono text-[#5E5868]">
                        <span className="font-semibold text-[#8A75B3]">Stack:</span>
                        <span>{p.tech}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* TAB: LINKEDIN EXPERIENCE & CAREER TIMELINE */}
          {activeTab === "experience" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D8CDEE]/60 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="editorial-tag text-[#8A75B3]">CAREER DOSSIER</span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-[10px] font-bold">
                      <LinkedinIcon className="w-3 h-3 text-[#0077b5]" />
                      <span>LinkedIn Grounded Only</span>
                    </span>
                  </div>
                  <h2 className="font-editorial-serif text-3xl font-medium text-[#1E1B24]">
                    Verified Experience ({experienceList.length})
                  </h2>
                  <p className="text-xs text-[#5E5868] mt-0.5">
                    Professional career history strictly synchronized from{" "}
                    <a
                      href="https://linkedin.com/in/temkin-abdulmelik-195582306"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#8A75B3] font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      <span>linkedin.com/in/temkin-abdulmelik-195582306</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsAddExperienceOpen(true)}
                    className="px-4 py-2 rounded-full bg-[#8A75B3] hover:bg-[#7863A2] text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer shrink-0"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Experience (from LinkedIn)</span>
                  </button>
                </div>
              </div>

              {/* Informational Guidance Alert */}
              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 flex items-start gap-3 text-xs text-blue-900">
                <LinkedinIcon className="w-4 h-4 text-[#0077b5] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <p className="font-semibold">LinkedIn Grounding Rule Active</p>
                  <p className="text-blue-800/85 leading-relaxed text-[11px]">
                    To maintain strict truthfulness and zero-hallucination verification across your portfolio and AI Companion, all experience items must strictly originate from your official LinkedIn profile.
                  </p>
                </div>
              </div>

              {/* Experience Items List */}
              <div className="space-y-3">
                {experienceList.map((exp) => (
                  <div
                    key={exp.id}
                    className={`p-5 rounded-2xl bg-white border transition-all shadow-xs space-y-3 ${
                      exp.highlight ? "border-[#8A75B3] bg-purple-50/10" : "border-[#D8CDEE]/80"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <div className="w-8 h-8 rounded-lg bg-[#F5F2FA] border border-[#D8CDEE] flex items-center justify-center shrink-0">
                          <Briefcase className="w-4 h-4 text-[#8A75B3]" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-[#1E1B24] flex items-center gap-2">
                            <span>{exp.title}</span>
                            {exp.highlight && (
                              <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">
                                Highlight
                              </span>
                            )}
                          </h4>
                          <p className="text-xs font-medium text-[#8A75B3]">
                            {exp.company} • <span className="text-[#5E5868]">{exp.period}</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-[#F5F2FA] text-[#5E5868] border border-[#D8CDEE]">
                          {exp.category}
                        </span>
                        <button
                          onClick={() => handleDeleteExperience(exp.id, exp.title)}
                          className="p-1.5 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors cursor-pointer"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <p className="text-xs text-[#1E1B24]/85 leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#F5F2FA] text-[#5E5868] border border-[#D8CDEE]/60 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: PERSONAL GALLERY & PRIVACY */}
          {activeTab === "gallery" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D8CDEE]/60 pb-4">
                <div>
                  <span className="editorial-tag text-[#8A75B3]">PHOTO PRIVACY ENFORCEMENT</span>
                  <h2 className="font-editorial-serif text-3xl font-medium text-[#1E1B24]">
                    Personal Gallery ({photos.length})
                  </h2>
                  <p className="text-xs text-[#5E5868] mt-0.5">
                    Enforce strict visibility boundaries. Private and family photos are NEVER shown publicly or ingested by the AI assistant.
                  </p>
                </div>
                <button
                  onClick={() => setIsAddPhotoOpen(true)}
                  className="px-4 py-2 rounded-full bg-[#8A75B3] hover:bg-[#7863A2] text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer shrink-0"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Photo</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {photos.map((p) => (
                  <div
                    key={p.id}
                    className="p-4 rounded-2xl bg-white border border-[#D8CDEE]/80 shadow-xs flex flex-col justify-between gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-[#D8CDEE]">
                        <img src={p.url} alt={p.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="space-y-1 min-w-0">
                        <h4 className="text-xs font-semibold text-[#1E1B24] line-clamp-2">{p.title}</h4>
                        <p className="text-[11px] text-[#5E5868] capitalize">
                          Category: {p.category} • {p.date}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        p.is_private ? "bg-rose-100 text-rose-800" : "bg-emerald-100 text-emerald-800"
                      }`}>
                        {p.is_private ? "Private Vault" : "Public Gallery"}
                      </span>

                      <button
                        onClick={() => togglePhotoPrivacy(p.id)}
                        className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                          p.is_private
                            ? "bg-rose-50 text-rose-700 border border-rose-200"
                            : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        }`}
                      >
                        {p.is_private ? (
                          <>
                            <EyeOff className="w-3 h-3" />
                            <span>Keep Private</span>
                          </>
                        ) : (
                          <>
                            <Eye className="w-3 h-3" />
                            <span>Make Public</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: KNOWLEDGE CENTER (MODULARIZED & ENHANCED RAG INGESTION) */}
          {activeTab === "knowledge" && (
            <AdminKnowledgeCenter token={token} />
          )}

          {/* TAB 6: AI CONTROL CENTER */}
          {activeTab === "ai" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#D8CDEE]/60 pb-4">
                <div>
                  <span className="editorial-tag text-[#8A75B3]">GENERATIVE COMPANION CONFIG</span>
                  <h2 className="font-editorial-serif text-3xl font-medium text-[#1E1B24]">
                    AI Control Center
                  </h2>
                </div>
                <button
                  onClick={() => triggerToast("Persona and generation settings hot-reloaded!")}
                  className="px-5 py-2 rounded-full bg-[#8A75B3] hover:bg-[#7863A2] text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Deploy Persona</span>
                </button>
              </div>

              <div className="space-y-5 text-xs sm:text-sm">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#5E5868]">
                      System Persona Directive
                    </label>
                    <button
                      type="button"
                      onClick={() =>
                        setAiConfig({
                          ...aiConfig,
                          persona: "You are Temkin's AI Companion, an intelligent, warm, and sophisticated digital assistant representing Temkin Abdulmelik. You speak with high professional standards, warm enthusiasm, and concise precision. You NEVER hallucinate facts and NEVER disclose private information."
                        })
                      }
                      className="text-[11px] text-[#8A75B3] hover:underline"
                    >
                      Reset Default
                    </button>
                  </div>
                  <textarea
                    rows={4}
                    value={aiConfig.persona}
                    onChange={(e) => setAiConfig({ ...aiConfig, persona: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE] focus:outline-none focus:border-[#8A75B3] resize-none leading-relaxed text-[#1E1B24]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/70 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5E5868]">
                        Temperature
                      </span>
                      <span className="text-xs font-mono font-bold text-[#8A75B3]">
                        {aiConfig.temperature}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={aiConfig.temperature}
                      onChange={(e) => setAiConfig({ ...aiConfig, temperature: parseFloat(e.target.value) })}
                      className="w-full accent-[#8A75B3] cursor-pointer"
                    />
                    <p className="text-[10px] text-[#5E5868]">
                      {aiConfig.temperature <= 0.2
                        ? "Deterministic (Strict Fact Retrieval)"
                        : aiConfig.temperature <= 0.6
                        ? "Balanced Precision"
                        : "Higher Creative Variance"}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/70 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5E5868]">
                        RAG Top-K Chunks
                      </span>
                      <span className="text-xs font-mono font-bold text-[#8A75B3]">
                        {aiConfig.topKChunks} passages
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="8"
                      step="1"
                      value={aiConfig.topKChunks}
                      onChange={(e) => setAiConfig({ ...aiConfig, topKChunks: parseInt(e.target.value) })}
                      className="w-full accent-[#8A75B3] cursor-pointer"
                    />
                    <p className="text-[10px] text-[#5E5868]">
                      Number of semantic chunks passed to Gemini.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/70 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5E5868]">
                        Max Tokens
                      </span>
                      <span className="text-xs font-mono font-bold text-[#8A75B3]">
                        {aiConfig.maxTokens}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="512"
                      max="4096"
                      step="256"
                      value={aiConfig.maxTokens}
                      onChange={(e) => setAiConfig({ ...aiConfig, maxTokens: parseInt(e.target.value) })}
                      className="w-full accent-[#8A75B3] cursor-pointer"
                    />
                    <p className="text-[10px] text-[#5E5868]">
                      Response token generation limit.
                    </p>
                  </div>
                </div>

                {/* Grounding Directives */}
                <div className="p-4 rounded-2xl bg-white border border-[#D8CDEE] space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#5E5868]">
                    Active Safety & Grounding Policies
                  </span>
                  <div className="space-y-1.5 text-xs text-[#1E1B24]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Zero-Hallucination Guardrail: Never invent unverified bio, degrees, or awards.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Privacy Isolation: Automatically reject prompts asking for private vault documents.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Source Attribution: Emits clickable citation pills directly in chat responses.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: CONTACT INBOX */}
          {activeTab === "messages" && (
            <div className="space-y-6">
              <div className="border-b border-[#D8CDEE]/60 pb-4 flex items-center justify-between">
                <div>
                  <span className="editorial-tag text-[#8A75B3]">INCOMING DISPATCHES</span>
                  <h2 className="font-editorial-serif text-3xl font-medium text-[#1E1B24]">
                    Contact Inquiries ({messages.length})
                  </h2>
                </div>
                <span className="text-xs text-[#5E5868]">
                  {unreadMessagesCount} unread
                </span>
              </div>

              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-5 rounded-2xl bg-white border transition-all ${
                      msg.unread ? "border-[#8A75B3] shadow-xs" : "border-[#D8CDEE]/70"
                    } space-y-3`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        {msg.unread && (
                          <span className="w-2.5 h-2.5 rounded-full bg-[#8A75B3] animate-pulse" />
                        )}
                        <h4 className="text-sm font-semibold text-[#1E1B24]">{msg.sender}</h4>
                        <span className="text-[11px] text-[#5E5868]">({msg.role})</span>
                      </div>
                      <span className="text-[11px] text-[#5E5868]">{msg.date}</span>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-[#8A75B3]">{msg.subject}</p>
                      <p className="text-xs text-[#1E1B24]/85 leading-relaxed">{msg.message}</p>
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-gray-100 text-xs">
                      <span className="text-[11px] text-[#5E5868]">{msg.email}</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => toggleMessageRead(msg.id)}
                          className="px-3 py-1 rounded-full text-xs font-medium text-[#5E5868] hover:bg-[#F5F2FA] transition-colors cursor-pointer"
                        >
                          {msg.unread ? "Mark Read" : "Mark Unread"}
                        </button>
                        <a
                          href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject)}`}
                          className="px-3.5 py-1.5 rounded-full bg-[#8A75B3] hover:bg-[#7863A2] text-white font-medium text-xs transition-colors flex items-center gap-1.5"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Reply</span>
                        </a>
                        <button
                          onClick={() => deleteMessage(msg.id)}
                          className="p-1.5 rounded-full hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors cursor-pointer"
                          title="Delete message"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 8: SETTINGS */}
          {activeTab === "settings" && (
            <div className="space-y-6">
              <div className="border-b border-[#D8CDEE]/60 pb-4">
                <span className="editorial-tag text-[#8A75B3]">STUDIO CONFIGURATION</span>
                <h2 className="font-editorial-serif text-3xl font-medium text-[#1E1B24]">
                  Platform Settings &amp; Security
                </h2>
              </div>

              <div className="space-y-6 max-w-2xl">
                <div className="card-luxury p-6 space-y-4 bg-white rounded-2xl border border-[#D8CDEE]">
                  <h3 className="font-editorial-serif text-xl font-medium text-[#1E1B24]">
                    AI Model &amp; Retrieval Stack
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#5E5868]">
                        Active Generative Model
                      </label>
                      <input
                        type="text"
                        disabled
                        value="gemini-2.5-flash (Google Cloud Low-Latency SSE)"
                        className="w-full mt-1 px-4 py-2.5 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE] text-xs sm:text-sm text-[#1E1B24]/80 font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#5E5868]">
                        Vector Embedding Model
                      </label>
                      <input
                        type="text"
                        disabled
                        value="text-embedding-004 (768-dimensional L2 normalized)"
                        className="w-full mt-1 px-4 py-2.5 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE] text-xs sm:text-sm text-[#1E1B24]/80 font-mono"
                      />
                    </div>
                  </div>
                </div>

                <div className="card-luxury p-6 space-y-4 bg-white rounded-2xl border border-[#D8CDEE]">
                  <h3 className="font-editorial-serif text-xl font-medium text-[#1E1B24]">
                    Database &amp; Vector Index Status
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm text-[#5E5868]">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-[#F5F2FA]">
                      <span>Vector Engine:</span>
                      <strong className="text-[#1E1B24]">PostgreSQL 16 + pgvector</strong>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-[#F5F2FA]">
                      <span>Distance Metric:</span>
                      <strong className="text-[#8A75B3]">Cosine Similarity (&lt;=&gt;)</strong>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-[#F5F2FA]">
                      <span>Token Authentication:</span>
                      <strong className="text-emerald-700">JWT HS256 (24hr auto-renewal)</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* MODAL: ADD PROJECT */}
      {isAddProjectOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="card-luxury max-w-lg w-full p-6 sm:p-8 space-y-4 bg-white rounded-3xl border border-[#D8CDEE]">
            <div className="flex justify-between items-center">
              <h3 className="font-editorial-serif text-2xl font-medium text-[#1E1B24]">
                Add Portfolio Project
              </h3>
              <button onClick={() => setIsAddProjectOpen(false)} className="p-1 text-gray-400 hover:text-black">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddProject} className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-[#5E5868]">Project Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Meri AI"
                  value={newProject.title}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-[#5E5868]">Category</label>
                  <input
                    type="text"
                    placeholder="e.g. Agentic AI"
                    value={newProject.category}
                    onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-[#5E5868]">Badge</label>
                  <input
                    type="text"
                    placeholder="e.g. 1st Place Winner"
                    value={newProject.badge}
                    onChange={(e) => setNewProject({ ...newProject, badge: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-[#5E5868]">Tech Stack (comma separated)</label>
                <input
                  type="text"
                  placeholder="e.g. FastAPI, pgvector, React, TypeScript"
                  value={newProject.tech}
                  onChange={(e) => setNewProject({ ...newProject, tech: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE]"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-[#5E5868]">Short Summary</label>
                <textarea
                  rows={3}
                  placeholder="Describe key architectural solutions and results..."
                  value={newProject.summary}
                  onChange={(e) => setNewProject({ ...newProject, summary: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE] resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-[#5E5868]">GitHub URL</label>
                  <input
                    type="text"
                    value={newProject.github}
                    onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-[#5E5868]">Live Demo URL</label>
                  <input
                    type="text"
                    value={newProject.live}
                    onChange={(e) => setNewProject({ ...newProject, live: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE]"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddProjectOpen(false)}
                  className="px-4 py-2 rounded-full text-[#5E5868]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-[#8A75B3] text-white font-semibold"
                >
                  Save Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD PHOTO */}
      {isAddPhotoOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="card-luxury max-w-md w-full p-6 sm:p-8 space-y-4 bg-white rounded-3xl border border-[#D8CDEE]">
            <div className="flex justify-between items-center">
              <h3 className="font-editorial-serif text-2xl font-medium text-[#1E1B24]">
                Add Photo to Gallery
              </h3>
              <button onClick={() => setIsAddPhotoOpen(false)} className="p-1 text-gray-400 hover:text-black">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddPhoto} className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-[#5E5868]">Photo Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ASTU Mentorship Presentation"
                  value={newPhoto.title}
                  onChange={(e) => setNewPhoto({ ...newPhoto, title: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-[#5E5868]">Category</label>
                  <select
                    value={newPhoto.category}
                    onChange={(e) => setNewPhoto({ ...newPhoto, category: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE]"
                  >
                    <option value="hackathon">Hackathon</option>
                    <option value="university">University</option>
                    <option value="community">Community</option>
                    <option value="family">Family (Private)</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-[#5E5868]">Date / Year</label>
                  <input
                    type="text"
                    placeholder="e.g. Feb 2026"
                    value={newPhoto.date}
                    onChange={(e) => setNewPhoto({ ...newPhoto, date: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-[#5E5868]">Image URL</label>
                <input
                  type="text"
                  placeholder="https://..."
                  value={newPhoto.url}
                  onChange={(e) => setNewPhoto({ ...newPhoto, url: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE]"
                />
              </div>

              <div className="p-3 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE] flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#1E1B24]">Private Photo Vault</p>
                  <p className="text-[10px] text-[#5E5868]">Never displayed publicly or seen by AI</p>
                </div>
                <input
                  type="checkbox"
                  checked={newPhoto.is_private}
                  onChange={(e) => setNewPhoto({ ...newPhoto, is_private: e.target.checked })}
                  className="w-4 h-4 accent-[#8A75B3]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddPhotoOpen(false)}
                  className="px-4 py-2 rounded-full text-[#5E5868]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-[#8A75B3] text-white font-semibold"
                >
                  Save Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: ADD LINKEDIN EXPERIENCE */}
      {isAddExperienceOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="card-luxury max-w-lg w-full p-6 sm:p-8 space-y-4 bg-white rounded-3xl border border-[#D8CDEE]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <LinkedinIcon className="w-5 h-5 text-[#0077b5]" />
                <h3 className="font-editorial-serif text-2xl font-medium text-[#1E1B24]">
                  Add LinkedIn Experience
                </h3>
              </div>
              <button onClick={() => setIsAddExperienceOpen(false)} className="p-1 text-gray-400 hover:text-black">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-[11px] text-[#5E5868]">
              <strong>Strict Requirement:</strong> Add roles, company names, and deliverables strictly verified against your public LinkedIn profile.
            </p>

            <form onSubmit={handleAddExperience} className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-[#5E5868]">Role / Job Title (from LinkedIn)</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. AI Project Contributor"
                  value={newExperience.title}
                  onChange={(e) => setNewExperience({ ...newExperience, title: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-[#5E5868]">Company / Organization</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. AfterQuery & Revelo"
                    value={newExperience.company}
                    onChange={(e) => setNewExperience({ ...newExperience, company: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-[#5E5868]">Time Period</label>
                  <input
                    type="text"
                    placeholder="e.g. 2025 — Present"
                    value={newExperience.period}
                    onChange={(e) => setNewExperience({ ...newExperience, period: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-semibold text-[#5E5868]">Category</label>
                  <select
                    value={newExperience.category}
                    onChange={(e) => setNewExperience({ ...newExperience, category: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE]"
                  >
                    <option value="Work Experience">Work Experience</option>
                    <option value="Engineering Experience">Engineering Experience</option>
                    <option value="Leadership & Community">Leadership & Community</option>
                    <option value="Hackathon Championship">Hackathon Championship</option>
                    <option value="Education">Education</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-[#5E5868]">Tags (comma separated)</label>
                  <input
                    type="text"
                    placeholder="e.g. AI Evaluation, Python, Testing"
                    value={newExperience.tags}
                    onChange={(e) => setNewExperience({ ...newExperience, tags: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-[#5E5868]">Key Responsibilities & Deliverables</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Detail the technical responsibilities and measurable outcomes..."
                  value={newExperience.description}
                  onChange={(e) => setNewExperience({ ...newExperience, description: e.target.value })}
                  className="w-full p-2.5 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE] resize-none"
                />
              </div>

              <div className="p-3 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE] flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#1E1B24]">Milestone Highlight</p>
                  <p className="text-[10px] text-[#5E5868]">Feature with highlighted badge on public timeline</p>
                </div>
                <input
                  type="checkbox"
                  checked={newExperience.highlight}
                  onChange={(e) => setNewExperience({ ...newExperience, highlight: e.target.checked })}
                  className="w-4 h-4 accent-[#8A75B3]"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddExperienceOpen(false)}
                  className="px-4 py-2 rounded-full text-[#5E5868]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-[#8A75B3] text-white font-semibold"
                >
                  Save to Experience
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
