import React from "react";
import styled from "styled-components";
import "../../fonts/Font.css";
import { useNavigate } from "react-router-dom";
//img
import btn_edit from "../images_comp/btn_edit.png";
import btn_done from "../images_comp/btn_done.png";
import btn_del from "../images_comp/btn_del.png";
//icon
import { BsFillBookmarkFill } from "react-icons/bs";

const Tasks = (props) => {
    const { taskTitle, taskTime, taskPlace } = props;

    return (
        <Wrapper>
            <BookmarkWrapper>
                <BsFillBookmarkFill />
            </BookmarkWrapper>
            <Contents>
                <Half_left>
                    <div class="taskTitle">{taskTitle}</div>
                    <div class="taskTime">{taskTime}</div>
                </Half_left>
                <Half_right>
                    <div class="taskPlace">{taskPlace}</div>
                    <BtnWrapper>
                        <img src={btn_edit} />
                        <img src={btn_done} />
                        <img src={btn_del} />
                    </BtnWrapper>
                </Half_right>
            </Contents>
        </Wrapper>
    );
};
export default Tasks;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
// const BsFillBookmarkFill = styled.div`
//     width: 20px;
//     color: #3388ec;
// `;
const Contents = styled.div`
    width: 280px;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgba(233, 236, 51, 0.3);
    padding: 20px;
`;
const BookmarkWrapper = styled.div`
    position: relative;
    top: 15px;
    left: 10px;
    z-index: 1;
`;
const Half_left = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 150px;

    .taskTitle {
        height: 120px;
        color: black;
        font-size: 20px;
        font-family: "Pretendard-SemiBold";
    }
    .taskTime {
        height: 40px;
        color: black;
        font-size: 12px;
        font-family: "Pretendard-Regular";
    }
`;
const Half_right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 5px;
    .taskPlace {
        color: #aeaeae;
        font-size: 12px;
        font-family: "Pretendard-Regular";
    }
`;
const BtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    img {
        width: 22px;
        height: 22px;
        margin-bottom: 5px;
    }
`;
