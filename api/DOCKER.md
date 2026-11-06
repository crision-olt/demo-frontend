# demo-app API Dockerfile

## Environment Variables

Required environment variables:
- `JWT_SECRET` - Secret key for JWT verification (same as auth-service)
- `PORT` - Server port (default: 3002)
- `NODE_ENV` - Set to 'production' for production builds
- `AUTH_SERVICE_URL` - URL of the auth-service (for CORS)

## Building and Running

```bash
# Build the image
docker build -t demo-app-api:latest .

# Run with environment variables
docker run -d \
  -e JWT_SECRET='your-secret-key' \
  -e AUTH_SERVICE_URL='http://auth-service:3001' \
  -e NODE_ENV='production' \
  -p 3002:3002 \
  demo-app-api:latest
```
