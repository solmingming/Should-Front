import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import "../../fonts/Font.css";

import addimg from "../images/addimg.png";
import editimg from "../images/editimg.png";

const Complete = () => {
    return (
        <>
            <Wrapper>
                <Header title="2023.08.23.WED" />
                <KeywordContainer>
                    <div className="keyword_title">Today's Keyword</div>
                    <div className="keyword_img"></div>
                </KeywordContainer>
                <DiaryContainer>
                    <div className="diary_title">제목: 돈까스 어쩌구저쩌구</div>
                    <div className="diary_date">2023년 8월 20일, 금요일</div>
                    <div className="diary_content">
                        오늘은 정말 피곤한 하루였다. 아침부터 밤까지 계획했던
                        일들이 순조롭게 진행되지 않아서 마음 속으로 많은
                        아쉬움과 답답함을 느꼈다. 특히 오늘은 평소처럼 운동을
                        하러 가는 것도 포기해야 했던 것이 가장 아쉬웠다. 하루
                        종일 바쁘게 지냈음에도 할 일은 끝이 없는 것 같아서
                        마음이 무겁게 느껴졌다.
                    </div>
                </DiaryContainer>
                <ButtonContainer>
                    <AddBtn>
                        <img src={addimg} />
                        <div className="tocalendar">달력에 추가할래요</div>
                    </AddBtn>
                    <EditBtn>
                        <img src={editimg} />
                        <div className="tocalendar">일기를 수정할래요</div>
                    </EditBtn>
                </ButtonContainer>
            </Wrapper>
        </>
    );
};

export default Complete;

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
const KeywordContainer = styled.div`
    position: relative;
    top: 14%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .keyword_title {
        color: #000;
        text-align: center;
        font-family: "InknutAntiqua-Regular";
        font-size: 18px;
        font-weight: 400;
    }
    .keyword_img {
        width: 150px;
        height: 150px;
        border-radius: 150px;
        background-color: #666;
        margin-top: 10px;
    }
`;

const DiaryContainer = styled.div`
    position: relative;
    top: 20%;
    display: flex;
    flex-direction: column;
    width: 90%;
    .diary_title {
        color: black;
        font-size: 18px;
        font-weight: 700;
        letter-spacing: -0.18px;
        font-family: "Pretendard-SemiBold";
        margin-bottom: 20px;
    }
    .diary_date {
        color: #000;
        font-size: 15px;
        font-weight: 500;
        font-family: "Pretendard-Regular";
        margin-bottom: 30px;
    }
    .diary_content {
        color: #000;
        font-size: 15px;
        font-weight: 500;
        font-family: "Pretendard-Regular";
        letter-spacing: 1px;
        line-height: 24px;
    }
`;
const ButtonContainer = styled.div`
    position: relative;
    top: 25%;
    width: 85%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
const AddBtn = styled.div`
    border-radius: 20px;
    background: rgba(123, 143, 215, 0.2);
    width: 150px;
    height: 40px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .tocalendar {
        font-size: 12px;
        font-weight: 400;
        letter-spacing: -0.12px;
        margin-right: 10px;
    }
    img {
        width: 30px;
        margin-left: 5px;
    }
`;
const EditBtn = styled.div`
    border-radius: 20px;
    background: rgba(123, 143, 215, 0.2);
    width: 150px;
    height: 40px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .tocalendar {
        font-size: 12px;
        font-weight: 400;
        letter-spacing: -0.12px;
        margin-right: 10px;
    }
    img {
        width: 30px;
        margin-left: 5px;
    }
`;
