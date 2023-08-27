import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './SignUpPage.css'
 // You can style your page using CSS

const SignUpPage = () => {
    const navigate = useNavigate();

    const [nickname, setNickname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [birthMonth, setBirthMonth] = useState('');
    const [birthDay, setBirthDay] = useState('');

    

    const handleSignUpCheck = () => {
        // Perform sign-up logic here
        // Use the state values for registration

        // After successful registration, navigate to the main page
        navigate("/choiceaipage"); // Replace "/" with the actual route for the main page
    };

    // Generate an array of years for the birth year dropdown
     const generateYears = () => {
        const currentYear = new Date().getFullYear();
        const startYear = currentYear - 100; // Assuming maximum age is 100 years
        const years = [];
        for (let year = currentYear; year >= startYear; year--) {
            years.push(year.toString());
        }
        return years;
    };

    // Generate an array of months for the birth month dropdown
    const generateMonths = () => {
        const months = [];
        for (let month = 1; month <= 12; month++) {
            months.push(month.toString().padStart(2, '0')); // Adding leading zero if needed
        }
        return months;
    };

    // Generate an array of days for the birth day dropdown
    const generateDays = () => {
        const days = [];
        for (let day = 1; day <= 31; day++) {
            days.push(day.toString().padStart(2, '0')); // Adding leading zero if needed
        }
        return days;
    };
    
    return (
        <div className="sign-up-page">
            <div className="content-container">
                <h1 className="main-title">CHAT.DA</h1>
                <h2 className="subtitle">SIGN UP</h2>
                <div className="input-row">
                    <label htmlFor="nickname">Nickname:</label>
                    <input
                        type="text"
                        id="nickname"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                    />
                </div>
                <div className="input-row">
                    <label htmlFor="username">ID:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                <div className="input-row">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div className="input-row">
                    <label htmlFor="birth">Birth:</label>
                    <div className="birth-selectors">
                        <select
                            id="birthYear"
                            value={birthYear}
                            onChange={(e) => setBirthYear(e.target.value)}
                        >
                            <option value="">Year</option>
                            {generateYears().map(year => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                        <select
                            id="birthMonth"
                            value={birthMonth}
                            onChange={(e) => setBirthMonth(e.target.value)}
                        >
                            <option value="">Month</option>
                            {generateMonths().map(month => (
                                <option key={month} value={month}>
                                    {month}
                                </option>
                            ))}
                        </select>
                        <select
                            id="birthDay"
                            value={birthDay}
                            onChange={(e) => setBirthDay(e.target.value)}
                        >
                            <option value="">Day</option>
                            {generateDays().map(day => (
                                <option key={day} value={day}>
                                    {day}
                                </option>
                            ))}
                        </select>
                        <div>
                        <button className="sign-up-button" onClick={handleSignUpCheck}>
                         SIGN UP
                        </button>
                        </div>
                      
                    </div>
                </div>
               
            </div>
            
        </div>
        
    );
};

export default SignUpPage;



