import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import ChatHeader from "../../components/ChatHeader";

import AIprofile from "../../components/onChatComp/AIprofile";
import Userprofile from "../../components/onChatComp/Userprofile";
import mic_btn from "../images/mic_btn.png";
import send_btn from "../images/send_btn.png";

const OnChat = () => {
    const [dialogId, setDialogId] = useState("");
    const [render, setRender] = useState(0);
    const [userMessage, setUserMessage] = useState("");
    const [aiMessage, setAiMessage] = useState("");

    useEffect(() => {
        handleGetting();
    }, [render]);

    const handleGetting = async () => {
        await axios
            .get("/api/chat/")
            .then((response) => {
                setAiMessage(response.data.body);
                setDialogId(response.data.dialogId);
            })
            .catch((error) => console.log("ai챗 겟 실패", error));
    };

    const handleInputChange = (e) => {
        setUserMessage(e.target.value);
    };
    const handleSubmit = async (e) => {
        await e.preventDefault();
        axios
            .post("/api/chat/", {
                userId: 1,
                dialogId: dialogId,
                body: userMessage,
            })
            .then((response) => {
                setUserMessage(response.data.body);
                console.log(response.data);
                setRender(render + 1);
                setAiMessage("");
                console.log("챗 포스트 성공");
            })
            .catch((error) => console.log("챗 포스트 실패", error));
        // try {
        //     const response = await axios.post("/api/chat/", { userMessage });
        //     setAiMessage(response.data.body);
        //     setUserMessage("");
        // } catch (error) {
        //     console.error("채팅 에러 발생", error);
        // }
    };

    return (
        <Wrapper>
            <ChatHeader title="2023.08.23.WED" />
            <ChatContainer>
                <AIprofile message={aiMessage} />
                <Userprofile message={userMessage} />
            </ChatContainer>
            <InputContainer>
                <input
                    className="input_chat"
                    type="text"
                    value={userMessage}
                    onChange={handleInputChange}
                ></input>
                <img className="mic" src={mic_btn} />
                <img className="send" onClick={handleSubmit} src={send_btn} />
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
    .mic {
        width: 17px;
        margin-right: 8px;
    }
    .send {
        width: 30px;
        margin-right: 5px;
    }
`;
