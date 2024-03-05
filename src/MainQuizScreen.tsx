import { Button } from './components/Button'
import { ConfirmationModal } from './components/ConfirmationModal'
import { ProgressBar } from './components/ProgressBar'
import { Question } from './components/Question'
import { QuizResultScreen } from './QuizResultScreen'
import { Timer } from './components/Timer'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { useState } from 'react'
import React from 'react'
import { RootState } from './store/store'

export const MainQuizScreen: React.FC<{}> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleEndBtnClick = () => {
    setIsModalOpen(true)
  }

  const { isLoading, isLastQuestion } = useSelector((state: RootState) => state.user.config)

  if (isLoading) {
    return <p>Loading...</p>
  }

  const variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1
    }
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      {isLastQuestion ? (
        <QuizResultScreen />
      ) : (
        <>
          <ProgressBar />
          <Timer />
          <Question />
          <br />
          <Button text={'End quiz'} onClick={handleEndBtnClick}></Button>
          {isModalOpen && (
            <motion.div initial="hidden" animate="visible" exit="hidden" variants={variants}>
              <ConfirmationModal setIsModalOpen={setIsModalOpen} />
            </motion.div>
          )}
        </>
      )}
    </motion.div>
  )
}
