
import { NavBar } from "../NavBar/NavBar";
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer.js";
import Inicio from "../componentes/Inicio/Inicio.js";
import ItemDetailContainer from "../componentes/ItemDetailContainer/ItemDetailContainer.js";
import Cart from "../componentes/Cart/Cart.js";
import { Routes,Route,Navigate } from "react-router-dom"
import Checkout from "../componentes/Checkout/Checkout";





const PrivateRoutes = () => {
           
     return (
        <>
            <NavBar/>

                    <Routes>
                                <Route path="/" element={<Inicio/>}/>
                                <Route path="/productos/:categoria" element= {<ItemListContainer/>}/>
                                <Route path= "/detail/:itemId" element={<ItemDetailContainer/>}/>
                                <Route path="/cart" element= {<Cart/>}/>
                                <Route path="/checkout" element= {<Checkout/>}/>
                                <Route path="*" element={< Navigate to= {"/"}/>}/>
                    </Routes>

        </>
    )
}

export default PrivateRoutes