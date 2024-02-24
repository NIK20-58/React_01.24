import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quizApi } from '../Slices/slices'
import { setConfigReducer } from '../Slices/slices'

const rootReducer = combineReducers({
  [quizApi.reducerPath]: quizApi.reducer,
  user: setConfigReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(quizApi.middleware)
})
