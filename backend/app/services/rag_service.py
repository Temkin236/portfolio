import re
import math
from typing import List, Dict, Any
from sqlalchemy.orm import Session
from app.models.entities import KnowledgeDoc, KnowledgeChunk

def extract_text_from_file(file_bytes: bytes, filename: str) -> str:
    """Extract text from PDF, DOCX, TXT, or Markdown bytes safely."""
    lower_name = filename.lower()
    
    if lower_name.endswith(".pdf"):
        import io
        from pypdf import PdfReader
        reader = PdfReader(io.BytesIO(file_bytes))
        pages_text = [page.extract_text() or "" for page in reader.pages]
        return "\n\n".join(pages_text).strip()
    
    elif lower_name.endswith(".docx"):
        import io
        import docx
        doc = docx.Document(io.BytesIO(file_bytes))
        paragraphs = [p.text for p in doc.paragraphs if p.text.strip()]
        return "\n\n".join(paragraphs).strip()
    
    else:
        # Default text/markdown decoding
        return file_bytes.decode("utf-8", errors="replace").strip()

def chunk_text(text: str, chunk_size: int = 400, overlap: int = 80) -> List[str]:
    """Splits text into overlapping semantic passages."""
    paragraphs = [p.strip() for p in text.split("\n\n") if p.strip()]
    chunks: List[str] = []
    current_chunk = []
    current_len = 0

    for para in paragraphs:
        words = para.split()
        if not words:
            continue
        para_len = len(words)
        
        if current_len + para_len > chunk_size and current_chunk:
            chunks.append(" ".join(current_chunk))
            # Keep overlap words
            current_chunk = current_chunk[-overlap:] if len(current_chunk) > overlap else []
            current_len = len(current_chunk)
            
        current_chunk.extend(words)
        current_len += para_len

    if current_chunk:
        chunks.append(" ".join(current_chunk))

    return chunks if chunks else [text]

def index_document(db: Session, doc: KnowledgeDoc) -> int:
    """Indexes a document into searchable chunks with privacy enforcement."""
    # Delete existing chunks for this document
    db.query(KnowledgeChunk).filter(KnowledgeChunk.doc_id == doc.id).delete()
    
    # If document is unpublished or marked private, do not generate public chunks
    if not doc.is_published or not doc.is_public:
        db.commit()
        return 0

    if not doc.raw_content:
        db.commit()
        return 0

    chunks = chunk_text(doc.raw_content)
    chunk_objs = []
    for idx, chunk_text_content in enumerate(chunks):
        chunk_objs.append(
            KnowledgeChunk(
                doc_id=doc.id,
                chunk_index=idx,
                content=chunk_text_content,
                is_public=True
            )
        )
    
    db.bulk_save_objects(chunk_objs)
    db.commit()
    return len(chunk_objs)

def search_public_knowledge(db: Session, query: str, top_k: int = 5) -> List[Dict[str, Any]]:
    """
    Retrieves the most relevant public knowledge chunks.
    NEVER returns private, unverified, or unpublished documents.
    """
    # Join with KnowledgeDoc to strictly enforce is_published and is_public
    chunks = (
        db.query(KnowledgeChunk, KnowledgeDoc)
        .join(KnowledgeDoc, KnowledgeChunk.doc_id == KnowledgeDoc.id)
        .filter(
            KnowledgeChunk.is_public == True,
            KnowledgeDoc.is_published == True,
            KnowledgeDoc.is_public == True
        )
        .all()
    )

    if not chunks:
        return []

    # Clean query tokens
    query_tokens = [t.lower() for t in re.findall(r"\w+", query) if len(t) > 2]
    if not query_tokens:
        # Fallback to general chunks
        return [
            {
                "title": doc.title,
                "category": doc.category,
                "snippet": chunk.content[:300] + "..." if len(chunk.content) > 300 else chunk.content,
                "score": 0.5
            }
            for chunk, doc in chunks[:top_k]
        ]

    scored = []
    for chunk, doc in chunks:
        content_lower = chunk.content.lower()
        title_lower = doc.title.lower()
        
        # Scoring: word matches + exact phrase bonus + title matches
        score = 0.0
        for token in query_tokens:
            if token in title_lower:
                score += 3.0
            if token in content_lower:
                score += 1.0 + content_lower.count(token) * 0.2

        if query.lower() in content_lower:
            score += 5.0

        if score > 0:
            scored.append((score, chunk, doc))

    scored.sort(key=lambda x: x[0], reverse=True)

    results = []
    for score, chunk, doc in scored[:top_k]:
        results.append({
            "title": doc.title,
            "category": doc.category,
            "snippet": chunk.content,
            "score": round(score, 2)
        })

    return results
