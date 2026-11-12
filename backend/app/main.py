from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.database import engine, Base
from app.api.public import router as public_router
from app.api.admin import router as admin_router
from app.seed import seed_database

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Ensure tables exist and seed verified data
    Base.metadata.create_all(bind=engine)
    seed_database()
    yield

app = FastAPI(
    title="Temkin's World API",
    description="Production-grade backend for Temkin Abdulmelik's digital universe & AI identity platform.",
    version="1.0.0",
    lifespan=lifespan
)

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In development allow all; can be restricted via settings
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.middleware("http")
async def add_security_headers(request, call_next):
    response = await call_next(request)
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    return response

# Mount routes
app.include_router(public_router)
app.include_router(admin_router)

@app.get("/api/health", tags=["system"])
def health_check():
    return {
        "status": "healthy",
        "service": "Temkin's World API",
        "environment": settings.ENVIRONMENT,
        "gemini_model": settings.GEMINI_MODEL,
        "ai_enabled": bool(settings.GEMINI_API_KEY)
    }

@app.get("/api/healthz", tags=["system"])
def deep_health_check():
    from app.database import SessionLocal
    from sqlalchemy import text
    import time

    db_status = "connected"
    latency_ms = 0
    try:
        start = time.time()
        with SessionLocal() as db:
            db.execute(text("SELECT 1"))
        latency_ms = round((time.time() - start) * 1000, 2)
    except Exception as e:
        db_status = f"unhealthy: {str(e)}"

    return {
        "status": "ok" if "unhealthy" not in db_status else "degraded",
        "timestamp": int(time.time()),
        "service": "Temkin's World Backend",
        "version": "1.0.0",
        "database": {
            "status": db_status,
            "ping_latency_ms": latency_ms
        },
        "features": {
            "gemini_ai": bool(settings.GEMINI_API_KEY),
            "model": settings.GEMINI_MODEL
        }
    }

