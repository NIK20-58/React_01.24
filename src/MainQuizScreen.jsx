import { Button } from './components/Button'
import { ConfirmationModal } from './components/ConfirmationModal'
import { ProgressBar } from './components/ProgressBar'
import { Question } from './components/Question'
import { QuizResultScreen } from './QuizResultScreen'
import { Timer } from './components/Timer'
import { useSelector } from 'react-redux'

export const MainQuizScreen = () => {
  const handleEndBtnClick = () => {
    const modal = document.getElementById('myModal')
    modal.style.display = 'block'
  }

  const { isLoading, isLastQuestion } = useSelector((state) => state.user.config)

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
      {isLastQuestion ? (
        <QuizResultScreen />
      ) : (
        <>
          <ProgressBar />
          <Timer />
          <Question />
          <br />
          <Button text={'End quiz'} onClick={handleEndBtnClick}></Button>
          <ConfirmationModal />
        </>
      )}
    </>
  )
}
