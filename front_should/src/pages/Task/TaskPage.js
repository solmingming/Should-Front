import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import TaskwithEdit from "../../components/TaskComp/TaskwithEdit";

//img
import btn_plus from "../images/btn_plus.png";

const TaskPage = () => {
    return (
        <Wrapper>
            <Header title="2023.08.23.WED" />
            <Background>
                <TaskwithEdit
                    taskTitle="Go to groceries"
                    taskTime={
                        <span>
                            08/23 <br />
                            14:00-15:00
                        </span>
                    }
                    taskPlace="Home-plus"
                />
                <div className="btn_plus">
                    <img src={btn_plus} />
                </div>
            </Background>
        </Wrapper>
    );
};

export default TaskPage;

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
const Background = styled.div`
    width: 90%;
    height: 80%;
    position: relative;
    background-color: white;
    border-radius: 30px;
    top: 14%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .btn_plus {
        position: fixed;
        top: 91%;
    }
`;
