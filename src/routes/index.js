import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Page from "../pages"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<Page.Login />} />
                <Route path="/admin"  element={<Page.Admin />} />
                <Route path="/my-restaurants"  element={<Page.ListRestaurant />} />
                <Route path="/restaurant"  element={<Page.RestaurantDetail />} />

            </Routes>
        </BrowserRouter>
    );
}