import { Nav, Button } from "./style";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ButtonLogout from "../ButtonLogout";
import Carrinho from "../Carrinho";
import Setting from "../Setting";

function Header() {
  let navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const perfil = useSelector((state) => state.auth.user.perfil);

  function handleClick() {
    navigate("/login");
  }

  function handleCadastrar() {
    navigate("/cadastrar-restaurante");
  }

  return (
    <header>
      <Nav>
        {isLoggedIn && perfil !== "restaurante" && (
          <div className="box-button">
            <Carrinho />
            <Setting />
          </div>
        )}

        {!isLoggedIn ? (
          <>
            <Button onClick={handleClick}>
              <span> Entrar</span>
            </Button>
            <Button onClick={handleCadastrar}>
              <span> Cadastrar restaurante</span>
            </Button>
          </>
        ) : (
          <ButtonLogout />
        )}
      </Nav>
    </header>
  );
}

export default Header;
