import { useNavigate } from 'react-router-dom'
import { Button } from './components/Button'
import { QuizConfigDetails } from './components/QuizConfigDetails'
import { ResultInfo } from './components/ResultInfo'
import { SpentTime } from './components/SpentTime'
import { useDispatch } from 'react-redux'
import { getQuestions, setResetConfig, setRestart } from './Slices/slices'
import { motion } from 'framer-motion'

export const QuizResultScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleAnotherQuiz = () => {
    navigate('/')
    dispatch(setResetConfig())
  }
  const handleRestart = () => {
    dispatch(setRestart())
    dispatch(getQuestions())
    navigate('/start')
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}>
      <div className="quiz-result-container">
        <h1>Thank you for completing this quiz! Here are your results:</h1>
        <ResultInfo />
        <QuizConfigDetails />
        <SpentTime />
        <div className="button-container">
          <Button text={'Restart'} onClick={handleRestart} />
          <Button text={'Choose another quiz'} onClick={handleAnotherQuiz} />
        </div>
      </div>
    </motion.div>
  )
}
