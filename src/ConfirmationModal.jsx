import { useNavigate } from 'react-router-dom'
import { Button } from './Button'

export const ConfirmationModal = () => {
  const navigate = useNavigate()
  const handleCancel = () => {
    const modal = document.getElementById('myModal')
    modal.style.display = 'none'
  }
  const handleConfirm = () => {
    navigate('/')
  }

  return (
    <>
      <div id="myModal" className="modal">
        <div className="modal-content">
          {/* <span className="close">&times;</span> */}
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
