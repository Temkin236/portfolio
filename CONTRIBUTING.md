# Contributing to Temkin's World

Thank you for your interest in contributing to **Temkin's World**! We welcome improvements, bug reports, and suggestions.

## Code of Conduct
Please be respectful, collaborative, and constructive when opening issues or pull requests.

## Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/Temkin236/portfolio.git
cd portfolio
```

### 2. Frontend Development
```bash
cd frontend
npm install
npm run dev
```
The frontend runs on `http://localhost:3000`.

### 3. Backend Development
```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python -m uvicorn app.main:app --reload --port 8000
```
The FastAPI backend runs on `http://localhost:8000`.

## Git Commit Guidelines
We adhere to **Conventional Commits**:
- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation changes
- `style:` Formatting, styling without code logic change
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks, dependency updates
- `perf:` Performance improvements
