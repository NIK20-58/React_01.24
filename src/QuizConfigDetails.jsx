import { useSelector } from 'react-redux'
export const QuizConfigDetails = () => {
  const { type, category, time, difficulty } = useSelector((state) => state.user.config)
  return (
    <div className="quiz-info">
      <p>
        <strong>Quiz Configuration:</strong>
      </p>
      <ul>
        <li>
          Type:{' '}
          {type === 'boolean' ? 'True / False' : type === 'multiple' ? 'Multiple Choice' : 'Random'}
        </li>
        <li>Category: {category.value ? category.value : 'Random'}</li>
        <li>Time: {time} seconds</li>
        <li>Difficulty: {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</li>
      </ul>
    </div>
  )
}
