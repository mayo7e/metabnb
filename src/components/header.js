

import Logo from "../assets/logo.png"


function Header() {
    return (
      <div className="container">
            <div className="header" >
               
                    <img alt="brand's logo" src={Logo} />

               

                    <nav>
                        <ul>
                            <li><a href="0#">Home</a></li>
                            <li><a href="0#">Place to stay</a></li>
                            <li><a href="0#">NFTs</a></li>
                            <li><a href="0#">Community</a></li>
                    
                        </ul>
                    </nav>

                    <a className="header_action" href="0#">Connect wallet</a>
            </div>
      </div>
    );
  }
  
  export default Header;
  