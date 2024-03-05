import React from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  text: string
  onClick?: () => void
}
export const Button: React.FC<ButtonProps> = ({
  text,
  onClick = () => {
    console.log('No onClick func')
  }
}: ButtonProps) => {
  return (
    <motion.button
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
