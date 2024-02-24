import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setGameOver, setTimeSpent } from './Slices/slices'

export const Timer = () => {
  const state = useSelector((state) => state.user)
  const [time, setTime] = useState(state.config.time === '' ? 60 : state.config.time)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, '0')
  const seconds = (time % 60).toString().padStart(2, '0')

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
      dispatch(setTimeSpent((state.config.time === '' ? 60 : state.config.time) - time))
    }
  }, [navigate, state.config.time, dispatch, time, state.gameStat.timeSpent])

  return (
    <p>
      Time: {minutes}:{seconds}
    </p>
  )
}
