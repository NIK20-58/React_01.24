import { motion } from 'framer-motion'
export const Button = ({
  text,
  onClick = () => {
    console.log('No onClick func')
  }
}) => {
  return (
    <motion.button
      // layoutId="button"
      onClick={onClick}
      whileHover={{
        scale: 1.04,
        transition: { duration: 0.2, type: 'spring' }
      }}
      whileTap={{
        scale: 0.9,
        transition: { duration: 0.3, type: 'spring' }
      }}>
      {text}
    </motion.button>
  )
}
