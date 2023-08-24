import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//폰트
import "../fonts/Font.css";

const Footer = (props) => {
    const { title } = props;
    const navigate = useNavigate();

    return (
        <>
            <HeaderWrapper>
                <div class="title">{title}</div>
            </HeaderWrapper>
        </>
    );
};

export default Footer;

const HeaderWrapper = styled.div`
    width: 100vw;
    height: 10%;
    position: fixed;
    bottom: 0;
    background-color: #27305f;
    .title {
        width: 100vw;
        display: flex;
        justify-content: center;
        padding-top: 50px;
        font-size: 30px;
        color: white;
        font-family: "Lemon";
    }
`;
