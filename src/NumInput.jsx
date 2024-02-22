import { useDispatch } from 'react-redux'
import { setAmount } from './Api/Api'
export const NumInput = ({ ref }) => {
  const dispatch = useDispatch()
  return (
    <>
      <label htmlFor="question_num">Choose number of questions: </label>
      <input
        ref={ref}
        type="number"
        max={15}
        min={5}
        id="question_num"
        name="question_num"
        onChange={() => {
          const element = document.getElementById('question_num')
          dispatch(setAmount(element.value))
        }}
      />
    </>
  )
}
