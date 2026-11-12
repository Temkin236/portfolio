import pytest
from fastapi.testclient import TestClient
from app.main import app
from app.database import SessionLocal
from app.services.rag_service import search_public_knowledge

client = TestClient(app)

def test_search_public_knowledge():
    with SessionLocal() as db:
        results = search_public_knowledge(db, "hackathon", top_k=3)
        assert isinstance(results, list)
        if len(results) > 0:
            assert "title" in results[0]
            assert "category" in results[0]

def test_chat_stream_endpoint():
    payload = {
        "message": "What did Temkin build for the CSEC ASTU Hackathon?",
        "history": []
    }
    response = client.post("/api/chat", json=payload)
    assert response.status_code == 200
    assert "text/event-stream" in response.headers.get("content-type", "")
