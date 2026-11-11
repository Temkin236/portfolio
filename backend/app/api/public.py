import random
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Query, Request
from fastapi.responses import StreamingResponse
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.entities import (
    Profile, Project, Technology, TimelineEvent, Photo, ContactMessage,
    QuestionLog, VisitorLog
)
from app.schemas.schemas import (
    ProfileSchema, ProjectSchema, TechnologySchema, TimelineEventSchema,
    PhotoSchema, ContactMessageCreateSchema, ContactMessageSchema,
    ChatRequestSchema
)
from app.services.rag_service import search_public_knowledge
from app.services.gemini_service import stream_gemini_response

router = APIRouter(prefix="/api", tags=["public"])

@router.get("/profile", response_model=ProfileSchema)
def get_public_profile(db: Session = Depends(get_db)):
    profile = db.query(Profile).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    return profile

@router.get("/projects", response_model=List[ProjectSchema])
def get_projects(
    category: Optional[str] = Query(None),
    featured: Optional[bool] = Query(None),
    db: Session = Depends(get_db)
):
    query = db.query(Project)
    if category and category.lower() != "all":
        query = query.filter(Project.category.ilike(f"%{category}%"))
    if featured is not None:
        query = query.filter(Project.featured == featured)
    return query.order_by(Project.sort_order.asc(), Project.id.asc()).all()

@router.get("/projects/{slug}", response_model=ProjectSchema)
def get_project_by_slug(slug: str, db: Session = Depends(get_db)):
    project = db.query(Project).filter(Project.slug == slug).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project

@router.get("/technologies", response_model=List[TechnologySchema])
def get_technologies(db: Session = Depends(get_db)):
    return db.query(Technology).order_by(Technology.sort_order.asc()).all()

@router.get("/timeline", response_model=List[TimelineEventSchema])
def get_timeline(db: Session = Depends(get_db)):
    return db.query(TimelineEvent).order_by(TimelineEvent.sort_order.asc()).all()

@router.get("/photos", response_model=List[PhotoSchema])
def get_public_photos(db: Session = Depends(get_db)):
    # Strict privacy filter: ONLY return photos where is_public is True!
    return db.query(Photo).filter(Photo.is_public == True).order_by(Photo.sort_order.asc()).all()

@router.post("/coffee/brew")
def brew_coffee(db: Session = Depends(get_db)):
    profile = db.query(Profile).first()
    if profile:
        profile.coffees_brewed_count = (profile.coffees_brewed_count or 0) + 1
        db.commit()
        db.refresh(profile)
        count = profile.coffees_brewed_count
        quotes = profile.coffee_quotes or [
            "Coffee first. Then we deploy.",
            "One more cup. One more AI agent.",
            "Debugging is just detective work with more coffee.",
            "Warning: May spontaneously start building another project.",
            "Fueling ambitious ideas, one cup at a time."
        ]
        quote = random.choice(quotes)
        return {
            "success": True,
            "coffees_brewed_count": count,
            "quote": quote,
            "message": "Brewing ritual complete! Here is your fresh cup of inspiration."
        }
    return {"success": False, "quote": "Coffee first. Then we deploy."}

@router.post("/cheers")
def give_cheers(db: Session = Depends(get_db)):
    profile = db.query(Profile).first()
    if profile:
        profile.cheers_count = (profile.cheers_count or 0) + 1
        db.commit()
        db.refresh(profile)
        return {
            "success": True,
            "cheers_count": profile.cheers_count,
            "message": "Cheers to building something amazing! 🥂✨"
        }
    return {"success": False}

@router.post("/contact", response_model=ContactMessageSchema)
def submit_contact_message(
    payload: ContactMessageCreateSchema,
    db: Session = Depends(get_db)
):
    msg = ContactMessage(
        name=payload.name,
        email=payload.email,
        subject=payload.subject,
        message=payload.message,
        inquiry_type=payload.inquiry_type
    )
    db.add(msg)
    db.commit()
    db.refresh(msg)
    return msg

@router.post("/chat")
async def chat_with_companion(
    payload: ChatRequestSchema,
    db: Session = Depends(get_db)
):
    # 1. Retrieve verified public knowledge chunks
    retrieved = search_public_knowledge(db, payload.message, top_k=4)
    
    # 2. Log question in background
    try:
        log = QuestionLog(
            question=payload.message,
            sources_cited=[{"title": r["title"], "category": r["category"]} for r in retrieved]
        )
        db.add(log)
        db.commit()
    except Exception:
        pass

    # 3. Stream SSE response
    return StreamingResponse(
        stream_gemini_response(payload.message, retrieved, payload.history),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no"
        }
    )
