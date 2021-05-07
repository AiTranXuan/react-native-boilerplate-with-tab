import AsyncStorage from '@react-native-async-storage/async-storage'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

import user from './User/userReducers'
import app from './App/appReducers'
import theme from './Theme'
import createSagaMiddleware from 'redux-saga'
import notes from './Notes/notesReducers'
import rootSaga from './Saga/rootSaga'

const rootReducer = combineReducers({ notes, user, theme, app })

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
const persistor = persistStore(store)

export { store, persistor }
