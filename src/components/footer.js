
import Group from "../assets/group.svg"
import Fb from "../assets/fb.png"
import IG from "../assets/ig.png"
import Twitter from "../assets/twitter.png"

function Footer() {
    return (
      <div className="footer" >
               
      <div>
          <h3>Community</h3>
          <ul>
              <li><a href="0#">Nft</a></li>
              <li><a href="0#">Tokena</a></li>
              <li><a href="0#">Landlord</a></li>
              <li><a href="0#">Discord</a></li>
      
          </ul>
      </div>
      <div>
          <h3>Places</h3>
          <ul>
              <li><a href="0#">Castle</a></li>
              <li><a href="0#">Farms</a></li>
              <li><a href="0#">Beach</a></li>
              <li><a href="0#">Learn more</a></li>
      
          </ul>
      </div>
      <div>
          <h3>About us</h3>
          <ul>
              <li><a href="0#">Road Maps</a></li>
              <li><a href="0#">Creators</a></li>
              <li><a href="0#">Career</a></li>
              <li><a href="0#">Contact us</a></li>
      
          </ul>
      </div>

      <div>
        <img alt="brand's logo" src={Group} />
        <div className="sm_medias" >
          <img alt="Facebook's logo" src={Fb} />
          <img alt="Instagrams logo" src={IG} />
          <img alt="Twitter's logo" src={Twitter} />

        </div>
        <p>&copy; 2022 Metabnb</p>
      </div>
      
</div>
    );
  }
  
  export default Footer;
  