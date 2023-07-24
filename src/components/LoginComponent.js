import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/oauth/token', {
        
        email: email,
        password: password,
        grant_type: 'password'
      });
      console.log(response.data)
      const accessToken = response.data.access_token;
      // Store the access token in localStorage or state management system
      localStorage.setItem('accessToken', accessToken);
      // or use state management (e.g., Redux) to handle the access token
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  const handleClick = () => {
    localStorage.removeItem('accessToken');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form><br></br>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default Login;
