# demo-app Frontend Dockerfile

## Environment Variables

Build-time environment variables:
- `VITE_AUTH_API_URL` - URL to auth-service API (e.g., `http://auth-service:3001`)
- `VITE_DEMO_API_URL` - URL to demo-app API (e.g., `http://demo-app-api:3002`)

## Building and Running

```bash
# Build the image
docker build -t demo-app-frontend:latest .

# Run the container
docker run -d \
  -e VITE_AUTH_API_URL='http://localhost:3001' \
  -e VITE_DEMO_API_URL='http://localhost:3002' \
  -p 5174:5174 \
  demo-app-frontend:latest
```

## Development

For local development, create a `.env.local` file:
```
VITE_AUTH_API_URL=http://localhost:3001
VITE_DEMO_API_URL=http://localhost:3002
```

Then run:
```bash
npm run dev
```
