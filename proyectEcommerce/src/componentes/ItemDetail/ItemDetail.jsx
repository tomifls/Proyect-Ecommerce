import React, { useState } from 'react';
import ItemCount from '../Itemcount/ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartProvider';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product }) => {
  const { addItems } = useContext(CartContext);
  const [showItemCount, setShowItemCount] = useState(true);

  const onAdd = (quantity) => {
    addItems(product, quantity);
    setShowItemCount(false);
  };

  return (
    <div>
      <h2>{product.nombre}</h2>
      <img src={product.imagen} alt={product.nombre} />
      <p>{product.descripcion}</p>
      <p>${product.precio}</p>
      <p>En stock: {product.stock}</p>
      <p>Categoria: {product.category}</p>

      {product.stock > 0 ? (
        showItemCount ? (
          <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
        ) : (
          <Link to="/cart">Terminar Mi Compra</Link>
        )
      ) : (
        <p>Lo siento, se agotó el stock</p>
      )}
    </div>
  );
};

export default ItemDetail;
