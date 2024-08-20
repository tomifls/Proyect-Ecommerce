import React from 'react';
import ItemCount from '../Itemcount/ItemCount';

const ItemDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.nombre}</h2>
      <img src={product.imagen} alt={product.nombre} />
      <p>{product.descripcion}</p>
      <p>{product.precio}</p>
      <p>En stock: {product.stock}</p>

      <ItemCount initial={1} stock={product.stock} />
    </div>
  )
}

export default ItemDetail;
