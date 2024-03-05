import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import React from 'react'
import { RootState } from './store/store'

export const StatisticScreen: React.FC<{}> = () => {
  const { difficulty, type, overallQuestions, categories, totalScore } = useSelector(
    (state: RootState) => state.statistics
  )

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}>
      <div className="statistics-container">
        <h1>Statistics</h1>

        <div className="empty-message">
          {overallQuestions > 0 ? (
            <>
              <p>
                <h3>Total number of questions: {overallQuestions}</h3>
                <h3>Correct answers: {totalScore}</h3>
                <h3>Difficulty:</h3>
                {Object.keys(difficulty).map((key) => (
                  <div key={key}>
                    {key} - {difficulty[key]}
                  </div>
                ))}
                <h4>Type:</h4>
                {Object.keys(type).map((key) => (
                  <div key={key}>
                    {key} - {type[key]}
                  </div>
                ))}
                <h4>Category:</h4>
                {Object.keys(categories).map((key) =>
                  categories[key] === 0 ? (
                    ''
                  ) : (
                    <div key={key}>
                      {key} - {categories[key]}
                    </div>
                  )
                )}
              </p>
            </>
          ) : (
            <p>No statistics data available 🗿</p>
          )}
        </div>
      </div>
    </motion.div>
  )
}
