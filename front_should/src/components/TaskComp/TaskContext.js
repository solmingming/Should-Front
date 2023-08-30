import React, {
    useReducer,
    createContext,
    useContext,
    useRef,
    useEffect,
    useState,
} from "react";
import axios from "axios";

// async function fetchInitialTodos() {
//     try {
//         const response = await axios.get("/api/task/get/1");
//         return response.data;
//     } catch (error) {
//         console.error("fetch에러", error);
//         return [];
//     }
// }

// const initialTodos = [
//     {
//         id: 1,
//         done: false,
//         taskTitle: "Go to groceries",
//         taskTime: "08/23 14:00-15:00",
//         taskPlace: "Home-plus",
//     },
//     {
//         id: 2,
//         done: false,
//         taskTitle: "Go to Dance Acadmey",
//         taskTime: "08/23 14:00-15:00",
//         taskPlace: "Home-plus",
//     },
//     {
//         id: 3,
//         done: false,
//         taskTitle: "Go to library",
//         taskTime: "08/23 14:00-15:00",
//         taskPlace: "Home-plus",
//     },
//     {
//         id: 4,
//         done: false,
//         taskTitle: "Go to bookstore",
//         taskTime: "08/23 14:00-15:00",
//         taskPlace: "Home-plus",
//     },
//     {
//         id: 5,
//         done: true,
//         taskTitle: "Buy some snacks",
//         taskTime: "08/23 14:00-15:00",
//         taskPlace: "Home-plus",
//     },
// ];

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
    const [state, dispatch] = useReducer(todoReducer, []);
    const nextId = useRef(5);

    const [taskData, setTaskData] = useState({
        id: "",
        done: "",
        taskTitle: "",
        taskTime: "",
        taskPlace: "",
    });

    const getTask = () => {
        axios({
            method: "GET",
            url: "back_url",
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

    // useEffect(() => {
    //     async function loadInitialTodos() {
    //         const initialData = await getTask();
    //         dispatch({ type: "INITIALIZE", todos: initialData });
    //     }
    //     loadInitialTodos();
    // }, []);

    useEffect(() => {
        getTask();
    }, []);
    console.log(taskData);

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
