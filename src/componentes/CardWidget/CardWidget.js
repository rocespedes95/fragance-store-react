
import {FaShoppingCart} from "react-icons/fa"
import { Link } from "react-router-dom";
import {  useCartContext } from "../context/CartContext";

export const CardWidget = () => {
    const  {totalCantidad ,cart } = useCartContext()
    return(
        <Link to ="/cart"  className={`cart-widget ${cart.length > 0 ? "cart-widget-active" : ""}` } >
            <FaShoppingCart/>
          <span>{totalCantidad()}</span>

        </Link>
        
        )
} 

export default CardWidget;