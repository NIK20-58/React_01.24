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

interface rootState {
  user: {
    catLoad: {
      isLoading: boolean
      categories: []
    }
    config: {
      amount: number
      category: { id: string; value: string }
      difficulty: string
      type: string
      time: number
      isLastQuestion: boolean
      questions:
        | {
            // [key: string]: string[] | string
            ['type']: string
            ['difficulty']: string
            ['category']: string
            ['question']: string
            ['correct_answer']: string
            ['incorrect_answers']: string[]
          }[]
        | {}

      isLoading: boolean | undefined
      progressBar: number
    }
    gameStat: {
      currentQuestionIndex: number
      score: number
      timeSpent: number
    }
  }
  statistics: {
    ['overallQuestions']: number
    ['totalScore']: number
    ['categories']: {
      [key: string]: number
    }
    ['difficulty']: {
      [key: string]: number
    }
    ['type']: {
      [key: string]: number
    }
  }
}

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

export type RootState = rootState
export type AppDispatch = typeof store.dispatch
