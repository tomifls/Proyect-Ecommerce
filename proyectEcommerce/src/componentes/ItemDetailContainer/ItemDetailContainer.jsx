import {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const ItemDetailContainer = () => {

    const [product, setproduct] = useState("");

    const {id} = useParams();

    useEffect(() => {

        const fetchData = async () => {
          try {
            const response = await fetch('/productos.json');
            const data = await response.json();
            const newProduct = data.find(product => product.id === Number(id))
            setproduct(newProduct);
          } catch (error) {
            console.log(error);
          }
        }
    
        fetchData();
        
      }, [id]);

  return (
    <div>

        {product == undefined ? <Spinner/> : <ItemDetail product={product}/>}
    
    </div>
  )
}

export default ItemDetailContainer