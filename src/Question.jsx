import { Button } from './Button'

const trueFalse = ['True', 'False']

export const Question = ({ questionText }) => {
  return questionText.map((item) => {
    return (
      <div key={item} className="question-response">
        <p>The question: {item}</p>
        {trueFalse.map((text) => {
          return <Button text={text} key={text} />
        })}
      </div>
    )
  })
}
