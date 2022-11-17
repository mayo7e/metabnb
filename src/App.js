<<<<<<< HEAD

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
=======

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
>>>>>>> a42b751b9f7a38584a45a18c5e3fb3095d278789
