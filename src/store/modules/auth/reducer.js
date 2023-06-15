import * as types from '../types'

const initialState = {
    isLoggedIn: false,
    user: {},
    isLoading: false,
};

export default function reducer(state = initialState, action){
    switch (action.type) {
        case types.LOGIN_SUCCESS: {
          var perfil = "cliente";
          if(action.payload.nomeRestaurante){
            perfil="restaurante"
          }
          const dataUser = {
            id: action.payload.id,
            perfil
          }
          const newState = { ...state };
          newState.isLoggedIn = true;
          newState.user = dataUser ;
          newState.isLoading = false;
          return newState;
        }
    
        case types.LOGIN_FAILURE: {
          const newState = { ...initialState };
          return newState;
        }
    
        case types.LOGIN_REQUEST: {
          const newState = { ...state };
          newState.isLoading = true;
          return newState;
        }
    
        default:{
            return state;
        }
    }
} 