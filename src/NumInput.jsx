export const NumInput = ({ ref }) => {
  return (
    <>
      <label htmlFor="question_num">Choose number of questions: </label>
      <input ref={ref} type="number" max={15} min={5} id="question_num" name="question_num" />
    </>
  )
}
