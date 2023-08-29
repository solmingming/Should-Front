import React from 'react';
import { useNavigate } from "react-router-dom";
import './SelectSignUpPage.css'; 
import '../Login/SignInPage.css'; // You can style your page using CSS

const SelectSignUpPage = () => {

    const navigate = useNavigate();
    
    function handleSelecteKakao() {
        navigate("/kakaosignuppage");
    }
    function handleSelecteSignup() {
        navigate("/signuppage");
    }

    return (
        <div className="select-signup-page">
            <div className="content-container1">
                <h1 className="maintitle">CHAT.DA</h1>
                <h1 className="subtitle">SIGN UP</h1>
                <div className="button-container">
                    <button className="kakao-button" onClick={handleSelecteKakao}>카카오 1초 회원가입</button>
                    <button className="self-button"  onClick={handleSelecteSignup}>ID/PW 입력이 필요한 회원가입</button>
                </div>
            </div>
         </div>
    );

}
export default SelectSignUpPage;
