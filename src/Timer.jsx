import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Timer = () => {
  const [time, setTime] = useState(10)
  const navigate = useNavigate()
  const lastQuestion = false

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
    const timer = setTimeout(() => {
      navigate('/result')
    }, 10000)

    if (lastQuestion) {
      navigate('/result')
    }

    return () => {
      clearTimeout(timer)
    }
  }, [navigate, lastQuestion])

  return (
    <p>
      Time: {minutes}:{seconds}
    </p>
  )
}
