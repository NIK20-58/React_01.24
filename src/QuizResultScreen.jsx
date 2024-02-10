import { Button } from './Button'
import { QuizConfigDetails } from './QuizConfigDetails'
import { ResultInfo } from './ResultInfo'
import { SpentTime } from './SpentTime'

export const QuizResultScreen = () => {
  return (
    <div className="quiz-result-container">
      <h1>Thank you for completing this quiz! Here are your results:</h1>
      <ResultInfo />
      <QuizConfigDetails />
      <SpentTime />
      <div className="button-container">
        <Button text={'Restart'} />
        <Button text={'Choose another quiz'} />
      </div>
    </div>
  )
}
