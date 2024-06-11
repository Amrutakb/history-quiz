import React, { useState } from 'react';

const Login = ({ handleLogin, switchToRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      if (response.ok) {
        const user = await response.json();
        handleLogin(user.username);
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      alert('Error logging in');
    }
  };

  return (
    <div className="container1">
      <div>
        <h2>Login</h2>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <br />
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLoginClick}>Login</button>
        <p>Not registered yet? <span onClick={switchToRegister} style={{ cursor: 'pointer', color: 'blue' }}>Register</span></p>
      </div>
    </div>
  );
};

export default Login;
