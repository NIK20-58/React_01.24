import { setAnswer } from '../Slices/slices'
import { Button } from './Button'
import { useSelector, useDispatch } from 'react-redux'

export const Question = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.user)
  const currentQuestionIndex = state.gameStat.currentQuestionIndex
  const questions = state.config.questions
  const correctAnswer = questions[currentQuestionIndex].correct_answer
  const percentage = Math.floor(100 / state.config.amount)

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
                correct_answer: correctAnswer,
                progressBar: percentage
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
              correct_answer: correctAnswer,
              progressBar: percentage
            })
          )
        }
      />
    </div>
  )
}
