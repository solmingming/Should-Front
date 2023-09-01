import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './SignInPage.css';


const SignInPage = () => {

  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');


  const handleSignIn = () => {
    
    if (userId === 'validUserId' && password === 'validPassword') {
      
      navigate("/homepage"); 
    } else {
        navigate("/homepage");
     
    }
  };

  return (
    <div className="sign-in-page">
      <div className="content-container">
        <h1 className="maintitle">CHAT.DA</h1>
        <h1 className="subtitle">SIGN IN</h1>
       <div className="input-container">
        <div className="input_signin">
          <input 
            type="text" 
            className="input-signin"
            placeholder="  ID"
            label="ID"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div className="input_signin">
        <input 
            type="text" 
            className="input-signin"
            placeholder="  PW"
            label="Password"
            id="password"
            value={password}x
            onChange={(e) => setUserId(e.target.value)}
        
          />
        </div>
        </div>
        <button className="sign-in-button" onClick={handleSignIn}>
          SIGN IN
        </button>
        <div className="content-link-container">
        <div className="forgot-links">
          <a href="/forgot-id">Forgot ID?</a>
          </div>
          <div className="forgot-links">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        </div>
      </div>
      </div>
   
  );
};

export default SignInPage;
