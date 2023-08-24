import React from "react";
import styled from "styled-components";
import "../../fonts/Font.css";
import { useNavigate } from "react-router-dom";

const Tasks = (props) => {
    const { taskNum, taskTitle, taskTime, taskPlace } = props;

    return (
        <Wrapper>
            <div class="num">{taskNum}</div>
            <Contents>
                <div class="taskTitle">{taskTitle}</div>
                <div class="taskTime">{taskTime}</div>
                <div class="taskPlace">{taskPlace}</div>
            </Contents>
        </Wrapper>
    );
};
export default Tasks;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    .num {
        font-size: 16px;
        color: black;
        font-family: "Pretendard-Regular";
        margin-bottom: 5px;
        margin-left: 5px;
    }
    margin-top: 15px;
    margin-left: 10px;
`;
const Contents = styled.div`
    width: 104px;
    height: 160px;
    display: flex;
    flex-direction: column;
    background-color: rgba(233, 236, 51, 0.3);
    padding: 10px;
    .taskTitle {
        height: 90px;
        color: black;
        font-size: 18px;
        font-family: "Pretendard-SemiBold";
    }
    .taskTime {
        height: 50px;
        color: black;
        font-size: 12px;
        font-family: "Pretendard-Regular";
    }
    .taskPlace {
        color: #aeaeae;
        font-size: 12px;
        font-family: "Pretendard-Regular";
    }
`;
