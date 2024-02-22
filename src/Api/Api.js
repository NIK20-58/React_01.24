import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  config: {
    amount: 10,
    category: { id: '', value: '' },
    difficulty: 'Random',
    type: 'Random',
    time: 60,
    isLastQuestion: false
  },
  gameStat: {
    currentQuestionIndex: 0,
    score: 0,
    timeSpent: 0
  }
}

const startSlice = createSlice({
  name: 'start',
  initialState,
  reducers: {
    setAmount: (state, action) => {
      state.config.amount = action.payload
    },
    setDifficulty: (state, action) => {
      state.config.difficulty = action.payload
    },
    setType: (state, action) => {
      state.config.type = action.payload
    },
    setTime: (state, action) => {
      state.config.time = action.payload * 60
    },
    setCategory: (state, action) => {
      state.config.category.id = action.payload.id
      state.config.category.value = action.payload.value
    },
    setAnswer: (state, action) => {
      if (state.config.amount - 2 < state.gameStat.currentQuestionIndex) {
        state.config.isLastQuestion = true
      } else {
        if (action.payload.answer === action.payload.correct_answer) {
          state.gameStat.score += 1
        }
        state.gameStat.currentQuestionIndex += 1
      }
    },
    setTimeSpent: (state, action) => {
      state.gameStat.timeSpent = action.payload
    },
    setGameOver: (state) => {
      state.config.isLastQuestion = true
    }
  }
})

export const {
  setDifficulty,
  setType,
  setTime,
  setCategory,
  setAnswer,
  setTimeSpent,
  setAmount,
  setGameOver
} = startSlice.actions
export const setConfigReducer = startSlice.reducer

export const quizApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://opentdb.com/' }),
  reducerPath: 'allCategories',
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => `api_category.php`
    }),
    getAllQuestions: builder.query({
      query: ({ amount, category, difficulty, type }) => {
        return `api.php?amount=${amount}${category ? '&category=' + category : ''}${difficulty !== 'Random' ? '&difficulty=' + difficulty : ''}${type !== 'Random' ? '&type=' + type : ''}`
      }
    })
  })
})

export const { useGetAllCategoriesQuery, useGetAllQuestionsQuery } = quizApi
