import { createContext , useContext, useEffect, useState} from "react";


export const CartContext = createContext()

export const useCartContext = ()=> {
    return useContext(CartContext)
}

const init = JSON.parse(localStorage.getItem("cart"))  ||  []

export const CartProvider = ({children}) => {
    
    const[cart ,setCart] = useState(init)

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
    const removerItem = (id)=> {
      setCart (cart.filter(itemCart => itemCart.id !== id))
    }
    const totalCantidad =()=> {
        return cart.reduce ( (accu ,itemCart) => accu + itemCart.cantidad,0)
    }
    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))  
    }, [cart])

    return(
        <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            vaciarCarrito,
            totalCarrito,
            removerItem,
            totalCantidad,
        }}>
            {children}
        </CartContext.Provider>
    )

}