import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../store/store'

export const getQuestions = createAsyncThunk('questions', async (arg, thunkAPI) => {
  const {
    user: { config }
  } = thunkAPI.getState() as RootState
  const response = await fetch(
    `https://opentdb.com/api.php?amount=${config.amount}${config.category.value ? '&category=' + config.category.id : ''}${config.difficulty !== 'Random' ? '&difficulty=' + config.difficulty : ''}${config.type !== 'Random' ? '&type=' + config.type : ''}`
  )
  const data = await response.json()
  return data
})

export const fetchCategories = createAsyncThunk('categories', async () => {
  const response = await fetch('https://opentdb.com/api_category.php')
  const data = await response.json()

  return data.trivia_categories
})

const initialState: RootState['user'] = {
  catLoad: {
    isLoading: false,
    categories: []
  },
  config: {
    amount: 10,
    category: { id: '', value: '' },
    difficulty: 'Random',
    type: 'Random',
    time: 60,
    isLastQuestion: false,
    questions: {},
    isLoading: undefined,
    progressBar: 13
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
      state.config.progressBar = 13
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
      if (action.payload.answer === action.payload.correct_answer) {
        state.gameStat.score += 1
      }
      if (state.config.amount - 2 < state.gameStat.currentQuestionIndex) {
        state.config.isLastQuestion = true
      } else {
        state.gameStat.currentQuestionIndex += 1
        state.config.progressBar += action.payload.progressBar
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
      state.config.questions = {}
      state.config.progressBar = 13
      state.gameStat.currentQuestionIndex = 0
      state.gameStat.score = 0
      state.gameStat.timeSpent = 0
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.catLoad.isLoading = true
    })
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.catLoad.isLoading = false
      state.catLoad.categories = action.payload
    })
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

const statisticsInitialState = {
  overallQuestions: 0,
  totalScore: 0,
  categories: {
    'General Knowledge': 0,
    'Entertainment: Books': 0,
    'Entertainment: Film': 0,
    'Entertainment: Music': 0,
    'Entertainment: Musicals & Theatres': 0,
    'Entertainment: Television': 0,
    'Entertainment: Video Games': 0,
    'Entertainment: Board Games': 0,
    'Science & Nature': 0,
    'Science: Computers': 0,
    'Science: Mathematics': 0,
    Mythology: 0,
    Sports: 0,
    Geography: 0,
    History: 0,
    Politics: 0,
    Art: 0,
    Celebrities: 0,
    Animals: 0,
    Vehicles: 0,
    'Entertainment: Comics': 0,
    'Science: Gadgets': 0,
    'Entertainment: Japanese Anime & Manga': 0,
    'Entertainment: Cartoon & Animations': 0
  },
  difficulty: {
    Easy: 0,
    Medium: 0,
    Hard: 0
  },
  type: { 'True/False': 0, 'Multiple choice': 0 }
}

const statisticSlice = createSlice({
  name: 'Statistics',
  initialState: statisticsInitialState,
  reducers: {
    addQuestion: (state) => {
      state.overallQuestions += 1
    },
    addTotalScore: (state) => {
      state.totalScore += 1
    },
    addCategory: (state, action: { payload: string }) => {
      state.categories[action.payload] += 1
    },
    addType: (state, action) => {
      action.payload === 'multiple'
        ? (state.type['Multiple choice'] += 1)
        : (state.type['True/False'] += 1)
    },
    addDifficulty: (state, action) => {
      action.payload === 'easy'
        ? (state.difficulty.Easy += 1)
        : action.payload === 'medium'
          ? (state.difficulty.Medium += 1)
          : (state.difficulty.Hard += 1)
    }
  }
})

export const { addQuestion, addCategory, addType, addDifficulty, addTotalScore } =
  statisticSlice.actions
export const setStatisticsReducer = statisticSlice.reducer
