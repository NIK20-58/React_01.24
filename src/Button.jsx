export const Button = ({
  text,
  onClick = () => {
    console.log('No onClick func')
  }
}) => {
  return <button onClick={() => onClick()}>{text}</button>
}
