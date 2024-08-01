import "./Navbar.css"
import Cartwidget from "../Cartwidget/Cartwidget";

const Navbar = () => {
    return(
    <nav className="navbar">

        <div className="navbar-logo">
            <p>MI LOGO</p>
        </div>
        <div className="navbar-links">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">vinos</a></li>
                <li><a href="#">accesorios</a></li>
                <li><a href="#">contacto</a></li>
            </ul>
        </div>

        <Cartwidget/>

    </nav>
        
    )
}

export default Navbar;