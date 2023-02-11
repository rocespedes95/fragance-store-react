
import {FaShoppingCart} from "react-icons/fa"
import { Link } from "react-router-dom";
import {  useCartContext } from "../context/CartContext";

export const CardWidget = () => {
    const  {totalCantidad} = useCartContext()
    return(
        <Link to ="/cart">
            <FaShoppingCart/>
          <span>{totalCantidad()}</span>

        </Link>
        
        )
} 

export default CardWidget;