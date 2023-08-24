import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//폰트
import "../fonts/Font.css";

const Header = (props) => {
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

export default Header;

const HeaderWrapper = styled.div`
    width: 100vw;
    height: 13%;
    position: fixed;
    top: 0;
    background-color: #1a2d4d;
    display: flex;
    justify-content: center;
    .title {
        width: 100vw;
        display: flex;
        justify-content: center;
        padding-top: 55px;
        font-size: 30px;
        color: white;
        font-family: "Lemon";
    }
`;
