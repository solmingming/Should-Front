import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Choice_AiPage = () => {
  const navigate = useNavigate();

  const handleSignUpCheck = () => {
    // You can add any sign-up logic here if needed
    // After successful registration or sign-up check, navigate to the main page
    navigate("/homepage"); // Replace with the actual route for the main page
  };

  return (
    <div className="choice-ai-page">
      <div className="content-container">
        <h1 className="maintitle">CHAT.DA</h1>
        {/* Add the Sign Up button */}
        
        <h1 >ai를 골라주세요</h1>
        
        <button className="sign-up-button" onClick={handleSignUpCheck}>
          Start chda!
        </button>
      </div>
    </div>
  );
};

export default Choice_AiPage;
