import * as types from "../types";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      const {id: pratoId, name, price} = action.payload;
      const itemExists = state.find(item => item.pratoId === pratoId);
      if (itemExists) {
        return state.map(item => item.id === pratoId ? {...item, quantidade: item.quantidade + 1} : item);
      } else {
        return [...state, {pratoId, name, price, quantidade: 1}];
      }
    case types.REMOVE_ITEM:
      const itemId = action.payload;
      return state.filter(item => item.id !== itemId);
    case types.LIMPAR_CARRINHO:
      return [];
    default:
      return state;
  }
};

export default cartReducer;
