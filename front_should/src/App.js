import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/User/HomePage";
import OnChat from "./pages/Chat/OnChat";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/homepage" element={<HomePage />} />
                    <Route path="/onchat" element={<OnChat />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
