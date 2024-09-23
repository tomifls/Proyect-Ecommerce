import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartProvider';
import { Link } from 'react-router-dom';

const CartDetail = ({cart}) => {
    const { getTotal, getTotalProducts, removeItem, clearCart, buy } = 
    useContext(CartContext);

    return (
        <div>
            <h2>Carrito De Compras</h2>
            {cart.map((item) => (
                <div key={item.product.id}>
                <img src={item.product.imagen} alt={item.product.nombre} />
                    <p>{item.product.nombre}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: ${item.product.precio}</p>

                    <button onClick={() => removeItem(item.product.id)}>Eliminar</button><br/><br/>
                </div>
            ))}<br/><br/>
            <h3>Total Productos: {getTotalProducts()}</h3>
            <h3>Total a Pagar: {getTotal()}</h3>
            <button onClick={clearCart}>Vaciar Carrito</button><br/><br/>
            <button onClick={buy}>
                <Link to={"/checkout"}>Comprar</Link>
            </button>
        </div>
    );
};

export default CartDetail

