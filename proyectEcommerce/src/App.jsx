import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import Footer from './componentes/Footer/Footer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <Navbar/>

      <ItemListContainer greeting="bienvenidos a mi negocio"/>
    </>
  )
}

export default App
