import { BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Home from "./Pages/Home";

import Singin from "./Pages/SingIn";

const Rotes = () =>{
    return (

        <Router>
            <Routes>
          <Route  path="/" e element={<Singin/>}/>
          <Route  path="/Home"  element={<Home/>}/>

            </Routes>
    </Router>
    )
      

         
      
}

export default Rotes;