import * as types from "../types";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      // Substituir o codigo deste item
     return;
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
