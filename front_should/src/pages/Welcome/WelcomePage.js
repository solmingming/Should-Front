import React from 'react';
import './WelcomePage.css'; // You can style your page using CSS
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate("/signinpage");
    };
    
    const handleSignUpClick = () => {
        navigate("/signuppage"); // Replace with the actual route for sign up page
    };

    return (
        <div className="welcome-page">
            <div className="content-container">
                <h1 className="main-title">CHAT.DA</h1>
                <div className="button-container">
                    <button className="sign-in-button" onClick={handleSignInClick}>Sign In</button>
                    <button className="sign-up-button"  onClick={handleSignUpClick}>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;
