import { BtnLogout } from "./styles";
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from "react-redux";

import * as actions from "../../store/modules/auth/action";
import { useNavigate } from "react-router-dom";

export default function ButtonLogout() {
  let dispatch = useDispatch();
  let navigate = useNavigate();


  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());

    navigate("/");
  };
  return (
            <BtnLogout onClick={handleLogout}>
             <LogoutIcon/> <span> Sair</span>
            </BtnLogout>
  );
}
