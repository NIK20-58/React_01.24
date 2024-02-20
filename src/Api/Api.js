import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'
import { createSlice } from '@reduxjs/toolkit'

// export const fetchAllCategories = createAsyncThunk('fetchCats', async (thunkAPI) => {
//   const response = await fetch('https://opentdb.com/api_category.php')
//   const data = await response.json()
//   console.log(data)
//   return data
// })

// const initialState = {
//   categories: {
//     value: [],
//     status: ''
//   }
// }

// const catSlice = createSlice({
//   name: 'categories',
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchAllCategories.pending)
//     builder.addCase(fetchAllCategories.fulfilled, (state, action) =>
//       state.categories.push(action.payload)
//     )
//     builder.addCase(fetchAllCategories.rejected)
//   }
// })

const initialState = {
  config: {
    category: '',
    difficulty: '',
    type: '',
    time: ''
  }
}

const startSlice = createSlice({
  name: 'start',
  initialState,
  reducers: {
    setDifficulty: (state, action) => {
      state.config.difficulty = action.payload
    },
    setType: (state, action) => {
      state.config.type = action.payload
    },
    setTime: (state, action) => {
      state.config.time = action.payload
    },
    setCategory: (state, action) => {
      console.log('Payload', action.payload)
      state.config.category = action.payload
    }
  }
})

export const { setDifficulty, setType, setTime, setCategory } = startSlice.actions
export const setConfigReducer = startSlice.reducer

export const quizApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://opentdb.com/' }),
  reducerPath: 'fetchCat',
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => `api_category.php`
    })
  })
})

export const { useGetAllCategoriesQuery } = quizApi
