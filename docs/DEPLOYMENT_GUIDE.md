# PRODUCTION DEPLOYMENT GUIDE
## Project: Temkin's World
**Author:** Temkin Abdulmelik & DeepMind Antigravity  
**Version:** 1.0.0  
**Target Environments:** Vercel (Frontend) + Render/Railway (Backend) + Supabase (PostgreSQL & Storage)  

---

### 1. Infrastructure Architecture

```
                    ┌─────────────────────────┐
                    │   Custom Domain (HTTPS) │
                    │      temkin.world       │
                    └────────────┬────────────┘
                                 │
           ┌─────────────────────┴─────────────────────┐
           ▼                                           ▼
┌──────────────────────┐                    ┌──────────────────────┐
│   Vercel Edge CDN    │                    │ Render / Railway     │
│   Next.js Frontend   │──[REST & SSE API]─►│ FastAPI Backend      │
│   (App Router SSR)   │                    │ (Python 3.12 Docker) │
└──────────────────────┘                    └──────────┬───────────┘
                                                       │
                                            ┌──────────┴───────────┐
                                            ▼                      ▼
                               ┌─────────────────────────┐  ┌─────────────┐
                               │  Supabase PostgreSQL    │  │  Google     │
                               │  (pgvector enabled)     │  │  Gemini API │
                               └─────────────────────────┘  └─────────────┘
```

---

### 2. Frontend Deployment (Vercel)

1. Connect GitHub repository to **Vercel**.
2. Configure project settings:
   - **Root Directory:** `frontend`
   - **Framework Preset:** `Next.js`
   - **Build Command:** `next build`
   - **Output Directory:** `.next`
3. Configure Environment Variables in Vercel:
   ```env
   NEXT_PUBLIC_API_URL=https://api.temkin.world
   ```
4. Deploy branch `master` / `main`.

---

### 3. Backend Deployment (Render or Railway)

#### 3.1 Dockerfile (`backend/Dockerfile`)
```dockerfile
FROM python:3.12-slim

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    curl \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8000/api/health || exit 1

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

#### 3.2 Environment Variables (Render/Railway)
```env
ENVIRONMENT=production
PORT=8000
HOST=0.0.0.0
LOG_LEVEL=INFO

DATABASE_URL=postgresql://postgres.xxx:xxx@aws-0-region.pooler.supabase.com:6543/postgres?sslmode=require
SECRET_KEY=generate_high_entropy_random_32_character_string
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=1440

ADMIN_USERNAME=temkin
ADMIN_PASSWORD_HASH=$2b$12$...

GEMINI_API_KEY=AIzaSy...
GEMINI_MODEL=gemini-2.5-flash

CORS_ORIGINS=https://temkin.world,https://www.temkin.world
```

---

### 4. Database Setup & Migrations (Supabase)

1. Create a new Supabase project in the desired region.
2. In the Supabase SQL Editor, enable the `pgvector` extension:
   ```sql
   CREATE EXTENSION IF NOT EXISTS vector;
   ```
3. Run database migrations:
   ```bash
   cd backend
   alembic upgrade head
   ```
4. Seed verified initial data:
   ```bash
   PYTHONPATH=. python app/seed.py
   ```

---

### 5. Health Check & Monitoring
- **Health Endpoint:** `GET https://api.temkin.world/api/health`
  - Expected Response: `{"status": "healthy", "service": "Temkin's World API", ...}`
- **Logging:** Structured logs printed to stdout/stderr captured by Render/Railway logs viewer.
