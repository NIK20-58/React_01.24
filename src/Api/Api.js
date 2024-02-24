import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getQuestions = createAsyncThunk('questions', async (arg, { getState }) => {
  const {
    user: { config }
  } = getState()
  const response = await fetch(
    `https://opentdb.com/api.php?amount=${config.amount}${config.category.value ? '&category=' + config.category.id : ''}${config.difficulty !== 'Random' ? '&difficulty=' + config.difficulty : ''}${config.type !== 'Random' ? '&type=' + config.type : ''}`
  )
  const data = await response.json()
  return data
})

const initialState = {
  config: {
    amount: 10,
    category: { id: '', value: '' },
    difficulty: 'Random',
    type: 'Random',
    time: 60,
    isLastQuestion: false,
    questions: '',
    isLoading: undefined
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
    setResetConfig: (state) => {
      state.config.amount = 10
      state.config.category = { id: '', value: '' }
      state.config.difficulty = 'Random'
      state.config.type = 'Random'
      state.config.time = 60
      state.config.isLastQuestion = false
      state.gameStat.currentQuestionIndex = 0
      state.gameStat.score = 0
      state.gameStat.timeSpent = 0
    },
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
    },
    setRestart: (state) => {
      state.config.isLastQuestion = false
      state.config.questions = ''
      state.gameStat.currentQuestionIndex = 0
      state.gameStat.score = 0
      state.gameStat.timeSpent = 0
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getQuestions.pending, (state) => {
      state.config.isLoading = true
    })
    builder.addCase(getQuestions.fulfilled, (state, action) => {
      state.config.isLoading = false
      state.config.questions = action.payload.results
    })
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
  setGameOver,
  setResetConfig,
  setRestart
} = startSlice.actions
export const setConfigReducer = startSlice.reducer

export const quizApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://opentdb.com/' }),
  reducerPath: 'allCategories',
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => `api_category.php`
    })
  })
})

export const { useGetAllCategoriesQuery } = quizApi
