import "./Cartwidget.css"
import { TbShoppingCartPlus } from "react-icons/tb";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartProvider";
import { Link } from "react-router-dom";

const Cartwidget = () => {

  const {getTotalProducts} = useContext(CartContext)
  return (
    <Link to={"/cart"} className="nav-cart">
        <TbShoppingCartPlus /><br />
        {getTotalProducts() === 0 ? null : getTotalProducts()}
    </Link>
  )
}

export default Cartwidget