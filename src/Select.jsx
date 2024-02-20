import { useDispatch, useSelector } from 'react-redux'
import { setCategory, setDifficulty, setTime, setType } from './Api/Api'

export const Select = ({ options, fetched, type }) => {
  // const data = useSelector((state) => state)
  // console.log(data)
  const dispatch = useDispatch()
  return (
    <select
      onChange={() => {
        const catBut = document.getElementById(`${type}`)
        const value = catBut.value
        // console.log('value', value)
        if (type === 'Category') dispatch(setCategory(value))
        if (type === 'Difficulty') dispatch(setDifficulty(value))
        if (type === 'Type') dispatch(setType(value))
        if (type === 'Time') dispatch(setTime(value))
      }}
      id={type}>
      {fetched
        ? options.map((item) => (
            <option key={item.name} value={item.name}>
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
