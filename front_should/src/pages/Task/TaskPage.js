import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
//comp
import TodoList from "../../components/TaskComp/TodoList";
import TaskCreate from "../../components/TaskComp/TaskCreate";
import { TodoProvider } from "../../components/TaskComp/TaskContext";
//img
import btn_plus from "../images/btn_plus.png";

const TaskPage = () => {
    return (
        <TodoProvider>
            <Wrapper>
                <Header title="2023.08.23.WED" />
                <Background>
                    <TodoList />
                    {/*<AddTask>
                    <div className="btn_plus">
                        <img src={btn_plus} />
                    </div>
    </AddTask>*/}
                    <TaskCreate />
                </Background>
            </Wrapper>
        </TodoProvider>
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
`;
const TaskWrapper = styled.div`
    overflow-y: auto;
`;
const AddTask = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .btn_plus {
        position: fixed;
        top: 91%;
    }
`;
