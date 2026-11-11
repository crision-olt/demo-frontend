import { useState, useEffect } from 'react';
import { api } from '../utils/api';
import '../styles/Home.css';

export default function LoggedInPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    api
      .callProtected()
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setAuthenticated(true);
        }
      })
      .catch(() => setError('Failed to verify your session'));
  }, []);

  return (
    <div className="demo-container">
      <div className="demo-card">
        <h1>Demo App</h1>
        {authenticated && <p className="subtitle">You are already logged in.</p>}
        {error && <div className="error-message">{error}</div>}
        {!authenticated && !error && <p className="loading">Checking your session...</p>}
      </div>
    </div>
  );
}
