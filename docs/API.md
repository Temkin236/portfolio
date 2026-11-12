# Temkin's World — REST API Reference

The backend API is served at `/api` and provides OpenAPI documentation at `/docs`.

## Public Endpoints

### 1. Public Profile
- **Endpoint**: `GET /api/profile`
- **Description**: Returns verified public biography, education, contact URLs, and statistics.
- **Response**: `ProfileSchema`

### 2. Projects Catalog
- **Endpoint**: `GET /api/projects`
- **Query Params**: `category` (optional filter: `ai`, `fullstack`, `hackathon`)
- **Response**: `List[ProjectSchema]`

### 3. Project Detail
- **Endpoint**: `GET /api/projects/{slug}`
- **Response**: `ProjectSchema`

### 4. Technologies Constellation
- **Endpoint**: `GET /api/technologies`
- **Response**: `List[TechnologySchema]`

### 5. Interactive Coffee & Cheers
- **Endpoint**: `POST /api/coffee/brew`
  - Increments virtual brewed coffee counter, returns random developer quote.
- **Endpoint**: `POST /api/cheers`
  - Increments cheers counter.

### 6. AI Grounded Chat (Streaming SSE)
- **Endpoint**: `POST /api/chat`
- **Request Body**:
  ```json
  {
    "message": "Tell me about Temkin's hackathon project",
    "history": []
  }
  ```
- **Response Format**: `text/event-stream` (Server-Sent Events with tokens and cited sources).

### 7. Health & Diagnostics
- **Endpoint**: `GET /api/health`
- **Endpoint**: `GET /api/healthz` (Database connectivity & ping latency metrics).

## Admin Endpoints (Protected)

- `POST /api/admin/login` -> Returns JWT Bearer token
- `GET /api/admin/overview` -> Analytics summary
- `POST /api/admin/projects` -> Create / update project
- `POST /api/admin/knowledge/upload` -> Ingest document for RAG indexing
