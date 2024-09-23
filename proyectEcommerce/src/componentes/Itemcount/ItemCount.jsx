import React, { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
    
    const [count, setCount] = useState(initial);
    
    const decrement = () => {
        if (count > 1) {  // Evita que baje por debajo de 1
            setCount(count - 1);
        }
    }
    
    const increment = () => {
        if (count < stock) {  // Evita que supere el stock disponible
            setCount(count + 1);
        }
    }

    return (
        <div>
            <button onClick={decrement} disabled={stock === 0}>Decrementar</button>
            <p>{count}</p>
            <button onClick={increment} disabled={stock === 0}>Incrementar</button>
            <button 
                onClick={() => onAdd(count)} 
                disabled={stock === 0}> {/* Botón deshabilitado si no hay stock */}
                Agregar al carrito
            </button>

            {/* Mostrar mensaje cuando no hay stock */}
            {stock === 0 && <p>Lo siento, se agotó el stock</p>}
        </div>
    );
}

export default ItemCount;
