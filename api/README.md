# Demo App API

Express API that validates JWT tokens from the Auth Service.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment:**
   ```bash
   cp .env.example .env
   # Edit .env with the JWT_SECRET (same as Auth Service)
   ```

3. **Start API:**
   ```bash
   npm start
   ```

API will run on http://localhost:3001

## Protected Endpoints

- `GET /api/protected` - Protected endpoint that requires valid JWT cookie
