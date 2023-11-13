import React from 'react';


const Login = () => {
  const handleLogin = () => {
    // Implement login logic
    alert('Login button clicked!');
  };

  return (
    <div style={{ backgroundColor: '#BEFF82', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h1>Login</h1>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <br />
          <button type="button" style={{ backgroundColor: '#28a745', color: 'white', width: '100%', padding: '10px', marginTop: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
  