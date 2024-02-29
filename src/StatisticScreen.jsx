import { useSelector } from 'react-redux'

export const StatisticScreen = () => {
  const { difficulty, type, overallQuestions, categories, totalScore } = useSelector(
    (state) => state.statistics
  )
  console.log(categories)
  return (
    <>
      <div className="statistics-container">
        <h1>Statistics</h1>

        <div className="empty-message">
          {overallQuestions > 0 ? (
            <>
              <p>
                <h3>Total number of questions: {overallQuestions}</h3>
                <h3>Correct answers: {totalScore}</h3>
                <h3>Difficulty:</h3>
                {Object.keys(difficulty).map((key) => (
                  <div key={key}>
                    {key} - {difficulty[key]}
                  </div>
                ))}
                <h4>Type:</h4>
                {Object.keys(type).map((key) => (
                  <div key={key}>
                    {key} - {type[key]}
                  </div>
                ))}
                <h4>Category:</h4>
                {Object.keys(categories).map((key) =>
                  categories[key] === 0 ? (
                    ''
                  ) : (
                    <div key={key}>
                      {key} - {categories[key]}
                    </div>
                  )
                )}
              </p>
            </>
          ) : (
            <p>No statistics data available 🗿</p>
          )}
        </div>
      </div>
    </>
  )
}
