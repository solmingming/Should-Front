import React from "react";
import styled from "styled-components";
import "../fonts/Font.css";
import { useNavigate } from "react-router-dom";

//이미지
import homeIcon from "../components/images_comp/homeIcon.png";

const Header = (props) => {
    const { title } = props;
    const navigate = useNavigate();

    return (
        <>
            <HeaderWrapper>
                <MainLogo>
                    <div class="left"></div>
                    <div class="title">{title}</div>
                    <img src={homeIcon} />
                </MainLogo>
            </HeaderWrapper>
        </>
    );
};

export default Header;

const HeaderWrapper = styled.div`
    width: 100vw;
    height: 11%;
    position: fixed;
    top: 0;
    background-color: #1a2d4d;
    display: flex;
    justify-content: center;
`;
const MainLogo = styled.div`
    position: absolute;
    top: 22%;
    width: 95vw;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    img {
        width: 35px;
        height: 35px;
    }
    .title {
        font-size: 23px;
        color: white;
        font-family: "Lemon";
    }
    .left {
        width: 35px;
    }
`;
