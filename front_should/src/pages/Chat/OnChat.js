import React from "react";
import styled from "styled-components";
import ChatHeader from "../../components/ChatHeader";

const OnChat = () => {
    return (
        <Wrapper>
            <ChatHeader title="2023.08.23.WED" />
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
