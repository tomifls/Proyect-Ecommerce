import './App.css'
import { useEffect,useState } from 'react'
import Navbar from './componentes/Navbar/Navbar'
import Footer from './componentes/Footer/Footer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import ItemCount from './componentes/Itemcount/ItemCount'
import {BrowserRouter, Routes, Route, renderMatches} from 'react-router-dom'
import Error from './componentes/Error/Error'
import ThemeProvider from './context/ThemeContext/ThemeProvider'
import CartProvider from './context/CartContext/CartProvider'
import Cart from './componentes/Cart/Cart'
import { db } from './main';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import Checkout from './componentes/Checkout/Checkout'


const App = () => {



  const [ products, setProducts ] = useState([]);

  useEffect(() =>{
    const db = getFirestore();

    const q = query(
      collection(db, "item"),
      where("stock", "<=", 60),
    );

    getDocs(q).then((querySnapshot) => {
      if(querySnapshot.size === 0){
        console.log("No hay Resultados");
      } 
      setProducts(querySnapshot.docs.map((doc)=>(
        {
          id: doc.id,...doc.data()
        }))
      );
        
    })
  }, {})
  

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar/>
              <Routes>
          
                <Route path='/' element={<ItemListContainer/>}/>

                <Route path='/category/:categoryId' element={<ItemListContainer/>}/>

                <Route path='/item/:id' element={<ItemDetailContainer/>}/>

                <Route path='/cart' element={<Cart/>}/>

                <Route path='/checkout' element={<Checkout/>}/>

                <Route path='/*' element={<Error/>}/>

              </Routes>
            <Footer/>
          </BrowserRouter>
        </CartProvider>
      
    </>
  )
}

export default App
