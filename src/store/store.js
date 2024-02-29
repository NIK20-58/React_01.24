import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setConfigReducer, setStatisticsReducer } from '../Slices/slices'
import storage from 'redux-persist/lib/storage'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'

const rootReducer = combineReducers({
  user: setConfigReducer,
  statistics: setStatisticsReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['statistics']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)
