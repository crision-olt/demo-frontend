import { useState, useEffect } from 'react';
import { api } from '../utils/api';
import '../styles/Home.css';

export default function HomePage() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    callProtected();
  }, []);

  const callProtected = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await api.callProtected();
      if (data.error) {
        setError(data.error);
      } else {
        setResult(data);
      }
    } catch (err) {
      setError('Failed to call protected endpoint');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="demo-container">
      <div className="demo-card">
        <h1>Demo App</h1>
        <p className="subtitle">Authenticated via centralized Auth Service</p>

        {error && <div className="error-message">{error}</div>}

        {result && (
          <div className="result-box">
            <h2>Protected Endpoint Response:</h2>
            <p><strong>Message:</strong> {result.message}</p>
            <p><strong>User ID:</strong> {result.userId}</p>
            <p><strong>Timestamp:</strong> {new Date(result.timestamp).toLocaleString()}</p>
          </div>
        )}

        {loading && <p className="loading">Loading...</p>}

        <div className="actions">
          <button onClick={callProtected} disabled={loading}>
            {loading ? 'Calling...' : 'Call Protected Endpoint'}
          </button>
          <a href="http://localhost:3000/dashboard" className="back-link">
            Back to Auth Dashboard
          </a>
        </div>

        <div className="info-box">
          <h3>How this works:</h3>
          <ul>
            <li>You're logged in via the Auth Service</li>
            <li>The JWT cookie is automatically sent to this endpoint</li>
            <li>The Demo App validates your token</li>
            <li>If valid, you see the protected content</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
