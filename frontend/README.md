# Demo App Frontend

React frontend for the Demo App that uses the centralized Auth Service.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

Frontend will run on http://localhost:3001

## How it works

1. User logs in via Auth Service (http://localhost:3000)
2. JWT token is stored in a cookie
3. User visits Demo App (http://localhost:3001)
4. Demo App calls protected endpoint on Demo API
5. JWT cookie is automatically sent with the request
6. If authenticated, user sees protected content
