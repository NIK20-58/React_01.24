import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

export const ProgressBar = () => {
  const state = useSelector((state) => state.user)

  return (
    <>
      <div className="progress-container">
        <motion.div
          className="progress-bar"
          id="myBar"
          style={{ width: `${state.config.progressBar}%` }}
          layoutId="bar">
          {state.gameStat.currentQuestionIndex + 1} out of {state.config.amount}
        </motion.div>
      </div>
    </>
  )
}
