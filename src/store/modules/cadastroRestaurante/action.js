import * as types from '../types'

export function restauranteValue(data){
    return{
        type: types.RESTAURANTE_VALUE,
        payload: data
    };
}
