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
