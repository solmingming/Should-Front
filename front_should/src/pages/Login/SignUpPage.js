import React, { useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css'; 
import styled from 'styled-components';


const SignUpPage = () => {


  const defaultImageUrl = '../images/basicprofile.png';
    const navigate = useNavigate();

    const handleSignUpCheck = () => {
    
        navigate('/choiceaipage'); // Replace with the actual route for the main page
      };


  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);
  
  const [nickname, setNickname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfileImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  

  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 100; // Assuming maximum age is 100 years
    const years = [];
    for (let year = currentYear; year >= startYear; year--) {
      years.push(year.toString());
    }
    return years;
  };

  const generateMonths = () => {
    const months = [];
    for (let month = 1; month <= 12; month++) {
      months.push(month.toString().padStart(2, '0')); // Adding leading zero if needed
    }
    return months;
  };

  const generateDays = () => {
    const days = [];
    for (let day = 1; day <= 31; day++) {
      days.push(day.toString().padStart(2, '0')); // Adding leading zero if needed
    }
    return days;
  };

  return (

    <SignUpPageContainer className="sign-up-page">
      <div className="whole-container">
        <div className="title">CHAT.DA</div>

        <div className="profile-container">
      <div className="profile-image-container">
        <div
          className="profile-image"
          style={{
            backgroundImage: `url(${profileImage || defaultImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '6rem', // 프로필 이미지 크기 조정
            height: '6rem', // 프로필 이미지 크기 조정
            borderRadius: '50%', // 이미지를 원형으로 자르기
            display: 'flex', // 부모 요소를 flex로 설정
            justifyContent: 'center', // 가로 가운데 정렬
            alignItems: 'center', // 세로 가운데 정렬
          }}
        >
          {profileImage === defaultImageUrl && (
             <p style={{ textAlign: 'center', margin: 0 }}>
             {profileImage === null && '기본 프로필 이미지'} {/* profileImage가 null일 때만 텍스트를 렌더링합니다. */}
           </p>
          )}
        </div>
      </div>
      <div style={{ Align:'center'}&&{}}>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
      </div>
      <div style={{ textAlign:'center'}&&{}}>
        <button onClick={() => fileInputRef.current.click()}>이미지 업로드</button>
      </div>
    </div>

            <div className="signupcontainer">
          
            <div className="label_signup">Nickname</div>
            
    <input
        className="nickname"
        type="text" 
        id="nickname" 
        value={nickname} onChange={(e) => setNickname(e.target.value)} 
       
    />
</div>
  
        
          
            <div className="label_signup">ID</div>
            
            <div className="input_signup.ID">
              <input
              className='ID'
              type="text" 
              id="username" 
              value={username} onChange={(e) => setUsername(e.target.value)} />
              
          </div>
  
         
         
          <div className="label_signup">PW</div>
           <div className="input_signup">
           
           
           
            <input
           
           className='password'
            type="password" 
            id="password" 
            value={password} onChange={(e) => setPassword(e.target.value)}
             />
            
          </div>
  
          
          <div className="label_signup">Confirm PW</div>

          <input
             
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}/>
             
         
          
         
          <div className="label_signup">Birth</div>
                <div className="birth-selectors">
                 <select id="birthYear" value={birthYear} onChange={(e) => setBirthYear(e.target.value)}>
                 <option value="">Year</option>
                    {generateYears().map((year) => (
                    <option key={year} value={year}>{year}</option>))}</select>
                <select id="birthMonth" value={birthMonth} onChange={(e) => setBirthMonth(e.target.value)}>
                 <option value="">Month</option>
                    {generateMonths().map((month) => (<option key={month} value={month}> {month}</option>))} 
                </select>
   
                 <select id="birthDay" value={birthDay} onChange={(e) => setBirthDay(e.target.value)}>
                    <option value="">Day</option>
                    {generateDays().map((day) => (
                    <option key={day} value={day}>{day} </option>))}
                </select>
            </div>


         
           <button className="sign-up-button" onClick={handleSignUpCheck}>
              SIGN UP
            </button>
           
          
      </div>


   
    
       
       </SignUpPageContainer>
    
  );
                    };        
 
export default SignUpPage;


const SignUpPageContainer = styled.div`
  /* Your general container styles here */
  display: flex;

  background-image: url("../images/basicprofile.png");
  background-position: 1rem 1rem;
  
`;

    