import { NavBar } from "./componentes/NavBar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import "./App.css";

import ItemListContainer from "./componentes/ItemListContainer.js";
import Inicio from "./componentes/Inicio/Inicio.js";

function App() {
  return (

    <BrowserRouter>
          <NavBar/>
      <Routes>

        <Route path = "/" element={ <Inicio/>}  />
        <Route  path="/allproducts" element={ <ItemListContainer/>}/>
        <Route  path="/allproducts/:categoria" element={ <ItemListContainer/>}/>
        
        <Route   path="*" element={ <Navigate to={"/"}  />} />

      </Routes>
    


      


    </BrowserRouter>
    
  );
}

export default App;
