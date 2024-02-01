const categories = [
  'Any Category',
  'General Knowledge',
  'Entertainment: Books',
  'Entertainment: Film',
  'Entertainment: Music',
  'Entertainment: Musicals & Theatres',
  'Entertainment: Television',
  'Entertainment: Video Games',
  'Entertainment: Board Games',
  'Science & Nature',
  'Science: Computers',
  'Science: Mathematics',
  'Mythology',
  'Sports',
  'Geography',
  'History',
  'Politics',
  'Art',
  'Celebrities',
  'Animals',
  'Vehicles',
  'Entertainment: Comics',
  'Science: Gadgets',
  'Entertainment: Japanese Anime & Manga',
  'Entertainment: Cartoon & Animations'
]
const difficulties = ['Any Difficulty', 'Easy', 'Medium', 'Hard']
const types = ['Any Type', 'Multiple Choice', 'True / False']
const time = ['1m', '2m', '5m']

export const App = () => {
  return (
    <>
      <div className="container">
        <div className="select-wrapper">
          <NumInput />
          <Select options={categories} />
          <Select options={difficulties} />
          <Select options={types} />
          <Select options={time} />
        </div>
        <div className="button-wrapper">
          <Button text="Start quiz" />
          <Button text="See my statistics" />
        </div>
      </div>
    </>
  )
}

const NumInput = () => {
  return (
    <>
      <label htmlFor="question_num">Choose number of questions: </label>
      <input type="number" max={15} min={5} id="question_num" name="question_num" />
    </>
  )
}

const Select = ({ options }) => {
  return (
    <select>
      {options.map((item) => (
        <option key={item}>{item}</option>
      ))}
    </select>
  )
}

const Button = ({ text }) => {
  return <button>{text}</button>
}
