import datetime
from sqlalchemy import (
    Column, Integer, String, Text, Boolean, DateTime, ForeignKey, JSON, Float
)
from sqlalchemy.orm import relationship
from app.database import Base

class Profile(Base):
    __tablename__ = "profiles"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), default="Temkin Abdulmelik")
    headline = Column(String(200), default="AI & Full-Stack Developer | Agentic AI | Intelligent Automation")
    supporting_headline = Column(String(255), default="Building things that make intelligence feel magical.")
    bio = Column(Text, default="A curious engineering student and software developer passionate about building intelligent products, exploring emerging technologies, designing useful experiences, and turning ambitious ideas into working applications.")
    location = Column(String(100), default="Adama, Ethiopia")
    university = Column(String(150), default="Adama Science and Technology University")
    degree = Column(String(150), default="B.Sc. Electronics and Communication Engineering (ECE)")
    graduation_year = Column(String(20), default="2027")
    status_indicator = Column(String(100), default="Available for ambitious AI & full-stack roles")
    github_url = Column(String(255), default="https://github.com/Temkin236")
    linkedin_url = Column(String(255), default="https://linkedin.com/in/temkin-abdulmelik-195582306")
    email = Column(String(150), default="temkinabdulmelik@gmail.com")
    resume_url = Column(String(255), default="/documents/Temkin_Abdulmelik_CV.pdf")
    avatar_url = Column(String(255), default="/images/temkin-portrait.jpg")
    banner_url = Column(String(255), default="/images/temkin-banner.png")
    
    # JSON fields for flexible editable data
    interests = Column(JSON, default=list)
    coffee_quotes = Column(JSON, default=list)
    personal_facts = Column(JSON, default=list)
    easter_eggs = Column(JSON, default=dict)

    # Live counters
    coffees_brewed_count = Column(Integer, default=142)
    cheers_count = Column(Integer, default=98)
    
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    slug = Column(String(100), unique=True, index=True)
    title = Column(String(150), nullable=False)
    subtitle = Column(String(255))
    category = Column(String(50), default="AI Application")
    description = Column(Text)
    problem = Column(Text)
    solution = Column(Text)
    contribution = Column(Text)
    architecture = Column(Text)
    tech_stack = Column(JSON, default=list)
    key_decisions = Column(JSON, default=list)
    challenges = Column(Text)
    achievements = Column(Text)
    github_url = Column(String(255))
    live_url = Column(String(255))
    cover_image = Column(String(255))
    screenshots = Column(JSON, default=list)
    featured = Column(Boolean, default=False)
    sort_order = Column(Integer, default=0)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class Technology(Base):
    __tablename__ = "technologies"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), unique=True, index=True)
    category = Column(String(50), index=True) # Agentic AI, Generative AI, LLM Engineering, RAG, Python Backend, Frontend, Databases, Architecture
    description = Column(Text)
    how_used = Column(Text)
    related_projects = Column(JSON, default=list)
    icon = Column(String(50), default="code")
    sort_order = Column(Integer, default=0)

class TimelineEvent(Base):
    __tablename__ = "timeline_events"

    id = Column(Integer, primary_key=True, index=True)
    year = Column(String(30))
    title = Column(String(150))
    role_or_context = Column(String(150))
    description = Column(Text)
    category = Column(String(50)) # Education, Career, Milestone, Project
    highlight = Column(Boolean, default=False)
    sort_order = Column(Integer, default=0)

class Photo(Base):
    __tablename__ = "photos"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(150))
    caption = Column(Text)
    image_url = Column(String(255), nullable=False)
    category = Column(String(50), default="Milestones") # Portrait, Mentoring, Hackathon, University, Life
    is_public = Column(Boolean, default=True) # Strict privacy enforcement: family/private = False
    date_taken = Column(String(50))
    sort_order = Column(Integer, default=0)

class KnowledgeDoc(Base):
    __tablename__ = "knowledge_docs"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200))
    category = Column(String(50), default="Public Bio")
    file_name = Column(String(255))
    file_type = Column(String(20)) # pdf, docx, txt, md, manual
    raw_content = Column(Text)
    is_published = Column(Boolean, default=True)
    is_public = Column(Boolean, default=True) # Non-public documents are never indexed in RAG
    version = Column(Integer, default=1)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

    chunks = relationship("KnowledgeChunk", back_populates="doc", cascade="all, delete-orphan")

class KnowledgeChunk(Base):
    __tablename__ = "knowledge_chunks"

    id = Column(Integer, primary_key=True, index=True)
    doc_id = Column(Integer, ForeignKey("knowledge_docs.id", ondelete="CASCADE"), index=True)
    chunk_index = Column(Integer)
    content = Column(Text, nullable=False)
    is_public = Column(Boolean, default=True) # Must match doc is_public & is_published
    embedding_json = Column(Text, nullable=True) # JSON array of floats for lightweight vector storage

    doc = relationship("KnowledgeDoc", back_populates="chunks")

class ContactMessage(Base):
    __tablename__ = "contact_messages"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    email = Column(String(150))
    subject = Column(String(200))
    message = Column(Text)
    inquiry_type = Column(String(50), default="Collaboration") # Collaboration, Freelance, Career, Say Hi
    is_read = Column(Boolean, default=False)
    is_archived = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class VisitorLog(Base):
    __tablename__ = "visitor_logs"

    id = Column(Integer, primary_key=True, index=True)
    path = Column(String(255))
    referer = Column(String(255), nullable=True)
    user_agent = Column(String(255), nullable=True)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)

class QuestionLog(Base):
    __tablename__ = "question_logs"

    id = Column(Integer, primary_key=True, index=True)
    question = Column(Text)
    answer_preview = Column(Text)
    sources_cited = Column(JSON, default=list)
    confidence = Column(Float, default=1.0)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
