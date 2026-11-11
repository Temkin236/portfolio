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
