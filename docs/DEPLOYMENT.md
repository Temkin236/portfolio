# Deployment Guide

This guide describes how to deploy **Temkin's World** to production environments.

## Architecture Split
- **Frontend**: Static SPA hosted on **Vercel** or **Cloudflare Pages**.
- **Backend**: Containerized FastAPI service on **Render**, **Railway**, or **Fly.io**.
- **Database**: Managed PostgreSQL with `pgvector` (e.g. Supabase, Neon, or Railway PostgreSQL).

---

## 1. Deploy Frontend (Vercel)

1. Connect the GitHub repository `https://github.com/Temkin236/portfolio` in Vercel.
2. Set Root Directory to `frontend`.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Environment Variables:
   - `VITE_API_URL`: `https://api.yourdomain.com` (or your Render backend URL).

---

## 2. Deploy Backend (Render / Docker)

1. Create a new Web Service on Render from the GitHub repo.
2. Select **Docker** or **Python** environment.
3. If using Python:
   - Root Directory: `backend`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
4. Environment Variables:
   - `DATABASE_URL`: `postgresql+psycopg2://user:password@host:port/dbname`
   - `GEMINI_API_KEY`: Your Google AI Studio API key
   - `ADMIN_SECRET_KEY`: A high-entropy random string for JWT encryption
   - `ENVIRONMENT`: `production`

---

## 3. Docker Compose (Self-Hosted / VPS)

To deploy both frontend and backend locally or on a virtual private server:
```bash
docker compose up -d --build
```
