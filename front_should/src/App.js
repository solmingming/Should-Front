import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/User/HomePage";
import OnChat from "./pages/Chat/OnChat";
import TaskPage from "./pages/Task/TaskPage";
import WelcomePage from "./pages/Welcome/WelcomePage";
import SignInPage from "./pages/Login/SignInPage";
import SignUpPage from "./pages/Login/SignUpPage";
import Choice_AiPage from "./pages/Login/Choice_AiPage";
 // Add this line

function App() {
    return (
    
            <Router>
                <Routes>
                    <Route path="/homepage" element={<HomePage />} />
                    <Route path="/onchat" element={<OnChat />} />
                    <Route path="/taskpage" element={<TaskPage />} />
                    <Route path="/signinpage" element={<SignInPage />} />
                    <Route path="/signuppage" element={<SignUpPage />} />
                    <Route path="/choiceaipage" element={<Choice_AiPage />} /> 
                   
                    <Route path="/" element={<WelcomePage />} />
                </Routes>
            </Router>
        
    );
}

export default App;
