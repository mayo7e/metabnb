import React from 'react'

const Modal = ({open,children, onClose}) => {
    if(!open) return null
  return (
    <>
            <div className='overlay' ></div>
            <div className="modal" >
        <button onClick={onClose} >close modal</button>
      {children}
    </div>
    </>
    
  )
}

export default Modal
