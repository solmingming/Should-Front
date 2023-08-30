import React from 'react';
import { useParams } from 'react-router-dom';

const DatePage = () => {
  const { date } = useParams(); // URL에서 날짜 파라미터 가져오기

  return (
    <div>
      <h2>Selected Date: {date}</h2>
      {typeof date}
      
    </div>
  );
};

export default DatePage;