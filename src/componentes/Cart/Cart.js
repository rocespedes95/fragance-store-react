import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Button from 'react-bootstrap/Button';
import  {FaTrashAlt} from "react-icons/fa"
import { Link } from "react-router-dom";

const Cart = () => {
    const{cart, vaciarCarrito, totalCarrito, removerItem}= useContext(CartContext)
    if(cart.length === 0){
      return(
        <div className="container my5">
              <h2>El carrito esta vacio</h2>
              <hr/>
              <p>Cargue sus perfumes deseados al carrito</p>
              <Link  to="/"  className="btn btn-info" >Volver</Link>
        </div>
          
      )
    }
    

  return (
    <div className="container my-5">
          <h2>Tu Compra</h2>
          <hr/>
          { cart.map(itemCart=>
                  <div key={itemCart.id}>
                      <h4>{itemCart.title}</h4>
                      <p>Cantidad : {itemCart.cantidad}</p>
                      <p>Precio: $ {itemCart.precio * itemCart.cantidad}</p>
                      <button onClick={()=> removerItem(itemCart.id)} className="btn btn-outline-dark"><FaTrashAlt/></button>
                      <hr/>
                  </div>
                  )
            }
                <h4>Total : $ {totalCarrito()}</h4>
            <Button variant="danger" onClick={vaciarCarrito}>Vaciar Carrito</Button>
    </div>
      )
}
export default Cart