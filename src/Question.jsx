import { setAnswer } from './Slices/slices'
import { Button } from './Button'
import { useSelector, useDispatch } from 'react-redux'

export const Question = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const currentQuestionIndex = state.user.gameStat.currentQuestionIndex
  const questions = state.user.config.questions
  const correctAnswer = questions[currentQuestionIndex].correct_answer

  return (
    <div className="question-response">
      <p>{questions[currentQuestionIndex].question}</p>
      {questions[currentQuestionIndex].incorrect_answers.map((text) => (
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
        text={questions[currentQuestionIndex].correct_answer}
        onClick={() =>
          dispatch(
            setAnswer({
              answer: questions[currentQuestionIndex].correct_answer,
              correct_answer: correctAnswer
            })
          )
        }
      />
    </div>
  )
}
