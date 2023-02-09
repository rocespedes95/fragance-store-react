import { NavBar } from "./NavBar/NavBar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import { CartContext } from "./componentes/context/CartContext.js";
import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer.js";
import Inicio from "./componentes/Inicio/Inicio.js";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer.js";
import { useState } from "react";
import Cart from "./componentes/Cart/Cart.js";

function App() {
    const[cart ,setCart] = useState([])
    const agregarAlCarrito = (itemCart)=> {
      setCart([... cart , itemCart])
    }
    const isInCart = (id) => {
      return cart.some(itemCart=>  itemCart.id === id)
    }
    const vaciarCarrito= ()=>{
      setCart([])
    }
    const totalCarrito= ()=> {
      return cart.reduce((acc,itemCart)=> acc + itemCart.precio * itemCart.cantidad, 0)
    }

  return (
    <CartContext.Provider value ={ { 
      cart, 
      agregarAlCarrito,
      isInCart,
      vaciarCarrito,
      totalCarrito,
      } }>

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
    </CartContext.Provider>
    
    
  );
}

export default App;
