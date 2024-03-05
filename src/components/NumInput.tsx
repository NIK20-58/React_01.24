import { useDispatch } from 'react-redux'
import { setAmount } from '../Slices/slices'
import React from 'react'

interface NumInputProps {
  ref: React.RefObject<HTMLInputElement>
}
export const NumInput: React.FC<NumInputProps> = ({ ref }) => {
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
          const element = document.getElementById('question_num') as HTMLInputElement
          dispatch(setAmount(element.value))
        }}
      />
    </>
  )
}
