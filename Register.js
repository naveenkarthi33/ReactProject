// Register.js
import React, { useState } from 'react';
import './Register.css'; // Import the CSS file

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [MobileNo, setMobileNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration submitted with:', { username, email, password ,MobileNo });
  };

  return (
    <div className="register-container">
      <h2>Register Page</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Email   :
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          Phone Number:
          <input type="number" value={MobileNo} onChange={(e) => setMobileNo(e.target.value)} />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
