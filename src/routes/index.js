import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import * as Page from "../pages"
import { useSelector } from "react-redux";

function RequireAuth({ children }) {

    const signed = useSelector((state) => state.auth.isLoggedIn);

    if (!signed) {
      return <Navigate to="/login" />;
    }
  
    return children;
}

export default function Router() {
    const perfil = useSelector(state => state.auth.user.perfil); 
    console.log(perfil)
    return (
        <BrowserRouter>
        
            <Routes >
                <Route path="/login" index element={<Page.Login />} />
                <Route
                    path="/admin"
                    element={
                    <RequireAuth>
                        <Page.Admin />
                    </RequireAuth>
                    }
                />
                
                <Route
                    path="/"
                    element={
                    <RequireAuth>
                       {perfil === 'cliente' ? <Page.Home /> : < Page.RestaurantDetail />}
                    </RequireAuth>
                    }
                />
                <Route path="/restaurant"  element={<Page.RestaurantDetail />} />
                <Route path="/cadastrar" element={<Page.CadastrarCliente />} />
            </Routes >
         </BrowserRouter>
    );
}