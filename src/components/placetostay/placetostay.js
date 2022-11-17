

import Header from "../header.js"
import Footer from "../footer.js"
import Card from "../card/card.js"




import rating from "../data/assets/rating.png"



function PlaceToStay() {
    return (
     <div className="placesToStay App container " > 
       <Header />
        <ul>
          <li>Resturant</li>
          <li>Cottage</li>
          <li>Castle</li>
          <li>Fantast coty</li>
          <li>Beach</li>
          <li>Carbins</li>
          <li>Off-grid</li>
          <li>Farm</li>
        </ul>
        <Card />
        <Card />


       <Footer className="<Footer />"/>
      

      </div>
    );
  }
  

  
  export default PlaceToStay;
  