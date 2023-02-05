import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({rutaimg, title, descripcion, categoria, precio, stock ,id}) => {
  const [cantidad , setCantidad]= useState(1)
  
  const Navigate = useNavigate()
    
  const handleVolver = () => {
        Navigate(-1)
    }
  const handleAgregar = () => {
      console.log({
        id,
        title,
        stock,
        rutaimg,
        categoria,
        descripcion,
        precio,
        cantidad,
      })
   }

  return (
    <div>
        <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src={rutaimg} />
                 <Card.Body>
                   <Card.Title>{title}</Card.Title>
                   <Card.Text>
                     Categoria: {descripcion}
                   </Card.Text>
                   
                   <Card.Text>
                     Categoria: {categoria}
                   </Card.Text>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                   
                   <ListGroup.Item>${precio}</ListGroup.Item>
                 </ListGroup>
                 <Card.Body>
                 <Button variant="warning" className='botonVolver' onClick={handleVolver}>Volver</Button>
                 <ItemCount 
                 cantidad={cantidad}
                 max = {stock}
                 setCantidad={setCantidad}
                 />
                 </Card.Body>
               </Card>
    </div>
  )
}

export default ItemDetail