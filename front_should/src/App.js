import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/User/HomePage";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/homepage" element={<HomePage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
