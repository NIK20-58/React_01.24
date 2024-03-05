import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
export const SpentTime: React.FC<{}> = () => {
  const { timeSpent } = useSelector((state: RootState) => state.user.gameStat)
  return (
    <p>
      You completed the quiz in <span id="quiz-time"> ⏱ {timeSpent} seconds</span>.
    </p>
  )
}
