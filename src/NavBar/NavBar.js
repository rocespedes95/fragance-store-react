import React from "react"
import { Link } from "react-router-dom"
import CardWidget from "../componentes/CardWidget/CardWidget.js"


export const NavBar =() => {
    return(
        <header className="header">
            <h2>Fragance Store(logo)</h2>
            <nav className="nav">
                 <li>
                    <Link className="link_nav" to="/inicio">Inicio</Link>
                </li><li>
                    <Link className="link_nav" to="/allproducts/hombre">Hombre</Link>
                </li>
                <li>
                    <Link className="link_nav" to="/allproducts/mujer">Mujer</Link>
                </li>
                <li>
                    <Link className="link_nav" to="/allproducts/niños">Niños</Link>
                </li>
                <li>
                    <Link className="link_nav" to="/allproducts">All Products</Link>
                </li>
                <li>
                    <a className="link_nav" href="#">

                    </a>
                </li>
            </nav>
        </header>
       
    )
}

