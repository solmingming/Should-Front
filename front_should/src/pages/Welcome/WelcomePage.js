import React from 'react';
import './WelcomePage.css'; // You can style your page using CSS

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <h1 className="main-title">CHAT.DA</h1>
      <div className="button-container">
        <div className="button-row">
          <button className="sign-in-button">SIGN IN</button>
        </div>
        <div className="button-row">
          <button className="sign-up-button">SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
