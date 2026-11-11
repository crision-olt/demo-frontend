const API_BASE_URL = import.meta.env.VITE_DEMO_API_URL || 'http://localhost:3002';
const AUTH_API_URL = import.meta.env.VITE_AUTH_API_URL || 'http://localhost:3001';

const AUTH_FRONTEND_URL = import.meta.env.AUTH_FRONTEND_URL || 'http://localhost:3000';

export const redirectToLogin = () => {
  const url = new URL(AUTH_FRONTEND_URL);
  url.searchParams.set('redirect', window.location.href);
  window.location.assign(url.toString());
};

export const api = {
  async callProtected() {
    const response = await fetch(`${API_BASE_URL}/api/protected`, {
      method: 'GET',
      credentials: 'include'
    });
    if (response.status === 401) {
      redirectToLogin();
      return { error: 'Redirecting to login' };
    }
    return response.json();
  }
};
