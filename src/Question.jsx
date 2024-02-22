import { setAnswer } from './Api/Api'
import { Button } from './Button'
import { useSelector, useDispatch } from 'react-redux'

export const Question = ({ questionText }) => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const currentQuestionIndex = state.user.gameStat.currentQuestionIndex
  const correctAnswer = questionText[currentQuestionIndex].correct_answer

  console.log('Hey', state)

  return (
    <div className="question-response">
      <p>{questionText[currentQuestionIndex].question}</p>
      {questionText[currentQuestionIndex].incorrect_answers.map((text) => (
        <Button
          text={text}
          key={text}
          onClick={() =>
            dispatch(
              setAnswer({
                answer: text,
                correct_answer: correctAnswer
              })
            )
          }
        />
      ))}
      <Button
        text={questionText[currentQuestionIndex].correct_answer}
        onClick={() =>
          dispatch(
            setAnswer({
              answer: questionText[currentQuestionIndex].correct_answer,
              correct_answer: correctAnswer
            })
          )
        }
      />
    </div>
  )
}
