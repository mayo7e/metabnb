import React from 'react'
import Cancel from "../assets/x.png"
import Meta from "../assets/meta.png"
import DownChevron from "../assets/Down_Chevron.png"
import WalletConnect from "../assets/walletconnect.png"

const Modal = ({open,children, onClose}) => {
    if(!open) return null
  return (
    <>
            <div className='overlay' ></div>
            <div className="modal" >
                   <div  className="modal_header" >
                        <h2>Connect wallet</h2>
                          <img onClick={onClose} alt="cancel icon" src={Cancel} />
                          
                        </div>

              <hr />

                <h3>Choose your preferred wallet</h3>
                <a href="#0"><img src={Meta}/> <img src={DownChevron}/></a>
                <br />
                <br />
                <a href="#0"><img src={WalletConnect}/> <img src={DownChevron} /></a>
                
             </div>
    </>
    
  )
}

export default Modal
