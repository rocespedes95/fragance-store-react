import { useEffect, useState } from 'react';
import ItemList from "../itemlList/ItemList";
import { useParams } from 'react-router-dom';
import { collection , getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemListContainer = () => {
    
    const [productos ,setProductos]= useState([])
    const [ loading , setLoading]= useState(true)
    const {categoria} = useParams()
    
    console.log (productos)
    useEffect(()=>{
        setLoading(true)
        const productosRef= collection(db ,"productosfirebase")
        getDocs(productosRef)
          .then((resp) =>{
            setProductos((resp.docs).map( (doc) => {
              return{
                ...doc.data(),
                id: doc.id
              }
            }))}
          )
        .finally( ()=> {
          setLoading(false)
        } )
        
    },[categoria])
    
    return (
    <div>
       {
          loading
          ? <h2>Cargando...</h2>
          :<ItemList productos={productos}/>
        }
    </div>
  )
}

export default ItemListContainer

