import { useEffect, useState } from 'react';
import { pedirDatos } from '../../helpers/pedirDatos';
import ItemList from "../itemlList/ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    
    const [productos ,setProductos]= useState([])
    const [ loading , setLoading]= useState(true)
    const {categoria} = useParams()
    
    useEffect(()=>{
        setLoading(true)
        pedirDatos()
        .then( (res)=>{
            if (categoria){
                setProductos(res.filter(prod => prod.categoria === categoria))
            }
            else {
                setProductos(res)
            }
                
            })
        .catch((error)=>{
            console.log(error)
        })
        .finally( ()=>{
            setLoading(false)
        })
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

