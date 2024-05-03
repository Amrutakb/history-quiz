// Register.js
import React, { useState } from 'react';

const Register = ({ handleRegister, switchToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
      <br></br>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br></br>
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