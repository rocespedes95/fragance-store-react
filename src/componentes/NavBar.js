import {CardWidget} from "./CardWidget.js";

export const NavBar =() => {
    return(
        <header className="header">
            <h2>Fragance Store logo</h2>
            <nav className="nav">
                <li>
                    <a className="link_nav" href="#">Men</a>
                </li>
                <li>
                    <a className="link_nav" href="#">Women</a>
                </li>
                <li>
                    <a className="link_nav" href="#">Kid</a>
                </li>
                <li>
                    <a className="link_nav" href="#">Ubicacion</a>
                </li>
                <li>
                    <a className="link_nav" href="#">Contacto</a>
                </li>
                <li>
                    <a className="link_nav" href="#"><CardWidget/></a>
                </li>     
            </nav>
        </header>
       
    )
}