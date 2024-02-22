import { useSelector } from 'react-redux'
export const ResultInfo = () => {
  const state = useSelector((state) => state.user)
  return (
    <>
      <p>
        You answered <span id="correct-answers">{state.gameStat.score}</span> out of
        <span id="total-questions">{` ${state.config.amount}`}</span> questions correctly
      </p>
    </>
  )
}
