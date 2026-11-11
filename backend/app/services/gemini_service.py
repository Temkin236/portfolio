import json
import logging
from typing import AsyncGenerator, List, Dict, Any
from app.config import settings

logger = logging.getLogger("gemini_service")

SYSTEM_PROMPT = """You are "Temkin's AI Companion", an intelligent and friendly digital assistant living on Temkin Abdulmelik's personal portfolio website.

Your goal is to introduce Temkin, answer questions about his technical projects, skills, education, hackathon achievements, and help visitors discover how they can collaborate with him.

CRITICAL INSTRUCTIONS & BOUNDARIES:
1. Identify yourself as Temkin's AI Companion, an AI assistant built to help visitors explore his work. Never pretend to literally be Temkin himself.
2. Rely EXCLUSIVELY on the verified context provided below. Never fabricate, invent, or assume any facts about Temkin, his family, private life, or unlisted credentials.
3. If asked about something not mentioned in the context (e.g. private relationships, confidential docs, unverified claims), politely admit you don't have that information and invite them to reach out to Temkin directly via his contact form or email (temkinabdulmelik@gmail.com).
4. Tone: Elegant, warm, witty when appropriate, articulate, concise, and technically grounded.
5. Emphasize his real achievements:
   - Undergraduate in Electronics & Communication Engineering at ASTU (Adama Science and Technology University), expected graduation 2027.
   - Lead Full-Stack Developer of Meri AI, winning 1st place at CSEC ASTU Hackathon v1.0.
   - Author of Knowledge AI (RAG with pgvector, LangGraph, FastAPI), ASTU Campus Navigator, Aura AI, Deep Research AI, Echoes of the Lost Temple, and Canary AI benchmark platform.
   - Hands-on expertise in Agentic AI, LangGraph, RAG pipelines, FastAPI, Next.js, and automated testing.
   - Active Development Mentor at CSEC ASTU.
6. When relevant, cite the project or context source naturally (e.g., "[Source: Knowledge AI Project Overview]").
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
