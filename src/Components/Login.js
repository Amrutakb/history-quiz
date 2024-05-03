// Login.js
import React, { useState } from 'react';

const Login = ({ handleLogin, switchToRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    if (username === 'user' && password === 'Abcd@12345') {
      handleLogin(username);
    } else {
      alert('Please enter username and password');
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
      <br></br>
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