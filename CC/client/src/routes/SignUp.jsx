import React from 'react';

const Signup = () => {
  const handleSignup = () => {
    // Implement signup logic
    alert('Signup button clicked!');
  };

  return (
    <div style={{ backgroundColor: '#BEFF82', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h1>Signup</h1>
        <form>
          <label htmlFor="newUsername">Username:</label>
          <input type="text" id="newUsername" name="newUsername" required />
          <br />
          <label htmlFor="newPassword">Password:</label>
          <input type="password" id="newPassword" name="newPassword" required />
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