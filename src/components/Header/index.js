import {Nav, Button} from './style'
import { useNavigate } from 'react-router-dom'
import {useSelector} from 'react-redux'
import ButtonLogout from "../ButtonLogout";
import Carrinho from '../Carrinho';

function Header(){

    let navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const perfil = useSelector(state => state.auth.user.perfil); 

    function handleClick() {
        navigate("/login");
    }

    function handleCadastrar() {
        navigate("/cadastrar-restaurante");
    }

    return(
        <header>
            <Nav>
                <div className = "box-button">
                    {isLoggedIn && perfil !== 'restaurante' &&(
                       <Carrinho />
                    )}
                </div>

                {!isLoggedIn ? (
                       <>
                        <Button onClick={handleClick}>
                            <span> Entrar</span>
                        </Button>
                        <Button onClick={handleCadastrar}>
                            <span> Cadastrar restaurante</span>
                        </Button>
                       </>
                        
                    ):(
                        <ButtonLogout />
                    )}
            </Nav>
        </header>
    )
}

export default Header;