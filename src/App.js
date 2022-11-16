
import Home from "./components/home/home"

import PlaceToStay from "./components/placetostay/placetostay"
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';


function App() {
  return (

   < Router >
     
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path= "placetostay" element={<PlaceToStay />} />
           

        </Routes>
       
          
    </Router>

    // <div >
    //  <Home />
    //  {/* <PlaceToStay /> */}

    // </div>
  );
}

export default App;
