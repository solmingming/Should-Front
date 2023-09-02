import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import ChatHeader from "../../components/ChatHeader";

import AIprofile from "../../components/onChatComp/AIprofile";
import Userprofile from "../../components/onChatComp/Userprofile";
import mic_btn from "../images/mic_btn.png";

const OnChat = () => {
    const [userMessage, setUserMessage] = useState("");
    const [aiMessage, setAiMessage] = useState("");
    const handleInputChange = (e) => {
        setUserMessage(e.target.value);
    };
    const handleSubmit = async () => {
        try {
            const response = await axios.post("/url", { userMessage });
            setAiMessage(response.data.response);
            setUserMessage("");
        } catch (error) {
            console.error("대화 에러", error);
        }
    };

    return (
        <Wrapper>
            <ChatHeader title="2023.08.23.WED" />
            <ChatContainer>
                <AIprofile />
                <Userprofile />
            </ChatContainer>
            <InputContainer>
                <input className="input_chat"></input>
                <img src={mic_btn} />
            </InputContainer>
        </Wrapper>
    );
};
export default OnChat;

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
const ChatContainer = styled.div`
    position: relative;
    top: 100px;
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const InputContainer = styled.div`
    position: fixed;
    margin-top: 770px;

    display: flex;
    flex-direction: row;
    align-items: center;

    width: 337px;
    height: 38px;
    border-radius: 30px;
    background: #fff;
    padding: 5px;
    .input_chat {
        border-style: none;
        font-size: 14px;
        font-weight: 400;
        color: black;
        width: 95%;
        padding-left: 5px;
    }
    img {
        width: 17px;
        margin-right: 10px;
    }
`;
