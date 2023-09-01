import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/User/HomePage";
import OnChat from "./pages/Chat/OnChat";
import TaskPage from "./pages/Task/TaskPage";
import WelcomePage from "./pages/Welcome/WelcomePage";
import SignInPage from "./pages/Login/SignInPage";
import SignUpPage from "./pages/Login/SignUpPage";
import Choice_AiPage from "./pages/Login/Choice_AiPage";
import StartChatDaPage from "./pages/StartChatda/StartChatDaPage";
import SelectSignUpPage from "./pages/SelectSignUpPage/SelectSignUpPage";
import KakaoSignUpPage from "./pages/KakaoSignupPage/KakaoSignUpPage";
import Calendar from "./pages/Calendar/Calendar";
import DatePage from "./pages/Calendar/DatePage";

import Chat from "./pages/Chat/Chat";

import { TodoProvider } from "./components/TaskComp/TaskContext";

function App() {
    return (
        <TodoProvider>
            <Router>
                <Routes>
                    <Route path="/homepage" element={<HomePage />} />
                    <Route path="/onchat" element={<OnChat />} />
                    <Route path="/taskpage" element={<TaskPage />} />
                    <Route path="/signinpage" element={<SignInPage />} />
                    <Route path="/signuppage" element={<SignUpPage />} />
                    <Route path="/choiceaipage" element={<Choice_AiPage />} />
                    <Route path="/welcomepage" element={<WelcomePage />} />
                    <Route
                        path="/selectsignuppage"
                        element={<SelectSignUpPage />}
                    />
                    <Route
                        path="/kakaosignuppage"
                        element={<KakaoSignUpPage />}
                    />
                    <Route path="/calendar" element={<Calendar />} />

                    <Route
                        path="/startchatdapage"
                        element={<StartChatDaPage />}
                    />
                    <Route path="/calendar/:date" element={<DatePage />} />
                    <Route path="/" element={<StartChatDaPage />} />
                </Routes>
            </Router>
        </TodoProvider>
    );
}

export default App;
