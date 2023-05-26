import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}