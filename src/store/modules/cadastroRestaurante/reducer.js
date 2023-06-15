import * as types from '../types'

const initialState = {
    restaurante: {},
};

export default function reducer(state = initialState, action){
    switch (action.type) {
        case types.RESTAURANTE_VALUE: {
          const newState = { ...state };
          newState.restaurante = action.payload;
          return newState;
        }
    
        default:{
            return state;
        }
    }
} 