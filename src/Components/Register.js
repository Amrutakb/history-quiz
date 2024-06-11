import React, { useState } from 'react';

const Register = ({ switchToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (username, password) => {
    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      if (response.ok) {
        alert('User registered successfully');
        switchToLogin();
      } else {
        alert('Failed to register user');
      }
    } catch (error) {
      alert('Error registering user');
    }
  };

  const handleRegisterClick = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (username && password && confirmPassword && password === confirmPassword && password.match(passwordRegex)) {
      handleRegister(username, password);
    } else {
      alert('Please enter a valid username and password. Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, 1 special symbol, and be at least 8 characters long, and make sure passwords match.');
    }
  };

  return (
    <div className="container1">
      <div>
        <h2>Register</h2>
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
        <br />
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button onClick={handleRegisterClick}>Register</button>
        <p>Already registered? <span onClick={switchToLogin} style={{ cursor: 'pointer', color: 'blue' }}>Login</span></p>
      </div>
    </div>
  );
};

export default Register;
