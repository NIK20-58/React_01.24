import { Button } from './Button'
import { ProgressBar } from './ProgressBar'
import { Question } from './Question'
import { Timer } from './Timer'

const questionList = ['What is your name?']

export const MainQuizScreen = () => {
  return (
    <>
      <ProgressBar />
      <Timer />
      <Question questionText={questionList} />
      <br />
      <Button text={'End quiz'}></Button>
    </>
  )
}
