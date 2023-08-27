import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Choice_AiPage = () => {
  const navigate = useNavigate();

  const handleSignUpCheck = () => {
    // You can add any sign-up logic here if needed
    // After successful registration or sign-up check, navigate to the main page
    navigate("/"); // Replace with the actual route for the main page
  };

  return (
    <div className="choice-ai-page">
      <div className="content-container">
        <h1 className="main-title">CHAT.DA</h1>
        {/* Add the Sign Up button */}
        <button className="sign-up-button" onClick={handleSignUpCheck}>
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default Choice_AiPage;
