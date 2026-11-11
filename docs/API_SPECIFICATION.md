# API SPECIFICATION
## Project: Temkin's World
**Author:** Temkin Abdulmelik & DeepMind Antigravity  
**Version:** 1.0.0  
**OpenAPI Standard:** 3.1.0  
**Base URL:** `http://localhost:8000/api` (Production: `https://api.temkin.dev/api`)  

---

### 1. General Principles & Protocols
- **Format:** JSON (`application/json`) for standard requests and responses.
- **AI Streaming:** Server-Sent Events (`text/event-stream`) for `/api/chat`.
- **Authentication:** Bearer JWT in the `Authorization` header (`Authorization: Bearer <token>`) for `/api/admin/*` endpoints.
- **CORS:** Controlled origins configured via `CORS_ORIGINS`.
- **Error Format:** Standard RFC 7807 compliant error payloads:
  ```json
  {
    "detail": "Description of the validation error or denial reason"
  }
  ```

---

### 2. Public Endpoints Specification

#### 2.1 Identity & Profile
- **`GET /api/profile`**
  - **Summary:** Retrieve Temkin's public profile, headlines, contact links, and discovery facts.
  - **Auth:** None (Public).
  - **Response 200:**
    ```json
    {
      "id": 1,
      "name": "Temkin Abdulmelik",
      "headline": "AI & Full-Stack Developer | Agentic AI | Intelligent Automation",
      "supporting_headline": "Building things that make intelligence feel magical.",
      "bio": "A curious engineering student and software developer passionate about building intelligent products...",
      "location": "Adama, Ethiopia",
      "university": "Adama Science and Technology University",
      "degree": "B.Sc. Electronics and Communication Engineering (ECE)",
      "graduation_year": "2027",
      "status_indicator": "Available for ambitious AI & full-stack roles",
      "github_url": "https://github.com/Temkin236",
      "linkedin_url": "https://linkedin.com/in/temkin-abdulmelik-195582306",
      "email": "temkinabdulmelik@gmail.com",
      "resume_url": "/documents/Temkin_Abdulmelik_CV.pdf",
      "avatar_url": "/images/temkin-portrait.jpg",
      "banner_url": "/images/temkin-banner.png",
      "interests": ["Agentic AI", "RAG Architectures", "Python Backend Systems"],
      "coffee_quotes": ["Coffee first. Then we deploy."],
      "personal_facts": [
        {
          "category": "The Engineer",
          "title": "B.Sc. in ECE at ASTU",
          "fact": "Pursuing Electronics and Communication Engineering..."
        }
      ],
      "coffees_brewed_count": 142,
      "cheers_count": 98
    }
    ```

#### 2.2 Projects & Case Studies
- **`GET /api/projects`**
  - **Query Parameters:**
    - `category` (optional string): Filter by category (e.g., `Agentic AI`, `Hackathon & Systems`).
    - `featured` (optional bool): Filter featured projects.
  - **Response 200:** Array of `ProjectSchema` objects.
- **`GET /api/projects/{slug}`**
  - **Summary:** Retrieve complete case-study data for a specific project.
  - **Response 200:**
    ```json
    {
      "id": 1,
      "slug": "meri-ai",
      "title": "Meri AI",
      "subtitle": "Hackathon-Winning AI Application (1st Place CSEC ASTU Hackathon v1.0)",
      "category": "Hackathon & Agentic AI",
      "description": "Led full-stack engineering of Meri AI...",
      "problem": "University students needed rapid context-aware information...",
      "solution": "Engineered an intelligent retrieval and action orchestration system...",
      "contribution": "Architected full-stack workflow, state coordination, and backend APIs...",
      "architecture": "FastAPI async pipeline coupled with dynamic prompt engineering...",
      "tech_stack": ["Python", "FastAPI", "React", "LLM APIs", "Tailwind CSS"],
      "key_decisions": ["Chosen FastAPI for low-latency async request execution"],
      "challenges": "Constrained 24-hour sprint environment requiring rapid prototyping",
      "achievements": "Secured 1st Place across 20+ university teams",
      "github_url": "https://github.com/Temkin236",
      "live_url": null,
      "cover_image": "/images/hackathon-award.jpg",
      "screenshots": ["/images/team-celebration.jpg"],
      "featured": true,
      "sort_order": 1
    }
    ```
  - **Response 404:** `{"detail": "Project not found"}`

#### 2.3 Interactive Experiences
- **`POST /api/coffee/brew`**
  - **Summary:** Trigger interactive brewing ritual, increment coffee counter, and receive an authentic developer quote.
  - **Response 200:**
    ```json
    {
      "success": true,
      "coffees_brewed_count": 143,
      "quote": "One more cup. One more AI agent.",
      "message": "Brewing ritual complete! Here is your fresh cup of inspiration."
    }
    ```
- **`POST /api/cheers`**
  - **Summary:** Trigger celebratory toast and increment global cheers counter.
  - **Response 200:**
    ```json
    {
      "success": true,
      "cheers_count": 99,
      "message": "Cheers to building something amazing! 🥂✨"
    }
    ```

#### 2.4 Contact Submission
- **`POST /api/contact`**
  - **Payload:**
    ```json
    {
      "name": "Jane Doe",
      "email": "jane@techcorp.com",
      "subject": "AI Engineering Role Opportunity",
      "message": "Hi Temkin, we were impressed by Meri AI and Knowledge AI...",
      "inquiry_type": "Career"
    }
    ```
  - **Response 200:** Returns created `ContactMessageSchema`.
  - **Response 422:** Validation error for invalid email or missing fields.

#### 2.5 AI Companion (Streaming RAG)
- **`POST /api/chat`**
  - **Payload:**
    ```json
    {
      "message": "What did Temkin build for the CSEC ASTU Hackathon?",
      "history": []
    }
    ```
  - **Headers:** `Accept: text/event-stream`
  - **Response 200 (Stream):**
    ```
    data: {"token": "Tem"}
    data: {"token": "kin "}
    data: {"token": "led "}
    data: {"token": "the full-stack engineering of Meri AI, "}
    ...
    data: {"citations": [{"title": "Meri AI Case Study", "category": "Hackathon"}]}
    data: [DONE]
    ```

---

### 3. Protected Administration Endpoints

#### 3.1 Authentication
- **`POST /api/admin/login`**
  - **Payload:** `{"username": "temkin", "password": "..."}`
  - **Response 200:** `{"access_token": "eyJhbGci...", "token_type": "bearer"}`
  - **Response 401:** `{"detail": "Incorrect username or password"}`

#### 3.2 Overview Analytics
- **`GET /api/admin/overview`**
  - **Headers:** `Authorization: Bearer <token>`
  - **Response 200:**
    ```json
    {
      "total_views": 1840,
      "total_projects": 8,
      "total_messages": 12,
      "unread_messages": 3,
      "coffees_brewed": 143,
      "cheers_given": 99,
      "total_ai_questions": 45,
      "recent_questions": []
    }
    ```

#### 3.3 Knowledge Management
- **`GET /api/admin/knowledge`** — List all uploaded knowledge documents.
- **`POST /api/admin/knowledge/upload`** — Multipart file upload (`.pdf`, `.docx`, `.txt`, `.md`) with title and public/private flag. Automatically parses, chunks, and creates vector embeddings.
- **`POST /api/admin/knowledge/reindex`** — Re-chunks and re-embeds all existing knowledge documents.

#### 3.4 Project & Gallery Management
- **`POST /api/admin/projects`** — Create new project.
- **`PUT /api/admin/projects/{id}`** — Update project details.
- **`DELETE /api/admin/projects/{id}`** — Delete project.
- **`GET /api/admin/gallery`** — List all gallery assets including private photos.
- **`POST /api/admin/gallery`** — Add new photo metadata.
- **`PUT /api/admin/gallery/{id}/visibility`** — Toggle `is_public` boolean.
