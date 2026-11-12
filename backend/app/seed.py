import os
from sqlalchemy.orm import Session
from app.database import engine, SessionLocal, Base
from app.models.entities import (
    Profile, Project, Technology, TimelineEvent, Photo, KnowledgeDoc, KnowledgeChunk
)
from app.services.rag_service import index_document

def seed_database():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()

    try:
        # 1. Profile / Identity
        profile = db.query(Profile).first()
        if not profile:
            profile = Profile(
                name="Temkin Abdulmelik",
                headline="AI & Full-Stack Developer | Agentic AI | Intelligent Automation | LLM Applications",
                supporting_headline="Building things that make intelligence feel magical.",
                bio="A curious engineering student and software developer passionate about building intelligent products, exploring emerging technologies, designing useful experiences, and turning ambitious ideas into working applications.",
                location="Adama, Ethiopia",
                university="Adama Science and Technology University",
                degree="B.Sc. Electronics and Communication Engineering (ECE)",
                graduation_year="2027",
                status_indicator="Available for ambitious AI & full-stack roles",
                github_url="https://github.com/Temkin236",
                linkedin_url="https://linkedin.com/in/temkin-abdulmelik-195582306",
                email="temkinabdulmelik@gmail.com",
                resume_url="/documents/Temkin_Abdulmelik_CV.pdf",
                avatar_url="/images/temkin-portrait.jpg",
                banner_url="/images/temkin-banner.png",
                interests=[
                    "Agentic AI",
                    "AI Agents & Automation",
                    "Generative AI",
                    "LLM Applications",
                    "RAG Architectures",
                    "Semantic Search",
                    "Full-Stack Engineering",
                    "Python Backend Systems",
                    "Modern Web Applications",
                    "Product Engineering"
                ],
                coffee_quotes=[
                    "Coffee first. Then we deploy.",
                    "One more cup. One more AI agent.",
                    "Debugging is just detective work with more coffee.",
                    "Warning: May spontaneously start building another project.",
                    "Fueling ambitious ideas, one cup at a time."
                ],
                personal_facts=[
                    {
                        "category": "The Engineer",
                        "title": "B.Sc. in ECE at ASTU",
                        "fact": "Pursuing Electronics and Communication Engineering at Adama Science and Technology University (Class of 2027), combining hardware foundation with software systems."
                    },
                    {
                        "category": "The AI Explorer",
                        "title": "1st Place Hackathon Winner",
                        "fact": "Led full-stack engineering for Meri AI with Team Divas at CSEC ASTU Hackathon v1.0, securing 1st place in a 24-hour sprint."
                    },
                    {
                        "category": "The Builder",
                        "title": "Document Intelligence & RAG",
                        "fact": "Engineered Knowledge AI featuring pgvector semantic search, citation grounding, and automated test-suite benchmarks with 100% passing checks."
                    },
                    {
                        "category": "The Team Player",
                        "title": "Development Mentor at CSEC ASTU",
                        "fact": "Mentors student developers in practical software development, Git workflows, and API architectures across campus."
                    },
                    {
                        "category": "The Curious Mind",
                        "title": "Outcome-Based Evaluation",
                        "fact": "Deeply interested in verifiable AI evaluation benchmarks, reproducible agent tasks, and automated hallucination prevention."
                    },
                    {
                        "category": "Beyond the Screen",
                        "title": "Coffee & Exploration",
                        "fact": "Believes great software begins with deep curiosity and genuine Ethiopian coffee."
                    }
                ],
                coffees_brewed_count=142,
                cheers_count=98
            )
            db.add(profile)
            db.commit()
            print("Seeded Profile.")

        # 2. Projects
        if db.query(Project).count() == 0:
            projects_data = [
                {
                    "slug": "meri-ai",
                    "title": "Meri AI",
                    "subtitle": "Hackathon-Winning AI Application (1st Place CSEC ASTU Hackathon v1.0)",
                    "category": "Hackathon & Agentic AI",
                    "description": "Led full-stack engineering of Meri AI, an intelligent application built during a rigorous 24-hour sprint at the CSEC ASTU Hackathon v1.0. Won First Place as part of Team Divas.",
                    "problem": "University students and community members needed rapid, context-aware information synthesis and automated assistance during dynamic campus and regional events.",
                    "solution": "Engineered a high-performance full-stack AI platform combining real-time LLM workflows, retrieval-augmented grounding, and clean user experience.",
                    "contribution": "Served as Lead Full-Stack Developer: architected the backend API, integrated vector retrieval workflows, and delivered the frontend interface under intense time constraints.",
                    "architecture": "React frontend communicating with a FastAPI service, PostgreSQL with pgvector for semantic retrieval, and LLM inference engine with streaming output.",
                    "tech_stack": ["React", "FastAPI", "PostgreSQL", "pgvector", "RAG", "Gemini API", "Tailwind CSS"],
                    "key_decisions": [
                        "Prioritized streaming responses to deliver immediate feedback to judges and users.",
                        "Employed pgvector for unified relational and vector data without additional infrastructure overhead."
                    ],
                    "challenges": "Delivering reliable retrieval grounding and responsive UI within strict 24-hour hackathon constraints.",
                    "achievements": "Awarded 1st Place at CSEC ASTU Hackathon v1.0; recognized by faculty and industry mentors.",
                    "github_url": "https://github.com/Temkin236",
                    "live_url": "https://github.com/Temkin236",
                    "cover_image": "/images/hackathon-award.jpg",
                    "screenshots": ["/images/hackathon-award.jpg", "/images/team-celebration.jpg"],
                    "featured": True,
                    "sort_order": 1
                },
                {
                    "slug": "knowledge-ai",
                    "title": "Knowledge AI",
                    "subtitle": "RAG & Document Intelligence Platform with Citations",
                    "category": "RAG & Semantic Search",
                    "description": "A production-grade document intelligence and question-answering platform featuring document ingestion (PDF, DOCX, TXT, MD), semantic retrieval, citation grounding, and automated evaluation suites.",
                    "problem": "Information extraction from varied document formats frequently suffers from hallucinated responses and missing source attribution.",
                    "solution": "Built an end-to-end RAG architecture with LangGraph agent workflows, pgvector similarity search, and automated abstention when context is insufficient.",
                    "contribution": "Architected the complete system: FastAPI backend, chunking algorithms, citation tracking, frontend chat interface, and benchmark evaluation suite.",
                    "architecture": "FastAPI + LangGraph + Gemini API + PostgreSQL pgvector. Client built with React and Tailwind CSS with real-time SSE streaming.",
                    "tech_stack": ["Python", "FastAPI", "LangGraph", "Gemini API", "PostgreSQL", "pgvector", "React", "Docker", "pytest"],
                    "key_decisions": [
                        "Implemented strict source citation tracking to guarantee every answer sentence maps to an extracted document chunk.",
                        "Built automated regression benchmark reporting 19 passing backend tests and 7 passing frontend tests."
                    ],
                    "challenges": "Handling complex multi-page PDF formatting and preserving semantic boundaries during text chunking.",
                    "achievements": "Achieved 100% passing test verification across 26 test suites with zero hallucination on out-of-domain benchmark questions.",
                    "github_url": "https://github.com/Temkin236/knowledge-ai",
                    "live_url": "https://github.com/Temkin236/knowledge-ai",
                    "cover_image": "/images/projects/knowledge-ai-landing.png",
                    "screenshots": ["/images/projects/knowledge-ai-landing.png", "/images/projects/knowledge-ai-citations.png"],
                    "featured": True,
                    "sort_order": 2
                },
                {
                    "slug": "astu-campus-navigator",
                    "title": "ASTU Campus Navigator",
                    "subtitle": "AI-Powered Geospatial Navigation & Campus Information",
                    "category": "Intelligent Systems & Geo-AI",
                    "description": "An interactive campus navigation and administrative information platform for Adama Science and Technology University combining semantic search with geospatial routing.",
                    "problem": "Navigating university campuses, finding academic departments, laboratories, and administrative offices is often confusing for new students and visitors.",
                    "solution": "Developed a unified portal pairing Leaflet/OpenStreetMap geospatial routing with an AI query engine grounded in official campus POI data.",
                    "contribution": "Designed the geospatial data model, integrated Voyage embeddings with Supabase pgvector, and implemented React map interactions.",
                    "architecture": "React frontend with Leaflet mapping, FastAPI backend, LangGraph agent for natural-language campus inquiries, and Supabase pgvector.",
                    "tech_stack": ["React", "FastAPI", "Gemini Streaming", "LangGraph", "Voyage Embeddings", "Supabase pgvector", "OpenStreetMap", "Leaflet"],
                    "key_decisions": [
                        "Adopted OpenStreetMap and Leaflet for lightweight, customizable vector map rendering without external API license friction.",
                        "Used hybrid search: spatial proximity filtering combined with semantic intent matching."
                    ],
                    "challenges": "Accurately calibrating local campus coordinates and ensuring smooth mobile responsiveness during active navigation.",
                    "achievements": "Successfully mapped key university landmarks, faculties, and laboratories with sub-second retrieval times.",
                    "github_url": "https://github.com/Temkin236",
                    "live_url": "https://github.com/Temkin236",
                    "cover_image": "/images/astu-seal.png",
                    "screenshots": ["/images/astu-seal.png", "/images/astu-workshop.jpg"],
                    "featured": True,
                    "sort_order": 3
                },
                {
                    "slug": "aura-ai",
                    "title": "AURA AI",
                    "subtitle": "Multi-Persona Conversational AI Companion",
                    "category": "Generative AI & Conversational UX",
                    "description": "A high-fidelity conversational AI platform featuring multiple distinct assistant personas, real-time token streaming, client-side persistence, and comprehensive test coverage.",
                    "problem": "Generic chatbot interfaces lack contextual persona alignment and frequently drop conversational momentum due to buffering latencies.",
                    "solution": "Created an adaptive multi-persona architecture with instant token-by-token streaming, custom system prompts, and local state persistence.",
                    "contribution": "Engineered full application from scratch: Express/Node backend, Gemini API streaming integration, and React/Tailwind frontend.",
                    "architecture": "Express.js API server bridging Gemini API streaming to a responsive React/Vite frontend using Server-Sent Events.",
                    "tech_stack": ["React", "Vite", "Tailwind CSS", "Express", "Gemini API", "TypeScript"],
                    "key_decisions": [
                        "Designed custom system prompt templates that preserve persona continuity across conversation turns.",
                        "Wrote 23 automated tests covering message rendering, stream handling, and persona switches."
                    ],
                    "challenges": "Gracefully managing streaming interruptions and maintaining fluid animations during high-speed token generation.",
                    "achievements": "100% test pass rate (23/23 tests) and seamless multi-persona dialogue flow.",
                    "github_url": "https://github.com/Temkin236/aura-ai",
                    "live_url": "https://github.com/Temkin236/aura-ai",
                    "cover_image": "/images/projects/aura-ai.png",
                    "screenshots": ["/images/projects/aura-ai.png"],
                    "featured": True,
                    "sort_order": 4
                },
                {
                    "slug": "deep-research-ai",
                    "title": "Deep Research AI",
                    "subtitle": "Multi-Agent Autonomous Technical Research System",
                    "category": "Agentic AI & Automation",
                    "description": "An autonomous multi-agent platform designed to decompose complex technical queries into research sub-tasks, gather multi-source evidence, and synthesize comprehensive analytical reports.",
                    "problem": "Synthesizing deep technical literature and architecture trade-offs manually requires hours of repetitive querying and note-taking.",
                    "solution": "Built a coordinated multi-agent workflow using LangGraph where planner, researcher, critic, and synthesizer agents collaborate autonomously.",
                    "contribution": "Engineered the agent state machine, search orchestration, reflection loops, and responsive research report UI.",
                    "architecture": "FastAPI + LangGraph multi-agent state graph + React interactive dashboard with real-time agent thought streaming.",
                    "tech_stack": ["Python", "LangGraph", "FastAPI", "React", "Gemini 2.5", "Docker"],
                    "key_decisions": [
                        "Implemented explicit verification and critic loops to filter out low-confidence research claims before final synthesis."
                    ],
                    "challenges": "Preventing agent execution loops and optimizing context windows across multi-step research plans.",
                    "achievements": "Generates structured research briefs with verified citations in under 60 seconds.",
                    "github_url": "https://github.com/Temkin236",
                    "live_url": "https://github.com/Temkin236",
                    "cover_image": "/images/projects/deep-research-ai.png",
                    "screenshots": ["/images/projects/deep-research-ai.png"],
                    "featured": False,
                    "sort_order": 5
                },
                {
                    "slug": "canary-ai",
                    "title": "Canary AI Benchmark Platform",
                    "subtitle": "Outcome-Based AI Agent Evaluation & Quality Assurance",
                    "category": "AI Evaluation & Infrastructure",
                    "description": "An automated testing and evaluation framework for assessing AI agent reliability, dataset leakages, and goal completion across engineering benchmarks.",
                    "problem": "Evaluating whether AI agents actually solve complex software engineering tasks requires reproducible, outcome-based verification rather than simple token similarity.",
                    "solution": "Built an execution sandbox and evaluation runner that verifies concrete file changes, test outputs, and exit codes.",
                    "contribution": "Designed the evaluation criteria, verification pipelines, and reviewer reporting dashboard.",
                    "architecture": "FastAPI execution engine + React reviewer dashboard with interactive diff viewers and benchmark leaderboard.",
                    "tech_stack": ["Python", "FastAPI", "pytest", "Docker", "React", "Tailwind CSS"],
                    "key_decisions": [
                        "Focused strictly on objective state verifications (e.g., passing unit tests, build checks) rather than fuzzy LLM-as-a-judge scoring."
                    ],
                    "challenges": "Ensuring deterministic environment isolation across arbitrary test runs.",
                    "achievements": "Validated multiple dataset splits with verifiable reproducible metrics.",
                    "github_url": "https://github.com/Temkin236",
                    "live_url": "https://github.com/Temkin236",
                    "cover_image": "/images/projects/canary-ai.png",
                    "screenshots": ["/images/projects/canary-ai.png"],
                    "featured": False,
                    "sort_order": 6
                },
                {
                    "slug": "echoes-of-the-lost-temple",
                    "title": "Echoes of the Lost Temple",
                    "subtitle": "Procedural 3D WebGL Adventure & Puzzle Engine",
                    "category": "Creative Technology & 3D Web",
                    "description": "A browser-based 3D adventure game built with Three.js featuring procedural dungeon generation, hieroglyphic gesture recognition puzzles, and synthesized Web Audio.",
                    "problem": "Showcase high-performance 3D graphics and interactive gameplay running smoothly in standard modern web browsers without heavy game engines.",
                    "solution": "Developed custom WebGL shaders, collision physics, gesture recognition algorithms, and procedural room placement with Three.js.",
                    "contribution": "Programmed the 3D graphics pipeline, rune unsealing mechanic, sentinel combat AI, and wrote 30 automated test suites for verification.",
                    "architecture": "Three.js rendering loop + Web Audio synthesis + Vite build pipeline with custom shader materials.",
                    "tech_stack": ["JavaScript", "Three.js", "Vite", "Web Audio API", "WebGL"],
                    "key_decisions": [
                        "Used procedural geometry and mathematical noise to create rich temple textures with negligible download payload."
                    ],
                    "challenges": "Maintaining a steady 60 FPS across both desktop and mobile web devices.",
                    "achievements": "30 passing verification test suites and zero external 3D asset dependencies.",
                    "github_url": "https://github.com/Temkin236",
                    "live_url": "https://github.com/Temkin236",
                    "cover_image": "/images/projects/echoes-temple.png",
                    "screenshots": ["/images/projects/echoes-temple.png"],
                    "featured": False,
                    "sort_order": 7
                },
                {
                    "slug": "astu-coans",
                    "title": "ASTU CoANS Portal",
                    "subtitle": "University College Administration & Laboratory Platform",
                    "category": "Full-Stack Web Systems",
                    "description": "A centralized institutional web platform for the College of Applied Natural Sciences at ASTU, supporting equipment inventories, departmental bulletins, and staff management.",
                    "problem": "Dispersed laboratory resources and manual paper records caused equipment scheduling conflicts and delayed student research.",
                    "solution": "Built a modular full-stack portal with role-based access control, equipment reservation, and document repositories.",
                    "contribution": "Engineered backend REST endpoints, Prisma relational models, and responsive React management screens.",
                    "architecture": "Node.js + Express + Prisma ORM + PostgreSQL database + React client with Swagger documentation.",
                    "tech_stack": ["React", "Node.js", "Express", "Prisma", "PostgreSQL", "Swagger"],
                    "key_decisions": [
                        "Standardized on OpenAPI / Swagger for clear API contracts between frontend and administrative endpoints."
                    ],
                    "challenges": "Implementing secure multi-role permissions for students, faculty heads, and lab technicians.",
                    "achievements": "Streamlined lab resource tracking and digital departmental notices across ASTU.",
                    "github_url": "https://github.com/Temkin236",
                    "live_url": "https://github.com/Temkin236",
                    "cover_image": "/images/projects/astu-coans.png",
                    "screenshots": ["/images/projects/astu-coans.png"],
                    "featured": False,
                    "sort_order": 8
                }
            ]
            for pdata in projects_data:
                db.add(Project(**pdata))
            db.commit()
            print(f"Seeded {len(projects_data)} Projects.")

        # 3. Technologies
        if db.query(Technology).count() == 0:
            tech_data = [
                # Agentic AI
                {"name": "LangGraph", "category": "Agentic AI", "description": "Stateful multi-actor agent orchestration framework with cyclic graphs.", "how_used": "Builds research agent loops, multi-persona state machines, and RAG query refinement workflows.", "related_projects": ["Knowledge AI", "Deep Research AI"], "icon": "cpu", "sort_order": 1},
                {"name": "Multi-Agent Systems", "category": "Agentic AI", "description": "Autonomous cooperative agents with specialized functional roles.", "how_used": "Coordinates planner, researcher, and critic agents for autonomous research synthesis.", "related_projects": ["Deep Research AI"], "icon": "bot", "sort_order": 2},
                {"name": "Tool Calling & Automation", "category": "Agentic AI", "description": "Structured tool execution and dynamic environment interaction.", "how_used": "Connects LLMs to search APIs, database querying tools, and calculation engines.", "related_projects": ["Knowledge AI", "ASTU Campus Navigator"], "icon": "terminal", "sort_order": 3},
                
                # Generative AI & LLMs
                {"name": "Gemini API", "category": "Generative AI", "description": "High-speed multimodal LLM with large context windows.", "how_used": "Powers conversational companions, streaming responses, and document synthesis.", "related_projects": ["Knowledge AI", "AURA AI", "Meri AI"], "icon": "sparkles", "sort_order": 4},
                {"name": "Prompt Engineering", "category": "Generative AI", "description": "System instruction design, few-shot prompting, and persona steering.", "how_used": "Enforces strict grounding, hallucination prevention, and tone consistency.", "related_projects": ["AURA AI", "Temkin's World AI"], "icon": "message-square", "sort_order": 5},
                {"name": "AI Evaluation & Testing", "category": "Generative AI", "description": "Automated verification of model accuracy, citations, and abstention.", "how_used": "Builds outcome-based benchmarks and pytest suites for hallucination checks.", "related_projects": ["Canary AI", "Knowledge AI"], "icon": "check-circle", "sort_order": 6},
                
                # RAG & Semantic Search
                {"name": "pgvector", "category": "RAG & Semantic Search", "description": "PostgreSQL vector similarity search extension.", "how_used": "Stores document chunk embeddings and executes cosine similarity queries.", "related_projects": ["Knowledge AI", "Meri AI", "ASTU Campus Navigator"], "icon": "database", "sort_order": 7},
                {"name": "Semantic Retrieval", "category": "RAG & Semantic Search", "description": "Dense vector retrieval coupled with keyword filtering.", "how_used": "Retrieves precise knowledge passages with source attribution metadata.", "related_projects": ["Knowledge AI", "Temkin's World"], "icon": "search", "sort_order": 8},
                {"name": "Voyage & Embeddings", "category": "RAG & Semantic Search", "description": "State-of-the-art embedding models for dense semantic search.", "how_used": "Generates 1536-dimensional embeddings for campus locations and documents.", "related_projects": ["ASTU Campus Navigator"], "icon": "layers", "sort_order": 9},

                # Python Backend
                {"name": "FastAPI", "category": "Python Backend", "description": "High-performance asynchronous Python web framework.", "how_used": "Primary backend framework for streaming AI endpoints, REST APIs, and auth services.", "related_projects": ["Knowledge AI", "Meri AI", "Temkin's World"], "icon": "zap", "sort_order": 10},
                {"name": "SQLAlchemy 2.0", "category": "Python Backend", "description": "Modern Python SQL toolkit and Object-Relational Mapper.", "how_used": "Manages schema models, relationships, and queries with type safety.", "related_projects": ["Knowledge AI", "Temkin's World"], "icon": "server", "sort_order": 11},
                {"name": "Pydantic v2", "category": "Python Backend", "description": "Fast data validation using Python type annotations.", "how_used": "Validates API request/response contracts and environment settings.", "related_projects": ["Knowledge AI", "Temkin's World"], "icon": "shield", "sort_order": 12},
                {"name": "pytest & Automation", "category": "Python Backend", "description": "Automated testing framework for Python systems.", "how_used": "Validates API behavior, citation accuracy, and database transactions.", "related_projects": ["Knowledge AI", "Canary AI"], "icon": "play", "sort_order": 13},

                # Frontend Engineering
                {"name": "React 19", "category": "Frontend Engineering", "description": "Modern component-based frontend framework for high-performance reactive applications.", "how_used": "Builds interactive user interfaces, custom design systems, and client-side application state.", "related_projects": ["Meri AI", "ASTU Campus Navigator", "Temkin's World", "AURA AI"], "icon": "code", "sort_order": 14},
                {"name": "TypeScript", "category": "Frontend Engineering", "description": "Typed superset of JavaScript providing compile-time correctness.", "how_used": "Ensures end-to-end type safety between backend schemas and UI components.", "related_projects": ["AURA AI", "Temkin's World"], "icon": "file-code", "sort_order": 15},
                {"name": "Tailwind CSS", "category": "Frontend Engineering", "description": "Utility-first CSS framework for modern responsive design.", "how_used": "Implements bespoke design systems, color tokens, and layout rhythm.", "related_projects": ["AURA AI", "Temkin's World"], "icon": "palette", "sort_order": 16},
                {"name": "Framer Motion", "category": "Frontend Engineering", "description": "Production-ready motion library for React.", "how_used": "Creates luxurious spring transitions, particle reveals, and interactive micro-interactions.", "related_projects": ["Temkin's World"], "icon": "activity", "sort_order": 17},

                # Databases & Infrastructure
                {"name": "PostgreSQL", "category": "Databases", "description": "Powerful open-source object-relational database system.", "how_used": "Primary transactional database for projects, users, and vector data.", "related_projects": ["Knowledge AI", "Meri AI", "ASTU CoANS"], "icon": "database", "sort_order": 18},
                {"name": "Docker", "category": "Infrastructure", "description": "Containerization platform for reproducible application deployment.", "how_used": "Containers for multi-service architectures and isolated evaluation runs.", "related_projects": ["Knowledge AI", "Canary AI"], "icon": "box", "sort_order": 19},
                {"name": "Linux & Bash", "category": "Infrastructure", "description": "Unix environment development, system automation, and scripting.", "how_used": "Daily driver operating environment, CI/CD scripts, and deployment automation.", "related_projects": ["All Projects"], "icon": "terminal", "sort_order": 20}
            ]
            for tdata in tech_data:
                db.add(Technology(**tdata))
            db.commit()
            print(f"Seeded {len(tech_data)} Technologies.")

        # 4. Timeline Events
        if db.query(TimelineEvent).count() == 0:
            events_data = [
                {
                    "year": "2023",
                    "title": "Engineering Journey Begins",
                    "role_or_context": "Adama Science and Technology University",
                    "description": "Began undergraduate studies in Electronics and Communication Engineering (ECE) at ASTU, establishing strong foundations in digital electronics, signal analysis, and computing.",
                    "category": "Education",
                    "highlight": True,
                    "sort_order": 1
                },
                {
                    "year": "2024",
                    "title": "Development Mentor at CSEC ASTU",
                    "role_or_context": "Computer Science & Engineering Club",
                    "description": "Appointed Development Mentor at CSEC ASTU. Began leading workshops, code clinics, and mentoring student developers across Git workflows, Python, and frontend basics.",
                    "category": "Mentorship",
                    "highlight": False,
                    "sort_order": 2
                },
                {
                    "year": "2025",
                    "title": "AI Project Contributor",
                    "role_or_context": "AfterQuery & Revelo",
                    "description": "Contributed to remote AI evaluation and software engineering projects, refining technical problem-solving, code verification, and high-quality benchmark outputs.",
                    "category": "Career",
                    "highlight": False,
                    "sort_order": 3
                },
                {
                    "year": "2026",
                    "title": "1st Place Winner — CSEC ASTU Hackathon v1.0",
                    "role_or_context": "Team Divas | Meri AI",
                    "description": "Led full-stack development of Meri AI during an intense 24-hour hackathon, taking First Place and winning the prestigious championship prize.",
                    "category": "Milestone",
                    "highlight": True,
                    "sort_order": 4
                },
                {
                    "year": "2026",
                    "title": "Knowledge AI & Autonomous RAG Systems",
                    "role_or_context": "Independent Engineering",
                    "description": "Architected and validated Knowledge AI, Canary AI benchmark runner, and Deep Research multi-agent platform, achieving 100% automated test verification.",
                    "category": "Engineering",
                    "highlight": True,
                    "sort_order": 5
                },
                {
                    "year": "2027",
                    "title": "Anticipated Graduation — B.Sc. ECE",
                    "role_or_context": "ASTU Class of 2027",
                    "description": "Completing B.Sc. in Electronics and Communication Engineering, stepping into leading AI and full-stack software product roles globally.",
                    "category": "Future",
                    "highlight": True,
                    "sort_order": 6
                }
            ]
            for edata in events_data:
                db.add(TimelineEvent(**edata))
            db.commit()
            print(f"Seeded {len(events_data)} Timeline Events.")

        # 5. Photos
        if db.query(Photo).count() == 0:
            photos_data = [
                {
                    "title": "Temkin Abdulmelik — Portrait",
                    "caption": "Professional portrait in cream double-breasted suit and maroon tie.",
                    "image_url": "/images/temkin-portrait.jpg",
                    "category": "Portrait",
                    "is_public": True,
                    "date_taken": "2026",
                    "sort_order": 1
                },
                {
                    "title": "Hackathon Award Ceremony",
                    "caption": "Celebrating 1st Place with Ethio telecom telebirr award check (ETB 400,000) during Cyber Security Month.",
                    "image_url": "/images/hackathon-award.jpg",
                    "category": "Milestones",
                    "is_public": True,
                    "date_taken": "November 2026",
                    "sort_order": 2
                },
                {
                    "title": "Team Victory Celebration",
                    "caption": "Cutting the celebration cake with teammates after the hackathon triumph at ASTU.",
                    "image_url": "/images/team-celebration.jpg",
                    "category": "Milestones",
                    "is_public": True,
                    "date_taken": "November 2026",
                    "sort_order": 3
                },
                {
                    "title": "Engineering Workshop Presentation",
                    "caption": "Presenting architectural concepts and GitHub Actions workflows with CSEC ASTU laptop at ASTU lab.",
                    "image_url": "/images/temkin-presenting.jpg",
                    "category": "Mentoring",
                    "is_public": True,
                    "date_taken": "October 2026",
                    "sort_order": 4
                },
                {
                    "title": "ASTU Code Workshop Mentoring",
                    "caption": "Mentoring student developers during interactive software engineering and blockchain session.",
                    "image_url": "/images/astu-workshop.jpg",
                    "category": "Mentoring",
                    "is_public": True,
                    "date_taken": "November 2026",
                    "sort_order": 5
                },
                {
                    "title": "CSEC ASTU Programming Bootcamp",
                    "caption": "Official programming bootcamp poster organized by CSEC ASTU community.",
                    "image_url": "/images/csec-poster.png",
                    "category": "Community",
                    "is_public": True,
                    "date_taken": "August 2026",
                    "sort_order": 6
                }
            ]
            for ph in photos_data:
                db.add(Photo(**ph))
            db.commit()
            print(f"Seeded {len(photos_data)} Photos.")

        # 6. Knowledge Center Document
        if db.query(KnowledgeDoc).count() == 0:
            doc_content = """# TEMKIN ABDULMELIK — VERIFIED PROFESSIONAL PROFILE & DOSSIER

## Personal Brand Identity
- Full Name: Temkin Abdulmelik
- Location: Adama, Ethiopia
- Current Education: Adama Science and Technology University (ASTU)
- Degree: B.Sc. in Electronics and Communication Engineering (ECE)
- Expected Graduation: 2027
- Professional Roles: AI & Full-Stack Developer, Agentic AI Engineer, Intelligent Automation Architect, LLM Applications Specialist.
- Email: temkinabdulmelik@gmail.com
- GitHub: https://github.com/Temkin236
- LinkedIn: https://linkedin.com/in/temkin-abdulmelik-195582306

## Professional Summary
AI-focused full-stack developer and Electronics & Communication Engineering undergraduate with 3+ years of hands-on software development experience. Builds and tests practical AI-enabled systems, backend services, and web applications. Experienced with Python, Linux-based development, Docker, API integration, RAG pipelines, LLM workflows, and automated testing. Interested in creating realistic, reproducible engineering tasks and outcome-based evaluations for AI agents.

## Relevant Experience
1. AI Project Contributor — AfterQuery & Revelo
- Completed project-based work through AfterQuery and Revelo, gaining practical exposure to software and AI-related tasks.
- Worked across technical problem-solving, reviewing outputs, and delivering work against task requirements.
- Brought a quality-focused approach to correctness, clear requirements, and verifiable results.

2. Independent Full-Stack & AI Developer
- Designed and implemented end-to-end web applications and AI-enabled systems, from architecture and API development through testing and deployment.
- Built retrieval-augmented generation workflows, semantic search features, streaming interfaces, and backend services.
- Used automated tests and measurable checks to validate functionality, retrieval behavior, citations, and application reliability.

3. Development Mentor — CSEC ASTU
- Support student developers through practical software-development activities and technical learning initiatives.
- Contribute to collaborative development work and communicate technical concepts clearly.

## Key Projects
1. Meri AI (Hackathon Project)
- Led full-stack development of an AI-powered application built with React, FastAPI, PostgreSQL/pgvector, and LLM/RAG workflows.
- Won 1st place at the CSEC ASTU Hackathon v1.0 as part of Team Divas.

2. Knowledge AI (RAG & Document Intelligence)
- Built a document-question-answering system using Python, FastAPI, LangGraph, Gemini, and PostgreSQL with pgvector.
- Implemented document ingestion for PDF, DOCX, TXT, and Markdown, with source-grounded answers and citations.
- Validated retrieval, abstention, and citation behavior through automated benchmarks (19 backend tests, 7 frontend tests passing).

3. ASTU Campus Navigator (AI-Powered Campus Information)
- Developed a campus navigation and information platform using React, FastAPI, Gemini streaming, LangGraph, Voyage embeddings, Supabase pgvector, and OpenStreetMap/Leaflet.
- Integrated semantic retrieval with campus points of interest, routing information, and an administrative portal.

4. AURA AI (Multi-Persona AI Assistant)
- Built a streaming AI chatbot using React, Vite, Tailwind CSS, Express, and the Gemini API.
- Implemented multiple assistant personas and client-side conversation persistence with 23/23 passing automated tests.

5. Deep Research AI (Multi-Agent Autonomous Research Platform)
- Multi-agent state machine coordinating query breakdown, automated search, and deep report synthesis.

6. Echoes of the Lost Temple (Procedural 3D Web Game)
- Browser-based 3D game using JavaScript, Three.js, and Vite, including procedural environments, gameplay systems, and synthesized audio (30 test suites verified).

## Technical Skills
- Languages: Python, JavaScript, TypeScript, SQL, Bash, C/C++ basics.
- Backend & APIs: FastAPI, Node.js, Express, REST APIs, Server-Sent Events (SSE), SQLAlchemy 2, Pydantic v2.
- Frontend: React 19, Vite, TypeScript, Tailwind CSS, Framer Motion, HTML5, Vanilla CSS.
- AI & Data: LangGraph, Gemini API, RAG architectures, pgvector, Voyage embeddings, Semantic Search, Prompt Engineering, AI Benchmarking.
- Databases: PostgreSQL, Supabase, SQLite, Redis.
- Engineering & DevOps: Linux, Docker, Git, GitHub, pytest, Automated Testing, Agile Pair Programming.
- Spoken Languages: Amharic (Native), English (Strong).
- Work Preference: Remote / flexible project-based full-stack & AI roles.
"""
            doc = KnowledgeDoc(
                title="Temkin Abdulmelik Official Dossier & Resume",
                category="Public Bio",
                file_name="Temkin_Abdulmelik_Profile.md",
                file_type="md",
                raw_content=doc_content,
                is_published=True,
                is_public=True,
                version=1
            )
            db.add(doc)
            db.commit()
            db.refresh(doc)
            
            # Index into chunks
            chunk_count = index_document(db, doc)
            print(f"Seeded KnowledgeDoc with {chunk_count} searchable chunks.")

    finally:
        db.close()

if __name__ == "__main__":
    seed_database()
