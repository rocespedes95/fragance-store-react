import { useEffect, useState } from 'react';
import { pedirDatos } from '../helpers/pedirDatos';
import ItemList from "../componentes/itemlList/ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    
    const [productos ,setProductos]= useState([])
    
    const {categoria} = useParams()
    
    useEffect(()=>{
        pedirDatos()
        .then( (res)=>{
            if (categoria){
                setProductos(res.filter(prod => prod.categoria=== categoria))
            }
            else {
                setProductos(res)
            }
                
            })
        .catch((error)=>{
            console.log(error)
        })
    },[categoria])
    
    return (
    <div>
        <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer

