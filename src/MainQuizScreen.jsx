import { Button } from './Button'
import { ConfirmationModal } from './ConfirmationModal'
import { ProgressBar } from './ProgressBar'
import { Question } from './Question'
import { QuizResultScreen } from './QuizResultScreen'
import { Timer } from './Timer'
import { useSelector } from 'react-redux'

export const MainQuizScreen = () => {
  const handleEndBtnClick = () => {
    const modal = document.getElementById('myModal')
    modal.style.display = 'block'
  }

  const { isLoading, isLastQuestion } = useSelector((state) => state.user.config)
  // console.log(state)
  // const { currentData, isError, isLoading, isFetching } = useGetAllQuestionsQuery({
  //   amount: amount,
  //   category: category.id,
  //   difficulty: difficulty,
  //   type: type
  // })

  if (isLoading) {
    return <p>Loading...</p>
  }

  // console.log(currentData)

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
