import React from 'react';
import { Link } from 'react-router-dom';
import './StartChatDaPage.css'; // You can style your page using CSS

const StartChatDaPage = () => {
 return (
    <div className="start-chat-da-page">
        <div className="content-container">
            <h1 className="start-maintitle">CHAT.DA</h1>
            <div className="start-subtitle">
              AI와 대화하면서 나의 소중한 하루를 기록해요<br />
              일기쓰기 귀찮을 땐, 쳇다
            </div>

            <div className="move-button-container">
              <Link to="/welcomepage">(임시)welcomepage로 이동!</Link>
            </div>
        </div>
    </div>
  );
}

export default StartChatDaPage;
