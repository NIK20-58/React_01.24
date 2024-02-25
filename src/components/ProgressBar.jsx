import { useSelector } from 'react-redux'
export const ProgressBar = () => {
  const state = useSelector((state) => state.user)

  return (
    <div className="progress-container">
      <div className="progress-bar" id="myBar" style={{ width: `${state.config.progressBar}%` }}>
        {state.gameStat.currentQuestionIndex + 1} out of {state.config.amount}
      </div>
    </div>
  )
}
