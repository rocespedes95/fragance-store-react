import React from "react"
import { Link } from "react-router-dom"
import CardWidget from "../componentes/CardWidget/CardWidget.js"


export const NavBar =() => {
    return(
        <header className="header">
            <h2>Fragance Store</h2>
            <nav className="nav">
                 <li>
                    <Link className="link_nav" to="/inicio">Inicio</Link>
                </li><li>
                    <Link className="link_nav" to="/productos/hombre">Hombre</Link>
                </li>
                <li>
                    <Link className="link_nav" to="/productos/mujer">Mujer</Link>
                </li>
                <li>
                    <Link className="link_nav" to="/productos/niños">Niños</Link>
                </li>
               
                
            </nav>
        </header>
       
    )
}

