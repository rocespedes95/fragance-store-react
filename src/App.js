import { NavBar } from "./NavBar/NavBar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer.js";
import Inicio from "./componentes/Inicio/Inicio.js";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer.js";
import Cart from "./componentes/Cart/Cart.js";
import { CartProvider } from "./componentes/context/CartContext.js";

function App() {
    

  return (
    <CartProvider>
           <BrowserRouter>
         <NavBar />
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/productos/:categoria" element= {<ItemListContainer/>}/>
          <Route path= "/detail/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element= {<Cart/>}/>
          <Route path="*" element={< Navigate to= {"/"}/>}/>
        </Routes>

      </BrowserRouter>
    </CartProvider>

    
    
    
    
  );
}

export default App;
