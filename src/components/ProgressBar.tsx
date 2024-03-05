import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import React from 'react'
import { RootState } from '../store/store'

export const ProgressBar: React.FC<{}> = () => {
  const {
    user: { config, gameStat }
  }: RootState = useSelector((state: RootState) => state)

  return (
    <>
      <div className="progress-container">
        <motion.div
          className="progress-bar"
          id="myBar"
          style={{ width: `${config.progressBar}%` }}
          layoutId="bar">
          {gameStat.currentQuestionIndex + 1} out of {config.amount}
        </motion.div>
      </div>
    </>
  )
}
