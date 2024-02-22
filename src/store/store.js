import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quizApi } from '../Api/Api'
import { setConfigReducer } from '../Api/Api'

const rootReducer = combineReducers({
  [quizApi.reducerPath]: quizApi.reducer,
  user: setConfigReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(quizApi.middleware)
})
