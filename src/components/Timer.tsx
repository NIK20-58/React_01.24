import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setGameOver, setTimeSpent } from '../Slices/slices'
import React from 'react'
import { RootState } from '../store/store'

export const calcMinutes = (time: number) =>
  Math.floor(time / 60)
    .toString()
    .padStart(2, '0')

export const calcSeconds = (time: number) => (time % 60).toString().padStart(2, '0')

export const Timer: React.FC<{}> = () => {
  const state: RootState['user'] = useSelector((state: RootState) => state.user)
  const [time, setTime] = useState(state.config.time)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const minutes = calcMinutes(time)
  const seconds = calcSeconds(time)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((t) => Math.max(t - 1, 0))
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(
      () => {
        navigate('/result')
        dispatch(setGameOver())
      },
      1000 * (time > state.gameStat.timeSpent ? 10 : 0)
    ) // TIMER TIME

    return () => {
      clearTimeout(timer)
      dispatch(setTimeSpent(state.config.time - time))
    }
  }, [navigate, state.config.time, dispatch, time, state.gameStat.timeSpent])

  return (
    <p>
      Time: {minutes}:{seconds}
    </p>
  )
}
