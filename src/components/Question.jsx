import { useAnimate } from 'framer-motion'
import { useEffect } from 'react'
import { QuestionResponse } from './QuestionResponse'

export const Question = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(
      '#question_text',
      {
        opacity: [0, 1]
      },
      {
        duration: 1,
        delay: 0.1
      }
    )
    animate(
      '#question_btns',
      {
        opacity: [0, 1]
      },
      {
        duration: 1,
        delay: 0.2
      }
    )
  })

  return (
    <div ref={scope} className="question-response">
      <QuestionResponse />
    </div>
  )
}
