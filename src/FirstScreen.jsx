import { Button } from './Button'
import { Select } from './Select'
import { NumInput } from './NumInput'
import { useNavigate } from 'react-router-dom'
import { useGetAllCategoriesQuery } from './Api/Api'
import { useSelector } from 'react-redux'

const difficulties = ['Any Difficulty', 'Easy', 'Medium', 'Hard']
const types = ['Any Type', 'Multiple Choice', 'True / False']
const time = ['1m', '2m', '5m']

export const FirstScreen = () => {
  const { currentData, isLoading, isFetching, isError } = useGetAllCategoriesQuery()
  const navigate = useNavigate()
  const data = useSelector((state) => state.user.config)
  console.log('config', data)
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
