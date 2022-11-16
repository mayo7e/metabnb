

import Header from "../header"
import Footer from "../footer"
import MainImg from "./main.png"
import Mbtoken from "./mbtoken.svg"
import Metamask from "./metamask.svg"
import Opensea from "./opensea.png"
import Frames from "./frames.png"
import Card from "../card/card.js"





function Home() {

    return (
      <div className="home" >
       <Header />
       <div className="container" >

          <div className="section_01" >
            <h1>Rent a <span>Place</span> away from <span>Home</span>  in the <span>Metaverse</span> </h1>
           <p> we provide you access to luxury and affordable houses in the
             metaverse, get a chance to turn your
              imagination to reality at your comfort zone</p>
              <form>
                <input type="text" />
                <button>Search</button>
              </form>
              <div>
              <img alt="four smaller pictures of  bnb in the mataverse" src={MainImg} />

              </div>
          
          </div>

          <div className="section_02" >
              <div className="img_logo" >
                  <img alt="mntoken logo" src={Mbtoken } />
                  <img alt="metamask logo" src={Metamask} />
                  <img  alt="opensea logo" src={Opensea} />
              </div>
              <h2>Inspiration for your next adventure</h2>

          </div>


        <div className="section_03" ><Card /></div>



          <div className="section_04" >
              <div className="img_logo" >
                  <h2>Metabmb MFTs</h2>
                  <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift
                     cards which are traded as NFTs. These NFTs gives our cutomer access to loads
                      of our exclusive services.</p>
              
              </div>
              <img alt="#" src={Frames} />
              <a href="0#">Learn more</a>

          </div>


        
         </div>

       <Footer />

      </div>
    );
  }
  
  export default Home;
  