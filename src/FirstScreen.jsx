import { Button } from './components/Button'
import { Select } from './components/Select'
import { NumInput } from './components/NumInput'
import { useNavigate } from 'react-router-dom'
import { fetchCategories, getQuestions } from './Slices/slices'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

const difficulties = ['Any Difficulty', 'Easy', 'Medium', 'Hard']
const types = ['Any Type', 'Multiple Choice', 'True / False']
const time = ['1m', '2m', '5m']

export const FirstScreen = function FirstScreen() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  const { isLoading, categories } = useSelector((state) => state.user.catLoad)

  const handleStatistic = () => {
    navigate('/statistic')
  }
  const handleStartQuiz = () => {
    dispatch(getQuestions())
    navigate('start')
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}>
      <div className="container">
        <NumInput />
        <div className="select-wrapper">
          <Select options={categories} fetched type={'Category'} />
          <Select options={difficulties} fetched={false} type={'Difficulty'} />
          <Select options={types} fetched={false} type={'Type'} />
          <Select options={time} fetched={false} type={'Time'} />
        </div>
        <div className="button-wrapper">
          <Button text="Start quiz" onClick={handleStartQuiz} />
          <Button text="See my statistics" onClick={handleStatistic} />
        </div>
      </div>
    </motion.div>
  )
}
