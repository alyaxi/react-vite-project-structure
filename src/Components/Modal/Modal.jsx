

const Modal = ({ isShow, closeModal, children }) => {

  const handleOverlayClick = (e) => {
    // Only close the modal if the click target is the overlay (background)
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div onClick={handleOverlayClick} className={`fixed top-0 left-0 z-[9999] w-screen h-screen bg-gray-800/80 flex justify-center items-center ${isShow ? '':'hidden'}`}>
        {children}
    </div>
  )
}

export default Modal