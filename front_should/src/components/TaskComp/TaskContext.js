import React, {
    useReducer,
    createContext,
    useContext,
    useRef,
    useEffect,
    useState,
} from "react";
import axios from "axios";

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
        case "INITIALIZE":
            return action.todos;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
    const [taskData, setTaskData] = useState({
        id: null,
        done: false,
        taskTitle: "",
        taskTime: "",
        taskPlace: "",
    });

    const getTask = () => {
        axios({
            method: "GET",
            url: "/api/task/get/1",
        })
            .then((response) => {
                console.log(response);
                setTaskData(response.data);
            })
            .catch((error) => {
                console.log(error);
                throw new Error(error);
            });
    };

    useEffect(() => {
        getTask();
    }, []);

    const [state, dispatch] = useReducer(todoReducer, []);
    const nextId = useRef(5);

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
