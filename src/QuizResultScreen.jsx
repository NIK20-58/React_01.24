import { useNavigate } from 'react-router-dom'
import { Button } from './Button'
import { QuizConfigDetails } from './QuizConfigDetails'
import { ResultInfo } from './ResultInfo'
import { SpentTime } from './SpentTime'

export const QuizResultScreen = () => {
  const navigate = useNavigate()
  const handleAnotherQuiz = () => {
    navigate('/')
  }
  const handleRestart = () => {
    navigate('/start')
  }

  return (
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
  )
}