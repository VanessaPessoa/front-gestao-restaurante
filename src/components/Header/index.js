import {Nav, Search, Button} from './style'
import { useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

import * as actions from '../../store/modules/auth/action'

function Header(){

    let navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const perfil = useSelector(state => state.auth.user.role); 

    let dispatch = useDispatch();

    function handleClick() {
        navigate("/login");
    }

    const handleLogout = e =>{
        e.preventDefault();
        dispatch(actions.loginFailure());
        
        navigate('/')
    }

    return(
        <header>
            <Nav>
             
                <Search 
                    placeholder = "Busque por item ou loja" 
                    type="search"
                />

                <div className = "box-button">
                    {!isLoggedIn ? (
                        <Button onClick={handleClick}>
                            <span> Entrar</span>
                        </Button>
                    ):(
                        <Button onClick={handleLogout}>
                            <span> Sair</span>
                         </Button>
                    )}

                    {perfil !== 'restaurante' &&(
                        <Button>
                            <span> Sacola</span>
                        </Button>
                    )}
                   {perfil === 'restaurante' &&( 
                        <Button className="ml-3">
                        </Button>
                    )}
                </div>
            </Nav>
        </header>
    )
}

export default Header;