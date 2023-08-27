import React, { useState } from 'react';

const SignInPage = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Perform sign-in logic here
    // You can use userId and password states for authentication
  };

  return (
    <div className="sign-in-page">
      <h1 className="main-title">CHAT.DA</h1>
      <h2 className="subtitle">SIGN IN</h2>
      <div className="input-row">
        <label htmlFor="userId">ID:</label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div className="input-row">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="sign-in-button" onClick={handleSignIn}>
        SIGN IN
      </button>
      <div className="forgot-links">
        <a href="/forgot-id">Forgot ID?</a>
        <a href="/forgot-password">Forgot Password?</a>
      </div>
    </div>
  );
};

export default SignInPage;
