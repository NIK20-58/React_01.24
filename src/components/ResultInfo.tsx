import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
export const ResultInfo: React.FC<{}> = () => {
  const state: RootState['user'] = useSelector((state: RootState) => state.user)
  return (
    <>
      <p>
        You answered <span id="correct-answers">{state.gameStat.score}</span> out of
        <span id="total-questions">{` ${state.config.amount}`}</span> questions correctly
      </p>
    </>
  )
}
