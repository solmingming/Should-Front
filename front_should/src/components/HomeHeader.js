import React from "react";
import styled from "styled-components";
import "../fonts/Font.css";
import { useNavigate } from "react-router-dom";

//이미지
import loadingLogo from "../components/images_comp/loadingLogo.png";
import profile from "../components/images_comp/profile.png";

const HomeHeader = (props) => {
    const { title } = props;
    const navigate = useNavigate();

    return (
        <>
            <HeaderWrapper>
                <MainLogo>
                    <img src={loadingLogo} />
                    <img src={profile} />
                </MainLogo>
                <div class="title">{title}</div>
            </HeaderWrapper>
        </>
    );
};

export default HomeHeader;

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
        font-size: 30px;
        color: white;
        font-family: "Lemon";
    }
`;
const MainLogo = styled.div`
    position: absolute;
    top: 0;
    width: 95vw;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    img {
        width: 35px;
        height: 35px;
    }
`;
