import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/User/HomePage";
import OnChat from "./pages/Chat/OnChat";
import TaskPage from "./pages/Task/TaskPage";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/homepage" element={<HomePage />} />
                    <Route path="/onchat" element={<OnChat />} />
                    <Route path="/taskpage" element={<TaskPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
