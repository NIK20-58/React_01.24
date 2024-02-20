import { Button } from './Button'
import { Select } from './Select'
import { NumInput } from './NumInput'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useGetAllCategoriesQuery } from './Api/Api'

// const categories = [
//   'Any Category',
//   'General Knowledge',
//   'Entertainment: Books',
//   'Entertainment: Film',
//   'Entertainment: Music',
//   'Entertainment: Musicals & Theatres',
//   'Entertainment: Television',
//   'Entertainment: Video Games',
//   'Entertainment: Board Games',
//   'Science & Nature',
//   'Science: Computers',
//   'Science: Mathematics',
//   'Mythology',
//   'Sports',
//   'Geography',
//   'History',
//   'Politics',
//   'Art',
//   'Celebrities',
//   'Animals',
//   'Vehicles',
//   'Entertainment: Comics',
//   'Science: Gadgets',
//   'Entertainment: Japanese Anime & Manga',
//   'Entertainment: Cartoon & Animations'
// ]
// const categories = await fetch('https://opentdb.com/api_category.php').then((data) => data.json())
const difficulties = ['Any Difficulty', 'Easy', 'Medium', 'Hard']
const types = ['Any Type', 'Multiple Choice', 'True / False']
const time = ['1m', '2m', '5m']

export const FirstScreen = () => {
  // const { currentData } = useGetAllCategoriesQuery()
  const { currentData, isLoading, isFetching, isError } = useGetAllCategoriesQuery()
  const data = useSelector((state) => state)
  console.log('State', data)

  const navigate = useNavigate()
  const handleStatistic = () => {
    navigate('/statistic')
  }

  const handleStartQuiz = () => {
    navigate('start')
  }

  if (isFetching || isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return (
    <>
      <div className="container">
        <NumInput />
        <div className="select-wrapper">
          <Select options={currentData.trivia_categories} fetched type={'Category'} />
          <Select options={difficulties} fetched={false} type={'Difficulty'} />
          <Select options={types} fetched={false} type={'Type'} />
          <Select options={time} fetched={false} type={'Time'} />
        </div>
        <div className="button-wrapper">
          <Button text="Start quiz" onClick={handleStartQuiz} />
          <Button text="See my statistics" onClick={handleStatistic} />
        </div>
      </div>
    </>
  )
}
