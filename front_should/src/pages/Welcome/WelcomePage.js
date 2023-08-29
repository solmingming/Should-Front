import React from 'react';
import { useNavigate } from "react-router-dom";
import './WelcomePage.css'; // You can style your page using CSS


const WelcomePage = () => {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate("/signinpage");
    };

    const handleSignUpClick = () => {
        navigate("/selectsignuppage"); // Replace with the actual route for sign up page
    };

    return (
        <div className="welcome-page">
            <div className="content-container">
                <h1 className="maintitle">CHAT.DA</h1>
                <div className="button-container">
                    <button className="sign-in-button1" onClick={handleSignInClick}>SIGN IN</button>
                    <button className="sign-up-button1"  onClick={handleSignUpClick}>SIGN UP</button>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;
