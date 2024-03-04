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

export const QuestionResponse = () => {
  const dispatch = useDispatch()
  const {
    gameStat: { currentQuestionIndex },
    config: { questions, amount }
  } = useSelector((state) => state.user)
  const correctAnswer = questions[currentQuestionIndex].correct_answer
  const percentage = Math.floor(100 / amount)

  const handleAnswer = (answer) => {
    dispatch(
      setAnswer({
        answer,
        correct_answer: correctAnswer,
        progressBar: percentage
      })
    )
    dispatch(addQuestion())
    dispatch(addCategory(decode(questions[currentQuestionIndex].category)))
    dispatch(addDifficulty(questions[currentQuestionIndex].difficulty))
    dispatch(addType(questions[currentQuestionIndex].type))
    if (answer === correctAnswer) {
      dispatch(addTotalScore())
    }
  }
  return (
    <>
      <p id="question_text">{decode(questions[currentQuestionIndex].question)}</p>
      <div id="question_btns" className="button-container_question">
        {questions[currentQuestionIndex].incorrect_answers.map((text) => (
          <Button
            key={text}
            text={decode(text)}
            onClick={() => {
              handleAnswer(decode(text))
            }}
          />
        ))}
        <Button
          text={decode(questions[currentQuestionIndex].correct_answer)}
          onClick={() => {
            handleAnswer(decode(questions[currentQuestionIndex].correct_answer))
          }}
        />
      </div>
    </>
  )
}
