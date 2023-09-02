import React from 'react';
import { useParams } from 'react-router-dom'; 
import Header from '../../components/Header.js';
import styled from "styled-components";
import '../Login/SignInPage.css';

const DatePage = () => {
  const { date } = useParams(); // URL에서 날짜 파라미터 가져오기

  return (
    <Wallpaper>
      <h1 className="maintitle">CHAT.DA</h1>
      
     
    </Wallpaper>
  );
};

export default DatePage;

const Wallpaper = styled.div`
  width: 100%;
  height: 78%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #000000;
`;
