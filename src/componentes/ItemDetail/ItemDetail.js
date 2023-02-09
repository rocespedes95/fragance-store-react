import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({rutaimg, title, descripcion, categoria, precio, stock ,id}) => {
  const { agregarAlCarrito, isInCart} = useContext (CartContext)
     
  const [cantidad , setCantidad]= useState(1)
  const Navigate = useNavigate()
    
  const handleVolver = () => {
        Navigate(-1)
    }
  const handleAgregar = () => {
      const itemCart = {
        id,
        title,
        stock,
        rutaimg,
        categoria,
        descripcion,
        precio,
        cantidad,
      }
     agregarAlCarrito(itemCart)
    
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
                 {
                    !isInCart(id)
                       ? <ItemCount 
                       cantidad={cantidad}
                       max = {stock}
                       setCantidad={setCantidad}
                       onAdd = {handleAgregar}
                       />
                       : <Link to="/cart" className='btn btn-success'>Terminar mi compra</Link>
                 }
                 
                 </Card.Body>
               </Card>
    </div>
  )
}

export default ItemDetail