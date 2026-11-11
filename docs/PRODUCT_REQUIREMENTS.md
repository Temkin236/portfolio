# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Project: Temkin's World
**Owner:** Temkin Abdulmelik  
**Version:** 1.0.0  
**Status:** Approved / Active Baseline  
**Date:** November 2026  

---

### 1. Executive Summary & Vision
Temkin's World is a premium personal portfolio, digital identity platform, and AI-powered knowledge system built for Temkin Abdulmelik—an Electronics and Communication Engineering student at Adama Science and Technology University (ASTU) specializing in Agentic AI, Large Language Model (LLM) applications, RAG architectures, and Python full-stack engineering.

The platform transcends traditional static resume websites. It operates as a living digital universe combining:
1. **An Editorial Personal Portfolio:** Showcasing verified engineering projects, technical milestones, and academic leadership.
2. **Interactive Personal Storytelling:** Engaging interactive discovery modules ("Get to Know Temkin", Coffee Brewing Ritual, Celebratory Cheers, Easter Egg Terminal).
3. **An Intelligent AI Portfolio Companion:** A grounded RAG assistant powered by Google Gemini and vector retrieval, answering questions strictly from verified public knowledge documents.
4. **A Secure Private Administration Studio:** A full-featured CMS enabling the owner to curate, publish, and manage all content, photos, and knowledge documents without touching source code.
5. **A Secure Contact & Collaboration Gateway:** A validated communication hub connecting recruiters, engineering collaborators, and students with spam defense and storage.

---

### 2. Core Product Principles
Every architectural and visual decision adheres to these non-negotiable principles:
- **Professional before decorative:** Aesthetics must elevate technical authority.
- **Personal before generic:** Highlights authentic voice, Ethiopian coffee culture, and ASTU background.
- **Functional before animated:** Animations serve spatial orientation and delightful feedback, never obstructing usability.
- **Secure before publicly accessible:** Strict isolation of private assets and administrative interfaces.
- **Evidence-based before impressive-looking:** Zero fabrication of metrics, client work, or skills.
- **Maintainable before unnecessarily complicated:** Clean abstractions, type safety, and predictable code organization.
- **Responsive before desktop-only:** Flawless usability across mobile, tablet, and desktop form factors.
- **Accessible before visually experimental:** WCAG 2.1 AA compliant contrast, keyboard navigation, and reduced-motion support.

---

### 3. Verified Initial Seed Information
All platform content is anchored in verified facts:
- **Name:** Temkin Abdulmelik
- **Location:** Adama, Ethiopia
- **University:** Adama Science and Technology University (ASTU)
- **Degree:** B.Sc. in Electronics and Communication Engineering (ECE)
- **Expected Graduation:** 2027
- **Professional Focus:** AI & Full-Stack Developer | Agentic AI | RAG Architectures | Python Backend Engineering
- **Key Accounts:**
  - GitHub: [https://github.com/Temkin236](https://github.com/Temkin236)
  - LinkedIn: [https://www.linkedin.com/in/temkin-abdulmelik-195582306](https://www.linkedin.com/in/temkin-abdulmelik-195582306)
  - Email: [temkinabdulmelik@gmail.com](mailto:temkinabdulmelik@gmail.com)
- **Signature Projects:**
  1. **Meri AI:** 1st Place Winner at CSEC ASTU Hackathon v1.0 (24-hour sprint with Team Divas).
  2. **Knowledge AI:** Advanced RAG knowledge assistant with pgvector and verifiable citations.
  3. **AURA AI:** Adaptive multi-persona conversational platform with dynamic response steering.
  4. **ASTU Campus Navigator:** AI-powered spatial navigation platform for university students.
  5. **Deep Research AI:** Multi-agent autonomous research system decomposing complex inquiries.
  6. **Tech Research AI:** Curated AI technology trends analyzer and paper synthesis platform.
  7. **ASTU CoANS:** Digital department platform for College of Applied Natural Sciences.

---

### 4. User Personas & Use Cases

#### Persona 1: Senior Technical Recruiter / Hiring Manager
- **Goal:** Quickly assess technical depth, actual code contributions, problem-solving ability, and cultural fit.
- **Key Flows:** Explores Hero, navigates to featured projects, reviews project case studies (architecture, key decisions, challenges), downloads resume, and initiates contact.

#### Persona 2: AI Engineering Collaborator / Hackathon Peer
- **Goal:** Understand Temkin's architectural skills in Agentic AI, RAG, and Python backends for potential collaboration.
- **Key Flows:** Tests AI Companion with technical questions, explores Tech Constellation, inspects GitHub repositories, and triggers the Cheers celebration.

#### Persona 3: University Student / Mentee at ASTU
- **Goal:** Learn from Temkin's journey, understand project setups, and get mentorship resources.
- **Key Flows:** Reviews Engineering Journey timeline, navigates university photo gallery, and explores learning paths.

#### Persona 4: Temkin Abdulmelik (Administrator & Owner)
- **Goal:** Effortlessly update portfolio data, upload new resumes/documents for AI ingestion, view message inquiries, and monitor analytics without code deploys.
- **Key Flows:** Logs into Admin Studio with JWT auth, edits profile fields, creates/edits projects, uploads knowledge documents for automated chunking and indexing, reviews contact submissions.

---

### 5. Detailed Functional Requirements

#### 5.1 Public Portfolio Experience
- **FR-PUB-01: Hero Section:** Editorial typography, live status indicator, primary CTAs (View Projects, Contact, Resume Download, AI Assistant, Coffee Ritual), social links, organic animated portrait frame.
- **FR-PUB-02: Get to Know Temkin:** Interactive 6-dimension discovery cards (The Engineer, The AI Explorer, The Curious Mind, The Team Player, The Builder, Beyond the Screen) with interactive quiz.
- **FR-PUB-03: Project Universe:** Filterable showcase by category (All, Agentic AI, Full-Stack & Web, Hackathon & Systems) and technology. Project cards display problem, solution, tech tags, GitHub/Live links.
- **FR-PUB-04: Project Case Studies (`/projects/[slug]`):** In-depth case studies with background, architectural breakdown, challenges, key decisions, screenshots, and verifiable outcomes.
- **FR-PUB-05: Technology Constellation:** Grouped interactive grid (Agentic AI & LLMs, Python & Backend, Frontend & Design, Databases & Storage, DevOps & Tools) linking technologies directly to projects where they were utilized.
- **FR-PUB-06: Engineering Journey Timeline:** Chronological timeline tracking academic, hackathon, and technical milestones.
- **FR-PUB-07: Photo & Memory Gallery:** Masonry photo gallery with categories (Milestones, Hackathons, Campus Life), captions, and modal lightboxes. Strict privacy filtering ensures only public photos are visible.
- **FR-PUB-08: Contact & Inquiries:** Validated submission form with name, email, subject, inquiry category, and message. Includes spam protection, backend validation, and persistent storage.

#### 5.2 Personality & Delight Experiences
- **FR-EXP-01: Coffee Experience:** Interactive brewing simulation with animated cup, rising steam particles, session/database counter, and curated developer quotes. Fully manageable via Admin.
- **FR-EXP-02: Cheers Celebration:** Celebratory toast interaction with glass icon, floating celebratory sparkles/confetti, counter, and customizable messages.
- **FR-EXP-03: Easter Egg Terminal (Ctrl+K / Cmd+K):** Frontend-only simulated CLI terminal with commands: `help`, `about`, `projects`, `skills`, `coffee`, `contact`, `clear`. Zero server execution risk.

#### 5.3 Personal AI Assistant (RAG)
- **FR-AI-01: Grounded Q&A:** Answers user queries about Temkin's education, projects, skills, and background strictly based on verified public knowledge documents.
- **FR-AI-02: Verifiable Citations:** Returns citation pills linking to specific source documents.
- **FR-AI-03: Strict Abstention:** Explicitly admits lack of information when user queries cannot be grounded in context, preventing hallucinations.
- **FR-AI-04: Privacy Boundary:** Content marked as `is_public=False` or `is_published=False` is never chunked or retrieved.
- **FR-AI-05: Real-time Streaming:** Token-by-token streaming using Server-Sent Events (SSE).

#### 5.4 Private Administration Platform
- **FR-ADM-01: Authentication:** Secure login using bcrypt/Argon2id password verification and signed JWT bearer tokens.
- **FR-ADM-02: Overview Analytics:** Real metrics dashboard tracking message count, unread count, project count, coffee brews, cheers count, and AI question logs.
- **FR-ADM-03: Profile Management:** Live updates to headlines, bio, contact links, coffee quotes, and discovery facts.
- **FR-ADM-04: Project Management:** Full CRUD operations for projects, including markdown fields, tech stack tags, and cover/screenshot URLs.
- **FR-ADM-05: Gallery Management:** Photo uploads, metadata editing, and instant privacy toggles (`is_public` true/false).
- **FR-ADM-06: Knowledge Center:** Upload documents (.docx, .pdf, .txt, .md), preview extracted text, trigger automated chunking and vector indexing, and manage publication states.
- **FR-ADM-07: Inquiries Management:** Inbox of incoming contact submissions with read/unread statuses and response workflows.

---

### 6. Non-Functional Requirements
- **Performance:** First Contentful Paint (FCP) < 1.2s, Largest Contentful Paint (LCP) < 2.5s, Cumulative Layout Shift (CLS) < 0.05.
- **Security:** Strict separation of public vs admin endpoints; rate-limiting on chat and contact forms; OWASP Top 10 compliance; sanitized markdown.
- **Accessibility:** WCAG 2.1 AA compliant color contrast; screen-reader accessible form labels; keyboard focus traps in modal dialogs; `prefers-reduced-motion` compliance.
- **SEO & Discoverability:** Dynamic OpenGraph meta tags, JSON-LD Person and Project schemas, dynamic sitemap.xml, robots.txt.
