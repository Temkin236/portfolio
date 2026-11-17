from pydantic import BaseModel, EmailStr, Field, ConfigDict
from typing import List, Optional, Dict, Any
from datetime import datetime

class ProfileSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    headline: str
    supporting_headline: str
    bio: str
    location: str
    university: str
    degree: str
    graduation_year: str
    status_indicator: str
    github_url: str
    linkedin_url: str
    email: str
    resume_url: str
    avatar_url: str
    banner_url: str
    interests: List[str] = []
    coffee_quotes: List[str] = []
    personal_facts: List[Dict[str, Any]] = []
    easter_eggs: Dict[str, Any] = {}
    coffees_brewed_count: int
    cheers_count: int
    updated_at: Optional[datetime] = None

class ProfileUpdateSchema(BaseModel):
    headline: Optional[str] = None
    supporting_headline: Optional[str] = None
    bio: Optional[str] = None
    location: Optional[str] = None
    status_indicator: Optional[str] = None
    github_url: Optional[str] = None
    linkedin_url: Optional[str] = None
    email: Optional[str] = None
    interests: Optional[List[str]] = None
    coffee_quotes: Optional[List[str]] = None
    personal_facts: Optional[List[Dict[str, Any]]] = None

class ProjectSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    slug: str
    title: str
    subtitle: Optional[str] = None
    category: str
    description: Optional[str] = None
    problem: Optional[str] = None
    solution: Optional[str] = None
    contribution: Optional[str] = None
    architecture: Optional[str] = None
    tech_stack: List[str] = []
    key_decisions: List[str] = []
    challenges: Optional[str] = None
    achievements: Optional[str] = None
    metrics: Dict[str, Any] = {}
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    cover_image: Optional[str] = None
    screenshots: List[str] = []
    featured: bool = False
    sort_order: int = 0

class ProjectCreateUpdateSchema(BaseModel):
    slug: str
    title: str
    subtitle: Optional[str] = None
    category: str
    description: Optional[str] = None
    problem: Optional[str] = None
    solution: Optional[str] = None
    contribution: Optional[str] = None
    architecture: Optional[str] = None
    tech_stack: List[str] = []
    key_decisions: List[str] = []
    challenges: Optional[str] = None
    achievements: Optional[str] = None
    metrics: Dict[str, Any] = {}
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    cover_image: Optional[str] = None
    screenshots: List[str] = []
    featured: bool = False
    sort_order: int = 0

class TechnologySchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    category: str
    description: Optional[str] = None
    how_used: Optional[str] = None
    related_projects: List[str] = []
    icon: str = "code"
    sort_order: int = 0

class TimelineEventCreateSchema(BaseModel):
    year: str
    title: str
    role_or_context: Optional[str] = None
    description: Optional[str] = None
    category: str = "Career"
    highlight: bool = False
    sort_order: int = 0

class TimelineEventSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    year: str
    title: str
    role_or_context: Optional[str] = None
    description: Optional[str] = None
    category: str
    highlight: bool = False
    sort_order: int = 0

class PhotoSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    title: str
    caption: Optional[str] = None
    image_url: str
    category: str
    is_public: bool
    date_taken: Optional[str] = None
    sort_order: int = 0

class KnowledgeDocSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    title: str
    category: str
    file_name: Optional[str] = None
    file_type: Optional[str] = None
    raw_content: Optional[str] = None
    is_published: bool
    is_public: bool
    version: int
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    chunks_count: Optional[int] = 0

class KnowledgeChunkDetailSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    doc_id: int
    chunk_index: int
    content: str
    is_public: bool

class KnowledgeSnippetCreateSchema(BaseModel):
    title: str
    category: str = "Public Bio"
    content: str
    is_public: bool = True

class RAGTestQuerySchema(BaseModel):
    query: str
    top_k: int = 5

class ContactMessageCreateSchema(BaseModel):
    name: str
    email: EmailStr
    subject: Optional[str] = "General Inquiry"
    message: str
    inquiry_type: Optional[str] = "Collaboration"

class ContactMessageSchema(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    email: str
    subject: str
    message: str
    inquiry_type: str
    is_read: bool
    is_archived: bool
    created_at: Optional[datetime] = None

class ChatCitationSchema(BaseModel):
    title: str
    category: str
    snippet: str

class ChatRequestSchema(BaseModel):
    message: str
    history: List[Dict[str, str]] = []

class AdminLoginSchema(BaseModel):
    username: str
    password: str

class TokenResponseSchema(BaseModel):
    access_token: str
    token_type: str = "bearer"

TokenSchema = TokenResponseSchema

class AnalyticsOverviewSchema(BaseModel):
    total_views: int = 0
    total_projects: int = 0
    total_messages: int = 0
    unread_messages: int = 0
    coffees_brewed: int = 0
    cheers_given: int = 0
    total_ai_questions: int = 0
    recent_questions: List[Dict[str, Any]] = []

ProjectCreateSchema = ProjectCreateUpdateSchema
AdminOverviewSchema = AnalyticsOverviewSchema
