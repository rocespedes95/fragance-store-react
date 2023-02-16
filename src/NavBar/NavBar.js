import React, { useContext } from "react"
import { Link } from "react-router-dom"
import CardWidget from "../componentes/CardWidget/CardWidget.js"
import { useLoginContext } from "../componentes/context/LoginContext.js"


export const NavBar =() => {
    const{ user , logout }= useLoginContext()
    
    return(
        <header className="header">
            <h2 className="tituloPrincipal">Fragance Store</h2>
            <nav className="nav">
                        <li>
                             <Link className="link_nav" to="/inicio">Inicio</Link>
                        </li>
                        <li>
                             <Link className="link_nav" to="/productos/hombre">Hombre</Link>
                        </li>
                        <li>
                             <Link className="link_nav" to="/productos/mujer">Mujer</Link>
                        </li>
                        <li>
                             <Link className="link_nav" to="/productos/niños">Niños</Link>
                        </li>
              <CardWidget/>
                
            </nav>
            <div className="headerContainer">
                <p className="bienvenidaText">Bienvenido: { user.email }</p>
                <button className="btn btn-danger botonLogout" onClick={logout} >logout</button>
             
            </div>

        </header>
       
    )
}

