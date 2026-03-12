import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }
    // Connecte à useAuth.js / authApi.js
    navigate('/admin');
  };

  return (
    <div className="login-page">
      <div className="login-blob login-blob--1" />
      <div className="login-blob login-blob--2" />

      <div className="login-card">
        <div className="login-logo">H<span>.</span></div>
        <h1>Connexion Admin</h1>
        <p className="login-sub">Accès réservé à Hana Sellami</p>

        {error && <div className="login-error">{error}</div>}

        <div className="login-field">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="hanasellami18@gmail.com"
          />
        </div>
        <div className="login-field">
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>

        <button className="login-btn" onClick={handleLogin}>
          Se connecter →
        </button>

        <a href="/" className="login-back">← Retour au portfolio</a>
      </div>
    </div>
  );
}