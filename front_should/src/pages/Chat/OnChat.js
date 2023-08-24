import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";

const OnChat = () => {
    return (
        <Wrapper>
            <Header title="2023.08.23.WED" />
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
