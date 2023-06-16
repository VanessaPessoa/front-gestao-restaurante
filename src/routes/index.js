import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import * as Page from "../pages";
import { useSelector } from "react-redux";
import { RestaurantMenu } from "@mui/icons-material";

function RequireAuth({ children }) {
  const signed = useSelector((state) => state.auth.isLoggedIn);

  if (!signed) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default function Router() {
  const perfil = useSelector((state) => state.auth.user.perfil);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" index element={<Page.Login />} />
       
        {/* Adicionar rota principal */}

        <Route path="/cadastrar" element={<Page.CadastrarCliente />} />
        
        <Route
          path="/cadastrar-restaurante"
          element={<Page.CadastroRestaurante />}
        />
        
        <Route
          path="menu/:id"
          element={
              <RequireAuth>
                <Page.RestauranteMenu />
              </RequireAuth>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
