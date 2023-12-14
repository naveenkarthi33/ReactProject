// Login.js
import React, { useState } from 'react';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginSuccess(true);
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>

      {loginSuccess ? (
        <p className="success-message">Login successful!</p>
      ) : (
        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
