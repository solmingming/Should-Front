import React, {
    useReducer,
    createContext,
    useContext,
    useRef,
    useEffect,
    useState,
} from "react";
import axios from "axios";

const initialTodos = [
    {
        id: 1,
        done: false,
        taskTitle: "슈드기능 구현하기",
        taskTime: "토요일 전까지",
        taskPlace: "카페 슈드",
    },
];

function todoReducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return state.concat(action.todo);
        case "TOGGLE":
            return state.map((todo) =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo
            );
        case "REMOVE":
            return state.filter((todo) => todo.id !== action.id);
        case "SET_TODOS":
            return action.todos;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(3);

    useEffect(() => {
        // 데이터를 백엔드 서버로부터 받아오는 함수
        const getData = async () => {
            try {
                const response = await axios.get("/api/task/get/1"); // 백엔드 서버의 API 엔드포인트로 요청 보내기
                dispatch({ type: "SET_TODOS", todos: response.data }); // 받아온 데이터로 상태 초기화
                console.log("겟 성공");
                console.log(response.data);
            } catch (error) {
                console.error("겟 실패", error);
            }
        };
        getData(); // 함수 실행
        sendData();
    }, []);

    // 데이터를 백엔드 서버로 보내는 함수
    const sendData = async (data) => {
        try {
            await axios.post("/api/task/save", {
                userId: 1,
                done: false,
                taskTitle: data.taskTitle,
                taskTime: data.taskTime,
                taskPlace: data.taskPlace,
            }); // 백엔드 서버의 API 엔드포인트로 데이터를 POST로 보내기
            console.log("포스트 성공");
            console.log(data);
        } catch (error) {
            console.error("포스트 실패", error);
        }
    };

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

export function useTodoState() {
    return useContext(TodoStateContext);
}

export function useTodoDispatch() {
    return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
    return useContext(TodoNextIdContext);
}
