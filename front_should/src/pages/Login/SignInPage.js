import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './SignInPage.css';

const SignInPage = () => {

  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');


  const handleSignIn = () => {
    // Perform sign-in logic here
    // You can use userId and password states for authentication
    // For example, check if userId and password match some predefined values
    if (userId === 'validUserId' && password === 'validPassword') {
      // If authentication is successful, navigate to the home page
      navigate("/homepage"); // Replace with the actual route for the home page
    } else {
        navigate("/homepage");
      // Handle unsuccessful authentication, show error message or perform other actions
    }
  };

  return (
    <div className="sign-in-page">
      <div className="content-container">
        <h1 className="main-title">CHAT.DA</h1>
        <h2 className="subtitle">SIGN IN</h2>
        <div className="input-row">
  <label className="input-label" htmlFor="userId">
    ID:
  </label>
  <input
    className="input-field"
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
          </div>
          <div className="forgot-links">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
