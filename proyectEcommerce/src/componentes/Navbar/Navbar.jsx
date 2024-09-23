import "./Navbar.css"
import Cartwidget from "../Cartwidget/Cartwidget";
import { Link,NavLink } from "react-router-dom";

const Navbar = () => {
    return(
    <nav className="navbar">

        <div className="navbar-logo">
            <Link to={'/'}> <img src="/Assets/img/logo.jpg" alt="Sport Center" width="80" height="80"/></Link>
        </div>
        <div className="navbar-container">

            <ul className="navbar-links">

                <li><NavLink to='/category/voley' className={({isActive}) => (isActive ? "link active" : "link")}>Voley</NavLink></li>
                <li><NavLink to='/category/futbol' className={({isActive}) => (isActive ? "link active" : "link")}>Futbol</NavLink></li>
                <li><NavLink to='/category/basket' className={({isActive}) => (isActive ? "link active" : "link")}>BasketBall</NavLink></li>
                <li><NavLink to='/contacto' className={({isActive}) => (isActive ? "link active" : "link")}>Contacto</NavLink></li>
            </ul>
        </div>

        <Cartwidget/>

    </nav>
        
    )
}

export default Navbar;