import { useEffect, useState } from 'react'

export const Timer = () => {
  const [time, setTime] = useState(150)

  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, '0')
  const seconds = (time % 60).toString().padStart(2, '0')

  // setInterval(() => {
  //   setTime(Math.max(time - 1, 0))
  // }, 1000)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => Math.max(t - 1, 0))
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <p>
      Time: {minutes}:{seconds}
    </p>
  )
}
