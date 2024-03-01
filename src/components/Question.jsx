import {
  addCategory,
  addDifficulty,
  addQuestion,
  addType,
  setAnswer,
  addTotalScore
} from '../Slices/slices'
import { Button } from './Button'
import { useSelector, useDispatch } from 'react-redux'
import { decode } from 'html-entities'

export const Question = () => {
  const dispatch = useDispatch()
  const {
    gameStat: { currentQuestionIndex },
    config: { questions }
  } = useSelector((state) => state.user)
  const state = useSelector((state) => state.user)
  const correctAnswer = questions[currentQuestionIndex].correct_answer
  const percentage = Math.floor(100 / state.config.amount)

  return (
    <div className="question-response">
      <p>{decode(questions[currentQuestionIndex].question)}</p>
      {questions[currentQuestionIndex].incorrect_answers.map((text) => (
        <Button
          text={decode(text)}
          key={text}
          onClick={() => {
            dispatch(
              setAnswer({
                answer: text,
                correct_answer: correctAnswer,
                progressBar: percentage
              })
            )
            dispatch(addQuestion())
            dispatch(addCategory(decode(questions[currentQuestionIndex].category)))
            dispatch(addDifficulty(questions[currentQuestionIndex].difficulty))
            dispatch(addType(questions[currentQuestionIndex].type))
          }}
        />
      ))}
      <Button
        text={decode(questions[currentQuestionIndex].correct_answer)}
        onClick={() => {
          dispatch(
            setAnswer({
              answer: questions[currentQuestionIndex].correct_answer,
              correct_answer: correctAnswer,
              progressBar: percentage
            })
          )
          dispatch(addQuestion())
          dispatch(addCategory(decode(questions[currentQuestionIndex].category)))
          dispatch(addDifficulty(questions[currentQuestionIndex].difficulty))
          dispatch(addType(questions[currentQuestionIndex].type))
          dispatch(addTotalScore())
        }}
      />
    </div>
  )
}
