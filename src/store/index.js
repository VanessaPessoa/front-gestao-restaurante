import { persistStore } from 'redux-persist'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import persistReducers from './modules/reduxPersist'
import rootSaga from './modules/rootSaga'
import rootReducer from './modules/rootReducer'

const sagaMiddleware = createSagaMiddleware()
const store = createStore( persistReducers(rootReducer), applyMiddleware(sagaMiddleware) ) 

sagaMiddleware.run(rootSaga);


export const persistor = persistStore(store);
export default store;
