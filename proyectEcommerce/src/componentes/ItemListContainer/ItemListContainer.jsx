import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = ({ greeting }) => {

  const [products, setproducts] = useState([]);

  const [loading, setloading] = useState(true)

  const {categoryId} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/productos.json');
        const data = await response.json()
        const filteredProducts = categoryId ? data.filter((p) => p.category === categoryId) : data;
        setproducts(filteredProducts)
        
      } catch (error) {
        console.log(error);
      } finally{
        setloading(false)
      }
    }

    fetchData();
  }, [categoryId]);

  console.log(products);
  

  return (

    <div className="container">

      <h1>{greeting}</h1> 

      {loading ? <Spinner/> : <ItemList products={products}/>}


    </div>
  )
}

export default ItemListContainer;
