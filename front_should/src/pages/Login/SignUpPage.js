import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css'; 
import styled from 'styled-components';


const SignUpPage = () => {

    const navigate = useNavigate();

    const handleSignUpCheck = () => {
    
        navigate('/choiceaipage'); // Replace with the actual route for the main page
      };


  const [profileImage, setProfileImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [nickname, setNickname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');

  const resizeImage = (file, maxWidth, maxHeight) => {
    return new Promise((resolve) => {
      const img = new Image();

      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }

        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob((blob) => {
          resolve(blob);
        }, file.type);
      };

      img.src = URL.createObjectURL(file);
    });
  };

    
  const handleImageChange = async (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const resizedBlob = await resizeImage(selectedFile, 100, 100);
      setSelectedImage(URL.createObjectURL(resizedBlob));
      setProfileImage(resizedBlob); // Save resized image for later use
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Uploaded profile image:', profileImage);
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

        <form onSubmit={handleSubmit}>
          <div className="profile-image-container">
            {/* Input for uploading profile image */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            <ImagePreviewContainer>
              {selectedImage && <StyledImage src={selectedImage} alt="프로필 사진 미리보기" />}
            </ImagePreviewContainer>
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
           
            </form>
      </div>


   
    
       
       </SignUpPageContainer>
    
  );
                    };        
 
export default SignUpPage;

const ImagePreviewContainer = styled.div`
  display: flex;
  margin-top:3rem;
  margin-right:rem;
  
  
 
`;

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 100%; 
  border: 2px solid #000000;
  background-position: 1rem 1rem;
  margin-left:3rem;
  margin-top:3rem;
  
`;

const SignUpPageContainer = styled.div`
  /* Your general container styles here */
  display: flex;

  background-image: url("../images/basicprofile.png");
  background-position: 1rem 1rem;
`;

    