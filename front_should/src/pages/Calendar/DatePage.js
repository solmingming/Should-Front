import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header.js";
import styled from "styled-components";
import "../Login/SignInPage.css";

import TaskPage from "../Task/TaskPage.js";

const DatePage = () => {
    const { date } = useParams(); // URL에서 날짜 파라미터 가져오기

    return <TaskPage />;
};

export default DatePage;

const Wallpaper = styled.div`
    width: 100%;
    height: 78%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: #666;
`;
