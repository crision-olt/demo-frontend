# Demo App

Demonstration of a consumer application that validates authentication via the centralized Auth Service.

## Structure

- `api/` - Express API with protected endpoints
- `frontend/` - React frontend that calls protected endpoints

## Quick Start

### Terminal 1: Demo App API
```bash
cd demo-app/api
npm install
cp .env.example .env
npm start
```

### Terminal 2: Demo App Frontend
```bash
cd demo-app/frontend
npm install
npm run dev
```

## How to Test

1. Start Auth Service first (see auth-service/README.md)
2. Start Demo App API and Frontend
3. Login at http://localhost:3000
4. You'll be redirected to dashboard, click "Go to Demo App"
5. Demo App will show you have access to protected content
