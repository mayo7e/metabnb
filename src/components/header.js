

import Logo from "../assets/logo.png"

import {Link} from "react-router-dom"



function Header() {


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

                   <Link  target="_blank" to="/modal" ><a className="header_action" >Connect wallet</a></Link>
                   
                   
                  
            
            </div>
      </div>
    );
  }
  
  export default Header;
  