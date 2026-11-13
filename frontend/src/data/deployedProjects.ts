import { getAssetUrl } from "@/utils/assetPath";

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface DeployedProject {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: "all" | "ai" | "fullstack" | "tools";
  role: string;
  deployedUrl: string;
  githubUrl: string;
  hostingPlatform: "Vercel" | "Netlify" | "Cloud";
  stars?: number;
  forks?: number;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  technologies: string[];
  keyFeatures: string[];
  highlightBadge?: string;
  featured?: boolean;
}

export const DEPLOYED_PROJECTS: DeployedProject[] = [
  {
    id: "meri-ai",
    slug: "meri-ai",
    title: "Meri AI",
    tagline: "Hackathon-Winning AI Assistant Platform for University Students",
    category: "ai",
    role: "Lead Full-Stack Developer",
    deployedUrl: "https://meri-ai-eta.vercel.app/",
    githubUrl: "https://github.com/Temkin236/Meri_AI",
    hostingPlatform: "Vercel",
    featured: true,
    highlightBadge: "1st Place Champion 🏆",
    coverImage: getAssetUrl("/images/csec-poster.png"),
    images: [
      {
        url: getAssetUrl("/images/csec-poster.png"),
        alt: "Meri AI Hackathon Poster",
        caption: "Winning project poster for CSEC ASTU Hackathon v1.0"
      },
      {
        url: getAssetUrl("/images/hackathon-award.jpg"),
        alt: "Award Ceremony",
        caption: "Accepting the 1st place championship trophy at ASTU"
      },
      {
        url: getAssetUrl("/images/team-celebration.jpg"),
        alt: "Team Divas Celebration",
        caption: "Celebrating the 24-hour sprint victory with teammates"
      }
    ],
    description: "An AI-powered academic and productivity platform engineered during an intense 24-hour hackathon, designed to empower ASTU students with instant contextual assistance.",
    problem: "University students struggled to quickly synthesize dense lecture materials, access campus resources, and resolve academic queries without fragmented tools.",
    solution: "Built a unified, responsive platform integrating Gemini AI models, contextual document search, and intuitive chat interfaces tailored for university workflows.",
    architecture: "Client (React + Tailwind CSS) <-> REST API Gateway (FastAPI) <-> LLM Orchestration & Contextual Prompt Pipeline <-> Vercel Edge Hosting.",
    technologies: ["FastAPI", "React", "Gemini API", "Tailwind CSS", "Python", "Vite", "Vercel"],
    keyFeatures: [
      "Awarded 1st place among 20+ top university teams at CSEC ASTU Hackathon v1.0",
      "Contextual course document querying with real-time AI responses",
      "Unified campus utility directory and schedule assistant",
      "Live deployment on Vercel with responsive mobile and desktop interfaces"
    ]
  },
  {
    id: "tech-research-ai",
    slug: "tech-research-ai",
    title: "Tech Research AI",
    tagline: "Autonomous Multi-Agent Deep Research Platform with Grounded Citations",
    category: "ai",
    role: "Lead AI & Full-Stack Architect",
    deployedUrl: "https://tech-research-ai.vercel.app",
    githubUrl: "https://github.com/Temkin236/Tech-Research-AI",
    hostingPlatform: "Vercel",
    featured: true,
    highlightBadge: "Autonomous AI Research",
    coverImage: "https://raw.githubusercontent.com/Temkin236/Tech-Research-AI/main/docs/screenshots/dashboard-desktop.png",
    images: [
      {
        url: "https://raw.githubusercontent.com/Temkin236/Tech-Research-AI/main/docs/screenshots/dashboard-desktop.png",
        alt: "Tech Research AI Desktop Interface",
        caption: "Main autonomous research dashboard with real-time agent execution graph"
      },
      {
        url: "https://raw.githubusercontent.com/Temkin236/Tech-Research-AI/main/docs/screenshots/research-explorer.png",
        alt: "Tech Research AI Explorer",
        caption: "Multi-document synthesis explorer with inline provenance and grounded citations"
      },
      {
        url: "https://raw.githubusercontent.com/Temkin236/Tech-Research-AI/main/docs/screenshots/mobile-responsive.png",
        alt: "Tech Research AI Mobile Interface",
        caption: "Mobile responsive layout optimized for quick research briefs on the go"
      }
    ],
    description: "An enterprise-grade autonomous multi-agent research engine that orchestrates web searches, literature synthesis, and factual citation extraction to produce comprehensive technical reports.",
    problem: "Researchers and developers waste hours collating fragmented documentation, cross-referencing papers, and verifying technical claims against hallucinations.",
    solution: "Orchestrates coordinated agent teams that crawl the web, parse academic literature, verify claims through multi-step fact-checking loops, and stream structured markdown reports with verifiable citations.",
    architecture: "Next.js / React 19 Frontend (Vercel) + FastAPI Python Backend (Render) + LangGraph Multi-Agent Workflows + Gemini Flash + Server-Sent Events (SSE).",
    technologies: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "LangGraph", "Gemini API", "Vercel"],
    keyFeatures: [
      "Autonomous recursive research planning and query generation",
      "Grounded source citation badges with direct link attribution",
      "Streaming SSE live generation with token-by-token rendering",
      "Executive summary and exportable Markdown/PDF reports"
    ]
  },
  {
    id: "aura-ai",
    slug: "aura-ai",
    title: "AURA AI",
    tagline: "Intelligent Multi-Persona Conversational Companion with Cloud Sync",
    category: "ai",
    role: "Lead Full-Stack Developer",
    deployedUrl: "https://resonant-torrone-d7c467.netlify.app/",
    githubUrl: "https://github.com/Temkin236/Aura-AI",
    hostingPlatform: "Netlify",
    featured: true,
    highlightBadge: "Gemini 3.5 + Neon Postgres",
    coverImage: "https://raw.githubusercontent.com/Temkin236/Aura-AI/main/docs/screenshot.png",
    images: [
      {
        url: "https://raw.githubusercontent.com/Temkin236/Aura-AI/main/docs/screenshot.png",
        alt: "AURA AI Interface",
        caption: "Luxury editorial interface with real-time persona switching and voice synthesis"
      }
    ],
    description: "A luxury editorial conversational assistant built with React 19 and Node.js, featuring real-time Gemini streaming, serverless Neon PostgreSQL synchronization, and native Web Audio synthesis.",
    problem: "Generic chatbots feel cold, fragmented, and forgetful across devices while failing to adapt tone to different domains.",
    solution: "Engineered 5 specialized persona mindsets (Developer, Creative, Tutor, Friendly, Professional) paired with serverless PostgreSQL state persistence and Web Speech API narration.",
    architecture: "React 19 (Netlify CDN) + Express Node.js Backend (Render) + Neon Serverless PostgreSQL + Google GenAI SDK + Web Audio API.",
    technologies: ["React 19", "TypeScript", "Tailwind CSS v4", "Express", "Node.js", "Neon PostgreSQL", "Gemini API", "Netlify"],
    keyFeatures: [
      "Low-latency Server-Sent Events (SSE) AI streaming",
      "Neon PostgreSQL cloud conversation history and feedback persistence",
      "5 distinct tailored persona mindsets (Developer, Tutor, Creative, Friendly, Executive)",
      "Native Web Speech dictation and voice readout synthesizer"
    ]
  },
  {
    id: "imanify",
    slug: "imanify",
    title: "Imanify (ኢማኒፋይ)",
    tagline: "Modern Full-Stack Islamic AI Assistant & Lifestyle Companion",
    category: "fullstack",
    role: "Creator & Full-Stack Architect",
    deployedUrl: "https://imanify.vercel.app",
    githubUrl: "https://github.com/Temkin236/Imanify",
    hostingPlatform: "Vercel",
    featured: true,
    highlightBadge: "Live on Vercel",
    coverImage: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1200&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1200&q=80",
        alt: "Imanify Portal Atmosphere",
        caption: "Spiritual companion combining ancient texts with modern responsive engineering"
      }
    ],
    description: "A comprehensive modern Islamic lifestyle platform featuring multi-lingual Quran services, authentic Azkar, accurate prayer times with geolocation and Qibla tracking, and an intelligent Islamic AI assistant.",
    problem: "Spiritual lifestyle tools are often ad-ridden, clunky, or lack modern multi-lingual accessibility and intelligent querying.",
    solution: "Crafted a serene, ad-free web application integrating precise mathematical prayer time calculations, audio Quran recitations, and AI-assisted spiritual inquiry.",
    architecture: "React + TypeScript + Tailwind CSS + Adhan.js Geolocation Engine + AI Query Pipeline + Vercel Edge Hosting.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Adhan API", "Geolocation", "Vercel"],
    keyFeatures: [
      "Full Holy Quran with multi-reciter audio and translations",
      "Precise astronomical prayer times with dynamic countdown timer",
      "Interactive Qibla compass with compass sensor orientation",
      "Authentic daily Azkar, supplications, and mood-based reflections"
    ]
  },
  {
    id: "task-management-full-project",
    slug: "taskflow",
    title: "TaskFlow",
    tagline: "Enterprise Smart Task & Agile Workflow Management Application",
    category: "fullstack",
    role: "Full-Stack Engineer",
    deployedUrl: "https://taskflow-demo.netlify.app",
    githubUrl: "https://github.com/Temkin236/task-management-full-project",
    hostingPlatform: "Netlify",
    featured: true,
    highlightBadge: "Interactive Demo",
    coverImage: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
    images: [
      {
        url: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
        alt: "Landing Page",
        caption: "Landing page and overview of TaskFlow agile task ecosystem"
      },
      {
        url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
        alt: "Dashboard",
        caption: "Comprehensive project metrics, task velocity, and completion tracking"
      },
      {
        url: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
        alt: "Task List",
        caption: "Fluid drag-and-drop Kanban and list views with multi-criteria filters"
      },
      {
        url: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        alt: "Mobile View",
        caption: "Touch-friendly responsive mobile experience"
      }
    ],
    description: "A modern, full-featured collaborative task management application engineered for agile teams to organize, track, and complete sprints efficiently.",
    problem: "Teams often suffer from overcomplicated, slow project management software that slows down velocity instead of speeding it up.",
    solution: "Designed a lightweight, highly responsive task tracking platform with instant status updates, drag-and-drop kanban boards, and priority tagging.",
    architecture: "React + TypeScript + Tailwind CSS + Lucide Icons + Responsive Grid Layout + Netlify Edge CDN.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Lucide React", "Netlify"],
    keyFeatures: [
      "Dynamic interactive Kanban board with instant state transitions",
      "Priority-based sorting and multi-tag categorisation",
      "Real-time productivity statistics and completion rate indicators",
      "Pixel-perfect mobile responsiveness with smooth touch interactions"
    ]
  },
  {
    id: "taskzen-todo-list",
    slug: "taskzen",
    title: "TaskZen",
    tagline: "Elegant Mindful Productivity & Distraction-Free Task Organizer",
    category: "tools",
    role: "Front-End Developer & UI Designer",
    deployedUrl: "https://fanciful-dragon-887077.netlify.app/",
    githubUrl: "https://github.com/Temkin236/TaskZen-todo-list",
    hostingPlatform: "Netlify",
    highlightBadge: "Mindful UI",
    coverImage: "https://github.com/user-attachments/assets/6f5e02b8-f88c-4d9d-9d1b-68d7a4c787d1",
    images: [
      {
        url: "https://github.com/user-attachments/assets/6f5e02b8-f88c-4d9d-9d1b-68d7a4c787d1",
        alt: "TaskZen Main Screen",
        caption: "Minimalist task manager emphasizing deep focus and clean task hierarchy"
      },
      {
        url: "https://github.com/user-attachments/assets/fb8490c0-e71a-4a51-9cb8-e6eb9c0ce5fa",
        alt: "TaskZen Active Tasks",
        caption: "Interactive category management with progress visualization"
      }
    ],
    description: "A beautifully crafted mindful task application that transforms daily routines into calm, focused accomplishments with gentle animations and intuitive controls.",
    problem: "Cluttered to-do apps cause decision paralysis and cognitive overload.",
    solution: "Built a distraction-free, zen-inspired interface featuring subtle micro-animations, localStorage persistence, and clear visual completion rewards.",
    architecture: "React + TypeScript + Tailwind CSS + Framer Motion + LocalStorage + Netlify.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Netlify"],
    keyFeatures: [
      "Distraction-free Zen Mode to focus on one objective at a time",
      "Smooth micro-interactions and tactile completion celebrations",
      "Categorized task grouping with priority color accents",
      "Zero-latency instant offline persistence"
    ]
  },
  {
    id: "infnova-challenge",
    slug: "infnova-challenge",
    title: "INFNOVA Engineering Challenge",
    tagline: "Pixel-Perfect Figma Implementation & Adaptive Interface",
    category: "fullstack",
    role: "Frontend Engineer",
    deployedUrl: "https://infnova-frontend-internship-enginee.vercel.app",
    githubUrl: "https://github.com/Temkin236/INFNOVA--Frontend-Internship-Engineering-Challenge",
    hostingPlatform: "Vercel",
    highlightBadge: "Pixel-Perfect Figma",
    coverImage: "https://github.com/user-attachments/assets/5620df71-3cc6-41bd-afdc-10395d62772f",
    images: [
      {
        url: "https://github.com/user-attachments/assets/5620df71-3cc6-41bd-afdc-10395d62772f",
        alt: "INFNOVA Challenge Hero UI",
        caption: "Strict 1-to-1 fidelity translation from Figma design specification"
      },
      {
        url: "https://github.com/user-attachments/assets/f9323a71-d1a3-4f75-9a80-fde89d61e2b6",
        alt: "INFNOVA Challenge Section",
        caption: "Fully responsive multi-breakpoint layout with semantic accessibility"
      }
    ],
    description: "A production-grade frontend implementation executed with strict 1:1 fidelity to Figma design blueprints for the INFNOVA Academy engineering internship challenge.",
    problem: "Translating intricate design systems into performant, accessible code without visual regression across mobile, tablet, and desktop viewports.",
    solution: "Architected reusable TypeScript components adhering strictly to design tokens, typography scales, and fluid layout responsiveness.",
    architecture: "React 19 + TypeScript + Vite + Tailwind CSS + Vercel Deployment.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Figma", "Vercel"],
    keyFeatures: [
      "100% design system alignment with exact spacing and typography tokens",
      "Accessible ARIA landmarks and keyboard navigation support",
      "Lighthouse performance rating of 98+ on mobile and desktop",
      "Seamless cross-browser rendering tested across Chrome, Safari, and Firefox"
    ]
  },
  {
    id: "weather-app",
    slug: "weather-app",
    title: "WeatherPulse",
    tagline: "Dynamic Atmospheric Intelligence & Real-Time Meteorological Radar",
    category: "tools",
    role: "Full-Stack Developer",
    deployedUrl: "https://weather-app-liart-eight-72.vercel.app",
    githubUrl: "https://github.com/Temkin236/weather-app",
    hostingPlatform: "Vercel",
    highlightBadge: "OpenWeather API",
    coverImage: "https://github.com/user-attachments/assets/81a4e513-dee8-4291-a309-b01e854bfc5c",
    images: [
      {
        url: "https://github.com/user-attachments/assets/81a4e513-dee8-4291-a309-b01e854bfc5c",
        alt: "WeatherPulse Live Dashboard",
        caption: "Atmosphere-reactive gradients and hourly meteorological breakdown"
      }
    ],
    description: "An animated, responsive weather application powered by the OpenWeather API with dynamic ambient backgrounds that adapt to live atmospheric conditions.",
    problem: "Weather dashboards frequently feel static, showing numbers without intuitive atmospheric visual cues.",
    solution: "Engineered weather-aware gradient shaders, 7-day temperature trends, wind velocity tracking, and instant global city autocomplete.",
    architecture: "Next.js (App Router) + TypeScript + Tailwind CSS + OpenWeather API + Radix UI + Vercel.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "OpenWeather API", "Radix UI", "Vercel"],
    keyFeatures: [
      "Atmosphere-aware dynamic gradients shifting from dawn to twilight to storm",
      "7-day detailed weather forecasting with precipitation probability",
      "Global city geolocation search with instant cached lookups",
      "Responsive metric/imperial unit switching with persistent user choice"
    ]
  },
  {
    id: "coeec-portal",
    slug: "coeec-portal",
    title: "COEEC Portal — ASTU",
    tagline: "Official Academic & Research Hub for the Center of Excellence",
    category: "fullstack",
    role: "Lead Frontend Developer",
    deployedUrl: "https://coeec.vercel.app",
    githubUrl: "https://github.com/Temkin236/COEEC",
    hostingPlatform: "Vercel",
    highlightBadge: "ASTU University",
    coverImage: "https://raw.githubusercontent.com/Temkin236/COEEC/main/public/home.jpg",
    images: [
      {
        url: "https://raw.githubusercontent.com/Temkin236/COEEC/main/public/home.jpg",
        alt: "COEEC Campus and Portal Overview",
        caption: "Center of Excellence in Electrical Communication & Engineering at ASTU"
      }
    ],
    description: "The digital gateway for Adama Science and Technology University's Center of Excellence in Electrical Communication & Engineering, connecting students, researchers, and global partners.",
    problem: "Departmental research, laboratory equipment schedules, and academic publications were fragmented across bulletin boards and local servers.",
    solution: "Built a centralized web portal unifying laboratory access, ongoing research publications, conference announcements, and student project archives.",
    architecture: "React + TypeScript + Tailwind CSS + Vite + Vercel Edge Network.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
    keyFeatures: [
      "Interactive laboratory and faculty directory",
      "Research publication index with downloadable abstracts",
      "Department news and seminar announcement feed",
      "Optimized for high performance on varying campus Wi-Fi bandwidths"
    ]
  },
  {
    id: "coeec-admin-dashboard",
    slug: "coeec-admin-dashboard",
    title: "COEEC Admin Dashboard",
    tagline: "Administrative Resource Management & Department Control Center",
    category: "fullstack",
    role: "Frontend Engineer",
    deployedUrl: "https://coeec-admin-dashboard.vercel.app",
    githubUrl: "https://github.com/Temkin236/COEEC_admin_dashboard",
    hostingPlatform: "Vercel",
    highlightBadge: "Admin Portal",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        alt: "COEEC Admin Analytics",
        caption: "Operational dashboard for department administrators and faculty heads"
      }
    ],
    description: "A secure, role-based administration dashboard empowering university department managers to oversee facility reservations, academic notices, and student rosters.",
    problem: "Manual spreadsheet tracking for departmental equipment and lab bookings caused scheduling overlaps and administrative overhead.",
    solution: "Developed an administrative control panel with analytical summary charts, member management tables, and instant status updates.",
    architecture: "React + TypeScript + Tailwind CSS + Recharts + Vercel.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Vercel"],
    keyFeatures: [
      "Role-based privilege management and user moderation",
      "Real-time laboratory scheduling calendar and approval pipeline",
      "Equipment maintenance log and resource tracking analytics",
      "Exportable CSV/Excel operational reports"
    ]
  },
  {
    id: "ethio-tebib-hospital",
    slug: "ethio-tebib-hospital",
    title: "Ethio Tebib Hospital Portal",
    tagline: "Modern Healthcare, Appointment & Clinic Service Platform",
    category: "fullstack",
    role: "Frontend Architect",
    deployedUrl: "https://visionary-toffee-0c9809.netlify.app/",
    githubUrl: "https://github.com/Temkin236/Ethio-tebib-hospital-moc-website",
    hostingPlatform: "Netlify",
    highlightBadge: "Healthcare Web",
    coverImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
        alt: "Ethio Tebib Hospital Medical Services",
        caption: "Accessible, trustworthy healthcare portal connecting patients with medical specialists"
      }
    ],
    description: "A patient-centric healthcare platform built for Ethio Tebib Hospital, featuring clinical service navigation, online appointment scheduling, and emergency contacts.",
    problem: "Patients face long wait times and confusing clinic schedules when trying to book doctor appointments by phone or in person.",
    solution: "Designed an intuitive, calming web experience with clear doctor specialties, instant appointment request flows, and verified departmental contacts.",
    architecture: "React + TypeScript + Tailwind CSS + Form Validation + Netlify CDN.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Netlify"],
    keyFeatures: [
      "Departmental service directory covering Cardiology, Pediatrics, Surgery, and Diagnostics",
      "Streamlined digital appointment booking interface",
      "Prominent emergency ambulance contact banners and clinic hours",
      "Fully responsive and optimized for mobile patients"
    ]
  },
  {
    id: "the-time-travel-fix",
    slug: "the-time-travel-fix",
    title: "The Time Travel Fix",
    tagline: "Creative Visual Remastering & Poster Modernization Challenge",
    category: "tools",
    role: "Frontend Developer & Creative Designer",
    deployedUrl: "https://the-time-travel-fix.vercel.app",
    githubUrl: "https://github.com/Temkin236/The-Time-Travel-Fix",
    hostingPlatform: "Vercel",
    highlightBadge: "CSEC Challenge",
    coverImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    images: [
      {
        url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
        alt: "The Time Travel Fix Visual Concept",
        caption: "Transforming vintage or unpolished graphics into modern, high-impact digital posters"
      }
    ],
    description: "A creative web challenge developed for CSEC Social Media Team, demonstrating visual transformation algorithms that take old or unformatted graphics and render them with modern editorial typography and polish.",
    problem: "Legacy club announcements and student organization posters lacked visual hierarchy, readability, and modern aesthetic impact.",
    solution: "Engineered an interactive comparison app showcasing before/after transformations, grid alignment systems, and contemporary typography rules.",
    architecture: "React + TypeScript + Tailwind CSS + CSS Grid + Vercel Deployment.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    keyFeatures: [
      "Interactive before/after visual comparison slider",
      "Editorial layout hierarchy analysis",
      "Pre-configured design presets for university social media announcements",
      "Lightweight, snappy performance with instant asset rendering"
    ]
  }
];

export const GITHUB_USER = {
  username: "Temkin236",
  name: "Temkin Abdulmelik",
  githubUrl: "https://github.com/Temkin236",
  avatarUrl: "https://avatars.githubusercontent.com/u/188710838?v=4",
  reposCount: 50,
  deployedCount: DEPLOYED_PROJECTS.length,
  bio: "AI & Full-Stack Developer | Passionate about building agentic systems, generative AI applications, and elegant, high-impact digital experiences."
};
