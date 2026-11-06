const API_BASE_URL = import.meta.env.VITE_DEMO_API_URL || 'http://localhost:3002';
const AUTH_API_URL = import.meta.env.VITE_AUTH_API_URL || 'http://localhost:3001';

export const api = {
  async callProtected() {
    const response = await fetch(`${API_BASE_URL}/api/protected`, {
      method: 'GET',
      credentials: 'include'
    });
    return response.json();
  }
};
