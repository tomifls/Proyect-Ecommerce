import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import Footer from './componentes/Footer/Footer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import ItemCount from './componentes/Itemcount/ItemCount'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './componentes/Error/Error'

const App = () => {

  return (
    <>

      <BrowserRouter>
        <Navbar/>
        


          <Routes>
        
            <Route path='/' element={<ItemListContainer/>}/>

            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>

            <Route path='/item/:id' element={<ItemDetailContainer/>}/>

            <Route path='/*' element={<Error/>}/>

          </Routes>
        <Footer/>
      </BrowserRouter>

      
          {/*

          <*/}
      

      
    </>
  )
}

export default App
