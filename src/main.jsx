import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { FirstScreen } from './FirstScreen'
import { MainQuizScreen } from './MainQuizScreen'
import { QuizResultScreen } from './QuizResultScreen'
import { StatisticScreen } from './StatisticScreen'
import { Provider } from 'react-redux'
import { store } from './store/store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <FirstScreen />
  },
  {
    path: '/start',
    element: <MainQuizScreen />
  },
  {
    path: '/result',
    element: <QuizResultScreen />
  },
  {
    path: '/statistic',
    element: <StatisticScreen />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
