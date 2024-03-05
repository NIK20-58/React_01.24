import { useNavigate } from 'react-router-dom'
import { Button } from './Button'
import { useDispatch } from 'react-redux'
import { setResetConfig } from '../Slices/slices'
import React from 'react'

interface ConfirmationModalProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ setIsModalOpen }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleConfirm = () => {
    setIsModalOpen(false)
    dispatch(setResetConfig())
    navigate('/')
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <p>Are you sure you want to proceed?</p>
          <div className="button-container">
            <Button text={'Cancel'} onClick={handleCancel}></Button>
            <Button text={'Confirm'} onClick={handleConfirm}></Button>
          </div>
        </div>
      </div>
    </>
  )
}
