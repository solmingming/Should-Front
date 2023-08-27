import React from 'react';
import './WelcomePage.css'; // You can style your page using CSS
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
    const navigate = useNavigate();


    const handleSignInClick = () => {
        navigate("/signinpage");
    };

  return (
    <div className="welcome-page">
      <h1 className="main-title">CHAT.DA</h1>
      <div className="button-container">
        <div className="button-row">

        <button  className="sign-in-button"  onClick={handleSignInClick}>Sign In2</button>

          
        </div>
        <div className="button-row">
          <button className="sign-up-button">SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
