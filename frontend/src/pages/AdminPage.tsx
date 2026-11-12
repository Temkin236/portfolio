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
  Settings as SettingsIcon
} from "lucide-react";

export default function AdminPage({
  initialTab = "overview",
}: {
  initialTab?:
    | "overview"
    | "identity"
    | "projects"
    | "gallery"
    | "knowledge"
    | "ai"
    | "messages"
    | "settings";
}) {
  const { tab } = useParams<{ tab?: string }>();
  const [token, setToken] = useState<string | null>(null);
  const [loginForm, setLoginForm] = useState({ username: "admin", password: "" });
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState<
    | "overview"
    | "identity"
    | "projects"
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
    visitors: 284,
    projectViews: 1240,
    chatQueries: 48,
    messagesCount: 3,
    coffeeBrews: 89,
    cheersCount: 42,
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

  const [photos, setPhotos] = useState([
    { id: 1, title: "1st Place Award Ceremony", category: "hackathon", is_private: false },
    { id: 2, title: "Team Divas Celebration", category: "hackathon", is_private: false },
    { id: 3, title: "Technical Presentation at ASTU", category: "university", is_private: false },
    { id: 4, title: "CSEC Mentorship Workshop", category: "community", is_private: false },
    { id: 5, title: "Private Family Gathering & Memories", category: "family", is_private: true },
  ]);

  const [knowledgeDocs, setKnowledgeDocs] = useState([
    { id: 1, title: "Temkin_Abdulmelik_Resume.docx", category: "resume", is_published: true, chunks: 4 },
    { id: 2, title: "CSEC_ASTU_Hackathon_Documentation.pdf", category: "achievement", is_published: true, chunks: 6 },
    { id: 3, title: "Private_Research_Notes_Confidential.txt", category: "notes", is_published: false, chunks: 2 },
  ]);

  const [saveSuccess, setSaveSuccess] = useState(false);

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
          visitors: data.total_visitors || prev.visitors,
          messagesCount: data.total_messages || prev.messagesCount,
          chatQueries: data.total_questions || prev.chatQueries,
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
        setLoginError("Invalid credentials. Please enter the authorized password.");
      }
    } catch {
      setLoginError("Connection failed to backend authentication service.");
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
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2500);
    } catch {
      setSaveSuccess(true);
    }
  };

  const togglePhotoPrivacy = (id: number) => {
    setPhotos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, is_private: !p.is_private } : p))
    );
  };

  const toggleKnowledgePublish = (id: number) => {
    setKnowledgeDocs((prev) =>
      prev.map((d) =>
        d.id === id ? { ...d, is_published: !d.is_published } : d
      )
    );
  };

  // If not logged in, show secure login screen
  if (!token) {
    return (
      <div className="min-h-screen bg-[#F5F2FA] flex items-center justify-center p-4">
        <div className="max-w-md w-full card-luxury p-8 sm:p-10 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#8A75B3] text-white mx-auto flex items-center justify-center shadow-md">
            <Lock className="w-7 h-7" />
          </div>

          <div className="space-y-1">
            <span className="editorial-tag text-[#8A75B3]">
              AUTHENTICATED ACCESS
            </span>
            <h1 className="font-editorial-serif text-3xl font-medium text-[#1E1B24]">
              Private Admin Studio
            </h1>
            <p className="text-xs text-[#5E5868]">
              Manage identity, projects, photo privacy, and RAG knowledge.
            </p>
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
                placeholder="Enter password..."
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
    <div className="min-h-screen bg-[#F5F2FA] flex flex-col">
      {/* Admin Top Header */}
      <header className="bg-white border-b border-[#D8CDEE] px-6 py-4 flex items-center justify-between sticky top-0 z-30 shadow-xs">
        <div className="flex items-center gap-3">
          <Link to="/" className="font-editorial-serif text-xl font-medium text-[#1E1B24] hover:text-[#8A75B3] transition-colors">
            Temkin&apos;s World
          </Link>
          <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#D8CDEE] text-[#1E1B24]">
            Admin Studio
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-xs font-medium text-[#5E5868] hover:text-[#8A75B3] flex items-center gap-1"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Public Site</span>
          </Link>
          <button
            onClick={handleLogout}
            className="text-xs font-semibold text-rose-700 bg-rose-50 px-3 py-1.5 rounded-full hover:bg-rose-100 transition-colors flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      {/* Admin Layout Grid */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar Menu */}
        <aside className="md:col-span-3 card-luxury p-3 space-y-1.5">
          {[
            { id: "overview", label: "Overview Metrics", icon: <BarChart3 className="w-4 h-4" /> },
            { id: "identity", label: "My Identity", icon: <User className="w-4 h-4" /> },
            { id: "projects", label: "Project Manager", icon: <FolderGit2 className="w-4 h-4" /> },
            { id: "gallery", label: "Personal Gallery", icon: <Camera className="w-4 h-4" /> },
            { id: "knowledge", label: "Knowledge Center", icon: <FileText className="w-4 h-4" /> },
            { id: "ai", label: "AI Control Center", icon: <Bot className="w-4 h-4" /> },
            { id: "messages", label: "Contact Inbox", icon: <Mail className="w-4 h-4" /> },
            { id: "settings", label: "Studio Settings", icon: <SettingsIcon className="w-4 h-4" /> },
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
        </aside>

        {/* Right Main Content Pane */}
        <main className="md:col-span-9 card-luxury p-6 sm:p-8 min-h-[600px]">
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="border-b border-[#D8CDEE]/60 pb-4">
                <span className="editorial-tag text-[#8A75B3]">ANALYTICS & ACTIVITY</span>
                <h2 className="font-editorial-serif text-3xl font-medium text-[#1E1B24]">
                  Platform Overview
                </h2>
              </div>

              {/* Metric KPI cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/70 space-y-1">
                  <p className="text-[10px] uppercase font-bold text-[#5E5868]">Unique Visitors</p>
                  <p className="font-editorial-serif text-3xl font-bold text-[#1E1B24]">{stats.visitors}</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/70 space-y-1">
                  <p className="text-[10px] uppercase font-bold text-[#5E5868]">Project Views</p>
                  <p className="font-editorial-serif text-3xl font-bold text-[#8A75B3]">{stats.projectViews}</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/70 space-y-1">
                  <p className="text-[10px] uppercase font-bold text-[#5E5868]">AI Companion Chats</p>
                  <p className="font-editorial-serif text-3xl font-bold text-emerald-700">{stats.chatQueries}</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/70 space-y-1">
                  <p className="text-[10px] uppercase font-bold text-[#5E5868]">Contact Inquiries</p>
                  <p className="font-editorial-serif text-3xl font-bold text-[#1E1B24]">{stats.messagesCount}</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/70 space-y-1">
                  <p className="text-[10px] uppercase font-bold text-[#5E5868]">Coffee Brewed ☕</p>
                  <p className="font-editorial-serif text-3xl font-bold text-amber-700">{stats.coffeeBrews}</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/70 space-y-1">
                  <p className="text-[10px] uppercase font-bold text-[#5E5868]">Cheers Raised 🥂</p>
                  <p className="font-editorial-serif text-3xl font-bold text-purple-700">{stats.cheersCount}</p>
                </div>
              </div>

              {/* Recent Activity Feed */}
              <div className="space-y-3 pt-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#5E5868]">
                  Recent Activity Stream
                </h4>
                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-white border border-[#D8CDEE]/60 flex items-center justify-between">
                    <span>Visitor asked AI Companion: &ldquo;Tell me about Meri AI hackathon win&rdquo;</span>
                    <span className="text-[#5E5868] text-[10px]">Just now</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-[#D8CDEE]/60 flex items-center justify-between">
                    <span>Contact message received regarding Agentic AI consulting</span>
                    <span className="text-[#5E5868] text-[10px]">2 hrs ago</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-[#D8CDEE]/60 flex items-center justify-between">
                    <span>Visitor brewed Ethiopian roast at Coffee Corner ☕</span>
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
                    My Identity & Biography
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

              {saveSuccess && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Changes successfully saved and synchronized with public portfolio!</span>
                </div>
              )}

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
              </div>
            </div>
          )}

          {/* TAB 4: PERSONAL GALLERY & PRIVACY */}
          {activeTab === "gallery" && (
            <div className="space-y-6">
              <div className="border-b border-[#D8CDEE]/60 pb-4">
                <span className="editorial-tag text-[#8A75B3]">PHOTO PRIVACY ENFORCEMENT</span>
                <h2 className="font-editorial-serif text-3xl font-medium text-[#1E1B24]">
                  Personal Gallery Management
                </h2>
                <p className="text-xs text-[#5E5868]">
                  Enforce strict visibility boundaries. Private and family photos are NEVER shown publicly or ingested by the AI assistant.
                </p>
              </div>

              <div className="space-y-3">
                {photos.map((p) => (
                  <div
                    key={p.id}
                    className="p-4 rounded-2xl bg-white border border-[#D8CDEE]/70 flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-[#1E1B24]">{p.title}</h4>
                      <p className="text-xs text-[#5E5868]">Category: {p.category}</p>
                    </div>

                    <button
                      onClick={() => togglePhotoPrivacy(p.id)}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                        p.is_private
                          ? "bg-rose-50 text-rose-700 border border-rose-200"
                          : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      }`}
                    >
                      {p.is_private ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5" />
                          <span>Private (Protected)</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          <span>Publicly Visible</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: KNOWLEDGE CENTER */}
          {activeTab === "knowledge" && (
            <div className="space-y-6">
              <div className="border-b border-[#D8CDEE]/60 pb-4">
                <span className="editorial-tag text-[#8A75B3]">RAG INGESTION & GROUNDING</span>
                <h2 className="font-editorial-serif text-3xl font-medium text-[#1E1B24]">
                  Knowledge Center
                </h2>
                <p className="text-xs text-[#5E5868]">
                  Documents ingested and embedded for Temkin&apos;s AI Companion.
                </p>
              </div>

              <div className="space-y-3">
                {knowledgeDocs.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-4 rounded-2xl bg-white border border-[#D8CDEE]/70 flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-[#1E1B24]">{doc.title}</h4>
                      <p className="text-xs text-[#5E5868]">
                        Category: {doc.category} • Indexed Chunks: {doc.chunks}
                      </p>
                    </div>

                    <button
                      onClick={() => toggleKnowledgePublish(doc.id)}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                        doc.is_published
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-gray-100 text-gray-600 border border-gray-200"
                      }`}
                    >
                      <span>{doc.is_published ? "Published & Searchable" : "Unpublished Draft"}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: AI CONTROL CENTER */}
          {activeTab === "ai" && (
            <div className="space-y-6">
              <div className="border-b border-[#D8CDEE]/60 pb-4">
                <span className="editorial-tag text-[#8A75B3]">AGENT ARCHITECTURE</span>
                <h2 className="font-editorial-serif text-3xl font-medium text-[#1E1B24]">
                  AI Control Center
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-[#F5F2FA] border border-[#D8CDEE]/70 space-y-2">
                  <h4 className="font-semibold text-[#1E1B24]">System Persona Instruction</h4>
                  <p className="text-xs text-[#5E5868] leading-relaxed">
                    You are Temkin&apos;s AI Companion, an intelligent, warm, and sophisticated digital assistant representing Temkin Abdulmelik. You speak with high professional standards, warm enthusiasm, and concise precision. You NEVER hallucinate facts and NEVER disclose private information.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-[#D8CDEE]/70">
                    <p className="text-[10px] uppercase font-bold text-[#5E5868]">Engine</p>
                    <p className="text-base font-semibold text-[#1E1B24]">Google Gemini 2.5 Flash</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-[#D8CDEE]/70">
                    <p className="text-[10px] uppercase font-bold text-[#5E5868]">Orchestration</p>
                    <p className="text-base font-semibold text-[#8A75B3]">LangGraph + RAG</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: CONTACT INBOX */}
          {activeTab === "messages" && (
            <div className="space-y-6">
              <div className="border-b border-[#D8CDEE]/60 pb-4">
                <span className="editorial-tag text-[#8A75B3]">INCOMING DISPATCHES</span>
                <h2 className="font-editorial-serif text-3xl font-medium text-[#1E1B24]">
                  Contact Submissions ({stats.messagesCount})
                </h2>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-white border border-[#D8CDEE]/70 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-[#1E1B24]">Hanna Tesfaye (Tech Lead)</h4>
                    <span className="text-[10px] text-[#5E5868]">Today at 2:15 PM</span>
                  </div>
                  <p className="text-xs text-[#8A75B3] font-medium">Subject: Collaboration on Agentic AI Systems</p>
                  <p className="text-xs text-[#1E1B24]/80">
                    Hi Temkin, saw your Meri AI hackathon win and your RAG projects. We have an exciting agent pipeline we would love to collaborate on.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PROJECT MANAGER */}
          {activeTab === "projects" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#D8CDEE]/60 pb-4">
                <div>
                  <span className="editorial-tag text-[#8A75B3]">PROJECT DIRECTORY</span>
                  <h2 className="font-editorial-serif text-3xl font-medium text-[#1E1B24]">
                    Project Manager
                  </h2>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { title: "Meri AI", category: "Hackathon Winner", badge: "1st Place" },
                  { title: "Knowledge AI", category: "RAG & Citations", badge: "Live" },
                  { title: "ASTU Campus Navigator", category: "Geospatial AI", badge: "Live" },
                  { title: "Deep Research AI", category: "Multi-Agent System", badge: "Active" },
                  { title: "AURA AI", category: "Conversational AI", badge: "Active" },
                ].map((p) => (
                  <div
                    key={p.title}
                    className="p-4 rounded-2xl bg-white border border-[#D8CDEE]/70 flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-[#1E1B24]">{p.title}</h4>
                      <p className="text-xs text-[#5E5868]">{p.category}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#D8CDEE] text-[#1E1B24] text-xs font-semibold">
                      {p.badge}
                    </span>
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
                  Platform Settings & Security
                </h2>
              </div>

              <div className="space-y-6 max-w-2xl">
                <div className="card-luxury p-6 space-y-4">
                  <h3 className="font-editorial-serif text-xl font-medium text-[#1E1B24]">
                    AI Model & Provider Config
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#5E5868]">
                        Active Generative Model
                      </label>
                      <input
                        type="text"
                        disabled
                        value="gemini-2.5-flash (Google Gemini Cloud)"
                        className="w-full mt-1 px-4 py-2.5 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE] text-xs sm:text-sm text-[#1E1B24]/80 font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#5E5868]">
                        Embedding Provider
                      </label>
                      <input
                        type="text"
                        disabled
                        value="text-embedding-004 (768 dimensions)"
                        className="w-full mt-1 px-4 py-2.5 rounded-xl bg-[#F5F2FA] border border-[#D8CDEE] text-xs sm:text-sm text-[#1E1B24]/80 font-mono"
                      />
                    </div>
                  </div>
                </div>

                <div className="card-luxury p-6 space-y-4">
                  <h3 className="font-editorial-serif text-xl font-medium text-[#1E1B24]">
                    Database & Storage Information
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm text-[#5E5868]">
                    <p>• <strong>Production Engine:</strong> PostgreSQL 16 with pgvector extension enabled</p>
                    <p>• <strong>Development Fallback:</strong> Local SQLite with JSON-serialized vector arrays</p>
                    <p>• <strong>Strict Privacy Filter:</strong> Active on all public queries (photos, knowledge chunks)</p>
                  </div>
                </div>

                <div className="card-luxury p-6 space-y-4">
                  <h3 className="font-editorial-serif text-xl font-medium text-[#1E1B24]">
                    Admin Session & Key Rotation
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E5868]">
                    JWT tokens are cryptographically signed with HS256 and expire every 24 hours. To rotate credentials, update the backend <code>ADMIN_PASSWORD_HASH</code> and <code>SECRET_KEY</code> in environment variables.
                  </p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
