# Changelog

All notable changes to **Temkin's World** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-11-12

### Added
- **Pure React 19 Architecture**: Full client SPA powered by React 19, TypeScript, Vite 8, and React Router DOM v7.
- **Luxury Lilac Design System**: Custom design tokens (`#F5F2FA`, `#D8CDEE`, `#8A75B3`, `#1E1B24`) inspired by modern high-fashion and luxury digital platforms.
- **Agentic AI & RAG Backend**: High-throughput FastAPI backend with PostgreSQL `pgvector` semantic search and Google Gemini 2.5 Flash token streaming via Server-Sent Events (SSE).
- **Interactive Easter Egg Terminal**: Terminal launcher (`⌘K` / `Ctrl+K`) with system commands (`about`, `projects`, `skills`, `coffee`, `cheers`).
- **Interactive Coffee & Cheers Engine**: Micro-interactions with celebratory confetti and brewed Ethiopian roast quotes.
- **Protected Admin Studio**: Full administrative dashboard with JWT Bearer authentication to curate projects, view analytics, and inspect visitor telemetry.
- **Docker Compose Orchestration**: Production-ready multi-stage containerization with Nginx static frontend and Uvicorn backend.
- **GitHub Community Standards**: MIT License, CodeQL automated vulnerability scanning, issue templates, PR review checklist, and contributing guide.
- **Comprehensive Test Suite**: Pytest test suite covering public APIs, RAG semantic search, streaming endpoints, and security middleware.
- **SEO & Social Optimization**: OpenGraph metadata, Twitter cards, dynamic document titles, `sitemap.xml`, `robots.txt`, and web app `manifest.json`.

### Changed
- Replaced placeholder portrait with authentic GitHub profile avatar.
- Completely migrated from Next.js to pure React 19 + Vite.
- Optimized bundle size with functional chunk splitting (`vendor`, `animations`, `icons`).
- Upgraded all backend Pydantic schemas to V2 `ConfigDict` standard.

### Fixed
- Eliminated all Next.js triangle icon references and replaced with React 19 atoms.
- Fixed CORS and missing security headers by adding strict security middleware.
