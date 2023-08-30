import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
import styled, { createGlobalStyle } from "styled-components";
import Header from "../../components/Header";
import moment from 'moment';
import './Calendar.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: InknutAntiqua-Regular_t; 
  }
`;

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(moment());

  const renderCalendar = () => {
    const monthStart = selectedDate.clone().startOf('month');
    const monthEnd = selectedDate.clone().endOf('month');
    const startDate = monthStart.clone().startOf('week');
    const endDate = monthEnd.clone().endOf('week');
    const calendar = [];
    let week = [];

    let day = startDate.clone();
    while (day.isSameOrBefore(endDate, 'day')) {
      week.push(
        <Link to={`/date/${day.format('YYYY-MM-DD')}`}>
  <div
    key={day.format('YYYY-MM-DD')}
    className="calendar-day-link"
    style={{ textDecoration: 'none' }}
  >
    {day.format('D')}
  </div>
</Link>

      );

      if (day.day() === 6) {
        calendar.push(
          <div key={day.format('YYYY-MM-DD')} className="calendar-week">
            {week}
          </div>
        );
        week = [];
      }

      day.add(1, 'day');
    }

    return calendar;
  };

  const prevMonth = () => {
    setSelectedDate(selectedDate.clone().subtract(1, 'month'));
  };

  const nextMonth = () => {
    setSelectedDate(selectedDate.clone().add(1, 'month'));
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <Header title="calendar" />
      <Background>
        <div className="calendar-container">
          <header className="calendar-header">
            <h1>{selectedDate.format('MMMM YYYY')}</h1>
            <button onClick={prevMonth}>Prev</button>
            <button onClick={nextMonth}>Next</button>
          </header>
          <div className="calendar">
            <div className="calendar-days-header">
              <div>SUN</div>
              <div>MON</div>
              <div>TUE</div>
              <div>WED</div>
              <div>THU</div>
              <div>FRI</div>
              <div>SAT</div>
            </div>
            <div className="calendar-body">{renderCalendar()}</div>
          </div>
        </div>
      </Background>
    </Wrapper>
  );
};

export default Calendar;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background-color: #e7e7e7;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Background = styled.div`
    width: 90%;
    height: 80%;
    position: relative;
    background-color: white;
    border-radius: 30px;
    top: 14%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
