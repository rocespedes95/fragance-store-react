import {  useState } from "react"
import {  useLoginContext } from "../context/LoginContext"


const LogingScreen = () => {
    const {login, user, loading}= useLoginContext()

    const [values, setValues]= useState ({
        email: "",
        password :"",
    })

    const handleImputChange = (e)=> {
        setValues({
            ...values,
            [e.target.name]: e.target.value

        })}
    const handleSubmit = (e)=>{
                e.preventDefault()
            login(values)
    }
     return (
            <div className="login-screen">
                <div className="login">
                <h2 className="titulo-login">Login</h2>
                <hr/>
                <form  onSubmit={handleSubmit} >

                    <input 
                    className= "form-control my-4"  
                    type ="email"
                    value = {values.email}
                    onChange= {handleImputChange}
                    name = "email"
                    />
                    <input 
                        className= "form-control my-4"  
                        type ="password"
                        value ={values.password}
                        onChange= {handleImputChange}
                        name ="password"
                    />

                    <button 
                      className="btn btn-warning "
                      disabled={loading}>
                        {loading ? "Cargando" : "Ingresar"}
                    </button>

                    {user.error && <p className="error">{user.error}</p>}
                    
                </form>
                </div>    
            </div>
        )
}

export default LogingScreen