import { useDispatch } from 'react-redux'
import { setCategory, setDifficulty, setTime, setType } from '../Slices/slices'
import React from 'react'

interface SelectProps {
  options: { name: string; id: string }[]
  fetched: boolean
  type: string
}

export const Select: React.FC<SelectProps> = ({ options, fetched, type }) => {
  const dispatch = useDispatch()
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value
    if (type === 'Category') {
      const selectedOption = event.target.selectedOptions[0]
      dispatch(setCategory({ id: selectedOption.id, value: selectedOption.value }))
    }
    if (type === 'Difficulty') dispatch(setDifficulty(selectedValue.toLowerCase()))
    if (type === 'Type') {
      dispatch(
        setType(
          selectedValue !== 'Any Type'
            ? selectedValue === 'Multiple Choice'
              ? 'multiple'
              : 'boolean'
            : ''
        )
      )
    }
    if (type === 'Time')
      dispatch(setTime(selectedValue === '1m' ? 1 : selectedValue === '2m' ? 2 : 5))
  }

  return (
    <select onChange={handleSelectChange} id={type}>
      {fetched
        ? options.map((item) => (
            <option key={item.name} value={item.name} id={item.id}>
              {item.name}
            </option>
          ))
        : options.map((item, i) => (
            <option key={item.id} value={item.name}>
              {item}
            </option>
          ))}
    </select>
  )
}
