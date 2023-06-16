import { combineReducers } from 'redux'

import auth from '../auth/reducer'
import carrinho from '../carrinho/reducer'

export default combineReducers({
    auth,
    carrinho
})