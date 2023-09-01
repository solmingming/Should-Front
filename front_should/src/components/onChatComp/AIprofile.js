import React from "react";
import ai_img from "../images_comp/aiprofile.png";
import styled from "styled-components";

const AIprofile = () => {
    return (
        <>
            <Wrapper>
                <img src={ai_img} />
                <div className="aiMessage">오늘 하루는 어땠어?</div>
            </Wrapper>
        </>
    );
};

export default AIprofile;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    img {
        width: 57px;
    }
    .aiMessage {
        background-color: white;
        border-radius: 10px;
        border: 0.3px solid #aeaeae;
        font-size: 14px;
        font-weight: 400;
        width: 265.885px;
        height: auto;

        padding: 5px;
    }
`;
