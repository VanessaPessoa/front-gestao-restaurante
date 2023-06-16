import * as types from '../types'

export const addItem = (item) => {
    return {
      type: types.ADD_ITEM,
      payload: item,
    };
  };

  export const limparCarrinho = () => {
    return {
      type: types.LIMPAR_CARRINHO,
    };
  };

  export const removeItem = (itemId) => {
    return {
      type: types.REMOVE_ITEM,
      payload: itemId,
    };
  }