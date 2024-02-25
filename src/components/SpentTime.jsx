import { useSelector } from 'react-redux'
export const SpentTime = () => {
  const { timeSpent } = useSelector((state) => state.user.gameStat)
  return (
    <p>
      You completed the quiz in <span id="quiz-time"> ⏱ {timeSpent} seconds</span>.
    </p>
  )
}
