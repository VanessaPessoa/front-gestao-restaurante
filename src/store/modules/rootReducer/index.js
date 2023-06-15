import { combineReducers } from 'redux'

import auth from '../auth/reducer'
import restaurante from '../cadastroRestaurante/reducer'

export default combineReducers({
    auth,
    restaurante
})