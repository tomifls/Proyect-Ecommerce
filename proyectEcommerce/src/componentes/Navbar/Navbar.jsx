import "./Navbar.css"
import Cartwidget from "../Cartwidget/Cartwidget";
import { Link,NavLink } from "react-router-dom";

const Navbar = () => {
    return(
    <nav className="navbar">

        <div className="navbar-logo">
            <Link to={'/'}>MI LOGO</Link>
        </div>
        <div className="navbar-container">

            <ul className="navbar-links">

                <li><Link to='/category/voley' className="link">Voley</Link></li>
                <li><Link to='/category/futbol' className="link">Futbol</Link></li>
                <li><Link to='/category/accesorios' className="link">Accesorios</Link></li>
                <li><Link to='/contacto' className="link">Contacto</Link></li>
            </ul>
        </div>

        <Cartwidget/>

    </nav>
        
    )
}

export default Navbar;