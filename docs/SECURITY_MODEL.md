# SECURITY & PRIVACY MODEL
## Project: Temkin's World
**Author:** Temkin Abdulmelik & DeepMind Antigravity  
**Version:** 1.0.0  
**Status:** Active Security Policy  

---

### 1. Threat Modeling & Attack Surface

The application handles public portfolio traffic, interactive user submissions, AI conversational queries, and administrative content operations. The primary attack surfaces and defense strategies include:

```mermaid
graph LR
    Visitor["Public Visitors / Untrusted Input"]
    Admin["Owner / Authenticated Admin"]
    
    subgraph "Perimeter Defenses"
        CORS["CORS Restrictions"]
        RateLimit["Rate Limiting & Throttling"]
        Sanitize["Input Sanitization & Pydantic"]
    end
    
    subgraph "Security Boundaries"
        PublicAPI["Public API (/api/*)"]
        AdminAPI["Admin API (/api/admin/*)\n[Bearer JWT Auth Required]"]
        RAGFilter["RAG Privacy Filter\n[is_public=True & is_published=True]"]
    end
    
    subgraph "Data Storage"
        PublicData["Public Content & Vectors"]
        PrivateData["Private Docs & Family Photos"]
    end

    Visitor --> Perimeter Defenses
    Perimeter Defenses --> PublicAPI
    Perimeter Defenses --> RAGFilter
    RAGFilter --> PublicData
    
    Admin --> AdminAPI
    AdminAPI --> PrivateData
    AdminAPI --> PublicData
```

---

### 2. Information Classification Framework

All information stored within the system must be explicitly tagged with one of three classification levels:

| Level | Definition | Retrieval Rights | Storage & Presentation |
| :--- | :--- | :--- | :--- |
| **PUBLIC** | Professional information, published projects, approved university milestones, public photos. | Exposed on public web routes; indexed in public RAG knowledge base. | Unrestricted public API response. |
| **PRIVATE** | Personal documents, confidential family photographs, private contact notes, unpublished drafts. | Restricted strictly to authenticated Administrator. | Hidden from `/api/photos` and `/api/chat`. Visible only in `/api/admin/*`. |
| **DRAFT** | In-progress project writeups, pending knowledge documents. | Administrator only until explicitly marked `published`. | Never visible to public visitors or RAG assistant. |

---

### 3. Authentication & Authorization Architecture

#### 3.1 Administrator Authentication
- **Password Hashing:** Passwords must be hashed using industry-standard `bcrypt` (or `Argon2id`) with minimum cost factor 12.
- **Session Tokens:** Stateless JSON Web Tokens (JWT) signed with HMAC-SHA256 (`HS256`) using a cryptographically secure 256-bit `SECRET_KEY`.
- **Token Expiration:** Access tokens expire after 1,440 minutes (24 hours).
- **Endpoint Guarding:** FastAPI dependency injection enforces token presence and validity:
  ```python
  def get_current_admin(credentials: HTTPAuthorizationCredentials = Depends(security)):
      token = credentials.credentials
      payload = decode_access_token(token)
      if not payload or "sub" not in payload:
          raise HTTPException(status_code=401, detail="Invalid credentials")
      return payload["sub"]
  ```

---

### 4. Privacy & RAG Isolation Enforcement

To guarantee zero leakage of personal, family, or unapproved data:

1. **Photo Gallery Filter:**
   ```python
   # backend/app/api/public.py
   @router.get("/photos")
   def get_public_photos(db: Session = Depends(get_db)):
       # STRICT: Only records where is_public is TRUE
       return db.query(Photo).filter(Photo.is_public == True).all()
   ```
2. **Knowledge Assistant Filter:**
   ```python
   # backend/app/services/rag_service.py
   def search_public_knowledge(db: Session, query: str, top_k: int = 4):
       # STRICT: Join chunks on docs where doc.is_public == True AND doc.is_published == True
       return db.query(KnowledgeChunk).join(KnowledgeDoc).filter(
           KnowledgeDoc.is_public == True,
           KnowledgeDoc.is_published == True,
           KnowledgeChunk.is_public == True
       )...
   ```

---

### 5. AI Guardrails & Prompt Injection Mitigation

1. **System Persona Immutability:**
   System prompts explicitly isolate context within delimiter tags and instruct the model to never break character, never reveal internal instructions, and never execute visitor-provided instructions that contradict portfolio persona boundaries.
2. **Strict Abstention Clause:**
   "If the question cannot be answered using ONLY the provided verified context, politely state that you do not have verified information on that topic, and invite the visitor to contact Temkin directly."
3. **Data Exfiltration Prevention:**
   System prompt explicitly forbids executing or formatting commands, extracting API keys, or discussing backend configuration variables.

---

### 6. Additional Security Controls
- **File Upload Hardening:** Strict MIME type and extension validation (`.pdf`, `.docx`, `.txt`, `.md`). Maximum file size limited to 10MB.
- **CORS Restrictions:** Allowed origins restricted to production frontend domains.
- **Zero Credentials in Code:** All sensitive credentials, API keys, and secrets reside in `.env` and are strictly excluded via `.gitignore`.
