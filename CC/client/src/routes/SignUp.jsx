import React, { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log('Button clicked!');
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const user = await response.json();
        console.log('User registered:', user);
        // Perform actions upon successful registration (redirect, show a message, etc.)
      } else {
        throw new Error('Failed to register');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error
    }
  };

  return (
    <div style={{ backgroundColor: '#BEFF82', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h1>Signup</h1>
        <form>
          <label htmlFor="newUsername">Username:</label>
          <input type="text" id="newUsername" name="newUsername" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <br />
          <label htmlFor="newPassword">Password:</label>
          <input type="password" id="newPassword" name="newPassword" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <br />
          <button type="button" style={{ backgroundColor: '#FFA500', color: 'white', width: '100%', padding: '10px', marginTop: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={handleSignup}>
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;