import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import {doc , getDoc} from "firebase/firestore"
import { db } from '../../firebase/config'
      
const ItemDetailContainer = () => {
    
        const [item ,setItem] = useState(null)
        
        const {itemId} = useParams()
          
            useEffect(() => { 
                 
              const docRef = doc( db, "productosfirebase",itemId )

              getDoc(docRef)
              .then(doc => {
                setItem({...doc.data(),id:doc.id})
              })
               
              },[itemId])                
                 
    return (
        <div className='oneProduct'>
          {
             item && <ItemDetail {...item}/>
          }
          
        </div>
  )
}

export default ItemDetailContainer