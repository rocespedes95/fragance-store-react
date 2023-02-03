import { NavBar } from "./NavBar/NavBar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import "./App.css";

import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer.js";
import Inicio from "./componentes/Inicio/Inicio.js";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer.js";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/productos/:categoria" element= {<ItemListContainer/>}/>
      <Route path= "/detail/:itemId" element={<ItemDetailContainer/>}/>
      <Route path="*" element={< Navigate to= {"/"}/>}/>
    </Routes>

    </BrowserRouter>
    
    
  );
}

export default App;
