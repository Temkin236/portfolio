import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_health_check():
    response = client.get("/api/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "healthy"
    assert data["service"] == "Temkin's World API"

def test_get_public_profile():
    response = client.get("/api/profile")
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "Temkin Abdulmelik"
    assert "Adama Science and Technology University" in data["university"]
    assert "Adama, Ethiopia" in data["location"]
    assert "github.com/Temkin236" in data["github_url"]
    assert len(data["interests"]) > 0

def test_get_projects():
    response = client.get("/api/projects")
    assert response.status_code == 200
    data = response.json()
    assert len(data) >= 8
    slugs = [p["slug"] for p in data]
    assert "meri-ai" in slugs
    assert "knowledge-ai" in slugs
    assert "astu-campus-navigator" in slugs
    assert "aura-ai" in slugs

def test_get_project_detail():
    response = client.get("/api/projects/knowledge-ai")
    assert response.status_code == 200
    data = response.json()
    assert data["title"] == "Knowledge AI"
    assert "LangGraph" in data["tech_stack"]

def test_coffee_brew():
    response = client.post("/api/coffee/brew")
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert "quote" in data
    assert data["coffees_brewed_count"] > 0

def test_cheers_interaction():
    response = client.post("/api/cheers")
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert "cheers_count" in data

def test_photo_privacy_enforcement():
    response = client.get("/api/photos")
    assert response.status_code == 200
    photos = response.json()
    assert len(photos) > 0
    # Every photo returned in public endpoint MUST have is_public == True
    for p in photos:
        assert p["is_public"] is True

def test_admin_auth_flow():
    # Invalid password
    bad_resp = client.post("/api/admin/login", json={"username": "temkin", "password": "wrongpassword"})
    assert bad_resp.status_code == 401

    # Valid password
    good_resp = client.post("/api/admin/login", json={"username": "temkin", "password": "temkin2026"})
    assert good_resp.status_code == 200
    token_data = good_resp.json()
    assert "access_token" in token_data
    token = token_data["access_token"]

    # Access protected overview
    overview_resp = client.get("/api/admin/overview", headers={"Authorization": f"Bearer {token}"})
    assert overview_resp.status_code == 200
    overview_data = overview_resp.json()
    assert overview_data["total_projects"] >= 8

def test_deep_healthz():
    response = client.get("/api/healthz")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"
    assert data["database"]["status"] == "connected"

def test_security_headers():
    response = client.get("/api/health")
    assert response.headers.get("x-content-type-options") == "nosniff"
    assert response.headers.get("x-frame-options") == "DENY"

def test_get_technologies():
    response = client.get("/api/technologies")
    assert response.status_code == 200
    techs = response.json()
    assert len(techs) > 0
    names = [t["name"] for t in techs]
    assert any("React" in n for n in names)
    assert "FastAPI" in names

def test_get_timeline():
    response = client.get("/api/timeline")
    assert response.status_code == 200
    events = response.json()
    assert len(events) > 0
    titles = [e["title"] for e in events]
    assert any("CSEC ASTU Hackathon" in t for t in titles)

def test_contact_submission():
    payload = {
        "name": "Jane Developer",
        "email": "jane@example.com",
        "subject": "AI Project Collaboration",
        "message": "Hi Temkin, I love your portfolio and would like to collaborate on an agentic system.",
        "inquiry_type": "Collaboration"
    }
    response = client.post("/api/contact", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert "id" in data
    assert data["name"] == "Jane Developer"
    assert data["email"] == "jane@example.com"

def test_admin_knowledge_lifecycle():
    # Login as admin
    login_res = client.post("/api/admin/login", json={"username": "admin", "password": "temkin2026"})
    assert login_res.status_code == 200
    token = login_res.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    # 1. Create a knowledge snippet
    snippet_payload = {
        "title": "Meri AI Architecture Notes",
        "category": "Project Case Study",
        "content": "Meri AI is an agentic campus automation engine developed by Temkin Abdulmelik and Team Divas that secured 1st Place at the CSEC ASTU Hackathon. It features multi-agent coordination.",
        "is_public": True
    }
    create_res = client.post("/api/admin/knowledge/snippet", json=snippet_payload, headers=headers)
    assert create_res.status_code == 200
    doc_id = create_res.json()["doc_id"]
    assert create_res.json()["chunks_indexed"] >= 1

    # 2. List knowledge documents
    list_res = client.get("/api/admin/knowledge", headers=headers)
    assert list_res.status_code == 200
    docs = list_res.json()
    assert any(d["id"] == doc_id for d in docs)

    # 3. View document chunks
    chunks_res = client.get(f"/api/admin/knowledge/{doc_id}/chunks", headers=headers)
    assert chunks_res.status_code == 200
    chunks = chunks_res.json()
    assert len(chunks) >= 1
    assert "Meri AI" in chunks[0]["content"]

    # 4. Test RAG query test endpoint
    test_rag = client.post("/api/admin/knowledge/test-query", json={"query": "Meri AI campus", "top_k": 3}, headers=headers)
    assert test_rag.status_code == 200
    assert test_rag.json()["results_count"] >= 1
    assert test_rag.json()["grounding_status"] == "FOUND_GROUNDED_SOURCES"

    # 5. Toggle privacy
    priv_res = client.put(f"/api/admin/knowledge/{doc_id}/toggle-privacy", headers=headers)
    assert priv_res.status_code == 200
    assert priv_res.json()["is_public"] is False

    # 6. Delete document
    del_res = client.delete(f"/api/admin/knowledge/{doc_id}", headers=headers)
    assert del_res.status_code == 200
    assert del_res.json()["success"] is True

def test_admin_experience_endpoints():
    login_res = client.post("/api/admin/login", json={"username": "admin", "password": "temkin2026"})
    assert login_res.status_code == 200
    token = login_res.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    # Create new experience event from LinkedIn
    exp_payload = {
        "year": "2025 — Present",
        "title": "AI Project Contributor",
        "role_or_context": "AfterQuery & Revelo",
        "description": "Contributed to remote AI evaluation and software engineering projects from verified LinkedIn experience.",
        "category": "Career",
        "highlight": True,
        "sort_order": 1
    }
    create_res = client.post("/api/admin/experience", json=exp_payload, headers=headers)
    assert create_res.status_code == 200
    exp_id = create_res.json()["id"]

    # List experience events
    list_res = client.get("/api/admin/experience", headers=headers)
    assert list_res.status_code == 200
    items = list_res.json()
    assert any(item["id"] == exp_id for item in items)

    # Delete experience event
    del_res = client.delete(f"/api/admin/experience/{exp_id}", headers=headers)
    assert del_res.status_code == 200

