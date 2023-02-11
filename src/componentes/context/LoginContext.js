import {   createContext, useContext, useState } from "react";



const MOCK_USUARIOS = [
    {
        email: "cliente@copado.com",
        password:"dame10",
    },
    {
        email: "cliente@malaonda.com",
        password:"dame7",
    },
    {
        email: "tester@rompetodo.com",
        password:"dame35",
    }
]



export const LoginContext = createContext()

export const useLoginContext = () => {
    return useContext(LoginContext)
}

export const LoginProvider = ({children}) => {
     
    const [user, setUser] = useState({
        email: null,
        logged: false,
        error: null,
    })
    console.log(user)
    const login =(values)=> {
      const match = MOCK_USUARIOS.find(user => user.email === values.email)
            if(!match){
                setUser({
                    email: null,
                    logged: false,
                    error:"No se encuentra ese usuario" 
                })
                return
            }
            if (match.password === values.password){
                setUser({
                    email: match.email,
                    logged: true,
                    error: null,
                })
            }
            else{
                setUser({
                    email: null,
                    logged: false,
                    error:"Password incorrecto" 
                })
            } 
    }
    const logout = ()=> {
        setUser( {
                email: null,
                logged: false,
                error: null,
            }
        )
    }
    return (
         
        <LoginContext.Provider value={{user, login, logout}} >
            {children}
        </LoginContext.Provider>

    )
}