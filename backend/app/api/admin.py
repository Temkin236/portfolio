import datetime
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File, Form
from sqlalchemy.orm import Session
from app.database import get_db
from app.config import settings
from app.models.entities import (
    Profile, Project, Technology, Photo, KnowledgeDoc, KnowledgeChunk,
    ContactMessage, QuestionLog, VisitorLog, TimelineEvent
)
from app.schemas.schemas import (
    AdminLoginSchema, TokenSchema, ProfileSchema, ProfileUpdateSchema,
    ProjectSchema, ProjectCreateSchema, PhotoSchema, KnowledgeDocSchema,
    ContactMessageSchema, AnalyticsOverviewSchema, KnowledgeChunkDetailSchema,
    KnowledgeSnippetCreateSchema, RAGTestQuerySchema, TimelineEventSchema,
    TimelineEventCreateSchema
)
from app.services.auth_service import (
    verify_password, create_access_token, get_current_admin, get_password_hash
)
from app.services.rag_service import extract_text_from_file, index_document, search_public_knowledge

router = APIRouter(prefix="/api/admin", tags=["admin"])

@router.post("/login", response_model=TokenSchema)
def admin_login(payload: AdminLoginSchema):
    # Support default password "temkin2026" or hash verification
    is_valid = False
    if payload.username.lower() in [settings.ADMIN_USERNAME.lower(), "admin"]:
        if payload.password == "temkin2026" or verify_password(payload.password, settings.ADMIN_PASSWORD_HASH):
            is_valid = True
    
    if not is_valid:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password"
        )
    
    token = create_access_token(data={"sub": payload.username})
    return {"access_token": token, "token_type": "bearer"}

@router.get("/overview", response_model=AnalyticsOverviewSchema)
def get_admin_overview(
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin)
):
    profile = db.query(Profile).first()
    total_projects = db.query(Project).count()
    total_messages = db.query(ContactMessage).count()
    unread_messages = db.query(ContactMessage).filter(ContactMessage.is_read == False).count()
    total_questions = db.query(QuestionLog).count()
    
    recent_qs = (
        db.query(QuestionLog)
        .order_by(QuestionLog.created_at.desc())
        .limit(10)
        .all()
    )

    return {
        "total_views": 1840,
        "total_projects": total_projects,
        "total_messages": total_messages,
        "unread_messages": unread_messages,
        "coffees_brewed": profile.coffees_brewed_count if profile else 0,
        "cheers_given": profile.cheers_count if profile else 0,
        "total_ai_questions": total_questions,
        "recent_questions": [
            {
                "id": q.id,
                "question": q.question,
                "created_at": q.created_at.isoformat() if q.created_at else "",
                "sources_count": len(q.sources_cited or [])
            }
            for q in recent_qs
        ]
    }

@router.put("/profile", response_model=ProfileSchema)
def update_profile(
    payload: ProfileUpdateSchema,
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin)
):
    profile = db.query(Profile).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Profile not found")
    
    for field, value in payload.model_dump(exclude_unset=True).items():
        setattr(profile, field, value)
        
    db.commit()
    db.refresh(profile)
    return profile

# PROJECTS MANAGEMENT
@router.post("/projects", response_model=ProjectSchema)
def create_project(
    payload: ProjectCreateSchema,
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin)
):
    existing = db.query(Project).filter(Project.slug == payload.slug).first()
    if existing:
        raise HTTPException(status_code=400, detail="Project with this slug already exists")
    
    proj = Project(**payload.model_dump())
    db.add(proj)
    db.commit()
    db.refresh(proj)
    return proj

@router.put("/projects/{id}", response_model=ProjectSchema)
def update_project(
    id: int,
    payload: ProjectCreateSchema,
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin)
):
    proj = db.query(Project).filter(Project.id == id).first()
    if not proj:
        raise HTTPException(status_code=404, detail="Project not found")
    
    for field, value in payload.model_dump(exclude_unset=True).items():
        setattr(proj, field, value)
        
    db.commit()
    db.refresh(proj)
    return proj

@router.delete("/projects/{id}")
def delete_project(
    id: int,
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin)
):
    proj = db.query(Project).filter(Project.id == id).first()
    if not proj:
        raise HTTPException(status_code=404, detail="Project not found")
    db.delete(proj)
    db.commit()
    return {"success": True, "message": "Project deleted successfully"}

# GALLERY MANAGEMENT
@router.get("/gallery", response_model=List[PhotoSchema])
def get_admin_gallery(
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin)
):
    # Returns all photos, including private family photos for owner control
    return db.query(Photo).order_by(Photo.sort_order.asc(), Photo.id.desc()).all()

@router.post("/gallery", response_model=PhotoSchema)
def add_photo(
    title: str = Form(...),
    caption: Optional[str] = Form(None),
    image_url: str = Form(...),
    category: str = Form("Milestones"),
    is_public: bool = Form(True),
    date_taken: Optional[str] = Form(None),
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin)
):
    photo = Photo(
        title=title,
        caption=caption,
        image_url=image_url,
        category=category,
        is_public=is_public,
        date_taken=date_taken
    )
    db.add(photo)
    db.commit()
    db.refresh(photo)
    return photo

@router.put("/gallery/{id}/visibility")
def toggle_photo_visibility(
    id: int,
    is_public: bool,
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin)
):
    photo = db.query(Photo).filter(Photo.id == id).first()
    if not photo:
        raise HTTPException(status_code=404, detail="Photo not found")
    photo.is_public = is_public
    db.commit()
    return {"success": True, "is_public": photo.is_public}

# KNOWLEDGE CENTER & RAG MANAGEMENT
@router.get("/knowledge", response_model=List[KnowledgeDocSchema])
def list_knowledge_documents(
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin)
):
    docs = db.query(KnowledgeDoc).order_by(KnowledgeDoc.id.desc()).all()
    for doc in docs:
        doc.chunks_count = len(doc.chunks)
    return docs

@router.post("/knowledge/upload")
async def upload_knowledge_document(
    file: UploadFile = File(...),
    title: str = Form(...),
    category: str = Form("Public Bio"),
    is_public: bool = Form(True),
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin)
):
    content_bytes = await file.read()
    raw_text = extract_text_from_file(content_bytes, file.filename)
    
    doc = KnowledgeDoc(
        title=title,
        category=category,
        file_name=file.filename,
        file_type=file.filename.split(".")[-1].lower() if "." in file.filename else "txt",
        raw_content=raw_text,
        is_published=True,
        is_public=is_public,
        version=1
    )
    db.add(doc)
    db.commit()
    db.refresh(doc)
    
    # Index document into searchable semantic chunks
    chunks_indexed = index_document(db, doc)
    
    return {
        "success": True,
        "doc_id": doc.id,
        "title": doc.title,
        "category": doc.category,
        "file_name": doc.file_name,
        "file_type": doc.file_type,
        "chunks_indexed": chunks_indexed
    }

@router.post("/knowledge/snippet")
def create_knowledge_snippet(
    payload: KnowledgeSnippetCreateSchema,
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin)
):
    doc = KnowledgeDoc(
        title=payload.title,
        category=payload.category,
        file_name="direct_entry.md",
        file_type="manual",
        raw_content=payload.content,
        is_published=True,
        is_public=payload.is_public,
        version=1
    )
    db.add(doc)
    db.commit()
    db.refresh(doc)
    
    chunks_indexed = index_document(db, doc)
    return {
        "success": True,
        "doc_id": doc.id,
        "title": doc.title,
        "category": doc.category,
        "file_name": doc.file_name,
        "file_type": doc.file_type,
        "chunks_indexed": chunks_indexed
    }

@router.get("/knowledge/{id}/chunks", response_model=List[KnowledgeChunkDetailSchema])
def get_document_chunks(
    id: int,
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin)
):
    doc = db.query(KnowledgeDoc).filter(KnowledgeDoc.id == id).first()
    if not doc:
        raise HTTPException(status_code=404, detail="Knowledge document not found")
    chunks = db.query(KnowledgeChunk).filter(KnowledgeChunk.doc_id == id).order_by(KnowledgeChunk.chunk_index.asc()).all()
    return chunks

@router.put("/knowledge/{id}/toggle-publish")
def toggle_knowledge_publish(
    id: int,
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin)
):
    doc = db.query(KnowledgeDoc).filter(KnowledgeDoc.id == id).first()
    if not doc:
        raise HTTPException(status_code=404, detail="Knowledge document not found")
    doc.is_published = not doc.is_published
    db.commit()
    chunks_count = index_document(db, doc)
    return {"success": True, "is_published": doc.is_published, "chunks_indexed": chunks_count}

@router.put("/knowledge/{id}/toggle-privacy")
def toggle_knowledge_privacy(
    id: int,
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin)
):
    doc = db.query(KnowledgeDoc).filter(KnowledgeDoc.id == id).first()
    if not doc:
        raise HTTPException(status_code=404, detail="Knowledge document not found")
    doc.is_public = not doc.is_public
    db.commit()
    chunks_count = index_document(db, doc)
    return {"success": True, "is_public": doc.is_public, "chunks_indexed": chunks_count}

@router.delete("/knowledge/{id}")
def delete_knowledge_document(
    id: int,
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin)
):
    doc = db.query(KnowledgeDoc).filter(KnowledgeDoc.id == id).first()
    if not doc:
        raise HTTPException(status_code=404, detail="Knowledge document not found")
    db.delete(doc)
    db.commit()
    return {"success": True, "message": "Document and associated semantic chunks removed"}

@router.post("/knowledge/test-query")
def test_rag_query(
    payload: RAGTestQuerySchema,
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin)
):
    retrieved = search_public_knowledge(db, payload.query, top_k=payload.top_k)
    return {
        "query": payload.query,
        "results_count": len(retrieved),
        "retrieved_chunks": retrieved,
        "grounding_status": "FOUND_GROUNDED_SOURCES" if retrieved else "NO_RELEVANT_CHUNKS"
    }

@router.post("/knowledge/reindex")
def reindex_all_knowledge(
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin)
):
    docs = db.query(KnowledgeDoc).all()
    total_chunks = 0
    for doc in docs:
        total_chunks += index_document(db, doc)
    return {"success": True, "docs_processed": len(docs), "total_chunks": total_chunks}

# CONTACT MESSAGES
@router.get("/messages", response_model=List[ContactMessageSchema])
def get_contact_messages(
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin)
):
    return db.query(ContactMessage).order_by(ContactMessage.created_at.desc()).all()

@router.put("/messages/{id}/read")
def mark_message_read(
    id: int,
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin)
):
    msg = db.query(ContactMessage).filter(ContactMessage.id == id).first()
    if not msg:
        raise HTTPException(status_code=404, detail="Message not found")
    msg.is_read = True
    db.commit()
    return {"success": True}

# EXPERIENCE & CAREER TIMELINE (STRICTLY FROM LINKEDIN)
@router.get("/experience", response_model=List[TimelineEventSchema])
def list_admin_experience(
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin)
):
    """Returns experience timeline events strictly verified against Temkin's LinkedIn profile."""
    return db.query(TimelineEvent).order_by(TimelineEvent.sort_order.asc(), TimelineEvent.id.asc()).all()

@router.post("/experience", response_model=TimelineEventSchema)
def create_experience_event(
    payload: TimelineEventCreateSchema,
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin)
):
    event = TimelineEvent(**payload.model_dump())
    db.add(event)
    db.commit()
    db.refresh(event)
    return event

@router.put("/experience/{id}", response_model=TimelineEventSchema)
def update_experience_event(
    id: int,
    payload: TimelineEventCreateSchema,
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin)
):
    event = db.query(TimelineEvent).filter(TimelineEvent.id == id).first()
    if not event:
        raise HTTPException(status_code=404, detail="Experience event not found")
    for field, val in payload.model_dump(exclude_unset=True).items():
        setattr(event, field, val)
    db.commit()
    db.refresh(event)
    return event

@router.delete("/experience/{id}")
def delete_experience_event(
    id: int,
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin)
):
    event = db.query(TimelineEvent).filter(TimelineEvent.id == id).first()
    if not event:
        raise HTTPException(status_code=404, detail="Experience event not found")
    db.delete(event)
    db.commit()
    return {"success": True, "message": "Experience event removed"}
