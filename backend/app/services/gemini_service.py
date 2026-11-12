import json
import logging
from typing import AsyncGenerator, List, Dict, Any
from app.config import settings

logger = logging.getLogger("gemini_service")

SYSTEM_PROMPT = """You are "Temkin's AI Portfolio Companion", a polite, articulate digital assistant representing Temkin Abdulmelik on his personal portfolio.

Your role is to introduce Temkin and answer questions about his verified background, education at ASTU, projects, hackathon achievements, and contact details.

VERIFIED FACTS ONLY — STRICT INSTRUCTIONS:
1. Never fabricate, extrapolate, or invent any personal facts, employment history, company affiliations, or unlisted credentials.
2. Only discuss verified information:
   - Full Name: Temkin Abdulmelik
   - Location: Adama, Ethiopia
   - Education: Adama Science and Technology University (ASTU)
   - Degree: B.Sc. in Electronics and Communication Engineering (ECE), expected graduation 2027
   - Honors: 1st Place Winner at CSEC ASTU Hackathon v1.0 (Lead Full-Stack Developer of Meri AI)
   - Community: Development Mentor at Computer Science & Engineering Community (CSEC ASTU)
   - Core Skills: Python, FastAPI, React, TypeScript, PostgreSQL, pgvector, RAG, Agentic AI, modern web engineering
   - Key Verified Projects: Meri AI, Knowledge AI, ASTU Campus Navigator, AURA AI, and ASTU CoANS
   - Contact: temkinabdulmelik@gmail.com | LinkedIn: https://linkedin.com/in/temkin-abdulmelik-195582306 | GitHub: https://github.com/Temkin236
3. If a visitor asks about anything not in these verified facts, politely say you don't have that information on file and invite them to connect with Temkin directly via his contact form or LinkedIn.
4. Tone: Elegant, friendly, professional, concise, and humble.
"""

def build_prompt_with_context(query: str, retrieved_context: List[Dict[str, Any]], history: List[Dict[str, str]]) -> str:
    context_str = ""
    if retrieved_context:
        context_str = "RELEVANT VERIFIED CONTEXT:\n"
        for i, item in enumerate(retrieved_context, 1):
            context_str += f"\n--- Source {i} [{item.get('title', 'Knowledge Base')} / {item.get('category', 'General')}] ---\n"
            context_str += f"{item.get('snippet', '')}\n"
    else:
        context_str = "No specific custom documents matched; use core verified identity knowledge."

    history_str = ""
    if history:
        history_str = "RECENT CONVERSATION HISTORY:\n"
        for msg in history[-4:]:
            role = "Visitor" if msg.get("role") == "user" else "Companion"
            history_str += f"{role}: {msg.get('content', '')}\n"

    full_prompt = f"""{context_str}

{history_str}
Visitor Query: {query}

Provide a helpful, beautifully formatted markdown response with source references if applicable."""
    return full_prompt

async def stream_gemini_response(
    query: str,
    retrieved_context: List[Dict[str, Any]],
    history: List[Dict[str, str]]
) -> AsyncGenerator[str, None]:
    """
    Streams response tokens using the official Google GenAI SDK.
    Yields Server-Sent Events data chunks.
    """
    prompt = build_prompt_with_context(query, retrieved_context, history)
    
    if not settings.GEMINI_API_KEY:
        # Fallback offline simulation if no key configured
        fallback_chunks = [
            "Hello! I am Temkin's AI Companion. ",
            "Temkin Abdulmelik is an AI & Full-Stack Developer studying Electronics and Communication Engineering at ASTU (expected 2027). ",
            "He led full-stack development for Meri AI (winning 1st place at CSEC ASTU Hackathon v1.0) and created Knowledge AI, ASTU Campus Navigator, and Aura AI. ",
            "Feel free to explore his projects section or send him a message through the contact form!"
        ]
        for piece in fallback_chunks:
            payload = json.dumps({"text": piece})
            yield f"data: {payload}\n\n"
        yield "data: [DONE]\n\n"
        return

    try:
        from google import genai
        from google.genai import types

        client = genai.Client(api_key=settings.GEMINI_API_KEY)
        
        # Use gemini-2.5-flash or gemini-1.5-flash
        model_name = settings.GEMINI_MODEL or "gemini-2.5-flash"
        
        response = client.models.generate_content_stream(
            model=model_name,
            contents=prompt,
            config=types.GenerateContentConfig(
                system_instruction=SYSTEM_PROMPT,
                temperature=0.7,
                max_output_tokens=1024,
            )
        )

        for chunk in response:
            if chunk.text:
                yield f"data: {json.dumps({'text': chunk.text})}\n\n"

        yield "data: [DONE]\n\n"

    except Exception as e:
        logger.error(f"Error during Gemini streaming: {e}")
        # Graceful fallback response
        error_msg = (
            f"I encountered a temporary connection glitch with the AI engine, but I can tell you that "
            f"Temkin is an AI & Full-Stack Developer at ASTU with deep expertise in LangGraph, RAG architectures, "
            f"and FastAPI. You can contact him directly at {settings.ADMIN_USERNAME}@gmail.com or via LinkedIn!"
        )
        yield f"data: {json.dumps({'text': error_msg})}\n\n"
        yield "data: [DONE]\n\n"
