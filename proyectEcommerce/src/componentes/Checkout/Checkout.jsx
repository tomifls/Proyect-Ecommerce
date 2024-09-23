import {useState, useContext} from 'react'
import { CartContext } from '../../context/CartContext/CartProvider'
import { getFirestore, collection, addDoc, updateDoc, doc, getDoc, } from 'firebase/firestore'

const Checkout = () => {
    const {cart, getTotal, getTotalProducts, clearCart} = 
    useContext(CartContext);

    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [celular,setCelular] = useState("");
    const [email,setEmail] = useState("");
    const [emailConfirmacion,setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [orderId, setOrderId] = useState("");
    
    const handleForm = (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !celular || !email || !emailConfirmacion) {
            setError("Por Favor Completa Todos Los Campos");
            return; 
        }

        if (email !== emailConfirmacion) {
            setError("Los Emails No Coinciden")
            return;
        }

        const db = getFirestore();

        const order = {
            items: cart.map((product) => ({
                id: product.product.id,
                nombre: product.product.nombre,
                quantity: product.quantity,
                stock: product.stock,
            })),
            total: getTotal(),
            date: new Date(),
            nombre,
            apellido,
            celular,
            email,
        };

        Promise.all(
            order.items.map(async (productOrder) => {
                const productRef = doc(db, "item", productOrder.id);
                const productDoc = await getDoc(productRef);
                const stock = productDoc.data().stock;

                await updateDoc(productRef,{
                    stock: stock - productOrder.quantity
                })
            })
        ).then(() => {
            addDoc(collection(db, "orders"), order)
            .then((docRef) => {
                setOrderId(docRef.id)
                clearCart()
            })
            .catch((error) => {
                alert("Error Añadiendo El documento: ", Error);
                setError("No Se Pudo Generar La Orden, Intentelo Nuevamente")
            })
        })
        .catch((error) => {
            alert("Error En La Actualizacion Del Stock", error);
            setError("No se puede actualizar el Stock, intentelo nuevamente")
        })
    };


    return ( 
    <div>
        <h2>Ingresa tus Datos</h2>
            <div>
                {cart.map((product) => (
                <div key={product.product.id}>
                    <p>{""} {product.product.nombre}</p>
                    <p>{product.product.precio}</p>
                    <hr />
                </div>
                ))}
            </div>

        <form onSubmit={handleForm}>
            
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={(e) => setNombre(e.target.value)} />
            </div>
            
            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" onChange={(e) => setApellido(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Celular</label>
                <input type="number" onChange={(e) => setCelular(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="">Email de Confirmacion</label>
                <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)}/>
            </div>

            <button type='submit'>Generar Orden De Compra</button>

        {error && <p>{error}</p>}
        
        {orderId && (
            <p>
                ¡GRACIAS POR TU COMPRA! Tu numero de Orden Es: {orderId}
                {""}
            </p>
        )}
        </form>
    </div>
    );
};

export default Checkout