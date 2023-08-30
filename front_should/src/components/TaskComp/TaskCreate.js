import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import "../../fonts/Font.css";

const TaskCreate = () => {
    const [open, setOpen] = useState(false);
    const onToggle = () => setOpen(!open);

    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm>
                        <div
                            className="inputTitle"
                            style={{ paddingTop: "70px" }}
                        >
                            What?
                        </div>
                        <Input
                            autoFocus
                            placeholder="Please enter what to do"
                        />
                    </InsertForm>
                    <InsertForm>
                        <div className="inputTitle">When?</div>
                        <Input placeholder="Please enter when to do" />
                    </InsertForm>
                    <InsertForm>
                        <div className="inputTitle">Where?</div>
                        <Input placeholder="Please enter where to do" />
                    </InsertForm>
                    <CompleteBtn>
                        <div className="addbtn">Add to tasks</div>
                    </CompleteBtn>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd />
            </CircleButton>
        </>
    );
};

export default TaskCreate;

const CircleButton = styled.button`
    background-color: D9D9D9;
    &:hover {
        background-color: #63e6be;
    }
    &:active {
        background: #20c997;
    }
    z-index: 10;
    cursor: pointer;
    width: 55px;
    height: 55px;
    display: block;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.125s all ease-in;
    ${(props) =>
        props.open &&
        css`
            background: #ff6b6b;
            &:hover {
                background: #ff8787;
            }
            &:active {
                background: #fa5252;
            }
            transform: translate(-50%, 50%) rotate(45deg);
        `}
`;
const InsertFormPositioner = styled.div`
    width: 95%;
    bottom: 0;
    left: 40;
    position: absolute;
    padding-top: 20px;
`;

const InsertForm = styled.form`
    background: #e3e3e3;
    padding-left: 32px;
    padding-top: 10px;
    padding-right: 32px;
    padding-bottom: 10px;

    border-top: 1px solid #e9ecef;

    .inputTitle {
        font-size: 18px;
        font-family: "Pretendard-SemiBold";
    }
`;

const Input = styled.input`
    padding: 12px;
    border-radius: 20px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 15px;
    box-sizing: border-box;
`;
const CompleteBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #e3e3e3;

    padding-top: 30px;
    padding-bottom: 100px;
    .addbtn {
        font-family: "Pretendard-Medium";
        font-size: 22px;
        color: #666666;
        border-radius: 10px;
        background: #aeaeae;
        padding: 10px;
    }
`;
