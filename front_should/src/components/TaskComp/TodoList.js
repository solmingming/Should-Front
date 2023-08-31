import React from "react";
import styled from "styled-components";

import TaskwithEdit from "../TaskComp/TaskwithEdit";
import { useTodoState, useTodoDispatch } from "./TaskContext";

const TodoList = () => {
    const todos = useTodoState();

    const undoneTasks = todos.filter((todo) => !todo.done);
    const doneTasks = todos.filter((todo) => todo.done);

    return (
        <TodoListBlock>
            {undoneTasks.map((todo) => (
                <TaskwithEdit
                    key={todo.id}
                    id={todo.id}
                    done={todo.done}
                    taskTitle={todo.taskTitle}
                    taskTime={todo.taskTime}
                    taskPlace={todo.taskPlace}
                />
            ))}
            {doneTasks.map((todo) => (
                <TaskwithEdit
                    key={todo.id}
                    id={todo.id}
                    done={todo.done}
                    taskTitle={todo.taskTitle}
                    taskTime={todo.taskTime}
                    taskPlace={todo.taskPlace}
                />
            ))}
        </TodoListBlock>
    );
};
export default TodoList;

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px;
    overflow-y: auto;
`;
