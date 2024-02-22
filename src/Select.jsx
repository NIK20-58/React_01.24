import { useDispatch } from 'react-redux'
import { setCategory, setDifficulty, setTime, setType } from './Api/Api'

export const Select = ({ options, fetched, type }) => {
  const dispatch = useDispatch()

  // console.log()

  return (
    <select
      onChange={() => {
        const catBut = document.getElementById(`${type}`)
        const value = catBut.value

        if (type === 'Category')
          dispatch(
            setCategory({
              id: catBut.selectedOptions[0].id,
              value: catBut.selectedOptions[0].value
            })
          )
        if (type === 'Difficulty') dispatch(setDifficulty(value.toLowerCase()))
        if (type === 'Type')
          dispatch(
            setType(
              value !== 'Any Type' ? (value === 'Multiple Choice' ? 'multiple' : 'boolean') : ''
            )
          )
        if (type === 'Time') dispatch(setTime(value === '1m' ? 1 : value === '2m' ? 2 : 5))
      }}
      id={type}>
      {fetched
        ? options.map((item) => (
            <option key={item.name} value={item.name} id={item.id}>
              {item.name}
            </option>
          ))
        : options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
    </select>
  )
}
