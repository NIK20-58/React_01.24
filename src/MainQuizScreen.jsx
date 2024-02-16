import { Button } from './Button'
import { ConfirmationModal } from './ConfirmationModal'
import { ProgressBar } from './ProgressBar'
import { Question } from './Question'
import { Timer } from './Timer'

const questionList = ['What is your name?']

export const MainQuizScreen = () => {
  const handleEndBtnClick = () => {
    const modal = document.getElementById('myModal')
    modal.style.display = 'block'
  }

  return (
    <>
      <ProgressBar />
      <Timer />
      <Question questionText={questionList} />
      <br />
      <Button text={'End quiz'} onClick={handleEndBtnClick}></Button>
      <ConfirmationModal />
    </>
  )
}
