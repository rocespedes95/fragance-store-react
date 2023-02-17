import { useEffect, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import { db } from "../../firebase/config"
import { collection , addDoc, doc } from "firebase/firestore"
import Swal from "sweetalert2"



const Checkout = () => {
    const{cart , totalCarrito, vaciarCarrito }= useCartContext()
    const [ordenId ,setOrdenId]= useState(null)
    const [values ,setValues]= useState({
        nombre: "",
        direccion: "",
        email:"",
    })
    
    const alertaNombre =()=>{
        Swal.fire({
            position: 'top-end',
            icon: 'info',
            title: 'Nombre invalido',
            showConfirmButton: false,
            timer: 1500
          })
    }
    const alertaDireccion = ()=>{
        Swal.fire({
            position: 'top-end',
            icon: 'info',
            title: 'Direccion invalida',
            showConfirmButton: false,
            timer: 1500
          })
    }
    const alertaEmail = ()=>{
        Swal.fire({
            position: 'top-end',
            icon: 'info',
            title: 'Email invalido',
            showConfirmButton: false,
            timer: 1500
          })
    }
    const handleImputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e)=> {
        e.preventDefault()
        const orden ={
            cliente: values,
            items: cart,
            total: totalCarrito()
        }
        if(values.nombre.length <2){
            alertaNombre()
        }
        if(values.direccion.length <2){
            alertaDireccion()
        }
        if(values.email.length <4){
            alertaEmail()
        }

        console.log(orden)
        if(cart.length ===0){
            return <Navigate to="/"/>
        }

        const ordenesRef = collection(db , "ordenes")
           addDoc(ordenesRef , orden)
              .then((doc)=> {
                setOrdenId(doc.id)
                vaciarCarrito()
              })
              .catch((error)=> console.log(error))

    }
    if(ordenId){
        return(
            <div className="container my-5">
                <h2>Tu compra ha sido exitosa</h2>
                <hr/>
                <p>Tu codigo de orden es : {ordenId}</p>
                <hr/>
                <h3>Gracias por su compra</h3>
                <Link to="/" className="btn btn-outline-success">Volver</Link>

            </div>
        )
    }
    return (
                <div  className="container my-4 ">
                    <h2>Terminar mi compra</h2>
                            <form  onSubmit={handleSubmit}> 
                                <input 
                                className = "form-control my-4 imputForm"
                                onChange = {handleImputChange}
                                type =  "text"
                                name = "nombre"
                                value =  {values.nombre}
                                placeholder = "Tu nombre"
                                />

                                <input 
                                className = "form-control my-4 imputForm"
                                onChange = {handleImputChange}
                                type =  "text"
                                name = "direccion"
                                value =  {values.direccion}
                                placeholder = "Tu direccion"
                                />

                                <input 
                                className = "form-control my-4 imputForm"
                                onChange = {handleImputChange}
                                type =  "email"
                                name = "email"
                                value =  {values.email}
                                placeholder = "Tu email"
                            
                            />
                            
                            <button className="btn btn-success">Emviar</button>    
                            </form>
                    
                </div>
     )
}

export default Checkout