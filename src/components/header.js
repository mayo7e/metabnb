

import Logo from "../assets/logo.png"

import Modal from "./modal"

import React, {useState} from "react"

import {Link} from "react-router-dom"



function Header() {
  const [isOpen, setIsOpen] = useState(false)


    return (
      <div className="container">
            <div className="header" >
               
                    <img alt="brand's logo" src={Logo} />

                    <nav>
                        <ul>
                            <li><a href="0#">Home</a></li>
                            <Link target="_blank" to="/placetostay"><li>Place to stay</li></Link>
                            <li><a href="0#">NFTs</a></li>
                            <li><a href="0#">Community</a></li>
                    
                        </ul>
                    </nav>
                    {/* onClick={onClose} */}
      
                   <button className="header_action"  onClick={()=> setIsOpen(true)} >Connect wallet</button>
                    <Modal open={isOpen} onClose={()=> setIsOpen(false)} >
                      <div>
                        
                      </div>
                    </Modal>
                  
                    
            
            </div>
      </div>
    );
  }
  
  export default Header;
  